import { motion } from 'framer-motion'
import { Hero3D } from '../three/Hero3D'
import { resumeData } from '../data/resume'

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '80px',
        overflow: 'hidden',

        /* ❌ NO BACKGROUND HERE */
        /* Global background comes from App.jsx */
      }}
    >
      {/* 3D Accent (Transparent Canvas) */}
      <Hero3D />

      {/* Foreground Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          maxWidth: '56rem',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        {/* Name — Gradient (FIXED) */}
        <motion.div variants={item}>
          <h1
            style={{
              display: 'inline-block', // 🔥 critical for gradient text
              fontSize: 'clamp(2.5rem, 10vw, 3.5rem)',
              fontWeight: 'bold',
              marginBottom: '16px',
              background: 'var(--accent)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {resumeData.name}
          </h1>
        </motion.div>

        {/* Title */}
        <motion.div variants={item}>
          <p
            style={{
              fontSize: 'clamp(1rem, 5vw, 1.5rem)',
              color: 'var(--muted)',
              marginBottom: '32px',
              fontWeight: '300',
            }}
          >
            {resumeData.title}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={item}
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '48px',
          }}
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '12px 32px',
              background: 'var(--accent)',
              color: 'white',
              borderRadius: '8px',
              fontWeight: '600',
              boxShadow: '0 0 18px rgba(56, 189, 248, 0.35)',
              textDecoration: 'none',
            }}
          >
            View My Work
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '12px 32px',
              border: '1px solid rgba(148, 163, 184, 0.35)',
              color: 'var(--text-color)',
              borderRadius: '8px',
              fontWeight: '500',
              textDecoration: 'none',
              background: 'rgba(2, 6, 23, 0.4)',
              backdropFilter: 'blur(6px)',
            }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ marginTop: '64px', opacity: 0.7 }}
        >
          <svg
            style={{
              width: '24px',
              height: '24px',
              margin: '0 auto',
              color: 'var(--muted)',
            }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
