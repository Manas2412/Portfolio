'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  SiReact, SiNodedotjs, SiJavascript, SiTypescript, SiTailwindcss,
  SiMongodb, SiPostgresql, SiGit, SiPython, SiExpress, SiBootstrap,
  SiNextdotjs, SiDocker, SiNginx, SiGithub, SiHtml5, SiCss3,
  SiMysql, SiGithubactions, SiPostman, SiSocketdotio, SiAmazon,
} from 'react-icons/si';
import { FaDatabase, FaServer } from 'react-icons/fa';
import { TbBrandCpp } from 'react-icons/tb';

const maskStyle: React.CSSProperties = {
  maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
  WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
};

type Skill = { name: string; icon: React.ElementType };

const SkillSlider = ({
  items,
  direction = 1,
  speed = 40,
}: {
  items: Skill[];
  direction?: number;
  speed?: number;
}) => {
  const duplicated = [...items, ...items, ...items];
  return (
    <div className="relative w-full overflow-hidden" style={maskStyle}>
      <motion.div
        className="flex gap-4 py-3 w-max"
        animate={{ x: direction > 0 ? [-900, 0] : [0, -900] }}
        transition={{
          x: { repeat: Infinity, repeatType: 'loop', duration: speed, ease: 'linear' },
        }}
      >
        {duplicated.map((skill, idx) => (
          <div
            key={`${skill.name}-${idx}`}
            className="flex items-center gap-3 px-5 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 min-w-max max-[240px]:gap-2 max-[240px]:px-3 max-[240px]:py-2 max-[240px]:rounded-lg"
          >
            <skill.icon className="w-4 h-4 text-purple" />
            <span className="text-white-100 text-sm font-medium tracking-wide max-[240px]:text-xs">{skill.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const languages: Skill[] = [
    { name: 'JavaScript (ES6+)', icon: SiJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'C++', icon: TbBrandCpp },
    { name: 'Python', icon: SiPython },
    { name: 'SQL', icon: FaDatabase },
    { name: 'HTML5', icon: SiHtml5 },
    { name: 'CSS3', icon: SiCss3 },
  ];

  const frontend: Skill[] = [
    { name: 'React.js', icon: SiReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Bootstrap', icon: SiBootstrap },
    { name: 'Responsive Design', icon: SiCss3 },
  ];

  const backend: Skill[] = [
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'Express.js', icon: SiExpress },
    { name: 'REST APIs', icon: FaServer },
    { name: 'WebSockets', icon: SiSocketdotio },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'MySQL', icon: SiMysql },
    { name: 'PostgreSQL', icon: SiPostgresql },
  ];

  const devops: Skill[] = [
    { name: 'Docker', icon: SiDocker },
    { name: 'AWS EC2', icon: SiAmazon },
    { name: 'GitHub Actions', icon: SiGithubactions },
    { name: 'Nginx', icon: SiNginx },
    { name: 'Git', icon: SiGit },
    { name: 'GitHub', icon: SiGithub },
    { name: 'Postman', icon: SiPostman },
  ];

  const sections: { label: string; items: Skill[]; direction: number; speed: number }[] = [
    { label: 'Languages', items: languages, direction: -1, speed: 28 },
    { label: 'Frontend', items: frontend, direction: 1, speed: 22 },
    { label: 'Backend & Databases', items: backend, direction: -1, speed: 32 },
    { label: 'DevOps & Tools', items: devops, direction: 1, speed: 26 },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden max-[240px]:py-8">
      <div className="max-w-7xl w-full mx-auto px-5 sm:px-10 relative z-10 max-[240px]:px-2">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="heading">
            Technical <span className="text-purple">Skills</span>
          </h1>

          <div className="space-y-10 mt-16 max-[240px]:space-y-6 max-[240px]:mt-8">
            {sections.map(({ label, items, direction, speed }) => (
              <motion.div
                key={label}
                className="space-y-3"
                initial={{ opacity: 0, x: direction > 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <p className="text-xs uppercase tracking-widest text-white-200 opacity-50 px-1 max-[240px]:text-[10px]">
                  {label}
                </p>
                <SkillSlider items={items} direction={direction} speed={speed} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
