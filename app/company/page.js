'use client'

import { motion } from 'framer-motion'
import { Rocket, ArrowRight, MapPin, Mail, Users, Target, Award, Sparkles, Factory, Gem } from 'lucide-react'
import Link from 'next/link'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
}

export default function Company() {
  const values = [
    { icon: Rocket, title: 'Autonomous First', description: 'We build agents that work without human intervention — inspect, decide and act on their own', color: 'from-blue-400 to-cyan-400' },
    { icon: Target, title: 'Industry + Fintech', description: 'Equal focus on manufacturing quality control and jewelry fintech — two verticals, one platform', color: 'from-cyan-400 to-teal-400' },
    { icon: Users, title: 'Customer Partnership', description: 'We embed with our clients to understand their inspection workflows deeply before building', color: 'from-teal-400 to-blue-400' },
    { icon: Award, title: 'Production-Grade', description: 'Every agent we ship is battle-tested in real factories and gold loan branches', color: 'from-blue-400 to-purple-400' },
  ]

  const milestones = [
    { year: '2022', title: 'Founded', description: 'Embsys Intelligence established in Chennai with a vision to make autonomous visual inspection accessible' },
    { year: '2023', title: 'Industry Launch', description: 'Deployed first autonomous inspection agents on manufacturing lines — defect detection and robotic guidance' },
    { year: '2024', title: 'Fintech Expansion', description: 'Entered jewelry fintech — launched gold loan audit agents for NBFCs and gold loan companies' },
    { year: '2025', title: 'Agentic Platform', description: 'Released multi-agent orchestration platform serving both industrial and financial institution clients' },
  ]

  return (
    <>
      {/* Hero */}
      <section className="min-h-[70vh] flex items-center justify-center relative overflow-hidden bg-grid">
        <div className="blob-blue top-20 -right-48 opacity-50"></div>
        <div className="blob-cyan bottom-20 -left-48 opacity-50"></div>
        <div className="blob-purple top-1/2 left-1/3 opacity-30"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-xs font-semibold uppercase tracking-widest">
              <Sparkles size={14} /> About Us
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight">
              <span className="text-dark-text">Building Autonomous</span>
              <span className="block text-gradient-animate">Inspection Agents</span>
            </h1>
            <p className="text-xl text-dark-muted max-w-3xl mx-auto">
              We are a team of AI engineers building autonomous visual inspection agents that serve two worlds — factory floors where quality is non-negotiable, and financial institutions where gold and jewelry demand trust.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark-bg to-transparent"></div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark-text mb-6 tracking-tight">Our Mission</h2>
              <p className="text-dark-muted text-lg leading-relaxed mb-6">
                To make autonomous visual inspection accessible to every manufacturer and every financial institution — from small jewelry workshops to large-scale assembly plants and NBFC branches.
              </p>
              <p className="text-dark-muted text-lg leading-relaxed mb-8">
                We believe inspection should not require humans staring at screens. Our agents see, understand and decide — whether they're checking PCB solder joints on a production line or verifying gold purity in a loan branch.
              </p>
              <div className="flex gap-4">
                <div className="gradient-border rounded-xl p-4 flex-1 text-center">
                  <Factory size={28} className="text-brand-primary mx-auto mb-2" />
                  <p className="text-dark-text font-bold text-sm">Industry</p>
                  <p className="text-dark-muted text-xs mt-1">Manufacturing, Assembly, QC</p>
                </div>
                <div className="gradient-border rounded-xl p-4 flex-1 text-center">
                  <Gem size={28} className="text-brand-purple mx-auto mb-2" />
                  <p className="text-dark-text font-bold text-sm">Fintech</p>
                  <p className="text-dark-muted text-xs mt-1">Jewelry, Gold Loans, Vaults</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="relative h-80 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 to-brand-accent/10 rounded-3xl blur-3xl"></div>
              <div className="gradient-border-animated rounded-3xl p-8 w-full h-full flex items-center justify-center relative z-10">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-brand flex items-center justify-center mx-auto mb-4 shadow-glow animate-float icon-pulse">
                    <Rocket size={48} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark-text">Autonomous First</h3>
                  <p className="text-dark-muted text-sm">Agents that inspect without humans</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-dots">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold text-dark-text mb-4 tracking-tight">What We Stand For</h2>
            <p className="text-dark-muted text-lg">The principles that guide our agents — and our team</p>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div key={index} variants={itemVariants} className="gradient-border rounded-2xl p-7 text-center group shine">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:shadow-glow transition-all duration-300`}>
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-dark-text mb-2 group-hover:text-brand-primary transition-colors">{value.title}</h3>
                  <p className="text-dark-muted text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold text-dark-text mb-4 tracking-tight">Our Journey</h2>
            <p className="text-dark-muted text-lg">From first agent to multi-vertical platform</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-[39px] top-0 bottom-0 w-px bg-gradient-to-b from-brand-primary via-brand-accent to-transparent opacity-30"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-20 pt-1">
                    <div className="text-2xl font-extrabold bg-gradient-brand bg-clip-text text-transparent">{milestone.year}</div>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-gradient-brand flex-shrink-0 mt-2.5 shadow-glow"></div>
                  <div className="gradient-border rounded-xl p-5 flex-1 shine">
                    <h3 className="text-lg font-bold text-dark-text">{milestone.title}</h3>
                    <p className="text-dark-muted text-sm mt-1">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold text-dark-text mb-4 tracking-tight">Our Headquarters</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="gradient-border rounded-2xl p-8 shine">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-brand-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-dark-text mb-2">Office Address</h3>
                  <p className="text-dark-muted text-sm leading-relaxed">No 2/156, 2nd Floor, Arcot Road,<br />Virugambakkam, Chennai - 600092,<br />Tamil Nadu, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-brand-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-dark-text mb-2">Email</h3>
                  <a href="mailto:kk@embsysai.in" className="text-brand-primary hover:text-brand-accent transition-colors text-sm font-medium">kk@embsysai.in</a>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} className="gradient-border-animated rounded-2xl h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-brand flex items-center justify-center mx-auto mb-4 shadow-glow animate-float">
                  <MapPin size={40} className="text-white" />
                </div>
                <p className="text-dark-text font-bold text-lg">Chennai, India</p>
                <p className="text-dark-muted text-sm mt-1">Engineering Hub</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="gradient-border-animated rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-card rounded-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold text-dark-text mb-5 tracking-tight">Build With Us</h2>
              <p className="text-lg text-dark-muted mb-10 max-w-xl mx-auto">We are hiring engineers who want to build autonomous agents for real-world inspection — across industry and fintech.</p>
              <Link href="/contact" className="btn-gradient px-10 py-4 text-lg inline-flex items-center gap-2">
                Get in Touch <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
