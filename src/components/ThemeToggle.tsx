interface ThemeToggleProps {
  theme: 'dark' | 'light'
  onToggle: () => void
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 36,
        height: 36,
        background: 'none',
        border: '1px solid var(--border)',
        borderRadius: 6,
        color: 'var(--text-secondary)',
        cursor: 'pointer',
        fontSize: '1rem',
        transition: 'color 0.15s, border-color 0.15s',
      }}
    >
      {theme === 'dark' ? '☀' : '☾'}
    </button>
  )
}
