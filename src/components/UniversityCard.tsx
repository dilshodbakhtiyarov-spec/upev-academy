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
  doctoral: 'Докторантура',
  associate: 'Associate',
}

export default function UniversityCard({ university, faculties = [] }: Props) {
  const minPrice = faculties.length
    ? Math.min(...faculties.filter((f) => f.price_per_year).map((f) => f.price_per_year!))
    : null

  const programs = [...new Set(faculties.map(f => f.program))].slice(0, 3)
  const langs = [...new Set(faculties.map(f => f.language))].filter(Boolean)
  const hasEnglish = langs.includes('EN')

  return (
    <Link
      href={`/universities/${university.id}`}
      className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden card-hover"
      style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
    >
      {/* Cover image */}
      <div className="relative h-52 bg-gray-100 overflow-hidden">
        {university.cover_image ? (
          <Image
            src={university.cover_image}
            alt={university.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#1A1A2E] to-[#16213E] flex items-center justify-center">
            <span className="text-4xl">🎓</span>
          </div>
        )}
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        
        {/* City badge */}
        <div className="absolute top-3 left-3">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full text-white backdrop-blur-sm"
                style={{ background: 'rgba(0,0,0,0.45)' }}>
            📍 {university.city}
          </span>
        </div>

        {/* English badge */}
        {hasEnglish && (
          <div className="absolute top-3 right-3">
            <span className="text-xs font-bold px-2.5 py-1 rounded-full"
                  style={{ background: '#C8F135', color: '#1A1A2E' }}>
              EN
            </span>
          </div>
        )}

        {/* Price badge bottom */}
        {minPrice && (
          <div className="absolute bottom-3 right-3">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full text-white"
                  style={{ background: 'rgba(200,241,53,0.2)', border: '1px solid rgba(200,241,53,0.5)' }}>
              от ${minPrice.toLocaleString()}/год
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-bold text-gray-900 text-base leading-snug mb-2 group-hover:text-[#1A1A2E] transition-colors line-clamp-2">
          {university.name}
        </h3>

        {/* Tags */}
        {university.tags && university.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {university.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full font-medium"
                style={{ background: '#f0fbe0', color: '#5a8a0a' }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Programs */}
        {programs.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {programs.map((prog) => (
              <span key={prog} className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 font-medium">
                {PROGRAM_LABELS[prog] || prog}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-50">
          <span className="text-xs text-gray-400">
            {faculties.length} программ
          </span>
          <span className="text-xs font-semibold flex items-center gap-1"
                style={{ color: '#C8F135' }}>
            Подробнее →
          </span>
        </div>
      </div>
    </Link>
  )
}
