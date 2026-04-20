import Link from 'next/link'
import Image from 'next/image'
import type { University, Faculty } from '@/lib/supabase'

type Props = {
  university: University
  faculties?: Faculty[]
}

const PROGRAM_LABELS: Record<string, string> = {
  bachelor: 'Бакалавр',
  master: 'Магистратура',
  associate: 'Associate',
}

export default function UniversityCard({ university, faculties = [] }: Props) {
  const minPrice = faculties.length
    ? Math.min(...faculties.filter((f) => f.price_per_year).map((f) => f.price_per_year!))
    : null

  const topFaculties = faculties.slice(0, 3)

  return (
    <Link
      href={`/universities/${university.id}`}
      className="group block bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
    >
      {/* Cover image */}
      <div className="relative h-48 bg-gray-100 overflow-hidden">
        {university.cover_image ? (
          <Image
            src={university.cover_image}
            alt={university.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
        )}
        {/* City badge */}
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium px-2.5 py-1 rounded-full">
          📍 {university.city}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-gray-900 text-lg leading-tight mb-1 group-hover:text-[#C8F135] transition-colors">
          {university.name}
        </h3>

        {minPrice && (
          <p className="text-sm text-gray-500 mb-3">
            от <span className="font-semibold text-gray-800">${minPrice.toLocaleString()}</span> / год
          </p>
        )}

        {/* Top faculties */}
        {topFaculties.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {topFaculties.map((f) => (
              <span
                key={f.id}
                className="text-xs px-2 py-0.5 rounded-full bg-gray-50 border border-gray-200 text-gray-600"
              >
                {f.name}
              </span>
            ))}
          </div>
        )}

        {/* Tags */}
        {university.tags && university.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {university.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full text-white font-medium"
                style={{ backgroundColor: '#1A1A2E' }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div
          className="w-full text-center py-2 rounded-lg text-sm font-bold transition-opacity hover:opacity-90"
          style={{ backgroundColor: '#C8F135', color: '#1A1A2E' }}
        >
          Подробнее →
        </div>
      </div>
    </Link>
  )
}
