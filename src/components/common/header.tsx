import { ButtonTheme } from '../ui/button-theme'
import { HeadphonesIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
export function Header() {
  const links = [
    { name: 'Inicio', to: '/' },
    { name: 'Tienda', to: '/shop' },
    { name: 'Características', to: '/features' },
    { name: 'Contacto', to: '/contact' },
    { name: 'Soporte', to: '/support' },
  ]
  return (
    <header className="sticky top-0 backdrop-blur-md bg-white/80 dark:bg-black/80 h-12 md:h-20 px-4 md:px-8 flex items-center justify-between border-b border-gray-400">
      <div
        className="flex gap-2 md:gap-4 hover:cursor-pointer hover:text-blue-500 transition-colors"
        onClick={() => console.log('Yendo al inicio...')}
      >
        <HeadphonesIcon className="size-6 md:size-8" />
        <h2 className="text-md md:text-2xl md:my-1 font-sans">ECHO</h2>
      </div>

      {/* Esto solo se muestra si estas en movil o en una pantalla pequeña*/}
      <div className="sm:flex md:hidden">
        <ButtonTheme />
      </div>

      {/* Esta parte estara separada del logo */}
      <div className="hidden md:flex gap-2 my-2">
        <nav>
          <ul className="flex gap-4 my-2">
            {links.map((link) => {
              return (
                <li
                  key={link.to}
                  className="hover:text-blue-500 transition-colors hover:underline"
                >
                  <Link to={link.to}>{link.name}</Link>
                </li>
              )
            })}
          </ul>
        </nav>
        <ButtonTheme />
      </div>
    </header>
  )
}
