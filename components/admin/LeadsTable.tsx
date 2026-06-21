import { Badge } from '@/components/ui/Badge'
import { formatDate } from '@/lib/utils'
import type { Lead } from '@/types'

interface Props {
  leads: Lead[]
}

export function LeadsTable({ leads }: Props) {
  if (leads.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        Nenhum lead encontrado.
      </div>
    )
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50">
            {['Nome', 'E-mail', 'Cargo', 'Empresa', 'Entrevista', 'Origem', 'Cadastro'].map((h) => (
              <th key={h} className="px-4 py-3 text-left font-medium text-gray-600">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
              <td className="px-4 py-3 font-medium text-gray-900">{lead.name}</td>
              <td className="px-4 py-3 text-gray-600">{lead.email}</td>
              <td className="px-4 py-3 text-gray-600">{lead.role ?? '—'}</td>
              <td className="px-4 py-3 text-gray-600">{lead.company ?? '—'}</td>
              <td className="px-4 py-3">
                {lead.wants_interview ? (
                  <Badge variant="success">Sim</Badge>
                ) : (
                  <Badge>Não</Badge>
                )}
              </td>
              <td className="px-4 py-3 text-gray-500">{lead.utm_source ?? '—'}</td>
              <td className="px-4 py-3 text-gray-500 whitespace-nowrap">
                {formatDate(lead.created_at)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
