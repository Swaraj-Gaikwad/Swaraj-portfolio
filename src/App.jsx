import { useEffect } from 'react'
import { Navbar } from './components/Navigation'
import { CustomCursor } from './components/Effects'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Experience } from './sections/Experience'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'
import { Contact } from './sections/Contact'
import './App.css'

export default function App() {
  useEffect(() => {
    const root = document.documentElement

    // Fixed dark theme
    {
      root.style.setProperty(
        '--bg-gradient',
        'radial-gradient(circle at top, #020617 0%, #000000 70%)'
      )
      root.style.setProperty('--text-color', '#e5e7eb')
      root.style.setProperty('--card-bg', 'rgba(15, 23, 42, 0.5)')
      root.style.setProperty('--card-bg-solid', 'rgba(15, 23, 42, 0.95)')
      root.style.setProperty('--card-border', 'rgba(0, 217, 255, 0.2)')
      root.style.setProperty('--accent', 'linear-gradient(to right, #0ea5e9, #2563eb)')
      root.style.setProperty('--accent-color', '#06b6d4')
      root.style.setProperty('--muted', '#94a3b8')
    }
  }, [])

  return (
    <div className="dark">
      <div
        style={{
          minHeight: '100vh',
          backgroundImage: 'var(--bg-gradient)',
          color: 'var(--text-color)',
        }}
      >
        {window.innerWidth > 768 && <CustomCursor />}
        <Navbar />

        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </div>
  )
}
