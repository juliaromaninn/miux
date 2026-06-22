import { FeedbackForm } from '@/components/forms/FeedbackForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Feedback — MIUX',
  robots: { index: false },
}

export default function FeedbackPage() {
  return (
    <main className="min-h-screen bg-[#201D1D] px-4 py-24 relative overflow-hidden">
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(104,64,255,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />
      <div className="relative max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-h3 text-[#F4F4F4] mb-4">
            O que você achou do MIUX?
          </h1>
          <p className="text-[#B8B8B8] text-lg">
            Seu feedback é fundamental para evoluir o framework. Leva menos de 2 minutos.
          </p>
        </div>
        <div className="rounded-3xl border border-white/[0.08] bg-[#312E2E] p-8 lg:p-10">
          <FeedbackForm />
        </div>
      </div>
    </main>
  )
}
