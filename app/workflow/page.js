'use client'

import { motion } from 'framer-motion'
import { Upload, Brain, TestTube, Rocket, Monitor, ArrowRight } from 'lucide-react'
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

export default function Workflow() {
  const steps = [
    {
      number: 1,
      icon: Upload,
      title: 'Capture Product Images',
      description: 'Collect representative images of your products and defects using any camera or our AI Camera.',
      details: ['Minimum 5-10 images per class', 'Various angles and conditions', 'High-quality imagery'],
    },
    {
      number: 2,
      icon: Brain,
      title: 'Upload and Train AI',
      description: 'Upload images to the platform and let our AI automatically train a custom inspection model.',
      details: ['Automated feature extraction', 'Transfer learning applied', 'Training in minutes'],
    },
    {
      number: 3,
      icon: TestTube,
      title: 'Test Inspection',
      description: 'Validate the trained model with test images and fine-tune parameters for optimal accuracy.',
      details: ['Real-time accuracy metrics', 'Confidence scores', 'Parameter tuning'],
    },
    {
      number: 4,
      icon: Rocket,
      title: 'Deploy to Production',
      description: 'Deploy the trained model to edge devices for real-time inspection without cloud dependency.',
      details: ['One-click deployment', 'Edge optimization', 'Redundancy support'],
    },
    {
      number: 5,
      icon: Monitor,
      title: 'Real-Time Monitoring',
      description: 'Monitor inspection results in real-time with continuous performance tracking and alerts.',
      details: ['Live dashboards', 'Performance analytics', 'Automated alerts'],
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
              AI Training and
              <span className="block bg-gradient-brand bg-clip-text text-transparent">Deployment Workflow</span>
            </h1>
            <p className="text-xl text-dark-text max-w-3xl mx-auto">
              Five simple steps from data collection to production deployment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Workflow Timeline */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-primary via-brand-accent to-transparent opacity-30"></div>

            {/* Steps */}
            <div className="space-y-12 lg:space-y-0">
              {steps.map((step, index) => {
                const Icon = step.icon
                const isEven = index % 2 === 0

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12 lg:mb-20 ${
                      isEven ? 'lg:[direction:rtl]' : ''
                    }`}
                  >
                    {/* Content */}
                    <div className={`glass rounded-2xl p-8 ${isEven ? 'lg:[direction:ltr]' : ''}`}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-full bg-gradient-brand flex items-center justify-center flex-shrink-0">
                          <Icon size={28} className="text-dark-text" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-brand-accent">Step {step.number}</div>
                          <h3 className="text-2xl font-bold text-dark-text">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-dark-text mb-6">{step.description}</p>
                      <div className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-brand-accent flex-shrink-0"></div>
                            <span className="text-dark-text text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Timeline Node */}
                    <div className="hidden lg:flex justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="w-6 h-6 rounded-full bg-gradient-brand border-4 border-dark-bg shadow-glow z-10"
                      ></motion.div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview Cards */}
      <section className="py-16 md:py-24 bg-gradient-dark rounded-3xl mx-4 sm:mx-6 lg:mx-8 my-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">Workflow Benefits</h2>
            <p className="text-dark-text text-lg max-w-2xl mx-auto">
              Optimize your inspection process with our proven methodology
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { title: 'Fast Training', description: 'Train accurate models in minutes, not weeks' },
              { title: 'Easy Integration', description: 'Seamless connection with existing systems' },
              { title: 'Continuous Improvement', description: 'Auto-retraining with new data' },
              { title: 'Edge Processing', description: 'No cloud dependency for inference' },
              { title: 'Real-Time Monitoring', description: 'Live dashboards and analytics' },
              { title: 'Scalable Architecture', description: 'Grows with your production needs' },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass rounded-xl p-6 text-center group hover:border-brand-accent transition-all"
              >
                <h3 className="text-lg font-bold text-dark-text mb-3">{benefit.title}</h3>
                <p className="text-dark-text text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Statistics */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">Deployment Timeline</h2>
            <p className="text-dark-text text-lg max-w-2xl mx-auto">
              From concept to production in the fastest time possible
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { phase: 'Image Collection', time: '1-2 Days' },
              { phase: 'Model Training', time: '15-30 mins' },
              { phase: 'Testing & QA', time: '1-2 Hours' },
              { phase: 'Deployment', time: '30 mins' },
              { phase: 'Go Live', time: 'Immediate' },
            ].map((period, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-xl p-6 text-center group hover:border-brand-accent transition-all"
              >
                <div className="text-sm font-semibold text-brand-accent mb-2">{period.phase}</div>
                <div className="text-3xl font-bold text-dark-text">{period.time}</div>
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
              Start Your AI Journey Today
            </h2>
            <p className="text-lg text-dark-text mb-8 max-w-2xl mx-auto">
              Get hands-on with our workflow. Request a demo and see how quickly you can deploy AI inspection.
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
