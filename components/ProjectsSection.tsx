'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SectionContainer } from './Container';
import TextReveal from './TextReveal';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    icon: 'shopping-cart',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'AI Content Generator',
    description: 'SaaS platform leveraging GPT-4 for automated content creation with custom training models.',
    tech: ['React', 'Python', 'OpenAI', 'FastAPI'],
    icon: 'cpu',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Real-Time Analytics Dashboard',
    description: 'Interactive dashboard for visualizing complex data streams with WebSocket integration.',
    tech: ['React', 'D3.js', 'WebSocket', 'Redis'],
    icon: 'bar-chart',
    color: 'from-green-500 to-teal-500',
  },
  {
    title: 'Social Media Management',
    description: 'Multi-platform social media scheduling and analytics tool with team collaboration features.',
    tech: ['Vue.js', 'Express', 'MongoDB', 'AWS'],
    icon: 'smartphone',
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Blockchain Explorer',
    description: 'Real-time blockchain transaction viewer with wallet tracking and smart contract analysis.',
    tech: ['React', 'Web3.js', 'Ethers.js', 'GraphQL'],
    icon: 'link',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'Video Streaming Platform',
    description: 'Netflix-style streaming service with adaptive bitrate, subtitles, and recommendation engine.',
    tech: ['Next.js', 'FFmpeg', 'AWS S3', 'CloudFront'],
    icon: 'video',
    color: 'from-red-500 to-pink-500',
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-linear-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/10"
    >
      {/* Icon */}
      <div className={`w-16 h-16 mb-6 rounded-2xl bg-linear-to-br ${project.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {project.icon === 'shopping-cart' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />}
          {project.icon === 'cpu' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />}
          {project.icon === 'bar-chart' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />}
          {project.icon === 'smartphone' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />}
          {project.icon === 'link' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />}
          {project.icon === 'video' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />}
        </svg>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 leading-relaxed mb-6">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700 hover:border-cyan-400 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* View Project Link */}
      <button className="group/btn flex items-center gap-2 text-cyan-400 font-semibold hover:gap-4 transition-all duration-300">
        <span>View Project</span>
        <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
      </button>

      {/* Gradient Overlay on Hover */}
      <div className={`absolute inset-0 bg-linear-to-br ${project.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500 pointer-events-none`} />
    </motion.div>
  );
};

const ProjectsSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section className="py-32 md:py-40 bg-linear-to-b from-black via-gray-950 to-black" id="projects">
      <SectionContainer>
        {/* Section Header */}
        <div ref={headerRef} className="mb-16 md:mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
            <TextReveal text="Featured Projects" delay={0.2} />
          </h2>
          <p 
            className="text-lg text-gray-400 max-w-3xl"
            style={{
              opacity: isHeaderInView ? 1 : 0,
              transform: isHeaderInView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s'
            }}
          >
            A selection of projects that showcase my expertise in building modern, scalable web applications.
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-blue-400 to-cyan-400 mt-8" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="px-8 py-4 bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300">
            View All Projects
          </button>
        </motion.div>
      </SectionContainer>
    </section>
  );
};

export default ProjectsSection;
