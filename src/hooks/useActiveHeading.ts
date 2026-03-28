import { useCallback, useEffect, useSyncExternalStore } from 'react'
import { useLocation } from 'react-router-dom'

let currentId: string | null = null
const listeners = new Set<() => void>()

function subscribe(cb: () => void) {
  listeners.add(cb)
  return () => listeners.delete(cb)
}

function getSnapshot() {
  return currentId
}

function setId(id: string | null) {
  if (id !== currentId) {
    currentId = id
    listeners.forEach((cb) => cb())
  }
}

export function useActiveHeading(): string | null {
  const { pathname } = useLocation()

  const onScroll = useCallback(() => {
    const headings = Array.from(
      document.querySelectorAll('.markdown-body h2[id], .markdown-body h3[id]')
    )
    if (headings.length === 0) return

    const scrollY = window.scrollY
    const docHeight = document.documentElement.scrollHeight
    const winHeight = window.innerHeight

    if (scrollY + winHeight >= docHeight - 20) {
      setId(headings[headings.length - 1].id)
      return
    }

    if (scrollY < 100) {
      setId(headings[0].id)
      return
    }

    let current: string | null = headings[0].id
    for (const heading of headings) {
      if (heading.getBoundingClientRect().top <= 120) {
        current = heading.id
      }
    }
    setId(current)
  }, [])

  useEffect(() => {
    setId(null)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname, onScroll])

  return useSyncExternalStore(subscribe, getSnapshot)
}
