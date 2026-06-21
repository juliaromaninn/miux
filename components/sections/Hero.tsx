import { LeadForm } from '@/components/forms/LeadForm'
import { Suspense } from 'react'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white py-20 px-4 text-center">
      <div className="mx-auto max-w-3xl">
        <span className="inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-700 mb-6">
          Framework gratuito para times de produto
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          Mapeie o impacto real da experiência no seu negócio
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          O <strong>MIUX</strong> é um framework prático para conectar decisões de UX a métricas de negócio — e justificar investimentos em experiência com dados concretos.
        </p>
        <Suspense>
          <LeadForm />
        </Suspense>
      </div>
    </section>
  )
}
