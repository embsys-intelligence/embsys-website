'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send, MessageCircle } from 'lucide-react'
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
      {/* ═══ HERO — compact ═══ */}
      <section className="pt-32 pb-12 relative overflow-hidden bg-grid">
        <div className="blob-blue top-10 -left-32 opacity-40"></div>
        <div className="blob-cyan bottom-10 -right-32 opacity-40"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest mb-4">
              <MessageCircle size={14} /> Contact Us
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-4">
              <span className="text-dark-text">Deploy </span>
              <span className="text-gradient-animate">Agents</span>
            </h1>
            <p className="text-lg text-dark-muted max-w-xl mx-auto">
              Ready to see our agents in action? Let's discuss your inspection workflow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ CONTACT FORM & INFO ═══ */}
      <section className="py-12 md:py-20 mb-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-dark-muted text-xs font-semibold uppercase tracking-wider mb-2">Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} onFocus={() => setFocused('name')} onBlur={() => setFocused(null)} required className={inputClass('name')} placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-dark-muted text-xs font-semibold uppercase tracking-wider mb-2">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} onFocus={() => setFocused('email')} onBlur={() => setFocused(null)} required className={inputClass('email')} placeholder="you@company.com" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-dark-muted text-xs font-semibold uppercase tracking-wider mb-2">Company</label>
                    <input type="text" name="company" value={formData.company} onChange={handleChange} onFocus={() => setFocused('company')} onBlur={() => setFocused(null)} className={inputClass('company')} placeholder="Company" />
                  </div>
                  <div>
                    <label className="block text-dark-muted text-xs font-semibold uppercase tracking-wider mb-2">Vertical</label>
                    <select name="vertical" value={formData.vertical} onChange={handleChange} onFocus={() => setFocused('vertical')} onBlur={() => setFocused(null)} className={inputClass('vertical')}>
                      <option value="">Select</option>
                      <option value="industry">Industry 4.0</option>
                      <option value="fintech">Gold Loan</option>
                      <option value="both">Both</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-dark-muted text-xs font-semibold uppercase tracking-wider mb-2">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} onFocus={() => setFocused('message')} onBlur={() => setFocused(null)} required rows={4} className={`${inputClass('message')} resize-none`} placeholder="Describe your inspection use case..." />
                </div>
                <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="btn-gradient px-8 py-3.5 text-base font-bold inline-flex items-center gap-2 w-full justify-center">
                  Send Message <Send size={18} />
                </motion.button>
              </form>
            </motion.div>

            {/* Info Cards */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="space-y-4 mt-2">
              {[
                { icon: Mail, title: 'Email', content: <a href="mailto:kk@embsysai.in" className="text-brand-primary hover:text-brand-accent transition-colors text-sm font-medium">kk@embsysai.in</a> },
                { icon: Phone, title: 'Phone', content: <p className="text-dark-muted text-sm">+91 9944865029</p> },
                { icon: MapPin, title: 'Office', content: <p className="text-dark-muted text-sm leading-relaxed">No 2/156, 2nd Floor, Arcot Road,<br />Virugambakkam, Chennai - 600092</p> },
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: idx * 0.1 }} viewport={{ once: true }} className="gradient-border rounded-xl p-5 shine">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-brand-primary" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-dark-text">{item.title}</h3>
                        {item.content}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
