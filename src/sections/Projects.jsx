import { motion } from 'framer-motion'
import { GlassCard, NeonButton, SectionTitle } from '../components/UI'
import { resumeData } from '../data/resume'

export function Projects() {
  return (
    <section id="projects" style={{
      paddingTop: '80px',
      paddingBottom: '80px',
      paddingLeft: '24px',
      paddingRight: '24px',
      maxWidth: '1280px',
      margin: '0 auto',
    }}>
      <SectionTitle>Featured Projects</SectionTitle>

      <div className="projects-grid">
        {resumeData.projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            style={{ display: 'flex' }}
          >
            <GlassCard style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
            }}>
              <div style={{
                fontSize: '48px',
                marginBottom: '16px',
                transition: 'transform 0.3s ease',
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.25)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                }}
              >
                {project.image}
              </div>

              <h3 style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: 'var(--accent-color)',
                marginBottom: '8px',
              }}>{project.name}</h3>
              <p style={{
                color: 'var(--muted)',
                fontSize: '14px',
                marginBottom: '16px',
                flex: 1,
              }}>
                {project.description}
              </p>

              <div style={{ marginBottom: '16px' }}>
                <p style={{
                  fontSize: '12px',
                  color: '#9ca3af',
                  marginBottom: '8px',
                }}>Tech Stack:</p>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                }}>
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      style={{
                        paddingLeft: '8px',
                        paddingRight: '8px',
                        paddingTop: '4px',
                        paddingBottom: '4px',
                        background: 'rgba(236, 72, 153, 0.2)',
                        color: '#f472b6',
                        borderRadius: '4px',
                        fontSize: '12px',
                        border: '1px solid rgba(236, 72, 153, 0.3)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 1)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.3)'
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              <ul style={{
                marginBottom: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
              }}>
                {project.features.map((feature) => (
                  <li key={feature} style={{
                    fontSize: '12px',
                    color: '#9ca3af',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}>
                    <span style={{ color: '#ec4899' }}>✓</span> {feature}
                  </li>
                ))}
              </ul>

              <div style={{
                display: 'flex',
                gap: '12px',
                paddingTop: '16px',
                borderTop: '1px solid rgba(0, 217, 255, 0.2)',
              }}>
                <NeonButton
                  style={{
                    flex: 1,
                    padding: '8px 16px',
                    fontSize: '14px',
                  }}
                  onClick={() => window.open(project.github)}
                >
                  Code
                </NeonButton>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(project.live)}
                  style={{
                    flex: 1,
                    padding: '8px 16px',
                    fontSize: '14px',
                      border: '2px solid var(--accent-color)',
                      color: 'var(--accent-color)',
                    backgroundColor: 'transparent',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0, 217, 255, 0.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }}
                >
                  Live
                </motion.button>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
