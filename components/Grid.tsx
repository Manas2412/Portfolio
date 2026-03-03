'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { User, Code, Server, Database } from 'lucide-react';

const TerminalCard = () => {
  const [lines, setLines] = useState<string[]>([]);
  const fullText = [
    "> user.init()",
    "> Status:  Online",
    "> Name:    Manas",
    "> Role:    Full-Stack Developer",
    "> Stack:   MERN",
    "> Focus:   Real-time systems",
    ">          Secure APIs",
    ">          Scalable architecture",
  ];

  useEffect(() => {
    let currentLine = 0;
    let currentChar = 0;
    let timeout: any;
    let mounted = true;

    const typeLine = () => {
      if (!mounted) return;

      if (currentLine >= fullText.length) return;

      const lineContent = fullText[currentLine];

      if (currentChar < lineContent.length) {
        setLines(prev => {
          const newLines = [...prev];
          if (newLines[currentLine] === undefined) {
            newLines[currentLine] = lineContent[currentChar];
          } else {
            newLines[currentLine] = lineContent.substring(0, currentChar + 1);
          }
          return newLines;
        });
        currentChar++;
        timeout = setTimeout(typeLine, Math.random() * 30 + 30); // Random typing speed for realism
      } else {
        currentLine++;
        currentChar = 0;
        timeout = setTimeout(typeLine, 400); // Pause between lines
      }
    };

    timeout = setTimeout(typeLine, 1000);

    return () => {
      mounted = false;
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto font-mono text-sm leading-relaxed max-[240px]:max-w-full max-[240px]:text-xs">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-blue-500/10 rounded-xl blur-2xl max-[240px]:rounded-lg" />

      {/* Terminal Window */}
      <div className="relative bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl overflow-hidden h-[320px] max-[240px]:h-[260px] max-[240px]:rounded-lg">
        {/* Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5 max-[240px]:px-2 max-[240px]:py-2 max-[240px]:gap-1">
          <div className="w-3 h-3 rounded-full bg-red-500/80 max-[240px]:w-2 max-[240px]:h-2" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80 max-[240px]:w-2 max-[240px]:h-2" />
          <div className="w-3 h-3 rounded-full bg-green-500/80 max-[240px]:w-2 max-[240px]:h-2" />
          <div className="ml-2 text-xs text-white/30 font-medium max-[240px]:ml-1 max-[240px]:text-[10px]">Manas@dev:~</div>
        </div>

        {/* Content */}
        <div className="p-6 text-gray-300 font-mono max-[240px]:p-3">
          {lines.map((line, index) => (
            <div key={index} className="mb-1">
              <span className="text-blue-400 mr-2">$</span>
              {index === 0 ? <span className="text-green-400">{line}</span> :
                line.includes("Name") || line.includes("Role") ? <span className="text-white">{line}</span> :
                  line.includes("Stack") || line.includes("Focus") ? <span className="text-purple-300">{line}</span> :
                    line}
            </div>
          ))}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-2.5 h-5 bg-blue-500 align-middle ml-1"
          />
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: Code, label: 'Frontend', value: 'React/Tailwind' },
    { icon: Server, label: 'Backend', value: 'Node/Express' },
    { icon: Database, label: 'Database', value: 'Mongo/Postgres' },
    { icon: User, label: 'Experience', value: 'Leadership' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative max-[240px]:py-8">
      <div className="container-custom max-[240px]:px-2">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16 max-[240px]:mb-8">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-heading max-[240px]:text-2xl max-[240px]:mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-white">Professional </span>
              <span className="italic font-normal bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent pr-2">Summary</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16 max-[240px]:gap-4 max-[240px]:mb-8">
            {/* Terminal Card */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <TerminalCard />
            </motion.div>

            {/* About Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-3xl font-bold text-white font-heading max-[240px]:text-lg">
                Building Scalable MERN Applications
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg max-[240px]:text-xs">
                Full-stack developer skilled in building scalable <strong className="text-white">MERN applications</strong> with
                real-time communication, secure backend APIs, WebRTC, and optimized database workflows.
              </p>
              <p className="text-gray-400 leading-relaxed text-lg max-[240px]:text-xs">
                Passionate about system design, performance engineering, and delivering
                production-grade solutions with clean, maintainable code.
              </p>
              <p className="text-gray-400 leading-relaxed text-lg max-[240px]:text-xs">
                Hackathon winner with strong leadership experience as Vice President and
                Event Management Head, organizing events for 500+ attendees.
              </p>

              <div className="pt-4">
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-white border-b border-white pb-1 hover:opacity-70 transition-opacity font-heading italic">
                  Let&apos;s create something together &rarr;
                </button>
              </div>
            </motion.div>
          </div>

          {/* Core Competencies Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-[420px]:gap-2 max-[420px]:min-w-0 max-[240px]:gap-1 max-[240px]:min-w-0">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass-effect rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 group border border-white/10 max-[420px]:p-3 max-[420px]:min-w-0 max-[420px]:rounded-xl max-[240px]:p-2 max-[240px]:rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-white/80 group-hover:text-white transition-colors max-[420px]:w-6 max-[420px]:h-6 max-[420px]:mb-2 max-[240px]:w-4 max-[240px]:h-4 max-[240px]:mb-1" />
                <div className="text-xl font-bold text-white mb-2 font-heading max-[420px]:text-sm max-[420px]:mb-1 max-[240px]:text-[10px] max-[240px]:mb-0.5 truncate" title={stat.value}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 max-[420px]:text-xs max-[240px]:text-[10px] truncate" title={stat.label}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
