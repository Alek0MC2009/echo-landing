import { Button } from '@/components/ui/button'
import { useContext } from 'react'
import { SunIcon, MoonIcon } from 'lucide-react'
import { ThemeContext } from '@/context/theme-context'
export function ButtonTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    return null
  }

  return (
    <Button
      className="border-gray-400 my-1 bg-white dark:bg-black"
      onClick={context.toggleTheme}
      variant={'outline'}
    >
      {context.theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </Button>
  )
}
