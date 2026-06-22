import { ObrigadoContent } from '@/components/sections/ObrigadoContent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Obrigada por participar! — MIUX',
  robots: { index: false },
}

export default function ObrigadoPage() {
  return <ObrigadoContent />
}
