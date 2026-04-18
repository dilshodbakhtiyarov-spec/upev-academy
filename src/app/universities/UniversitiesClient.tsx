'use client'

import { useState, useMemo } from 'react'
import type { University, Faculty } from '@/lib/supabase'
import UniversityCard from '@/components/UniversityCard'

type Props = {
  universities: University[]
  faculties: Faculty[]
}

const CITIES = ['Все', 'Стамбул', 'Анкара', 'Анталья', 'Измир']
const LANGUAGES = ['Все', 'EN', 'TR']
const PROGRAMS = [
  { value: '', label: 'Все программы' },
  { value: 'bachelor', label: 'Бакалавр' },
  { value: 'master', label: 'Магистратура' },
  { value: 'associate', label: 'Associate' },
]
const PRICE_RANGES = [
  { value: '', label: 'Любая цена' },
  { value: 'low', label: 'До $5 000' },
  { value: 'mid', label: '$5 000 — $10 000' },
  { value: 'high', label: 'От $10 000' },
]

export default function UniversitiesClient({ universities, faculties }: Props) {
  const [city, setCity] = useState('Все')
  const [language, setLanguage] = useState('Все')
  const [program, setProgram] = useState('')
  const [price, setPrice] = useState('')
  const [search, setSearch] = useState('')

  const facultiesByUniversity = useMemo(() => {
    const map: Record<string, Faculty[]> = {}
    for (const f of faculties) {
      if (!map[f.university_id]) map[f.university_id] = []
      map[f.university_id].push(f)
    }
    return map
  }, [faculties])

  const filtered = useMemo(() => {
    return universities.filter((u) => {
      // City filter
      if (city !== 'Все' && u.city !== city) return false

      // Search
      if (search && !u.name.toLowerCase().includes(search.toLowerCase())) return false

      const uFaculties = facultiesByUniversity[u.id] ?? []

      // Language filter
      if (language !== 'Все') {
        const hasLang = uFaculties.some(
          (f) => f.language?.toUpperCase().includes(language)
        )
        if (!hasLang) return false
      }

      // Program filter
      if (program) {
        const hasProg = uFaculties.some((f) => f.program === program)
        if (!hasProg) return false
      }

      // Price filter
      if (price) {
        const prices = uFaculties
          .filter((f) => f.price_per_year)
          .map((f) => f.price_per_year!)
        if (prices.length === 0) return price === ''
        const min = Math.min(...prices)
        if (price === 'low' && min >= 5000) return false
        if (price === 'mid' && (min < 5000 || min > 10000)) return false
        if (price === 'high' && min <= 10000) return false
      }

      return true
    })
  }, [universities, facultiesByUniversity, city, language, program, price, search])

  return (
    <div>
      {/* Filters */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {/* Search */}
          <input
            type="text"
            placeholder="Поиск по названию..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="lg:col-span-2 px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#1D9E75] transition-colors"
          />

          {/* City */}
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#1D9E75] transition-colors bg-white"
          >
            {CITIES.map((c) => (
              <option key={c} value={c}>{c === 'Все' ? 'Все города' : c}</option>
            ))}
          </select>

          {/* Program */}
          <select
            value={program}
            onChange={(e) => setProgram(e.target.value)}
            className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#1D9E75] transition-colors bg-white"
          >
            {PROGRAMS.map((p) => (
              <option key={p.value} value={p.value}>{p.label}</option>
            ))}
          </select>

          {/* Price */}
          <select
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#1D9E75] transition-colors bg-white"
          >
            {PRICE_RANGES.map((p) => (
              <option key={p.value} value={p.value}>{p.label}</option>
            ))}
          </select>
        </div>

        {/* Language toggle */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-xs text-gray-500 font-medium">Язык обучения:</span>
          <div className="flex gap-1">
            {LANGUAGES.map((l) => (
              <button
                key={l}
                onClick={() => setLanguage(l)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  language === l
                    ? 'text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                style={language === l ? { backgroundColor: '#1D9E75' } : {}}
              >
                {l}
              </button>
            ))}
          </div>
          <span className="ml-auto text-xs text-gray-400">
            Найдено: <strong className="text-gray-700">{filtered.length}</strong>
          </span>
        </div>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <div className="text-5xl mb-4">🔍</div>
          <p className="text-lg font-medium">Ничего не найдено</p>
          <p className="text-sm mt-1">Попробуйте изменить фильтры</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((u) => (
            <UniversityCard
              key={u.id}
              university={u}
              faculties={facultiesByUniversity[u.id] ?? []}
            />
          ))}
        </div>
      )}
    </div>
  )
}
