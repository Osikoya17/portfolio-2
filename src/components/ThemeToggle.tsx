import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

export function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const dark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="inline-flex size-10 items-center justify-center text-muted transition-colors duration-300 hover:text-ink"
    >
      {dark ? (
        <Sun aria-hidden="true" className="size-[18px]" strokeWidth={1.5} />
      ) : (
        <Moon aria-hidden="true" className="size-[18px]" strokeWidth={1.5} />
      )}
    </button>
  )
}