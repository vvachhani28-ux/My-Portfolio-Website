import { ArrowRight, Terminal, BarChart2, Award, BookOpen, Layers } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const handleScroll = (href: string) => {
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { label: 'Academic GPA', value: '3.82 / 4.0', icon: BookOpen, color: 'text-indigo-600 bg-indigo-50 border-indigo-100' },
    { label: 'Data Cleaned', value: '5.4M+ Rows', icon: Layers, color: 'text-emerald-600 bg-emerald-50 border-emerald-100' },
    { label: 'Query Experience', value: '2,500+ Runs', icon: Terminal, color: 'text-indigo-600 bg-indigo-50 border-indigo-100' },
    { label: 'Professional Certs', value: '4 Active', icon: Award, color: 'text-amber-600 bg-amber-50 border-amber-100' },
  ];

  return (
    <section id="overview" className="relative py-20 lg:py-28 overflow-hidden bg-slate-50 border-b border-slate-200 scroll-mt-16">
      {/* Background structural lines instead of circles */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Column 1: Intro */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-none bg-indigo-50 border border-indigo-200 text-indigo-700 text-[10px] font-bold uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-none bg-indigo-600 animate-pulse"></span>
              <span>Available for Fall 2026 Associate Roles & Internships</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.05] font-sans">
              Hi, I'm <span className="text-indigo-650">Aarav Mehta</span>
              <span className="block mt-3 text-2xl sm:text-3xl text-slate-600 font-medium font-sans tracking-tight">
                I translate messy data into strategic business decisions.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-650 leading-relaxed max-w-2xl font-sans">
              I am a final-year Applied Statistics & Computer Science honors student specializing in transforming complex transactional, environmental, and behavioral log files into interactive, actionable business models.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                id="hero-view-dashboard-btn"
                onClick={() => handleScroll('#sandbox')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-none bg-slate-900 hover:bg-indigo-600 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                <span>Launch Interactive Console</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                id="hero-contact-btn"
                onClick={() => handleScroll('#contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-none bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                <span>Inquire / Contact</span>
              </button>
            </div>

            {/* Quick Badges */}
            <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Core Toolkit:</span>
              {['Python (Pandas)', 'SQL (PostgreSQL)', 'Power BI', 'Tableau', 'Advanced Excel'].map(tech => (
                <span key={tech} className="text-xs font-mono font-semibold px-2.5 py-1 bg-white border border-slate-200 text-slate-600 rounded-none">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Column 2: Dashboard Visual Representation */}
          <div className="lg:col-span-5 relative">
            
            {/* Visual console frame */}
            <div className="bg-slate-900 rounded-none shadow-none border border-slate-800 overflow-hidden relative font-mono text-[11px] leading-relaxed text-slate-300">
              {/* Terminal header */}
              <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-none bg-rose-500"></span>
                  <span className="h-2 w-2 rounded-none bg-amber-500"></span>
                  <span className="h-2 w-2 rounded-none bg-emerald-500"></span>
                </div>
                <span className="text-slate-400 font-sans text-[10px] font-bold uppercase tracking-wider">Aarav_Console.py</span>
                <span className="h-4 w-4 text-slate-500 text-right">#</span>
              </div>

              {/* Console log content */}
              <div className="p-4 space-y-3.5 select-none min-h-[300px]">
                <div>
                  <span className="text-slate-500">[09:21:42]</span> <span className="text-emerald-400">INFO:</span> Initializing pipeline compilation...
                </div>
                <div>
                  <span className="text-slate-500">[09:21:43]</span> <span className="text-indigo-400">SQL:</span> SELECT cohort_id, COUNT(user_id) FROM users GROUP BY cohort_id;
                </div>
                <div>
                  <span className="text-slate-500">[09:21:44]</span> <span className="text-amber-400">WARN:</span> Outliers detected in GDP dataset (USA). Fitting robust OLS.
                </div>
                
                {/* Visual mini-bar simulation inside python terminal */}
                <div className="border border-slate-800 rounded-none bg-slate-950 p-3 space-y-2">
                  <div className="flex justify-between text-[10px] text-slate-400 border-b border-slate-800 pb-1">
                    <span>Variable Distribution</span>
                    <span className="text-indigo-400">Kurtosis: 3.12</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-8 text-[10px] text-slate-500 text-right">Q1:</span>
                      <div className="flex-1 h-2 bg-slate-900 rounded-none overflow-hidden flex">
                        <div className="h-full bg-indigo-500" style={{ width: '38%' }}></div>
                      </div>
                      <span className="w-8 text-[10px] text-slate-400 text-right">38%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-8 text-[10px] text-slate-500 text-right">Q2:</span>
                      <div className="flex-1 h-2 bg-slate-900 rounded-none overflow-hidden flex">
                        <div className="h-full bg-indigo-500" style={{ width: '84%' }}></div>
                      </div>
                      <span className="w-8 text-[10px] text-slate-400 text-right">84%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-8 text-[10px] text-slate-500 text-right">Q3:</span>
                      <div className="flex-1 h-2 bg-slate-900 rounded-none overflow-hidden flex">
                        <div className="h-full bg-indigo-500" style={{ width: '62%' }}></div>
                      </div>
                      <span className="w-8 text-[10px] text-slate-400 text-right">62%</span>
                    </div>
                  </div>
                </div>

                <div>
                  <span className="text-slate-500">[09:21:45]</span> <span className="text-emerald-400">SUCCESS:</span> R-Squared improved to <strong className="text-white">0.842</strong>. System active.
                </div>
              </div>

              {/* Terminal status foot */}
              <div className="bg-slate-950/80 px-4 py-2 text-[10px] text-slate-500 border-t border-slate-800 flex justify-between">
                <span>UTF-8</span>
                <span>Python 3.11.4</span>
                <span>Active Model: OLS_Regression</span>
              </div>
            </div>

            {/* Decorative background outline box instead of soft shadows */}
            <div className="absolute -inset-3 border border-indigo-650/25 pointer-events-none -z-10"></div>
          </div>

        </div>

        {/* Stats Grid bottom row */}
        <div className="mt-16 sm:mt-20 border-t border-slate-200 pt-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat) => {
              const IconComp = stat.icon;
              return (
                <div key={stat.label} className="flex items-start gap-3.5 bg-white p-4 border border-slate-200 rounded-none shadow-xs">
                  <div className={`p-2.5 rounded-none border border-slate-200 bg-slate-50 text-indigo-600 flex-shrink-0`}>
                    <IconComp className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      {stat.label}
                    </span>
                    <span className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5 block font-mono">
                      {stat.value}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
