import { createServiceClient } from '@/lib/supabase/server'
import { StatsCards } from '@/components/admin/StatsCards'
import { LeadsTable } from '@/components/admin/LeadsTable'
import Link from 'next/link'
import type { AdminStats } from '@/types'

export const dynamic = 'force-dynamic'

async function getStats(): Promise<AdminStats> {
  const supabase = createServiceClient()

  const [leads, feedbacks, interview, accesses, avgRating] = await Promise.all([
    supabase.from('leads').select('id', { count: 'exact', head: true }),
    supabase.from('feedbacks').select('id', { count: 'exact', head: true }),
    supabase.from('leads').select('id', { count: 'exact', head: true }).eq('wants_interview', true),
    supabase.from('template_accesses').select('id', { count: 'exact', head: true }),
    supabase.from('feedbacks').select('rating'),
  ])

  const ratings = avgRating.data ?? []
  const avg = ratings.length
    ? ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length
    : 0

  return {
    total_leads: leads.count ?? 0,
    total_feedbacks: feedbacks.count ?? 0,
    interview_candidates: interview.count ?? 0,
    template_accesses: accesses.count ?? 0,
    avg_rating: Math.round(avg * 10) / 10,
  }
}

export default async function AdminDashboard() {
  const [stats, leadsResult] = await Promise.all([
    getStats(),
    createServiceClient()
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(10),
  ])

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="flex gap-3">
          <a
            href="/api/admin/export"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            ↓ Exportar CSV
          </a>
        </div>
      </div>

      <StatsCards stats={stats} />

      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Últimos 10 leads</h2>
        <Link href="/admin/leads" className="text-sm text-indigo-600 hover:underline">
          Ver todos →
        </Link>
      </div>
      <LeadsTable leads={leadsResult.data ?? []} />

      {stats.avg_rating > 0 && (
        <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="font-semibold text-gray-900 mb-1">Avaliação média</h2>
          <p className="text-4xl font-bold text-amber-500">
            {'★'.repeat(Math.round(stats.avg_rating))}
            <span className="text-gray-300">{'★'.repeat(5 - Math.round(stats.avg_rating))}</span>
            <span className="text-xl text-gray-600 ml-2">{stats.avg_rating}/5</span>
          </p>
        </div>
      )}
    </div>
  )
}
