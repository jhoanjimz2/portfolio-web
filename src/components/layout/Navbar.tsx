'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Menu, X }                         from 'lucide-react'
import { useState }                        from 'react'

const navLinks = [
  { label: 'Inicio', href: '#' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Contacto', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(10,10,10,0)', 'rgba(10,10,10,0.9)']
  )
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 1])

  return (
    <motion.header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor,
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid',
        borderColor: borderOpacity.get() > 0 ? 'rgba(255,255,255,0.05)' : 'transparent',
      }}
    >
      <nav style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>

        {/* Logo */}
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: '18px',
            fontWeight: '700',
            textDecoration: 'none',
            color: '#fafafa',
            fontFamily: 'JetBrains Mono, monospace',
          }}
        >
          jj<span style={{ color: '#6366f1' }}>.</span>dev
        </motion.a>

        {/* Desktop links */}
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: 'flex',
            gap: '32px',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                style={{
                  color: '#71717a',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: '500',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fafafa')}
                onMouseLeave={e => (e.currentTarget.style.color = '#71717a')}
              >
                {link.label}
              </a>
            </li>
          ))}
        </motion.ul>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            padding: '8px 20px',
            borderRadius: '6px',
            background: '#6366f1',
            color: 'white',
            fontWeight: '600',
            fontSize: '13px',
            textDecoration: 'none',
          }}
          className="desktop-cta"
        >
          Hablemos
        </motion.a>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: '#fafafa',
            cursor: 'pointer',
            display: 'none',
          }}
          className="mobile-menu-btn"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            background: 'rgba(10,10,10,0.98)',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            padding: '24px',
          }}
          className="mobile-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                display: 'block',
                color: '#a1a1aa',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '500',
                padding: '12px 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  )
}