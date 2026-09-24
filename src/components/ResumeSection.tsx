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
        ['Technical Skills', 'Languages', 'Querying & Coding', 'Python, SQL (PostgreSQL), R, JavaScript', 'Advanced Levels'],
        ['Technical Skills', 'Software', 'Business Intelligence', 'Power BI, Tableau, Advanced Excel, Git', 'Certifications Mapped'],
        ['Certifications', 'Microsoft Certification', 'PL-300 Exam', 'Microsoft Power BI Data Analyst Associate', 'Active Status'],
        ['Certifications', 'Tableau Credentials', 'Desktop Specialist', 'Tableau Desktop Specialist License', 'Active Status'],
        ['Academic Honors', 'National Competitions', 'Data-Hackathon 2025', '1st Place Winner - Predictive Modeling', '2025']
      ];

      const csvContent = "data:text/csv;charset=utf-8," 
        + csvRows.map(e => e.map(val => `"${val.replace(/"/g, '""')}"`).join(",")).join("\n");
      
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "Aarav_Mehta_Analyst_Resume_Data.csv");
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
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight font-sans">
                Aarav Mehta
              </h3>
              <p className="text-xs sm:text-sm font-bold text-indigo-700 font-mono mt-1 uppercase tracking-wider">
                Aspiring Data Analyst • Applied Statistics & CS Specialist
              </p>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-slate-550 font-semibold font-sans">
                <span>📍 San Jose, California</span>
                <span>📧 vvachhani28@gmail.com</span>
                <span>📱 (408) 555-0198</span>
                <span className="print:hidden text-indigo-600">🔗 linkedin.com/in/aarav-mehta-data</span>
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
