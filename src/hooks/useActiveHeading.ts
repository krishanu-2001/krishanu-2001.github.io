import { useState, useEffect } from 'react'

export function useActiveHeading(): string | null {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: '-80px 0px -70% 0px', threshold: 0 }
    )

    const headings = document.querySelectorAll('.markdown-body h2[id], .markdown-body h3[id]')
    headings.forEach((h) => observer.observe(h))

    return () => observer.disconnect()
  }, [])

  return activeId
}
