'use client'

import { useState, useMemo } from 'react'
import UniversityCard from '@/components/UniversityCard'
import type { University, Faculty } from '@/lib/supabase'

type Props = {
  universities: University[]
  faculties: Faculty[]
}

const CITIES = ['Все города', 'Стамбул', 'Анкара', 'Анталья', 'Измир']
const PROGRAMS = ['Все программы', 'bachelor', 'master', 'doctoral', 'associate']
const PROGRAM_LABELS: Record<string, string> = {
  'Все программы': 'Все программы',
  bachelor: 'Бакалавр',
  master: 'Магистратура',
  doctoral: 'Докторантура',
  associate: 'Associate',
}

export default function UniversitiesClient({ universities, faculties }: Props) {
  const [search, setSearch] = useState('')
  const [city, setCity] = useState('Все города')
  const [program, setProgram] = useState('Все программы')
  const [lang, setLang] = useState('Все языки')
  const [sortBy, setSortBy] = useState('name')

  const facultiesByUni = useMemo(() => {
    const map: Record<string, Faculty[]> = {}
    for (const f of faculties) {
      if (!map[f.university_id]) map[f.university_id] = []
      map[f.university_id].push(f)
    }
    return map
  }, [faculties])

  const filtered = useMemo(() => {
    let list = [...universities]
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(u =>
        u.name.toLowerCase().includes(q) ||
        u.city?.toLowerCase().includes(q) ||
        u.description?.toLowerCase().includes(q) ||
        u.tags?.some(t => t.toLowerCase().includes(q))
      )
    }
    if (city !== 'Все города') list = list.filter(u => u.city === city)
    if (program !== 'Все программы') list = list.filter(u => facultiesByUni[u.id]?.some(f => f.program === program))
    if (lang === 'English') list = list.filter(u => facultiesByUni[u.id]?.some(f => f.language === 'EN'))
    else if (lang === 'Turkish') list = list.filter(u => facultiesByUni[u.id]?.some(f => f.language === 'TR'))
    if (sortBy === 'price_asc') {
      list.sort((a, b) => {
        const aMin = Math.min(...(facultiesByUni[a.id]?.map(f => f.price_per_year || 99999) || [99999]))
        const bMin = Math.min(...(facultiesByUni[b.id]?.map(f => f.price_per_year || 99999) || [99999]))
        return aMin - bMin
      })
    } else if (sortBy === 'price_desc') {
      list.sort((a, b) => {
        const aMin = Math.min(...(facultiesByUni[a.id]?.map(f => f.price_per_year || 0) || [0]))
        const bMin = Math.min(...(facultiesByUni[b.id]?.map(f => f.price_per_year || 0) || [0]))
        return bMin - aMin
      })
    } else {
      list.sort((a, b) => a.name.localeCompare(b.name))
    }
    return list
  }, [universities, search, city, program, lang, sortBy, facultiesByUni])

  const clearFilters = () => {
    setSearch(''); setCity('Все города'); setProgram('Все программы'); setLang('Все языки'); setSortBy('name')
  }
  const hasFilters = search || city !== 'Все города' || program !== 'Все программы' || lang !== 'Все языки'

  return (
    <div>
      <div className="bg-white border-b border-gray-100 sticky top-[88px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="relative mb-3">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input type="text" value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Поиск университета, специальности, города..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#C8F135] focus:ring-2 focus:ring-[#C8F135]/20 transition-all"/>
            {search && <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">✕</button>}
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <select value={city} onChange={e => setCity(e.target.value)} className="text-sm px-3 py-1.5 rounded-full border border-gray-200 bg-white focus:outline-none focus:border-[#C8F135] cursor-pointer">
              {CITIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <select value={program} onChange={e => setProgram(e.target.value)} className="text-sm px-3 py-1.5 rounded-full border border-gray-200 bg-white focus:outline-none focus:border-[#C8F135] cursor-pointer">
              {PROGRAMS.map(p => <option key={p} value={p}>{PROGRAM_LABELS[p]}</option>)}
            </select>
            <select value={lang} onChange={e => setLang(e.target.value)} className="text-sm px-3 py-1.5 rounded-full border border-gray-200 bg-white focus:outline-none focus:border-[#C8F135] cursor-pointer">
              {['Все языки', 'English', 'Turkish'].map(l => <option key={l} value={l}>{l}</option>)}
            </select>
            <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="text-sm px-3 py-1.5 rounded-full border border-gray-200 bg-white focus:outline-none focus:border-[#C8F135] cursor-pointer">
              <option value="name">По названию</option>
              <option value="price_asc">Цена ↑</option>
              <option value="price_desc">Цена ↓</option>
            </select>
            {hasFilters && <button onClick={clearFilters} className="text-sm px-3 py-1.5 rounded-full text-red-500 border border-red-200 hover:bg-red-50 transition-colors">Сбросить</button>}
            <span className="ml-auto text-sm text-gray-500 font-medium">
              {filtered.length} {filtered.length === 1 ? 'университет' : filtered.length < 5 ? 'университета' : 'университетов'}
            </span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Ничего не найдено</h3>
            <p className="text-gray-400 mb-6">Попробуйте изменить фильтры или поисковый запрос</p>
            <button onClick={clearFilters} className="btn-accent">Сбросить фильтры</button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map(uni => (
              <UniversityCard key={uni.id} university={uni} faculties={facultiesByUni[uni.id] || []} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}