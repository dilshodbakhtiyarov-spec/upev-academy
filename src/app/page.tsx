import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import AiChatButton from '@/components/AiChatButton'
import FaqAccordion from '@/components/FaqAccordion'

const NAVY = '#1A1A2E'
const GOLD = '#C8F135'
const LIGHT_BG = '#F8F9FC'

// âââ DATA ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ

const WHY_TURKEY = [
  {
    icon: 'ð',
    title: 'ÐÐ¸Ð¿Ð»Ð¾Ð¼ Ð¿ÑÐ¸Ð·Ð½Ð°ÑÑÑÑ Ð² ÐÐ¡',
    desc: 'ÐÑÐ¿ÑÑÐºÐ½Ð¸ÐºÐ¸ Ð¼Ð¾Ð³ÑÑ ÑÐ°Ð±Ð¾ÑÐ°ÑÑ Ð² ÐÐ²ÑÐ¾Ð¿Ðµ',
  },
  {
    icon: 'ð°',
    title: 'Ð 3 ÑÐ°Ð·Ð° Ð´ÐµÑÐµÐ²Ð»Ðµ ÐÐ²ÑÐ¾Ð¿Ñ',
    desc: 'ÐÐ°ÑÐµÑÑÐ²ÐµÐ½Ð½Ð¾Ðµ Ð¾Ð±ÑÐ°Ð·Ð¾Ð²Ð°Ð½Ð¸Ðµ Ð¿Ð¾ Ð´Ð¾ÑÑÑÐ¿Ð½Ð¾Ð¹ ÑÐµÐ½Ðµ',
  },
  {
    icon: 'âï¸',
    title: 'ÐÑÑÐ¼ÑÐµ ÑÐµÐ¹ÑÑ',
    desc: 'ÐÐ· ÐÐ»Ð¼Ð°ÑÑ, Ð¢Ð°ÑÐºÐµÐ½ÑÐ°, ÐÐ¾ÑÐºÐ²Ñ ÐºÐ°Ð¶Ð´ÑÐ¹ Ð´ÐµÐ½Ñ',
  },
  {
    icon: 'ð',
    title: 'ÐÐµÐ· IELTS Ð¸ ÑÐºÐ·Ð°Ð¼ÐµÐ½Ð¾Ð²',
    desc: 'ÐÐ¾ÑÑÑÐ¿Ð»ÐµÐ½Ð¸Ðµ ÑÐ¾Ð»ÑÐºÐ¾ Ð¿Ð¾ Ð°ÑÑÐµÑÑÐ°ÑÑ',
  },
]

const STEPS = [
  {
    num: '01',
    title: 'ÐÑÐ±ÐµÑÐ¸ ÑÐ½Ð¸Ð²ÐµÑÑÐ¸ÑÐµÑ',
    desc: 'ÐÐ· ÐºÐ°ÑÐ°Ð»Ð¾Ð³Ð° 30+ Ð¿Ð°ÑÑÐ½ÑÑÐ¾Ð² Ñ ÑÐ¸Ð»ÑÑÑÐ°Ð¼Ð¸ Ð¿Ð¾ Ð³Ð¾ÑÐ¾Ð´Ñ Ð¸ ÑÐ¿ÐµÑÐ¸Ð°Ð»ÑÐ½Ð¾ÑÑÐ¸',
  },
  {
    num: '02',
    title: 'ÐÐ°Ð³ÑÑÐ·Ð¸ Ð´Ð¾ÐºÑÐ¼ÐµÐ½ÑÑ',
    desc: 'ÐÑÑÐµÑÑÐ°Ñ Ð¸ Ð¿Ð°ÑÐ¿Ð¾ÑÑ Ð¿ÑÑÐ¼Ð¾ Ð½Ð° ÑÐ°Ð¹ÑÐµ â Ð·Ð°Ð¹Ð¼ÑÑ 5 Ð¼Ð¸Ð½ÑÑ',
  },
  {
    num: '03',
    title: 'ÐÑ Ð¿Ð¾Ð´Ð°ÑÐ¼ Ð·Ð°ÑÐ²ÐºÑ',
    desc: 'ÐÐ°Ð¿ÑÑÐ¼ÑÑ Ð² ÑÐ½Ð¸Ð²ÐµÑÑÐ¸ÑÐµÑ â Ð±ÐµÐ· Ð»Ð¸ÑÐ½Ð¸Ñ ÑÐ»Ð¾Ð¿Ð¾Ñ Ð´Ð»Ñ ÑÐµÐ±Ñ',
  },
  {
    num: '04',
    title: 'ÐÐ¾Ð»ÑÑÐ¸ Ð¿Ð¸ÑÑÐ¼Ð¾',
    desc: 'ÐÑÐ¸ÑÐ¸Ð°Ð»ÑÐ½Ð¾Ðµ Ð¿Ð¸ÑÑÐ¼Ð¾ Ð¾ Ð·Ð°ÑÐ¸ÑÐ»ÐµÐ½Ð¸Ð¸ Ð² ÑÑÐµÐ´Ð½ÐµÐ¼ Ð·Ð° 1â3 Ð½ÐµÐ´ÐµÐ»Ð¸',
  },
]

const CITIES = [
  {
    name: 'Ð¡ÑÐ°Ð¼Ð±ÑÐ»',
    universities: 12,
    img: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400',
  },
  {
    name: 'ÐÐ½ÑÐ°Ð»ÑÑ',
    universities: 5,
    img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400',
  },
  {
    name: 'ÐÐ½ÐºÐ°ÑÐ°',
    universities: 8,
    img: 'https://images.unsplash.com/photo-1589561454226-796a8aa89b05?w=400',
  },
  {
    name: 'ÐÐ·Ð¼Ð¸Ñ',
    universities: 4,
    img: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=400',
  },
]

const REVIEWS = [
  {
    name: 'ÐÐ·Ð¸Ð·Ð° Ð.',
    city: 'Ð¢Ð°ÑÐºÐµÐ½Ñ',
    text: 'ÐÐ¾ÑÑÑÐ¿Ð¸Ð»Ð° Ð² Istanbul Bilgi University Ð·Ð° 10 Ð´Ð½ÐµÐ¹. ÐÑÑ Ð¾ÑÐ¾ÑÐ¼Ð¸Ð»Ð¸ ÑÐ°Ð¼Ð¸, Ð¼Ð½Ðµ Ð¾ÑÑÐ°Ð»Ð¾ÑÑ ÑÐ¾Ð»ÑÐºÐ¾ ÑÐ¾Ð±ÑÐ°ÑÑ ÑÐµÐ¼Ð¾Ð´Ð°Ð½!',
  },
  {
    name: 'ÐÐ°Ð½Ð¸ÑÑ Ð.',
    city: 'ÐÐ»Ð¼Ð°ÑÑ',
    text: 'ÐÑÐ¼Ð°Ð» Ð±ÑÐ´ÐµÑ ÑÐ»Ð¾Ð¶Ð½Ð¾, Ð½Ð¾ UPEV Academy Ð¿Ð¾Ð¼Ð¾Ð³Ð»Ð¸ Ð½Ð° ÐºÐ°Ð¶Ð´Ð¾Ð¼ ÑÐ°Ð³Ñ. Ð¡ÐµÐ¹ÑÐ°Ñ ÑÑÑÑÑ Ð² ÐÐ½ÑÐ°Ð»ÑÐµ Ð½Ð° IT!',
  },
  {
    name: 'ÐÐ°ÑÐ¸Ð½Ð° Ð¡.',
    city: 'ÐÐ¾ÑÐºÐ²Ð°',
    text: 'ÐÐµÑÐ¿Ð»Ð°ÑÐ½Ð°Ñ Ð¿Ð¾Ð¼Ð¾ÑÑ â ÑÑÐ¾ ÑÐµÐ°Ð»ÑÐ½Ð¾. ÐÐ¸ÐºÐ°ÐºÐ¸Ñ ÑÐºÑÑÑÑÑ Ð¿Ð»Ð°ÑÐµÐ¶ÐµÐ¹, Ð²ÑÑ ÑÐµÑÑÐ½Ð¾ Ð¸ Ð±ÑÑÑÑÐ¾.',
  },
]

// âââ PAGE âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* ââ HERO âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ */}
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
                ÐÑÐ¸ÑÐ¸Ð°Ð»ÑÐ½ÑÐ¹ Ð¿Ð°ÑÑÐ½ÑÑ ÑÐ½Ð¸Ð²ÐµÑÑÐ¸ÑÐµÑÐ¾Ð² Ð¢ÑÑÑÐ¸Ð¸
              </div>

              {/* Headline */}
              <h1 className="text-white font-bold leading-tight mb-5"
                style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.15 }}
              >
                ÐÐ¾ÑÑÑÐ¿Ð¸ Ð² ÑÐ½Ð¸Ð²ÐµÑÑÐ¸ÑÐµÑ{' '}
                <span style={{ color: GOLD }}>Ð¢ÑÑÑÐ¸Ð¸</span>
                {' '}Ð±ÐµÐ· ÑÐºÐ·Ð°Ð¼ÐµÐ½Ð¾Ð²
                <br />Ð¸ Ð±ÐµÐ· Ð¾Ð¿Ð»Ð°ÑÑ
              </h1>

              {/* Subtitle */}
              <p className="text-lg leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.72)' }}>
                UPEV Academy â Ð¾ÑÐ¸ÑÐ¸Ð°Ð»ÑÐ½ÑÐ¹ Ð¿Ð°ÑÑÐ½ÑÑ Ð²ÐµÐ´ÑÑÐ¸Ñ ÑÐ°ÑÑÐ½ÑÑ ÑÐ½Ð¸Ð²ÐµÑÑÐ¸ÑÐµÑÐ¾Ð² Ð¢ÑÑÑÐ¸Ð¸.
                ÐÐ¾Ð¼Ð¾Ð³Ð°ÐµÐ¼ ÑÑÑÐ´ÐµÐ½ÑÐ°Ð¼ Ð¿Ð¾ÑÑÑÐ¿Ð¸ÑÑ Ð±ÑÑÑÑÐ¾ Ð¸ Ð±ÐµÐ· Ð»Ð¸ÑÐ½Ð¸Ñ ÑÐ»Ð¾Ð¿Ð¾Ñ.
                ÐÐ°ÑÐ¸ ÑÑÐ»ÑÐ³Ð¸ Ð±ÐµÑÐ¿Ð»Ð°ÑÐ½Ñ â ÐºÐ¾Ð¼Ð¸ÑÑÐ¸Ñ Ð¿Ð»Ð°ÑÐ¸Ñ ÑÐ½Ð¸Ð²ÐµÑÑÐ¸ÑÐµÑ.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/universities"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:opacity-90 hover:shadow-xl"
                  style={{ backgroundColor: GOLD, color: NAVY }}
                >
                  Ð¡Ð¼Ð¾ÑÑÐµÑÑ ÑÐ½Ð¸Ð²ÐµÑÑÐ¸ÑÐµÑÑ
                </Link>
                <a
                  href="https://calendly.com/upev-academy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-base border-2 text-white transition-all duration-300 hover:bg-white/10"
                  style={{ borderColor: 'rgba(255,255,255,0.5)' }}
                >
                  ÐÐµÑÐ¿Ð»Ð°ÑÐ½Ð°Ñ ÐºÐ¾Ð½ÑÑÐ»ÑÑÐ°ÑÐ¸Ñ
                </a>
              </div>
            </div>

            {/* Right: 40% â stat cards */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {[
                { value: '200+', label: 'ÑÑÑÐ´ÐµÐ½ÑÐ¾Ð² Ð¿Ð¾ÑÑÑÐ¿Ð¸Ð»Ð¸' },
                { value: '30+', label: 'ÑÐ½Ð¸Ð²ÐµÑÑÐ¸ÑÐµÑÐ¾Ð² Ð¿Ð°ÑÑÐ½ÑÑÐ¾Ð²' },
                { value: '100%', label: 'ÑÐµÐ·ÑÐ»ÑÑÐ°Ñ Ð·Ð°ÑÐ¸ÑÐ»ÐµÐ½Ð¸Ñ' },
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
                ð ÐÐ°ÑÐ¸ Ð´Ð°Ð½Ð½ÑÐµ Ð·Ð°ÑÐ¸ÑÐµÐ½Ñ Ð¸ Ð¸ÑÐ¿Ð¾Ð»ÑÐ·ÑÑÑÑÑ ÑÐ¾Ð»ÑÐºÐ¾ Ð´Ð»Ñ Ð¿Ð¾ÑÑÑÐ¿Ð»ÐµÐ½Ð¸Ñ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ââ WHY TURKEY âââââââââââââââââââââââââââââââââââââââââââââââââââââ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: NAVY }}>
              ÐÐ¾ÑÐµÐ¼Ñ ÑÑÑÐ´ÐµÐ½ÑÑ Ð²ÑÐ±Ð¸ÑÐ°ÑÑ Ð¢ÑÑÑÐ¸Ñ?
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

      {/* ââ HOW IT WORKS âââââââââââââââââââââââââââââââââââââââââââââââââââ */}
      <section id="how-it-works" className="py-20 px-4" style={{ backgroundColor: LIGHT_BG }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: NAVY }}>
              ÐÐ°Ðº Ð¼Ñ Ð¿Ð¾Ð¼Ð¾Ð³Ð°ÐµÐ¼ Ð¿Ð¾ÑÑÑÐ¿Ð¸ÑÑ
            </h2>
            <p className="text-gray-500 text-lg">Ð§ÐµÑÑÑÐµ ÑÐ°Ð³Ð° Ð¾Ñ Ð²ÑÐ±Ð¾ÑÐ° Ð´Ð¾ Ð·Ð°ÑÐ¸ÑÐ»ÐµÐ½Ð¸Ñ</p>
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

      {/* ââ CITIES âââââââââââââââââââââââââââââââââââââââââââââââââââââââââ */}
      <section id="cities" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: NAVY }}>
              ÐÑÐ±ÐµÑÐ¸ Ð³Ð¾ÑÐ¾Ð´ Ð´Ð»Ñ ÑÑÑÐ±Ñ
            </h2>
            <p className="text-gray-500 text-lg">4 Ð³Ð¾ÑÐ¾Ð´Ð° Ñ Ð»ÑÑÑÐ¸Ð¼Ð¸ ÑÐ½Ð¸Ð²ÐµÑÑÐ¸ÑÐµÑÐ°Ð¼Ð¸-Ð¿Ð°ÑÑÐ½ÑÑÐ°Ð¼Ð¸</p>
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
                    {city.universities} ÑÐ½Ð¸Ð²ÐµÑÑÐ¸ÑÐµÑÐ¾Ð²
                  </p>
                  <Link
                    href={`/universities?city=${encodeURIComponent(city.name)}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold transition-colors"
                    style={{ color: GOLD }}
                  >
                    Ð¡Ð¼Ð¾ÑÑÐµÑÑ
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

      {/* ââ REVIEWS ââââââââââââââââââââââââââââââââââââââââââââââââââââââââ */}
      <section className="py-20 px-4" style={{ backgroundColor: NAVY }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Ð§ÑÐ¾ Ð³Ð¾Ð²Ð¾ÑÑÑ Ð½Ð°ÑÐ¸ ÑÑÑÐ´ÐµÐ½ÑÑ
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
                <p className="text-gray-600 text-sm leading-relaxed mb-4">"{t.text}"</p>
                <div className="pt-3 border-t border-gray-50">
                  <div className="text-xs font-semibold text-gray-700">{t.university}</div>
                  <div className="text-xs text-gray-400">{t.program}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ââ FAQ ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ */}
      <section id="faq" className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: NAVY }}>
              Ð§Ð°ÑÑÑÐµ Ð²Ð¾Ð¿ÑÐ¾ÑÑ
            </h2>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* ââ CTA ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ */}
      <section className="py-20 px-4" style={{ backgroundColor: GOLD }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: NAVY }}>
            ÐÐ¾ÑÐ¾Ð² Ð½Ð°ÑÐ°ÑÑ?
          </h2>
          <p className="text-lg mb-10" style={{ color: NAVY }}>
            ÐÑÑÐ°Ð²Ñ Ð·Ð°ÑÐ²ÐºÑ Ð¿ÑÑÐ¼Ð¾ ÑÐµÐ¹ÑÐ°Ñ â Ð¼Ñ ÑÐ²ÑÐ¶ÐµÐ¼ÑÑ Ð² ÑÐµÑÐµÐ½Ð¸Ðµ 24 ÑÐ°ÑÐ¾Ð²
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/universities"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-base text-white transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: NAVY }}
            >
              Ð¡Ð¼Ð¾ÑÑÐµÑÑ ÑÐ½Ð¸Ð²ÐµÑÑÐ¸ÑÐµÑÑ
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
              ÐÐ°Ð¿Ð¸ÑÐ°ÑÑ Ð² WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ââ FOOTER âââââââââââââââââââââââââââââââââââââââââââââââââââââââââ */}
      <footer className="py-14 px-4" style={{ backgroundColor: NAVY }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <p className="text-2xl font-bold text-white mb-3">
                UPEV <span style={{ color: GOLD }}>Academy</span>
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                ÐÑÐ¸ÑÐ¸Ð°Ð»ÑÐ½ÑÐ¹ Ð¿Ð°ÑÑÐ½ÑÑ ÑÐ°ÑÑÐ½ÑÑ ÑÐ½Ð¸Ð²ÐµÑÑÐ¸ÑÐµÑÐ¾Ð² Ð¢ÑÑÑÐ¸Ð¸. ÐÐ¾Ð¼Ð¾Ð³Ð°ÐµÐ¼ ÑÑÑÐ´ÐµÐ½ÑÐ°Ð¼ Ð¸Ð· Ð¡ÐÐ Ð¿Ð¾ÑÑÑÐ¿Ð¸ÑÑ Ð±ÑÑÑÑÐ¾ Ð¸ Ð±ÐµÑÐ¿Ð»Ð°ÑÐ½Ð¾.
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
                title: 'Ð£Ð½Ð¸Ð²ÐµÑÑÐ¸ÑÐµÑÑ',
                links: ['Ð¡ÑÐ°Ð¼Ð±ÑÐ»', 'ÐÐ½ÑÐ°Ð»ÑÑ', 'ÐÐ½ÐºÐ°ÑÐ°', 'ÐÐ·Ð¼Ð¸Ñ'],
              },
              {
                title: 'ÐÐ¾ÑÐ¾Ð´Ð°',
                links: ['IT Ð¸ Ð¿ÑÐ¾Ð³ÑÐ°Ð¼Ð¼Ð¸ÑÐ¾Ð²Ð°Ð½Ð¸Ðµ', 'ÐÐ¸Ð·Ð½ÐµÑ Ð¸ Ð¼ÐµÐ½ÐµÐ´Ð¶Ð¼ÐµÐ½Ñ', 'ÐÐ¸Ð·Ð°Ð¹Ð½', 'ÐÐµÐ´Ð¸ÑÐ¸Ð½Ð°'],
              },
              {
                title: 'ÐÐ¾Ð¼Ð¿Ð°Ð½Ð¸Ñ',
                links: ['Ð Ð½Ð°Ñ', 'ÐÐ»Ð¾Ð³', 'FAQ', 'Ð¡ÑÐ°ÑÑ Ð¿Ð°ÑÑÐ½ÑÑÐ¾Ð¼'],
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
            Â© 2025 UPEV Academy. ÐÑÐµ Ð¿ÑÐ°Ð²Ð° Ð·Ð°ÑÐ¸ÑÐµÐ½Ñ.
          </div>
        </div>
      </footer>

      <AiChatButton />
    </div>
  )
}
