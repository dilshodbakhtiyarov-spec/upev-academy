'use client'

import type { Faculty } from '@/lib/supabase'

type Props = {
  faculties: Faculty[]
  selectedProgram?: string
  onSelectFaculty?: (faculty: Faculty) => void
  selectedFacultyId?: string
}

const PROGRAM_LABELS: Record<string, string> = {
  bachelor: 'Бакалавр',
  master: 'Магистратура',
  associate: 'Associate',
}

const PROGRAM_COLORS: Record<string, string> = {
  bachelor: 'bg-blue-50 text-blue-700 border-blue-200',
  master: 'bg-purple-50 text-purple-700 border-purple-200',
  associate: 'bg-orange-50 text-orange-700 border-orange-200',
}

export default function FacultyTable({
  faculties,
  selectedProgram,
  onSelectFaculty,
  selectedFacultyId,
}: Props) {
  const filtered = selectedProgram
    ? faculties.filter((f) => f.program === selectedProgram)
    : faculties

  if (filtered.length === 0) {
    return (
      <p className="text-gray-400 text-sm py-4">
        Нет факультетов для выбранной программы.
      </p>
    )
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-100">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-100">
            <th className="text-left px-4 py-3 font-semibold text-gray-600">Факультет</th>
            <th className="text-left px-4 py-3 font-semibold text-gray-600">Программа</th>
            <th className="text-left px-4 py-3 font-semibold text-gray-600">Язык</th>
            <th className="text-right px-4 py-3 font-semibold text-gray-600">Стоимость/год</th>
            {onSelectFaculty && (
              <th className="px-4 py-3"></th>
            )}
          </tr>
        </thead>
        <tbody>
          {filtered.map((faculty, idx) => (
            <tr
              key={faculty.id}
              className={`border-b border-gray-50 transition-colors ${
                onSelectFaculty ? 'cursor-pointer hover:bg-gray-50' : ''
              } ${selectedFacultyId === faculty.id ? 'bg-green-50' : ''}`}
              onClick={() => onSelectFaculty?.(faculty)}
            >
              <td className="px-4 py-3 font-medium text-gray-800">{faculty.name}</td>
              <td className="px-4 py-3">
                <span
                  className={`inline-block text-xs px-2 py-0.5 rounded-full border font-medium ${
                    PROGRAM_COLORS[faculty.program] ?? 'bg-gray-50 text-gray-600 border-gray-200'
                  }`}
                >
                  {PROGRAM_LABELS[faculty.program] ?? faculty.program}
                </span>
              </td>
              <td className="px-4 py-3 text-gray-600">{faculty.language ?? '—'}</td>
              <td className="px-4 py-3 text-right font-semibold text-gray-800">
                {faculty.price_per_year
                  ? `$${faculty.price_per_year.toLocaleString()}`
                  : '—'}
              </td>
              {onSelectFaculty && (
                <td className="px-4 py-3">
                  {selectedFacultyId === faculty.id ? (
                    <span className="text-xs font-bold px-2 py-0.5 rounded-md" style={{ backgroundColor: '#C8F135', color: '#1A1A2E' }}>✓ Выбран</span>
                  ) : (
                    <span className="text-xs text-gray-400">Выбрать</span>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
