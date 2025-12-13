import { motion } from 'framer-motion'
import { GlassCard, SectionTitle } from '../components/UI'
import { resumeData } from '../data/resume'

export function Experience() {
  return (
    <section id="experience" style={{
      paddingTop: '80px',
      paddingBottom: '80px',
      paddingLeft: '24px',
      paddingRight: '24px',
      maxWidth: '1280px',
      margin: '0 auto',
    }}>
      <SectionTitle>Experience</SectionTitle>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {resumeData.experience.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            style={{ position: 'relative' }}
          >
            <div style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '4px',
              height: '100%',
              background: 'var(--accent)',
              borderRadius: '2px',
            }} />

            <GlassCard style={{ marginLeft: '32px' }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                marginBottom: '16px',
              }}>
                <div style={{ marginBottom: '16px' }}>
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: 'var(--accent-color)',
                    marginBottom: '4px',
                  }}>{exp.position}</h3>
                  <p style={{
                    color: 'var(--accent-color)',
                    fontWeight: '600',
                  }}>{exp.company}</p>
                </div>
                <p style={{
                  color: '#9ca3af',
                  fontSize: '14px',
                }}>
                  {exp.period}
                </p>
              </div>

              <p style={{
                color: 'var(--muted)',
                marginBottom: '16px',
              }}>{exp.description}</p>

              <div style={{ marginBottom: '16px' }}>
                <p style={{
                  fontSize: '14px',
                  color: '#9ca3af',
                  marginBottom: '8px',
                }}>Key Skills:</p>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                }}>
                  {exp.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.1 }}
                      style={{
                        paddingLeft: '12px',
                        paddingRight: '12px',
                        paddingTop: '4px',
                        paddingBottom: '4px',
                        background: 'rgba(0, 217, 255, 0.2)',
                        color: 'var(--accent-color)',
                        borderRadius: '9999px',
                        fontSize: '14px',
                        border: '1px solid rgba(0, 217, 255, 0.3)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 1)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.3)'
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {exp.highlights.map((highlight) => (
                  <li key={highlight} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    color: 'var(--muted)',
                  }}>
                    <span style={{ color: 'var(--accent-color)', marginTop: '4px' }}>▸</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
