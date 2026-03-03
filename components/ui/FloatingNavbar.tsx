'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import { Search } from 'lucide-react';

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px',
      threshold: 0
    };

    const observerCallback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (link: string) => {
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openCommandPalette = () => {
    const event = new KeyboardEvent('keydown', {
      key: 'k',
      metaKey: true,
      bubbles: true,
    });
    window.dispatchEvent(event);
  };

  return (
    <motion.nav
      initial={{ y: -100, x: '-50%', opacity: 0 }}
      animate={{ y: 0, x: '-50%', opacity: 1 }}
      className={cn(
        "fixed top-6 left-1/2 z-50 w-full max-w-fit",
        "max-[420px]:w-[calc(100vw-1rem)] max-[420px]:left-1/2 max-[240px]:w-[calc(100vw-0.5rem)] max-[240px]:top-3",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-1 p-1.5 rounded-full transition-all duration-500 border",
          "max-[420px]:p-1 max-[420px]:gap-0.5 max-[240px]:p-0.5 max-[240px]:gap-0",
          isScrolled
            ? "bg-black/80 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/50"
            : "bg-white/5 backdrop-blur-lg border-white/5"
        )}
      >
        <div className="flex items-center max-[420px]:min-w-0 max-[420px]:flex-1 max-[420px]:overflow-x-auto max-[420px]:overflow-y-hidden max-[420px]:[scrollbar-width:none] max-[420px]:[&::-webkit-scrollbar]:hidden max-[240px]:[scrollbar-width:none] max-[240px]:[&::-webkit-scrollbar]:hidden">
          {navItems.map((item) => {
            const isActive = activeSection === item.link.substring(1);
            return (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.link)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 shrink-0",
                  "max-[420px]:px-2.5 max-[420px]:py-1.5 max-[420px]:text-xs max-[240px]:px-1.5 max-[240px]:py-1 max-[240px]:text-[10px]",
                  isActive ? "text-white" : "text-gray-400 hover:text-white hover:bg-white/5"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </button>
            );
          })}
        </div>

        <div className="w-px h-4 bg-white/10 mx-1 max-[420px]:h-3 max-[420px]:mx-0.5 max-[240px]:h-2.5 max-[240px]:mx-0.5 shrink-0"></div>

        <button
          type="button"
          onClick={openCommandPalette}
          className="flex items-center gap-2 px-3 py-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 shrink-0 max-[420px]:p-1.5 max-[240px]:p-1"
          aria-label="Search"
        >
          <Search size={16} className="max-[420px]:w-3.5 max-[420px]:h-3.5 max-[240px]:w-3 max-[240px]:h-3" />
          <span className="hidden sm:inline text-xs font-mono opacity-60">⌘K</span>
        </button>
      </div>
    </motion.nav>
  );
};

