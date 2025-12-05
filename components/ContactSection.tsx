"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionContainer } from "./Container";
import TextReveal from "./TextReveal";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="py-32 md:py-40 bg-linear-to-b from-black via-gray-950 to-black" id="contact">
      <SectionContainer>
        {/* Section Header */}
        <div ref={headerRef} className="mb-16 md:mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
            <TextReveal text="Let's Work Together" delay={0.2} />
          </h2>
          <p 
            className="text-lg text-gray-400 max-w-3xl"
            style={{
              opacity: isHeaderInView ? 1 : 0,
              transform: isHeaderInView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s'
            }}
          >
            Have a project in mind? Let s discuss how I can help bring your ideas to life.
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-blue-400 to-cyan-400 mt-8" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
                Get In Touch
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                I&apos;m always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <motion.a
                href="mailto:contact@example.com"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-cyan-400 transition-colors duration-300">
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="text-lg text-gray-300 group-hover:text-cyan-400 transition-colors">
                    yasser.haoues66@gmail.com
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-cyan-400 transition-colors duration-300">
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500">GitHub</div>
                  <div className="text-lg text-gray-300 group-hover:text-cyan-400 transition-colors">
                    https://github.com/yasxer
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-cyan-400 transition-colors duration-300">
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500">LinkedIn</div>
                  <div className="text-lg text-gray-300 group-hover:text-cyan-400 transition-colors">
                    https://www.linkedin.com/in/yasser-haoues-09b239265?utm_source=share_via&utm_content=profile&utm_medium=member_ios
                  </div>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Input */}
              <div className="group">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-400 mb-2 group-focus-within:text-cyan-400 transition-colors">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-gray-900 border-2 border-gray-800 rounded-xl text-white placeholder-gray-600 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Input */}
              <div className="group">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-400 mb-2 group-focus-within:text-cyan-400 transition-colors">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-gray-900 border-2 border-gray-800 rounded-xl text-white placeholder-gray-600 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message Textarea */}
              <div className="group">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-400 mb-2 group-focus-within:text-cyan-400 transition-colors">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-gray-900 border-2 border-gray-800 rounded-xl text-white placeholder-gray-600 focus:border-cyan-400 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full px-8 py-4 bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' && 'Sending...'}
                {status === 'success' && '✓ Message Sent!'}
                {status === 'error' && '✗ Failed to Send'}
                {status === 'idle' && 'Send Message'}
              </button>
            </form>

            {/* Status Messages */}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-center"
              >
                Thank you! I&apos;ll get back to you soon.
              </motion.div>
            )}
          </motion.div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default ContactSection;
