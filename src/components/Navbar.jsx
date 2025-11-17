import { useState } from 'react'
import { Menu, X, Hammer, Phone, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#projects', label: 'Projects' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="p-2 rounded-md bg-gradient-to-br from-orange-500 to-amber-600 text-white shadow">
              <Hammer className="h-5 w-5" />
            </div>
            <span className="font-semibold tracking-tight text-gray-900 group-hover:text-gray-800">BuildPlus Construction</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-md shadow hover:bg-orange-600 transition-colors">
              <Phone className="h-4 w-4" />
              Get a Quote
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md hover:bg-gray-100">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block text-gray-700 hover:text-gray-900 py-2" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-md shadow">
              <Mail className="h-4 w-4" />
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
