export function FooterSection() {
  return (
    <footer className="bg-[#151313] border-t border-white/[0.06] py-12 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="text-lg font-bold text-[#F4F4F4]">MIUX</span>
          <span className="text-white/20">·</span>
          <span className="text-xs text-[#B8B8B8]">Mapa de Impacto de UX</span>
        </div>
        <div className="flex items-center gap-6 text-xs text-[#6E6A6A]">
          <span>© {new Date().getFullYear()} MIUX</span>
          <span className="text-white/10">·</span>
          <span>Todos os direitos reservados</span>
        </div>
      </div>
    </footer>
  )
}
