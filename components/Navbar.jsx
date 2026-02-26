'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/product', label: 'Product' },
    { href: '/solutions', label: 'Solutions' },
    { href: '/workflow', label: 'Workflow' },
    { href: '/company', label: 'Company' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-dark-border bg-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg group-hover:shadow-glow transition-all flex items-center justify-center">
              <img
                src="/embsys_logo.png"
                alt="Embsys Logo"
                className="w-full h-full object-contain rounded"
              />
            </div>
            <span className="hidden sm:inline font-bold text-dark-text text-lg">Embsys</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-dark-text hover:text-brand-primary transition-colors text-sm font-medium relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-brand group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link href="/contact" className="btn-gradient text-dark-text px-6 py-2 rounded-lg font-semibold text-sm">
              Request Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-dark-text hover:text-brand-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-slide-up bg-white">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-dark-text hover:text-brand-primary transition-colors text-sm"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block mt-4 btn-gradient text-dark-text px-6 py-2 rounded-lg font-semibold text-sm text-center"
              onClick={() => setIsOpen(false)}
            >
              Request Demo
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
