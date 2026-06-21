'use client'

import { Suspense } from 'react'
import { LeadForm } from '@/components/forms/LeadForm'
import { AnimateIn } from '@/components/ui/AnimateIn'

export function FormSection() {
  return (
    <section id="acesso" className="relative py-28 px-6 lg:px-8 bg-[#09090B] overflow-hidden noise">
      {/* Background glows */}
      <div
        className="pointer-events-none absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(108,99,255,0.1) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(108,99,255,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — Value prop */}
          <AnimateIn>
            <div className="lg:sticky lg:top-32">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#6C63FF] mb-4">
                Acesso gratuito
              </p>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
                Pronto para<br />
                <span className="gradient-text">demonstrar seu</span><br />
                impacto?
              </h2>
              <p className="text-white/50 text-lg leading-relaxed mb-10">
                Preencha o formulário e acesse gratuitamente o template do MIUX — junto com instruções de uso.
              </p>

              {/* What you get */}
              <div className="space-y-4">
                {[
                  { emoji: '🗺️', text: 'Template completo do MIUX (FigJam)' },
                  { emoji: '📋', text: 'Guia de preenchimento passo a passo' },
                  { emoji: '🎯', text: 'Exemplos reais de uso por outros designers' },
                  { emoji: '🔔', text: 'Novidades e evoluções do framework' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-base shrink-0">
                      {item.emoji}
                    </div>
                    <span className="text-sm text-white/60">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>

          {/* Right — Form card */}
          <AnimateIn delay={120}>
            <div className="rounded-3xl border border-white/[0.08] bg-white/[0.03] p-8 lg:p-10 backdrop-blur-sm">
              <Suspense>
                <LeadForm />
              </Suspense>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
