import CursorCanvas  from '../components/CursorCanvas'
import Navbar        from '../components/Navbar'
import Hero          from '../components/Hero'
import Stats         from '../components/Stats'
import Skills        from '../components/Skills'
import Experience    from '../components/Experience'
import Projects      from '../components/Projects'
import CTF           from '../components/CTF'
import Certifications from '../components/Certifications'
import Contact       from '../components/Contact'
import Footer        from '../components/Footer'

export default function Home() {
  return (
    <>
      <CursorCanvas />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Skills />
        <Experience />
        <Projects />
        <CTF />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
