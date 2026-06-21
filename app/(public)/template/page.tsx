'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'

// URL pública do template — substitua pelo link real do Figma/Notion
const TEMPLATE_URL = process.env.NEXT_PUBLIC_TEMPLATE_URL ?? '#'

export default function TemplatePage() {
  const router = useRouter()
  const [registered, setRegistered] = useState(false)

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

    setRegistered(true)
  }, [router])

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-2xl w-full text-center">
        <div className="text-5xl mb-6">🗺️</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Seu template está pronto
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Acesse o Mapa de Impacto de UX e comece a conectar suas decisões de design às métricas do negócio.
        </p>

        <div className="bg-indigo-50 rounded-2xl p-8 mb-8">
          <h2 className="font-semibold text-gray-900 mb-2">O que você vai encontrar:</h2>
          <ul className="text-left text-gray-700 space-y-2 mt-4">
            {[
              'Matriz de mapeamento de touchpoints',
              'Tabela de conexão UX → métricas de negócio',
              'Guia de priorização por impacto',
              'Exemplos preenchidos para referência',
              'Instruções de uso passo a passo',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-indigo-600 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <a href={TEMPLATE_URL} target="_blank" rel="noopener noreferrer">
              Abrir template
            </a>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="/feedback">Deixar feedback</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
