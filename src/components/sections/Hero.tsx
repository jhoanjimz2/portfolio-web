'use client'

import { motion }                                   from 'framer-motion'
import { ArrowDown, GitBranch, ExternalLink, Mail } from 'lucide-react'
import { PERSONAL_INFO }                            from '@/lib/constants'

const socialLinks = [
  { icon: GitBranch, href: 'https://github.com/jhoanjimz2', label: 'GitHub' },
  { icon: ExternalLink, href: 'https://linkedin.com/in/jhoanjimz2', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:jhoan.developer@gmail.com', label: 'Email' },
]

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '0 24px',
    }}>

      <div style={{
        position: 'absolute',
        top: '-20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '800px',
        height: '600px',
        background: 'radial-gradient(ellipse, rgba(99,102,241,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '900px',
        width: '100%',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
      }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '9999px',
            border: '1px solid rgba(99,102,241,0.3)',
            background: 'rgba(99,102,241,0.1)',
            marginBottom: '32px',
          }}
        >
          <span style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#6366f1',
            display: 'inline-block',
          }} />
          <span style={{ color: '#a1a1aa', fontSize: '14px', fontFamily: 'JetBrains Mono, monospace' }}>
            Available for work
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: '800',
            lineHeight: '1.05',
            marginBottom: '24px',
            letterSpacing: '-0.03em',
          }}
        >
          <span style={{ color: '#fafafa' }}>Jhoan </span>
          <span className="gradient-text">Jiménez</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
            color: '#a1a1aa',
            marginBottom: '16px',
            fontWeight: '400',
          }}
        >
          Senior Full Stack Developer · Web & Mobile
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            fontSize: '1rem',
            color: '#71717a',
            maxWidth: '600px',
            margin: '0 auto 48px',
            lineHeight: '1.7',
          }}
        >
          6+ años construyendo productos digitales escalables con Angular, React, Node.js y Mobile.
          Barranquilla, Colombia 🇨🇴
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '64px',
          }}
        >
          <a
            href="#projects"
            style={{
              padding: '12px 28px',
              borderRadius: '8px',
              background: '#6366f1',
              color: 'white',
              fontWeight: '600',
              fontSize: '15px',
              textDecoration: 'none',
              boxShadow: '0 0 30px rgba(99,102,241,0.3)',
            }}
          >
            Ver proyectos
          </a>
          <a
            href="#contact"
            style={{
              padding: '12px 28px',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.1)',
              background: 'rgba(255,255,255,0.05)',
              color: '#fafafa',
              fontWeight: '600',
              fontSize: '15px',
              textDecoration: 'none',
              backdropFilter: 'blur(10px)',
            }}
          >
            Contactar
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            display: 'flex',
            gap: '24px',
            justifyContent: 'center',
          }}
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(255,255,255,0.03)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#71717a',
                textDecoration: 'none',
              }}
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          style={{
            position: 'absolute',
            bottom: '-80px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            color: '#404040',
          }}
        >
          <span style={{ fontSize: '12px', letterSpacing: '0.1em' }}>SCROLL</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}