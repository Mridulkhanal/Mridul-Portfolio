# Mridul Khanal - Personal Portfolio

A modern, dark-themed, cyberpunk-inspired personal portfolio website built to showcase my skills, projects, certifications, and passion for web development.

Live Demo: [https://mridulkhanal.com.np](https://mridulkhanal.com.np)  
GitHub: [https://github.com/Mridulkhanal/my-portfolio](https://github.com/Mridulkhanal/my-portfolio)

## 🌌 Overview

This is not just a static resume page — it's a digital representation of my energy, curiosity, and love for technology.  
The site features:

- Dark cyberpunk aesthetic with Matrix rain background
- Neon glow effects & smooth animations
- Fully responsive design
- Interactive project showcase with category filtering
- Animated skill cards & timeline
- Functional contact form (EmailJS)
- Downloadable resume button

## 🛠️ Tech Stack

- **Frontend Framework**: React.js + Vite
- **Styling**: Custom CSS (no Tailwind)
- **Animations**: Framer Motion
- **Icons**: react-icons
- **Form Handling**: EmailJS
- **Background Effect**: Custom Canvas Matrix Rain
- **Fonts**: Orbitron, VT323, Inter (Google Fonts)

## ✨ Features

- Matrix-style falling code rain background (subtle & performant)
- Typing animation + glowing gradient name in hero
- Floating animated icons & social links
- Glassmorphism fixed navigation with mobile toggle
- Scroll-reveal animations across sections
- Tabbed skills & project filtering (All / Web App / E-commerce / Game / Portfolio)
- Animated counters & timeline in About section
- Hover effects with neon glow & tilt on project/certification cards
- Fully responsive (mobile-first) layout
- EmailJS-powered contact form with loading & success/error states
- Direct resume PDF download from navbar

## 📂 Project Structure (main folders/files)
├── public/
│   ├── logo.ico
│   └── resume.pdf
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── MatrixRain.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── App.tsx
│   └── index.css
└── vite.config.ts

### Prerequisites

- Node.js ≥ 18
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Mridulkhanal/my-portfolio.git

# Enter project directory
cd my-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
Open http://localhost:5173 to view it in your browser.
Build for Production
Bashnpm run build