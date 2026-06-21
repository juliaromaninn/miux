'use client'

import { AnimateIn } from '@/components/ui/AnimateIn'

const PAINS = [
  {
    icon: '📉',
    title: 'Dificuldade para provar impacto',
    desc: 'Você entrega melhorias reais, mas não consegue mostrar os números que as sustentam.',
  },
  {
    icon: '🗂️',
    title: 'Métricas dispersas',
    desc: 'Os dados existem, mas estão espalhados em planilhas, tools e cabeças diferentes.',
  },
  {
    icon: '📁',
    title: 'Cases sem evidências',
    desc: 'Seu portfólio mostra o antes e depois visual, mas não o impacto real no negócio.',
  },
  {
    icon: '⏱️',
    title: 'Falta de acompanhamento pós-entrega',
    desc: 'Após o lançamento, ninguém rastreia se as hipóteses de UX se confirmaram.',
  },
  {
    icon: '🔗',
    title: 'Pouca conexão entre UX e negócio',
    desc: 'Design e estratégia falam línguas diferentes e as prioridades nunca se alinham.',
  },
]

export function ProblemSection() {
  return (
    <section className="relative py-28 px-6 lg:px-8 bg-[#09090B] overflow-hidden noise">
      {/* Top gradient fade */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />

      {/* Accent glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full"
        style={{ background: 'radial-gradient(ellipse, rgba(108,99,255,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Headline */}
        <AnimateIn>
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#6C63FF] mb-4">O Problema</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              O design gera valor.<br />
              <span className="text-white/40">Mas nem sempre consegue</span><br />
              <span className="text-white/40">demonstrá-lo.</span>
            </h2>
          </div>
        </AnimateIn>

        {/* Pain cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PAINS.map((pain, i) => (
            <AnimateIn key={pain.title} delay={i * 80}>
              <div className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 cursor-default">
                {/* Corner glow on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'radial-gradient(circle at top left, rgba(108,99,255,0.08) 0%, transparent 60%)' }} />

                <div className="relative">
                  <div className="text-2xl mb-4">{pain.icon}</div>
                  <h3 className="text-base font-bold text-white mb-2">{pain.title}</h3>
                  <p className="text-sm text-white/45 leading-relaxed">{pain.desc}</p>
                </div>
              </div>
            </AnimateIn>
          ))}

          {/* Highlight card */}
          <AnimateIn delay={PAINS.length * 80}>
            <div className="rounded-2xl bg-[#6C63FF] p-6 flex flex-col justify-between">
              <div className="text-4xl mb-4">💡</div>
              <div>
                <h3 className="text-base font-bold text-white mb-2">E se existisse um mapa?</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Uma estrutura que conecte suas entregas de UX diretamente aos resultados que a liderança valoriza.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
