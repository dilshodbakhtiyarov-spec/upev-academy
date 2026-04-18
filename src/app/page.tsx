import Link from 'next/link'
import Navbar from '@/components/Navbar'
import AiChatButton from '@/components/AiChatButton'

const STEPS = [
  {
    num: '01',
    title: 'Выбрал университет',
    desc: 'Просматривай каталог с фильтрами по городу, специальности и цене',
    icon: '🎓',
  },
  {
    num: '02',
    title: 'Загрузил документы',
    desc: 'Аттестат, загранпаспорт и фото — всё загружается прямо на сайте',
    icon: '📄',
  },
  {
    num: '03',
    title: 'Мы оформляем',
    desc: 'Наш менеджер связывается с университетом и готовит acceptance letter',
    icon: '✍️',
  },
  {
    num: '04',
    title: 'Получил письмо',
    desc: 'Официальное письмо о зачислении приходит в течение 14 дней',
    icon: '📨',
  },
]

const SERVICES = [
  { title: 'Подбор университета', desc: 'Подберём вуз под ваш бюджет, специальность и город', icon: '🔍' },
  { title: 'Оформление документов', desc: 'Переведём и апостилируем все необходимые документы', icon: '📋' },
  { title: 'Встреча в аэропорту', desc: 'Встретим по прилёту и доставим до места проживания', icon: '✈️' },
  { title: 'Помощь с жильём', desc: 'Поможем найти общежитие или квартиру рядом с университетом', icon: '🏠' },
  { title: 'Виза и ВНЖ', desc: 'Сопроводим весь процесс получения студенческой визы и ВНЖ', icon: '🛂' },
  { title: 'Поддержка 24/7', desc: 'Наши менеджеры на связи в WhatsApp круглосуточно', icon: '💬' },
]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white pt-20 pb-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
            style={{ backgroundColor: '#1D9E75' + '15', color: '#1D9E75' }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#1D9E75' }} />
            Бесплатно для студентов из КЗ, УЗ, РУ
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Поступи в университет{' '}
            <span style={{ color: '#1D9E75' }}>Турции</span>
            <br />
            за <span style={{ color: '#3C3489' }}>14 дней</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-10">
            Помогаем студентам из Казахстана, Узбекистана и России поступить в частные
            университеты Турции без вступительных экзаменов. Наши услуги{' '}
            <strong className="text-gray-700">полностью бесплатны</strong> для студентов.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/universities"
              className="px-8 py-4 rounded-xl text-white font-semibold text-lg transition-all hover:opacity-90 hover:shadow-lg"
              style={{ backgroundColor: '#1D9E75' }}
            >
              Смотреть университеты
            </Link>
            <a
              href="https://calendly.com/upev-academy"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:bg-gray-50 border-2 border-gray-200 text-gray-700"
            >
              Записаться на встречу
            </a>
          </div>
        </div>

        {/* Background decoration */}
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-5 blur-3xl"
          style={{ backgroundColor: '#1D9E75' }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-5 blur-3xl"
          style={{ backgroundColor: '#3C3489' }}
        />
      </section>

      {/* STATS */}
      <section className="py-12 px-4 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
          {[
            { value: '30+', label: 'Университетов' },
            { value: '3', label: 'Страны СНГ' },
            { value: '14', label: 'Дней до зачисления' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl sm:text-5xl font-black text-gray-900 mb-1" style={{ color: '#1D9E75' }}>
                {stat.value}
              </p>
              <p className="text-sm sm:text-base text-gray-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Как это работает</h2>
            <p className="text-gray-500 text-lg">От выбора университета до получения письма — 4 простых шага</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <div key={step.num} className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-3 w-6 text-gray-300 text-xl z-10">→</div>
                )}
                <div className="text-3xl mb-3">{step.icon}</div>
                <div
                  className="text-xs font-bold mb-2 tracking-widest"
                  style={{ color: '#1D9E75' }}
                >
                  ШАГ {step.num}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FREE SERVICES BLOCK */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-2xl p-8 sm:p-10 text-white text-center"
            style={{ background: `linear-gradient(135deg, #1D9E75, #15805e)` }}
          >
            <div className="text-5xl mb-4">🎁</div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Наши услуги бесплатны для студентов</h2>
            <p className="text-white/85 text-lg max-w-2xl mx-auto leading-relaxed">
              UPEV Academy работает по модели агентства — университеты платят нам комиссию за каждого
              успешно поступившего студента. Для тебя это значит, что ты получаешь полный сервис{' '}
              <strong className="text-white">абсолютно бесплатно</strong>.
            </p>
            <Link
              href="/universities"
              className="inline-block mt-8 px-8 py-3 rounded-xl bg-white font-bold text-lg transition-all hover:shadow-lg"
              style={{ color: '#1D9E75' }}
            >
              Смотреть университеты →
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Что мы делаем для вас</h2>
            <p className="text-gray-500 text-lg">Полный спектр услуг — от поступления до обустройства</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 mt-auto">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-8 mb-10">
            <div>
              <p className="text-white font-bold text-xl mb-3">
                UPEV <span style={{ color: '#1D9E75' }}>Academy</span>
              </p>
              <p className="text-sm leading-relaxed">
                Образовательное агентство. Помогаем студентам из СНГ поступить в университеты Турции.
              </p>
            </div>
            <div>
              <p className="text-white font-semibold mb-3">Навигация</p>
              <ul className="flex flex-col gap-2 text-sm">
                <li><Link href="/universities" className="hover:text-white transition-colors">Университеты</Link></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">Как это работает</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Услуги</a></li>
              </ul>
            </div>
            <div>
              <p className="text-white font-semibold mb-3">Контакты</p>
              <ul className="flex flex-col gap-2 text-sm">
                <li>
                  <a href="https://wa.me/77001234567" className="hover:text-white transition-colors">
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href="https://t.me/upev_academy" className="hover:text-white transition-colors">
                    Telegram
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/upev_academy" className="hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-sm text-center">
            © {new Date().getFullYear()} UPEV Academy. Все права защищены.
          </div>
        </div>
      </footer>

      <AiChatButton />
    </div>
  )
}
