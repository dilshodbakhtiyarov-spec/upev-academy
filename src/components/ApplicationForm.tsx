'use client'

import { useState } from 'react'
import type { Faculty } from '@/lib/supabase'

type Props = {
  universityId: string
  universityName: string
  faculties: Faculty[]
}

const PROGRAM_LABELS: Record<string, string> = {
  bachelor: 'Бакалавр',
  master: 'Магистратура',
  associate: 'Associate',
}

const DOCS_BY_PROGRAM: Record<string, { label: string; key: string }[]> = {
  bachelor: [
    { label: 'Аттестат или диплом колледжа', key: 'diploma' },
    { label: 'Загранпаспорт', key: 'passport' },
    { label: 'Фото 3×4', key: 'photo' },
  ],
  master: [
    { label: 'Диплом бакалавра + транскрипты', key: 'diploma' },
    { label: 'Загранпаспорт', key: 'passport' },
    { label: 'Фото 3×4', key: 'photo' },
  ],
  associate: [
    { label: 'Диплом бакалавра + транскрипты', key: 'diploma' },
    { label: 'Загранпаспорт', key: 'passport' },
    { label: 'Фото 3×4', key: 'photo' },
  ],
}

type FormState = {
  full_name: string
  father_name: string
  mother_name: string
  country: string
  phone: string
  faculty_id: string
  program: string
}

const COUNTRIES = ['Казахстан', 'Узбекистан', 'Россия', 'Кыргызстан', 'Другая']

export default function ApplicationForm({ universityId, universityName, faculties }: Props) {
  const [activeTab, setActiveTab] = useState<'bachelor' | 'master' | 'associate'>('bachelor')
  const [form, setForm] = useState<FormState>({
    full_name: '',
    father_name: '',
    mother_name: '',
    country: '',
    phone: '',
    faculty_id: '',
    program: 'bachelor',
  })
  const [files, setFiles] = useState<Record<string, File | null>>({
    diploma: null,
    passport: null,
    photo: null,
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const filteredFaculties = faculties.filter((f) => f.program === activeTab)
  const docs = DOCS_BY_PROGRAM[activeTab] ?? DOCS_BY_PROGRAM.bachelor

  const handleTab = (tab: 'bachelor' | 'master' | 'associate') => {
    setActiveTab(tab)
    setForm((prev) => ({ ...prev, program: tab, faculty_id: '' }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleFile = (key: string, file: File | null) => {
    setFiles((prev) => ({ ...prev, [key]: file }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const data = new FormData()
      data.append('university_id', universityId)
      data.append('university_name', universityName)
      Object.entries(form).forEach(([k, v]) => data.append(k, v))
      Object.entries(files).forEach(([key, file]) => {
        if (file) data.append(key, file)
      })

      const res = await fetch('/api/applications', { method: 'POST', body: data })
      const json = await res.json()

      if (!res.ok) throw new Error(json.error ?? 'Ошибка при отправке')
      setSuccess(true)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Ошибка при отправке')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ backgroundColor: '#C8F135' + '20' }}
        >
          <svg className="w-7 h-7" style={{ color: '#C8F135' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-bold text-xl text-gray-900 mb-2">Заявка отправлена!</h3>
        <p className="text-gray-500 text-sm">
          Мы получили ваши документы и свяжемся с вами в WhatsApp в течение 24 часов.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b border-gray-100">
        {(['bachelor', 'master', 'associate'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => handleTab(tab)}
            className={`flex-1 py-3 text-sm font-medium transition-colors ${
              activeTab === tab
                ? 'border-b-2 text-gray-900'
                : 'text-gray-400 hover:text-gray-600'
            }`}
            style={activeTab === tab ? { borderColor: '#C8F135', color: '#C8F135' } : {}}
          >
            {PROGRAM_LABELS[tab]}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="p-5 flex flex-col gap-4">
        {/* Personal info */}
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Имя и фамилия *</label>
          <input
            name="full_name"
            value={form.full_name}
            onChange={handleChange}
            required
            placeholder="Иванов Иван"
            className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#C8F135] transition-colors"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Имя отца</label>
            <input
              name="father_name"
              value={form.father_name}
              onChange={handleChange}
              placeholder="Иванович"
              className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#C8F135] transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Имя матери</label>
            <input
              name="mother_name"
              value={form.mother_name}
              onChange={handleChange}
              placeholder="Мария"
              className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#C8F135] transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Страна *</label>
          <select
            name="country"
            value={form.country}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#C8F135] transition-colors bg-white"
          >
            <option value="">Выберите страну</option>
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">WhatsApp / Телефон *</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="+7 777 123 45 67"
            className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#C8F135] transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Факультет *</label>
          <select
            name="faculty_id"
            value={form.faculty_id}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#C8F135] transition-colors bg-white"
          >
            <option value="">Выберите факультет</option>
            {filteredFaculties.map((f) => (
              <option key={f.id} value={f.id}>
                {f.name}{f.price_per_year ? ` — $${f.price_per_year.toLocaleString()}/год` : ''}
              </option>
            ))}
          </select>
          {filteredFaculties.length === 0 && (
            <p className="text-xs text-gray-400 mt-1">Нет факультетов для этой программы</p>
          )}
        </div>

        {/* Documents */}
        <div>
          <p className="text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">Документы</p>
          <div className="flex flex-col gap-2">
            {docs.map((doc) => (
              <div key={doc.key}>
                <label className="block text-xs font-medium text-gray-600 mb-1">{doc.label}</label>
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => handleFile(doc.key, e.target.files?.[0] ?? null)}
                  className="w-full text-xs text-gray-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-medium file:text-white file:cursor-pointer"
                  style={{ '--file-bg': '#C8F135' } as React.CSSProperties}
                />
              </div>
            ))}
          </div>
        </div>

        {error && (
          <p className="text-sm text-red-500 bg-red-50 rounded-lg px-3 py-2">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-xl font-bold text-sm transition-all hover:opacity-90 disabled:opacity-60"
          style={{ backgroundColor: '#C8F135', color: '#1A1A2E' }}
        >
          {loading ? 'Отправляем...' : 'Отправить заявку'}
        </button>

        <a
          href="https://calendly.com/upev-academy"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 rounded-xl font-semibold text-sm text-center transition-all hover:bg-gray-50 border border-gray-200 text-gray-700"
        >
          Записаться на встречу
        </a>

        {/* Trust blocks */}
        <div className="rounded-xl p-3 text-xs font-medium" style={{ backgroundColor: '#C8F135' + '20', color: '#1A1A2E' }}>
          🎓 <strong>Наши услуги бесплатны для студентов</strong> — агентство получает комиссию от университета
        </div>

        <div className="rounded-xl p-3 text-xs font-medium" style={{ backgroundColor: '#C8F135' + '20', color: '#1A1A2E' }}>
          📱 <strong>Документы придут нам в WhatsApp</strong> — ответим за 24 часа
        </div>
      </form>
    </div>
  )
}
