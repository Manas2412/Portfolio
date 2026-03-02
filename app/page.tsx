"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import CommandPalette from "@/components/ui/CommandPalette";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex flex-col items-center overflow-hidden mx-auto">
      <div className="max-w-7xl w-full sm:px-10 px-5">
        <FloatingNav navItems={navItems} />
        <CommandPalette />
        <Hero />
        <Grid />
        <Clients />
        <RecentProjects />
        <Experience />
        <Approach />
      </div>
      <Footer />
    </main>
  );
};

export default Home;
