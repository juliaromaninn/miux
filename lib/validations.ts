import { z } from 'zod'

export const leadSchema = z.object({
  name: z.string().min(2, 'Nome deve ter ao menos 2 caracteres').max(100),
  email: z.string().email('E-mail inválido').max(254),
  role: z.string().max(100).optional().default(''),
  company: z.string().max(100).optional().default(''),
  experience_years: z.string().max(50).optional().default(''),
  biggest_challenge: z.string().max(100).optional().default(''),
  wants_interview: z.boolean().optional().default(false),
  utm_source: z.string().max(100).optional(),
  utm_medium: z.string().max(100).optional(),
  utm_campaign: z.string().max(100).optional(),
})

export const feedbackSchema = z.object({
  email: z.string().email('E-mail inválido'),
  rating: z.number().int().min(1).max(5),
  clarity_score: z.number().int().min(1).max(5),
  usefulness_score: z.number().int().min(1).max(5),
  comment: z.string().max(1000).optional().default(''),
  would_pay: z.boolean().optional().default(false),
})

export type LeadInput = z.infer<typeof leadSchema>
export type FeedbackInput = z.infer<typeof feedbackSchema>
