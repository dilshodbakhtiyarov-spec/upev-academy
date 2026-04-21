'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const NAVY = '#1A1A2E'
const GOLD = '#C8F135'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(26,26,46,0.96)' : NAVY,
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.3)' : 'none',
      }}
    >
      {/* Top bar */}
      <div
        style={{ background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
        className="px-6 py-1.5 flex items-center justify-between text-xs text-gray-400"
      >
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/77070655014"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <span className="text-green-400">●</span>
            +7 707 065 50 14
          </a>
          <a
            href="https://t.me/bozgag51"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <span className="text-blue-400">✈</span>
            @bozgag51
          </a>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <Link href="/tracker" className="hover:text-white transition-colors">
            📋 Tracker
          </Link>
          <Link href="/partner" className="hover:text-white transition-colors">
            🤝 Стать партнёром
          </Link>
        </div>
      </div>

      {/* Main nav */}
      <nav className="px-6 h-14 flex items-center justify-between max-w-7xl mx-auto w-full">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-black text-white tracking-tight">
            UPEV <span style={{ color: GOLD }}>Academy</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {[
            { href: '/universities', label: 'Университеты' },
            { href: '/#cities', label: 'Города' },
            { href: '/#how', label: 'Как это работает' },
            { href: '/#faq', label: 'FAQ' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-gray-300 hover:text-white transition-colors font-medium relative group"
            >
              {label}
              <span
                className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                style={{ background: GOLD }}
              />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/77070655014?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!+%D0%A5%D0%BE%D1%87%D1%83+%D0%BF%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%B8%D1%82%D1%8C+%D0%B2+%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82+%D0%A2%D1%83%D1%80%D1%86%D0%B8%D0%B8"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent text-sm"
          >
            Консультация
          </a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-white"
          aria-label="Меню"
        >
          <div className="w-5 flex flex-col gap-1">
            <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t border-white/10 px-6 py-4 flex flex-col gap-3"
          style={{ background: 'rgba(26,26,46,0.98)' }}
        >
          {[
            { href: '/universities', label: '🎓 Университеты' },
            { href: '/#cities', label: '🏙 Города' },
            { href: '/#faq', label: '❓ FAQ' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-white py-2 border-b border-white/5 transition-colors"
            >
              {label}
            </Link>
          ))}
          <a
            href="https://wa.me/77070655014"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent text-center mt-2"
          >
            💬 Бесплатная консультация
          </a>
        </div>
      )}
    </header>
  )
}
