"use client";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'PipelineCI',
    category: 'CI/CD Orchestration Platform',
    description: 'High-performance DevOps orchestration platform utilizing Docker for isolated step execution.',
    detailedDesc: [
      'Engineered isolated execution environments using Docker containers with live log streaming to a dashboard via Fastify',
      'Implemented an asynchronous high-throughput queue powered by Redis Streams for complex multi-step pipelines',
      'Designed a scalable monorepo architecture using Turborepo with centralized Prisma multi-tenant models',
    ],
    image: '/assets/pipeline.png',
    tags: ['TypeScript', 'Fastify', 'PostgreSQL', 'Redis', 'Docker'],
    gradient: 'from-blue-600/20 to-cyan-600/10',
    link: 'https://github.com/Manas2412/PipelineCI-Developer-CI-CD-Orchestration-Platform',
  },
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
    gradient: 'from-indigo-600/20 to-blue-700/10',
    link: 'https://github.com/Manas2412/8Byte',
  },
  {
    title: 'CodeBase Q&A with RAG',
    category: 'Full-Stack AI Search Engine',
    description: 'Production system for intelligent codebase search using semantic vector retrieval.',
    detailedDesc: [
      'Architected a production dual-pipeline RAG system integrating AST-aware code ingestion with tree-sitter',
      'Leveraged Voyage AI embeddings stored in pgvector for high-efficiency ANN searches to find codebase context',
      'Optimized precision utilizing HyDE expansion and Cohere reranking, streaming answers via a local Ollama LLM',
    ],
    image: '/assets/codebase.png',
    tags: ['Python', 'FastAPI', 'pgvector', 'Cohere', 'Ollama'],
    gradient: 'from-purple-600/20 to-indigo-600/10',
    link: 'https://github.com/Manas2412/CodeBase-Q-A-with-RAG',
  },
  {
    title: 'SnapStream API',
    category: 'High-Performance Social Backend',
    description: 'Fully asynchronous high-performance backend optimized for rapid media delivery.',
    detailedDesc: [
      'Developed a fully asynchronous backend optimized for rapid media delivery utilizing FastAPI and async SQLite',
      'Engineered secure JWT authentication workflows with deep route-level granular control using fastapi-users',
      'Integrated ImageKit natively for bandwidth-optimized image uploading and global CDN delivery without bottlenecks',
    ],
    image: '/assets/snapstream.png',
    tags: ['Python', 'FastAPI', 'SQLAlchemy', 'SQLite', 'ImageKit'],
    gradient: 'from-emerald-500/10 to-teal-500/10',
    link: 'https://github.com/Manas2412/SnapStream-API-Social-Media-Backend-with-FastAPI',
  },
  {
    title: 'Medical Assistant Chatbot',
    category: 'Healthcare RAG AI',
    description: 'Privacy-focused Healthcare RAG pipeline allowing safe querying of diagnostic PDFs.',
    detailedDesc: [
      'Built a native interactive UI with Streamlit powered by a high-concurrency FastAPI data processing capability',
      'Engineered a safe local LLM inference environment using Llama-3.1 via Ollama to ensure complete data compliance',
      'Prevented LLM hallucination by vectorizing complex medical context into a Pinecone database using Google Gemini Embeddings'
    ],
    image: '/assets/medical.png',
    tags: ['Python', 'Streamlit', 'FastAPI', 'LangChain', 'Pinecone'],
    gradient: 'from-orange-500/20 to-red-500/10',
    link: 'https://github.com/Manas2412/Medical-Assistant-Chatbot',
  },
  {
    title: 'GymGenie',
    category: 'AI Workout Generator',
    description: 'Comprehensive AI-driven workout generation platform built with bleeding-edge web frameworks.',
    detailedDesc: [
      'Architected a scalable monolithic codebase utilizing Turborepo for shared configuration and robust component packaging',
      'Implemented real-time AI workout program generation leveraging the latest language models APIs',
      'Designed highly responsive user interface with modern Next.js best practices and Tailwind CSS layout paradigms',
    ],
    image: '/assets/gymgenie.png',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Turborepo'],
    gradient: 'from-pink-500/20 to-rose-500/10',
    link: 'https://github.com/Manas2412/GymGenie',
  },
];

const RecentProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-20 relative overflow-hidden max-[240px]:py-8">
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

      <div className="max-w-7xl w-full mx-auto px-5 sm:px-10 relative z-10 max-[240px]:px-2">
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
          <div className="h-px w-24 bg-white/20 mx-auto mb-16 max-[240px]:mb-8" />

          {/* Masonry Grid */}
          <div className="grid md:grid-cols-2 gap-y-20 gap-x-12 lg:gap-x-16 max-[240px]:gap-y-8 max-[240px]:gap-x-0">
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
                  <div className="p-6 pb-0 relative max-[240px]:p-3 max-[240px]:pb-0">
                    {/* Card Header */}
                    <div className="flex justify-between items-start mb-5 max-[240px]:mb-3">
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-medium uppercase tracking-widest text-white-100 opacity-50 mb-1 max-[240px]:text-[10px] max-[240px]:mb-0.5">
                          {project.category}
                        </p>
                        <h3 className="text-2xl font-bold text-white mb-1 max-[240px]:text-sm max-[240px]:mb-0.5">{project.title}</h3>
                        <p className="text-sm text-white-200 max-[240px]:text-[10px] line-clamp-2">{project.description}</p>
                      </div>
                      <div className="shrink-0 w-9 h-9 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 text-white/60 max-[240px]:w-7 max-[240px]:h-7">
                        <ArrowUpRight size={16} className="max-[240px]:w-3 max-[240px]:h-3" />
                      </div>
                    </div>

                    {/* Mockup Image */}
                    <div className="relative mt-6 rounded-t-xl overflow-hidden shadow-2xl transform transition-transform duration-700 group-hover:scale-[1.02] group-hover:-translate-y-2 max-[240px]:mt-3">
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
                <div className="mt-6 pl-6 border-l border-white/10 space-y-3 opacity-60 group-hover:opacity-100 transition-opacity duration-500 max-[240px]:mt-3 max-[240px]:pl-3 max-[240px]:space-y-2">
                  <ul className="space-y-2 max-[240px]:space-y-1">
                    {project.detailedDesc.map((item, i) => (
                      <li key={i} className="text-sm text-white-200 flex items-start gap-2 max-[240px]:text-[10px]">
                        <span className="mt-[6px] shrink-0 w-1 h-1 rounded-full bg-white/30" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-1 max-[240px]:gap-1 max-[240px]:pt-0.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-wider font-semibold text-white-100 border border-white/10 px-3 py-1 rounded-full hover:border-white/30 transition-colors max-[240px]:text-[8px] max-[240px]:px-2 max-[240px]:py-0.5"
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
