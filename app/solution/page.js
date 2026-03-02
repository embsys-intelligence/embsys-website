'use client'

import { motion, AnimatePresence } from 'framer-motion'
import {
  Camera, Server, Zap, Puzzle, ArrowRight, Factory, Gem,
  CheckCircle, Cpu, Landmark, Eye, Shield, Scan,
  Layers, Clock, BarChart3, GitMerge, Sparkles, ChevronRight,
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
}

export default function Solution() {
  const [activeTab, setActiveTab] = useState('industry')

  const industrySolutions = [
    {
      icon: Factory,
      title: 'Manufacturing QC',
      description: 'Autonomous agents inspect products on assembly lines, detect micro-defects and trigger reject mechanisms strictly in real-time.',
      tags: ['Defect Detection', 'Real-time', 'Assembly Line'],
      stat: 'Real-time Fraud Defense',
    },
    {
      icon: Eye,
      title: 'Presence Verification',
      description: 'Agents verify component presence, orientation and placement — without human supervision and zero missed parts.',
      tags: ['6-Sigma Quality', 'Zero Touch', 'Vision AI'],
      stat: 'Highly Reliable Validation',
    },
    {
      icon: Cpu,
      title: 'Robotic Guidance',
      description: 'Vision agents guide robotic arms for automated pick-and-place, welding and precision assembly at scale.',
      tags: ['Edge AI', 'Robotics', 'Automation'],
      stat: 'Cycle time reduction',
    },
  ]

  const fintechSolutions = [
    {
      icon: Gem,
      title: 'Jewelry Inspection',
      description: 'Agents authenticate gold purity, verify hallmarks, grade stone quality and generate tamper-proof digital certificates.',
      tags: ['Hallmark Verify', 'Stone Grading', 'Digital Cert'],
      stat: 'Precise Valuation',
    },
    {
      icon: Landmark,
      title: 'Gold Loan Collateral Audit',
      description: 'Autonomous audit agents inspect pledged jewelry, verify karatage, weight and produce compliance reports for NBFCs.',
      tags: ['NBFC Compliance', 'Audit Trail', 'Karat Verify'],
      stat: '5 min vs 2 hr manual',
    },
    {
      icon: Shield,
      title: 'Vault Monitoring & Tracking',
      description: 'Agents continuously monitor vault areas, tracking inventory movement and identifying unauthorized access instantly.',
      tags: ['24/7 Security', 'Inventory Tracking', 'Video AI'],
      stat: 'Continuous Oversight',
    },
  ]

  const hardware = [
    {
      icon: Camera,
      title: 'AI Vision Camera',
      spec: '12MP · 120fps · IP67',
      description: 'Industrial-grade smart camera with built-in edge inference. Runs inspection models locally — no server required.',
    },
    {
      icon: Server,
      title: 'Edge Controller',
      spec: 'NVIDIA Jetson · 4× AI TOPS',
      description: 'On-premise compute unit that runs multi-agent AI orchestration locally, with secure cloud synchronization.',
    },
  ]

  const software = [
    {
      icon: Zap,
      title: 'Inspection Agent Engine',
      spec: 'Pre-trained · Fine-tunable',
      description: 'Domain-specific AI agents for defect detection, grading and classification — deploy in hours, not months.',
    },
    {
      icon: Puzzle,
      title: 'Agentic Orchestration Platform',
      spec: 'Multi-agent · Event-driven',
      description: 'Coordinates inspection, decision-making and reporting across a distributed agent network in real-time.',
    },
  ]

  const capabilities = [
    { icon: Zap, label: 'Autonomous — no human in the loop' },
    { icon: Layers, label: 'Edge-inference with optional cloud storage' },
    { icon: Clock, label: 'Fast production deployment' },
    { icon: GitMerge, label: 'Multi-agent collaboration' },
    { icon: BarChart3, label: 'Auto-generated compliance reports' },
    { icon: Sparkles, label: 'Works across industry + fintech' },
  ]

  const deploySteps = [
    { num: '01', title: 'Discovery Call', desc: 'Understand your inspection requirements and data' },
    { num: '02', title: 'Agent Configuration', desc: 'Fine-tune models to your specific defects and items' },
    { num: '03', title: 'Edge Deployment', desc: 'Hardware installed and agents deployed on-premise' },
    { num: '04', title: 'Go Live', desc: 'Production-ready inspection scaling rapidly across facilities' },
  ]

  const activeSolutions = activeTab === 'industry' ? industrySolutions : fintechSolutions
  const accentColor = activeTab === 'industry' ? 'brand-primary' : 'brand-purple'
  const accentGradient = activeTab === 'industry' ? 'bg-gradient-brand' : 'bg-gradient-purple'
  const accentGlow = activeTab === 'industry' ? 'shadow-glow' : 'shadow-glow-purple'

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden bg-grid">
        <div className="blob-blue top-10 -right-40 opacity-60"></div>
        <div className="blob-cyan bottom-10 -left-40 opacity-50"></div>
        <div className="blob-purple top-1/2 left-1/3 opacity-25"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full gradient-border text-brand-primary text-sm font-semibold"
            >
              <Sparkles size={14} className="animate-bounce-gentle" />
              End-to-End AI Inspection Solutions
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight">
              <span className="text-dark-text">Autonomous Agents,</span>
              <br />
              <span className="text-gradient-animate">Deployed Your Way</span>
            </h1>

            <p className="text-lg md:text-xl text-dark-muted max-w-2xl mx-auto leading-relaxed">
              From the factory floor to the gold loan vault — a complete hardware + software platform
              that deploys AI inspection agents <span className="text-dark-text font-semibold">rapidly</span>.
            </p>

            {/* Hero Metric Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-3 pt-2"
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
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-2"
            >
              <Link href="/contact" className="btn-gradient px-8 py-4 text-base inline-flex items-center justify-center gap-2">
                Schedule a Demo <ArrowRight size={18} />
              </Link>
              <Link href="/company" className="btn-outline px-8 py-4 text-base inline-flex items-center justify-center gap-2">
                Learn About Us <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[var(--color-bg)] to-transparent"></div>
      </section>

      {/* ═══ TAB: INDUSTRY / FINTECH SOLUTIONS ═══ */}
      <section className="py-20 md:py-28 relative bg-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Tab Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-dark-text mb-6 tracking-tight">Our Solutions</h2>
            <div className="inline-flex bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-1.5 gap-1.5">
              <button
                onClick={() => setActiveTab('industry')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${activeTab === 'industry'
                  ? 'bg-gradient-brand text-white shadow-glow'
                  : 'text-dark-muted hover:text-dark-text'
                  }`}
              >
                <Factory size={16} /> Industry
              </button>
              <button
                onClick={() => setActiveTab('fintech')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${activeTab === 'fintech'
                  ? 'bg-gradient-purple text-white shadow-glow-purple'
                  : 'text-dark-muted hover:text-dark-text'
                  }`}
              >
                <Gem size={16} /> Fintech
              </button>
            </div>
          </motion.div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {activeSolutions.map((s, index) => {
                const Icon = s.icon
                return (
                  <div key={index} className="gradient-border rounded-2xl p-0 group cursor-pointer shine overflow-hidden">
                    {/* Colored top bar */}
                    <div className={`h-1 w-full ${accentGradient}`}></div>
                    <div className="p-7">
                      <div className={`w-14 h-14 rounded-xl ${accentGradient} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:${accentGlow} transition-all duration-300 icon-pulse`}>
                        <Icon size={26} className="text-white" />
                      </div>
                      <h3 className={`text-xl font-bold text-dark-text mb-3 group-hover:text-${accentColor} transition-colors`}>{s.title}</h3>
                      <p className="text-dark-muted text-sm leading-relaxed mb-5">{s.description}</p>
                      {/* Stat highlight */}
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-${accentColor}/10 border border-${accentColor}/20 text-${accentColor} text-xs font-bold mb-4`}>
                        <BarChart3 size={12} />
                        {s.stat}
                      </div>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {s.tags.map((tag) => (
                          <span key={tag} className="px-2.5 py-1 rounded-md bg-[var(--color-card)] border border-[var(--color-border)] text-dark-muted text-xs font-medium">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ═══ PLATFORM: HARDWARE + SOFTWARE ═══ */}
      <section className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-semibold uppercase tracking-widest mb-4">
              Platform
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-dark-text mb-4 tracking-tight">Hardware + Software Stack</h2>
            <p className="text-dark-muted text-lg max-w-2xl mx-auto">One integrated platform — purpose-built edge hardware paired with an agentic AI software layer.</p>
          </motion.div>

          {/* Hardware Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Left: Hardware visual */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="gradient-border-animated rounded-3xl p-1">
              <div className="bg-[var(--color-surface)] rounded-[22px] p-8 h-full flex flex-col items-center justify-center min-h-[280px] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-accent/5"></div>
                <div className="w-20 h-20 rounded-2xl bg-gradient-brand flex items-center justify-center mb-6 shadow-glow animate-float icon-pulse relative z-10">
                  <Camera size={40} className="text-white" />
                </div>
                <span className="relative z-10 text-xs font-bold uppercase tracking-widest text-brand-accent mb-2">Hardware</span>
                <h3 className="relative z-10 text-2xl font-extrabold text-dark-text text-center">Edge-First Infrastructure</h3>
                <p className="relative z-10 text-dark-muted text-sm text-center mt-2">Runs AI on-premise. Syncs to cloud.</p>
                {/* Floating spec badges */}
                <div className="relative z-10 flex gap-2 mt-5 flex-wrap justify-center">
                  {['IP67 Rated', 'Edge Inference', 'Cloud Sync'].map(b => (
                    <span key={b} className="px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-semibold">{b}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Hardware cards */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="space-y-4 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-semibold uppercase tracking-widest mb-2">
                Hardware Components
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-dark-text tracking-tight">Edge-First Hardware</h3>
              <p className="text-dark-muted">Purpose-built for autonomous inspection — runs AI inference on-premise while securely syncing records to the cloud.</p>
              <div className="space-y-4 mt-2">
                {hardware.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }} viewport={{ once: true }} className="gradient-border rounded-2xl p-5 group shine flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-brand flex-shrink-0 flex items-center justify-center group-hover:shadow-glow transition-all">
                        <Icon size={22} className="text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-base font-bold text-dark-text group-hover:text-brand-primary transition-colors">{item.title}</h4>
                          <span className="px-2 py-0.5 rounded text-xs bg-brand-primary/10 text-brand-primary font-mono">{item.spec}</span>
                        </div>
                        <p className="text-dark-muted text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Software Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Software cards */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="space-y-4 flex flex-col justify-center order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-xs font-semibold uppercase tracking-widest mb-2">
                Software Layer
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-dark-text tracking-tight">Agentic AI Software</h3>
              <p className="text-dark-muted">Autonomous agents that inspect, decide and report — trained on your data, deployed in hours.</p>
              <div className="space-y-4 mt-2">
                {software.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }} viewport={{ once: true }} className="gradient-border rounded-2xl p-5 group shine flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-purple flex-shrink-0 flex items-center justify-center group-hover:shadow-glow-purple transition-all">
                        <Icon size={22} className="text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-base font-bold text-dark-text group-hover:text-brand-purple transition-colors">{item.title}</h4>
                          <span className="px-2 py-0.5 rounded text-xs bg-brand-purple/10 text-brand-purple font-mono">{item.spec}</span>
                        </div>
                        <p className="text-dark-muted text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Right: Software visual */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="gradient-border-animated rounded-3xl p-1 order-1 lg:order-2">
              <div className="bg-[var(--color-surface)] rounded-[22px] p-8 h-full flex flex-col items-center justify-center min-h-[280px] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 to-brand-primary/5"></div>
                <div className="w-20 h-20 rounded-2xl bg-gradient-purple flex items-center justify-center mb-6 shadow-glow-purple animate-float-slow icon-pulse relative z-10">
                  <Puzzle size={40} className="text-white" />
                </div>
                <span className="relative z-10 text-xs font-bold uppercase tracking-widest text-brand-purple mb-2">Software</span>
                <h3 className="relative z-10 text-2xl font-extrabold text-dark-text text-center">Agentic AI Platform</h3>
                <p className="relative z-10 text-dark-muted text-sm text-center mt-2">Multi-agent orchestration · Event-driven</p>
                <div className="relative z-10 flex gap-2 mt-5 flex-wrap justify-center">
                  {['Pre-trained', 'Fine-tunable', 'Audit Trails'].map(b => (
                    <span key={b} className="px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-xs font-semibold">{b}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ CAPABILITIES ═══ */}
      <section className="py-20 md:py-28 bg-dots">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold text-dark-text mb-4 tracking-tight">Platform Capabilities</h2>
            <p className="text-dark-muted text-lg max-w-2xl mx-auto">One platform, two verticals — built for factory floors and financial institutions</p>
          </motion.div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon
              return (
                <motion.div key={i} variants={itemVariants} className="gradient-border rounded-2xl p-5 flex items-center gap-4 group shine">
                  <div className="w-10 h-10 rounded-xl bg-gradient-brand flex-shrink-0 flex items-center justify-center group-hover:shadow-glow transition-all">
                    <Icon size={18} className="text-white" />
                  </div>
                  <p className="text-dark-text font-semibold">{cap.label}</p>
                  <ChevronRight size={16} className="text-brand-primary ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ═══ DEPLOYMENT TIMELINE ═══ */}
      <section className="py-20 md:py-28 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-400/10 border border-green-400/20 text-green-400 text-xs font-bold uppercase tracking-widest mb-4">
              <Clock size={12} /> Fast Production Go-Live
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-dark-text mb-4 tracking-tight">How Deployment Works</h2>
            <p className="text-dark-muted text-lg max-w-xl mx-auto">From first call to production deployment — the fastest way to autonomous inspection.</p>
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-purple opacity-30"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {deploySteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 rounded-2xl gradient-border-animated flex items-center justify-center mb-5 relative">
                    <div className="bg-[var(--color-surface)] rounded-[14px] w-full h-full flex items-center justify-center">
                      <span className="text-2xl font-extrabold text-gradient-animate">{step.num}</span>
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-dark-text mb-2">{step.title}</h3>
                  <p className="text-dark-muted text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="gradient-border-animated rounded-3xl p-1"
          >
            <div className="bg-[var(--color-surface)] rounded-[22px] p-12 md:p-20 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-card rounded-[22px]"></div>
              <div className="blob-blue -top-24 left-1/2 -translate-x-1/2 opacity-15 w-[300px] h-[300px]"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-brand flex items-center justify-center mx-auto mb-6 shadow-glow animate-float">
                  <Sparkles size={32} className="text-white" />
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-dark-text mb-5 tracking-tight">See Agents in Action</h2>
                <p className="text-lg text-dark-muted mb-10 max-w-xl mx-auto">
                  Book a live demo — watch autonomous agents inspect on your factory floor or run a gold loan audit in real-time.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="btn-gradient px-10 py-4 text-lg inline-flex items-center gap-2">
                    Request Demo <ArrowRight size={20} />
                  </Link>
                  <Link href="/company" className="btn-outline px-10 py-4 text-lg inline-flex items-center gap-2">
                    Learn More <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
