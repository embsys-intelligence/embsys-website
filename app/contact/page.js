'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import Link from 'next/link'

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = async (data) => {
    try {
      // In a real application, you would send this to your backend
      console.log('Form data:', data)
      setSubmitted(true)
      reset()
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

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
              Get in
              <span className="block bg-gradient-brand bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-dark-text max-w-3xl mx-auto">
              Have questions? Our team is here to help you get started with AI-powered visual inspection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">Contact Information</h2>
                <p className="text-dark-text text-lg">
                  Reach out to us via phone, email, or visit our office in Chennai.
                </p>
              </div>

              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="glass rounded-2xl p-8 group hover:border-brand-accent transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-brand flex-shrink-0 flex items-center justify-center">
                    <Phone size={24} className="text-dark-text" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark-text mb-2">Phone</h3>
                    <a
                      href="tel:+919944865029"
                      className="text-dark-text hover:text-brand-accent transition-colors text-lg"
                    >
                      +91 9944865029
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass rounded-2xl p-8 group hover:border-brand-accent transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-brand flex-shrink-0 flex items-center justify-center">
                    <Mail size={24} className="text-dark-text" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark-text mb-2">Email</h3>
                    <a
                      href="mailto:kk@embsysai.com"
                      className="text-dark-text hover:text-brand-accent transition-colors text-lg"
                    >
                      kk@embsysai.com
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Address */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="glass rounded-2xl p-8 group hover:border-brand-accent transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-brand flex-shrink-0 flex items-center justify-center">
                    <MapPin size={24} className="text-dark-text" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark-text mb-2">Address</h3>
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
                </div>
              </motion.div>

              {/* Office Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="glass rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-dark-text mb-4">Business Hours</h3>
                <div className="space-y-2 text-dark-text">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                  <p>Saturday: 10:00 AM - 4:00 PM IST</p>
                  <p>Sunday: Closed</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-3xl font-bold text-dark-text mb-8">Send us a Message</h2>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-6"
                >
                  <p className="text-green-400 font-semibold">
                    Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-dark-text font-semibold mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    type="text"
                    id="name"
                    className="w-full glass rounded-lg px-4 py-3 text-dark-text placeholder-dark-text/50 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/30"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-dark-text font-semibold mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Please enter a valid email',
                      },
                    })}
                    type="email"
                    id="email"
                    className="w-full glass rounded-lg px-4 py-3 text-dark-text placeholder-dark-text/50 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/30"
                    placeholder="you@company.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-dark-text font-semibold mb-2">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('company', { required: 'Company name is required' })}
                    type="text"
                    id="company"
                    className="w-full glass rounded-lg px-4 py-3 text-dark-text placeholder-dark-text/50 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/30"
                    placeholder="Your company"
                  />
                  {errors.company && (
                    <p className="text-red-400 text-sm mt-1">{errors.company.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-dark-text font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    id="phone"
                    className="w-full glass rounded-lg px-4 py-3 text-dark-text placeholder-dark-text/50 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/30"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-dark-text font-semibold mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    id="message"
                    rows={5}
                    className="w-full glass rounded-lg px-4 py-3 text-dark-text placeholder-dark-text/50 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/30 resize-none"
                    placeholder="Tell us about your inspection needs..."
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full btn-gradient text-dark-text py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-glow transition-all text-lg"
                >
                  Send Message <ArrowRight size={20} />
                </button>
              </form>

              <p className="text-dark-text text-sm text-center mt-6">
                We&apos;ll respond within 24 hours during business hours.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gradient-dark rounded-3xl mx-4 sm:mx-6 lg:mx-8 my-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">Frequently Asked Questions</h2>
            <p className="text-dark-text text-lg">
              Common questions about our products and services
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {[
              {
                q: 'How long does it take to deploy the solution?',
                a: 'Deployment typically takes 1-2 days from image collection to production. The AI model training takes 15-30 minutes.',
              },
              {
                q: 'What is the minimum number of training images needed?',
                a: 'We recommend 5-10 images per class for initial training. More diverse images improve accuracy.',
              },
              {
                q: 'Can the system work offline?',
                a: 'Yes! Our edge AI solution processes data locally without cloud dependency.',
              },
              {
                q: 'What is the typical ROI timeframe?',
                a: 'Most customers see ROI within 3-6 months due to improved efficiency and reduced defect rates.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-xl p-6 group hover:border-brand-accent transition-all"
              >
                <h3 className="text-lg font-bold text-dark-text mb-2">{faq.q}</h3>
                <p className="text-dark-text">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-12 md:p-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-dark-text mb-8 max-w-2xl mx-auto">
              Our team is ready to provide a personalized demo and answer all your questions.
            </p>
            <Link
              href="#contact-form"
              className="btn-gradient text-dark-text px-10 py-4 rounded-lg font-semibold inline-flex items-center gap-2 hover:shadow-glow transition-all text-lg"
            >
              Schedule a Demo <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
