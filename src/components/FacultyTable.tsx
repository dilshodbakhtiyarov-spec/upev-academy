import type { Faculty } from '@/lib/supabase'

const PROGRAM_COLORS: Record<string, { bg: string; text: string; label: string }> = {
  bachelor:  { bg: '#EEF2FF', text: '#4F46E5', label: 'Бакалавр' },
  master:    { bg: '#F0FDF4', text: '#16A34A', label: 'Магистратура' },
  doctoral:  { bg: '#FFF7ED', text: '#EA580C', label: 'Докторантура' },
  associate: { bg: '#F9F5FF', text: '#9333EA', label: 'Associate' },
}

type Props = { faculties: Faculty[] }

export default function FacultyTable({ faculties }: Props) {
  const programs = ['bachelor', 'master', 'doctoral', 'associate']

  return (
    <div className="space-y-6">
      {programs.map(prog => {
        const items = faculties.filter(f => f.program === prog)
        if (!items.length) return null
        const style = PROGRAM_COLORS[prog] || { bg: '#F3F4F6', text: '#374151', label: prog }
        return (
          <div key={prog}>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ background: style.bg, color: style.text }}>
                {style.label}
              </span>
              <span className="text-xs text-gray-400">{items.length} программ</span>
            </div>
            <div className="overflow-x-auto rounded-xl border border-gray-100">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: '#F8F9FC' }}>
                    <th className="text-left px-4 py-2.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">Факультет</th>
                    <th className="text-left px-4 py-2.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">Язык</th>
                    <th className="text-right px-4 py-2.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">Стоимость/год</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {items.map((f, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-medium text-gray-800">{f.name}</td>
                      <td className="px-4 py-3">
                        <span className="text-xs font-semibold px-2 py-0.5 rounded"
                              style={{
                                background: f.language === 'EN' ? '#EFF6FF' : '#F0FFF4',
                                color: f.language === 'EN' ? '#2563EB' : '#16A34A'
                              }}>
                          {f.language}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right font-bold" style={{ color: '#1A1A2E' }}>
                        {f.price_per_year ? `$${f.price_per_year.toLocaleString()}` : '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
      })}
    </div>
  )
}