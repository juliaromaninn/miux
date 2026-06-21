'use client'

export function MiuxMockup() {
  return (
    <div className="relative w-full max-w-[580px] mx-auto">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 rounded-3xl"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(108,99,255,0.18) 0%, transparent 70%)',
          filter: 'blur(32px)',
          transform: 'scale(1.15)',
        }}
      />

      {/* Main card */}
      <div
        className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200/80 bg-white animate-float"
        style={{ boxShadow: '0 32px 80px rgba(108,99,255,0.12), 0 8px 24px rgba(0,0,0,0.08)' }}
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-50/80 border-b border-gray-100">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
          <div className="flex-1 mx-3">
            <div className="mx-auto w-48 h-5 rounded-md bg-gray-200/80 flex items-center justify-center">
              <span className="text-[10px] font-medium text-gray-500">MIUX Canvas — Checkout Redesign</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="px-2 py-1 rounded-md bg-[#6C63FF] flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-white/60" />
              <span className="text-[9px] font-semibold text-white">Compartilhar</span>
            </div>
          </div>
        </div>

        {/* Canvas */}
        <div
          className="relative p-5"
          style={{
            backgroundImage: 'radial-gradient(circle, #e5e7eb 1px, transparent 1px)',
            backgroundSize: '18px 18px',
            minHeight: 340,
          }}
        >
          {/* Row 1 — Entrega + Objetivos */}
          <div className="flex gap-3 mb-3">
            {/* Entrega card */}
            <div className="flex-1 rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-md bg-[#EEF2FF] flex items-center justify-center text-[11px]">📦</div>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">Entrega</span>
              </div>
              <p className="text-xs font-semibold text-gray-800 mb-1">Redesign do Checkout</p>
              <div className="flex gap-1 flex-wrap">
                <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-[#EEF2FF] text-[#6C63FF] font-medium">Mobile</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-[#EEF2FF] text-[#6C63FF] font-medium">UX</span>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center text-gray-300 text-lg font-thin select-none pt-2">→</div>

            {/* Objetivos card */}
            <div className="flex-1 rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-md bg-[#F0FDF4] flex items-center justify-center text-[11px]">🎯</div>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">Objetivos</span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-green-500 text-[9px] font-bold">↑</span>
                  <span className="text-[10px] text-gray-700">Taxa de conversão</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-red-400 text-[9px] font-bold">↓</span>
                  <span className="text-[10px] text-gray-700">Abandono de carrinho</span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 — Indicadores (full width) */}
          <div className="rounded-xl border border-[#6C63FF]/20 bg-[#EEF2FF]/60 p-3 shadow-sm mb-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-md bg-[#6C63FF] flex items-center justify-center text-[11px]">📊</div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">Indicadores</span>
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[9px] text-gray-500">Antes</span>
                  <span className="text-[9px] font-bold text-gray-700">2.3%</span>
                </div>
                <div className="h-1.5 rounded-full bg-gray-200">
                  <div className="h-1.5 rounded-full bg-gray-400" style={{ width: '23%' }} />
                </div>
              </div>
              <div className="flex items-center text-gray-300 text-xs">→</div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[9px] text-gray-500">Depois</span>
                  <span className="text-[9px] font-bold text-[#6C63FF]">4.1% ✓</span>
                </div>
                <div className="h-1.5 rounded-full bg-gray-200">
                  <div className="h-1.5 rounded-full bg-[#6C63FF]" style={{ width: '41%' }} />
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-[9px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded-full">+78%</span>
              </div>
            </div>
          </div>

          {/* Row 3 — Antes/Depois + Próximos Passos */}
          <div className="flex gap-3">
            {/* Antes e Depois */}
            <div className="flex-1 rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-md bg-[#FFF7ED] flex items-center justify-center text-[11px]">🔄</div>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">Antes / Depois</span>
              </div>
              <div className="space-y-1">
                <div className="text-[9px] text-gray-500 line-through">Fluxo com 7 etapas</div>
                <div className="text-[10px] text-gray-800 font-medium">Fluxo com 3 etapas ✓</div>
              </div>
            </div>

            {/* Próximos Passos */}
            <div className="flex-1 rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-md bg-[#F0F9FF] flex items-center justify-center text-[11px]">🔜</div>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">Próximos Passos</span>
              </div>
              <div className="space-y-1">
                {['Teste A/B pós-entrega', 'Report para liderança'].map((s) => (
                  <div key={s} className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded border border-gray-300 shrink-0" />
                    <span className="text-[9px] text-gray-600">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <div
            className="absolute top-4 right-4 rounded-xl border border-[#6C63FF]/20 bg-white shadow-lg px-3 py-2 flex items-center gap-2"
            style={{ transform: 'rotate(2deg)' }}
          >
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[10px] font-semibold text-gray-700">Impacto documentado</span>
          </div>
        </div>
      </div>

      {/* Side card — floating */}
      <div
        className="absolute -right-6 top-1/3 rounded-xl border border-gray-200 bg-white shadow-xl px-3 py-2.5 hidden xl:block"
        style={{ transform: 'rotate(3deg)', animation: 'float 6s ease-in-out 1s infinite' }}
      >
        <p className="text-[9px] text-gray-400 mb-1 font-medium uppercase tracking-wide">Impacto gerado</p>
        <p className="text-base font-black text-[#6C63FF]">+R$280k</p>
        <p className="text-[9px] text-gray-400">receita recuperada</p>
      </div>
    </div>
  )
}
