import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import '@/main'
import { ButtonTheme } from './components/ui/button-theme'
import { Header } from './components/common/header'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home-page'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
