import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'
import { TableOfContents } from './TableOfContents'
import { SearchModal } from './SearchModal'
import { useTheme } from '../hooks/useTheme'
import { useSearch } from '../hooks/useSearch'
import { getPageByPath } from '../data/navigation'
import '../styles/layout.css'

export function Layout() {
  const { theme, toggleTheme } = useTheme()
  const search = useSearch()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  const currentPage = getPageByPath(location.pathname)

  return (
    <div className="app-layout">
      <div className="app-layout__navbar">
        <Navbar
          theme={theme}
          onToggleTheme={toggleTheme}
          onOpenSearch={search.open}
          onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
        />
      </div>

      <div
        className={`sidebar-overlay${sidebarOpen ? ' visible' : ''}`}
        onClick={() => setSidebarOpen(false)}
      />

      <div className={`app-layout__sidebar${sidebarOpen ? ' open' : ''}`}>
        <Sidebar onNavigate={() => setSidebarOpen(false)} />
      </div>

      <main className="app-layout__main">
        <Outlet />
      </main>

      <div className="app-layout__toc">
        {currentPage && <TableOfContents content={currentPage.content} />}
      </div>

      {search.isOpen && (
        <SearchModal
          query={search.query}
          results={search.results}
          onQueryChange={search.setQuery}
          onClose={search.close}
        />
      )}
    </div>
  )
}
