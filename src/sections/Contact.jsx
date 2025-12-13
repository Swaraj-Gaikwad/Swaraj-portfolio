import { motion } from 'framer-motion'
import { useState } from 'react'
import { GlassCard, NeonButton, SectionTitle } from '../components/UI'
import { resumeData } from '../data/resume'
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiArrowRight } from 'react-icons/fi'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Send form data to backend serverless API
    fetch('/api/sendMail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(async (res) => {
        const data = await res.json()
        if (res.ok) {
          setSubmitted(true)
          setFormData({ name: '', email: '', message: '' })
          setTimeout(() => setSubmitted(false), 3000)
        } else {
          console.error('SendMail error', data)
          alert(data?.error || 'Failed to send message')
        }
      })
      .catch((err) => {
        console.error('SendMail error', err)
        alert('Failed to send message')
      })
  }

  const socialLinks = [
    { icon: FiGithub, label: 'GitHub', url: resumeData.social.github },
    { icon: FiLinkedin, label: 'LinkedIn', url: resumeData.social.linkedin },
    { icon: FiMail, label: 'Email', url: `mailto:${resumeData.social.email}` },
  ]

  // Add phone link if available
  if (resumeData.social?.phone) {
    const sanitized = resumeData.social.phone.replace(/[^+\d]/g, '')
    socialLinks.push({ icon: FiPhone, label: resumeData.social.phone, url: `tel:${sanitized}` })
  }

  return (
    <section id="contact" style={{
      paddingTop: '80px',
      paddingBottom: '80px',
      paddingLeft: '24px',
      paddingRight: '24px',
      maxWidth: '896px',
      margin: '0 auto',
    }}>
      <SectionTitle>Get In Touch</SectionTitle>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '48px',
      }}>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <GlassCard>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: 'var(--accent-color)',
              marginBottom: '24px',
            }}>Let's Connect</h3>
            <p style={{
              color: 'var(--muted)',
              marginBottom: '32px',
            }}>
              I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hello, feel free to reach out!
            </p>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}>
              {socialLinks.map((social) => {
                const Icon = social.icon
                const openInNew = social.url?.startsWith('http') || social.url?.startsWith('mailto:')
                return (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    {...(openInNew ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    whileHover={{ x: 10 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      padding: '16px',
                      backdropFilter: 'blur(10px)',
                      background: 'rgba(15, 23, 42, 0.5)',
                      border: '1px solid rgba(0, 217, 255, 0.2)',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.5)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.2)'
                    }}
                  >
                    <Icon style={{
                      width: '24px',
                      height: '24px',
                      color: 'var(--accent-color)',
                      transition: 'color 0.3s ease',
                    }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--accent-color)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--accent-color)'
                      }}
                    />
                      <span style={{
                      color: 'var(--muted)',
                      transition: 'color 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--accent-color)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--muted)'
                      }}
                    >
                      {social.label}
                    </span>
                    <FiArrowRight style={{
                      marginLeft: 'auto',
                      width: '20px',
                      height: '20px',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = '1'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = '0'
                      }}
                    />
                  </motion.a>
                )
              })}
            </div>
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <GlassCard>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#ec4899',
              marginBottom: '24px',
            }}>Send a Message</h3>

            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}>
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  color: 'var(--muted)',
                  marginBottom: '8px',
                }}>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '8px 16px',
                    backgroundColor: 'rgba(15, 23, 42, 0.5)',
                    border: '1px solid rgba(0, 217, 255, 0.2)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '14px',
                    transition: 'border-color 0.3s ease',
                    boxSizing: 'border-box',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(0, 217, 255, 0.7)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(0, 217, 255, 0.2)'
                  }}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  color: 'var(--muted)',
                  marginBottom: '8px',
                }}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '8px 16px',
                    backgroundColor: 'rgba(15, 23, 42, 0.5)',
                    border: '1px solid rgba(0, 217, 255, 0.2)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '14px',
                    transition: 'border-color 0.3s ease',
                    boxSizing: 'border-box',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(0, 217, 255, 0.7)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(0, 217, 255, 0.2)'
                  }}
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone removed from form per user request; it's displayed in Let's Connect box */}

              <div>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  color: 'var(--muted)',
                  marginBottom: '8px',
                }}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  style={{
                    width: '100%',
                    padding: '8px 16px',
                    backgroundColor: 'rgba(15, 23, 42, 0.5)',
                    border: '1px solid rgba(0, 217, 255, 0.2)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '14px',
                    transition: 'border-color 0.3s ease',
                    boxSizing: 'border-box',
                    resize: 'none',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(0, 217, 255, 0.7)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(0, 217, 255, 0.2)'
                  }}
                  placeholder="Your message here..."
                />
              </div>

              <NeonButton type="submit" style={{ width: '100%' }}>
                {submitted ? 'Message Sent! ✓' : 'Send Message'}
              </NeonButton>
            </form>
          </GlassCard>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        style={{
          marginTop: '48px',
          textAlign: 'center',
        }}
      >
        <p style={{
          color: '#9ca3af',
        }}>
          © 2025 Swaraj Gaikwad. All rights reserved.
        </p>
      </motion.div>
    </section>
  )
}
