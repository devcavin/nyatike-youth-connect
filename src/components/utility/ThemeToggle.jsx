import { useTheme } from '../Context/UseTheme'

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="
        fixed top-4 right-4 z-50 
        p-3 rounded-full 
        bg-surface hover:bg-surface-hover 
        border border-border hover:border-border-hover
        text-text-primary
        transition-all duration-300 
        shadow-lg hover:shadow-xl
        active:scale-95
      "
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      {isDarkMode ? (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10ZM2 12h1m18 0h1M12 2v1m0 18v1m-8-9-1-1m14 2-1-1M5 5l1 1m12 12 1 1M5 19l1-1m12-12 1-1" />
        </svg>
      )}
    </button>
  )
}

export default ThemeToggle
