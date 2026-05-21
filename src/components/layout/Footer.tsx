'use client'

import { motion }                        from 'framer-motion'
import { GitBranch, ExternalLink, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.05)',
      padding: '48px 24px',
      background: '#0a0a0a',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '24px',
      }}>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a href="#" style={{
            fontSize: '18px',
            fontWeight: '700',
            color: '#fafafa',
            textDecoration: 'none',
            fontFamily: 'JetBrains Mono, monospace',
          }}>
            jj<span style={{ color: '#6366f1' }}>.</span>dev
          </a>
          <p style={{
            fontSize: '13px',
            color: '#71717a',
            marginTop: '6px',
          }}>
            Construyendo productos digitales desde Barranquilla 🇨🇴
          </p>
        </motion.div>

        {/* Links */}
        <div style={{
          display: 'flex',
          gap: '16px',
        }}>
          {[
            { icon: GitBranch, href: 'https://github.com/jhoanjimz2', label: 'GitHub' },
            { icon: ExternalLink, href: 'https://linkedin.com/in/jhoanjimz2', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:jhoan.developer@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.06)',
                background: 'rgba(255,255,255,0.02)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#71717a',
                textDecoration: 'none',
              }}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p style={{
          fontSize: '13px',
          color: '#71717a',
          fontFamily: 'JetBrains Mono, monospace',
        }}>
          © {currentYear} Jhoan Jiménez
        </p>

      </div>
    </footer>
  )
}