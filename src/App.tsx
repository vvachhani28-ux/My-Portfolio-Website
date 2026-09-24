/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DashboardPlayground from './components/DashboardPlayground';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ResumeSection from './components/ResumeSection';
import ContactSection from './components/ContactSection';
import { BarChart2, Shield } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-500 selection:text-white print:bg-white print:text-black">
      {/* Navigation Rail */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main>
        {/* Intro Overview */}
        <Hero />

        {/* Live Interactive Analytics Console */}
        <DashboardPlayground />

        {/* Technical Stack Capability Grid */}
        <SkillsSection />

        {/* Deep Dive Written Case Studies */}
        <ProjectsSection />

        {/* Printable/Saveable Corporate Resume & CSV exporter */}
        <ResumeSection />

        {/* Contact Pipeline & Live Sandboxed LocalStorage Logs DB */}
        <ContactSection />
      </main>

      {/* Humble, Professional Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-none bg-indigo-650 flex items-center justify-center text-white">
              <BarChart2 className="h-4.5 w-4.5" />
            </div>
            <div>
              <span className="font-sans font-bold text-white text-sm block">AARAV MEHTA</span>
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 block">Applied Statistics & Analytics Specialist</span>
            </div>
          </div>

          <div className="text-center md:text-right text-xs space-y-1">
            <p className="font-medium text-slate-300">
              © 2026 Aarav Mehta. All rights reserved.
            </p>
            <p className="text-[10px] text-slate-500 font-mono">
              Compiled using React 19 & Tailwind CSS • Handcrafted Interactive Visualizations
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
}

