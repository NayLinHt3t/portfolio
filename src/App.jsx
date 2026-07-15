import Boot from './components/Boot.jsx'
import StatusBar from './components/StatusBar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Embedded from './components/Embedded.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Boot />
      <StatusBar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Embedded />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
