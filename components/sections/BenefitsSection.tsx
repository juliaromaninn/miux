'use client'

import { AnimateIn } from '@/components/ui/AnimateIn'

const BENEFITS = [
  {
    icon: '📐',
    title: 'Tangibilize impacto',
    desc: 'Traduza melhorias de UX em receita, retenção e redução de custo com evidências reais.',
    highlight: true,
  },
  {
    icon: '🏛️',
    title: 'Atuação estratégica',
    desc: 'Saia do modo execução e entre na conversa de produto com argumentos que a liderança entende.',
  },
  {
    icon: '📚',
    title: 'Cases melhores',
    desc: 'Construa um portfólio com profundidade — não só antes e depois visual, mas dados reais.',
  },
  {
    icon: '🔗',
    title: 'UX mais próximo do negócio',
    desc: 'Alinhe prioridades de design com os OKRs e objetivos financeiros da empresa.',
  },
  {
    icon: '📈',
    title: 'Cultura de mensuração',
    desc: 'Crie um processo replicável que outros times possam adotar e escalar.',
  },
  {
    icon: '🎯',
    title: 'Priorização com dados',
    desc: 'Pare de discutir o que melhorar. Use a matriz de impacto para decidir com confiança.',
  },
]

export function BenefitsSection() {
  return (
    <section id="beneficios" className="py-28 px-6 lg:px-8 bg-[#201D1D]">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <AnimateIn>
          <div className="max-w-xl mb-16">
            <p className="text-label-eyebrow font-semibold text-[#A1FF62] mb-5">Benefícios</p>
            <h2 className="text-h2 text-[#F4F4F4]">
              Por que usar o MIUX
            </h2>
          </div>
        </AnimateIn>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BENEFITS.map((b, i) => (
            <AnimateIn key={b.title} delay={i * 70}>
              <div
                className={`group relative h-full rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 cursor-default ${
                  b.highlight
                    ? 'border-transparent bg-[#A1FF62]'
                    : 'border-white/[0.07] bg-[#312E2E] hover:border-white/[0.14]'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5 transition-transform duration-300 group-hover:scale-110 ${
                    b.highlight ? 'bg-[#201D1D]' : 'bg-white/[0.05]'
                  }`}
                >
                  {b.icon}
                </div>

                <h3 className={`text-base font-bold mb-2 ${b.highlight ? 'text-[#201D1D]' : 'text-[#F4F4F4]'}`}>
                  {b.title}
                </h3>
                <p className={`text-sm leading-relaxed ${b.highlight ? 'text-[#201D1D]/70' : 'text-[#B8B8B8]'}`}>
                  {b.desc}
                </p>

                <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <svg className={`w-4 h-4 ${b.highlight ? 'text-[#201D1D]/40' : 'text-white/20'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
