'use client'

import { useState } from 'react'

const DARK = '#1A1A2E'
const ACCENT = '#C8F135'

export default function AiChatButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Chat widget */}
      {open && (
        <div className="fixed bottom-24 right-4 z-50 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden">
          <div
            className="flex items-center justify-between px-4 py-3 border-b"
            style={{ backgroundColor: DARK, borderColor: 'rgba(255,255,255,0.1)' }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: ACCENT }} />
              <span className="text-white font-semibold text-sm">AI Ассистент</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/60 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 p-4 min-h-48 flex flex-col items-center justify-center text-center gap-3">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${ACCENT}25` }}
            >
              <svg className="w-6 h-6" style={{ color: DARK }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <p className="text-gray-600 text-sm">
              AI чат подключается отдельно.<br />
              Пока можете задать вопрос нашему менеджеру.
            </p>
            <a
              href="https://wa.me/77001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 rounded-lg text-sm font-bold text-center transition-opacity hover:opacity-90"
              style={{ backgroundColor: ACCENT, color: DARK }}
            >
              Написать в WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-4 z-50 flex items-center gap-2 px-4 py-3 rounded-full shadow-lg transition-all hover:scale-105 hover:shadow-xl font-bold text-sm"
        style={{ backgroundColor: ACCENT, color: DARK }}
        aria-label="Открыть AI чат"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span
            className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
            style={{ backgroundColor: DARK }}
          />
          <span
            className="relative inline-flex rounded-full h-2.5 w-2.5"
            style={{ backgroundColor: DARK }}
          />
        </span>
        <span className="hidden sm:inline">Есть вопросы? Спроси AI</span>
        <svg className="w-5 h-5 sm:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>
    </>
  )
}
