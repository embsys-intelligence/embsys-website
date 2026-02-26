'use client'

import { motion } from 'framer-motion'
import { Camera, Server, Zap, Puzzle, ArrowRight } from 'lucide-react'
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

export default function Product() {
  const hardware = [
    { icon: Camera, title: 'AI Camera', description: 'High-precision industrial camera with edge inference capability' },
    { icon: Server, title: 'Edge Controller', description: 'Powerful edge computing device for real-time processing' },
  ]

  const software = [
    { icon: Zap, title: 'AI Inspection Software', description: 'Production-ready inspection models for immediate deployment' },
    { icon: Puzzle, title: 'Agentic AI Platform', description: 'Autonomous AI agents making intelligent decisions' },
  ]

  const features = [
    'Real-time inspection with sub-millisecond latency',
    'Edge and cloud processing flexibility',
    'AI training with sample images (5-10 per class)',
    'Plugin architecture for extensibility',
    'Multi-model support',
    'Custom workflow automation',
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
              Embsys Visual Intelligence
              <span className="block bg-gradient-brand bg-clip-text text-transparent">Platform</span>
            </h1>
            <p className="text-xl text-dark-text max-w-3xl mx-auto">
              Complete hardware and software solution for enterprise AI-powered visual inspection
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            {/* Hardware Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-8">Hardware Components</h2>
              <div className="space-y-6">
                {hardware.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="glass rounded-xl p-6 group hover:border-brand-accent transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-brand flex-shrink-0 flex items-center justify-center">
                          <Icon size={24} className="text-dark-text" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-dark-text mb-2">{item.title}</h3>
                          <p className="text-dark-text">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Hardware Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative h-96 flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary to-brand-accent opacity-10 rounded-3xl blur-3xl"></div>
              <div className="glass rounded-3xl p-8 w-full h-full flex flex-col items-center justify-center relative z-10">
                <div className="text-6xl mb-4">📷</div>
                <h3 className="text-2xl font-bold text-dark-text text-center">Industrial Grade Hardware</h3>
                <p className="text-dark-text text-center text-sm mt-3">Enterprise-ready components</p>
              </div>
            </motion.div>
          </div>

          {/* Software Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Software Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative h-96 flex items-center justify-center order-2 lg:order-1"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent to-brand-primary opacity-10 rounded-3xl blur-3xl"></div>
              <div className="glass rounded-3xl p-8 w-full h-full flex flex-col items-center justify-center relative z-10">
                <div className="text-6xl mb-4">⚙️</div>
                <h3 className="text-2xl font-bold text-dark-text text-center">Intelligent Software Platform</h3>
                <p className="text-dark-text text-center text-sm mt-3">AI-powered and autonomous</p>
              </div>
            </motion.div>

            {/* Software Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-8">Software Components</h2>
              <div className="space-y-6">
                {software.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="glass rounded-xl p-6 group hover:border-brand-accent transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-brand flex-shrink-0 flex items-center justify-center">
                          <Icon size={24} className="text-dark-text" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-dark-text mb-2">{item.title}</h3>
                          <p className="text-dark-text">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gradient-dark rounded-3xl mx-4 sm:mx-6 lg:mx-8 my-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">Platform Features</h2>
            <p className="text-dark-text text-lg max-w-2xl mx-auto">
              Everything you need for enterprise-grade visual inspection
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass rounded-xl p-6 flex items-start gap-4 group hover:border-brand-accent transition-all"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-brand flex-shrink-0 flex items-center justify-center mt-1">
                  <span className="text-dark-text font-bold text-sm">✓</span>
                </div>
                <p className="text-dark-text text-lg">{feature}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dashboard Mockup Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">Inspection Dashboard</h2>
            <p className="text-dark-text text-lg max-w-2xl mx-auto">
              Real-time monitoring and control interface
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="glass rounded-3xl p-8 overflow-hidden"
          >
            <div className="bg-dark-card rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-dark-border rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-brand-accent mb-2">9,847</div>
                  <p className="text-dark-text text-sm">Items Inspected</p>
                </div>
                <div className="bg-dark-border rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">99.8%</div>
                  <p className="text-dark-text text-sm">Accuracy Rate</p>
                </div>
                <div className="bg-dark-border rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-green-500 mb-2">847</div>
                  <p className="text-dark-text text-sm">Defects Detected</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="h-2 bg-dark-border rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-brand w-3/4 rounded-full"></div>
                </div>
                <div className="h-2 bg-dark-border rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-brand w-5/6 rounded-full"></div>
                </div>
                <div className="h-2 bg-dark-border rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-brand w-2/3 rounded-full"></div>
                </div>
              </div>
            </div>
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
              Experience the Power of AI-Powered Inspection
            </h2>
            <p className="text-lg text-dark-text mb-8 max-w-2xl mx-auto">
              Get a personalized product demo and see how Embsys can transform your inspection process.
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
