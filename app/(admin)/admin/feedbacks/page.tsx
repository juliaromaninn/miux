import { createServiceClient } from '@/lib/supabase/server'
import { formatDate } from '@/lib/utils'
import { Badge } from '@/components/ui/Badge'

export const dynamic = 'force-dynamic'

export default async function FeedbacksPage() {
  const supabase = createServiceClient()
  const { data, count } = await supabase
    .from('feedbacks')
    .select('*, leads(name, email)', { count: 'exact' })
    .order('created_at', { ascending: false })
    .limit(100)

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Feedbacks</h1>
        <p className="text-sm text-gray-500 mt-1">{count ?? 0} total</p>
      </div>

      <div className="flex flex-col gap-4">
        {(data ?? []).map((fb) => {
          const lead = fb.leads as { name: string; email: string } | null
          return (
            <div key={fb.id} className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                <div>
                  <p className="font-medium text-gray-900">{lead?.name ?? 'Anônimo'}</p>
                  <p className="text-sm text-gray-500">{lead?.email ?? '—'}</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="info">⭐ Geral: {fb.rating}/5</Badge>
                  <Badge>Clareza: {fb.clarity_score}/5</Badge>
                  <Badge>Utilidade: {fb.usefulness_score}/5</Badge>
                  {fb.would_pay && <Badge variant="success">Pagaria</Badge>}
                </div>
              </div>
              {fb.comment && (
                <p className="text-gray-700 text-sm bg-gray-50 rounded-lg p-3 mb-3">
                  "{fb.comment}"
                </p>
              )}
              <p className="text-xs text-gray-400">{formatDate(fb.created_at)}</p>
            </div>
          )
        })}

        {(!data || data.length === 0) && (
          <div className="text-center py-12 text-gray-500">
            Nenhum feedback ainda.
          </div>
        )}
      </div>
    </div>
  )
}
