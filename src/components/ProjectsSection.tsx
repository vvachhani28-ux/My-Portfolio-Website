import { useState, MouseEvent } from 'react';
import { portfolioProjects } from '../data/projects';
import { PortfolioProject } from '../types';
import { ArrowUpRight, Github, Sparkles } from 'lucide-react';

export default function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'eda' | 'sql' | 'excel' | 'regex'>('all');
  const [visibleCount, setVisibleCount] = useState<number>(8);

  const filterMap = {
    all: () => true,
    eda: (p: PortfolioProject) => p.category.toLowerCase().includes('eda') || p.category.toLowerCase().includes('risk') || p.category.toLowerCase().includes('analytics') || p.category.toLowerCase().includes('spatial'),
    sql: (p: PortfolioProject) => p.category.toLowerCase().includes('sql') || p.category.toLowerCase().includes('query') || p.category.toLowerCase().includes('database'),
    excel: (p: PortfolioProject) => p.category.toLowerCase().includes('excel') || p.category.toLowerCase().includes('kpi') || p.category.toLowerCase().includes('modeling'),
    regex: (p: PortfolioProject) => p.category.toLowerCase().includes('regex') || p.category.toLowerCase().includes('etl')
  };

  const filteredProjects = portfolioProjects.filter(filterMap[selectedFilter]);
  const displayedProjects = filteredProjects.slice(0, visibleCount);

  const getBadgeColor = (category: string) => {
    const c = category.toLowerCase();
    if (c.includes('sql')) return '#3B82F6';
    if (c.includes('excel')) return '#10B981';
    if (c.includes('regex')) return '#8B5CF6';
    return '#EAB308';
  };

  const handleSelectConsole = (e: MouseEvent<HTMLAnchorElement>, projId: string) => {
    e.preventDefault();
    const sandboxEl = document.querySelector('#sandbox');
    if (sandboxEl) {
      sandboxEl.scrollIntoView({ behavior: 'smooth' });
      // Trigger selection in playground
      const projNavBtn = document.getElementById(`proj-nav-${projId}`);
      if (projNavBtn) {
        projNavBtn.click();
      }
    }
  };

  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-12">
      {/* Header */}
      <div className="mb-12">
        <span className="label">Selected Work</span>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="title-serif text-3xl sm:text-4xl md:text-5xl">
            Curated Analytics &amp; <span className="italic">Case Studies</span>
          </h2>

          {/* Interactive filter tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200/60 self-start md:self-auto">
            <button
              onClick={() => { setSelectedFilter('all'); setVisibleCount(8); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedFilter === 'all'
                  ? 'bg-white text-black shadow-xs'
                  : 'text-slate-650 hover:text-black'
              }`}
            >
              All ({portfolioProjects.length})
            </button>
            <button
              onClick={() => { setSelectedFilter('eda'); setVisibleCount(8); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedFilter === 'eda'
                  ? 'bg-white text-black shadow-xs'
                  : 'text-slate-650 hover:text-black'
              }`}
            >
              Python &amp; EDA
            </button>
            <button
              onClick={() => { setSelectedFilter('sql'); setVisibleCount(8); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedFilter === 'sql'
                  ? 'bg-white text-black shadow-xs'
                  : 'text-slate-650 hover:text-black'
              }`}
            >
              SQL &amp; Relational
            </button>
            <button
              onClick={() => { setSelectedFilter('excel'); setVisibleCount(8); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedFilter === 'excel'
                  ? 'bg-white text-black shadow-xs'
                  : 'text-slate-650 hover:text-black'
              }`}
            >
              Excel &amp; Financials
            </button>
            <button
              onClick={() => { setSelectedFilter('regex'); setVisibleCount(8); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedFilter === 'regex'
                  ? 'bg-white text-black shadow-xs'
                  : 'text-slate-650 hover:text-black'
              }`}
            >
              Regex &amp; Pipelines
            </button>
          </div>
        </div>
      </div>

      {/* Projects Grid matching Mohit's layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {displayedProjects.map((proj, index) => {
          const isSpanTwo = index % 3 === 0;
          const badgeColor = getBadgeColor(proj.category);

          return (
            <div
              key={proj.id}
              className={`work-card flex flex-col justify-between group ${
                isSpanTwo ? 'md:col-span-2' : 'col-span-1'
              }`}
            >
              <div>
                {/* Visual Header / Banner */}
                <div className="aspect-[16/9] w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group-hover:from-slate-950 group-hover:to-slate-900 transition-all duration-700">
                  {/* Subtle decorative grid lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />

                  {/* Top row */}
                  <div className="flex justify-between items-center relative z-10">
                    <span className="font-mono text-xs font-semibold text-slate-400">
                      CASE STUDY #{String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[11px] font-mono px-3 py-1 bg-white/10 text-white rounded-full backdrop-blur-xs border border-white/10">
                      {proj.metrics?.[0] ? `${proj.metrics[0].label}: ${proj.metrics[0].value}` : 'Verified Insights'}
                    </span>
                  </div>

                  {/* Center mock visual preview */}
                  <div className="my-auto relative z-10 text-center py-4">
                    <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-white/10 border border-white/10 text-white mb-3 shadow-inner">
                      <Sparkles className="h-6 w-6 text-amber-300" />
                    </div>
                    <h4 className="text-xl sm:text-2xl font-serif text-white tracking-wide">
                      {proj.title}
                    </h4>
                    <p className="text-xs text-slate-300 font-mono mt-1">
                      {proj.subtitle}
                    </p>
                  </div>

                  {/* Bottom metrics preview */}
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono border-t border-white/10 pt-3 relative z-10">
                    <span>Target: {proj.tags.slice(0, 2).join(' / ')}</span>
                    <span className="text-emerald-400 font-bold">Production Ready</span>
                  </div>
                </div>

                {/* Work Card Info */}
                <div className="p-8 sm:p-10 space-y-5">
                  <div
                    className="exp-badge mb-2"
                    style={{ backgroundColor: badgeColor }}
                  >
                    {proj.category}
                  </div>

                  <h3 className="title-serif text-2xl sm:text-3xl text-slate-900 leading-snug">
                    {proj.title}
                  </h3>

                  <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                    <p>
                      <strong className="text-slate-900 font-semibold">Problem: </strong>
                      {proj.problem}
                    </p>
                    <p>
                      <strong className="text-slate-900 font-semibold">Solution: </strong>
                      {proj.approach}
                    </p>
                    <p>
                      <strong className="text-emerald-700 font-semibold">Executive Impact: </strong>
                      {proj.impact}
                    </p>
                  </div>

                  {/* Tech Chips */}
                  <div className="tech-chips pt-2">
                    {proj.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Links Footer */}
              <div className="px-8 sm:px-10 pb-8 sm:pb-10 pt-2 flex flex-wrap items-center gap-4 border-t border-slate-100">
                <a
                  href="#sandbox"
                  onClick={(e) => handleSelectConsole(e, proj.id)}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-black hover:text-slate-600 transition-colors"
                >
                  <span>Launch Interactive Sandbox</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                {proj.githubUrl && (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-black transition-colors ml-auto"
                  >
                    <Github className="h-4 w-4" />
                    <span>GitHub Repo</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Center Button: Explore All Projects */}
      {displayedProjects.length < filteredProjects.length && (
        <div className="flex justify-center mt-16">
          <button
            onClick={() => setVisibleCount((prev) => Math.min(prev + 8, filteredProjects.length))}
            className="btn-pill btn-pill-secondary flex items-center gap-2 text-sm font-semibold"
          >
            <span>Explore More Projects ({filteredProjects.length - displayedProjects.length} remaining)</span>
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </section>
  );
}
