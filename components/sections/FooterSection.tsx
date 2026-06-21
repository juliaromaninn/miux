export function FooterSection() {
  return (
    <footer className="bg-[#09090B] border-t border-white/[0.06] py-12 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="text-lg font-black text-[#6C63FF]">MIUX</span>
          <span className="text-white/20">·</span>
          <span className="text-xs text-white/30">Mapa de Impacto de UX</span>
        </div>
        <div className="flex items-center gap-6 text-xs text-white/30">
          <span>© {new Date().getFullYear()} MIUX</span>
          <span className="text-white/10">·</span>
          <span>Todos os direitos reservados</span>
        </div>
      </div>
    </footer>
  )
}
