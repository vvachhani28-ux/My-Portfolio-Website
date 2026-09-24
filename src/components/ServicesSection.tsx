export default function ServicesSection() {
  const services = [
    {
      title: 'Exploratory Data Analysis',
      description: 'Transforming millions of raw transactional logs into actionable statistical insights, cohort segments, and diagnostic metrics.',
      svg: (
        <svg width="80" height="60" viewBox="0 0 80 60" className="text-slate-900 group-hover:scale-105 transition-transform">
          <path
            d="M10 50 L25 35 L40 45 L55 20 L70 30"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect x="10" y="45" width="5" height="5" fill="currentColor" opacity="0.4" />
          <rect x="25" y="30" width="5" height="20" fill="currentColor" opacity="0.6" />
          <rect x="40" y="40" width="5" height="10" fill="currentColor" opacity="0.5" />
          <rect x="55" y="15" width="5" height="35" fill="currentColor" />
        </svg>
      )
    },
    {
      title: 'SQL & Database Engineering',
      description: 'Architecting complex multi-table joins, subqueries, CTEs, and window functions optimized for PostgreSQL and enterprise warehouses.',
      svg: (
        <svg width="80" height="60" viewBox="0 0 80 60" className="text-slate-900 group-hover:scale-105 transition-transform">
          <rect x="10" y="8" width="60" height="14" rx="4" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <rect x="10" y="24" width="60" height="14" rx="4" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <rect x="10" y="40" width="60" height="14" rx="4" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="20" cy="15" r="2" fill="currentColor" />
          <circle cx="20" cy="31" r="2" fill="currentColor" />
          <circle cx="20" cy="47" r="2" fill="currentColor" />
          <path d="M30 15h30 M30 31h25 M30 47h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: 'Executive BI Dashboards',
      description: 'Designing interactive, decision-ready reporting suites in Power BI, Tableau, and Excel that track executive KPIs in real time.',
      svg: (
        <svg width="80" height="60" viewBox="0 0 80 60" className="text-slate-900 group-hover:scale-105 transition-transform">
          <rect x="5" y="6" width="70" height="48" rx="6" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <path d="M5 18h70" stroke="currentColor" strokeWidth="2" />
          <circle cx="14" cy="12" r="2.5" fill="currentColor" />
          <circle cx="22" cy="12" r="2.5" fill="currentColor" />
          <path d="M15 28h20v20h-20z" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M42 34h23 M42 42h18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: 'Automated ETL & Regex Scripts',
      description: 'Developing Python scripts, regex parsing engines, and scheduled pipelines that eliminate manual cleaning and prevent data drift.',
      svg: (
        <svg width="80" height="60" viewBox="0 0 80 60" className="text-slate-900 group-hover:scale-105 transition-transform">
          <circle cx="40" cy="30" r="14" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="40" cy="30" r="6" fill="currentColor" />
          <path
            d="M40 8v6 M40 46v6 M18 30h6 M56 30h6 M24 14l4 4 M52 42l4 4 M24 46l4-4 M52 18l4-4"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-12">
      <div className="mb-16">
        <span className="label">Services</span>
        <h2 className="title-serif text-3xl sm:text-4xl md:text-5xl">
          Expert Solutions for <span className="italic">Modern Challenges</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div key={service.title} className="service-card group flex flex-col justify-between">
            <div>
              <div className="mb-8 flex items-center justify-center h-20 bg-slate-50 rounded-2xl border border-slate-100 p-3">
                {service.svg}
              </div>
              <h3 className="text-xl font-serif text-slate-900 mb-3 font-normal">
                {service.title}
              </h3>
              <p className="text-slate-650 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
