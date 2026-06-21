import { createServiceClient } from '@/lib/supabase/server'
import { LeadsTable } from '@/components/admin/LeadsTable'

export const dynamic = 'force-dynamic'

export default async function LeadsPage({
  searchParams,
}: {
  searchParams: Promise<{ interview?: string; page?: string }>
}) {
  const params = await searchParams
  const page = parseInt(params.page ?? '1')
  const limit = 50
  const offset = (page - 1) * limit

  const supabase = createServiceClient()
  let query = supabase
    .from('leads')
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1)

  if (params.interview === 'true') {
    query = query.eq('wants_interview', true)
  }

  const { data, count } = await query
  const totalPages = Math.ceil((count ?? 0) / limit)

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Leads</h1>
          <p className="text-sm text-gray-500 mt-1">{count ?? 0} total</p>
        </div>
        <div className="flex gap-3">
          <a
            href={`/admin/leads${params.interview === 'true' ? '' : '?interview=true'}`}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            {params.interview === 'true' ? 'Ver todos' : '🎙️ Só candidatos a entrevista'}
          </a>
          <a
            href="/api/admin/export"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            ↓ CSV
          </a>
        </div>
      </div>

      <LeadsTable leads={data ?? []} />

      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <a
              key={p}
              href={`/admin/leads?page=${p}${params.interview === 'true' ? '&interview=true' : ''}`}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                p === page
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white border border-gray-300 text-gray-600 hover:bg-gray-50'
              }`}
            >
              {p}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
