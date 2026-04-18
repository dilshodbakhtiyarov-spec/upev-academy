import { supabase } from '@/lib/supabase'
import type { University, Faculty } from '@/lib/supabase'
import Navbar from '@/components/Navbar'
import UniversitiesClient from './UniversitiesClient'
import AiChatButton from '@/components/AiChatButton'

export const revalidate = 60

export default async function UniversitiesPage() {
  const [{ data: universities }, { data: faculties }] = await Promise.all([
    supabase.from('universities').select('*').order('name'),
    supabase.from('faculties').select('*'),
  ])

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Университеты Турции</h1>
          <p className="text-gray-500">
            {universities?.length ?? 0} университетов — выбирай, фильтруй, подавай заявку
          </p>
        </div>
        <UniversitiesClient
          universities={(universities as University[]) ?? []}
          faculties={(faculties as Faculty[]) ?? []}
        />
      </div>
      <AiChatButton />
    </div>
  )
}
