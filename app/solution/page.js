'use client'

import { motion, AnimatePresence } from 'framer-motion'
import {
  Camera, Server, Zap, Puzzle, ArrowRight, Factory, Gem,
  CheckCircle, Eye, Shield, Scan, Target, FileText, AlertTriangle, Scale,
  Layers, BarChart3, Sparkles,
  BrainCircuit,
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import ThreeNetworkBackground from '@/components/ThreeNetworkBackground'

export default function Solution() {
  const [activeTab, setActiveTab] = useState('industry')

  const industrySolutions = [
    { icon: Eye, title: 'Defect Detection' },
    { icon: Scan, title: 'Object Detection & Counting' },
    { icon: Layers, title: 'Measuring & Gauging' },
    { icon: Target, title: 'Locating, Guiding & Positioning' },
    { icon: BarChart3, title: 'Barcode Reading' },
    { icon: FileText, title: 'OCR & OCV' },
  ]

  const fintechSolutions = [
    { icon: Sparkles, title: 'Gold Purity Testing' },
    { icon: CheckCircle, title: 'Gold Hallmark Verification' },
    { icon: Shield, title: 'Gold Vault Monitoring' },
    { icon: AlertTriangle, title: 'Jewelry Risk Analysis' },
    { icon: Scale, title: 'Weight Scale Integration' },
  ]

  const activeSolutions = activeTab === 'industry' ? industrySolutions : fintechSolutions
  const accentColor = activeTab === 'industry' ? 'brand-primary' : 'brand-purple'
  const accentGradient = activeTab === 'industry' ? 'bg-gradient-brand' : 'bg-gradient-purple'
  const accentGlow = activeTab === 'industry' ? 'shadow-glow' : 'shadow-glow-purple'

  return (
    <>
      {/* ═══ HERO — compact ═══ */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-grid">
        <ThreeNetworkBackground />
        <div className="blob-blue top-10 -right-40 opacity-40 dark:mix-blend-screen"></div>
        <div className="blob-purple top-1/2 left-1/4 opacity-20 dark:mix-blend-screen"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-4">
              <span className="text-dark-text">Our </span>
              <span className="text-gradient-animate">Solutions</span>
            </h1>
            <p className="text-dark-muted text-lg max-w-xl mx-auto">
              A unified intelligence layer operating directly at the edge — no cloud dependency, no latency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ TABBED SOLUTIONS — clean list style ═══ */}
      <section className="py-16 md:py-20 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Tab switcher */}
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="flex justify-center mb-10">
            <div className="inline-flex bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-1.5 gap-1.5">
              <button
                onClick={() => setActiveTab('industry')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${activeTab === 'industry'
                  ? 'bg-gradient-brand text-white shadow-glow'
                  : 'text-dark-muted hover:text-dark-text'
                  }`}
              >
                <Factory size={16} /> Industry 4.0
              </button>
              <button
                onClick={() => setActiveTab('fintech')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${activeTab === 'fintech'
                  ? 'bg-gradient-purple text-white shadow-glow-purple'
                  : 'text-dark-muted hover:text-dark-text'
                  }`}
              >
                <Gem size={16} /> Gold Loan Inspection
              </button>
            </div>
          </motion.div>

          {/* Solution items — compact cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {activeSolutions.map((s, i) => {
                const Icon = s.icon
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="group flex items-center gap-4 p-5 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-transparent transition-all duration-300 relative overflow-hidden shine"
                    style={{ '--shine-color': activeTab === 'industry' ? 'rgba(59,130,246,0.08)' : 'rgba(139,92,246,0.08)' }}
                  >
                    {/* Top accent line */}
                    <div className={`absolute top-0 left-0 right-0 h-0.5 ${accentGradient} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                    <div className={`w-11 h-11 rounded-xl ${accentGradient} flex-shrink-0 flex items-center justify-center group-hover:scale-110 group-hover:${accentGlow} transition-all duration-300`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <span className={`text-dark-text font-semibold text-sm group-hover:text-${accentColor} transition-colors`}>{s.title}</span>
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>



      {/* ═══ GOLD LOAN SHOWCASE (Gold Loan tab only) ═══ */}
      {activeTab === 'fintech' && (
        <section className="py-16 md:py-20 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* ── 2-column: image left, content right ── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-brand-purple/15 blur-3xl rounded-2xl scale-90"></div>
                <motion.img
                  src="/gold_loan_hero.png"
                  alt="AI Gold Loan Inspection System"
                  className="relative w-full rounded-2xl shadow-2xl ring-1 ring-brand-purple/20"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                />
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-purple text-white text-xs font-bold px-4 py-2 rounded-xl shadow-glow-purple">
                  AI-Powered Inspection
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/25 text-brand-purple text-xs font-bold uppercase tracking-widest mb-3">
                    <Gem size={11} /> Gold Loan Inspection
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-dark-text leading-tight mb-3">
                    Instant AI Verification for Every Gold Loan
                  </h2>
                  <p className="text-dark-muted text-sm leading-relaxed">
                    Embsys Visual Intelligence automates the entire gold assessment workflow — from purity testing to hallmark verification and vault monitoring — delivering results in seconds with zero manual errors.
                  </p>
                </div>

                {/* Feature list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { icon: Sparkles, title: 'Gold Purity Testing', desc: 'AI detects 18K/22K/24K grading from surface analysis' },
                    { icon: CheckCircle, title: 'Hallmark Verification', desc: 'Instant BIS hallmark authenticity checks' },
                    { icon: Shield, title: 'Vault Monitoring', desc: '24/7 AI surveillance for gold storage security' },
                    { icon: AlertTriangle, title: 'Risk Analysis', desc: 'Flag suspicious or counterfeit jewelry instantly' },
                  ].map((f, i) => {
                    const Icon = f.icon
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 + i * 0.07 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 p-4 rounded-xl bg-[var(--color-surface)] border border-brand-purple/15 hover:border-brand-purple/40 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-purple flex-shrink-0 flex items-center justify-center shadow-glow-purple">
                          <Icon size={15} className="text-white" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-dark-text">{f.title}</p>
                          <p className="text-[11px] text-dark-muted leading-snug mt-0.5">{f.desc}</p>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Stats row */}
                <div className="flex gap-6 pt-2">
                  {[
                    { value: '99.5%', label: 'Purity Accuracy' },
                    { value: '<3s', label: 'Per Assessment' },
                    { value: '0', label: 'Experts Needed' },
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <p className="text-2xl font-extrabold text-gradient-animate">{stat.value}</p>
                      <p className="text-[11px] text-dark-muted font-medium uppercase tracking-wider">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <Link href="/contact" className="inline-flex items-center gap-2 btn-gradient px-6 py-3 text-sm">
                  Request Gold Loan Demo <ArrowRight size={15} />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* ═══ 3-STEP SETUP (Industry 4.0 only) ═══ */}
      {activeTab === 'industry' && (
        <section className="py-16 md:py-20 relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-extrabold text-dark-text mb-2 tracking-tight">3-Step Setup</h2>
              <p className="text-dark-muted text-sm max-w-md mx-auto">From unboxing to live inspection in under an hour.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              <div className="hidden md:block absolute top-[160px] left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-0.5 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-purple opacity-30"></div>
              {[
                { step: '01', img: '/unbox.png', title: 'Unbox', desc: 'Open the box and take out the Camera and Controller. Ready in minutes.', border: 'border-brand-primary/25' },
                { step: '02', img: '/Mount.png', title: 'Mount', desc: 'Mount the camera in place as a stand-alone inspection station. No rewiring.', border: 'border-brand-accent/25' },
                { step: '03', img: '/ready.png', title: 'Go Live', desc: 'Connect, train AI with 20 good samples of your product, and deploy.', border: 'border-brand-purple/25' },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className={`relative rounded-2xl border ${s.border} bg-[var(--color-surface)] overflow-hidden flex flex-col text-center`}
                >
                  <span className="absolute top-3 left-3 z-10 text-xs font-black uppercase tracking-widest text-white/80 bg-black/40 px-2.5 py-0.5 rounded-full backdrop-blur-sm">{s.step}</span>
                  <div className="w-full bg-[var(--color-bg)] flex items-center justify-center p-6 pt-10" style={{ minHeight: '200px' }}>
                    <img src={s.img} alt={s.title} className="w-full h-auto max-h-44 object-contain drop-shadow-lg" loading="lazy" />
                  </div>
                  <div className="p-5 flex flex-col gap-1.5 border-t border-[var(--color-border)]">
                    <h3 className="text-base font-bold text-dark-text">{s.title}</h3>
                    <p className="text-dark-muted text-xs leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ HARDWARE + SOFTWARE — compact 2×2 grid ═══ */}
      <section className="py-16 md:py-20 relative bg-dots">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-text mb-3 tracking-tight">Hardware + Software Stack</h2>
            <p className="text-dark-muted text-base max-w-lg mx-auto">Edge hardware paired with an agentic AI software layer.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Hardware items */}
            {[
              { icon: Camera, title: 'AI Vision Camera', spec: '12MP · 120fps · IP67', gradient: 'bg-gradient-brand', glow: 'shadow-glow' },
              { icon: Server, title: 'Edge Controller', spec: 'NVIDIA Jetson · 4× TOPS', gradient: 'bg-gradient-brand', glow: 'shadow-glow' },
              { icon: Zap, title: 'Inspection Agent Engine', spec: 'Pre-trained · Fine-tunable', gradient: 'bg-gradient-purple', glow: 'shadow-glow-purple' },
              { icon: Puzzle, title: 'Orchestration Platform', spec: 'Multi-agent · Event-driven', gradient: 'bg-gradient-purple', glow: 'shadow-glow-purple' },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="glass rounded-2xl p-5 flex items-center gap-4 group shine"
                >
                  <div className={`w-12 h-12 rounded-xl ${item.gradient} flex-shrink-0 flex items-center justify-center ${item.glow} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-dark-text">{item.title}</h4>
                    <span className="text-xs text-dark-muted font-mono">{item.spec}</span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>



    </>
  )
}
