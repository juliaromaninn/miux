import { NextRequest, NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase/server'
import { feedbackSchema } from '@/lib/validations'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const parsed = feedbackSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    const supabase = createServiceClient()

    // Busca o lead_id pelo e-mail
    const { data: lead } = await supabase
      .from('leads')
      .select('id')
      .eq('email', parsed.data.email)
      .single()

    const { email, ...feedbackData } = parsed.data

    const { error } = await supabase.from('feedbacks').insert({
      ...feedbackData,
      lead_id: lead?.id ?? null,
    })

    if (error) {
      console.error('feedback insert error:', error)
      return NextResponse.json({ error: 'Erro interno' }, { status: 500 })
    }

    return NextResponse.json({ success: true }, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'Requisição inválida' }, { status: 400 })
  }
}
