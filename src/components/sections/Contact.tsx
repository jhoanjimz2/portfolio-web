'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, ExternalLink, Send } from 'lucide-react'
import { useState } from 'react'
import { useWindowSize } from '@/hooks/useWindowSize'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const { isMobile, isTablet } = useWindowSize()
  const isSmall = isMobile || isTablet
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
    setTimeout(() => setStatus('idle'), 4000)
  }

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid rgba(255,255,255,0.08)',
    background: 'rgba(255,255,255,0.03)',
    color: '#fafafa',
    fontSize: '14px',
    outline: 'none',
    boxSizing: 'border-box' as const,
    fontFamily: 'inherit',
  }

  const labelStyle = {
    display: 'block',
    fontSize: '13px',
    color: '#a1a1aa',
    marginBottom: '8px',
    fontWeight: '500',
  }

  return (
    <section id="contact" style={{ padding: isMobile ? '80px 16px' : '120px 24px' }}>
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
            Contacto
          </p>
          <h2 style={{
            fontSize: isMobile ? '2rem' : 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '800',
            color: '#fafafa',
            letterSpacing: '-0.02em',
            marginBottom: '16px',
          }}>
            Hablemos de tu <span className="gradient-text">proyecto</span>
          </h2>
          <p style={{
            color: '#71717a',
            fontSize: '16px',
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: '1.7',
          }}>
            Estoy disponible para proyectos freelance, oportunidades laborales y colaboraciones.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isSmall ? '1fr' : '1fr 1.5fr',
          gap: isSmall ? '48px' : '64px',
          alignItems: 'flex-start',
        }}>

          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: isSmall ? 0 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#fafafa', marginBottom: '8px' }}>
              Jhoan Jiménez
            </h3>
            <p style={{ color: '#71717a', fontSize: '14px', lineHeight: '1.7', marginBottom: '32px' }}>
              Senior Full Stack Developer disponible para nuevos proyectos y oportunidades.
              Respondo en menos de 24 horas.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { icon: Mail, label: 'Email', value: 'jhoan.developer@gmail.com', href: 'mailto:jhoan.developer@gmail.com' },
                { icon: MapPin, label: 'Ubicación', value: 'Barranquilla, Colombia', href: null },
                { icon: ExternalLink, label: 'LinkedIn', value: 'linkedin.com/in/jhoanjimz2', href: 'https://linkedin.com/in/jhoanjimz2' },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '16px',
                    borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.05)',
                    background: 'rgba(255,255,255,0.02)',
                  }}
                >
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(99,102,241,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <item.icon size={16} style={{ color: '#6366f1' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: '#71717a', marginBottom: '2px' }}>
                      {item.label}
                    </div>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer"
                        style={{ fontSize: '13px', color: '#a1a1aa', textDecoration: 'none', fontWeight: '500' }}>
                        {item.value}
                      </a>
                    ) : (
                      <span style={{ fontSize: '13px', color: '#a1a1aa', fontWeight: '500' }}>
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: isSmall ? 0 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                gap: '16px',
                marginBottom: '16px',
              }}>
                <div>
                  <label style={labelStyle}>Nombre</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Tu nombre"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="tu@email.com"
                    style={inputStyle}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={labelStyle}>Asunto</label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={e => setForm({ ...form, subject: e.target.value })}
                  placeholder="¿En qué puedo ayudarte?"
                  style={inputStyle}
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={labelStyle}>Mensaje</label>
                <textarea
                  required
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="Cuéntame sobre tu proyecto..."
                  rows={5}
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                style={{
                  width: '100%',
                  padding: '14px 28px',
                  borderRadius: '8px',
                  background: status === 'success' ? '#10b981' : status === 'error' ? '#ef4444' : '#6366f1',
                  color: 'white',
                  fontWeight: '600',
                  fontSize: '15px',
                  border: 'none',
                  cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  opacity: status === 'loading' ? 0.7 : 1,
                  transition: 'all 0.2s',
                }}
              >
                <Send size={16} />
                {status === 'idle' && 'Enviar mensaje'}
                {status === 'loading' && 'Enviando...'}
                {status === 'success' && '¡Mensaje enviado! 🎉'}
                {status === 'error' && 'Error, intenta de nuevo'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}