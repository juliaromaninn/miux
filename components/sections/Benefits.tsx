const BENEFITS = [
  {
    icon: '📊',
    title: 'Linguagem de negócio',
    description: 'Traduza melhorias de UX em impacto em receita, retenção e redução de custo.',
  },
  {
    icon: '🎯',
    title: 'Priorização clara',
    description: 'Pare de discutir o que melhorar. Use dados para decidir o que tem mais retorno.',
  },
  {
    icon: '🤝',
    title: 'Alinhamento com stakeholders',
    description: 'Apresente roadmaps de UX que fazem sentido para C-level e times de produto.',
  },
  {
    icon: '📈',
    title: 'Comprovação de valor',
    description: 'Mostre antes e depois com métricas reais atreladas às suas entregas.',
  },
  {
    icon: '⚡',
    title: 'Aplicação imediata',
    description: 'Template pronto para usar hoje, adaptável a qualquer tipo de produto digital.',
  },
  {
    icon: '🔁',
    title: 'Processo contínuo',
    description: 'Não é um relatório, é um sistema vivo que evolui junto com seu produto.',
  },
]

export function Benefits() {
  return (
    <section className="py-20 px-4 bg-indigo-50" id="beneficios">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Por que usar o MIUX
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Para designers, PMs e líderes que precisam demonstrar o valor de UX com clareza.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((b) => (
            <div key={b.title} className="bg-white rounded-xl p-6 shadow-sm border border-indigo-100">
              <div className="text-3xl mb-3">{b.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{b.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
