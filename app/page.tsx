import TextReveal from '@/components/TextReveal';
import Scene3D from '@/components/Scene3D';
import LiveStatus from '@/components/LiveStatus';
import Container from '@/components/Container';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section - Full screen with 3D element */}
      <section className="min-h-screen relative flex flex-col justify-center items-center px-6 lg:px-12 pt-20 pb-32">
        
        {/* 3D Background Element */}
        <div className="absolute inset-0 z-0 opacity-30">
          <Scene3D />
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center text-center">
          
          {/* Subtitle */}
          <div className="text-lg md:text-xl text-gray-400 mb-6 tracking-[0.3em] uppercase font-light">
            <TextReveal text="Full Stack Developer" delay={0.2} />
          </div>

          {/* Main Title */}
          <h1 className="flex flex-col gap-4 mb-8">
            <TextReveal 
              text="CREATIVE" 
              className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight"
              delay={0.4}
            />
            <TextReveal 
              text="ENGINEER" 
              className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-cyan-400 to-teal-400"
              delay={0.6}
            />
          </h1>

          {/* Description */}
          <div className="max-w-2xl mb-12">
            <TextReveal 
              text="Building exceptional digital experiences with modern technologies and creative solutions"
              className="text-base md:text-lg text-gray-400 font-light"
              delay={0.8}
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects"
              className="group px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-linear-to-r hover:from-blue-400 hover:to-cyan-400 hover:text-white transition-all duration-500 transform hover:scale-105 text-center"
            >
              View Projects
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-500 transform hover:scale-105 text-center"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-sm">
          <span className="tracking-wider">SCROLL</span>
          <div className="w-px h-16 bg-linear-to-b from-gray-500 to-transparent animate-pulse" />
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Skills & Experience Section */}
      <SkillsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer with Live Status */}
      <footer className="bg-black border-t border-gray-800 py-16 md:py-20">
        <Container className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-sm text-gray-500">
            © 2025 Full Stack Developer. All rights reserved.
          </div>
          <LiveStatus />
          <div className="flex gap-6">
            <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="mailto:contact@example.com" className="text-gray-400 hover:text-white transition-colors">
              Email
            </a>
          </div>
        </Container>
      </footer>

    </main>
  );
}
