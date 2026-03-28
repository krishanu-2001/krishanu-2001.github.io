import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import type { SearchResult } from '../hooks/useSearch'
import '../styles/search.css'

interface SearchModalProps {
  query: string
  results: SearchResult[]
  onQueryChange: (q: string) => void
  onClose: () => void
}

export function SearchModal({ query, results, onQueryChange, onClose }: SearchModalProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  function handleSelect(result: SearchResult) {
    navigate(result.page.path)
    onClose()
    if (result.heading) {
      setTimeout(() => {
        const id = result
          .heading!.toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-')
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  return (
    <div className="search-overlay" onClick={onClose}>
      <div className="search-modal" onClick={(e) => e.stopPropagation()}>
        <div className="search-modal__input-wrapper">
          <span className="search-modal__icon">⌕</span>
          <input
            ref={inputRef}
            type="text"
            className="search-modal__input"
            placeholder="Search pages, headings, content..."
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
          />
        </div>
        <div className="search-modal__results">
          {query && results.length === 0 && (
            <div className="search-modal__empty">No results found for "{query}"</div>
          )}
          {results.map((result, i) => (
            <div
              key={`${result.page.slug}-${i}`}
              className="search-result"
              onClick={() => handleSelect(result)}
            >
              <div className="search-result__page">{result.page.label}</div>
              {result.heading && <div className="search-result__title">{result.heading}</div>}
              <div className="search-result__snippet">{result.snippet}</div>
            </div>
          ))}
          {!query && <div className="search-modal__empty">Start typing to search...</div>}
        </div>
        <div className="search-modal__footer">
          <span>
            <kbd>↵</kbd> select
          </span>
          <span>
            <kbd>esc</kbd> close
          </span>
        </div>
      </div>
    </div>
  )
}
