'use client'

import { AnimateIn } from '@/components/ui/AnimateIn'

const STEPS = [
  {
    number: '01',
    emoji: '📦',
    title: 'Produto e Entrega',
    desc: 'Documente o que foi entregue — funcionalidade, escopo e contexto do projeto.',
    color: '#A1FF62',
  },
  {
    number: '02',
    emoji: '🎯',
    title: 'Objetivos',
    desc: 'Defina o que se esperava atingir com aquela entrega e quais hipóteses guiaram as decisões.',
    color: '#6840FF',
  },
  {
    number: '03',
    emoji: '📊',
    title: 'Indicadores',
    desc: 'Escolha as métricas de negócio que serão acompanhadas — conversão, retenção, NPS, receita.',
    color: '#A1FF62',
  },
  {
    number: '04',
    emoji: '🔄',
    title: 'Antes e Depois',
    desc: 'Compare os dados antes e após a entrega. Aqui mora o impacto real e mensurável.',
    color: '#6840FF',
  },
  {
    number: '05',
    emoji: '🔜',
    title: 'Próximos Passos',
    desc: 'Mantenha o ciclo vivo — defina o que será monitorado e os próximos experimentos.',
    color: '#A1FF62',
  },
]

export function SolutionSection() {
  return (
    <section id="como-funciona" className="py-28 px-6 lg:px-8 bg-[#201D1D]">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <AnimateIn>
          <div className="max-w-xl mb-20">
            <p className="text-label-eyebrow font-semibold text-[#A1FF62] mb-5">A Solução</p>
            <h2 className="text-h2 text-[#F4F4F4] mb-5">
              Conheça o MIUX
            </h2>
            <p className="text-[#B8B8B8] text-lg leading-relaxed">
              Cinco dimensões que transformam qualquer entrega de UX em um case com evidências concretas.
            </p>
          </div>
        </AnimateIn>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-[#A1FF62]/30 via-[#6840FF]/40 to-[#A1FF62]/10" />

          <div className="space-y-5" id="framework">
            {STEPS.map((step, i) => (
              <AnimateIn key={step.number} delay={i * 100}>
                <div className="group relative lg:pl-20 flex flex-col lg:flex-row gap-6 items-start">
                  {/* Number circle */}
                  <div
                    className="absolute left-0 top-0 w-12 h-12 rounded-full border-2 items-center justify-center font-bold text-sm transition-all duration-300 group-hover:scale-110 hidden lg:flex bg-[#201D1D]"
                    style={{ borderColor: step.color, color: step.color }}
                  >
                    {step.number}
                  </div>

                  {/* Card — Surface 1 */}
                  <div
                    className="flex-1 rounded-2xl border border-white/[0.07] bg-[#312E2E] p-6 transition-all duration-300 hover:-translate-y-0.5"
                    style={{ borderColor: `${step.color}25` }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0"
                        style={{ backgroundColor: `${step.color}1A` }}
                      >
                        {step.emoji}
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span
                            className="text-xs font-bold px-2.5 py-0.5 rounded-full"
                            style={{ backgroundColor: `${step.color}1A`, color: step.color }}
                          >
                            {step.number}
                          </span>
                          <h3 className="text-lg font-bold text-[#F4F4F4]">{step.title}</h3>
                        </div>
                        <p className="text-[#B8B8B8] leading-relaxed">{step.desc}</p>
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
