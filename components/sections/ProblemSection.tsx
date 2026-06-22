'use client'

import { useState, useCallback, useRef } from 'react'
import { AnimateIn } from '@/components/ui/AnimateIn'

const CARDS = [
  {
    icon: '📉',
    tag: 'Prova de impacto',
    title: 'Dificuldade para provar impacto',
    desc: 'Você entrega melhorias reais, mas não consegue mostrar os números que as sustentam.',
    lime: false,
  },
  {
    icon: '🗂️',
    tag: 'Dados dispersos',
    title: 'Métricas dispersas',
    desc: 'Os dados existem, mas estão espalhados em planilhas, tools e cabeças diferentes.',
    lime: false,
  },
  {
    icon: '📁',
    tag: 'Portfólio',
    title: 'Cases sem evidências',
    desc: 'Seu portfólio mostra o antes e depois visual, mas não o impacto real no negócio.',
    lime: false,
  },
  {
    icon: '⏱️',
    tag: 'Pós-entrega',
    title: 'Falta de acompanhamento pós-entrega',
    desc: 'Após o lançamento, ninguém rastreia se as hipóteses de UX se confirmaram.',
    lime: false,
  },
  {
    icon: '🔗',
    tag: 'Alinhamento',
    title: 'Pouca conexão entre UX e negócio',
    desc: 'Design e estratégia falam línguas diferentes e as prioridades nunca se alinham.',
    lime: false,
  },
  {
    icon: '💡',
    tag: 'Solução',
    title: 'E se existisse um mapa?',
    desc: 'Uma estrutura que conecte suas entregas de UX diretamente aos resultados que a liderança valoriza.',
    lime: true,
  },
]

const DEPTH = 3 // cards visible in stack simultaneously

export function ProblemSection() {
  const [current, setCurrent] = useState(0)
  const [exiting, setExiting] = useState(false)
  const touchY = useRef(0)
  const n = CARDS.length

  const next = useCallback(() => {
    if (exiting) return
    setExiting(true)
    setTimeout(() => {
      setCurrent((c) => (c + 1) % n)
      setExiting(false)
    }, 380)
  }, [exiting, n])

  const prev = useCallback(() => {
    if (exiting) return
    setCurrent((c) => (c - 1 + n) % n)
  }, [exiting, n])

  return (
    <section className="relative py-28 px-6 lg:px-8 bg-[#151313] overflow-hidden noise">
      {/* Glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse, rgba(104,64,255,0.10) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-center">

          {/* ── Left: headline + navigation ── */}
          <AnimateIn>
            <p className="text-label-eyebrow font-semibold text-[#A1FF62] mb-5">O Problema</p>
            <h2 className="text-h2 text-[#F4F4F4]" style={{ hyphens: 'none' }}>
              O design gera valor.<br />
              <span className="text-[#6E6A6A]">Mas nem sempre<br />consegue demonstrá-lo.</span>
            </h2>

            {/* Navigation */}
            <div className="flex items-center gap-5 mt-12">
              <button
                onClick={prev}
                aria-label="Card anterior"
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-[#B8B8B8] hover:border-white/25 hover:text-[#F4F4F4] hover:bg-white/[0.04] transition-all duration-200 shrink-0"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Progress dots */}
              <div className="flex items-center gap-2">
                {CARDS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { if (!exiting) setCurrent(i) }}
                    aria-label={`Ir para o card ${i + 1}`}
                    style={{
                      width: i === current ? 22 : 6,
                      height: 6,
                      borderRadius: 3,
                      background: i === current ? '#A1FF62' : 'rgba(255,255,255,0.18)',
                      transition: 'width 300ms ease, background 300ms ease',
                      cursor: 'pointer',
                      border: 'none',
                      padding: 0,
                    }}
                  />
                ))}
              </div>

              <button
                onClick={next}
                aria-label="Próximo card"
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-[#B8B8B8] hover:border-white/25 hover:text-[#F4F4F4] hover:bg-white/[0.04] transition-all duration-200 shrink-0"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <p className="text-sm text-[#6E6A6A] mt-4">
              <span className="font-semibold text-[#B8B8B8]">{current + 1}</span>
              {' / '}
              {n}
            </p>
          </AnimateIn>

          {/* ── Right: stacked card carousel ── */}
          {/*
            pb-14 reserves 56px so the peeking cards (max 40px translateY)
            stay inside the column and don't overflow the section's overflow-hidden.
          */}
          <AnimateIn delay={180} from="scale">
            <div className="pb-14">
              <div
                className="relative cursor-pointer select-none"
                style={{ height: 340 }}
                onClick={next}
                onTouchStart={(e) => { touchY.current = e.touches[0].clientY }}
                onTouchEnd={(e) => {
                  const delta = touchY.current - e.changedTouches[0].clientY
                  if (delta > 40) next()
                  else if (delta < -40) prev()
                }}
              >
                {CARDS.map((card, i) => {
                  const pos = (i - current + n) % n
                  if (pos >= DEPTH) return null

                  const isTop = pos === 0
                  const yOffset = pos * 20
                  const scale = 1 - pos * 0.045
                  const opacity = 1 - pos * 0.18

                  const transform =
                    isTop && exiting
                      ? `translateY(-108%) rotate(-5deg) scale(0.95)`
                      : `translateY(${yOffset}px) scale(${scale})`

                  return (
                    <div
                      key={i}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        zIndex: DEPTH - pos,
                        transform,
                        opacity: isTop && exiting ? 0 : opacity,
                        transition: isTop
                          ? 'transform 380ms cubic-bezier(0.32, 0.72, 0, 1), opacity 280ms ease'
                          : 'transform 380ms cubic-bezier(0.32, 0.72, 0, 1) 160ms',
                        pointerEvents: isTop ? 'auto' : 'none',
                        willChange: 'transform',
                      }}
                    >
                      <div
                        className="h-full rounded-3xl p-6 flex flex-col justify-between"
                        style={{
                          background: card.lime ? '#A1FF62' : '#312E2E',
                          border: card.lime ? 'none' : '1px solid rgba(255,255,255,0.07)',
                          boxShadow: isTop
                            ? card.lime
                              ? '0 24px 64px rgba(161,255,98,0.25), 0 0 0 1px rgba(161,255,98,0.15)'
                              : '0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)'
                            : '0 8px 32px rgba(0,0,0,0.3)',
                        }}
                      >
                        {/* Top row: icon + tag */}
                        <div className="flex items-start justify-between gap-4">
                          <div
                            className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0"
                            style={{
                              background: card.lime
                                ? 'rgba(21,19,19,0.10)'
                                : 'rgba(255,255,255,0.06)',
                            }}
                          >
                            {card.icon}
                          </div>
                          <span
                            className="text-xs font-semibold px-3 py-1.5 rounded-full"
                            style={{
                              background: card.lime
                                ? 'rgba(21,19,19,0.10)'
                                : 'rgba(255,255,255,0.06)',
                              color: card.lime ? '#151313' : '#B8B8B8',
                            }}
                          >
                            {card.tag}
                          </span>
                        </div>

                        {/* Bottom: title + desc + hint */}
                        <div>
                          <h3
                            className="text-base font-bold mb-2"
                            style={{ color: card.lime ? '#151313' : '#F4F4F4' }}
                          >
                            {card.title}
                          </h3>
                          <p
                            className="text-sm leading-relaxed mb-6"
                            style={{ color: card.lime ? 'rgba(21,19,19,0.55)' : '#B8B8B8' }}
                          >
                            {card.desc}
                          </p>

                          {/* Click hint — only on active, non-exiting card */}
                          {isTop && !exiting && (
                            <div
                              className="inline-flex items-center gap-2 text-xs"
                              style={{ color: card.lime ? 'rgba(21,19,19,0.40)' : '#6E6A6A' }}
                            >
                              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path
                                  d="M2.5 5.5l4.5 4 4.5-4"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              Clique para continuar
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  )
}
