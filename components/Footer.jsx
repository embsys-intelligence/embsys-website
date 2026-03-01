'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-dark-border/20 bg-dark-bg">
      {/* Top gradient line */}
      <div className="section-divider"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-5 group">
              <Image
                src="/embsys_logo.png"
                alt="Embsys Logo"
                width={140}
                height={45}
                className="object-contain group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.4)] transition-all"
              />
            </Link>
            <p className="text-dark-muted text-sm leading-relaxed mb-6">
              We build autonomous AI agents for visual inspection — serving both industrial manufacturing and jewelry fintech.
            </p>
            {/* Email CTA */}
            <a href="mailto:kk@embsysai.in" className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-accent text-sm font-medium transition-colors group">
              kk@embsysai.in <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-dark-text font-bold mb-5 text-xs uppercase tracking-[0.2em]">Navigation</h4>
            <div className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/solution', label: 'Solution' },
                { href: '/company', label: 'Company' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-dark-muted hover:text-brand-primary hover:translate-x-1 transition-all text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-dark-text font-bold mb-5 text-xs uppercase tracking-[0.2em]">Solutions</h4>
            <div className="space-y-3">
              <span className="block text-brand-primary/80 text-xs font-semibold uppercase tracking-wider">Industry</span>
              {['Manufacturing QC', 'Defect Detection', 'Robotic Guidance'].map((item) => (
                <span key={item} className="block text-dark-muted text-sm">{item}</span>
              ))}
              <span className="block text-brand-purple/80 text-xs font-semibold uppercase tracking-wider mt-4">Fintech</span>
              {['Jewelry Inspection', 'Gold Loan Audit', 'Vault Monitoring'].map((item) => (
                <span key={item} className="block text-dark-muted text-sm">{item}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-dark-text font-bold mb-5 text-xs uppercase tracking-[0.2em]">Contact</h4>
            <div className="space-y-4">
              <a href="mailto:kk@embsysai.in" className="flex items-center gap-3 text-dark-muted hover:text-brand-primary transition-colors text-sm group">
                <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-primary/20 transition-colors">
                  <Mail size={14} className="text-brand-primary" />
                </div>
                kk@embsysai.in
              </a>
              <div className="flex items-start gap-3 text-dark-muted text-sm">
                <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} className="text-brand-primary" />
                </div>
                <span>No 2/156, 2nd Floor, Arcot Road,<br />Virugambakkam, Chennai - 600092</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="section-divider mt-12 mb-6"></div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-dark-muted text-xs">
            © {new Date().getFullYear()} Embsys Intelligence. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/contact" className="text-dark-muted hover:text-brand-primary text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-dark-muted hover:text-brand-primary text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
