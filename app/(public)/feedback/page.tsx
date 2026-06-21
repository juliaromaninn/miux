import { FeedbackForm } from '@/components/forms/FeedbackForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Feedback — MIUX',
  robots: { index: false },
}

export default function FeedbackPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white px-4 py-20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            O que você achou do MIUX?
          </h1>
          <p className="text-gray-600 text-lg">
            Seu feedback é fundamental para evoluir o framework. Leva menos de 2 minutos.
          </p>
        </div>
        <FeedbackForm />
      </div>
    </main>
  )
}
