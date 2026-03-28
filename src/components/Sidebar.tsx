import { NavLink } from 'react-router-dom'
import { navigation } from '../data/navigation'
import '../styles/sidebar.css'

interface SidebarProps {
  onNavigate?: () => void
}

export function Sidebar({ onNavigate }: SidebarProps) {
  return (
    <aside className="sidebar">
      {navigation.map((section) => (
        <div key={section.title} className="sidebar__section">
          <div className="sidebar__section-title">{section.title}</div>
          {section.items.map((item) => (
            <NavLink
              key={item.slug}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => `sidebar__link${isActive ? ' active' : ''}`}
              onClick={onNavigate}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      ))}
    </aside>
  )
}
