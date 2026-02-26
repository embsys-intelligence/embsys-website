'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-bg border-t border-dark-border mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left Section - Logo & Description */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <img
                  src="/embsys_logo.png"
                  alt="Embsys Logo"
                  className="w-full h-full object-contain rounded"
                />
              </div>
              <span className="font-bold text-dark-text text-lg">Embsys</span>
            </div>
            <p className="text-dark-text text-sm leading-relaxed">
              Advanced Agentic AI powered visual inspection systems for industrial automation and intelligent quality control.
            </p>
          </div>

          {/* Center Section - Quick Links */}
          <div>
            <h4 className="text-dark-text font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/product', label: 'Product' },
                { href: '/solutions', label: 'Solutions' },
                { href: '/workflow', label: 'Workflow' },
                { href: '/company', label: 'Company' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-dark-text hover:text-brand-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section - Contact */}
          <div>
            <h4 className="text-dark-text font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="tel:+919944865029"
                className="flex items-center gap-3 text-dark-text hover:text-brand-accent transition-colors text-sm"
              >
                <Phone size={16} />
                +91 9944865029
              </a>
              <a
                href="mailto:kk@embsysai.com"
                className="flex items-center gap-3 text-dark-text hover:text-brand-accent transition-colors text-sm"
              >
                <Mail size={16} />
                kk@embsysai.com
              </a>
              <div className="flex items-start gap-3 text-dark-text text-sm">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <p>
                  Embsys Intelligence Pvt Ltd<br />
                  19A, Dr. VSI Estate Phase II<br />
                  Thiruvanmiyur, Chennai<br />
                  Tamil Nadu – 600041
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-dark-border pt-8 text-center">
          <p className="text-dark-text text-sm">
            © {currentYear} Embsys Intelligence Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
