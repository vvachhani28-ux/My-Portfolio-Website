import { MouseEvent } from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, Sparkles, Database, BarChart3, Terminal } from 'lucide-react';

export default function Hero() {
  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Hero Text */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <span className="label">I'm Vasu Vachhani</span>
            <h1 className="title-serif large font-normal text-slate-900 tracking-tight">
              Data Analyst &amp; <span className="italic">Applied Statistician</span>
            </h1>
          </div>

          <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
            Specializing in modern data analytics, relational SQL warehousing, and predictive business intelligence. Building scalable analytical pipelines and diagnostic reporting suites.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              id="hero-view-work-btn"
              href="#work"
              onClick={(e) => handleScroll(e, '#work')}
              className="btn-pill btn-pill-primary"
            >
              <span>View Projects</span>
            </a>
            <a
              id="hero-download-resume-btn"
              href="#resume"
              onClick={(e) => handleScroll(e, '#resume')}
              className="btn-pill btn-pill-secondary flex items-center gap-1.5"
            >
              <span>View &amp; Download Resume</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {/* Social Links Row */}
          <div className="flex items-center gap-5 pt-4">
            <a
              href="https://github.com/vvachhani28-ux"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-slate-100 hover:bg-black hover:text-white text-slate-700 transition-all shadow-xs"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/vvachhani28"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-slate-100 hover:bg-black hover:text-white text-slate-700 transition-all shadow-xs"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:vvachhani28@gmail.com"
              className="p-2.5 rounded-full bg-slate-100 hover:bg-black hover:text-white text-slate-700 transition-all shadow-xs"
              aria-label="Send Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <span className="text-xs text-slate-400 font-medium pl-2">
              vvachhani28@gmail.com
            </span>
          </div>
        </div>

        {/* Right Column: Hero Visual Frame */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-md bg-white rounded-[40px] p-6 sm:p-8 border border-slate-200/80 shadow-2xl transition-transform hover:-translate-y-2 duration-500">
            
            {/* Header tag */}
            <div className="flex justify-between items-center pb-6 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center text-white font-script text-2xl">
                  V
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-tight">Vasu Vachhani</h4>
                  <span className="text-[11px] text-slate-500">Applied Statistics Honors</span>
                </div>
              </div>
              <div className="status-pill text-[10px] py-1 px-3">
                <span className="dot" />
                <span>Open for roles</span>
              </div>
            </div>

            {/* Core metrics visual preview */}
            <div className="my-6 space-y-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white shadow-xs text-black">
                    <Database className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 font-medium block">Data Processed</span>
                    <span className="text-sm font-bold text-slate-900">5.4M+ Rows Cleansed</span>
                  </div>
                </div>
                <span className="text-xs font-mono text-emerald-600 font-semibold">+18.7% Lift</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white shadow-xs text-black">
                    <BarChart3 className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 font-medium block">Showcase Repositories</span>
                    <span className="text-sm font-bold text-slate-900">25 Public Case Studies</span>
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-500 font-medium">100% Verified</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white shadow-xs text-black">
                    <Terminal className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 font-medium block">Relational Queries</span>
                    <span className="text-sm font-bold text-slate-900">PostgreSQL / MySQL CTEs</span>
                  </div>
                </div>
                <span className="text-xs font-mono text-indigo-600 font-medium">&lt; 0.4s exec</span>
              </div>
            </div>

            {/* Footer summary bar */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5 font-medium">
                <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                Data Modeling &amp; BI
              </span>
              <span className="font-mono text-[11px]">Fall 2026 Ready</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
