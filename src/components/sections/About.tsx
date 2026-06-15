'use client'

import { motion }                            from 'framer-motion'
import { MapPin, Code2, Smartphone, Layers } from 'lucide-react'
import { useWindowSize }                     from '@/hooks/useWindowSize'
import { PERSONAL_INFO, STRENGTHS }          from '@/lib/constants'

const stats = [
  { value: '6+', label: 'Años de experiencia' },
  { value: '3', label: 'Empresas internacionales' },
  { value: '5+', label: 'Apps en producción' },
  { value: '∞', label: 'Ganas de construir' },
]

const highlights = [
  {
    icon: Code2,
    title: 'Full Stack',
    description: 'Angular, Next.js, NestJS, Node.js. Del diseño técnico a producción.',
  },
  {
    icon: Smartphone,
    title: 'Mobile & PWA',
    description: 'Apps iOS y Android con Ionic y Flutter. Publicadas en App Store y Google Play.',
  },
  {
    icon: Layers,
    title: 'Arquitectura',
    description: 'Soluciones escalables orientadas al negocio.',
  },
]

export default function About() {
  const { isMobile, isTablet } = useWindowSize()
  const isSmall = isMobile || isTablet

  return (
    <section
      id="about"
      style={{ padding: isMobile ? '80px 16px' : '120px 24px' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isSmall ? '1fr' : '1fr 1fr',
          gap: isSmall ? '48px' : '80px',
          alignItems: 'center',
        }}>

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: isSmall ? 0 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
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
              Sobre mí
            </p>

            <h2 style={{
              fontSize: isMobile ? '2rem' : 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '800',
              lineHeight: '1.1',
              marginBottom: '24px',
              letterSpacing: '-0.02em',
              color: '#fafafa',
            }}>
              Construyo productos,{' '}
              <span className="gradient-text">no solo código</span>
            </h2>

            <p style={{ color: '#71717a', lineHeight: '1.8', marginBottom: '16px', fontSize: '16px' }}>
              {PERSONAL_INFO.bio}
            </p>

            <p style={{ color: '#71717a', lineHeight: '1.8', marginBottom: '32px', fontSize: '16px' }}>
              Mi enfoque se centra en crear soluciones escalables, mantenibles y orientadas al negocio,
              combinando experiencia técnica, visión de producto y una fuerte orientación a la experiencia del usuario.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#a1a1aa', fontSize: '14px', marginBottom: '24px' }}>
              <MapPin size={16} style={{ color: '#6366f1' }} />
              {PERSONAL_INFO.location}
            </div>

            {/* Strengths */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {STRENGTHS.map(s => (
                <span key={s} style={{
                  padding: '5px 12px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: '500',
                  color: '#a1a1aa',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: isSmall ? 0 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
              marginBottom: '32px',
            }}>
              {stats.map((stat) => (
                <div key={stat.label} style={{
                  padding: isMobile ? '16px' : '24px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.06)',
                  background: 'rgba(255,255,255,0.02)',
                  textAlign: 'center',
                }}>
                  <div style={{
                    fontSize: isMobile ? '2rem' : '2.5rem',
                    fontWeight: '800',
                    color: '#6366f1',
                    marginBottom: '4px',
                    letterSpacing: '-0.02em',
                  }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '12px', color: '#71717a', fontWeight: '500' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {highlights.map((item) => (
                <div key={item.title} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  padding: '16px',
                  borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.04)',
                  background: 'rgba(255,255,255,0.02)',
                }}>
                  <div style={{
                    width: '36px', height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(99,102,241,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <item.icon size={18} style={{ color: '#6366f1' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: '600', color: '#fafafa', marginBottom: '4px' }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: '13px', color: '#71717a', lineHeight: '1.5' }}>
                      {item.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}