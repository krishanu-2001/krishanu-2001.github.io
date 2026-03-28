import type { ReactNode } from 'react'
import '../styles/admonition.css'

interface AdmonitionProps {
  type: string
  title: string
  children: ReactNode
}

export function Admonition({ title, children }: AdmonitionProps) {
  return (
    <div className="admonition">
      <div className="admonition__title">
        <span>ℹ</span> {title}
      </div>
      <div className="admonition__content">{children}</div>
    </div>
  )
}
