"use client";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: '8Byte',
    category: 'Distributed Systems / DevTooling',
    description: 'Real-time website uptime monitoring and alerting platform.',
    detailedDesc: [
      'Designed a queue-based monitoring architecture using Redis Streams and background workers for scalable website health checks',
      'Implemented idempotent job processing with PostgreSQL + Prisma to ensure fault tolerance and data consistency',
      'Built real-time status dashboard using Next.js and WebSockets with optimized polling & caching strategies',
    ],
    image: '/assets/8Byte.jpeg',
    tags: ['TypeScript', 'Node.js', 'Next.js', 'PostgreSQL', 'Redis'],
    gradient: 'from-blue-600/20 to-cyan-600/10',
    link: 'https://github.com/Manas2412/8Byte',
  },
  {
    title: 'BetterStack',
    category: 'Backend Infrastructure',
    description: 'Scalable service architecture with worker-based processing.',
    detailedDesc: [
      'Built modular backend services with TypeScript and Express following clean architecture principles',
      'Implemented Redis-backed asynchronous task processing to decouple heavy workloads from request lifecycle',
      'Optimized API response times and improved system reliability using structured logging and error handling',
    ],
    image: '/assets/betterstack.jpeg',
    tags: ['Node.js', 'Express', 'Redis', 'PostgreSQL', 'Docker'],
    gradient: 'from-indigo-600/20 to-blue-700/10',
    link: 'https://github.com/Manas2412/BetterStack',
  },
  {
    title: 'ClooTrack',
    category: 'Full-Stack SaaS',
    description: 'Productivity and tracking system with structured data flows.',
    detailedDesc: [
      'Developed a full-stack tracking platform using Next.js and TypeScript with secure authentication workflows',
      'Designed relational schema in PostgreSQL with optimized queries for scalable data retrieval',
      'Implemented responsive UI components with clean state management and REST API integration',
    ],
    image: '/assets/clootrack.jpeg',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind'],
    gradient: 'from-purple-600/20 to-indigo-600/10',
    link: 'https://github.com/Manas2412/ClooTrack',
  },
  {
    title: 'Mystery App',
    category: 'Interactive Web App',
    description: 'Anonymous interaction and dynamic content platform.',
    detailedDesc: [
      'Built secure anonymous messaging workflows with backend validation and rate limiting',
      'Designed scalable API endpoints using Express with structured error handling',
      'Implemented dynamic frontend rendering with React and optimized component performance',
    ],
    image: '/assets/mystery.jpeg',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    gradient: 'from-emerald-500/10 to-teal-500/10',
    link: 'https://github.com/Manas2412/Mystery-app',
  },
  {
    title: 'Bolt',
    category: 'Real-Time Application',
    description: 'High-speed interactive platform with modern architecture.',
    detailedDesc: [
      'Architected full-stack application with real-time communication patterns',
      'Implemented efficient backend routing and middleware structure for maintainability',
      'Focused on performance optimization and scalable service layering',
    ],
    image: '/assets/bolt.jpeg',
    tags: ['Node.js', 'Express', 'TypeScript', 'REST APIs'],
    gradient: 'from-orange-500/20 to-red-500/10',
    link: 'https://github.com/Manas2412/Bolt',
  },
  {
    title: 'CodeYatra',
    category: 'EdTech Platform',
    description: 'Learning-focused platform for structured coding practice.',
    detailedDesc: [
      'Developed structured problem-solving interface with modular frontend architecture',
      'Built backend logic for content management and dynamic question rendering',
      'Designed responsive UI using modern CSS utilities and reusable components',
    ],
    image: '/assets/codeyatra.jpeg',
    tags: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
    gradient: 'from-pink-500/20 to-rose-500/10',
    link: 'https://github.com/Manas2412/CodeYatra',
  },
];

const RecentProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Dashed Guide Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="hidden md:block absolute left-8 lg:left-12 h-full w-[2px] opacity-10"
          style={{
            backgroundImage: 'linear-gradient(to bottom, white 0%, white 50%, transparent 50%, transparent 100%)',
            backgroundSize: '2px 30px',
          }}
        />
        <div
          className="hidden md:block absolute right-8 lg:right-12 h-full w-[2px] opacity-10"
          style={{
            backgroundImage: 'linear-gradient(to bottom, white 0%, white 50%, transparent 50%, transparent 100%)',
            backgroundSize: '2px 30px',
          }}
        />
        <div
          className="hidden md:block absolute left-1/2 -translate-x-1/2 h-full w-[2px] opacity-10"
          style={{
            backgroundImage: 'linear-gradient(to bottom, white 0%, white 50%, transparent 50%, transparent 100%)',
            backgroundSize: '2px 30px',
          }}
        />
      </div>

      <div className="max-w-7xl w-full mx-auto px-5 sm:px-10 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Heading — project style */}
          <h1 className="heading mb-4">
            A small selection of{' '}
            <span className="text-purple">recent projects</span>
          </h1>
          <div className="h-px w-24 bg-white/20 mx-auto mb-16" />

          {/* Masonry Grid */}
          <div className="grid md:grid-cols-2 gap-y-20 gap-x-12 lg:gap-x-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className={`group relative ${index % 2 !== 0 ? 'md:translate-y-24' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
              >
                {/* Project Card */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block relative rounded-2xl overflow-hidden bg-gradient-to-br ${project.gradient} border border-white/5 transition-all duration-500 hover:border-white/15 hover:shadow-2xl hover:shadow-purple/5`}
                >
                  <div className="p-6 pb-0 relative">
                    {/* Card Header */}
                    <div className="flex justify-between items-start mb-5">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-widest text-white-100 opacity-50 mb-1">
                          {project.category}
                        </p>
                        <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                        <p className="text-sm text-white-200">{project.description}</p>
                      </div>
                      <div className="shrink-0 w-9 h-9 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 text-white/60">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>

                    {/* Mockup Image */}
                    <div className="relative mt-6 rounded-t-xl overflow-hidden shadow-2xl transform transition-transform duration-700 group-hover:scale-[1.02] group-hover:-translate-y-2">
                      <div className="aspect-[4/3] bg-black-100 border-t border-x border-white/10 rounded-t-xl">
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                        />
                      </div>
                    </div>
                  </div>
                </a>

                {/* Project Details Below Card */}
                <div className="mt-6 pl-6 border-l border-white/10 space-y-3 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  <ul className="space-y-2">
                    {project.detailedDesc.map((item, i) => (
                      <li key={i} className="text-sm text-white-200 flex items-start gap-2">
                        <span className="mt-[6px] shrink-0 w-1 h-1 rounded-full bg-white/30" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-wider font-semibold text-white-100 border border-white/10 px-3 py-1 rounded-full hover:border-white/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RecentProjects;
