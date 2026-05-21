'use client'

import { motion } from 'framer-motion'
import { GitBranch } from 'lucide-react'
import { useWindowSize } from '@/hooks/useWindowSize'

const projects = [
  {
    title: 'BuenTaxi',
    description: 'Plataforma de taxi compartido. Comparte, conoce, solicita y cotiza tu taxi en tiempo real. App móvil y web con Angular e Ionic.',
    tags: ['Angular', 'Ionic', 'Node.js', 'MongoDB'],
    github: 'https://github.com/jhoanjimz2/Buentaxi_Ionic',
    featured: true,
    gradient: 'linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.05) 100%)',
    accentColor: '#6366f1',
  },
  {
    title: 'Passaparola',
    description: 'App de cashback y recompensas publicada en App Store y Google Play. Compra en tiendas afiliadas y gana dinero real recomendando.',
    tags: ['Angular', 'Ionic', 'Firebase', 'Node.js', 'PWA'],
    github: 'https://github.com/jhoanjimz2/Passaparola_Ionic',
    featured: true,
    gradient: 'linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(167,139,250,0.05) 100%)',
    accentColor: '#8b5cf6',
  },
  {
    title: 'JointlyBuy',
    description: 'App de compras conjuntas donde el precio baja conforme más personas se unen. Compra inteligente, colectiva y en tiempo real.',
    tags: ['Flutter', 'Dart', 'REST APIs'],
    github: 'https://github.com/jhoanjimz2/JointlyBuy_Flutter',
    featured: true,
    gradient: 'linear-gradient(135deg, rgba(167,139,250,0.15) 0%, rgba(196,181,253,0.05) 100%)',
    accentColor: '#a78bfa',
  },
  {
    title: 'Unika',
    description: 'Plataforma de trading móvil para todos. Negocia Crypto, tokens ERC20, Founder Tickets y Property Tickets desde tu móvil.',
    tags: ['Ionic', 'Angular', 'TypeScript', 'Web3'],
    github: 'https://github.com/jhoanjimz2/Unika_Ionic',
    featured: false,
    gradient: '',
    accentColor: '#c4b5fd',
  },
  {
    title: 'Sictaxi',
    description: 'Sistema de gestión de taxis para entidades gubernamentales. Dashboard administrativo con Angular y APIs REST.',
    tags: ['Angular', 'TypeScript', 'REST APIs', 'RxJS'],
    github: 'https://github.com/jhoanjimz2/Sictaxi',
    featured: false,
    gradient: '',
    accentColor: '#6366f1',
  },
  {
    title: 'BuenTaxi Web',
    description: 'Landing page oficial de BuenTaxi. Diseño responsivo para presentar la plataforma e invitar a descargar la app.',
    tags: ['Angular', 'TypeScript', 'CSS', 'PWA'],
    github: 'https://github.com/jhoanjimz2/Buentaxi_Web',
    featured: false,
    gradient: '',
    accentColor: '#8b5cf6',
  },
]

export default function Projects() {
  const { isMobile } = useWindowSize()
  const featured = projects.filter(p => p.featured)
  const rest = projects.filter(p => !p.featured)

  return (
    <section id="projects" style={{ padding: isMobile ? '80px 16px' : '120px 24px' }}>
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
            Portafolio
          </p>
          <h2 style={{
            fontSize: isMobile ? '2rem' : 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '800',
            color: '#fafafa',
            letterSpacing: '-0.02em',
            marginBottom: '16px',
          }}>
            Proyectos <span className="gradient-text">destacados</span>
          </h2>
          <p style={{
            color: '#71717a',
            fontSize: '16px',
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: '1.7',
          }}>
            Aplicaciones reales en producción, usadas por usuarios reales
          </p>
        </motion.div>

        {/* Featured */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '24px',
        }}>
          {featured.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{
                padding: '32px',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.06)',
                background: project.gradient,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: '1px',
                background: `linear-gradient(90deg, transparent, ${project.accentColor}80, transparent)`,
              }} />

              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 10px',
                borderRadius: '9999px',
                background: `${project.accentColor}20`,
                border: `1px solid ${project.accentColor}40`,
                marginBottom: '20px',
              }}>
                <span style={{
                  width: '6px', height: '6px',
                  borderRadius: '50%',
                  background: project.accentColor,
                  display: 'inline-block',
                }} />
                <span style={{
                  fontSize: '11px',
                  color: project.accentColor,
                  fontWeight: '600',
                  letterSpacing: '0.05em',
                  fontFamily: 'JetBrains Mono, monospace',
                }}>
                  DESTACADO
                </span>
              </div>

              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: '700',
                color: '#fafafa',
                marginBottom: '12px',
                letterSpacing: '-0.01em',
              }}>
                {project.title}
              </h3>

              <p style={{
                color: '#71717a',
                fontSize: '14px',
                lineHeight: '1.7',
                marginBottom: '24px',
              }}>
                {project.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{
                    padding: '4px 10px',
                    borderRadius: '5px',
                    fontSize: '12px',
                    fontWeight: '500',
                    color: '#a1a1aa',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  borderRadius: '7px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.04)',
                  color: '#a1a1aa',
                  fontSize: '13px',
                  fontWeight: '500',
                  textDecoration: 'none',
                }}
              >
                <GitBranch size={14} />
                Código
              </a>
            </motion.div>
          ))}
        </div>

        {/* Other projects */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px',
        }}>
          {rest.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                padding: '24px',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.05)',
                background: 'rgba(255,255,255,0.02)',
              }}
            >
              <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#fafafa', marginBottom: '8px' }}>
                {project.title}
              </h3>
              <p style={{ color: '#71717a', fontSize: '13px', lineHeight: '1.6', marginBottom: '16px' }}>
                {project.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{
                    padding: '3px 8px',
                    borderRadius: '4px',
                    fontSize: '11px',
                    color: '#71717a',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.05)',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#6366f1',
                  fontSize: '13px',
                  fontWeight: '500',
                  textDecoration: 'none',
                }}
              >
                <GitBranch size={13} />
                Ver código
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}