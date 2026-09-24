import { portfolioProjects } from '../data/projects';
import { 
  Building, 
  Lightbulb, 
  TrendingUp, 
  Database, 
  ArrowUpRight, 
  ChevronRight, 
  FileText 
} from 'lucide-react';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-slate-50 border-t border-slate-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-none bg-indigo-50 border border-indigo-200 text-indigo-700 text-[10px] font-bold uppercase tracking-wider mb-3">
            <Database className="h-3.5 w-3.5 text-indigo-600" />
            <span>Showcase Case Studies</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl font-sans">
            In-Depth Project Portfolio
          </h2>
          <p className="mt-4 text-base text-slate-650 leading-relaxed font-sans">
            Detailed case studies charting projects from initial business hypothesis through data cleaning, diagnostic modeling, and ultimate executive recommendations.
          </p>
        </div>

        {/* Projects list */}
        <div className="mt-16 space-y-16">
          {portfolioProjects.map((proj, idx) => {
            return (
              <div 
                id={`project-card-${proj.id}`}
                key={proj.id} 
                className="bg-white border border-slate-200 rounded-none shadow-none overflow-hidden grid grid-cols-1 lg:grid-cols-12"
              >
                {/* Details Side */}
                <div className="lg:col-span-8 p-6 sm:p-10 space-y-6">
                  
                  {/* Category & Tags Row */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 font-mono">
                      Case #{idx + 1}: {proj.category}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 bg-slate-100 text-slate-600 border border-slate-200 rounded-none">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-sans tracking-tight">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-mono mt-1 font-bold uppercase tracking-wider">
                      {proj.subtitle}
                    </p>
                    <p className="mt-4 text-sm sm:text-base text-slate-650 leading-relaxed font-sans">
                      {proj.summary}
                    </p>
                  </div>

                  {/* Problem & Approach Split Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-5 border-t border-slate-200">
                    
                    {/* Problem */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 font-sans">
                        <Building className="h-4 w-4 text-rose-600 flex-shrink-0" />
                        <span>Business Problem</span>
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-sans">
                        {proj.problem}
                      </p>
                    </div>

                    {/* Approach */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 font-sans">
                        <Lightbulb className="h-4 w-4 text-indigo-600 flex-shrink-0" />
                        <span>Analytical Methodology</span>
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-sans">
                        {proj.approach}
                      </p>
                    </div>

                  </div>

                  {/* Value / Impact Section */}
                  <div className="bg-emerald-50/40 border border-emerald-200 rounded-none p-4 sm:p-5 space-y-2">
                    <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5 font-sans">
                      <TrendingUp className="h-4 w-4 text-emerald-600" />
                      <span>Business Value & Actions Initiated</span>
                    </h4>
                    <p className="text-xs text-emerald-950 leading-relaxed font-sans">
                      {proj.impact}
                    </p>
                  </div>

                </div>

                {/* Metrics / Highlight Panel Side */}
                <div className="lg:col-span-4 bg-slate-50 border-t lg:border-t-0 lg:border-l border-slate-200 p-6 sm:p-10 flex flex-col justify-center space-y-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block border-b border-slate-200 pb-2">
                    Commercial Outcomes:
                  </span>

                  {/* Vertical stack of big metrics */}
                  <div className="space-y-6">
                    {proj.metrics.map(metric => (
                      <div key={metric.label}>
                        <span className="text-2xl sm:text-3xl font-black text-slate-900 font-mono tracking-tight block">
                          {metric.value}
                        </span>
                        <span className="text-xs font-bold text-slate-700 block mt-0.5">
                          {metric.label}
                        </span>
                        <span className="text-[11px] text-slate-500 block leading-normal mt-0.5 font-sans">
                          {metric.description}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Mini action back link to console */}
                  <div className="pt-4 border-t border-slate-200">
                    <a
                      id={`project-card-sandbox-${proj.id}`}
                      href="#sandbox"
                      onClick={(e) => {
                        e.preventDefault();
                        const consoleElem = document.querySelector('#sandbox');
                        if (consoleElem) {
                          consoleElem.scrollIntoView({ behavior: 'smooth' });
                          // Locate matching button in sandbox nav and trigger click to make it active!
                          const navButton = document.querySelector(`#proj-nav-${proj.id}`);
                          if (navButton) (navButton as HTMLButtonElement).click();
                        }
                      }}
                      className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-800 group"
                    >
                      <span>Explore this dataset in Live Console</span>
                      <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
