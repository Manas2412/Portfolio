"use client";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, Award } from 'lucide-react';

const experiences = [
  {
    company: 'Allatone — Noida, India',
    role: 'Full Stack Intern',
    period: 'Feb 2025 – Jun 2025',
    project: 'Nexus Inventory Manager',
    achievements: [
      'Developed a full-stack inventory management system using Next.js 15, React 19, Node.js, and MongoDB, supporting 1,000+ inventory records with real-time updates.',
      'Designed Inventory, Sales, Purchase, and Reporting modules, reducing manual tracking effort by 40%.',
      'Built role-based dashboards and protected routes using backend route grouping and middleware.',
      'Containerized the application using Docker & Docker Compose for consistent deployments.',
      'Automated deployment via GitHub Actions CI/CD, reducing deployment time from 15 min to under 3 min.',
      'Deployed on AWS EC2 with Nginx as a reverse proxy, improving response time by ~30%.',
      'Managed production processes using PM2, ensuring 99.9% uptime and automatic restarts.',
    ],
  },
  {
    company: 'CeoTech — Delhi, India',
    role: 'Software Developer Intern',
    period: 'Aug 2024 – Oct 2024',
    project: 'CEO Card — Premium Lifestyle & Membership Platform',
    achievements: [
      'Built scalable frontend features for a premium membership platform used by 500+ active users.',
      'Implemented workflows for user onboarding, membership renewals, and physical card orders, reducing support requests by 25%.',
      'Developed modules for luxury hotel browsing, concierge requests, and rewards management.',
      'Improved application performance by 20% through component optimization and efficient state management.',
      'Collaborated with backend teams to integrate secure REST APIs and authentication flows.',
    ],
  },
  {
    company: 'Agnitio.AI — Noida, India',
    role: 'Frontend Development Intern',
    period: 'Jul 2024 – Aug 2024',
    project: 'Agnitio.in: AI for All',
    achievements: [
      'Built responsive and accessible UI components for AI-based products using React.js.',
      'Optimized layouts and component rendering, improving mobile usability scores by 35%.',
      'Collaborated with designers and backend engineers to deliver features within strict timelines.',
    ],
  },
];


const education = [
  {
    institution: "Bharati Vidyapeeth's College of Engineering",
    degree: 'B.Tech — CGPA: 7.5',
    period: '2021 – 2025',
    location: 'New Delhi',
  },
  {
    institution: 'The Vivekanand School',
    degree: 'Percentage: 80.0%',
    period: '2020 – 2021',
    location: 'New Delhi',
  },
];

const achievements = [
  'LeetCode Contest Rating — 1640',
  'CodeForces Contest Rating — 1490',
  '1st Place — UHI Hackathon (Spectrum Slam)',
  'Winner — BVP HEX Hackathon (Blockchain Track)',
  'Special Jury Mention — HackMol 5.0 (NIT Jalandhar)',
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-20 relative max-[240px]:py-8">
      <div className="max-w-7xl w-full mx-auto px-5 sm:px-10 max-[240px]:px-2">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16 max-[240px]:mb-8">
            <motion.h1
              className="heading"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Experience &amp;{' '}
              <span className="text-purple">Education</span>
            </motion.h1>
            <motion.p
              className="text-white-200 text-lg max-w-2xl mx-auto mt-4 max-[240px]:text-xs max-[240px]:mt-2 max-[240px]:max-w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              My academic journey, leadership roles, and key achievements
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-[240px]:gap-6">
            {/* Leadership Experience */}
            <div>
              <div className="flex items-center gap-3 mb-8 max-[240px]:gap-2 max-[240px]:mb-4">
                <Briefcase className="w-6 h-6 text-white max-[240px]:w-4 max-[240px]:h-4" />
                <h3 className="text-2xl font-bold text-white max-[240px]:text-base">Professional Experience</h3>
              </div>

              <div className="space-y-12 max-[240px]:space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-8 border-l border-white/10 max-[240px]:pl-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="absolute -left-1.5 top-2 w-3 h-3 bg-white rounded-full border-4 border-black-100" />

                    <div className="mb-2 max-[240px]:mb-1">
                      <span className="text-sm font-medium text-white-200 py-1 px-3 bg-white/5 rounded-full inline-block mb-3 border border-white/10 max-[240px]:text-[10px] max-[240px]:py-0.5 max-[240px]:px-2 max-[240px]:mb-2">
                        {exp.period}
                      </span>
                      <h4 className="text-xl font-bold text-white max-[240px]:text-sm">{exp.role}</h4>
                      <p className="text-base text-white-100 italic max-[240px]:text-xs">{exp.company}</p>
                      {'project' in exp && (
                        <p className="text-xs text-purple font-semibold mt-1 uppercase tracking-wider max-[240px]:text-[10px] max-[240px]:mt-0.5">
                          {(exp as any).project}
                        </p>
                      )}
                    </div>

                    <ul className="space-y-2 mt-4 max-[240px]:mt-2 max-[240px]:space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-white-200 text-sm leading-relaxed flex items-start gap-2 max-[240px]:text-[10px]">
                          <span className="mt-1.5 w-1 h-1 bg-white/50 rounded-full flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education & Achievements */}
            <div className="space-y-12 max-[240px]:space-y-6">
              {/* Education */}
              <div>
                <div className="flex items-center gap-3 mb-8 max-[240px]:gap-2 max-[240px]:mb-4">
                  <Calendar className="w-6 h-6 text-white max-[240px]:w-4 max-[240px]:h-4" />
                  <h3 className="text-2xl font-bold text-white max-[240px]:text-base">Education</h3>
                </div>

                <div className="space-y-6 max-[240px]:space-y-3">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      className="bg-white/[0.03] p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 max-[240px]:p-3 max-[240px]:rounded-xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    >
                      <div className="flex justify-between items-start mb-2 gap-4 max-[240px]:gap-2 max-[240px]:flex-wrap">
                        <h4 className="text-base font-bold text-white max-[240px]:text-xs">{edu.institution}</h4>
                        <span className="text-xs text-white-200 bg-white/10 px-2 py-1 rounded shrink-0 max-[240px]:text-[10px] max-[240px]:px-1.5 max-[240px]:py-0.5">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-white-100 italic max-[240px]:text-xs">{edu.degree}</p>
                      <p className="text-sm text-white-200 opacity-60 mt-1 max-[240px]:text-[10px] max-[240px]:mt-0.5">{edu.location}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <div className="flex items-center gap-3 mb-6 max-[240px]:gap-2 max-[240px]:mb-3">
                  <Award className="w-6 h-6 text-white max-[240px]:w-4 max-[240px]:h-4" />
                  <h3 className="text-2xl font-bold text-white max-[240px]:text-base">Achievements</h3>
                </div>

                <div className="grid gap-3 max-[240px]:gap-2">
                  {achievements.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-200 max-[240px]:p-2 max-[240px]:gap-2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-purple rounded-full flex-shrink-0" />
                      <span className="text-white-100 max-[240px]:text-xs">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
