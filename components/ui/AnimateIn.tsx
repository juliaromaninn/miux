'use client'

import { useInView } from '@/hooks/useInView'
import { cn } from '@/lib/utils'

interface AnimateInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  from?: 'bottom' | 'left' | 'scale'
}

const fromMap = {
  bottom: 'translate-y-7',
  left: '-translate-x-6',
  scale: 'scale-95',
}

export function AnimateIn({ children, className, delay = 0, from = 'bottom' }: AnimateInProps) {
  const { ref, inView } = useInView()

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        'transition-all duration-700',
        !inView && `opacity-0 ${fromMap[from]}`,
        inView && 'opacity-100 translate-y-0 translate-x-0 scale-100',
        className
      )}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  )
}
