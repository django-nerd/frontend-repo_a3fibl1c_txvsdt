import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'

function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} BuildPlus Construction. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#projects" className="hover:text-gray-900">Projects</a>
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
