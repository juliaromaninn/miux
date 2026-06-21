import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/admin/login')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="font-bold text-indigo-700 text-lg">MIUX Admin</span>
          <nav className="flex gap-4 text-sm">
            <Link href="/admin" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Dashboard
            </Link>
            <Link href="/admin/leads" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Leads
            </Link>
            <Link href="/admin/feedbacks" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Feedbacks
            </Link>
          </nav>
        </div>
        <span className="text-sm text-gray-500">{user.email}</span>
      </header>
      <div className="p-6">{children}</div>
    </div>
  )
}
