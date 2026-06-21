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
    <section id="beneficios" className="py-28 px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <AnimateIn>
          <div className="max-w-xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#6C63FF] mb-4">Benefícios</p>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight">
              Por que usar o MIUX
            </h2>
          </div>
        </AnimateIn>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BENEFITS.map((b, i) => (
            <AnimateIn key={b.title} delay={i * 70}>
              <div
                className={`group relative rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-default ${
                  b.highlight
                    ? 'border-[#6C63FF]/30 bg-[#EEF2FF] hover:shadow-[#6C63FF]/10'
                    : 'border-gray-100 bg-white hover:border-gray-200'
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5 transition-transform duration-300 group-hover:scale-110 ${
                    b.highlight ? 'bg-[#6C63FF] text-white' : 'bg-gray-50'
                  }`}
                >
                  {b.icon}
                </div>

                <h3 className={`text-base font-bold mb-2 ${b.highlight ? 'text-[#6C63FF]' : 'text-gray-900'}`}>
                  {b.title}
                </h3>
                <p className={`text-sm leading-relaxed ${b.highlight ? 'text-[#6C63FF]/70' : 'text-gray-500'}`}>
                  {b.desc}
                </p>

                {/* Hover arrow */}
                <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
