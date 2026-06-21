'use client'

import { AnimateIn } from '@/components/ui/AnimateIn'

const STEPS = [
  {
    number: '01',
    emoji: '📦',
    title: 'Produto e Entrega',
    desc: 'Documente o que foi entregue — funcionalidade, escopo e contexto do projeto.',
    color: '#6C63FF',
    bg: '#EEF2FF',
  },
  {
    number: '02',
    emoji: '🎯',
    title: 'Objetivos',
    desc: 'Defina o que se esperava atingir com aquela entrega e quais hipóteses guiaram as decisões.',
    color: '#0EA5E9',
    bg: '#F0F9FF',
  },
  {
    number: '03',
    emoji: '📊',
    title: 'Indicadores',
    desc: 'Escolha as métricas de negócio que serão acompanhadas — conversão, retenção, NPS, receita.',
    color: '#10B981',
    bg: '#F0FDF4',
  },
  {
    number: '04',
    emoji: '🔄',
    title: 'Antes e Depois',
    desc: 'Compare os dados antes e após a entrega. Aqui mora o impacto real e mensurável.',
    color: '#F59E0B',
    bg: '#FFFBEB',
  },
  {
    number: '05',
    emoji: '🔜',
    title: 'Próximos Passos',
    desc: 'Mantenha o ciclo vivo — defina o que será monitorado e os próximos experimentos.',
    color: '#EC4899',
    bg: '#FDF2F8',
  },
]

export function SolutionSection() {
  return (
    <section id="como-funciona" className="py-28 px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <AnimateIn>
          <div className="max-w-xl mb-20">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#6C63FF] mb-4">A Solução</p>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-4">
              Conheça o MIUX
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Cinco dimensões que transformam qualquer entrega de UX em um case com evidências concretas.
            </p>
          </div>
        </AnimateIn>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-[#6C63FF]/20 via-[#6C63FF]/40 to-[#6C63FF]/10" />

          <div className="space-y-6" id="framework">
            {STEPS.map((step, i) => (
              <AnimateIn key={step.number} delay={i * 100}>
                <div className="group relative lg:pl-20 flex flex-col lg:flex-row gap-6 items-start">
                  {/* Number circle */}
                  <div
                    className="absolute left-0 top-0 w-12 h-12 rounded-full border-2 flex items-center justify-center font-black text-sm transition-all duration-300 group-hover:scale-110 hidden lg:flex"
                    style={{ borderColor: step.color, color: step.color, backgroundColor: step.bg }}
                  >
                    {step.number}
                  </div>

                  {/* Card */}
                  <div
                    className="flex-1 rounded-2xl border bg-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                    style={{ borderColor: `${step.color}20` }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0"
                        style={{ backgroundColor: step.bg }}
                      >
                        {step.emoji}
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span
                            className="text-xs font-bold px-2.5 py-0.5 rounded-full"
                            style={{ backgroundColor: step.bg, color: step.color }}
                          >
                            {step.number}
                          </span>
                          <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                        </div>
                        <p className="text-gray-500 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
