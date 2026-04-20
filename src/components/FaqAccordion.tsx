'use client'

import { useState } from 'react'

const NAVY = '#1A1A2E'
const GOLD = '#C8F135'

const FAQS = [
  {
    q: 'Почему ваши услуги бесплатны?',
    a: 'Мы официальные партнёры университетов и получаем агентское вознаграждение от них, а не от студентов. Для вас всё абсолютно бесплатно — никаких скрытых платежей.',
  },
  {
    q: 'Какие документы нужны для поступления?',
    a: 'Аттестат или диплом, загранпаспорт, фото 3×4. Для магистратуры дополнительно диплом бакалавра с транскриптами. Всё загружается онлайн прямо на нашем сайте.',
  },
  {
    q: 'Сколько времени занимает поступление?',
    a: 'В среднем 1–3 недели с момента подачи документов. В ряде университетов — быстрее. Мы информируем вас на каждом этапе.',
  },
  {
    q: 'Нужно ли знать турецкий язык?',
    a: 'Нет, большинство программ наших партнёров ведётся на английском языке. Есть и турецкоязычные программы — по желанию студента.',
  },
  {
    q: 'Могут ли родители приехать на день открытых дверей?',
    a: 'Да, мы можем организовать ознакомительный визит в университет. Свяжитесь с нашим менеджером, и мы согласуем удобную дату.',
  },
]

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="flex flex-col gap-3">
      {FAQS.map((faq, i) => (
        <div
          key={i}
          className="border rounded-xl overflow-hidden transition-all duration-300"
          style={{ borderColor: open === i ? GOLD : '#E5E7EB' }}
        >
          <button
            className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-sm transition-colors"
            style={{ color: NAVY }}
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span>{faq.q}</span>
            <span
              className="flex-shrink-0 ml-4 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold transition-all duration-300"
              style={{ backgroundColor: open === i ? GOLD : NAVY }}
            >
              {open === i ? '−' : '+'}
            </span>
          </button>
          {open === i && (
            <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
