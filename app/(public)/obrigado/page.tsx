import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Obrigada por participar! — MIUX',
  robots: { index: false },
}

export default function ObrigadoPage() {
  return (
    <main className="min-h-screen bg-[#201D1D] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(161,255,98,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

      <div className="relative max-w-lg w-full text-center">
        {/* Icon */}
        <div className="relative mx-auto w-20 h-20 mb-8">
          <div className="absolute inset-0 rounded-full bg-[#A1FF62]/20" style={{ animation: 'pulse-lime 2s infinite' }} />
          <div className="relative w-20 h-20 rounded-full bg-[#A1FF62]/20 border border-[#A1FF62]/40 flex items-center justify-center text-3xl text-[#A1FF62]">
            ✓
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-h2 text-[#F4F4F4] mb-4">
          Obrigada por<br />
          <span className="gradient-text">participar!</span>
        </h1>

        <p className="text-lg text-[#B8B8B8] mb-10 leading-relaxed">
          Seu acesso ao MIUX está liberado.<br />
          Clique abaixo para abrir o template.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/template"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#A1FF62] px-8 py-4 text-base font-bold text-[#201D1D] transition-all hover:bg-[#B4FF85] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-10px_rgba(161,255,98,0.5)]"
          >
            Abrir Template MIUX
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
          <Link
            href="/feedback"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-8 py-4 text-base font-semibold text-[#B8B8B8] transition-all hover:bg-white/[0.08] hover:text-[#F4F4F4]"
          >
            Deixar feedback
          </Link>
        </div>

        {/* Divider */}
        <div className="mt-14 pt-10 border-t border-white/[0.06]">
          <p className="text-sm text-[#6E6A6A]">
            Enquanto isso, compartilhe com outros designers que podem se beneficiar do MIUX.
          </p>
        </div>

        {/* Back link */}
        <div className="mt-8">
          <Link href="/" className="text-sm font-bold text-[#A1FF62]/60 hover:text-[#A1FF62] transition-colors">
            ← Voltar ao MIUX
          </Link>
        </div>
      </div>
    </main>
  )
}
