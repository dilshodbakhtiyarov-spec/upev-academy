import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'UPEV Academy — Поступление в университеты Турции',
  description:
    'Помогаем студентам из Казахстана, Узбекистана и России поступить в частные университеты Турции без экзаменов. Услуги бесплатны для студентов.',
  keywords: 'университеты Турции, поступление в Турцию, обучение в Турции, UPEV Academy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  )
}
