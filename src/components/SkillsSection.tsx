import { useState } from 'react';
import { skillsData } from '../data/projects';
import { 
  CheckCircle2, 
  Database, 
  Award, 
  Cpu, 
  Layers, 
  Sliders, 
  Sparkles,
  Search,
  Filter
} from 'lucide-react';

export default function SkillsSection() {
  const [activeTaskIndex, setActiveTaskIndex] = useState<number>(0);

  const analyticalTasks = [
    {
      title: 'Prepare raw transaction data for modeling',
      tools: ['SQL', 'Python', 'Advanced Excel'],
      approach: 'Write recursive CTEs to combine transaction histories, clean null coordinates, and run dynamic outlier capping using Python (Pandas z-score standard deviation).',
      badge: 'Data Cleaning & ETL'
    },
    {
      title: 'Analyze marketing campaign results',
      tools: ['Python', 'R Programming', 'Advanced Excel'],
      approach: 'Set up an A/B testing framework, calculate sample size power, check Chi-Square distributions, and compute p-values to prove statistical significance in acquisition rates.',
      badge: 'Hypothesis & A/B Testing'
    },
    {
      title: 'Build executive-level operations report',
      tools: ['Power BI', 'Tableau', 'Advanced Excel'],
      approach: 'Design responsive multi-tab dashboards, model star schemas, write custom DAX variables for year-over-year rolling revenue, and configure auto-refresh schedule pipelines.',
      badge: 'Business Intelligence'
    },
    {
      title: 'Automate legacy weekly data pipeline',
      tools: ['Python', 'SQL', 'Git & GitHub'],
      approach: 'Develop custom Python scripts to load raw CSVs, map database triggers, and publish updates, tracking version increments in GitHub with automated logging logs.',
      badge: 'Task Automation'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white border-b border-slate-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-none bg-indigo-50 border border-indigo-200 text-indigo-700 text-[10px] font-bold uppercase tracking-wider mb-3">
            <Award className="h-3.5 w-3.5 text-indigo-600" />
            <span>Capability Matrix</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl font-sans">
            Technical Stack & Skill Architecture
          </h2>
          <p className="mt-4 text-base text-slate-650 leading-relaxed font-sans">
            Proficient in advanced analytical software, query frameworks, and statistics methodologies, structured to drive immediate value in technical analyst positions.
          </p>
        </div>

        {/* Skill Rails */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Languages */}
          <div className="bg-slate-50 border border-slate-200 p-6 rounded-none space-y-6 shadow-xs">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-3 font-sans">
              <Database className="h-4.5 w-4.5 text-indigo-600" />
              <span>Languages & Queries</span>
            </h3>
            
            <div className="space-y-4">
              {skillsData.languages.map((lang) => (
                <div key={lang.name} className="group">
                  <div className="flex justify-between items-center text-xs font-semibold mb-1.5">
                    <span className="text-slate-800 font-sans">{lang.name}</span>
                    <span className="text-indigo-650 font-mono font-bold">{lang.level}%</span>
                  </div>
                  {/* Progress bar */}
                  <div className="h-2 bg-slate-200 rounded-none overflow-hidden">
                    <div 
                      className="h-full bg-indigo-600 rounded-none transition-all duration-500"
                      style={{ width: `${lang.level}%` }}
                    ></div>
                  </div>
                  <span className="text-[10px] text-slate-500 block mt-1.5 font-sans leading-tight">
                    {lang.usage}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Visualization & Management */}
          <div className="bg-slate-50 border border-slate-200 p-6 rounded-none space-y-6 shadow-xs">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-3 font-sans">
              <Cpu className="h-4.5 w-4.5 text-emerald-600" />
              <span>BI Tools & Versioning</span>
            </h3>
            
            <div className="space-y-4">
              {skillsData.tools.map((tool) => (
                <div key={tool.name} className="group">
                  <div className="flex justify-between items-center text-xs font-semibold mb-1.5">
                    <span className="text-slate-800 font-sans">{tool.name}</span>
                    <span className="text-emerald-600 font-mono font-bold">{tool.level}%</span>
                  </div>
                  {/* Progress bar */}
                  <div className="h-2 bg-slate-200 rounded-none overflow-hidden">
                    <div 
                      className="h-full bg-emerald-500 rounded-none transition-all duration-500"
                      style={{ width: `${tool.level}%` }}
                    ></div>
                  </div>
                  <span className="text-[9px] text-emerald-800 bg-emerald-50 border border-emerald-250 px-2 py-0.5 rounded-none font-bold font-mono inline-block mt-1.5 uppercase tracking-wider">
                    {tool.cert}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Analytics Methodologies */}
          <div className="bg-slate-50 border border-slate-200 p-6 rounded-none space-y-6 shadow-xs">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-3 font-sans">
              <Layers className="h-4.5 w-4.5 text-indigo-600" />
              <span>Analytical Methodologies</span>
            </h3>
            
            <div className="space-y-5">
              {skillsData.methodologies.map((method) => (
                <div key={method.name} className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-indigo-650 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 leading-tight font-sans">
                      {method.name}
                    </h4>
                    {/* Visual dot representation of knowledge level */}
                    <div className="flex gap-1 mt-1.5">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <span 
                          key={idx} 
                          className={`h-1.5 w-4 rounded-none ${
                            idx < Math.round(method.level / 20) 
                              ? 'bg-indigo-600' 
                              : 'bg-slate-200'
                          }`}
                        ></span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Dynamic Skill-by-Tool Matcher Console */}
        <div className="mt-12 bg-slate-900 rounded-none p-6 sm:p-8 text-white relative overflow-hidden border border-slate-850">
          {/* Decorative grid */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:16px_16px]"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left selector col */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[10px] font-bold tracking-widest text-emerald-400 font-mono uppercase block">
                Interactive Skill Matcher
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight font-sans">
                How would I tackle a business task?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Click on any strategic task to see the specific tools in my toolkit highlighted and view my planned technical approach.
              </p>

              {/* Selector buttons */}
              <div className="space-y-2.5 pt-2">
                {analyticalTasks.map((task, idx) => (
                  <button
                    id={`task-btn-${idx}`}
                    key={task.title}
                    onClick={() => setActiveTaskIndex(idx)}
                    className={`w-full text-left p-3.5 rounded-none border text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-between cursor-pointer ${
                      idx === activeTaskIndex
                        ? 'bg-white border-white text-slate-950 shadow-none translate-x-1'
                        : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <span className="truncate pr-2">{task.title}</span>
                    <span className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-none font-mono ${
                      idx === activeTaskIndex 
                        ? 'bg-emerald-100 text-emerald-950 border border-emerald-300' 
                        : 'bg-slate-900 text-slate-400 border border-slate-850'
                    }`}>
                      {task.badge.split(' ')[0]}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right details col */}
            <div className="lg:col-span-7 bg-slate-950/80 border border-slate-800 rounded-none p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-bold text-emerald-400 font-mono uppercase tracking-wider">
                  Target Task Segment: {analyticalTasks[activeTaskIndex].badge}
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  State: ACTIVE
                </span>
              </div>

              {/* Highlighting specific skills */}
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Tools Utilized:</span>
                <div className="flex flex-wrap gap-2">
                  {skillsData.languages.map(l => {
                    const isUsed = analyticalTasks[activeTaskIndex].tools.includes(l.name);
                    return (
                      <span 
                        key={l.name}
                        className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-none border transition-all font-mono ${
                          isUsed 
                            ? 'bg-emerald-400/10 border-emerald-500/50 text-emerald-400 font-bold' 
                            : 'bg-slate-950 text-slate-600 border-slate-900 opacity-30'
                        }`}
                      >
                        {l.name}
                      </span>
                    );
                  })}
                  {skillsData.tools.map(t => {
                    const isUsed = analyticalTasks[activeTaskIndex].tools.includes(t.name);
                    return (
                      <span 
                        key={t.name}
                        className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-none border transition-all font-mono ${
                          isUsed 
                            ? 'bg-emerald-400/10 border-emerald-500/50 text-emerald-400 font-bold' 
                            : 'bg-slate-950 text-slate-600 border-slate-900 opacity-30'
                        }`}
                      >
                        {t.name}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Descriptive text */}
              <div className="pt-2.5 border-t border-slate-800 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Methodological Execution:</span>
                <p className="text-xs leading-relaxed text-slate-200 font-sans">
                  {analyticalTasks[activeTaskIndex].approach}
                </p>
              </div>

              {/* Decorative foot */}
              <div className="pt-2.5 text-[10px] text-slate-500 font-mono flex items-center gap-1.5 bg-slate-950 rounded-none p-2 border border-slate-900">
                <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                <span>This mapping emphasizes robust pipeline orchestration using clean formatting conventions.</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
