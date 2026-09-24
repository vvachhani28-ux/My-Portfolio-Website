export default function ProcessSection() {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Framing',
      description: 'Formulating core business hypotheses, auditing raw data integrity, and scoping executive KPIs and constraints.'
    },
    {
      num: '02',
      title: 'Strategy & ETL Pipelines',
      description: 'Architecting robust SQL joins, handling anomalies and null values, and engineering clean feature tables.'
    },
    {
      num: '03',
      title: 'Diagnostic Modeling & Execution',
      description: 'Executing exploratory cohort diagnostics, statistical significance tests, and machine learning classifications.'
    },
    {
      num: '04',
      title: 'Executive Delivery & Automation',
      description: 'Publishing interactive Power BI/Tableau dashboards and automated data pipelines ready for executive decision-making.'
    }
  ];

  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto scroll-mt-12">
      <div className="mb-16">
        <span className="label">Process</span>
        <h2 className="title-serif text-3xl sm:text-4xl md:text-5xl">
          How I Bring <span className="italic">Data to Life</span>
        </h2>
      </div>

      <div className="process-wrapper">
        <div className="process-track-line" />
        <div className="flex flex-col gap-10 relative z-10 max-w-3xl">
          {steps.map((step) => (
            <div key={step.num} className="process-card group">
              <span className="block text-[11px] font-extrabold text-slate-400 mb-2 tracking-widest font-mono">
                {step.num}
              </span>
              <h3 className="text-2xl font-serif text-slate-900 mb-3 group-hover:text-black transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
