'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const NAV = [
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Framework', href: '#framework' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Wordmark */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl font-black tracking-tight text-[#6C63FF]">MIUX</span>
            <span className="hidden sm:block text-xs font-medium text-gray-400 pt-0.5">
              Mapa de Impacto de UX
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <a
              href="#acesso"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-[#6C63FF] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#5A52E0] transition-all hover:shadow-lg hover:shadow-[#6C63FF]/25 hover:-translate-y-px"
            >
              Acessar Framework
            </a>

            {/* Mobile burger */}
            <button
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={cn('block h-0.5 bg-current transition-all', menuOpen && 'rotate-45 translate-y-1.5')} />
                <span className={cn('block h-0.5 bg-current transition-all', menuOpen && 'opacity-0')} />
                <span className={cn('block h-0.5 bg-current transition-all', menuOpen && '-rotate-45 -translate-y-2')} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-gray-700 py-1"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#acesso"
            onClick={() => setMenuOpen(false)}
            className="rounded-xl bg-[#6C63FF] px-5 py-3 text-sm font-semibold text-white text-center"
          >
            Acessar Framework
          </a>
        </div>
      )}
    </header>
  )
}
