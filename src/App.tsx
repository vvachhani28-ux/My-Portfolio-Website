/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, MouseEvent } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import DashboardPlayground from './components/DashboardPlayground';
import SkillsSection from './components/SkillsSection';
import ProcessSection from './components/ProcessSection';
import ServicesSection from './components/ServicesSection';
import ResumeSection from './components/ResumeSection';
import ContactSection from './components/ContactSection';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function App() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [followerPos, setFollowerPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: globalThis.MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Smooth trailing follower
    let animationFrameId: number;
    const follow = () => {
      setFollowerPos((prev) => ({
        x: prev.x + (cursorPos.x - prev.x) * 0.15,
        y: prev.y + (cursorPos.y - prev.y) * 0.15,
      }));
      animationFrameId = requestAnimationFrame(follow);
    };
    animationFrameId = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animationFrameId);
  }, [cursorPos]);

  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-black selection:text-white relative">
      {/* Background Dynamic Floating Lines / Vignette */}
      <div className="vignette" />

      {/* Custom Cursor for fine desktop pointer */}
      <div
        className="hidden md:block pointer-events-none fixed z-50 w-2 h-2 bg-black rounded-full transition-transform duration-75"
        style={{
          left: `${cursorPos.x - 4}px`,
          top: `${cursorPos.y - 4}px`,
        }}
      />
      <div
        className="hidden md:block pointer-events-none fixed z-50 w-8 h-8 rounded-full border border-black/30 transition-transform duration-150"
        style={{
          left: `${followerPos.x - 16}px`,
          top: `${followerPos.y - 16}px`,
        }}
      />

      {/* Header / Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Selected Work / Projects Section */}
        <ProjectsSection />

        {/* Interactive Analytics Playground / Sandbox Console */}
        <DashboardPlayground />

        {/* Skills & Experience Section */}
        <SkillsSection />

        {/* Process Section */}
        <ProcessSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Resume Sheet Section */}
        <ResumeSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer matching Mohit's design */}
      <footer className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-slate-100 print:hidden text-center">
        {/* Footer Hero */}
        <div className="mb-16">
          <h2 className="title-serif large text-slate-900 mb-6">
            Data &amp; <span className="italic">Purpose</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Building purposeful, analytical systems with a relentless focus on statistical rigor, data engineering, and business strategy. Let’s collaborate—connect with me to explore opportunities.
          </p>
        </div>

        {/* Footer Details Rows */}
        <div className="space-y-6 mb-16 max-w-3xl mx-auto">
          <div className="flex items-center gap-6">
            <a
              href="mailto:vvachhani28@gmail.com"
              className="text-base font-semibold text-slate-900 hover:text-black shrink-0"
            >
              vvachhani28@gmail.com
            </a>
            <div className="flex-1 h-px bg-slate-200/80" />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <span className="text-base font-medium text-slate-600 shrink-0">
              Gujarat, India (Available Worldwide)
            </span>
            <div className="hidden sm:block flex-1 h-px bg-slate-200/80" />
            <div className="flex items-center justify-center gap-5 shrink-0">
              <a
                href="https://github.com/vvachhani28-ux"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-black transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/vvachhani28"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-black transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:vvachhani28@gmail.com"
                className="text-slate-600 hover:text-black transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Bullets */}
        <nav className="flex flex-wrap items-center justify-center gap-3 text-sm text-slate-600 mb-12">
          <a href="#work" onClick={(e) => handleScroll(e, '#work')} className="hover:text-black transition-colors">
            Projects
          </a>
          <span className="text-slate-300">•</span>
          <a href="#skills" onClick={(e) => handleScroll(e, '#skills')} className="hover:text-black transition-colors">
            About &amp; Skills
          </a>
          <span className="text-slate-300">•</span>
          <a href="#process" onClick={(e) => handleScroll(e, '#process')} className="hover:text-black transition-colors">
            Process
          </a>
          <span className="text-slate-300">•</span>
          <a href="#services" onClick={(e) => handleScroll(e, '#services')} className="hover:text-black transition-colors">
            Services
          </a>
          <span className="text-slate-300">•</span>
          <a href="#sandbox" onClick={(e) => handleScroll(e, '#sandbox')} className="hover:text-black transition-colors">
            Console
          </a>
          <span className="text-slate-300">•</span>
          <a href="#resume" onClick={(e) => handleScroll(e, '#resume')} className="hover:text-black transition-colors">
            Resume
          </a>
          <span className="text-slate-300">•</span>
          <a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="hover:text-black transition-colors">
            Contact
          </a>
        </nav>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4 pt-8 border-t border-slate-100">
          <div>Built with Passion</div>
          <div>All rights reserved, © 2026 Vasu Vachhani</div>
        </div>
      </footer>
    </div>
  );
}
