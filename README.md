
  <h3 align="center">Manas's Portfolio</h3>

   <div align="center">
     A modern, responsive portfolio built with Next.js. Static export ready for deployment (e.g. S3, GitHub Pages).
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Code to Copy](#snippets)
6. 🔗 [Assets](#links)
7. 🚀 [More](#more)


## <a name="introduction">🤖 Introduction</a>

This portfolio is built with **Next.js**, **Framer Motion**, and **Tailwind CSS**. It includes a floating navbar with section navigation and a command palette (⌘K), static export for easy deployment, and responsive layouts for mobile (including very narrow viewports &lt; 240px). The favicon is loaded from `public/assets/profile.jpg` via `app/layout.tsx`.

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- Three.js
- Framer Motion
- Tailwind CSS

## <a name="features">🔋 Features</a>

👉 **Hero**: Introduction with spotlight effect, profile image, and CTA.

👉 **Floating Navbar**: Sticky nav with section links (Home, About, Work, Experience, Contact) and ⌘K command palette trigger. Scrollable on very narrow screens.

👉 **About (Grid)**: Professional summary with terminal-style card and core competencies grid.

👉 **Skills**: Animated skill sliders (Languages, Frontend, Backend, DevOps).

👉 **Recent Projects**: Project cards with descriptions, tags, and links.

👉 **Experience & Education**: Timeline-style experience, education, and achievements.

👉 **Contact**: Get in touch section with contact info and form.

👉 **Command Palette**: ⌘K / Ctrl+K search and quick navigation.

👉 **Responsiveness**: Optimized for all viewports, including **&lt; 420px** (compact nav, tighter grids) and **&lt; 240px** (minimal padding, smaller typography, no overflow).

👉 **Static Export**: `output: "export"` for static hosting (e.g. S3). Favicon from `/assets/profile.jpg`. 

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/Manas2412/Portfolio.git
cd portfolio
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

**Build (static export)**

```bash
npm run build
```

Output is generated for static deployment. Ensure `public/assets/profile.jpg` exists for the favicon.



## <a name="more">🚀 More</a>
**Advance your skills with Next.js Pro Course**

Enjoyed creating this project? Dive deeper into our PRO courses for a richer learning experience. They're packed with detailed explanations, cool features, and exercises to boost your skills. Give it a go!

