import { createClient } from '@/lib/supabase'
import Navbar from '@/components/Navbar'
import UniversitiesClient from './UniversitiesClient'

export const metadata = {
  title: 'Все университеты Турции — UPEV Academy',
  description: '30+ частных университетов Турции. Фильтры по городу, специальности, языку обучения. Поступление без экзаменов.',
}

export default async function UniversitiesPage() {
  const supabase = createClient()

  const [{ data: universities }, { data: faculties }] = await Promise.all([
    supabase.from('universities').select('*').order('name'),
    supabase.from('faculties').select('*'),
  ])

  return (
    <>
      <Navbar />
      <div
        className="py-12 px-6 text-white"
        style={{ background: 'linear-gradient(135deg, #1A1A2E 0%, #16213E 100%)' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <span className="text-xs font-semibold px-3 py-1 rounded-full"
              style={{ background: 'rgba(200,241,53,0.15)', color: '#C8F135', border: '1px solid rgba(200,241,53,0.3)' }}>
              🎓 {universities?.length || 0}+ университетов
            </span>
            <span className="text-xs font-semibold px-3 py-1 rounded-full"
              style={{ background: 'rgba(200,241,53,0.15)', color: '#C8F135', border: '1px solid rgba(200,241,53,0.3)' }}>
              ✅ Без экзаменов
            </span>
            <span className="text-xs font-semibold px-3 py-1 rounded-full"
              style={{ background: 'rgba(200,241,53,0.15)', color: '#C8F135', border: '1px solid rgba(200,241,53,0.3)' }}>
              💰 Наши услуги бесплатны
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-2">
            Университеты <span style={{ color: '#C8F135' }}>Турции</span>
          </h1>
          <p className="text-gray-300 text-base max-w-2xl">
            Все наши партнёрские университеты. Выбери подходящий — мы поможем поступить бесплатно.
          </p>
        </div>
      </div>
      <UniversitiesClient
        universities={universities || []}
        faculties={faculties || []}
      />
    </>
  )
}