import { useEffect } from 'react'
import { MarkdownRenderer } from './MarkdownRenderer'
import { getPageBySlug } from '../data/navigation'

interface PageProps {
  slug: string
}

export function Page({ slug }: PageProps) {
  const page = getPageBySlug(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!page) {
    return <div style={{ padding: '2rem', color: 'var(--text-muted)' }}>Page not found.</div>
  }

  return <MarkdownRenderer content={page.content} />
}
