'use client'

import { MiuxMockup } from '@/components/ui/MiuxMockup'
import { AnimateIn } from '@/components/ui/AnimateIn'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#201D1D] pt-28 pb-16 px-6 lg:px-8">
      {/* Background glows */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 75% 15%, rgba(161,255,98,0.08) 0%, transparent 60%), radial-gradient(ellipse 50% 45% at 5% 95%, rgba(104,64,255,0.10) 0%, transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">

          {/* Left — Copy */}
          <div>
            {/* Badge */}
            <AnimateIn delay={0}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-[#A1FF62]" style={{ animation: 'pulse-lime 2.5s infinite' }} />
                <span className="text-xs font-semibold text-[#B8B8B8] tracking-wide">Framework gratuito para times de produto</span>
              </div>
            </AnimateIn>

            {/* Headline */}
            <AnimateIn delay={80}>
              <h1 className="text-h2 text-[#F4F4F4] mb-5 leading-[1.08]">
                Transforme entregas<br />
                de UX em{' '}
                <span className="gradient-text">evidências</span><br />
                de impacto.
              </h1>
            </AnimateIn>

            {/* Subheadline */}
            <AnimateIn delay={160}>
              <p className="text-lg sm:text-xl text-[#B8B8B8] leading-relaxed mb-10 max-w-lg">
                Uma forma simples e estruturada de conectar decisões de design aos resultados do negócio — e finalmente demonstrar o valor que você já gera.
              </p>
            </AnimateIn>

            {/* CTAs */}
            <AnimateIn delay={240}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#acesso"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#A1FF62] px-8 py-4 text-base font-bold text-[#201D1D] transition-all hover:bg-[#B4FF85] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-10px_rgba(161,255,98,0.5)]"
                >
                  Acessar Framework Gratuitamente
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="#como-funciona"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 text-base font-semibold text-[#F4F4F4] transition-all hover:border-[#6840FF]/60 hover:bg-[#6840FF]/10 hover:-translate-y-0.5"
                >
                  Ver Como Funciona
                </a>
              </div>
            </AnimateIn>

            {/* Social proof */}
            <AnimateIn delay={320}>
              <div className="flex items-center gap-4 mt-10">
                <div className="flex -space-x-2">
                  {['#A1FF62', '#6840FF', '#C9FF9E', '#9B82FF'].map((c, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-[#201D1D] flex items-center justify-center text-[#201D1D] text-xs font-bold"
                      style={{ backgroundColor: c }}
                    >
                      {['A', 'B', 'C', 'D'][i]}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-[#B8B8B8]">
                  Criado na prática, para{' '}
                  <span className="font-semibold text-[#F4F4F4]">designers e PMs</span>
                </p>
              </div>
            </AnimateIn>
          </div>

          {/* Right — Mockup */}
          <AnimateIn delay={200} from="scale" className="lg:pl-6">
            <MiuxMockup />
          </AnimateIn>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs font-medium text-[#B8B8B8] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#B8B8B8] to-transparent" />
      </div>
    </section>
  )
}
