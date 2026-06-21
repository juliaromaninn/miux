'use client'

import { MiuxMockup } from '@/components/ui/MiuxMockup'
import { AnimateIn } from '@/components/ui/AnimateIn'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white pt-24 pb-16 px-6 lg:px-8">
      {/* Background radial gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 70% 20%, rgba(108,99,255,0.07) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 10% 90%, rgba(108,99,255,0.04) 0%, transparent 60%)',
        }}
      />

      <div className="mx-auto max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left — Copy */}
          <div>
            {/* Badge */}
            <AnimateIn delay={0}>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#6C63FF]/20 bg-[#EEF2FF] px-4 py-1.5 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-[#6C63FF] animate-pulse" />
                <span className="text-xs font-semibold text-[#6C63FF] tracking-wide">Framework gratuito para times de produto</span>
              </div>
            </AnimateIn>

            {/* Headline */}
            <AnimateIn delay={80}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-gray-900 leading-[1.02] mb-6">
                Transforme<br />
                entregas de UX<br />
                em{' '}
                <span className="gradient-text">evidências</span><br />
                de impacto.
              </h1>
            </AnimateIn>

            {/* Subheadline */}
            <AnimateIn delay={160}>
              <p className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-10 max-w-lg">
                Uma forma simples e estruturada de conectar decisões de design aos resultados do negócio — e finalmente demonstrar o valor que você já gera.
              </p>
            </AnimateIn>

            {/* CTAs */}
            <AnimateIn delay={240}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#acesso"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#6C63FF] px-8 py-4 text-base font-bold text-white transition-all hover:bg-[#5A52E0] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#6C63FF]/30"
                >
                  Acessar Framework Gratuitamente
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="#como-funciona"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-8 py-4 text-base font-semibold text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50 hover:-translate-y-0.5"
                >
                  Ver Como Funciona
                </a>
              </div>
            </AnimateIn>

            {/* Social proof */}
            <AnimateIn delay={320}>
              <div className="flex items-center gap-4 mt-10">
                <div className="flex -space-x-2">
                  {['#6C63FF', '#818CF8', '#A78BFA', '#C4B5FD'].map((c, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                      style={{ backgroundColor: c }}
                    >
                      {['A', 'B', 'C', 'D'][i]}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500">
                  Criado na prática, para{' '}
                  <span className="font-semibold text-gray-700">designers e PMs</span>
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
        <span className="text-xs font-medium text-gray-400 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-400 to-transparent" />
      </div>
    </section>
  )
}
