'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Zap,
  BrainCircuit,
  DollarSign,
  Clock,
  Eye,
  Package,
  QrCode,
  CheckCircle2,
  ArrowRight,
  Box,
  Cpu,
  Scan,
} from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function Home() {
  const keyFeatures = [
    { icon: Zap, title: '20x Faster Deployment', description: 'Deploy AI inspection in minutes, not months' },
    { icon: CheckCircle2, title: '0 Experts Needed', description: 'User-friendly platform requiring minimal training' },
    { icon: DollarSign, title: '10x Lower TCO', description: 'Reduce total cost of ownership significantly' },
    { icon: Clock, title: 'Go/No Go in 1 Hour', description: 'Real-time decision making capability' },
  ]

  const applications = [
    { icon: Eye, title: 'Presence Inspection', description: 'Detect component presence with AI precision' },
    { icon: Scan, title: 'Quality Inspection', description: 'Automated defect detection and classification' },
    { icon: QrCode, title: 'Barcode Reading', description: 'OCR and barcode recognition at scale' },
    { icon: Package, title: 'Object Recognition', description: 'Identify and classify products instantly' },
    { icon: Cpu, title: 'Robotic Guidance', description: 'Guide robotic arms with AI vision' },
    { icon: BrainCircuit, title: 'Intelligent Inspection', description: 'Advanced AI-powered quality control' },
  ]

  const setupSteps = [
    { title: 'Unbox', description: 'Receive your AI inspection hardware' },
    { title: 'Mount', description: 'Install on your production line' },
    { title: 'Ready to Use', description: 'Start inspecting within hours' },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[95vh] flex items-center justify-center relative overflow-hidden pt-20">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-dark pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-dark-text">
                  Agentic AI Powered
                  <span className="block bg-gradient-brand bg-clip-text text-transparent">Visual Intelligence</span>
                </h1>
                <p className="text-lg md:text-xl text-dark-text leading-relaxed max-w-xl">
                  Automate industrial inspection using autonomous AI agents capable of detecting defects, classifying products, and making decisions without human intervention.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/contact"
                  className="btn-gradient text-dark-text px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-glow transition-all"
                >
                  Request Demo <ArrowRight size={18} />
                </Link>
                <Link
                  href="/product"
                  className="border border-brand-accent text-brand-accent px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-brand-accent hover:text-dark-bg transition-all"
                >
                  View Product <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>

            {/* Right Content - AI Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-96 lg:h-full flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary to-brand-accent opacity-10 rounded-3xl blur-3xl"></div>
              <div className="glass rounded-3xl p-8 w-full h-full flex items-center justify-center relative z-10">
                <div className="space-y-8">
                  <div className="flex items-center justify-center">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-brand flex items-center justify-center animate-pulse">
                      <BrainCircuit size={48} className="text-dark-text" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 bg-dark-border rounded-full w-32 mx-auto"></div>
                    <div className="h-3 bg-dark-border rounded-full w-40 mx-auto"></div>
                    <div className="h-3 bg-dark-border rounded-full w-36 mx-auto"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3-Step Setup Section */}
      <section className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">Quick Implementation</h2>
            <p className="text-dark-text text-lg max-w-2xl mx-auto">
              From unboxing to production-ready in just three simple steps
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {setupSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass rounded-2xl p-8 relative group hover:bg-glass-accent transition-all"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-brand rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="text-5xl font-bold bg-gradient-brand bg-clip-text text-transparent mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-dark-text mb-3">{step.title}</h3>
                <p className="text-dark-text">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 md:py-24 bg-gradient-dark rounded-3xl mx-4 sm:mx-6 lg:mx-8 my-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">Why Choose Embsys</h2>
            <p className="text-dark-text text-lg max-w-2xl mx-auto">
              Enterprise-grade performance at a fraction of the cost
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {keyFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass rounded-xl p-6 text-center group hover:shadow-glow-accent transition-all"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-brand flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon size={24} className="text-dark-text" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-dark-text mb-2">{feature.title}</h3>
                  <p className="text-dark-text text-sm">{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">Wide Range of Applications</h2>
            <p className="text-dark-text text-lg max-w-2xl mx-auto">
              AI-powered inspection solutions for every industrial use case
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {applications.map((app, index) => {
              const Icon = app.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass rounded-2xl p-8 group hover:border-brand-accent transition-all cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-lg bg-gradient-brand flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={28} className="text-dark-text" />
                  </div>
                  <h3 className="text-xl font-bold text-dark-text mb-2">{app.title}</h3>
                  <p className="text-dark-text">{app.description}</p>
                  <div className="mt-4 flex items-center text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight size={18} />
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-12 md:p-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-6">
              Ready to transform your inspection process?
            </h2>
            <p className="text-lg text-dark-text mb-8 max-w-2xl mx-auto">
              Join industry leaders in adopting AI-powered visual intelligence for their operations.
            </p>
            <Link
              href="/contact"
              className="btn-gradient text-dark-text px-10 py-4 rounded-lg font-semibold inline-flex items-center gap-2 hover:shadow-glow transition-all text-lg"
            >
              Request Demo <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
