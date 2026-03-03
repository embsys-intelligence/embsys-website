'use client'

import { motion } from 'framer-motion'
import { Rocket, ArrowRight, Target, Users, Award } from 'lucide-react'
import Link from 'next/link'

export default function Company() {
  const values = [
    { icon: Rocket, title: 'Ease of Use', description: 'Guided setup enables fast deployment — even for non-technical users. No expertise needed.', color: 'from-blue-400 to-cyan-400' },
    { icon: Target, title: 'Scalability', description: 'Single-camera to multi-line systems. Consistent performance at every scale.', color: 'from-cyan-400 to-teal-400' },
    { icon: Users, title: 'AI Capabilities', description: 'Hybrid AI — on-device and cloud. Fast, accurate inspections using real training data.', color: 'from-teal-400 to-blue-400' },
    { icon: Award, title: 'Flexible Licensing', description: 'Keep costs low with licensing options designed for both pilots and full production.', color: 'from-blue-400 to-purple-400' },
  ]

  return (
    <>
      {/* ═══ HERO — compact ═══ */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-grid">
        <div className="blob-blue top-10 -right-40 opacity-40"></div>
        <div className="blob-purple top-1/2 left-1/4 opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
              <span className="text-dark-text">We Build </span>
              <span className="text-gradient-animate">Autonomous Agents</span>
            </h1>
            <p className="text-dark-muted text-lg max-w-2xl mx-auto mb-8">
              A team of AI engineers dedicated to pushing the boundaries of what machine vision can accomplish in high-stakes environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ VALUES ═══ */}
      <section className="py-16 md:py-20 bg-dots border-t border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-text mb-3 tracking-tight">Our Core Principles</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }} className="gradient-border rounded-2xl p-6 text-center group shine">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-base font-bold text-dark-text mb-2">{value.title}</h3>
                  <p className="text-dark-muted text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="gradient-border-animated rounded-3xl p-1">
            <div className="bg-[var(--color-surface)] rounded-[22px] p-10 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-card rounded-[22px]"></div>
              <div className="blob-blue -top-24 left-1/2 -translate-x-1/2 opacity-15 w-[250px] h-[250px]"></div>
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-extrabold text-dark-text mb-4 tracking-tight">Build With Us</h2>
                <p className="text-dark-muted mb-8 max-w-sm mx-auto text-sm">
                  We're hiring engineers who want to build real-world autonomous intelligence.
                </p>
                <Link href="/contact" className="btn-gradient px-8 py-3.5 text-base inline-flex items-center gap-2">
                  Get in Touch <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
