import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const supabaseAdmin = () =>
  createClient(supabaseUrl, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
    auth: { autoRefreshToken: false, persistSession: false },
  })

export type University = {
  id: string
  name: string
  city: string
  description: string | null
  founded_year: number | null
  languages: string[]
  tags: string[]
  cover_image: string | null
  gallery_images: string[]
  created_at: string
}

export type Faculty = {
  id: string
  university_id: string
  name: string
  program: 'bachelor' | 'master' | 'associate'
  language: string | null
  price_per_year: number | null
  created_at: string
}

export type Application = {
  id: string
  university_id: string
  faculty_id: string
  program: string
  full_name: string
  father_name: string | null
  mother_name: string | null
  country: string
  phone: string
  status: string
  created_at: string
}

export type ApplicationDoc = {
  id: string
  application_id: string
  doc_type: string | null
  file_url: string
  created_at: string
}
