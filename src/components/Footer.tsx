import Link from 'next/link'

const NAVY = '#1A1A2E'
const GOLD = '#C8F135'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: NAVY }} className="text-gray-400">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="md:col-span-1">
          <Link href="/" className="inline-block mb-4">
            <span className="text-xl font-black text-white">
              UPEV <span style={{ color: GOLD }}>Academy</span>
            </span>
          </Link>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            Официальный партнёр ведущих частных университетов Турции. Помогаем студентам из СНГ поступить быстро и бесплатно.
          </p>
          <div className="flex gap-3">
            <a
              href="https://wa.me/77070655014"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center transition-transform hover:scale-110"
              style={{ background: '#25D366' }}
              aria-label="WhatsApp"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            <a
              href="https://t.me/bozgag51"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center transition-transform hover:scale-110"
              style={{ background: '#229ED9' }}
              aria-label="Telegram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Universities */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm">Университеты</h4>
          <ul className="space-y-2 text-sm">
            {[
              'Bahçeşehir University',
              'Istanbul Medipol',
              'Biruni University',
              'Atılım University',
              'Beykent University',
            ].map((name) => (
              <li key={name}>
                <Link href="/universities" className="hover:text-white transition-colors">
                  {name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/universities" className="hover:text-white transition-colors font-medium" style={{ color: GOLD }}>
                Все университеты →
              </Link>
            </li>
          </ul>
        </div>

        {/* Cities */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm">Города</h4>
          <ul className="space-y-2 text-sm">
            {['Стамбул', 'Анкара', 'Анталья', 'Измир', 'Бурса'].map((city) => (
              <li key={city}>
                <Link href={`/universities?city=${city}`} className="hover:text-white transition-colors">
                  {city}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm">Контакты</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="https://wa.me/77070655014"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <span className="text-green-400">●</span>
                +7 707 065 50 14
              </a>
            </li>
            <li>
              <a
                href="https://t.me/bozgag51"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <span className="text-blue-400">✈</span>
                @bozgag51
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span>📍</span>
              Стамбул, Турция
            </li>
          </ul>

          {/* Free consult CTA */}
          <a
            href="https://wa.me/77070655014"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all hover:opacity-90"
            style={{ background: GOLD, color: NAVY }}
          >
            Бесплатная консультация
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-500"
        style={{ borderColor: 'rgba(255,255,255,0.08)' }}
      >
        <span>© {year} UPEV Academy. Все права защищены.</span>
        <span className="flex items-center gap-1">
          Наши услуги <span style={{ color: GOLD }} className="font-semibold">бесплатны</span> — комиссию платит университет
        </span>
      </div>
    </footer>
  )
}
