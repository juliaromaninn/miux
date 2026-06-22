import { NextRequest, NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase/server'
import { leadSchema } from '@/lib/validations'
import { z } from 'zod'

const leadUpdateSchema = z.object({
  email: z.string().email(),
  company: z.string().optional(),
  experience_years: z.string().optional(),
  biggest_challenge: z.string().optional(),
  wants_interview: z.boolean().optional(),
})

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json()
    const parsed = leadUpdateSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.flatten().fieldErrors }, { status: 400 })
    }

    const { email, ...fields } = parsed.data
    const updateData = Object.fromEntries(
      Object.entries(fields).filter(([, v]) => v !== undefined && v !== '')
    )

    if (Object.keys(updateData).length === 0) {
      return NextResponse.json({ success: true })
    }

    const supabase = createServiceClient()
    const { error } = await supabase
      .from('leads')
      .update(updateData)
      .eq('email', email)

    if (error) {
      console.error('leads patch error:', error)
      return NextResponse.json({ error: 'Erro interno' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Requisição inválida' }, { status: 400 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const parsed = leadSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    const supabase = createServiceClient()
    const { data, error } = await supabase
      .from('leads')
      .insert(parsed.data)
      .select('id')
      .single()

    if (error) {
      if (error.code === '23505') {
        // E-mail já cadastrado — retorna sucesso silencioso para evitar enumeração
        return NextResponse.json({ success: true })
      }
      console.error('leads insert error:', error)
      return NextResponse.json({ error: 'Erro interno' }, { status: 500 })
    }

    return NextResponse.json({ success: true, id: data.id }, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'Requisição inválida' }, { status: 400 })
  }
}
