import Hero       from '@/components/sections/Hero'
import About      from '@/components/sections/About'
import Skills     from '@/components/sections/Skills'
import Projects   from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Contact    from '@/components/sections/Contact'
import Navbar     from '@/components/layout/Navbar'
import Footer     from '@/components/layout/Footer'

export default function Home() {
  return (
    <main style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}