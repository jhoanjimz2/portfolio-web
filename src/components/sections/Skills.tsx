'use client'

import { motion }                 from 'framer-motion'
import { useWindowSize }          from '@/hooks/useWindowSize'
import { SKILLS, CERTIFICATIONS } from '@/lib/constants'

const skillCategories = [
  { title: 'Frontend', color: '#6366f1', skills: SKILLS.frontend },
  { title: 'Backend', color: '#8b5cf6', skills: SKILLS.backend },
  { title: 'Mobile', color: '#a78bfa', skills: SKILLS.mobile },
  { title: 'Database & Tools', color: '#c4b5fd', skills: [...SKILLS.database, ...SKILLS.tools] },
]

export default function Skills() {
  const { isMobile } = useWindowSize()

  return (
    <section
      id="skills"
      style={{
        padding: isMobile ? '80px 16px' : '120px 24px',
        background: 'linear-gradient(180deg, #0a0a0a 0%, #0d0d0d 100%)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <p style={{
            color: '#6366f1',
            fontSize: '13px',
            fontWeight: '600',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '16px',
            fontFamily: 'JetBrains Mono, monospace',
          }}>
            Stack tecnológico
          </p>
          <h2 style={{
            fontSize: isMobile ? '2rem' : 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '800',
            color: '#fafafa',
            letterSpacing: '-0.02em',
            marginBottom: '16px',
          }}>
            Mis herramientas
          </h2>
          <p style={{
            color: '#71717a',
            fontSize: '16px',
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: '1.7',
          }}>
            Tecnologías con las que construyo productos reales y escalables
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: '24px',
          marginBottom: '24px',
        }}>
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              style={{
                padding: '28px',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.06)',
                background: 'rgba(255,255,255,0.02)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: '1px',
                background: `linear-gradient(90deg, transparent, ${category.color}60, transparent)`,
              }} />

              <h3 style={{
                fontSize: '14px',
                fontWeight: '600',
                color: category.color,
                marginBottom: '20px',
                fontFamily: 'JetBrains Mono, monospace',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}>
                {category.title}
              </h3>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.04 }}
                    style={{
                      padding: '6px 12px',
                      borderRadius: '6px',
                      fontSize: '13px',
                      fontWeight: '500',
                      color: '#a1a1aa',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Architecture & Methodologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            padding: isMobile ? '20px' : '24px 32px',
            borderRadius: '12px',
            border: '1px solid rgba(99,102,241,0.2)',
            background: 'rgba(99,102,241,0.05)',
            marginBottom: '16px',
          }}
        >
          <h3 style={{
            fontSize: '13px',
            fontWeight: '600',
            color: '#6366f1',
            marginBottom: '16px',
            fontFamily: 'JetBrains Mono, monospace',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}>
            Arquitectura & Metodologías
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {SKILLS.architecture.map(skill => (
              <span key={skill} style={{
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: '500',
                color: '#818cf8',
                background: 'rgba(99,102,241,0.08)',
                border: '1px solid rgba(99,102,241,0.15)',
              }}>
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Certifications banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            padding: isMobile ? '20px' : '24px 32px',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.05)',
            background: 'rgba(255,255,255,0.02)',
            display: 'flex',
            alignItems: isMobile ? 'flex-start' : 'center',
            justifyContent: 'space-between',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '16px',
          }}
        >
          <div>
            <div style={{ fontSize: '15px', fontWeight: '600', color: '#fafafa', marginBottom: '4px' }}>
              Formación continua — {CERTIFICATIONS.length} certificaciones
            </div>
            <div style={{ fontSize: '13px', color: '#71717a' }}>
              Angular · Ionic · Flutter · NextJS · NestJS · Microservicios · Docker · TypeScript
            </div>
          </div>
          <div style={{
            padding: '8px 16px',
            borderRadius: '6px',
            background: 'rgba(99,102,241,0.15)',
            color: '#818cf8',
            fontSize: '13px',
            fontWeight: '600',
            fontFamily: 'JetBrains Mono, monospace',
            whiteSpace: 'nowrap',
          }}>
            + en crecimiento
          </div>
        </motion.div>
      </div>
    </section>
  )
}