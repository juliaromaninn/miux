'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { cn } from '@/lib/utils'

type FormState = 'idle' | 'filling' | 'loading' | 'success' | 'error'

const ROLES = [
  'Product Designer',
  'UX Designer',
  'UX Researcher',
  'UX Writer',
  'Product Manager',
  'Design Lead',
  'Design Manager',
  'Outro',
]

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

interface FieldProps {
  label: string
  id: string
  error?: string
  required?: boolean
  children: React.ReactNode
}

function Field({ label, id, error, required, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-white/70">
        {label}
        {required && <span className="text-[#A1FF62] ml-1">*</span>}
      </label>
      {children}
      {error && <span className="text-xs text-red-400">{error}</span>}
    </div>
  )
}

const inputClass = cn(
  'w-full rounded-xl border border-white/10 bg-[#201D1D] px-4 py-3.5 text-sm text-white placeholder-white/25',
  'transition-all duration-200',
  'focus:outline-none focus:border-[#A1FF62]/60 focus:ring-2 focus:ring-[#A1FF62]/20',
  'hover:border-white/20',
)

const selectClass = cn(
  inputClass,
  'appearance-none cursor-pointer',
  '[&_option]:bg-[#201D1D] [&_option]:text-white',
)

export function LeadForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [form, setForm] = useState({
    name: '',
    email: '',
    role: '',
    company: '',
    experience_years: '',
    biggest_challenge: '',
    wants_interview: false,
    lgpd: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [state, setState] = useState<FormState>('idle')

  function set(field: string, value: string | boolean) {
    setForm((p) => ({ ...p, [field]: value }))
    setErrors((p) => ({ ...p, [field]: '' }))
    if (state === 'idle') setState('filling')
  }

  function validate() {
    const errs: Record<string, string> = {}
    if (!form.name.trim()) errs.name = 'Nome é obrigatório'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = 'E-mail inválido'
    if (!form.lgpd) errs.lgpd = 'Você precisa concordar com a política de privacidade'
    return errs
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setState('loading')
    const { lgpd, ...payload } = form

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...payload,
          utm_source: searchParams.get('utm_source') ?? undefined,
          utm_medium: searchParams.get('utm_medium') ?? undefined,
          utm_campaign: searchParams.get('utm_campaign') ?? undefined,
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        if (data.error && typeof data.error === 'object') {
          const fieldErrors: Record<string, string> = {}
          for (const [k, v] of Object.entries(data.error)) {
            fieldErrors[k] = (v as string[])[0]
          }
          setErrors(fieldErrors)
          setState('filling')
          return
        }
        setState('error')
        return
      }

      sessionStorage.setItem('miux_email', form.email)
      setState('success')
      setTimeout(() => router.push('/obrigado'), 900)
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-[#A1FF62]/20 border border-[#A1FF62]/40 flex items-center justify-center text-3xl text-[#A1FF62] mb-6" style={{ animation: 'pulse-lime 1.8s infinite' }}>
          ✓
        </div>
        <p className="text-xl font-bold text-white mb-2">Perfeito! Estamos te redirecionando…</p>
        <p className="text-sm text-[#B8B8B8]">Seu acesso está sendo liberado</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      {/* Row 1 */}
      <div className="flex flex-col gap-5">
        <Field label="Nome completo" id="name" error={errors.name} required>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Seu nome"
            value={form.name}
            onChange={(e) => set('name', e.target.value)}
            autoComplete="name"
            className={cn(inputClass, errors.name && 'border-red-500/50')}
          />
        </Field>
        <Field label="E-mail profissional" id="email" error={errors.email} required>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="voce@empresa.com"
            value={form.email}
            onChange={(e) => set('email', e.target.value)}
            autoComplete="email"
            className={cn(inputClass, errors.email && 'border-red-500/50')}
          />
        </Field>
      </div>

      {/* Row 2 */}
      <div className="flex flex-col gap-5">
        <Field label="Cargo" id="role">
          <div className="relative">
            <select
              id="role"
              value={form.role}
              onChange={(e) => set('role', e.target.value)}
              className={selectClass}
            >
              <option value="">Selecione seu cargo</option>
              {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/30">↓</div>
          </div>
        </Field>
        <Field label="Empresa" id="company">
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Nome da empresa"
            value={form.company}
            onChange={(e) => set('company', e.target.value)}
            className={inputClass}
          />
        </Field>
      </div>

      {/* Row 3 */}
      <div className="flex flex-col gap-5">
        <Field label="Tempo de experiência" id="experience_years">
          <div className="relative">
            <select
              id="experience_years"
              value={form.experience_years}
              onChange={(e) => set('experience_years', e.target.value)}
              className={selectClass}
            >
              <option value="">Selecione</option>
              {EXPERIENCE.map((e) => <option key={e} value={e}>{e}</option>)}
            </select>
            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/30">↓</div>
          </div>
        </Field>
        <Field label="Maior dificuldade ao demonstrar impacto" id="biggest_challenge">
          <div className="relative">
            <select
              id="biggest_challenge"
              value={form.biggest_challenge}
              onChange={(e) => set('biggest_challenge', e.target.value)}
              className={selectClass}
            >
              <option value="">Selecione</option>
              {CHALLENGES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/30">↓</div>
          </div>
        </Field>
      </div>

      {/* Checkboxes */}
      <div className="space-y-3 pt-2">
        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative mt-0.5">
            <input
              type="checkbox"
              checked={form.wants_interview}
              onChange={(e) => set('wants_interview', e.target.checked)}
              className="sr-only"
            />
            <div className={cn(
              'w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200',
              form.wants_interview
                ? 'bg-[#A1FF62] border-[#A1FF62]'
                : 'border-white/20 group-hover:border-white/40 bg-transparent'
            )}>
              {form.wants_interview && <svg className="w-3 h-3 text-[#201D1D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
            </div>
          </div>
          <span className="text-sm text-white/60 leading-relaxed">
            Quero participar de uma entrevista para ajudar a evoluir o MIUX
          </span>
        </label>

        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative mt-0.5">
            <input
              type="checkbox"
              checked={form.lgpd}
              onChange={(e) => set('lgpd', e.target.checked)}
              className="sr-only"
            />
            <div className={cn(
              'w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200',
              form.lgpd
                ? 'bg-[#A1FF62] border-[#A1FF62]'
                : 'border-white/20 group-hover:border-white/40 bg-transparent',
              errors.lgpd && 'border-red-500/60'
            )}>
              {form.lgpd && <svg className="w-3 h-3 text-[#201D1D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
            </div>
          </div>
          <span className="text-sm text-white/60 leading-relaxed">
            Concordo com o uso dos meus dados conforme a{' '}
            <span className="text-white/80 underline underline-offset-2">Política de Privacidade</span>
            {' '}(LGPD) *
          </span>
        </label>
        {errors.lgpd && <p className="text-xs text-red-400 pl-8">{errors.lgpd}</p>}
      </div>

      {/* Error */}
      {state === 'error' && (
        <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3">
          <p className="text-sm text-red-400">Algo deu errado. Tente novamente em alguns instantes.</p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={state === 'loading'}
        className={cn(
          'w-full rounded-full py-4 text-base font-bold transition-all duration-300',
          'flex items-center justify-center gap-3',
          state === 'loading'
            ? 'bg-[#A1FF62]/50 cursor-wait text-[#201D1D]/60'
            : 'bg-[#A1FF62] text-[#201D1D] hover:bg-[#B4FF85] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-10px_rgba(161,255,98,0.5)]'
        )}
      >
        {state === 'loading' ? (
          <>
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
            Processando…
          </>
        ) : (
          <>
            Quero acessar o framework
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </>
        )}
      </button>

      <p className="text-xs text-[#6E6A6A] text-center">
        Gratuito. Sem spam.
      </p>
    </form>
  )
}
