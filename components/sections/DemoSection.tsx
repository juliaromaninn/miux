'use client'

import { AnimateIn } from '@/components/ui/AnimateIn'

export function DemoSection() {
  return (
    <section className="py-28 px-6 lg:px-8 bg-[#151313]">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <AnimateIn>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <p className="text-label-eyebrow font-semibold text-[#A1FF62] mb-5">Demonstração</p>
              <h2 className="text-h2 text-[#F4F4F4]">
                Veja o framework<br />em ação
              </h2>
            </div>
            <p className="text-[#B8B8B8] max-w-sm text-sm leading-relaxed">
              Template visual no FigJam — pronto para usar no seu próximo projeto.
            </p>
          </div>
        </AnimateIn>

        {/* Screenshot grid */}
        <div className="grid lg:grid-cols-3 gap-4">
          {/* Main preview */}
          <AnimateIn className="lg:col-span-2">
            <div className="group relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#312E2E] hover:border-[#A1FF62]/30 transition-all duration-500 aspect-video">
              <div className="absolute inset-0 dot-grid opacity-60" />
              <div className="absolute inset-0 flex flex-col">
                {/* Fake toolbar */}
                <div className="flex items-center gap-3 px-5 py-3 border-b border-white/[0.06] bg-[#363333]">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  </div>
                  <div className="flex-1 h-4 rounded-full bg-white/[0.05]" />
                  <div className="w-20 h-5 rounded-md bg-[#A1FF62]/15" />
                </div>
                {/* Fake canvas */}
                <div className="flex-1 p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-[#A1FF62]/10 flex items-center justify-center text-3xl mx-auto mb-4">
                      🗺️
                    </div>
                    <p className="text-sm font-semibold text-[#B8B8B8]">Preview do Template</p>
                    <p className="text-xs text-[#6E6A6A] mt-1">FigJam · Notion · PDF</p>
                  </div>
                </div>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#A1FF62] opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-[#201D1D] font-bold text-lg">Acesse o template →</span>
              </div>
              <div className="absolute bottom-4 left-4">
                <span className="text-xs font-semibold text-[#B8B8B8] bg-[#201D1D]/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  Canvas principal do MIUX
                </span>
              </div>
            </div>
          </AnimateIn>

          {/* Side previews */}
          <div className="flex flex-col gap-4">
            {[
              { label: 'Painel de indicadores', emoji: '📊', desc: 'Antes e depois por métrica' },
              { label: 'Relatório de impacto', emoji: '📋', desc: 'Exportável para apresentações' },
            ].map((item, i) => (
              <AnimateIn key={item.label} delay={i * 100}>
                <div className="group relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#312E2E] hover:border-[#6840FF]/40 transition-all duration-500 flex-1" style={{ minHeight: 160 }}>
                  <div className="absolute inset-0 dot-grid opacity-40" />
                  <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                    <div className="text-3xl mb-3">{item.emoji}</div>
                    <p className="text-sm font-semibold text-[#B8B8B8]">{item.label}</p>
                    <p className="text-xs text-[#6E6A6A] mt-1">{item.desc}</p>
                  </div>
                  <div className="absolute inset-0 bg-[#6840FF] opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">Em breve</span>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <AnimateIn delay={200}>
          <p className="text-center text-sm text-[#6E6A6A] mt-8">
            Template disponível em{' '}
            <span className="font-semibold text-[#B8B8B8]">FigJam · Notion · PDF</span>
            {' '}· Sem necessidade de conta
          </p>
        </AnimateIn>
      </div>
    </section>
  )
}
