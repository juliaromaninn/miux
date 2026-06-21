import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { CookieBanner } from '@/components/ui/CookieBanner'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })

export const metadata: Metadata = {
  title: 'MIUX — Mapa de Impacto de UX',
  description:
    'Framework gratuito para conectar decisões de UX a métricas de negócio. Justifique investimentos em experiência com dados concretos.',
  keywords: ['UX', 'métricas', 'framework', 'produto digital', 'impacto', 'ROI', 'design'],
  authors: [{ name: 'MIUX' }],
  openGraph: {
    title: 'MIUX — Mapa de Impacto de UX',
    description: 'Framework gratuito para conectar UX a negócio.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'MIUX',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MIUX — Mapa de Impacto de UX',
    description: 'Framework gratuito para conectar UX a negócio.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={geist.variable}>
      <body className="antialiased">
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
