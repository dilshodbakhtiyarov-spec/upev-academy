import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'UPEV Academy — Поступление в университеты Турции бесплатно',
  description: 'Помогаем студентам из Казахстана, Узбекистана и России поступить в частные университеты Турции без экзаменов. Наши услуги бесплатны для студентов.',
  keywords: 'университеты Турции, поступление в Турцию, обучение в Турции, UPEV Academy, Стамбул, без экзаменов',
  openGraph: {
    title: 'UPEV Academy — Поступи в университет Турции бесплатно',
    description: 'Официальный партнёр частных университетов Турции. Поступление по аттестату, без экзаменов. Услуги бесплатны.',
    url: 'https://upev-academy.vercel.app',
    siteName: 'UPEV Academy',
    locale: 'ru_RU',
    type: 'website',
  },
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
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
