'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

const LABELS: Record<string, string> = {
  rating: 'Avaliação geral',
  clarity_score: 'Clareza do framework',
  usefulness_score: 'Utilidade percebida',
}

const inputClass = cn(
  'w-full rounded-xl border border-white/10 bg-[#201D1D] px-4 py-3.5 text-sm text-white placeholder-white/25',
  'transition-all duration-200',
  'focus:outline-none focus:border-[#A1FF62]/60 focus:ring-2 focus:ring-[#A1FF62]/20',
  'hover:border-white/20',
)

function StarRating({
  name,
  label,
  value,
  onChange,
}: {
  name: string
  label: string
  value: number
  onChange: (name: string, val: number) => void
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-white/70">{label} *</span>
      <div className="flex gap-1.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onChange(name, star)}
            className={cn(
              'text-3xl transition-all duration-150 hover:scale-110',
              star <= value ? 'text-[#A1FF62]' : 'text-white/15 hover:text-[#A1FF62]/50'
            )}
            aria-label={`${star} estrela${star > 1 ? 's' : ''}`}
          >
            ★
          </button>
        ))}
      </div>
    </div>
  )
}

export function FeedbackForm() {
  const router = useRouter()
  const [form, setForm] = useState({
    email: typeof window !== 'undefined' ? sessionStorage.getItem('miux_email') ?? '' : '',
    rating: 0,
    clarity_score: 0,
    usefulness_score: 0,
    comment: '',
    would_pay: false,
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function handleRating(name: string, val: number) {
    setForm((prev) => ({ ...prev, [name]: val }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.rating || !form.clarity_score || !form.usefulness_score) {
      setError('Por favor, preencha todas as avaliações.')
      return
    }
    setLoading(true)
    setError('')

    const res = await fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    if (!res.ok) {
      setError('Algo deu errado. Tente novamente.')
      setLoading(false)
      return
    }

    router.push('/obrigado?feedback=1')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-white/70">Seu e-mail *</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="voce@empresa.com"
          value={form.email}
          onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
          className={inputClass}
        />
      </div>

      {(['rating', 'clarity_score', 'usefulness_score'] as const).map((key) => (
        <StarRating
          key={key}
          name={key}
          label={LABELS[key]}
          value={form[key]}
          onChange={handleRating}
        />
      ))}

      <div className="flex flex-col gap-1.5">
        <label htmlFor="comment" className="text-sm font-medium text-white/70">Comentário (opcional)</label>
        <textarea
          id="comment"
          rows={4}
          placeholder="O que você achou? O que poderia melhorar?"
          value={form.comment}
          onChange={(e) => setForm((p) => ({ ...p, comment: e.target.value }))}
          className={cn(inputClass, 'resize-none')}
        />
      </div>

      <label className="flex items-start gap-3 cursor-pointer group">
        <div className="relative mt-0.5">
          <input
            type="checkbox"
            checked={form.would_pay}
            onChange={(e) => setForm((p) => ({ ...p, would_pay: e.target.checked }))}
            className="sr-only"
          />
          <div className={cn(
            'w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200',
            form.would_pay
              ? 'bg-[#A1FF62] border-[#A1FF62]'
              : 'border-white/20 group-hover:border-white/40 bg-transparent'
          )}>
            {form.would_pay && <svg className="w-3 h-3 text-[#201D1D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
          </div>
        </div>
        <span className="text-sm text-white/60 leading-relaxed">
          Eu pagaria por uma versão mais completa ou ferramenta baseada no MIUX
        </span>
      </label>

      {error && <p className="text-sm text-[#F84131]">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className={cn(
          'w-full rounded-full py-4 text-base font-bold transition-all duration-300 flex items-center justify-center gap-3',
          loading
            ? 'bg-[#A1FF62]/50 cursor-wait text-[#201D1D]/60'
            : 'bg-[#A1FF62] text-[#201D1D] hover:bg-[#B4FF85] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-10px_rgba(161,255,98,0.5)]'
        )}
      >
        {loading ? (
          <>
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
            Enviando…
          </>
        ) : (
          'Enviar feedback'
        )}
      </button>
    </form>
  )
}
