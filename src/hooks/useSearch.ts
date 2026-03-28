import { useState, useEffect, useCallback, useMemo } from 'react'
import { getAllPages, type NavItem } from '../data/navigation'
import { extractHeadings } from '../utils/extractHeadings'

export interface SearchResult {
  page: NavItem
  heading?: string
  snippet: string
}

function searchPages(query: string): SearchResult[] {
  if (!query.trim()) return []

  const q = query.toLowerCase()
  const pages = getAllPages()
  const matched: SearchResult[] = []

  for (const page of pages) {
    if (page.label.toLowerCase().includes(q)) {
      matched.push({ page, snippet: page.label })
    }

    const headings = extractHeadings(page.content)
    for (const h of headings) {
      if (h.text.toLowerCase().includes(q)) {
        matched.push({ page, heading: h.text, snippet: h.text })
      }
    }

    const lines = page.content.split('\n')
    for (const line of lines) {
      if (line.toLowerCase().includes(q) && !line.startsWith('#')) {
        const clean = line.replace(/[*_`#[\]()]/g, '').trim()
        if (clean.length > 10) {
          matched.push({ page, snippet: clean.slice(0, 120) })
          break
        }
      }
    }
  }

  return matched.slice(0, 12)
}

export function useSearch() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')

  const results = useMemo(() => searchPages(query), [query])

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => {
    setIsOpen(false)
    setQuery('')
  }, [])

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen((prev) => !prev)
      }
      if (e.key === 'Escape') {
        close()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [close])

  return { isOpen, query, results, setQuery, open, close }
}
