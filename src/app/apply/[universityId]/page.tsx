import { supabase } from '@/lib/supabase'
import type { University, Faculty } from '@/lib/supabase'
import { notFound, redirect } from 'next/navigation'
import Navbar from '@/components/Navbar'
import ApplicationForm from '@/components/ApplicationForm'
import Link from 'next/link'

type Props = { params: { universityId: string } }

export default async function ApplyPage({ params }: Props) {
  const [{ data: university }, { data: faculties }] = await Promise.all([
    supabase.from('universities').select('*').eq('id', params.universityId).single(),
    supabase.from('faculties').select('*').eq('university_id', params.universityId).order('program'),
  ])

  if (!university) notFound()

  const u = university as University
  const facs = (faculties as Faculty[]) ?? []

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-2xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-gray-600 transition-colors">Главная</Link>
          <span>›</span>
          <Link href="/universities" className="hover:text-gray-600 transition-colors">Университеты</Link>
          <span>›</span>
          <Link href={`/universities/${u.id}`} className="hover:text-gray-600 transition-colors">{u.name}</Link>
          <span>›</span>
          <span className="text-gray-700 font-medium">Заявка</span>
        </nav>

        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Подать заявку</h1>
          <p className="text-gray-500">
            {u.name} · {u.city}
          </p>
        </div>

        <ApplicationForm
          universityId={u.id}
          universityName={u.name}
          faculties={facs}
        />
      </div>
    </div>
  )
}
