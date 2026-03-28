import { extractHeadings } from '../utils/extractHeadings'
import { useActiveHeading } from '../hooks/useActiveHeading'
import '../styles/toc.css'

interface TableOfContentsProps {
  content: string
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const headings = extractHeadings(content)
  const activeId = useActiveHeading()

  if (headings.length === 0) return null

  const scrollToTop = () => {
    const main = document.querySelector('.app-layout__main')
    if (main) {
      main.scrollTop = 0
      main.scrollTo({ top: 0, behavior: 'smooth' })
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="toc">
      <div className="toc__title">
        <span>≡</span> On this page
      </div>
      <ul className="toc__list">
        {headings.map((heading) => (
          <li key={heading.id} className="toc__item">
            <a
              href={`#${heading.id}`}
              className={`toc__link${heading.level === 3 ? ' toc__link--h3' : ''}${activeId === heading.id ? ' active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
      <div className="toc__actions">
        <button
          onClick={scrollToTop}
          className="toc__action-link"
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
        >
          ↑ Scroll to top
        </button>
      </div>
    </div>
  )
}
