'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, ArrowRight, Send, MessageCircle } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', vertical: '', message: '' })
  const [focused, setFocused] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const inputClass = (field) =>
    `w-full px-4 py-3.5 rounded-xl bg-dark-surface border text-dark-text placeholder-dark-muted/40 focus:outline-none transition-all text-sm ${focused === field
      ? 'border-brand-primary ring-2 ring-brand-primary/20 shadow-[0_0_20px_rgba(59,130,246,0.1)]'
      : 'border-dark-border hover:border-dark-muted/30'
    }`

  return (
    <>
      {/* Hero */}
      <section className="min-h-[50vh] flex items-center justify-center relative overflow-hidden bg-grid">
        <div className="blob-blue top-10 -left-32 opacity-50"></div>
        <div className="blob-cyan bottom-10 -right-32 opacity-50"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-semibold uppercase tracking-widest">
              <MessageCircle size={14} /> Get in Touch
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight">
              <span className="text-dark-text">Deploy Agents</span>
              <span className="block text-gradient-animate">For Your Use Case</span>
            </h1>
            <p className="text-xl text-dark-muted max-w-2xl mx-auto">
              Whether you need autonomous inspection on your factory floor or AI-driven gold loan audits — let's talk.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark-bg to-transparent"></div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-extrabold text-dark-text mb-8 tracking-tight">Tell us about your project</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-dark-muted text-xs font-semibold uppercase tracking-wider mb-2">Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} onFocus={() => setFocused('name')} onBlur={() => setFocused(null)} required className={inputClass('name')} placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-dark-muted text-xs font-semibold uppercase tracking-wider mb-2">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} onFocus={() => setFocused('email')} onBlur={() => setFocused(null)} required className={inputClass('email')} placeholder="you@company.com" />
                </div>
                <div>
                  <label className="block text-dark-muted text-xs font-semibold uppercase tracking-wider mb-2">Company</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} onFocus={() => setFocused('company')} onBlur={() => setFocused(null)} className={inputClass('company')} placeholder="Your company name" />
                </div>
                <div>
                  <label className="block text-dark-muted text-xs font-semibold uppercase tracking-wider mb-2">Vertical</label>
                  <select name="vertical" value={formData.vertical} onChange={handleChange} onFocus={() => setFocused('vertical')} onBlur={() => setFocused(null)} className={inputClass('vertical')}>
                    <option value="">Select your vertical</option>
                    <option value="industry">Industry — Manufacturing & QC</option>
                    <option value="fintech">Fintech — Jewelry & Gold Loans</option>
                    <option value="both">Both Verticals</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-dark-muted text-xs font-semibold uppercase tracking-wider mb-2">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} onFocus={() => setFocused('message')} onBlur={() => setFocused(null)} required rows={5} className={`${inputClass('message')} resize-none`} placeholder="Describe your inspection use case..." />
                </div>
                <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="btn-gradient px-8 py-4 text-base inline-flex items-center gap-2 w-full justify-center">
                  Send Message <Send size={18} />
                </motion.button>
              </form>
            </motion.div>

            {/* Info Cards */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="space-y-5">
              <h2 className="text-2xl font-extrabold text-dark-text mb-8 tracking-tight">Get in touch</h2>

              {[
                { icon: Mail, title: 'Email', content: <a href="mailto:kk@embsysai.in" className="text-brand-primary hover:text-brand-accent transition-colors text-sm font-medium">kk@embsysai.in</a> },
                { icon: Phone, title: 'Phone', content: <p className="text-dark-muted text-sm">+91 9944865029</p> },
                { icon: MapPin, title: 'Office', content: <p className="text-dark-muted text-sm leading-relaxed">No 2/156, 2nd Floor, Arcot Road,<br />Virugambakkam, Chennai - 600092,<br />Tamil Nadu, India</p> },
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <motion.div key={idx} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: idx * 0.1 }} viewport={{ once: true }} className="gradient-border rounded-2xl p-6 shine">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={20} className="text-brand-primary" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-dark-text mb-1">{item.title}</h3>
                        {item.content}
                      </div>
                    </div>
                  </motion.div>
                )
              })}

              {/* Schedule CTA */}
              <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 }} viewport={{ once: true }} className="gradient-border-animated rounded-2xl p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-card rounded-2xl"></div>
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-dark-text mb-2">Prefer a live demo?</h3>
                  <p className="text-dark-muted text-sm mb-5">See autonomous agents inspect in real-time — choose your vertical</p>
                  <button className="btn-outline px-6 py-3 text-sm inline-flex items-center gap-2">
                    Schedule Demo <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
