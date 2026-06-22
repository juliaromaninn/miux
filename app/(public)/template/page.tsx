'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

// URL pública do template — substitua pelo link real do Figma/Notion
const TEMPLATE_URL = process.env.NEXT_PUBLIC_TEMPLATE_URL ?? '#'

export default function TemplatePage() {
  const router = useRouter()

  useEffect(() => {
    const email = sessionStorage.getItem('miux_email')
    if (!email) {
      router.push('/')
      return
    }

    fetch('/api/template', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    }).catch(() => {})
  }, [router])

  return (
    <main className="min-h-screen bg-[#201D1D] flex flex-col items-center justify-center px-4 py-24 relative overflow-hidden">
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(161,255,98,0.10) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

      <div className="relative max-w-2xl w-full text-center">
        <div className="text-5xl mb-6">🗺️</div>
        <h1 className="text-h3 text-[#F4F4F4] mb-4">
          Seu template está pronto
        </h1>
        <p className="text-[#B8B8B8] text-lg mb-8">
          Acesse o Mapa de Impacto de UX e comece a conectar suas decisões de design às métricas do negócio.
        </p>

        <div className="rounded-2xl border border-white/[0.07] bg-[#312E2E] p-8 mb-8 text-left">
          <h2 className="font-semibold text-[#F4F4F4] mb-4">O que você vai encontrar:</h2>
          <ul className="text-[#B8B8B8] space-y-2.5">
            {[
              'Matriz de mapeamento de touchpoints',
              'Tabela de conexão UX → métricas de negócio',
              'Guia de priorização por impacto',
              'Exemplos preenchidos para referência',
              'Instruções de uso passo a passo',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-[#A1FF62] mt-0.5 shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={TEMPLATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#A1FF62] px-8 py-4 text-base font-bold text-[#201D1D] transition-all hover:bg-[#B4FF85] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-10px_rgba(161,255,98,0.5)]"
          >
            Abrir template
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <Link
            href="/feedback"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-8 py-4 text-base font-semibold text-[#B8B8B8] transition-all hover:bg-white/[0.08] hover:text-[#F4F4F4]"
          >
            Deixar feedback
          </Link>
        </div>
      </div>
    </main>
  )
}
