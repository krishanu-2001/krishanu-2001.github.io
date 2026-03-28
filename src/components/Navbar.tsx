import { Link } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'
import '../styles/navbar.css'

interface NavbarProps {
  theme: 'dark' | 'light'
  onToggleTheme: () => void
  onOpenSearch: () => void
  onToggleSidebar: () => void
}

export function Navbar({ theme, onToggleTheme, onOpenSearch, onToggleSidebar }: NavbarProps) {
  return (
    <nav className="navbar">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <button className="navbar__hamburger" onClick={onToggleSidebar}>
          ☰
        </button>
        <Link to="/" className="navbar__brand">
          Krishanu Saini
          <span className="navbar__brand-separator">/</span>
          <span className="navbar__brand-sub">Portfolio</span>
        </Link>
      </div>

      <div className="navbar__right">
        <button className="navbar__search-trigger" onClick={onOpenSearch}>
          <span style={{ fontSize: '0.875rem' }}>⌕</span>
          <span>Search...</span>
          <span className="navbar__search-kbd">⌘K</span>
        </button>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
    </nav>
  )
}
