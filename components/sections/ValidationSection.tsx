'use client'

import { AnimateIn } from '@/components/ui/AnimateIn'

export function ValidationSection() {
  return (
    <section className="py-28 px-6 lg:px-8 bg-[#151313]">
      <div className="mx-auto max-w-7xl">
        <AnimateIn>
          <div className="max-w-2xl mb-20">
            <p className="text-label-eyebrow font-semibold text-[#A1FF62] mb-5">Origem</p>
            <h2 className="text-h2 text-[#F4F4F4] mb-6">
              Criado na prática.
            </h2>
            <p className="text-[#B8B8B8] text-lg leading-relaxed mb-8">
              O MIUX nasceu da necessidade de acompanhar e demonstrar resultados de Product Design em ambientes corporativos reais — onde lideranças exigem dados, não apenas prints bonitos.
            </p>
            <p className="text-[#6E6A6A] text-base leading-relaxed">
              Desenvolvido ao longo de projetos em diferentes empresas, refinado com feedback de designers, PMs e líderes que vivem o mesmo desafio diariamente.
            </p>
          </div>
        </AnimateIn>

        {/* Quote — Surface 1 */}
        <AnimateIn delay={200}>
          <div className="mt-20 rounded-3xl bg-[#312E2E] p-10 lg:p-14 relative overflow-hidden border border-white/[0.06]">
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(161,255,98,0.12) 0%, transparent 70%)' }}
            />
            <div className="relative max-w-3xl">
              <div className="text-5xl text-[#A1FF62] mb-6 leading-none font-serif">&ldquo;</div>
              <p className="text-body-lg sm:text-title font-medium text-[#F4F4F4] leading-snug mb-8">
                A maioria dos designers sabe fazer bom design. O desafio é fazer o bom design ser reconhecido como bom negócio.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#A1FF62] flex items-center justify-center text-[#201D1D] font-bold text-sm">
                  JR
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#F4F4F4]">Julia Romani</p>
                  <p className="text-xs text-[#B8B8B8]">Criadora do MIUX</p>
                </div>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
