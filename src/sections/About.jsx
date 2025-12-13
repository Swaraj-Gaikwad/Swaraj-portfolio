import { motion } from 'framer-motion'
import { GlassCard, SectionTitle, AnimatedText } from '../components/UI'
import { resumeData } from '../data/resume'

export function About() {
  return (
    <section id="about" style={{ padding: '80px 24px', maxWidth: '1280px', margin: '0 auto' }}>
      <SectionTitle>About Me</SectionTitle>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '48px',
        alignItems: 'center',
      }}>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <GlassCard>
            <AnimatedText style={{ fontSize: '1.125rem' }}>
              {resumeData.about.summary}
            </AnimatedText>
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
        >
          {[
            { label: 'Languages', count: '4+' },
            { label: 'Frameworks', count: '5+' },
            { label: 'Projects', count: '5+' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px',
                backdropFilter: 'blur(10px)',
                background: 'rgba(15, 23, 42, 0.5)',
                border: '1px solid rgba(0, 217, 255, 0.2)',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.5)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.2)'
              }}
            >
              <span style={{ color: 'var(--muted)' }}>{stat.label}</span>
              <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-color)' }}>{stat.count}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
