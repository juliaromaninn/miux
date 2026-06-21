export type Lead = {
  id: string
  name: string
  email: string
  role: string | null
  company: string | null
  experience_years: string | null
  biggest_challenge: string | null
  wants_interview: boolean
  utm_source: string | null
  utm_medium: string | null
  utm_campaign: string | null
  created_at: string
}

export type Feedback = {
  id: string
  lead_id: string | null
  rating: number
  clarity_score: number
  usefulness_score: number
  comment: string | null
  would_pay: boolean
  created_at: string
}

export type TemplateAccess = {
  id: string
  lead_id: string
  accessed_at: string
}

export type LeadFormData = {
  name: string
  email: string
  role: string
  company: string
  experience_years: string
  biggest_challenge: string
  wants_interview: boolean
}

export type FeedbackFormData = {
  email: string
  rating: number
  clarity_score: number
  usefulness_score: number
  comment: string
  would_pay: boolean
}

export type AdminStats = {
  total_leads: number
  total_feedbacks: number
  interview_candidates: number
  template_accesses: number
  avg_rating: number
}
