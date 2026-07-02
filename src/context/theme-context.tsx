import { createContext, useState, ReactNode, useEffect } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeContext = createContext<ThemeContextType | null>(null)

export function ThemeProvider({ children }: ThemeProviderProps) {
  // 1. estado
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem('theme') as Theme) || 'light',
  )

  // 2. 👇 AQUÍ VA EL useEffect
  useEffect(() => {
    localStorage.setItem('theme', theme)

    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  // 3. función toggle
  function toggleTheme() {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  // 4. return
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
