'use client'

import { motion } from 'framer-motion'
import { Zap, Cpu, Rocket, DollarSign, ArrowRight } from 'lucide-react'
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

export default function Company() {
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
              About Embsys
              <span className="block bg-gradient-brand bg-clip-text text-transparent">Intelligence</span>
            </h1>
            <p className="text-xl text-dark-text max-w-3xl mx-auto">
              Leading the industrial AI revolution with intelligent visual inspection systems
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Company */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-dark-text">Who We Are</h2>
              <p className="text-lg text-dark-text leading-relaxed">
                Embsys Intelligence Pvt Ltd develops advanced Agentic AI-powered visual inspection systems for industrial automation. We are committed to transforming the way industries approach quality control and defect detection.
              </p>
              <p className="text-lg text-dark-text leading-relaxed">
                Our mission is to make AI-powered industrial automation accessible to businesses of all sizes, delivering enterprise-grade solutions with minimal complexity and maximum impact.
              </p>
              <div className="pt-4">
                <h3 className="text-xl font-bold text-dark-text mb-4">Our Values</h3>
                <ul className="space-y-3">
                  {['Innovation', 'Reliability', 'Customer Success', 'Transparency'].map((value, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-brand flex-shrink-0"></div>
                      <span className="text-dark-text text-lg">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Image/Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative h-96 flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary to-brand-accent opacity-10 rounded-3xl blur-3xl"></div>
              <div className="glass rounded-3xl p-8 w-full h-full flex items-center justify-center relative z-10">
                <div className="text-center space-y-4">
                  <div className="text-6xl">🚀</div>
                  <h3 className="text-2xl font-bold text-dark-text">Innovation First</h3>
                  <p className="text-dark-text text-sm">Pioneering the future of industrial AI</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-gradient-dark rounded-3xl mx-4 sm:mx-6 lg:mx-8 my-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            <motion.div variants={itemVariants} className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-dark-text mb-4">Our Mission</h3>
              <p className="text-dark-text leading-relaxed">
                To empower industrial enterprises with cutting-edge Agentic AI and visual intelligence technologies, enabling autonomous decision-making for quality control, defect detection, and operational optimization.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-dark-text mb-4">Our Vision</h3>
              <p className="text-dark-text leading-relaxed">
                To be the global leader in industrial AI solutions, where every manufacturing facility leverages intelligent visual inspection systems to achieve zero-defect operations and maximum efficiency.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Embsys */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">Why Choose Embsys</h2>
            <p className="text-dark-text text-lg max-w-2xl mx-auto">
              We combine cutting-edge AI with practical industrial solutions
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: Zap, title: 'Agentic AI', description: 'Autonomous agents making intelligent decisions' },
              { icon: Cpu, title: 'Edge AI', description: 'On-device processing with zero cloud dependency' },
              { icon: Rocket, title: 'Fast Deployment', description: 'Production-ready in hours, not months' },
              { icon: DollarSign, title: 'Affordable', description: 'Enterprise quality at competitive pricing' },
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass rounded-2xl p-8 text-center group hover:border-brand-accent transition-all"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-brand flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={32} className="text-dark-text" />
                  </div>
                  <h3 className="text-xl font-bold text-dark-text mb-3">{feature.title}</h3>
                  <p className="text-dark-text">{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 md:py-24 bg-gradient-dark rounded-3xl mx-4 sm:mx-6 lg:mx-8 my-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">Our Location</h2>
            <p className="text-dark-text text-lg max-w-2xl mx-auto">
              Based in Chennai, India - A hub for technology and innovation
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Map Placeholder */}
              <div className="bg-dark-card rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-4">📍</div>
                  <p className="text-dark-text">Chennai, India</p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-dark-text mb-2">Headquarters</h3>
                  <p className="text-dark-text">
                    Embsys Intelligence Pvt Ltd<br />
                    19A, Dr. VSI Estate Phase II<br />
                    Thiruvanmiyur<br />
                    Dr. Vasi Estate, Phase II<br />
                    Tharamani<br />
                    Chennai, Tamil Nadu – 600041<br />
                    India
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark-text mb-2">Contact</h3>
                  <p className="text-dark-text">
                    <strong>Phone:</strong> <a href="tel:+919944865029" className="hover:text-brand-accent transition-colors">+91 9944865029</a><br />
                    <strong>Email:</strong> <a href="mailto:kk@embsysai.com" className="hover:text-brand-accent transition-colors">kk@embsysai.com</a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team / Culture Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">Our Culture</h2>
            <p className="text-dark-text text-lg max-w-2xl mx-auto">
              We believe in fostering innovation, collaboration, and excellence
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { title: 'Innovate', description: 'Pushing boundaries in AI and industrial technology' },
              { title: 'Collaborate', description: 'Working closely with customers to deliver value' },
              { title: 'Excel', description: 'Maintaining the highest standards in everything we do' },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass rounded-2xl p-8 text-center hover:border-brand-accent transition-all"
              >
                <h3 className="text-2xl font-bold text-dark-text mb-4">{value.title}</h3>
                <p className="text-dark-text">{value.description}</p>
              </motion.div>
            ))}
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
              Join the AI Revolution
            </h2>
            <p className="text-lg text-dark-text mb-8 max-w-2xl mx-auto">
              Get in touch with our team to learn how Embsys can transform your industrial operations.
            </p>
            <Link
              href="/contact"
              className="btn-gradient text-dark-text px-10 py-4 rounded-lg font-semibold inline-flex items-center gap-2 hover:shadow-glow transition-all text-lg"
            >
              Contact Us <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
