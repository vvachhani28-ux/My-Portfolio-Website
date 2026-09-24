import { MouseEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Languages & Core',
      skills: ['Python', 'SQL (PostgreSQL)', 'R', 'TypeScript', 'Bash', 'Markdown']
    },
    {
      title: 'Data Analytics & EDA',
      skills: ['Pandas', 'NumPy', 'Scikit-learn', 'Seaborn', 'Matplotlib', 'EDA Profiling', 'A/B Testing']
    },
    {
      title: 'Database Architecture',
      skills: ['PostgreSQL', 'MySQL', 'Recursive CTEs', 'Window Functions', 'Schema Modeling', 'Query Plan Analysis']
    },
    {
      title: 'BI & Visualization',
      skills: ['Power BI', 'Tableau', 'Excel Dashboards', 'DAX Measures', 'Power Query (M)', 'Pivot Modeling']
    },
    {
      title: 'ETL & Regex Pipelines',
      skills: ['Regex Engine Validation', 'ETL Automation', 'Anomaly Detection', 'JSON/CSV Parsers', 'Data Wrangling']
    },
    {
      title: 'Tools & Workflows',
      skills: ['Git', 'GitHub', 'Jupyter Lab', 'VS Code', 'Drizzle ORM', 'Linux Environment']
    }
  ];

  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-12">
      {/* Header */}
      <div className="mb-14">
        <span className="label">Skills in Action</span>
        <h2 className="title-serif text-3xl sm:text-4xl md:text-5xl">
          The knowledge that <span className="italic">powers</span> my work
        </h2>
      </div>

      {/* Categorized Skills Grid - 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {skillCategories.map((cat) => (
          <div
            key={cat.title}
            className="bg-white rounded-3xl p-8 border border-slate-200/60 shadow-xs hover:-translate-y-1.5 transition-all duration-300 hover:shadow-lg"
          >
            <h3 className="title-serif text-2xl text-slate-900 mb-5 font-normal">
              {cat.title}
            </h3>
            <div className="tech-chips">
              {cat.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Skills Bottom — Experience Timeline + Resume CTA */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/70 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Timeline on left (col-span-8) */}
        <div className="lg:col-span-8">
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-8 font-mono">
            Education &amp; Experience
          </h3>

          <div className="space-y-0 relative">
            {/* Timeline item 1 */}
            <div className="flex items-start gap-5">
              <div className="flex flex-col items-center">
                <div className="w-3.5 h-3.5 rounded-full bg-black ring-4 ring-white shadow-xs mt-1" />
                <div className="w-0.5 h-14 bg-dashed border-l-2 border-dashed border-slate-300 my-1" />
              </div>
              <div className="pb-4">
                <span className="exp-badge" style={{ backgroundColor: '#10B981' }}>Education</span>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
                  B.S. in Applied Statistics &amp; Computer Science (Honors)
                </h4>
                <p className="text-sm text-slate-500">
                  CHARUSAT / University Honors Program · GPA: 3.82 / 4.0
                </p>
              </div>
            </div>

            {/* Timeline item 2 */}
            <div className="flex items-start gap-5">
              <div className="flex flex-col items-center">
                <div className="w-3.5 h-3.5 rounded-full bg-black ring-4 ring-white shadow-xs mt-1" />
                <div className="w-0.5 h-14 bg-dashed border-l-2 border-dashed border-slate-300 my-1" />
              </div>
              <div className="pb-4">
                <span className="exp-badge" style={{ backgroundColor: '#3B82F6' }}>Academic Fellowship</span>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
                  Lead Undergraduate Teaching Assistant — Business Analytics
                </h4>
                <p className="text-sm text-slate-500">
                  Department of Statistics &amp; Computer Information Systems
                </p>
              </div>
            </div>

            {/* Timeline item 3 */}
            <div className="flex items-start gap-5">
              <div className="flex flex-col items-center">
                <div className="w-3.5 h-3.5 rounded-full bg-black ring-4 ring-white shadow-xs mt-1" />
              </div>
              <div>
                <span className="exp-badge" style={{ backgroundColor: '#000000' }}>Internship</span>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
                  Quantitative Data Analyst Intern
                </h4>
                <p className="text-sm text-slate-500">
                  Prodigy &amp; Sysslan Analytics Solutions · Data Engineering &amp; EDA
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Resume CTA on right (col-span-4) */}
        <div className="lg:col-span-4 flex flex-col items-start lg:items-end text-left lg:text-right gap-4 pt-6 lg:pt-0 lg:border-l lg:border-slate-100 lg:pl-10">
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Full breakdown of my statistical methodologies, certifications &amp; full 25 project repositories.
          </p>
          <a
            href="#resume"
            onClick={(e) => handleScroll(e, '#resume')}
            className="btn-pill btn-pill-primary flex items-center gap-2 text-sm"
          >
            <span>View &amp; Download Resume</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
