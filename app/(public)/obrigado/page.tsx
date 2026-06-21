import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Obrigada por participar! — MIUX',
  robots: { index: false },
}

export default function ObrigadoPage() {
  return (
    <main className="min-h-screen bg-[#09090B] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(108,99,255,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

      <div className="relative max-w-lg w-full text-center">
        {/* Icon */}
        <div className="relative mx-auto w-20 h-20 mb-8">
          <div className="absolute inset-0 rounded-full bg-[#6C63FF]/20 animate-ping" />
          <div className="relative w-20 h-20 rounded-full bg-[#6C63FF]/20 border border-[#6C63FF]/30 flex items-center justify-center text-3xl">
            ✓
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
          Obrigada por<br />
          <span style={{
            background: 'linear-gradient(135deg, #6C63FF, #A78BFA)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            participar!
          </span>
        </h1>

        <p className="text-lg text-white/50 mb-10 leading-relaxed">
          Seu acesso ao MIUX está liberado.<br />
          Clique abaixo para abrir o template.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/template"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#6C63FF] px-8 py-4 text-base font-bold text-white transition-all hover:bg-[#5A52E0] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#6C63FF]/30"
          >
            Abrir Template MIUX
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
          <Link
            href="/feedback"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white/70 transition-all hover:bg-white/10 hover:text-white"
          >
            Deixar feedback
          </Link>
        </div>

        {/* Divider */}
        <div className="mt-14 pt-10 border-t border-white/[0.06]">
          <p className="text-sm text-white/25">
            Enquanto isso, compartilhe com outros designers que podem se beneficiar do MIUX.
          </p>
        </div>

        {/* MIUX logo */}
        <div className="mt-8">
          <Link href="/" className="text-sm font-black text-[#6C63FF]/50 hover:text-[#6C63FF] transition-colors">
            ← Voltar ao MIUX
          </Link>
        </div>
      </div>
    </main>
  )
}
