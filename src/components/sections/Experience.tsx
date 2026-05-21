'use client'

import { motion }                   from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'
import { useWindowSize }            from '@/hooks/useWindowSize'

const experience = [
  {
    company: 'Sistema AX, Lda',
    role: 'Senior Full Stack Developer',
    period: 'Mar 2025 - Abr 2026',
    description: 'Desarrollo de funcionalidades full stack para plataformas de alto tráfico. Implementación de componentes reutilizables e integración de APIs REST en tiempo real para sistemas de recompensas y compras inteligentes.',
    tags: ['Angular', 'Node.js', 'REST APIs', 'MongoDB', 'Agile'],
    current: true,
  },
  {
    company: 'InnLab',
    role: 'Senior Full Stack Developer',
    period: 'Ene 2023 - Ene 2026',
    description: 'Lideré el desarrollo de aplicaciones web y móviles con Angular e Ionic. Participé en plataformas como Sictaxi y BuenTaxi. Evolución de desarrollador a socio estratégico del producto en entornos ágiles.',
    tags: ['Angular', 'Ionic', 'TypeScript', 'Figma', 'Scrum'],
    current: false,
  },
  {
    company: 'Sistema AX, Lda',
    role: 'Full Stack & Mobile Developer',
    period: 'Ene 2020 - Ene 2023',
    description: 'Desarrollo end-to-end de Etixpay desde planificación hasta despliegue en App Store y Google Play. PWAs y dashboards con Angular. Trabajo remoto con equipos internacionales.',
    tags: ['Angular', 'Ionic', 'Node.js', 'PWA', 'MongoDB'],
    current: false,
  },
]

const education = [
  {
    institution: 'Universidad del Magdalena',
    degree: 'Ingeniería de Sistemas',
    period: '2016 - 2023',
  },
  {
    institution: 'SENA',
    degree: 'Tecnólogo en Análisis y Desarrollo de Software',
    period: '2024 - 2026',
  },
  {
    institution: 'Universidad Autónoma de Bucaramanga',
    degree: 'Diplomado en Desarrollo de Aplicaciones Web',
    period: '2022',
  },
  {
    institution: 'Udemy',
    degree: 'Angular, Ionic, Figma, Git, MongoDB, Node.js',
    period: 'Constantemente',
  },
]

export default function Experience() {
  const { isMobile, isTablet } = useWindowSize()
  const isSmall = isMobile || isTablet

  return (
    <section
      id="experience"
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
            Trayectoria
          </p>
          <h2 style={{
            fontSize: isMobile ? '2rem' : 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '800',
            color: '#fafafa',
            letterSpacing: '-0.02em',
          }}>
            Experiencia & <span className="gradient-text">Educación</span>
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isSmall ? '1fr' : '1fr 1fr',
          gap: isSmall ? '64px' : '64px',
        }}>

          {/* Experience */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '32px',
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'rgba(99,102,241,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Briefcase size={16} style={{ color: '#6366f1' }} />
              </div>
              <h3 style={{ color: '#fafafa', fontSize: '16px', fontWeight: '600' }}>
                Experiencia laboral
              </h3>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                left: '11px',
                top: '8px',
                bottom: '8px',
                width: '1px',
                background: 'linear-gradient(180deg, #6366f1, rgba(99,102,241,0.1))',
              }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {experience.map((item, index) => (
                  <motion.div
                    key={item.company + item.period}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    style={{ paddingLeft: '32px', position: 'relative' }}
                  >
                    <div style={{
                      position: 'absolute',
                      left: '4px',
                      top: '6px',
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      background: item.current ? '#6366f1' : '#1a1a1a',
                      border: `2px solid ${item.current ? '#6366f1' : '#333'}`,
                      boxShadow: item.current ? '0 0 12px rgba(99,102,241,0.5)' : 'none',
                    }} />

                    <div style={{
                      padding: '20px',
                      borderRadius: '12px',
                      border: '1px solid rgba(255,255,255,0.05)',
                      background: item.current ? 'rgba(99,102,241,0.05)' : 'rgba(255,255,255,0.02)',
                    }}>
                      <div style={{ marginBottom: '8px' }}>
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          flexWrap: 'wrap',
                          gap: '8px',
                          marginBottom: '2px',
                        }}>
                          <div style={{ fontSize: '15px', fontWeight: '700', color: '#fafafa' }}>
                            {item.role}
                          </div>
                          {item.current && (
                            <span style={{
                              padding: '2px 8px',
                              borderRadius: '9999px',
                              background: 'rgba(99,102,241,0.2)',
                              color: '#818cf8',
                              fontSize: '11px',
                              fontWeight: '600',
                              whiteSpace: 'nowrap',
                            }}>
                              Actual
                            </span>
                          )}
                        </div>
                        <div style={{ fontSize: '13px', color: '#6366f1', fontWeight: '500', marginBottom: '4px' }}>
                          {item.company}
                        </div>
                        <div style={{ fontSize: '12px', color: '#71717a', fontFamily: 'JetBrains Mono, monospace' }}>
                          {item.period}
                        </div>
                      </div>

                      <p style={{
                        color: '#71717a',
                        fontSize: '13px',
                        lineHeight: '1.6',
                        marginBottom: '12px',
                      }}>
                        {item.description}
                      </p>

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {item.tags.map(tag => (
                          <span
                            key={tag}
                            style={{
                              padding: '3px 8px',
                              borderRadius: '4px',
                              fontSize: '11px',
                              color: '#71717a',
                              background: 'rgba(255,255,255,0.03)',
                              border: '1px solid rgba(255,255,255,0.05)',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '32px',
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'rgba(139,92,246,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <GraduationCap size={16} style={{ color: '#8b5cf6' }} />
              </div>
              <h3 style={{ color: '#fafafa', fontSize: '16px', fontWeight: '600' }}>
                Educación
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {education.map((item, index) => (
                <motion.div
                  key={item.institution}
                  initial={{ opacity: 0, x: isSmall ? 0 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{
                    padding: '20px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.05)',
                    background: 'rgba(255,255,255,0.02)',
                  }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '8px',
                    flexWrap: isMobile ? 'wrap' : 'nowrap',
                  }}>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: '#fafafa', marginBottom: '4px' }}>
                        {item.institution}
                      </div>
                      <div style={{ fontSize: '13px', color: '#71717a', lineHeight: '1.5' }}>
                        {item.degree}
                      </div>
                    </div>
                    <span style={{
                      fontSize: '12px',
                      color: '#8b5cf6',
                      fontFamily: 'JetBrains Mono, monospace',
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                    }}>
                      {item.period}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}