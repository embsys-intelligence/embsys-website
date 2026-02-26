'use client'

import { motion } from 'framer-motion'
import { Factory, Gem, Zap, CheckCircle, QrCode, Cpu, ArrowRight } from 'lucide-react'
import Link from 'next/link'

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

export default function Solutions() {
  const solutions = [
    {
      icon: Factory,
      title: 'Manufacturing Inspection',
      description: 'Automated quality control for manufacturing lines with real-time defect detection',
    },
    {
      icon: Gem,
      title: 'Jewelry Inspection',
      description: 'Precision inspection for jewelry and fine goods with detailed classification',
    },
    {
      icon: Zap,
      title: 'Assembly Line Inspection',
      description: 'End-to-end inspection for assembly operations with continuous monitoring',
    },
    {
      icon: CheckCircle,
      title: 'Quality Control Automation',
      description: 'Complete quality assurance solution with automated decision making',
    },
    {
      icon: QrCode,
      title: 'Barcode Tracking',
      description: 'OCR and barcode recognition for inventory and logistics management',
    },
    {
      icon: Cpu,
      title: 'Robotic Guidance',
      description: 'AI vision guidance system for robotic arms and automation equipment',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-dark pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-dark-text">
              Industrial AI
              <span className="block bg-gradient-brand bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl text-dark-text max-w-3xl mx-auto">
              Tailored AI-powered inspection solutions for every industrial application
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass rounded-2xl p-8 group hover:border-brand-accent hover:shadow-glow-accent transition-all cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-lg bg-gradient-brand flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={28} className="text-dark-text" />
                  </div>
                  <h3 className="text-xl font-bold text-dark-text mb-3">{solution.title}</h3>
                  <p className="text-dark-text mb-6">{solution.description}</p>
                  <div className="flex items-center text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-semibold">Learn More</span>
                    <ArrowRight size={16} className="ml-2" />
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Solution Benefits */}
      <section className="py-16 md:py-24 bg-gradient-dark rounded-3xl mx-4 sm:mx-6 lg:mx-8 my-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">Why Choose Our Solutions</h2>
            <p className="text-dark-text text-lg max-w-2xl mx-auto">
              Industry-leading results and proven track record
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: '99.8%', label: 'Accuracy Rate' },
              { metric: '10ms', label: 'Processing Speed' },
              { metric: '48hrs', label: 'Deployment Time' },
              { metric: '10x', label: 'ROI Improvement' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-xl p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-brand bg-clip-text text-transparent mb-2">
                  {item.metric}
                </div>
                <p className="text-dark-text">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">Industry Use Cases</h2>
            <p className="text-dark-text text-lg max-w-2xl mx-auto">
              Proven solutions across diverse manufacturing sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                industry: 'Electronics Manufacturing',
                challenges: ['Component verification', 'Defect detection', 'Quality assurance'],
              },
              {
                industry: 'Textile Industry',
                challenges: ['Fabric defect detection', 'Pattern verification', 'Quality control'],
              },
              {
                industry: 'Automotive',
                challenges: ['Part inspection', 'Assembly verification', 'Safety compliance'],
              },
              {
                industry: 'Pharmaceutical',
                challenges: ['Packaging verification', 'Seal integrity', 'Labeling accuracy'],
              },
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-2xl p-8 group hover:border-brand-accent transition-all"
              >
                <h3 className="text-2xl font-bold text-dark-text mb-4">{useCase.industry}</h3>
                <div className="space-y-3">
                  {useCase.challenges.map((challenge, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-brand flex-shrink-0"></div>
                      <span className="text-dark-text">{challenge}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-6 text-brand-accent font-semibold text-sm hover:text-brand-primary transition-colors flex items-center gap-2">
                  View Solution <ArrowRight size={16} />
                </button>
              </motion.div>
            ))}
          </div>
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
              Find the Perfect Solution for Your Industry
            </h2>
            <p className="text-lg text-dark-text mb-8 max-w-2xl mx-auto">
              Schedule a consultation with our AI experts to customize a solution for your specific needs.
            </p>
            <Link
              href="/contact"
              className="btn-gradient text-dark-text px-10 py-4 rounded-lg font-semibold inline-flex items-center gap-2 hover:shadow-glow transition-all text-lg"
            >
              Schedule Consultation <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
