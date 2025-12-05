'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { SectionContainer } from './Container';
import TextReveal from './TextReveal';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-32 px-72 md:py-40 bg-black" id="about">
      <SectionContainer>
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
            <TextReveal text="About Me" delay={0.2} />
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mb-6">
            I m a full-stack developer who believes in the power of code to transform ideas into reality. With a passion for clean architecture and pixel-perfect design, I create web applications that are both beautiful and performant.
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-blue-400 to-cyan-400" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column - Philosophy */}
          <div 
            className="space-y-6"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(50px)',
              transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s'
            }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
              Building Digital Experiences That Matter
            </h3>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              I&apos;m a full-stack developer who believes in the power of code to transform ideas into 
              reality. With a passion for clean architecture and pixel-perfect design, I create 
              web applications that are both beautiful and performant.
            </p>
            
            <p className="text-lg text-gray-400 leading-relaxed">
              My approach combines technical excellence with creative problem-solving. Whether it&apos;s 
              building scalable backend systems or crafting intuitive user interfaces, I focus on 
              delivering solutions that exceed expectations.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span>Detail-oriented</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span>Performance-focused</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-8 h-8 rounded-full bg-teal-500/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <span>Innovation-driven</span>
              </div>
            </div>
          </div>

          {/* Right Column - Stats/Visual */}
          <div 
            className="relative"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(50px)',
              transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
            }}
          >
            <div className="bg-linear-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 space-y-8">
              
              {/* Stat Item */}
              <div className="group hover:bg-gray-900/50 p-6 rounded-xl transition-all duration-300">
                <div className="text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
                  5+
                </div>
                <div className="text-xl text-gray-300 mt-2">Years of Experience</div>
                <div className="text-sm text-gray-500 mt-1">Building scalable web applications</div>
              </div>

              <div className="group hover:bg-gray-900/50 p-6 rounded-xl transition-all duration-300">
                <div className="text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-teal-400">
                  50+
                </div>
                <div className="text-xl text-gray-300 mt-2">Projects Delivered</div>
                <div className="text-sm text-gray-500 mt-1">From startups to enterprise</div>
              </div>

              <div className="group hover:bg-gray-900/50 p-6 rounded-xl transition-all duration-300">
                <div className="text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-teal-400 to-emerald-400">
                  100%
                </div>
                <div className="text-xl text-gray-300 mt-2">Client Satisfaction</div>
                <div className="text-sm text-gray-500 mt-1">Quality is my priority</div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default AboutSection;
