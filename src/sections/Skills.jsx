import { motion } from 'framer-motion'
import { GlassCard, SectionTitle } from '../components/UI'
import { resumeData } from '../data/resume'

// Import skill logos from react-icons
import {
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiMysql,
  SiOpenjdk,
  SiReact,
  SiNodedotjs,
  SiFlask,
  SiDjango,
  SiTailwindcss,
  SiSocketdotio,
  SiGit,
  SiChartdotjs,
  SiTableau,
  SiVscodium,
  SiDocker,
  SiLinux,
  SiMongodb,
  SiPostgresql,
  SiTensorflow,
  SiPandas,
  SiScikitlearn,
  SiNumpy
} from 'react-icons/si'

export function Skills() {
  const skillCategories = [
    { title: 'Languages', skills: resumeData.skills.languages },
    { title: 'Frameworks', skills: resumeData.skills.frameworks },
    { title: 'Tools', skills: resumeData.skills.tools },
    { title: 'Databases', skills: resumeData.skills.databases },
    { title: 'ML/AI', skills: resumeData.skills.ml },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section id="skills" style={{
      paddingTop: '80px',
      paddingBottom: '80px',
      paddingLeft: '24px',
      paddingRight: '24px',
      maxWidth: '1280px',
      margin: '0 auto',
    }}>
      <SectionTitle>Skills & Expertise</SectionTitle>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '24px',
      }}>
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <GlassCard>
              <h3 style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#ec4899',
                marginBottom: '16px',
                textAlign: 'center',
              }}>
                {category.title}
              </h3>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                {category.skills.map((skill) => {
                  // Map skill name to corresponding icon if available
                  const iconMap = {
                    Python: SiPython,
                    'C++': SiCplusplus,
                    JavaScript: SiJavascript,
                    SQL: SiMysql,
                    Java: SiOpenjdk,
                    React: SiReact,
                    'Node.js': SiNodedotjs,
                    Flask: SiFlask,
                    Django: SiDjango,
                    'Tailwind CSS': SiTailwindcss,
                    'Socket.IO': SiSocketdotio,
                    Git: SiGit,
                    'Power BI': SiChartdotjs,
                    Tableau: SiTableau,
                    'VS Code': SiVscodium,
                    Docker: SiDocker,
                    Linux: SiLinux,
                    MongoDB: SiMongodb,
                    MySQL: SiMysql,
                    PostgreSQL: SiPostgresql,
                    TensorFlow: SiTensorflow,
                    Pandas: SiPandas,
                    'Scikit-learn': SiScikitlearn,
                    NumPy: SiNumpy,
                  }
                  const Icon = iconMap[skill]

                  return (
                    <motion.div
                      key={skill}
                      variants={item}
                      whileHover={{ x: 5 }}
                      style={{
                        padding: '8px',
                        background: 'linear-gradient(to right, rgba(0, 217, 255, 0.1), rgba(236, 72, 153, 0.1))',
                        borderRadius: '4px',
                        border: '1px solid rgba(0, 217, 255, 0.2)',
                        textAlign: 'center',
                        fontSize: '14px',
                        color: 'var(--muted)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.5)'
                        e.currentTarget.style.color = 'var(--accent-color)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.2)'
                        e.currentTarget.style.color = 'var(--muted)'
                      }}
                    >
                      {Icon ? <Icon style={{ width: '18px', height: '18px', color: 'var(--accent-color)' }} /> : <span style={{ width: '18px', height: '18px' }} />} 
                      {skill}
                    </motion.div>
                  )
                })}
              </motion.div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        style={{
          marginTop: '48px',
          textAlign: 'center',
        }}
      >
        <GlassCard style={{
          background: 'linear-gradient(to right, rgba(0, 217, 255, 0.05), rgba(236, 72, 153, 0.05))',
        }}>
            <p style={{
            color: 'var(--muted)',
            marginBottom: '12px',
          }}>
            Always learning and exploring new technologies
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap',
          }}>
            {['Docker', 'Kubernetes', 'AWS', 'GraphQL', 'TypeScript'].map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.1 }}
                style={{
                  paddingLeft: '12px',
                  paddingRight: '12px',
                  paddingTop: '4px',
                  paddingBottom: '4px',
                  background: 'linear-gradient(to right, rgba(0, 217, 255, 0.2), rgba(236, 72, 153, 0.2))',
                  color: 'var(--accent-color)',
                  borderRadius: '9999px',
                  fontSize: '14px',
                  border: '1px solid rgba(0, 217, 255, 0.3)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.3)'
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </GlassCard>
      </motion.div>
    </section>
  )
}
