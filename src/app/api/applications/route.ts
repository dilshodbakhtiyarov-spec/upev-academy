import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()

    const university_id = formData.get('university_id') as string
    const university_name = formData.get('university_name') as string
    const faculty_id = formData.get('faculty_id') as string
    const program = formData.get('program') as string
    const full_name = formData.get('full_name') as string
    const father_name = formData.get('father_name') as string | null
    const mother_name = formData.get('mother_name') as string | null
    const country = formData.get('country') as string
    const phone = formData.get('phone') as string

    if (!university_id || !full_name || !phone || !country) {
      return NextResponse.json({ error: 'Заполните обязательные поля' }, { status: 400 })
    }

    const admin = supabaseAdmin()

    // Upload files to Supabase Storage
    const docKeys = ['diploma', 'passport', 'photo']
    const uploadedDocs: { doc_type: string; file_url: string }[] = []

    for (const key of docKeys) {
      const file = formData.get(key) as File | null
      if (!file || typeof file === 'string') continue

      const arrayBuffer = await file.arrayBuffer()
      const buffer = Buffer.from(arrayBuffer)
      const ext = file.name.split('.').pop() ?? 'bin'
      const path = `${university_id}/${Date.now()}_${key}.${ext}`

      const { error: uploadError } = await admin.storage
        .from('documents')
        .upload(path, buffer, { contentType: file.type, upsert: false })

      if (uploadError) {
        console.error('Upload error:', uploadError)
        continue
      }

      const { data: publicUrlData } = admin.storage
        .from('documents')
        .getPublicUrl(path)

      uploadedDocs.push({ doc_type: key, file_url: publicUrlData.publicUrl })
    }

    // Save application
    const { data: application, error: appError } = await admin
      .from('applications')
      .insert({
        university_id,
        faculty_id: faculty_id || null,
        program,
        full_name,
        father_name: father_name || null,
        mother_name: mother_name || null,
        country,
        phone,
        status: 'new',
      })
      .select('id')
      .single()

    if (appError || !application) {
      console.error('Application insert error:', appError)
      return NextResponse.json({ error: 'Ошибка при сохранении заявки' }, { status: 500 })
    }

    // Save document links
    if (uploadedDocs.length > 0) {
      await admin.from('application_docs').insert(
        uploadedDocs.map((doc) => ({ ...doc, application_id: application.id }))
      )
    }

    // Get faculty name for webhook
    let facultyName = ''
    if (faculty_id) {
      const { data: faculty } = await admin
        .from('faculties')
        .select('name')
        .eq('id', faculty_id)
        .single()
      facultyName = faculty?.name ?? ''
    }

    // Send n8n webhook
    const webhookUrl = process.env.N8N_WEBHOOK_URL
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            applicant_name: full_name,
            university: university_name,
            faculty: facultyName,
            program,
            country,
            phone,
            father_name: father_name || '',
            mother_name: mother_name || '',
            docs: uploadedDocs.map((d) => d.file_url),
          }),
        })
      } catch (webhookError) {
        console.error('Webhook error:', webhookError)
        // Non-fatal: application is already saved
      }
    }

    return NextResponse.json({ success: true, applicationId: application.id })
  } catch (err) {
    console.error('Unexpected error:', err)
    return NextResponse.json({ error: 'Внутренняя ошибка сервера' }, { status: 500 })
  }
}
