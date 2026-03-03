'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Zap,
  Target,
  Scale,
  Rocket,
  DollarSign,
  Users,
  Clock,
  BrainCircuit,
  Layers,
  Puzzle,
} from 'lucide-react'
import ThreeBackground from '@/components/ThreeBackground'

export default function Home() {
  return (
    <>
      {/* ══════ HERO ══════ */}
      <section className="min-h-[90vh] flex items-center relative overflow-hidden bg-grid">
        <ThreeBackground />

        <div className="blob-blue top-20 -left-48 opacity-50 dark:mix-blend-screen"></div>
        <div className="blob-cyan bottom-20 -right-48 opacity-40 dark:mix-blend-screen"></div>
        <div className="blob-purple top-1/3 right-1/4 opacity-30 dark:mix-blend-screen"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* ── Left: Text content ── */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
              className="space-y-7"
            >
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-primary/30 bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest"
              >
                <Zap size={12} /> Agentic Process Automation
              </motion.span>

              <h1 className="text-5xl md:text-6xl lg:text-[3.75rem] xl:text-7xl font-extrabold leading-[1.1] tracking-tight">
                <span className="text-dark-text">Agentic AI Powered</span>
                <br />
                <span className="text-gradient-animate">Visual Intelligence</span>
              </h1>

              <p className="text-lg text-dark-muted leading-relaxed max-w-xl">
                AI agents that complete visual inspection tasks without human intervention — for Industry 4.0 and Gold Loan Inspection.
              </p>

              {/* Metric Pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-2"
              >
                {[
                  { label: 'Real-time Decisions', color: 'text-brand-accent', bg: 'bg-brand-accent/10 border-brand-accent/20' },
                  { label: 'Fast Go-live', color: 'text-brand-purple', bg: 'bg-brand-purple/10 border-brand-purple/20' },
                  { label: 'Cost Efficient', color: 'text-green-400', bg: 'bg-green-400/10 border-green-400/20' },
                ].map((p, i) => (
                  <span key={i} className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-xs font-bold uppercase tracking-wider ${p.bg} ${p.color}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-ping-slow"></span>
                    {p.label}
                  </span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 pt-2"
              >
                <Link href="/contact" className="btn-gradient px-8 py-4 text-base inline-flex items-center justify-center gap-2">
                  Schedule a Demo <ArrowRight size={18} />
                </Link>
                <Link href="/solution" className="btn-outline px-8 py-4 text-base inline-flex items-center justify-center gap-2">
                  Explore Solutions <ArrowRight size={18} />
                </Link>
              </motion.div>
            </motion.div>

            {/* ── Right: Hero Image ── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="hidden lg:flex items-center justify-center relative"
            >
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-brand-primary/10 blur-3xl rounded-full scale-75"></div>
              <motion.img
                src="/embsys_hero.svg"
                alt="Embsys Visual Intelligence Platform"
                className="relative w-full max-w-lg drop-shadow-2xl"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>

          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-bg)] to-transparent"></div>
      </section>


      {/* ══════ SIMPLIFY WITH EMBSYS ══════ */}
      <section className="py-20 md:py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-text mb-3 tracking-tight">Simplify with Embsys Visual Intelligence</h2>
            <p className="text-dark-muted text-base max-w-xl mx-auto">Everything you need to build, deploy, and scale visual inspection — out of the box.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Zap, title: 'Deploy Faster', desc: 'Easy-to-setup hardware, ready-made tools and hardware-agnostic software.', gradient: 'bg-gradient-brand', glow: 'shadow-glow', border: 'border-brand-primary/20 hover:border-brand-primary/50' },
              { icon: BrainCircuit, title: 'Cut Training Time', desc: 'Intuitive software backed by online training and support platforms for on-demand guidance.', gradient: 'bg-gradient-brand', glow: 'shadow-glow', border: 'border-brand-primary/20 hover:border-brand-primary/50' },
              { icon: Target, title: 'Speed Up Decisions', desc: 'Instant feedback on image analyses and processing operations.', gradient: 'bg-gradient-brand', glow: 'shadow-glow', border: 'border-brand-primary/20 hover:border-brand-primary/50' },
              { icon: Layers, title: 'Solve Apps Quicker', desc: 'Integrated tools and intuitive environment — all designed to shorten problem solving time.', gradient: 'bg-gradient-purple', glow: 'shadow-glow-purple', border: 'border-brand-purple/20 hover:border-brand-purple/50' },
              { icon: Puzzle, title: 'Customize as Needed', desc: 'Leading network of OEMs, machine builders, distributors and system integrators.', gradient: 'bg-gradient-purple', glow: 'shadow-glow-purple', border: 'border-brand-purple/20 hover:border-brand-purple/50' },
              { icon: Scale, title: 'Flexible Licensing', desc: 'Keep costs low with flexible licensing options tailored to your scale.', gradient: 'bg-gradient-purple', glow: 'shadow-glow-purple', border: 'border-brand-purple/20 hover:border-brand-purple/50' },
            ].map((f, i) => {
              const Icon = f.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className={`group flex items-start gap-4 p-6 rounded-2xl bg-[var(--color-surface)] border ${f.border} transition-all duration-300`}
                >
                  <div className={`w-11 h-11 rounded-xl ${f.gradient} flex-shrink-0 flex items-center justify-center ${f.glow} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-dark-text mb-1">{f.title}</h4>
                    <p className="text-dark-muted text-xs leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════ KEY METRICS ══════ */}
      <section className="py-20 md:py-24 relative bg-dots">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-text mb-3 tracking-tight">Why Embsys?</h2>
            <p className="text-dark-muted text-base max-w-md mx-auto">Real numbers from real deployments.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Rocket,
                metric: '20×',
                title: 'Faster Deployment',
                desc: 'Extremely quick setup. System ready to deploy on day one.',
                gradient: 'bg-gradient-brand',
                glow: 'shadow-glow',
                border: 'border-brand-primary/20 hover:border-brand-primary/50',
              },
              {
                icon: Users,
                metric: '0',
                title: 'Experts Needed',
                desc: 'No machine vision expertise required. Low setup data needed.',
                gradient: 'bg-gradient-brand',
                glow: 'shadow-glow',
                border: 'border-brand-primary/20 hover:border-brand-primary/50',
              },
              {
                icon: DollarSign,
                metric: '10×',
                title: 'Lower TCO',
                desc: 'Minimal resources to deploy. Low Total Cost of Ownership.',
                gradient: 'bg-gradient-purple',
                glow: 'shadow-glow-purple',
                border: 'border-brand-purple/20 hover:border-brand-purple/50',
              },
              {
                icon: Clock,
                metric: '<1hr',
                title: 'Go/No-Go Decision',
                desc: 'Quick use case verification. Risk-free pilot, reusable for future needs.',
                gradient: 'bg-gradient-purple',
                glow: 'shadow-glow-purple',
                border: 'border-brand-purple/20 hover:border-brand-purple/50',
              },
            ].map((card, i) => {
              const Icon = card.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`group relative rounded-2xl border ${card.border} bg-[var(--color-surface)] p-7 flex flex-col gap-3 transition-all duration-400 hover:shadow-lg`}
                >
                  <div className={`w-12 h-12 rounded-xl ${card.gradient} flex items-center justify-center ${card.glow} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <div className="text-4xl font-black text-dark-text tracking-tight">{card.metric}</div>
                  <div>
                    <h3 className="text-base font-bold text-dark-text mb-1">{card.title}</h3>
                    <p className="text-dark-muted text-sm leading-relaxed">{card.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} viewport={{ once: true }} className="text-center mt-12">
            <Link href="/solution" className="btn-outline px-8 py-3 inline-flex items-center gap-2">
              See Our Solutions <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>


    </>
  )
}
