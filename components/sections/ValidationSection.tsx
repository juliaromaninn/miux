'use client'

import { AnimateIn } from '@/components/ui/AnimateIn'

const STATS = [
  { value: '—', label: 'Designers usando', placeholder: true },
  { value: '—', label: 'Empresas', placeholder: true },
  { value: '—', label: 'Projetos documentados', placeholder: true },
  { value: '—', label: 'Entrevistas realizadas', placeholder: true },
]

export function ValidationSection() {
  return (
    <section className="py-28 px-6 lg:px-8 bg-[#F9FAFB]">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <AnimateIn>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#6C63FF] mb-4">Origem</p>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-6">
                Criado na prática.
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                O MIUX nasceu da necessidade de acompanhar e demonstrar resultados de Product Design em ambientes corporativos reais — onde lideranças exigem dados, não apenas prints bonitos.
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                Desenvolvido ao longo de projetos em diferentes empresas, refinado com feedback de designers, PMs e líderes que vivem o mesmo desafio diariamente.
              </p>
            </div>
          </AnimateIn>

          {/* Right — Stats */}
          <AnimateIn delay={120}>
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-gray-200 bg-white p-6 flex flex-col gap-2"
                >
                  <span
                    className={`text-4xl font-black ${
                      stat.placeholder ? 'text-gray-200' : 'text-[#6C63FF]'
                    }`}
                  >
                    {stat.value}
                  </span>
                  <span className="text-sm font-medium text-gray-500">{stat.label}</span>
                  {stat.placeholder && (
                    <span className="text-xs text-gray-300 italic">Em breve</span>
                  )}
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>

        {/* Quote */}
        <AnimateIn delay={200}>
          <div className="mt-20 rounded-3xl bg-[#09090B] p-10 lg:p-14 relative overflow-hidden">
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(108,99,255,0.15) 0%, transparent 70%)' }}
            />
            <div className="relative max-w-3xl">
              <div className="text-4xl text-[#6C63FF] mb-6 font-serif leading-none">"</div>
              <p className="text-xl sm:text-2xl font-semibold text-white leading-relaxed mb-8">
                A maioria dos designers sabe fazer bom design. O desafio é fazer o bom design ser reconhecido como bom negócio.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#6C63FF] flex items-center justify-center text-white font-bold text-sm">
                  JR
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Julia Romani</p>
                  <p className="text-xs text-white/40">Criadora do MIUX</p>
                </div>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
