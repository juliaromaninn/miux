'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const FIGMA_URL =
  'https://www.figma.com/board/BNgFkcogtBjnWn78E6RBta/-Template--Framework-MIUX?node-id=0-1&t=OfevhWJZcpvjEkQ9-1'

const EXPERIENCE = [
  'Menos de 1 ano',
  '1 a 3 anos',
  '3 a 5 anos',
  '5 a 10 anos',
  'Mais de 10 anos',
]

const CHALLENGES = [
  'Convencer lideranças e stakeholders',
  'Métricas e dados dispersos',
  'Falta de processo estruturado',
  'Dificuldade em conectar UX e negócio',
  'Acompanhamento pós-entrega inexistente',
  'Outro',
]

const inputCls = cn(
  'w-full rounded-xl border border-white/10 bg-[#201D1D] px-4 py-3.5 text-sm text-white placeholder-white/25',
  'transition-all duration-200 focus:outline-none focus:border-[#A1FF62]/60 focus:ring-2 focus:ring-[#A1FF62]/20 hover:border-white/20',
)

const selectCls = cn(inputCls, 'appearance-none cursor-pointer [&_option]:bg-[#201D1D]')

export function ObrigadoContent() {
  const [email, setEmail] = useState('')
  const [form, setForm] = useState({
    company: '',
    experience_years: '',
    biggest_challenge: '',
    wants_interview: false,
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>('idle')

  useEffect(() => {
    const stored = sessionStorage.getItem('miux_email')
    if (stored) setEmail(stored)
  }, [])

  function set(field: string, value: string | boolean) {
    setForm((p) => ({ ...p, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email || 'unknown@miux.com.br', ...form }),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="min-h-screen bg-[#201D1D] flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Glow */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(161,255,98,0.10) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative max-w-lg w-full">
        {/* ── Confirmation block ── */}
        <div className="text-center mb-10">
          {/* Checkmark */}
          <div className="relative mx-auto w-20 h-20 mb-8">
            <div
              className="absolute inset-0 rounded-full bg-[#A1FF62]/20"
              style={{ animation: 'pulse-lime 2s infinite' }}
            />
            <div className="relative w-20 h-20 rounded-full bg-[#A1FF62]/20 border border-[#A1FF62]/40 flex items-center justify-center text-3xl text-[#A1FF62]">
              ✓
            </div>
          </div>

          <h1 className="text-h2 text-[#F4F4F4] mb-4">
            Obrigada por<br />
            <span className="gradient-text">participar!</span>
          </h1>
          <p className="text-lg text-[#B8B8B8] mb-8 leading-relaxed">
            Seu acesso ao MIUX está liberado.<br />
            Clique abaixo para abrir o template.
          </p>

          {/* Primary CTA — links directly to Figma */}
          <a
            href={FIGMA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#A1FF62] px-8 py-4 text-base font-bold text-[#201D1D] transition-all hover:bg-[#B4FF85] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-10px_rgba(161,255,98,0.5)]"
          >
            Abrir Template MIUX
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* ── "Nos ajude" form ── */}
        <div className="border-t border-white/[0.07] pt-8">
          <div className="text-center mb-6">
            <h2 className="text-base font-bold text-[#F4F4F4] mb-1">
              Nos ajude a evoluir o MIUX
            </h2>
            <p className="text-sm text-[#6E6A6A]">Leva menos de 1 minuto. Totalmente opcional.</p>
          </div>

          {status === 'sent' ? (
            <div className="rounded-2xl border border-[#A1FF62]/20 bg-[#A1FF62]/[0.06] p-6 text-center">
              <p className="font-semibold text-[#A1FF62] mb-1">Obrigada pelo feedback! 🙌</p>
              <p className="text-sm text-[#B8B8B8]">
                Suas respostas vão nos ajudar a melhorar o framework.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Empresa */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-white/70">Empresa</label>
                <input
                  type="text"
                  placeholder="Nome da empresa onde você trabalha"
                  value={form.company}
                  onChange={(e) => set('company', e.target.value)}
                  className={inputCls}
                />
              </div>

              {/* Experiência */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-white/70">Experiência</label>
                <div className="relative">
                  <select
                    value={form.experience_years}
                    onChange={(e) => set('experience_years', e.target.value)}
                    className={selectCls}
                  >
                    <option value="">Tempo de experiência em UX</option>
                    {EXPERIENCE.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/30">↓</div>
                </div>
              </div>

              {/* Entrevista — checkbox */}
              <label className="flex items-start gap-3 cursor-pointer group pt-1">
                <div className="relative mt-0.5 shrink-0">
                  <input
                    type="checkbox"
                    checked={form.wants_interview}
                    onChange={(e) => set('wants_interview', e.target.checked)}
                    className="sr-only"
                  />
                  <div
                    className={cn(
                      'w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200',
                      form.wants_interview
                        ? 'bg-[#A1FF62] border-[#A1FF62]'
                        : 'border-white/20 group-hover:border-white/40 bg-transparent',
                    )}
                  >
                    {form.wants_interview && (
                      <svg className="w-3 h-3 text-[#201D1D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-sm text-white/60 leading-relaxed">
                  <span className="font-semibold text-white/80">Entrevista</span> — aceito participar de uma conversa rápida (15 min) para ajudar a evoluir o MIUX
                </span>
              </label>

              {/* Dificuldades */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-white/70">Dificuldades</label>
                <div className="relative">
                  <select
                    value={form.biggest_challenge}
                    onChange={(e) => set('biggest_challenge', e.target.value)}
                    className={selectCls}
                  >
                    <option value="">Maior dificuldade ao demonstrar impacto</option>
                    {CHALLENGES.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/30">↓</div>
                </div>
              </div>

              {status === 'error' && (
                <p className="text-sm text-[#F84131]">Algo deu errado. Tente novamente.</p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className={cn(
                  'w-full rounded-full py-3.5 text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 mt-1',
                  status === 'loading'
                    ? 'bg-white/[0.04] text-white/30 cursor-wait'
                    : 'border border-white/10 bg-white/[0.04] text-[#B8B8B8] hover:bg-white/[0.08] hover:text-[#F4F4F4] hover:border-white/20',
                )}
              >
                {status === 'loading' ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                    Enviando…
                  </>
                ) : (
                  'Enviar respostas'
                )}
              </button>
            </form>
          )}
        </div>

        {/* Back link */}
        <div className="mt-10 text-center">
          <Link href="/" className="text-sm font-bold text-[#A1FF62]/60 hover:text-[#A1FF62] transition-colors">
            ← Voltar ao MIUX
          </Link>
        </div>
      </div>
    </main>
  )
}
