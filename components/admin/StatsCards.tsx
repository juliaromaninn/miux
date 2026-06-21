import { Card } from '@/components/ui/Card'
import type { AdminStats } from '@/types'

interface Props {
  stats: AdminStats
}

const CARDS = [
  { key: 'total_leads', label: 'Total de leads', icon: '👥', color: 'text-indigo-600' },
  { key: 'total_feedbacks', label: 'Feedbacks', icon: '💬', color: 'text-green-600' },
  { key: 'interview_candidates', label: 'Candidatos a entrevista', icon: '🎙️', color: 'text-amber-600' },
  { key: 'template_accesses', label: 'Acessos ao template', icon: '📄', color: 'text-blue-600' },
] as const

export function StatsCards({ stats }: Props) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {CARDS.map(({ key, label, icon, color }) => (
        <Card key={key}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">{label}</span>
            <span className="text-xl">{icon}</span>
          </div>
          <p className={`text-3xl font-bold ${color}`}>{stats[key]}</p>
        </Card>
      ))}
    </div>
  )
}
