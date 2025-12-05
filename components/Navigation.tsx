'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from './Container';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/80 backdrop-blur-lg border-b border-gray-800' 
            : 'bg-transparent'
        }`}
      >
        <Container className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="#" 
            className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400 hover:scale-105 transition-transform"
          >
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2 bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </Container>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-20 right-0 bottom-0 w-full md:hidden bg-black/95 backdrop-blur-lg z-40 border-l border-gray-800"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-8 py-4 bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/50 mt-4"
              >
                Let&apos;s Talk
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
