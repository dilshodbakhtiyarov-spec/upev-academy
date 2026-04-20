import { supabase } from '@/lib/supabase'
import type { University, Faculty } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import FacultyTable from '@/components/FacultyTable'
import ApplicationForm from '@/components/ApplicationForm'
import AiChatButton from '@/components/AiChatButton'

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
const DOCS_MASTER = [
  'Диплом бакалавра + транскрипты',
  'Загранпаспорт',
  'Фото 3×4',
]

const EXTRA_SERVICES = [
  { icon: '✈️', title: 'Встреча в аэропорту', desc: 'Встретим и доставим до места проживания' },
  { icon: '🏠', title: 'Помощь с жильём', desc: 'Общежитие или квартира рядом с вузом' },
  { icon: '🛂', title: 'Виза и ВНЖ', desc: 'Полное сопровождение по документам' },
  { icon: '📝', title: 'Перевод документов', desc: 'Нотариальный перевод на турецкий' },
]

export default async function UniversityPage({ params }: Props) {
  const [{ data: university }, { data: faculties }] = await Promise.all([
    supabase.from('universities').select('*').eq('id', params.id).single(),
    supabase.from('faculties').select('*').eq('university_id', params.id).order('program'),
  ])

  if (!university) notFound()

  const u = university as University
  const facs = (faculties as Faculty[]) ?? []

  const hasBachelor = facs.some((f) => f.program === 'bachelor')
  const hasMaster = facs.some((f) => f.program === 'master' || f.program === 'associate')
  const gallery = u.gallery_images ?? []

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-gray-600 transition-colors">Главная</Link>
          <span>›</span>
          <Link href="/universities" className="hover:text-gray-600 transition-colors">Университеты</Link>
          <span>›</span>
          <span className="text-gray-700 font-medium">{u.name}</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* LEFT — main content */}
          <div className="lg:col-span-2 flex flex-col gap-8">

            {/* Gallery */}
            <div className="grid grid-cols-3 gap-3 rounded-2xl overflow-hidden h-64 sm:h-80">
              <div className="col-span-2 relative bg-gray-100">
                {u.cover_image ? (
                  <Image src={u.cover_image} alt={u.name} fill className="object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                    <svg className="w-20 h-20 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-3">
                {[0, 1].map((i) => (
                  <div key={i} className="flex-1 relative bg-gray-100 rounded-none overflow-hidden">
                    {gallery[i] ? (
                      <Image src={gallery[i]} alt={`${u.name} ${i + 1}`} fill className="object-cover" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Header */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">{u.name}</h1>

              {/* Meta */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {u.city}, Турция
                </span>
                {u.founded_year && (
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Основан в {u.founded_year}
                  </span>
                )}
                {u.languages && u.languages.length > 0 && (
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                    {u.languages.join(', ')}
                  </span>
                )}
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {[
                  { label: '✅ Без экзаменов', bg: '#C8F135', fg: '#1A1A2E' },
                  { label: '🎓 Erasmus+', bg: '#1A1A2E', fg: '#FFFFFF' },
                  { label: '🎁 Наши услуги бесплатны', bg: '#C8F135', fg: '#1A1A2E' },
                ].map((b) => (
                  <span
                    key={b.label}
                    className="px-3 py-1 rounded-full text-xs font-bold"
                    style={{ backgroundColor: b.bg, color: b.fg }}
                  >
                    {b.label}
                  </span>
                ))}
                {u.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-white text-xs font-semibold"
                    style={{ backgroundColor: '#1A1A2E' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {u.description && (
                <p className="mt-5 text-gray-600 leading-relaxed">{u.description}</p>
              )}
            </div>

            {/* Faculties */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Факультеты и специальности</h2>
              <FacultyTable faculties={facs} />
            </div>

            {/* Documents */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Необходимые документы</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {hasBachelor && (
                  <div>
                    <p className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <span
                        className="px-2 py-0.5 rounded-md text-white text-xs"
                        style={{ backgroundColor: '#1A1A2E' }}
                      >Бакалавр</span>
                    </p>
                    <ul className="flex flex-col gap-2">
                      {DOCS_BACHELOR.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm text-gray-600">
                          <span style={{ color: '#1A1A2E' }} className="mt-0.5 flex-shrink-0 font-bold">✓</span>
                          {d}
                        </li>
                      ))}
                      <li className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="mt-0.5 flex-shrink-0">ℹ</span>
                        Имя отца и матери — указывается в форме, документ не нужен
                      </li>
                    </ul>
                  </div>
                )}
                {hasMaster && (
                  <div>
                    <p className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <span
                        className="px-2 py-0.5 rounded-md text-white text-xs"
                        style={{ backgroundColor: '#1A1A2E' }}
                      >Магистратура / Associate</span>
                    </p>
                    <ul className="flex flex-col gap-2">
                      {DOCS_MASTER.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm text-gray-600">
                          <span style={{ color: '#1A1A2E' }} className="mt-0.5 flex-shrink-0 font-bold">✓</span>
                          {d}
                        </li>
                      ))}
                      <li className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="mt-0.5 flex-shrink-0">ℹ</span>
                        Имя отца и матери — указывается в форме, документ не нужен
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Extra services */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Дополнительные услуги</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {EXTRA_SERVICES.map((s) => (
                  <div key={s.title} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50">
                    <span className="text-2xl">{s.icon}</span>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">{s.title}</p>
                      <p className="text-xs text-gray-500">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — sticky sidebar form */}
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <ApplicationForm
                universityId={u.id}
                universityName={u.name}
                faculties={facs}
              />
            </div>
          </div>
        </div>
      </div>

      <AiChatButton />
    </div>
  )
}
