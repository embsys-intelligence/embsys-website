'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Zap,
  Factory,
  Gem,
  Eye,
  Scan,
  Layers,
  Target,
  BarChart3,
  FileText,
  Sparkles,
  CheckCircle,
  Shield,
  AlertTriangle,
  Scale,
} from 'lucide-react'
import ThreeBackground from '@/components/ThreeBackground'

export default function Home() {
  const industryItems = [
    { icon: Eye, label: 'Defect Detection' },
    { icon: Scan, label: 'Object Detection & Counting' },
    { icon: Layers, label: 'Measuring & Gauging' },
    { icon: Target, label: 'Locating, Guiding & Positioning' },
    { icon: BarChart3, label: 'Barcode Reading' },
    { icon: FileText, label: 'OCR & OCV' },
  ]

  const goldLoanItems = [
    { icon: Sparkles, label: 'Gold Purity Testing' },
    { icon: CheckCircle, label: 'Gold Hallmark Verification' },
    { icon: Shield, label: 'Gold Vault Monitoring' },
    { icon: AlertTriangle, label: 'Jewelry Risk Analysis' },
    { icon: Scale, label: 'Weight Scale Integration' },
  ]

  return (
    <>
      {/* ══════ HERO ══════ */}
      <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden bg-grid">
        <ThreeBackground />

        <div className="blob-blue top-20 -left-48 opacity-50 text-white dark:mix-blend-screen"></div>
        <div className="blob-cyan bottom-20 -right-48 opacity-40 dark:mix-blend-screen"></div>
        <div className="blob-purple top-1/3 right-1/4 opacity-30 dark:mix-blend-screen"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
              <span className="text-dark-text">AI-Powered</span>
              <br />
              <span className="text-gradient-animate">Visual Inspection</span>
            </h1>

            <p className="text-lg md:text-xl text-dark-muted leading-relaxed max-w-2xl mx-auto">
              We deploy intelligent agents to the edge — making complex visual decisions instantly, reliably, and without human intervention.
            </p>

            {/* Metric Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {[
                { label: 'High Accuracy', color: 'text-brand-primary', bg: 'bg-brand-primary/10 border-brand-primary/20' },
                { label: 'Real-time Decisions', color: 'text-brand-accent', bg: 'bg-brand-accent/10 border-brand-accent/20' },
                { label: 'Fast Go-live', color: 'text-brand-purple', bg: 'bg-brand-purple/10 border-brand-purple/20' },
                { label: 'Cost Efficient', color: 'text-green-400', bg: 'bg-green-400/10 border-green-400/20' },
              ].map((p, i) => (
                <span key={i} className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border text-xs font-bold uppercase tracking-wider ${p.bg} ${p.color}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-ping-slow"></span>
                  {p.label}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <Link href="/contact" className="btn-gradient px-8 py-4 text-base inline-flex items-center justify-center gap-2">
                Schedule a Demo <ArrowRight size={18} />
              </Link>
              <Link href="/solution" className="btn-outline px-8 py-4 text-base inline-flex items-center justify-center gap-2">
                Explore Solutions <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-bg)] to-transparent"></div>
      </section>

      {/* ══════ TWO VERTICALS SHOWCASE ══════ */}
      <section className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-dark-text mb-4 tracking-tight">What We Do</h2>
            <p className="text-dark-muted text-lg max-w-xl mx-auto">
              Two verticals. One AI platform. Deployed at the edge.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* ── Industry 4.0 Panel ── */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Link href="/solution" className="block group h-full">
                <div className="relative rounded-3xl border border-brand-primary/20 bg-[var(--color-surface)] p-8 md:p-10 h-full overflow-hidden transition-all duration-500 hover:border-brand-primary/50 hover:shadow-glow">
                  {/* Scan-line animation */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                    <div className="scan-line-industry"></div>
                  </div>

                  {/* Header */}
                  <div className="flex items-center gap-4 mb-8 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-brand flex items-center justify-center shadow-glow icon-pulse">
                      <Factory size={28} className="text-white" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">Vertical 01</span>
                      <h3 className="text-2xl md:text-3xl font-extrabold text-dark-text tracking-tight">Industry 4.0</h3>
                    </div>
                  </div>

                  {/* Solution List */}
                  <div className="space-y-4 relative z-10">
                    {industryItems.map((item, i) => {
                      const Icon = item.icon
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: i * 0.08 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-4 p-3 rounded-xl bg-[var(--color-bg)] border border-transparent hover:border-brand-primary/20 transition-all group/item"
                        >
                          <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover/item:bg-brand-primary group-hover/item:text-white transition-all duration-300">
                            <Icon size={18} />
                          </div>
                          <span className="text-dark-text font-semibold text-sm">{item.label}</span>
                        </motion.div>
                      )
                    })}
                  </div>

                  {/* Footer CTA */}
                  <div className="mt-8 flex items-center gap-2 text-brand-primary font-bold text-sm relative z-10 group-hover:gap-3 transition-all">
                    View Solutions <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* ── Gold Loan Inspection Panel ── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Link href="/solution" className="block group h-full">
                <div className="relative rounded-3xl border border-brand-purple/20 bg-[var(--color-surface)] p-8 md:p-10 h-full overflow-hidden transition-all duration-500 hover:border-brand-purple/50 hover:shadow-glow-purple">
                  {/* Gold shimmer animation */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                    <div className="gold-shimmer"></div>
                  </div>

                  {/* Header */}
                  <div className="flex items-center gap-4 mb-8 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-purple flex items-center justify-center shadow-glow-purple icon-pulse">
                      <Gem size={28} className="text-white" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-brand-purple">Vertical 02</span>
                      <h3 className="text-2xl md:text-3xl font-extrabold text-dark-text tracking-tight">Gold Loan Inspection</h3>
                    </div>
                  </div>

                  {/* Solution List */}
                  <div className="space-y-4 relative z-10">
                    {goldLoanItems.map((item, i) => {
                      const Icon = item.icon
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: i * 0.08 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-4 p-3 rounded-xl bg-[var(--color-bg)] border border-transparent hover:border-brand-purple/20 transition-all group/item"
                        >
                          <div className="w-10 h-10 rounded-lg bg-brand-purple/10 flex items-center justify-center text-brand-purple group-hover/item:bg-brand-purple group-hover/item:text-white transition-all duration-300">
                            <Icon size={18} />
                          </div>
                          <span className="text-dark-text font-semibold text-sm">{item.label}</span>
                        </motion.div>
                      )
                    })}
                  </div>

                  {/* Footer CTA */}
                  <div className="mt-8 flex items-center gap-2 text-brand-purple font-bold text-sm relative z-10 group-hover:gap-3 transition-all">
                    View Solutions <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>


    </>
  )
}
