'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight, Sun, Moon } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useTheme } from './ThemeProvider'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/solution', label: 'Solution' },
    { href: '/company', label: 'Company' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
      ? 'bg-[var(--color-bg)]/90 backdrop-blur-xl border-b border-[var(--color-border)]/50 shadow-[0_4px_30px_rgba(0,0,0,0.1)]'
      : 'bg-transparent'
      }`}>
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="relative flex justify-between items-center h-16 md:h-20">
          {/* Logo - Left aligned */}
          <div className="flex-1 flex justify-start">
            <Link href="/" className="flex items-center group">
              <Image
                src="/embsys_logo.png"
                alt="Embsys Logo"
                width={160}
                height={50}
                className="object-contain group-hover:drop-shadow-[0_0_16px_rgba(59,130,246,0.5)] transition-all duration-300"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation - Centered absolutely or relatively */}
          <div className="hidden md:flex flex-1 justify-center items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${pathname === link.href
                  ? 'text-dark-text bg-[var(--color-nav-hover)]'
                  : 'text-dark-muted hover:text-dark-text hover:bg-[var(--color-nav-hover)]'
                  }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-brand rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Theme Toggle + CTA - Right aligned */}
          <div className="hidden md:flex flex-1 justify-end items-center gap-3">
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle theme"
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link href="/contact" className="btn-gradient px-6 py-2.5 text-sm inline-flex items-center gap-2">
              Request Demo <ArrowRight size={14} />
            </Link>
          </div>

          {/* Mobile: Theme Toggle + Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark-muted hover:text-brand-primary transition-colors p-2 rounded-lg hover:bg-[var(--color-nav-hover)]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-slide-down border-t border-[var(--color-border)]/30 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-3 px-4 rounded-lg text-sm transition-all ${pathname === link.href
                  ? 'text-dark-text bg-[var(--color-nav-hover)] font-medium'
                  : 'text-dark-muted hover:text-dark-text hover:bg-[var(--color-nav-hover)]'
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block mt-4 btn-gradient px-6 py-3 text-sm text-center"
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
