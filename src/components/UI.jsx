import { motion } from 'framer-motion'

export function GlassCard({ children, style = {}, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      style={{
      backdropFilter: 'blur(10px)',
      background: 'var(--card-bg, rgba(15, 23, 42, 0.5))',
      border: '1px solid var(--card-border, rgba(0, 217, 255, 0.2))',
        borderRadius: '12px',
        padding: '24px',
        transition: 'all 0.3s ease',
        ...style
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.5)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.2)'
      }}
    >
      {children}
    </motion.div>
  )
}

export function NeonButton({ children, onClick, style = {}, ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      style={{
           padding: '12px 24px',
           background: 'var(--accent, linear-gradient(to right, #0ea5e9, #2563eb))',
        color: 'white',
        borderRadius: '8px',
        fontWeight: '600',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)',
        transition: 'all 0.3s ease',
        ...style
      }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export function SectionTitle({ children, style = {} }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{
        fontSize: 'clamp(2rem, 8vw, 3rem)',
        fontWeight: 'bold',
        background: 'var(--title-grad, var(--accent))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        marginBottom: '48px',
        ...style
      }}
    >
      {children}
    </motion.h2>
  )
}

export function AnimatedText({ children, style = {} }) {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{
        color: 'var(--muted)',
        fontSize: '1.125rem',
        lineHeight: '1.75',
        ...style
      }}
    >
      {children}
    </motion.p>
  )
}
