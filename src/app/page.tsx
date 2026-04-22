import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import AiChatButton from '@/components/AiChatButton'
import FaqAccordion from '@/components/FaqAccordion'

const NAVY = '#1A1A2E'
const GOLD = '#C8F135'
const LIGHT_BG = '#F8F9FC'

// ─── DATA ────────────────────────────────────────────────────────────────────

const WHY_TURKEY = [
  {
    icon: '🎓',
    title: 'Диплом признаётся в ЕС',
    desc: 'Выпускники могут работать в Европе',
  },
  {
    icon: '💰',
    title: 'В 3 раза дешевле Европы',
    desc: 'Качественное образование по доступной цене',
  },
  {
    icon: '✈️',
    title: 'Прямые рейсы',
    desc: 'Из Алматы, Ташкента, Москвы каждый день',
  },
  {
    icon: '📋',
    title: 'Без IELTS и экзаменов',
    desc: 'Поступление только по аттестату',
  },
]

const STEPS = [
  {
    num: '01',
    title: 'Выбери университет',
    desc: 'Из каталога 17 партнёров с фильтрами по городу и специальности',
  },
  {
    num: '02',
    title: 'Загрузи документы',
    desc: 'Аттестат и паспорт прямо на сайте — займёт 5 минут',
  },
  {
    num: '03',
    title: 'Мы подаём заявку',
    desc: 'Напрямую в университет — без лишних хлопот для тебя',
  },
  {
    num: '04',
    title: 'Получи письмо',
    desc: 'Официальное письмо о зачислении в среднем за 1–3 недели',
  },
]

const CITIES = [
  {
    name: 'Стамбул',
    universities: 12,
    img: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400',
  },
  {
    name: 'Анталья',
    universities: 5,
    img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400',
  },
  {
    name: 'Анкара',
    universities: 8,
    img: 'https://images.unsplash.com/photo-1589561454226-796a8aa89b05?w=400',
  },
  {
    name: 'Измир',
    universities: 4,
    img: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=400',
  },
]

const REVIEWS = [
  {
    name: 'Азиза М.',
    city: 'Ташкент',
    text: 'Поступила в Istanbul Bilgi University за 10 дней. Всё оформили сами, мне осталось только собрать чемодан!',
  },
  {
    name: 'Данияр К.',
    city: 'Алматы',
    text: 'Думал будет сложно, но UPEV Academy помогли на каждом шагу. Сейчас учусь в Анталье на IT!',
  },
  {
    name: 'Карина С.',
    city: 'Москва',
    text: 'Бесплатная помощь — это реально. Никаких скрытых платежей, всё честно и быстро.',
  },
]

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: NAVY, minHeight: '600px' }}
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, ${GOLD} 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, ${GOLD} 0%, transparent 40%)`,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-5 gap-12 items-center">

            {/* Left: 60% */}
            <div className="lg:col-span-3">
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-7 border"
                style={{ borderColor: GOLD, color: GOLD }}
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Официальный партнёр университетов Турции
              </div>

              {/* Headline */}
              <h1 className="text-white font-bold leading-tight mb-5"
                style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.15 }}
              >
                Поступи в университет{' '}
                <span style={{ color: GOLD }}>Турции</span>
                {' '}без экзаменов
                <br />и без оплаты
              </h1>

              {/* Subtitle */}
              <p className="text-lg leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.72)' }}>
                UPEV Academy — официальный партнёр ведущих частных университетов Турции.
                Помогаем студентам поступить быстро и без лишних хлопот.
                Наши услуги бесплатны — комиссию платит университет.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/universities"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:opacity-90 hover:shadow-xl"
                  style={{ backgroundColor: GOLD, color: NAVY }}
                >
                  Смотреть университеты
                </Link>
                <a
                  href="https://wa.me/77070655014?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D1%83%D1%8E%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8E"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-base border-2 text-white transition-all duration-300 hover:bg-white/10"
                  style={{ borderColor: 'rgba(255,255,255,0.5)' }}
                >
                  Бесплатная консультация
                </a>
              </div>
            </div>

            {/* Right: 40% — stat cards */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {[
                { value: '17', label: 'университетов-партнёров' },
                { value: '4', label: 'города: Стамбул, Анкара, Анталья, Измир' },
                { value: '24ч', label: 'среднее время ответа на заявку' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl px-6 py-5 flex items-center gap-5 transition-all duration-300"
                  style={{ backgroundColor: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(4px)' }}
                >
                  <span
                    className="text-4xl font-black leading-none"
                    style={{ color: GOLD }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.65)' }}>
                    {stat.label}
                  </span>
                </div>
              ))}

              <p className="text-xs text-center mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>
                🔒 Ваши данные защищены и используются только для поступления
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY TURKEY ───────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: NAVY }}>
              Почему студенты выбирают Турцию?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_TURKEY.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl p-6 border border-[#1A1A2E]/10 hover:border-[#C8F135] transition-all duration-300 hover:shadow-md"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2" style={{ color: NAVY }}>{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-20 px-4" style={{ backgroundColor: LIGHT_BG }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: NAVY }}>
              Как мы помогаем поступить
            </h2>
            <p className="text-gray-500 text-lg">Четыре шага от выбора до зачисления</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting line on desktop */}
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px"
              style={{ backgroundColor: `${GOLD}40` }} />

            {STEPS.map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center relative">
                {/* Circle number */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-black mb-5 relative z-10 border-4 border-white shadow-sm"
                  style={{ backgroundColor: NAVY, color: GOLD }}
                >
                  {step.num}
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: NAVY }}>{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CITIES ───────────────────────────────────────────────────────── */}
      <section id="cities" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: NAVY }}>
              Выбери город для учёбы
            </h2>
            <p className="text-gray-500 text-lg">4 города с лучшими университетами-партнёрами</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CITIES.map((city) => (
              <div
                key={city.name}
                className="group rounded-2xl overflow-hidden border border-[#1A1A2E]/10 hover:border-[#C8F135] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
              >
                {/* City photo */}
                <div className="relative h-44 overflow-hidden bg-gray-100">
                  <Image
                    src={city.img}
                    alt={city.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* City info */}
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-0.5" style={{ color: NAVY }}>{city.name}</h3>
                  <p className="text-sm text-gray-400 mb-3">
                    {city.universities} университетов
                  </p>
                  <Link
                    href={`/universities?city=${encodeURIComponent(city.name)}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold transition-colors"
                    style={{ color: GOLD }}
                  >
                    Смотреть
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 px-6" style={{ background: '#F8F9FC' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900 mb-2">Что говорят студенты</h2>
            <p className="text-gray-500">Реальные истории поступления через UPEV Academy</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Айгерим К.', country: '🇰🇿 Алматы', university: 'Bahçeşehir University', program: 'Психология, Бакалавр', text: 'Поступила за 2 недели! Менеджер помог с документами, объяснил каждый шаг. Теперь учусь в Стамбуле мечты.', avatar: 'А' },
              { name: 'Жасур Т.', country: '🇺🇿 Ташкент', university: 'Istanbul Medipol', program: 'Медицина, Бакалавр', text: 'Хотел поступить на медицину без экзаменов. UPEV Academy сделали это реальным. Рекомендую всем!', avatar: 'Ж' },
              { name: 'Дмитрий С.', country: '🇷🇺 Москва', university: 'Atılım University', program: 'MBA, Магистратура', text: 'Искал MBA на английском в Анкаре. Всё оформили быстро, поддержка на каждом этапе. Отличная команда.', avatar: 'Д' },
            ].map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 card-hover" style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                       style={{ background: 'linear-gradient(135deg, #1A1A2E, #C8F135)' }}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.country}</div>
                  </div>
                  <div className="ml-auto text-yellow-400 text-sm">★★★★★</div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">&quot;{t.text}&quot;</p>
                <div className="pt-3 border-t border-gray-50">
                  <div className="text-xs font-semibold text-gray-700">{t.university}</div>
                  <div className="text-xs text-gray-400">{t.program}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section id="faq" className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: NAVY }}>
              Частые вопросы
            </h2>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ backgroundColor: GOLD }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: NAVY }}>
            Готов начать?
          </h2>
          <p className="text-lg mb-10" style={{ color: NAVY }}>
            Оставь заявку прямо сейчас — мы свяжемся в течение 24 часов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/universities"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-base text-white transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: NAVY }}
            >
              Смотреть университеты
            </Link>
            <a
              href="https://wa.me/77070655014"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base bg-white transition-all duration-300 hover:shadow-md"
              style={{ color: NAVY }}
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Написать в WhatsApp
            </a>
          </div>
        </div>
      </section>
      

      <AiChatButton />
    </div>
  )
}
