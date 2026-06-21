const STEPS = [
  {
    number: '01',
    title: 'Mapeie os touchpoints',
    description: 'Identifique os pontos de contato críticos da jornada do usuário e classifique-os por frequência e impacto.',
  },
  {
    number: '02',
    title: 'Conecte com métricas',
    description: 'Ligue cada touchpoint a indicadores de negócio: conversão, retenção, NPS, receita ou custo operacional.',
  },
  {
    number: '03',
    title: 'Priorize com dados',
    description: 'Use a matriz de impacto para priorizar iniciativas de UX com argumento quantitativo para stakeholders.',
  },
  {
    number: '04',
    title: 'Monitore e itere',
    description: 'Acompanhe a evolução das métricas após cada entrega e refine seu mapa de impacto continuamente.',
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-white" id="como-funciona">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Como o MIUX funciona
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Quatro etapas para transformar percepções de UX em argumentos de negócio.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8">
          {STEPS.map((step) => (
            <div key={step.number} className="flex gap-5">
              <span className="text-4xl font-extrabold text-indigo-100 leading-none select-none">
                {step.number}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
