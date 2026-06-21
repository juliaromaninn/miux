import { LeadForm } from '@/components/forms/LeadForm'
import { Suspense } from 'react'

export function CTA() {
  return (
    <section className="py-20 px-4 bg-indigo-700 text-white" id="acesso">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Acesse o template gratuito agora
        </h2>
        <p className="text-indigo-200 text-lg mb-10">
          Preencha o formulário e receba acesso imediato ao Mapa de Impacto de UX — pronto para usar no Figma ou Notion.
        </p>
        <div className="bg-white rounded-2xl p-8">
          <Suspense>
            <LeadForm />
          </Suspense>
        </div>
      </div>
    </section>
  )
}
