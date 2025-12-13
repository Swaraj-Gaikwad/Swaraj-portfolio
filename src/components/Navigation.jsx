import { motion } from 'framer-motion'
import { useState } from 'react'

/* ---------------- THEME TOGGLE ---------------- */

// Theme toggle removed per request: theme is fixed

/* ---------------- NAVBAR ---------------- */

export function Navbar() {
  const sections = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact']
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <motion.nav
      className="main-nav"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 40,

        /* 🧊 GLASSMORPHISM */
        background: 'var(--card-bg)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid var(--card-border)',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '16px 32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* LOGO */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          style={{
            display: 'inline-block', // 🔥 required for gradient text
            fontSize: '24px',
            fontWeight: 'bold',

            background: 'var(--accent)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          SG
        </motion.h1>

        {/* NAV LINKS (DESKTOP) */}
        <div className="desktop-links" style={{ gap: 32 }}>
          {sections.map((section) => (
            <motion.a
              key={section}
              href={`#${section.toLowerCase()}`}
              whileHover={{ color: 'var(--accent-color)' }}
              style={{
                color: 'var(--muted)',
                textDecoration: 'none',
                fontWeight: 500,
                transition: 'color 0.2s ease',
              }}
            >
              {section}
            </motion.a>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="mobile-nav-btn"
          aria-label="Open mobile menu"
          onClick={() => setMobileOpen(true)}
        >
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M4 6h16M4 12h16M4 18h16" stroke="var(--accent-color)" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </button>

        {/* MOBILE LINKS OVERLAY */}
        {mobileOpen && (
          <div className={`mobile-links show`}>
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                style={{ color: 'var(--muted)', textDecoration: 'none', padding: '8px 12px' }}
              >
                {section}
              </a>
            ))}
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu" style={{ marginTop: 8, alignSelf: 'flex-end' }}>
              Close
            </button>
          </div>
        )}
      </div>
    </motion.nav>
  )
}
