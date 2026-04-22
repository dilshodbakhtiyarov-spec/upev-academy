import { supabase } from '@/lib/supabase'
import type { Faculty } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import FacultyTable from '@/components/FacultyTable'
import ApplicationForm from '@/components/ApplicationForm'

export const revalidate = 60

type Props = { params: { id: string } }

export async function generateMetadata({ params }: Props) {
  const { data } = await supabase
    .from('universities')
    .select('name, city, description')
    .eq('id', params.id)
    .single()
  if (!data) return { title: 'Университет | UPEV Academy' }
  return {
    title: `${data.name} — ${data.city} | UPEV Academy`,
    description: data.description ?? undefined,
  }
}

const DOCS_BACHELOR = [
  'Аттестат или диплом колледжа (если в 11 классе — транскрипты)',
  'Загранпаспорт',
  'Фото 3×4',
]
const DOCS_NOTE = 'Имя отца и матери — указывается в форме, документ не нужен'
const DOCS_MASTER = ['Диплом бакалавра + транскрипты', 'Загранпаспорт', 'Фото 3×4']

export default async function UniversityPage({ params }: Props) {
  const [{ data: university }, { data: faculties }] = await Promise.all([
    supabase.from('universities').select('*').eq('id', params.id).single(),
    supabase.from('faculties').select('*').eq('university_id', params.id).order('program').order('price_per_year'),
  ])
  if (!university) notFound()

  const images = [university.cover_image, ...(university.gallery_images || [])].filter(Boolean) as string[]
  const minPrice = faculties?.length
    ? Math.min(...faculties.filter((f: Faculty) => f.price_per_year).map((f: Faculty) => f.price_per_year!))
    : null

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 pt-4 pb-2">
        <nav className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-gray-600 transition-colors">Главная</Link>
          <span>›</span>
          <Link href="/universities" className="hover:text-gray-600 transition-colors">Университеты</Link>
          <span>›</span>
          <span className="text-gray-700 font-medium">{university.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2 space-y-6">

            {/* Gallery */}
            <div className="grid grid-cols-2 gap-2 rounded-2xl overflow-hidden" style={{ height: '360px' }}>
              <div className="relative col-span-1 row-span-2">
                {images[0] ? (
                  <Image src={images[0]} alt={university.name} fill className="object-cover" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#1A1A2E] to-[#16213E] flex items-center justify-center">
                    <span className="text-6xl">🎓</span>
                  </div>
                )}
              </div>
              <div className="relative">
                {images[1] ? <Image src={images[1]} alt="" fill className="object-cover" /> : <div className="w-full h-full bg-gray-200"/>}
              </div>
              <div className="relative">
                {images[2] ? <Image src={images[2]} alt="" fill className="object-cover" /> : <div className="w-full h-full bg-gray-100"/>}
              </div>
            </div>

            {/* Header */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
              <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                <div>
                  <h1 className="text-2xl font-black text-gray-900 mb-2">{university.name}</h1>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                    <span>📍 {university.city}, Турция</span>
                    {university.founded_year && <span>📅 Основан в {university.founded_year}</span>}
                    {university.languages && <span>🌐 {university.languages.join(', ')}</span>}
                  </div>
                </div>
                {minPrice && (
                  <div className="text-right">
                    <div className="text-xs text-gray-400">от</div>
                    <div className="text-2xl font-black" style={{ color: '#C8F135' }}>${minPrice.toLocaleString()}</div>
                    <div className="text-xs text-gray-400">в год</div>
                  </div>
                )}
              </div>
              {university.tags && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {university.tags.map((tag: string) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full font-semibold"
                          style={{ background: '#f0fbe0', color: '#5a8a0a', border: '1px solid #d4f06a' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              {university.description && (
                <p className="text-gray-600 leading-relaxed">{university.description}</p>
              )}
            </div>

            {/* Faculty Table */}
            {faculties && faculties.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-100 p-6" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                <h2 className="text-lg font-bold text-gray-900 mb-4">Программы и стоимость</h2>
                <FacultyTable faculties={faculties} />
              </div>
            )}

            {/* Documents */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
              <h2 className="text-lg font-bold text-gray-900 mb-4">Необходимые документы</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3"
                       style={{ background: '#1A1A2E', color: '#C8F135' }}>Бакалавр</div>
                  <ul className="space-y-2">
                    {DOCS_BACHELOR.map((d: string) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-green-500 mt-0.5">✓</span> {d}
                      </li>
                    ))}
                    <li className="flex items-start gap-2 text-sm text-gray-400 mt-2">
                      <span className="mt-0.5">ℹ</span> {DOCS_NOTE}
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3"
                       style={{ background: '#1A1A2E', color: '#C8F135' }}>Магистратура / Associate</div>
                  <ul className="space-y-2">
                    {DOCS_MASTER.map((d: string) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-green-500 mt-0.5">✓</span> {d}
                      </li>
                    ))}
                    <li className="flex items-start gap-2 text-sm text-gray-400 mt-2">
                      <span className="mt-0.5">ℹ</span> {DOCS_NOTE}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Why us */}
            <div className="rounded-2xl p-6 text-white" style={{ background: 'linear-gradient(135deg, #1A1A2E, #16213E)' }}>
              <h2 className="text-lg font-bold mb-4">Почему поступать через UPEV Academy?</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { icon: '💰', title: 'Бесплатно', desc: 'Наши услуги полностью бесплатны для студентов' },
                  { icon: '⚡', title: 'Быстро', desc: 'Письмо о зачислении за 1–3 недели' },
                  { icon: '✅', title: 'Гарантия', desc: '100% результат зачисления' },
                  { icon: '🤝', title: 'Поддержка', desc: 'Помогаем до прилёта и после' },
                ].map((item: { icon: string; title: string; desc: string }) => (
                  <div key={item.title} className="text-center">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="font-bold text-sm mb-1" style={{ color: '#C8F135' }}>{item.title}</div>
                    <div className="text-xs text-gray-400">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky form */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
                   style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
                <div className="p-4 text-white text-center" style={{ background: 'linear-gradient(135deg, #1A1A2E, #16213E)' }}>
                  <div className="text-xs font-semibold mb-1" style={{ color: '#C8F135' }}>БЕСПЛАТНАЯ ЗАЯВКА</div>
                  <div className="font-bold">Поступить в {university.name}</div>
                  <div className="text-xs text-gray-400 mt-1">Ответим в течение 24 часов</div>
                </div>
                <div className="p-4">
                  <ApplicationForm
                    universityId={university.id}
                    universityName={university.name}
                    faculties={faculties || []}
                  />
                </div>
              </div>
              <a href="https://wa.me/77070655014" target="_blank" rel="noopener noreferrer"
                 className="flex items-center justify-center gap-2 w-full mt-3 py-3 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
                 style={{ background: '#25D366', color: 'white' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Написать в WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}