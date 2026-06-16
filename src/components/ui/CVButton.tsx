'use client'

import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

export default function CVButton() {
  return (
    <motion.a
      href="/jhoan-jimenez-cv.pdf"
      download="Jhoan-Jimenez-CV.pdf"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      style={{
        position: 'fixed',
        bottom: '32px',
        right: '32px',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '12px 20px',
        borderRadius: '9999px',
        background: '#6366f1',
        color: 'white',
        fontWeight: '600',
        fontSize: '14px',
        textDecoration: 'none',
        boxShadow: '0 0 30px rgba(99,102,241,0.4), 0 4px 20px rgba(0,0,0,0.3)',
        border: '1px solid rgba(255,255,255,0.15)',
        backdropFilter: 'blur(10px)',
        cursor: 'pointer',
      }}
      whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(99,102,241,0.6), 0 4px 20px rgba(0,0,0,0.3)' }}
      whileTap={{ scale: 0.95 }}
    >
      <Download size={16} />
      Descargar CV
    </motion.a>
  )
}