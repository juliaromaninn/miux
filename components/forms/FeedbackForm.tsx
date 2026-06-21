'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { Textarea } from '@/components/ui/Textarea'
import { Input } from '@/components/ui/Input'

const LABELS: Record<string, string> = {
  rating: 'Avaliação geral',
  clarity_score: 'Clareza do framework',
  usefulness_score: 'Utilidade percebida',
}

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
    <div className="flex flex-col gap-1">
      <span className="text-sm font-medium text-gray-700">{label} *</span>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onChange(name, star)}
            className={`text-2xl transition-colors ${star <= value ? 'text-amber-400' : 'text-gray-300'} hover:text-amber-400`}
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-lg mx-auto">
      <Input
        id="email"
        name="email"
        type="email"
        label="Seu e-mail *"
        placeholder="voce@empresa.com"
        value={form.email}
        onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
      />

      {(['rating', 'clarity_score', 'usefulness_score'] as const).map((key) => (
        <StarRating
          key={key}
          name={key}
          label={LABELS[key]}
          value={form[key]}
          onChange={handleRating}
        />
      ))}

      <Textarea
        id="comment"
        label="Comentário (opcional)"
        placeholder="O que você achou? O que poderia melhorar?"
        rows={4}
        value={form.comment}
        onChange={(e) => setForm((p) => ({ ...p, comment: e.target.value }))}
      />

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={form.would_pay}
          onChange={(e) => setForm((p) => ({ ...p, would_pay: e.target.checked }))}
          className="mt-0.5 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        />
        <span className="text-sm text-gray-700">
          Eu pagaria por uma versão mais completa ou ferramenta baseada no MIUX
        </span>
      </label>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <Button type="submit" loading={loading} size="lg" className="w-full">
        Enviar feedback
      </Button>
    </form>
  )
}
