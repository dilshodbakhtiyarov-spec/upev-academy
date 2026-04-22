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
    desc: 'Из каталога 30+ партнёров с фильтрами по городу и специальности',
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
                  href="https://calendly.com/upev-academy"
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
                { value: '200+', label: 'студентов поступили' },
                { value: '30+', label: 'университетов партнёров' },
                { value: '100%', label: 'результат зачисления' },
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

      {/* ── REVIEWS ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ backgroundColor: NAVY }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Что говорят наши студенты
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((review) => (
              <div
                key={review.name}
                className="bg-white rounded-2xl p-6 flex flex-col gap-4"
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" style={{ color: GOLD }} viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                  {/* Avatar placeholder */}
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{ backgroundColor: NAVY }}
                  >
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: NAVY }}>{review.name}</p>
                    <p className="text-xs text-gray-400">{review.city}</p>
                  </div>
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
              href="https://wa.me/77001234567"
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

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className="py-14 px-4" style={{ backgroundColor: NAVY }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <p className="text-2xl font-bold text-white mb-3">
                UPEV <span style={{ color: GOLD }}>Academy</span>
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Официальный партнёр частных университетов Турции. Помогаем студентам из СНГ поступить быстро и бесплатно.
              </p>

              {/* Social icons */}
              <div className="flex items-center gap-3 mt-5">
                {[
                  {
                    href: 'https://instagram.com/upev_academy',
                    label: 'Instagram',
                    icon: (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    ),
                  },
                  {
                    href: 'https://wa.me/77001234567',
                    label: 'WhatsApp',
                    icon: (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    ),
                  },
                  {
                    href: 'https://t.me/upev_academy',
                    label: 'Telegram',
                    icon: (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                      </svg>
                    ),
                  },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:opacity-100"
                    style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)' }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Links columns */}
            {[
              {
                title: 'Университеты',
                links: ['Стамбул', 'Анталья', 'Анкара', 'Измир'],
              },
              {
                title: 'Города',
                links: ['IT и программирование', 'Бизнес и менеджмент', 'Дизайн', 'Медицина'],
              },
              {
                title: 'Компания',
                links: ['О нас', 'Блог', 'FAQ', 'Стать партнёром'],
              },
            ].map((col) => (
              <div key={col.title}>
                <p className="text-white font-semibold mb-4">{col.title}</p>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm transition-colors hover:text-white"
                        style={{ color: 'rgba(255,255,255,0.55)' }}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            className="border-t pt-6 text-sm text-center"
            style={{ borderColor: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.4)' }}
          >
            © 2025 UPEV Academy. Все права защищены.
          </div>
        </div>
      </footer>

      <AiChatButton />
    </div>
  )
}
