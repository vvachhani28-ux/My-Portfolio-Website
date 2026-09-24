import { useState } from 'react';
import { educationHistory, academicExperience } from '../data/projects';
import { 
  Download, 
  Printer, 
  BookOpen, 
  Building, 
  Award, 
  FileSpreadsheet, 
  ArrowUpRight,
  Sparkles,
  ExternalLink
} from 'lucide-react';

export default function ResumeSection() {
  const [downloadingFormat, setDownloadingFormat] = useState<string | null>(null);

  // Trigger print-to-pdf using native browser functionality
  const handlePrint = () => {
    window.print();
  };

  // Generate and download Resume data as a clean CSV table
  const handleCSVDownload = () => {
    setDownloadingFormat('CSV');
    setTimeout(() => {
      const csvRows = [
        ['Section', 'Subcategory', 'Entity/Role', 'Detail/Value', 'Timeframe/Score'],
        ['Education', 'Degree', 'Tech National University', 'B.S. Statistics & Computer Science', 'Expected 2026'],
        ['Education', 'Academic Standing', 'Tech National University', 'Dean\'s Honor List', 'Cumulative GPA: 3.82/4.00'],
        ['Experience', 'Academic Position', 'Tech National University', 'Undergraduate TA - Business Analytics', 'Sep 2024 - Present'],
        ['Experience', 'Industry Internship', 'Quantico Capital Management', 'Data Analyst Intern', 'Jun 2024 - Aug 2024'],
        ['Projects', 'Credit Risk Modeling', 'Lending Club Default Analysis', '887K+ loans, 0.824 ROC-AUC, -18.7% loss reduction', 'Python / XGBoost'],
        ['Projects', 'Spatial Sports Analytics', 'Football Match Analytics', '380+ matches, 0.89 xG correlation, +22% box entries', 'Python / StatsBomb'],
        ['Projects', 'Customer Retention', 'Telecom Churn Analysis', '7,043 accounts, 26.5% baseline, -15.3% churn cut', 'Python / Power BI'],
        ['Projects', 'Media & Box Office EDA', 'IMDb Ratings & Success EDA', '5,043 films, 110-125 min sweet-spot, 3.4x top ROI', 'Python / Seaborn'],
        ['Projects', 'Creator Analytics', 'YouTube Channels Global EDA', '1,000 top channels, 10.2T views, 48% music & entertainment', 'Python / Pandas'],
        ['Projects', 'Urban Mobility Operations', 'Ola Ride-Hailing SQL Analytics', '100K+ bookings, CTEs & window functions, +14.8% fulfillment', 'SQL / PostgreSQL'],
        ['Projects', 'Commercial BI', 'Multi-Regional Sales KPI Dashboard', '10,000+ orders, dynamic array PivotTables, +12.4% margin recovery', 'Excel / Power Query'],
        ['Projects', 'Real Estate SQL', 'Nashville Housing Data Cleaning', '56,477 records, self-join address imputation, 1,244 dupes pruned', 'SQL / PostgreSQL'],
        ['Projects', 'Information Security', 'Password Strength & Entropy Validator', 'Shannon entropy scoring, 98.6% pattern detection, <2ms latency', 'Python / Regex'],
        ['Projects', 'Statistical Profiling', 'Diagnostic EDA Foundations Benchmark', 'Skewness/outliers triage automated, 3 hrs down to 8 mins', 'Python / Pandas'],
        ['Projects', 'Consumer Economics', 'Zomato RFM Customer Segmentation', '50,000+ diners, NTILE(5) scoring, 41.3% GMV in top 8%', 'SQL / PostgreSQL'],
        ['Projects', 'Entertainment SQL', 'Digital Music Store Analytics', '11 relational tables, Rock 71.4% sales, USA/CA 38.2% gross', 'SQL / PostgreSQL'],
        ['Projects', 'Logistics SQL', 'Faasos Roll Delivery & Kitchen Ops', '100% normalized unnesting, 14.8 min avg prep, -12.5% cancels', 'SQL / PostgreSQL'],
        ['Projects', 'Retail Time Series', 'Walmart Retail Sales Modeling', 'Afternoon/Evening 64.2% rev, Branch C $328 ticket, -18% wait', 'SQL / MySQL'],
        ['Projects', 'Data Engineering', 'Universal Date Format Regex Parser', '25K+ dates, named capture groups, ISO-8601 YYYY-MM-DD', 'Python / Regex'],
        ['Projects', 'Network Security', 'IPv4 & IPv6 Telemetry Regex Extractor', '150K+ endpoints, octet bounds, 12,400 spoofed blocked', 'Python / Regex'],
        ['Projects', 'Web Intelligence', 'URL & Endpoint Extraction Pipeline', '500K docs, 88K+ links, 1,420 obfuscated redirect flags', 'Python / Regex'],
        ['Projects', 'Compliance ETL', 'Contact & Lead Extraction Regex', '80K CRM tickets, +34% phone yield, 100% PII masked', 'Python / Regex'],
        ['Projects', 'Socioeconomic EDA', 'Adult Census Income >$50K Predictors', '32,561 records, 4.2x degree odds, 38-52 peak earnings age', 'Python / Pandas'],
        ['Projects', 'App Ecosystem EDA', 'Google Play Store Ratings & Economics', '10,840 apps, 92.6% free, 20-50MB size sweet-spot', 'Python / Seaborn'],
        ['Projects', 'E-Commerce Marketplace', 'E-Commerce Customer Orders & Returns EDA', '54K+ orders, 54.8% repeat revenue, -8.4% return rate', 'Python / Seaborn'],
        ['Projects', 'Confectionery Supply Chain', 'Artisanal Chocolate Wholesale SQL Analytics', '8.4K shipments, 42.1% top truffle margin, +14% quota', 'SQL / PostgreSQL'],
        ['Projects', 'Manufacturing Costing', 'Component Cost & Workforce Capacity Excel Modeling', '450+ BOM items, -$34.2K overtime saved, +9.5% capacity', 'Advanced Excel / Sensitivity'],
        ['Projects', 'Financial Portfolio Modeling', 'Student Equity Portfolio & Stock Market Modeling', '12 assets, 1.34 Sharpe ratio, -18% volatility reduction', 'Excel / Covariance Matrix'],
        ['Projects', 'Spreadsheet Architecture', 'Core Financial & Operations Formula Design', '35+ audit templates, 4x speedup, 0% #N/A errors', 'Excel / XLOOKUP & Dynamic Arrays'],
        ['Technical Skills', 'Languages', 'Querying & Coding', 'Python, SQL (PostgreSQL), R, JavaScript', 'Advanced Levels'],
        ['Technical Skills', 'Software', 'Business Intelligence', 'Power BI, Tableau, Advanced Excel, Git', 'Certifications Mapped'],
        ['Certifications', 'Microsoft Certification', 'PL-300 Exam', 'Microsoft Power BI Data Analyst Associate', 'Active Status'],
        ['Certifications', 'Tableau Credentials', 'Desktop Specialist', 'Tableau Desktop Specialist License', 'Active Status']
      ];

      const csvContent = "data:text/csv;charset=utf-8," 
        + csvRows.map(e => e.map(val => `"${val.replace(/"/g, '""')}"`).join(",")).join("\n");
      
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "Vasu_Vachhani_Analyst_Resume_Data.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownloadingFormat(null);
    }, 600);
  };

  return (
    <section id="resume" className="py-20 bg-white border-t border-slate-200 scroll-mt-12 print:py-0 print:bg-white print:text-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 print:px-0">
        
        {/* Header - Hidden in Print */}
        <div className="text-center max-w-3xl mx-auto print:hidden">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-none bg-indigo-50 border border-indigo-200 text-indigo-700 text-[10px] font-bold uppercase tracking-wider mb-3">
            <FileSpreadsheet className="h-3.5 w-3.5 text-indigo-650" />
            <span>Structured CV & Transcripts</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl font-sans">
            Interactive Resume Console
          </h2>
          <p className="mt-4 text-base text-slate-650 leading-relaxed font-sans">
            Review my professional qualifications below. You can download my structured credentials as an analyst-friendly CSV dataset or trigger the clean PDF print layout.
          </p>

          {/* Download Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <button
              id="print-resume-btn"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4.5 py-3 rounded-none bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-none cursor-pointer border border-slate-900"
            >
              <Printer className="h-4 w-4" />
              <span>Print Resume / Save PDF</span>
            </button>

            <button
              id="download-csv-resume-btn"
              onClick={handleCSVDownload}
              className="inline-flex items-center gap-2 px-4.5 py-3 rounded-none bg-white hover:bg-slate-50 border border-slate-350 text-slate-700 font-bold text-xs uppercase tracking-wider transition-all shadow-none cursor-pointer"
              disabled={downloadingFormat !== null}
            >
              <Download className="h-4 w-4 text-emerald-650" />
              <span>
                {downloadingFormat === 'CSV' ? 'Exporting Dataset...' : 'Download structured CV (.csv)'}
              </span>
            </button>
          </div>
        </div>

        {/* Dynamic Highlight banner - Hidden in Print */}
        <div className="mt-8 rounded-none bg-indigo-50 border border-indigo-250 p-4 print:hidden flex items-start gap-3">
          <Sparkles className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-indigo-950 leading-relaxed font-sans">
            <strong className="font-bold">Analyst Advantage:</strong> The <span className="font-mono text-indigo-900 font-bold bg-white px-1.5 py-0.5 rounded-none border border-indigo-200">.csv download</span> outputs a completely normalized database relation representing this resume. Download it to test your own pivot tables and SQL scripts directly on my credentials!
          </div>
        </div>

        {/* Resume Sheet Container */}
        <div id="resume-sheet" className="mt-12 bg-white border border-slate-200 print:border-none shadow-none print:shadow-none rounded-none p-6 sm:p-12 print:p-0 space-y-8 print:space-y-6 text-slate-800">
          
          {/* Resume Header */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 border-b border-slate-300 pb-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-sans">
                Vasu Vachhani
              </h3>
              <p className="text-xs sm:text-sm font-bold text-indigo-700 font-mono mt-1 uppercase tracking-wider">
                Aspiring Data Analyst • Applied Statistics & CS Specialist
              </p>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-slate-550 font-semibold font-sans">
                <span>📍 San Jose, California</span>
                <span>📧 vvachhani28@gmail.com</span>
                <span>📱 (408) 555-0198</span>
                <span className="print:hidden text-indigo-600">🔗 linkedin.com/in/vasu-vachhani</span>
              </div>
            </div>

            {/* Print metrics */}
            <div className="text-left sm:text-right font-mono text-[11px] text-slate-500 space-y-1 sm:border-l sm:border-slate-200 sm:pl-4">
              <div>GPA: <strong className="text-slate-950 font-bold">3.82 / 4.00</strong></div>
              <div>B.S. Stats Honors</div>
              <div>Citizenship: US Citizen</div>
            </div>
          </div>

          {/* Education Block */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-700 font-mono flex items-center gap-1.5 border-b border-slate-200 pb-1.5">
              <BookOpen className="h-4 w-4" />
              <span>Education</span>
            </h4>
            
            {educationHistory.map((edu) => (
              <div key={edu.degree} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <h5 className="text-sm font-bold text-slate-900 leading-tight font-sans">
                    {edu.degree}
                  </h5>
                  <span className="text-xs font-semibold text-slate-500 font-mono">
                    {edu.duration}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between text-xs text-slate-650 font-semibold font-sans">
                  <span>{edu.institution}</span>
                  <span className="text-indigo-650 font-bold font-mono">GPA: {edu.gpa}</span>
                </div>
                <div className="space-y-1 pl-3 border-l-2 border-indigo-650 mt-2 text-xs text-slate-650 leading-relaxed font-sans">
                  <div className="font-bold text-slate-700">Coursework Emphasis:</div>
                  <div className="flex flex-wrap gap-x-2 gap-y-1.5 mt-1">
                    {edu.coursework.map((course) => (
                      <span key={course} className="bg-slate-50 border border-slate-200 px-1.5 py-0.5 rounded-none text-[10px] text-slate-600 font-mono">
                        {course}
                      </span>
                    ))}
                  </div>
                  <ul className="list-disc pl-4 mt-3 space-y-1 text-slate-600">
                    {edu.achievements.map((ach) => (
                      <li key={ach}>{ach}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Professional Experience Block */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-700 font-mono flex items-center gap-1.5 border-b border-slate-200 pb-1.5">
              <Building className="h-4 w-4" />
              <span>Academic & Internship Experience</span>
            </h4>
            
            <div className="space-y-6">
              {academicExperience.map((exp) => (
                <div key={exp.role} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                    <h5 className="text-sm font-bold text-slate-900 leading-tight font-sans">
                      {exp.role}
                    </h5>
                    <span className="text-xs font-semibold text-slate-500 font-mono">
                      {exp.duration}
                    </span>
                  </div>
                  <div className="text-xs text-slate-650 font-bold italic font-sans">
                    {exp.institution}
                  </div>
                  <ul className="list-disc pl-4 space-y-1.5 text-xs text-slate-600 leading-relaxed font-sans">
                    {exp.details.map((detail, dIdx) => (
                      <li key={dIdx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Analytical Projects in Resume */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-700 font-mono flex items-center gap-1.5 border-b border-slate-200 pb-1.5">
              <FileSpreadsheet className="h-4 w-4" />
              <span>Key Analytical Projects (GitHub)</span>
            </h4>
            <div className="space-y-3">
              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <h5 className="text-sm font-bold text-slate-900 font-sans">
                    Lending Club Loan Default Risk Assessment
                  </h5>
                  <span className="text-[11px] font-mono text-indigo-650 font-bold">
                    github.com/vvachhani28-ux/lending-club-default-analysis
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Evaluated 887k+ loans using Python, Logistic Regression & XGBoost. Modeled DTI and credit grade default patterns, attaining 0.824 ROC-AUC and demonstrating simulated portfolio loss reduction of 18.7%.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <h5 className="text-sm font-bold text-slate-900 font-sans">
                    Football Match Spatial & Expected Goals (xG) Engine
                  </h5>
                  <span className="text-[11px] font-mono text-indigo-650 font-bold">
                    github.com/vvachhani28-ux/Football-Match-Analytics
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Analyzed 380+ league matches with coordinate telemetry. Built shot quality logistic models achieving 0.89 correlation with season scoring, identifying a +22% improvement in box penetration via cutbacks.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <h5 className="text-sm font-bold text-slate-900 font-sans">
                    Telecom Customer Churn Diagnostic & Retention Engine
                  </h5>
                  <span className="text-[11px] font-mono text-indigo-650 font-bold">
                    github.com/vvachhani28-ux/Telecom_Churn_Analysis
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Diagnosed churn triggers across 7,043 subscriber profiles. Uncovered Month-to-Month survival drop-offs and structured retention intervention bundles cutting modeled churn by 15.3%.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <h5 className="text-sm font-bold text-slate-900 font-sans">
                    IMDb Movie Ratings, Box Office & Genre Success EDA
                  </h5>
                  <span className="text-[11px] font-mono text-indigo-650 font-bold">
                    github.com/vvachhani28-ux/IMDB-ratings-EDA-project
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Cleaned and explored 5,043 movie titles with Python & Seaborn. Isolated the 110–125 minute runtime rating sweet-spot and discovered that Sci-Fi and Animation deliver peak 3.4x box office ROI multipliers.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <h5 className="text-sm font-bold text-slate-900 font-sans">
                    Global YouTube Channels Performance & Monetization EDA
                  </h5>
                  <span className="text-[11px] font-mono text-indigo-650 font-bold">
                    github.com/vvachhani28-ux/Youtube-channels-EDA-project
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Evaluated the top 1,000 global YouTube channels with 10.2T cumulative views. Modeled subscriber saturation curves and demonstrated that Music and Entertainment command 48.2% of global views.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <h5 className="text-sm font-bold text-slate-900 font-sans">
                    Ola Ride-Hailing Operations & Revenue SQL Analytics
                  </h5>
                  <span className="text-[11px] font-mono text-indigo-650 font-bold">
                    github.com/vvachhani28-ux/ola-ride-hailing-sql-project
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Authored 25+ relational SQL queries with CTEs and window functions on 100,000+ booking logs. Resolved driver cancellation triggers and modeled corridor dispatches lifting fulfillment by 14.8%.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <h5 className="text-sm font-bold text-slate-900 font-sans">
                    Multi-Regional Sales KPI & Executive Margin Dashboard
                  </h5>
                  <span className="text-[11px] font-mono text-indigo-650 font-bold">
                    github.com/vvachhani28-ux/sales-kpi-dashboard-excel-project
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Consolidated 10,000+ sales orders into dynamic PivotTables and slicers. Modeled discount elasticity to curb 7.2% margin slippage, reducing executive report generation time by 85%.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <h5 className="text-sm font-bold text-slate-900 font-sans">
                    Nashville Housing Market Data Cleaning & Valuation SQL
                  </h5>
                  <span className="text-[11px] font-mono text-indigo-650 font-bold">
                    github.com/vvachhani28-ux/nashville-housing-sql-project
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Sanitized 56,477 housing registry logs. Populated 2,840 missing property addresses via ParcelID self-joins and eliminated 1,244 duplicate deed entries using CTEs with ROW_NUMBER().
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <h5 className="text-sm font-bold text-slate-900 font-sans">
                    Cybersecurity Password Strength & Entropy Validator
                  </h5>
                  <span className="text-[11px] font-mono text-indigo-650 font-bold">
                    github.com/vvachhani28-ux/password-checker-regex-project
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Engineered a Python regex security engine with Shannon entropy calculations. Successfully identified 98.6% of vulnerable credentials in a 100K breach sample at &lt;2ms latency.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <h5 className="text-sm font-bold text-slate-900 font-sans">
                    Statistical Foundations & Diagnostic Data Analysis Warm-Up
                  </h5>
                  <span className="text-[11px] font-mono text-indigo-650 font-bold">
                    github.com/vvachhani28-ux/Data-analysis-warm-up-EDA-project
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Created an automated exploratory diagnostic benchmark in Python Pandas. Normalized heavy right-skewed variables (3.42 to 0.18 skew) and reduced dataset inspection triage from 3 hours to 8 minutes.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <h5 className="text-sm font-bold text-slate-900 font-sans">
                    Zomato Customer RFM Segmentation & Cohort Order Economics
                  </h5>
                  <span className="text-[11px] font-mono text-indigo-650 font-bold">
                    github.com/vvachhani28-ux/zomato-customers-sql-project
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Segmented 50,000+ customer profiles via PostgreSQL NTILE(5) RFM scoring. Proved top 8.2% Champions generate 41.3% of platform GMV and established 14-day reactivation doubles 90-day retention.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <h5 className="text-sm font-bold text-slate-900 font-sans">
                    Digital Music Store Database & Revenue SQL Analysis
                  </h5>
                  <span className="text-[11px] font-mono text-indigo-650 font-bold">
                    github.com/vvachhani28-ux/music-store-sql-project
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Queried an 11-table relational music database. Utilized CTEs and DENSE_RANK() to identify top-selling genres per country; proved Rock accounted for 71.4% of total track sales and USA/CA drove 38.2% of revenue.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <h5 className="text-sm font-bold text-slate-900 font-sans">
                    Faasos Cloud Kitchen Delivery Operations & Customization SQL
                  </h5>
                  <span className="text-[11px] font-mono text-indigo-650 font-bold">
                    github.com/vvachhani28-ux/fasos-roll-delivery-sql-project
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Cleaned messy order logs with STRING_TO_ARRAY and UNNEST. Modeled driver delivery speed and kitchen prep bottlenecks (14.8 min average), showing multi-roll baskets spike cancellation odds by 19.4%.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <h5 className="text-sm font-bold text-slate-900 font-sans">
                    Walmart Retail Sales Performance & Branch Demand SQL Modeling
                  </h5>
                  <span className="text-[11px] font-mono text-indigo-650 font-bold">
                    github.com/vvachhani28-ux/walmart-sales-sql-project
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Analyzed store sales across time shifts and customer types using MySQL. Discovered Afternoon/Evening shifts drive 64.2% of revenue; Branch C achieved the highest average ticket size ($328).
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <h5 className="text-sm font-bold text-slate-900 font-sans">
                    Universal Date Normalizer & Format Parser Regex Engine
                  </h5>
                  <span className="text-[11px] font-mono text-indigo-650 font-bold">
                    github.com/vvachhani28-ux/date-converter-regex-project
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Standardized 12+ international date formats into ISO-8601 YYYY-MM-DD via named regex capture groups and calendar leap-year validation, achieving 99.8% precision across 25,000+ records.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <h5 className="text-sm font-bold text-slate-900 font-sans">
                    IPv4 & IPv6 Network Telemetry Extractor Regex Engine
                  </h5>
                  <span className="text-[11px] font-mono text-indigo-650 font-bold">
                    github.com/vvachhani28-ux/ip-extractor-regex-project
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Engineered octet-bounded regex algorithms parsing &gt;45K log lines/sec. Extracted 150,000+ endpoints from firewall logs and filtered 12,400 malformed/spoofed addresses without false positives.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <h5 className="text-sm font-bold text-slate-900 font-sans">
                    Web Endpoint & Hyperlink Extraction Regex Pipeline
                  </h5>
                  <span className="text-[11px] font-mono text-indigo-650 font-bold">
                    github.com/vvachhani28-ux/url-extractor-regex-project
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Extracted 88,000+ validated URLs from 500K web crawl documents with 99.4% precision. Isolated protocol schemes, query params, and flagged 1,420 obfuscated domain redirect patterns.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <h5 className="text-sm font-bold text-slate-900 font-sans">
                    Multi-Format Contact & Lead Extraction Regex Pipeline
                  </h5>
                  <span className="text-[11px] font-mono text-indigo-650 font-bold">
                    github.com/vvachhani28-ux/contact-extractor-regex-project
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Extracted E.164 phone numbers and RFC 5322 emails across 80,000 CRM tickets. Boosted phone discovery yield by 34% and automated 100% PII compliance masking before data storage.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <h5 className="text-sm font-bold text-slate-900 font-sans">
                    Adult Census Income & Socioeconomic Demographic EDA
                  </h5>
                  <span className="text-[11px] font-mono text-indigo-650 font-bold">
                    github.com/vvachhani28-ux/Adult-incomes-EDA-project
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Evaluated 32,561 US Census records in Python Pandas. Proved Bachelor degree holders have 4.2x higher odds of &gt;$50K income compared to high-school graduates, with peak earnings between ages 38–52.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <h5 className="text-sm font-bold text-slate-900 font-sans">
                    Google Play Store App Ecosystem & User Rating EDA
                  </h5>
                  <span className="text-[11px] font-mono text-indigo-650 font-bold">
                    github.com/vvachhani28-ux/Google-play-store-EDA-project
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Analyzed 10,840 Play Store apps and review sentiments. Established that 20MB–50MB file sizes yield optimal install conversions, whereas apps exceeding 100MB face an 18% conversion penalty.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <h5 className="text-sm font-bold text-slate-900 font-sans">
                    E-Commerce Marketplace Orders, Returns & Customer Lifetime EDA
                  </h5>
                  <span className="text-[11px] font-mono text-indigo-650 font-bold">
                    github.com/vvachhani28-ux/E-commerce-EDA-project
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Evaluated 54,000+ retail marketplace transactions in Python. Uncovered that repeat buyers drive 54.8% of GMV and Apparel accounts for 31.2% of product returns, driving sizing UX refinements that mitigated returns by 8.4%.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <h5 className="text-sm font-bold text-slate-900 font-sans">
                    Artisanal Chocolate Wholesale & Distribution SQL Analytics
                  </h5>
                  <span className="text-[11px] font-mono text-indigo-650 font-bold">
                    github.com/vvachhani28-ux/chocolate-sales-sql-project
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Constructed multi-table joins across 8,400+ international shipment records in PostgreSQL. Determined Dark Truffles deliver 42.1% net profit margins and restructured sales territories to elevate quota hit rate by 14%.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <h5 className="text-sm font-bold text-slate-900 font-sans">
                    Component Manufacturing Cost & Workforce Capacity Excel Modeling
                  </h5>
                  <span className="text-[11px] font-mono text-indigo-650 font-bold">
                    github.com/vvachhani28-ux/component-cost-workforce-analytics-excel-project
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Engineered an audit-ready Bill of Materials (BOM) cost sensitivity workbook in Excel modeling 450+ assembly components. Reduced overtime expenses by $34,200 annually while boosting assembly throughput by 9.5%.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <h5 className="text-sm font-bold text-slate-900 font-sans">
                    Student Equity Investment Portfolio & Stock Market Financial Modeling
                  </h5>
                  <span className="text-[11px] font-mono text-indigo-650 font-bold">
                    github.com/vvachhani28-ux/student-stock-analysis-excel-project
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Simulated a 12-ticker equity portfolio in Excel utilizing matrix covariance and dynamic price arrays. Modeled risk-adjusted Sharpe ratio of 1.34 and lowered portfolio volatility by 18% versus benchmark.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <h5 className="text-sm font-bold text-slate-900 font-sans">
                    Core Financial & Operations Formula Architecture in Excel
                  </h5>
                  <span className="text-[11px] font-mono text-indigo-650 font-bold">
                    github.com/vvachhani28-ux/formula-basics-excel-project
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Created 35+ resilient Excel formula architectures leveraging modern XLOOKUP, INDEX/MATCH, and dynamic arrays. Achieved 4x calculation speed improvements and eliminated 100% of #N/A runtime bugs.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Certifications Summary */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-700 font-mono flex items-center gap-1.5 border-b border-slate-200 pb-1.5">
              <Award className="h-4 w-4" />
              <span>Active Certifications & Credentials</span>
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 border border-slate-200 rounded-none p-4 space-y-1.5">
                <span className="text-[9px] font-bold text-indigo-700 uppercase tracking-wider block font-mono">Microsoft credentials:</span>
                <h5 className="text-xs font-bold text-slate-900 font-sans">PL-300 Microsoft Power BI Data Analyst</h5>
                <p className="text-[11px] text-slate-500 leading-normal font-sans">
                  Certified validation of skills in loading, wrangling, modeling, and visualizing enterprise datasets using Power BI.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-none p-4 space-y-1.5">
                <span className="text-[9px] font-bold text-indigo-700 uppercase tracking-wider block font-mono">Tableau credentials:</span>
                <h5 className="text-xs font-bold text-slate-900 font-sans">Tableau Desktop Specialist License</h5>
                <p className="text-[11px] text-slate-500 leading-normal font-sans">
                  Verified proficiency in core Tableau architecture, calculated fields, dashboard actions, and level-of-detail (LOD) formulas.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
