import type { Metadata } from 'next'
import './globals.css'

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
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}
