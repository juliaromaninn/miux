import { NextResponse } from 'next/server'
import { createClient, createServiceClient } from '@/lib/supabase/server'
import { formatDate } from '@/lib/utils'

export async function GET() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
  }

  const service = createServiceClient()
  const { data: leads, error } = await service
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })

  if (error || !leads) {
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 })
  }

  const header = 'Nome,E-mail,Cargo,Empresa,Quer entrevista,UTM Source,UTM Medium,UTM Campaign,Cadastro\n'
  const rows = leads
    .map((l) =>
      [
        `"${l.name}"`,
        `"${l.email}"`,
        `"${l.role ?? ''}"`,
        `"${l.company ?? ''}"`,
        l.wants_interview ? 'Sim' : 'Não',
        `"${l.utm_source ?? ''}"`,
        `"${l.utm_medium ?? ''}"`,
        `"${l.utm_campaign ?? ''}"`,
        `"${formatDate(l.created_at)}"`,
      ].join(',')
    )
    .join('\n')

  return new NextResponse(header + rows, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="miux-leads-${new Date().toISOString().slice(0, 10)}.csv"`,
    },
  })
}
