'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  BrainCircuit,
  ArrowRight,
  Cpu,
  Zap,
  Shield,
  Clock,
  TrendingUp,
  Users,
  Target,
  Layers,
  Factory,
  Gem,
  Globe,
} from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
}

export default function Home() {


  const marqueeItems = [
    'Autonomous Inspection', 'Jewelry Grading', 'Gold Loan Audit', 'Defect Detection',
    'Quality Control', 'Hallmark Verification', 'Assembly Line QC', 'Purity Testing',
    'Edge AI Agents', 'NBFC Compliance', 'Real-Time Decisions', 'Vault Monitoring',
  ]

  const whatWeDo = [
    {
      icon: BrainCircuit,
      title: 'Build Autonomous Agents',
      desc: 'We design AI agents that see, decide and act — replacing manual inspection with intelligent automation.',
    },
    {
      icon: Cpu,
      title: 'Deploy at the Edge',
      desc: 'Our agents run inference on-premise on edge hardware for speed, while optionally syncing records to the cloud.',
    },
    {
      icon: Layers,
      title: 'Serve Two Verticals',
      desc: 'We focus on industrial manufacturing (QC, robotics) and jewelry fintech (gold loans, authentication).',
    },
  ]

  const whyUs = [
    { icon: Zap, title: 'Fully Autonomous', desc: 'Agents inspect, decide and act — no human in the loop needed' },
    { icon: Shield, title: 'Enterprise-Grade Security', desc: 'ISO-compliant, audit-ready infrastructure for regulated industries' },
    { icon: Clock, title: 'Rapid Deployment', desc: 'From first call to production deployment at record speed' },
    { icon: TrendingUp, title: 'Cost Efficient', desc: 'A fraction of the cost of manual inspection with scaled throughput' },
    { icon: Users, title: 'Domain Expertise', desc: 'Deep experience in both manufacturing quality control and jewelry fintech' },
    { icon: Target, title: 'Purpose-Built', desc: 'Not generic AI — every agent is trained specifically for visual inspection' },
  ]

  const verticals = [
    {
      icon: Factory,
      label: 'Industry',
      title: 'Manufacturing & Quality Control',
      desc: 'Defect detection, presence verification and robotic guidance on assembly lines.',
      color: 'brand-primary',
      gradient: 'bg-gradient-brand',
      glow: 'shadow-glow',
    },
    {
      icon: Gem,
      label: 'Fintech',
      title: 'Jewelry & Gold Loan',
      desc: 'Gold purity verification, jewelry authentication and collateral audit for NBFCs.',
      color: 'brand-purple',
      gradient: 'bg-gradient-purple',
      glow: 'shadow-glow-purple',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-grid">
        <div className="blob-blue top-20 -left-48 opacity-70"></div>
        <div className="blob-cyan bottom-20 -right-48 opacity-60"></div>
        <div className="blob-purple top-1/3 right-1/4 opacity-40"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full gradient-border text-brand-primary text-sm font-medium"
            >
              <Zap size={14} className="animate-bounce-gentle" />
              Autonomous AI Agents for Industry & Fintech
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
              <span className="text-dark-text">We Build Autonomous</span>
              <br />
              <span className="text-dark-text">Agents for</span>
              <br />
              <span className="text-gradient-animate">Visual Inspection</span>
            </h1>

            <p className="text-lg md:text-xl text-dark-muted leading-relaxed max-w-2xl mx-auto">
              From factory floors to jewelry vaults — our AI agents autonomously inspect, classify and make decisions across industrial manufacturing and financial services.
            </p>

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
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg to-transparent"></div>
      </section>

      {/* Marquee Ticker */}
      <section className="py-8 border-y border-dark-border/30 overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-content gap-8">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="flex items-center gap-3 text-dark-muted/60 text-sm font-medium whitespace-nowrap px-4">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/50"></span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 md:py-28 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-semibold uppercase tracking-widest mb-4">
              Who We Are
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-dark-text mb-4 tracking-tight">What We Do</h2>
            <p className="text-dark-muted text-lg max-w-2xl mx-auto">
              Embsys Intelligence builds autonomous AI agents purpose-built for visual inspection — deployed at the edge with seamless cloud synchronization.
            </p>
          </motion.div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whatWeDo.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div key={index} variants={itemVariants} className="gradient-border rounded-2xl p-8 group shine">
                  <div className="w-14 h-14 rounded-xl bg-gradient-brand flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-glow transition-all duration-300 icon-pulse">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-dark-text mb-3 group-hover:text-brand-primary transition-colors">{item.title}</h3>
                  <p className="text-dark-muted text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Explore Our Pages */}
      <section className="py-20 md:py-28 relative bg-dots">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-semibold uppercase tracking-widest mb-4">
              Explore
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-dark-text mb-4 tracking-tight">What We Offer</h2>
            <p className="text-dark-muted text-lg max-w-2xl mx-auto">Discover our solutions, learn about the company, or get in touch to start your AI inspection journey.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                href: '/solution',
                label: 'Solutions',
                icon: Layers,
                gradient: 'bg-gradient-brand',
                glow: 'group-hover:shadow-glow',
                color: 'group-hover:text-brand-primary',
                border: 'border-brand-primary/20',
                bg: 'bg-brand-primary/10',
                desc: 'Explore our end-to-end autonomous inspection solutions for manufacturing and jewelry fintech — hardware, software and AI agents.',
                cta: 'View Solutions',
              },
              {
                href: '/company',
                label: 'Company',
                icon: Users,
                gradient: 'bg-gradient-purple',
                glow: 'group-hover:shadow-glow-purple',
                color: 'group-hover:text-brand-purple',
                border: 'border-brand-purple/20',
                bg: 'bg-brand-purple/10',
                desc: 'Learn who we are, our mission to build autonomous inspection agents and the team driving AI-powered quality control.',
                cta: 'About Us',
              },
              {
                href: '/contact',
                label: 'Contact',
                icon: Globe,
                gradient: 'bg-gradient-to-br from-teal-500 to-cyan-500',
                glow: 'group-hover:shadow-glow-accent',
                color: 'group-hover:text-brand-accent',
                border: 'border-brand-accent/20',
                bg: 'bg-brand-accent/10',
                desc: 'Ready to deploy? Book a live demo and see autonomous agents in action on your factory floor or in your gold loan branch.',
                cta: 'Get in Touch',
              },
            ].map((page, i) => {
              const Icon = page.icon
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.12 }} viewport={{ once: true }}>
                  <Link href={page.href} className="gradient-border-animated rounded-2xl p-1 block group h-full shine">
                    <div className="bg-[var(--color-surface)] rounded-[14px] p-7 h-full flex flex-col">
                      <div className={`w-14 h-14 rounded-xl ${page.gradient} flex items-center justify-center mb-5 transition-all duration-300 ${page.glow} group-hover:scale-110`}>
                        <Icon size={26} className="text-white" />
                      </div>
                      <div className={`inline-flex self-start items-center px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${page.bg} border ${page.border} text-dark-muted mb-3`}>
                        {page.label}
                      </div>
                      <p className="text-dark-muted text-sm leading-relaxed flex-grow mb-5">{page.desc}</p>
                      <span className={`inline-flex items-center gap-2 text-sm font-semibold text-dark-muted ${page.color} transition-colors`}>
                        {page.cta} <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Two Verticals — Overview Only */}
      <section className="py-20 md:py-28 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold text-dark-text mb-4 tracking-tight">Two Verticals, One Platform</h2>
            <p className="text-dark-muted text-lg max-w-2xl mx-auto">
              Our autonomous agents serve both industrial and fintech use cases — powered by the same edge-first AI platform.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {verticals.map((v, i) => {
              const Icon = v.icon
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.15 }} viewport={{ once: true }} className="gradient-border-animated rounded-2xl p-1">
                  <div className="bg-dark-surface rounded-[14px] p-8 h-full flex flex-col">
                    <div className="flex items-center gap-4 mb-5">
                      <div className={`w-14 h-14 rounded-xl ${v.gradient} flex items-center justify-center ${v.glow}`}>
                        <Icon size={28} className="text-white" />
                      </div>
                      <div className={`px-3 py-1 rounded-full bg-${v.color}/10 border border-${v.color}/20 text-${v.color} text-xs font-semibold uppercase tracking-widest`}>
                        {v.label}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-dark-text mb-3">{v.title}</h3>
                    <p className="text-dark-muted leading-relaxed mb-6 flex-grow">{v.desc}</p>
                    <Link href="/solution" className={`inline-flex items-center gap-2 text-${v.color} text-sm font-semibold hover:gap-3 transition-all`}>
                      View Solutions <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Embsys */}
      <section className="py-20 md:py-28 relative bg-dots">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-semibold uppercase tracking-widest mb-4">
              Why Us
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-dark-text mb-4 tracking-tight">Why Choose Embsys</h2>
          </motion.div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div key={index} variants={itemVariants} className="glass rounded-2xl p-6 group">
                  <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center mb-4 group-hover:bg-brand-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Icon size={20} className="text-brand-primary" />
                  </div>
                  <h3 className="text-base font-bold text-dark-text mb-2 group-hover:text-brand-primary transition-colors">{item.title}</h3>
                  <p className="text-dark-muted text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="gradient-border-animated rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-card rounded-3xl"></div>
            <div className="blob-blue -top-32 left-1/2 -translate-x-1/2 opacity-20 w-[300px] h-[300px]"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold text-dark-text mb-5 tracking-tight">Ready to Deploy Autonomous Agents?</h2>
              <p className="text-lg text-dark-muted mb-10 max-w-xl mx-auto">
                Whether you&apos;re automating factory inspection or gold loan audits — let&apos;s talk.
              </p>
              <Link href="/contact" className="btn-gradient px-10 py-4 text-lg inline-flex items-center gap-2">
                Contact Us <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
