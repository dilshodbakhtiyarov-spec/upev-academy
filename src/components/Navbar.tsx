'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gray-900">
              UPEV <span style={{ color: '#1D9E75' }}>Academy</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/universities" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Университеты
            </Link>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Как это работает
            </a>
            <a href="#services" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Услуги
            </a>
            <a
              href="https://calendly.com/upev-academy"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-lg text-white font-semibold transition-all hover:opacity-90"
              style={{ backgroundColor: '#1D9E75' }}
            >
              Консультация
            </a>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Меню"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-3">
            <Link href="/universities" className="text-gray-700 font-medium py-2" onClick={() => setMenuOpen(false)}>
              Университеты
            </Link>
            <a href="#how-it-works" className="text-gray-700 font-medium py-2" onClick={() => setMenuOpen(false)}>
              Как это работает
            </a>
            <a href="#services" className="text-gray-700 font-medium py-2" onClick={() => setMenuOpen(false)}>
              Услуги
            </a>
            <a
              href="https://calendly.com/upev-academy"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-lg text-white font-semibold text-center"
              style={{ backgroundColor: '#1D9E75' }}
            >
              Консультация
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
