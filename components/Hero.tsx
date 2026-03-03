'use client'
import { FaLocationArrow } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };


  return (
    <section id="home" className="pb-20 pt-40 max-[240px]:pt-24 max-[240px]:pb-12">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <motion.div
        className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center px-5 max-[240px]:px-2 max-[240px]:gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col justify-center items-start relative z-10 text-left order-2 lg:order-1">
          <motion.p
            variants={itemVariants}
            className="uppercase tracking-widest text-xs text-blue-100 max-w-80 max-[240px]:text-[10px] max-[240px]:max-w-full"
          >
            I engineer impact. Not just software.
          </motion.p>

          <motion.div variants={itemVariants} className="w-full">
            <TextGenerateEffect
              words="Manas Sisodia"
              className="text-left text-[40px] md:text-5xl lg:text-7xl mb-2 max-[240px]:text-2xl max-[240px]:mb-1"
            />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-left md:tracking-wider mb-8 text-sm md:text-lg lg:text-xl text-gray-400 max-w-[600px] max-[240px]:text-xs max-[240px]:mb-4 max-[240px]:max-w-full"
          >
            Full-stack developer building <span className="text-white">scalable, real-time systems </span> designed to solve real-world problems.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-start gap-6 mt-4 max-[240px]:gap-3 max-[240px]:mt-2"
          >
            <div className="flex gap-3 max-[240px]:gap-2">
              {[
                { Icon: Github, href: "https://github.com/Manas2412", label: "GitHub" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/manas-sisodia/", label: "LinkedIn" },
                { Icon: Mail, href: "mailto:manassisodia3@gmail.com", label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 rounded-full bg-white/5 border border-white/10 
                 hover:bg-white/10 hover:border-white/30 hover:text-white 
                 text-gray-400 transition-all duration-300 max-[240px]:p-2"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            <a href="#about" className="flex items-center justify-center">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </motion.div>
        </div>


        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] max-[240px]:w-40 max-[240px]:h-40"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl animate-pulse" />

            <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="/assets/profile.jpg"
                alt="Manas"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </div>

            <div className="absolute -z-10 -right-12 -bottom-12 w-full h-full border border-white/5 rounded-full" />
            <div className="absolute -z-10 -left-6 -top-6 w-full h-full border border-dashed border-white/5 rounded-full animate-[spin_60s_linear_infinite]" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
