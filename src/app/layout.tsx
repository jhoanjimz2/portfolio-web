import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jhoan Jiménez — Senior Full Stack Developer',
  description: 'Senior Full Stack Developer con más de 6 años de experiencia en Angular, React, Node.js y Mobile. Barranquilla, Colombia.',
  keywords: ['Full Stack Developer', 'Angular', 'React', 'Next.js', 'Node.js', 'Mobile', 'Colombia'],
  authors: [{ name: 'Jhoan Jiménez' }],
  creator: 'Jhoan Jiménez',
  openGraph: {
  type: 'website',
  locale: 'es_CO',
  url: 'https://jhoan-jimenez.netlify.app',
  title: 'Jhoan Jiménez — Senior Full Stack Developer',
  description: 'Senior Full Stack Developer con más de 6 años de experiencia.',
  siteName: 'Jhoan Jiménez Portfolio',
  images: [
      {
        url: 'https://jhoan-jimenez.netlify.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Jhoan Jiménez Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jhoan Jiménez — Senior Full Stack Developer',
    description: 'Senior Full Stack Developer con más de 6 años de experiencia.',
    images: ['https://jhoan-jimenez.netlify.app/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark">
      <body>
        {children}
      </body>
    </html>
  )
}