'use client'

const collapsed = [
  { num: 2, color: '#6840FF', label: 'Definição dos Objetivos da iniciativa', chevron: '#6840FF' },
  { num: 3, color: '#A1FF62', label: 'Indicadores Relevantes', chevron: '#A1FF62' },
  { num: 4, color: '#F97316', label: 'Antes e Depois da Entrega', chevron: '#F97316' },
  { num: 5, color: '#EC4899', label: 'Próximos passos', chevron: '#EC4899' },
]

const tableHeaders = ['De que problema/evidência?', 'Qual a entrega?', 'Descrição da entrega', 'Data da entrega']
const tableRow = ['Problema identificado', 'Entrega realizada', 'Breve descrição da entrega', 'dd/mm/aaaa']

export function MiuxMockup() {
  return (
    <div className="relative w-full max-w-[560px] mx-auto">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl"
        style={{
          background: 'radial-gradient(ellipse at 50% 60%, rgba(161,255,98,0.14) 0%, transparent 70%)',
          filter: 'blur(44px)',
          transform: 'scale(1.2)',
        }}
      />

      {/* ── Floating decorative elements (lg only) ── */}

      {/* UX cube — top left */}
      <div
        className="absolute -top-8 -left-10 z-20 hidden xl:block"
        style={{ transform: 'perspective(400px) rotateX(14deg) rotateY(-22deg)' }}
      >
        <div
          className="w-[70px] h-[70px] rounded-2xl flex items-center justify-center"
          style={{
            background: 'linear-gradient(145deg, #252222, #1a1818)',
            boxShadow: '4px 4px 0 #0a0808, 0 12px 32px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.09)',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <span
            className="text-xl font-black tracking-tight"
            style={{
              background: 'linear-gradient(135deg, #FF6EB4 20%, #9B82FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            UX
          </span>
        </div>
      </div>

      {/* T-handles block — bottom left */}
      <div className="absolute -bottom-5 -left-8 z-20 hidden xl:block">
        <div className="relative w-[58px] h-[58px]">
          <div
            className="w-full h-full rounded-xl flex items-center justify-center"
            style={{
              background: 'linear-gradient(145deg, #252222, #1a1818)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <span className="text-xl font-black" style={{ color: '#7B68EE' }}>T</span>
          </div>
          {/* Orange corner handles */}
          {(['-top-1.5 -left-1.5', '-top-1.5 -right-1.5', '-bottom-1.5 -left-1.5', '-bottom-1.5 -right-1.5'] as const).map((pos, i) => (
            <div
              key={i}
              className={`absolute ${pos} w-3 h-3 rounded-sm`}
              style={{ background: '#F97316', boxShadow: '0 1px 4px rgba(249,115,22,0.7)' }}
            />
          ))}
        </div>
      </div>

      {/* Pen/stylus — right side */}
      <div
        className="absolute -right-7 top-1/3 z-20 hidden xl:block"
        style={{ transform: 'rotate(-42deg) translateY(-10px)' }}
      >
        <svg width="22" height="108" viewBox="0 0 22 108" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Cap */}
          <rect x="1" y="0" width="20" height="14" rx="10" fill="#6840FF"/>
          <rect x="1" y="10" width="20" height="4" fill="#5030CC"/>
          {/* Body */}
          <rect x="1" y="13" width="20" height="50" fill="#2A2828"/>
          {/* Subtle highlight */}
          <rect x="15" y="13" width="4" height="50" rx="2" fill="rgba(255,255,255,0.06)"/>
          {/* Lime accent band */}
          <rect x="1" y="53" width="20" height="7" fill="#A1FF62"/>
          {/* Lower body */}
          <rect x="1" y="59" width="20" height="22" fill="#222020"/>
          {/* Taper */}
          <path d="M1 81 L21 81 L15 98 L7 98 Z" fill="#1a1818"/>
          {/* Red tip */}
          <path d="M7 98 L15 98 L11 108 Z" fill="#F84131"/>
        </svg>
      </div>

      {/* ── Main mockup frame ── */}
      <div
        className="relative rounded-2xl overflow-hidden animate-float"
        style={{
          background: '#151313',
          boxShadow: '0 32px 80px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.07)',
        }}
      >
        {/* Window chrome */}
        <div
          className="flex items-center px-4 py-3 border-b"
          style={{ background: '#1c1a1a', borderColor: 'rgba(255,255,255,0.06)' }}
        >
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full" style={{ background: '#FF5F57' }} />
            <div className="w-3 h-3 rounded-full" style={{ background: '#FEBC2E' }} />
            <div className="w-3 h-3 rounded-full" style={{ background: '#28C840' }} />
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Header row */}
          <div className="flex items-start justify-between mb-4 gap-3">
            <div>
              <p className="text-sm font-black text-[#F4F4F4] tracking-tight">FRAMEWORK MIUX</p>
              <p className="text-[9px] font-bold tracking-[0.14em] mt-0.5" style={{ color: '#A1FF62' }}>
                MAPA DE IMPACTO DE UX
              </p>
            </div>
            {/* "Quando usar" info card */}
            <div
              className="rounded-xl p-2.5 shrink-0 max-w-[148px]"
              style={{ background: '#1f1d1d', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <div className="w-2 h-2 rounded-full" style={{ background: '#A1FF62' }} />
                <span className="text-[7px] font-bold" style={{ color: '#A1FF62' }}>Quando usar o framework?</span>
              </div>
              <p className="text-[6.5px] leading-tight text-[#B8B8B8]">
                Determine e prove o impacto contínuo das entregas de design de maneira estruturada e simples.
              </p>
            </div>
          </div>

          {/* Section 1 — expanded */}
          <div
            className="rounded-xl p-3.5 mb-2"
            style={{ background: '#1f1d1d', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            {/* Section label */}
            <div
              className="inline-flex items-center rounded-full px-2.5 py-1 mb-3"
              style={{ background: '#A1FF62' }}
            >
              <span className="text-[7px] font-bold text-[#151313] tracking-wider">1. PRODUTO E ENTREGA</span>
            </div>

            <p className="text-[10px] font-bold text-[#F4F4F4] mb-2.5">Produto e contexto da entrega</p>

            {/* Table */}
            <div className="rounded-lg overflow-hidden mb-3" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
              {/* Header row */}
              <div className="grid grid-cols-4">
                {tableHeaders.map((h, i) => (
                  <div
                    key={i}
                    className="px-2 py-1.5"
                    style={{
                      background: '#A1FF62',
                      borderRight: i < 3 ? '1px solid rgba(0,0,0,0.12)' : 'none',
                    }}
                  >
                    <span className="text-[6px] font-bold text-[#151313]">{h}</span>
                  </div>
                ))}
              </div>
              {/* Data row */}
              <div className="grid grid-cols-4" style={{ background: '#252222' }}>
                {tableRow.map((v, i) => (
                  <div
                    key={i}
                    className="px-2 py-2"
                    style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}
                  >
                    <span className="text-[6px] text-[#B8B8B8]">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Materials */}
            <div className="flex items-center gap-1.5 mb-2">
              <span className="text-[7.5px] font-semibold" style={{ color: '#A1FF62' }}>Materiais para consulta</span>
              <span className="text-[7.5px]" style={{ color: '#A1FF62' }}>🔗</span>
            </div>
            <div className="grid grid-cols-4 gap-1.5">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="rounded-lg p-2" style={{ background: '#F4F4F4' }}>
                  <div
                    className="w-5 h-5 rounded mb-1.5 flex items-center justify-center"
                    style={{ background: '#6840FF' }}
                  >
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                      <rect x="2" y="0.5" width="8" height="11" rx="1.5" fill="white" fillOpacity="0.95"/>
                      <rect x="3.5" y="3.5" width="5" height="0.9" rx="0.45" fill="#6840FF"/>
                      <rect x="3.5" y="5.5" width="5" height="0.9" rx="0.45" fill="#6840FF"/>
                      <rect x="3.5" y="7.5" width="3" height="0.9" rx="0.45" fill="#6840FF"/>
                    </svg>
                  </div>
                  <p className="text-[6px] font-semibold text-[#333]">Material {n}</p>
                  <p className="text-[5.5px] text-[#888] mt-0.5">Adicionar link</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sections 2–5 collapsed */}
          {collapsed.map(({ num, color, label, chevron }) => (
            <div
              key={num}
              className="flex items-center justify-between px-3 py-2.5 mb-1.5 rounded-xl"
              style={{ background: '#1f1d1d', border: '1px solid rgba(255,255,255,0.04)' }}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="w-5 h-5 rounded-md flex items-center justify-center shrink-0"
                  style={{ background: color }}
                >
                  <span className="text-[8px] font-black text-white">{num}</span>
                </div>
                <span className="text-[8.5px] font-semibold text-[#F4F4F4]">{label}</span>
              </div>
              <span className="text-sm font-bold shrink-0 ml-2" style={{ color: chevron }}>›</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
