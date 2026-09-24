import { useState } from 'react';
import { portfolioProjects } from '../data/projects';
import { 
  BarChart, 
  ChevronRight, 
  Sparkles, 
  Sliders, 
  ShieldAlert,
  Target,
  Users,
  ExternalLink,
  Film,
  Video,
  Car,
  Code2,
  Terminal,
  CheckCircle2,
  FileSpreadsheet,
  Building2,
  Lock,
  Key,
  RefreshCw,
  Activity,
  Utensils,
  Check,
  X,
  AlertTriangle
} from 'lucide-react';

export default function DashboardPlayground() {
  const [activeProject, setActiveProject] = useState(portfolioProjects[0]);
  
  // Lending Club States
  const [dtiThreshold, setDtiThreshold] = useState<number>(25); // DTI % filter
  const [lendingMetricView, setLendingMetricView] = useState<'defaultRate' | 'interestRate'>('defaultRate');
  const [hoveredGrade, setHoveredGrade] = useState<string | null>(null);

  // Football Analytics States
  const [shotFilter, setShotFilter] = useState<string>('All');
  const [showGoalVectors, setShowGoalVectors] = useState<boolean>(true);
  const [hoveredShot, setHoveredShot] = useState<any | null>(null);

  // Telecom Churn States
  const [telecomViewMode, setTelecomViewMode] = useState<'percent' | 'absolute'>('percent');
  const [applyProactiveBundle, setApplyProactiveBundle] = useState<boolean>(false);

  // IMDb Ratings States
  const [imdbMetricView, setImdbMetricView] = useState<'rating' | 'roi' | 'runtime'>('roi');
  const [imdbRuntimeFilter, setImdbRuntimeFilter] = useState<number>(115); // min threshold

  // YouTube Channels States
  const [youtubeMetricView, setYoutubeMetricView] = useState<'views' | 'subs' | 'velocity'>('views');
  const [youtubeGeoFilter, setYoutubeGeoFilter] = useState<'Global' | 'US' | 'India'>('Global');

  // Ola Ride-Hailing SQL States
  const [olaMetricView, setOlaMetricView] = useState<'fulfillment' | 'revenue' | 'cancellations'>('fulfillment');
  const [showSqlQuery, setShowSqlQuery] = useState<boolean>(false);

  // 7. Sales KPI Excel States
  const [excelQuarter, setExcelQuarter] = useState<'All' | 'Q1' | 'Q2' | 'Q3' | 'Q4'>('All');
  const [excelDiscountCap, setExcelDiscountCap] = useState<number>(10); // % discount cap slider
  const [excelMetricView, setExcelMetricView] = useState<'revenue' | 'margin' | 'recovery'>('margin');

  // 8. Nashville Housing SQL States
  const [housingCleaningStage, setHousingCleaningStage] = useState<'before' | 'after'>('after');
  const [housingShowSql, setHousingShowSql] = useState<boolean>(false);

  // 9. Password Strength Regex States
  const [testPassword, setTestPassword] = useState<string>('Tr0ub4dor&3!');
  const [pwPreset, setPwPreset] = useState<string>('Tr0ub4dor&3!');

  // 10. Warm-Up EDA States
  const [edaDiagnosticMode, setEdaDiagnosticMode] = useState<'distribution' | 'outliers' | 'imputation'>('distribution');
  const [edaOutlierMethod, setEdaOutlierMethod] = useState<'IQR' | 'ZScore'>('IQR');

  // 11. Zomato Customers SQL States
  const [zomatoSegmentFilter, setZomatoSegmentFilter] = useState<string>('All');
  const [zomatoShowSql, setZomatoShowSql] = useState<boolean>(false);
  const [zomatoNudgeApplied, setZomatoNudgeApplied] = useState<boolean>(false);

  // Reset controls when active project changes
  const handleProjectSelect = (proj: any) => {
    setActiveProject(proj);
    setHoveredGrade(null);
    setHoveredShot(null);
    setShowSqlQuery(false);
    setHousingShowSql(false);
    setZomatoShowSql(false);
  };

  // -------------------------------------------------------------
  // 1. Lending Club Default Risk Explorer
  // -------------------------------------------------------------
  const renderLendingClubChart = () => {
    const rawData = activeProject.data || [];
    
    const gradeMeta: Record<string, { fico: string; volume: string; avgLoan: string }> = {
      'Grade A': { fico: '760 - 850', volume: '$342M', avgLoan: '$14,500' },
      'Grade B': { fico: '720 - 759', volume: '$518M', avgLoan: '$15,200' },
      'Grade C': { fico: '690 - 719', volume: '$620M', avgLoan: '$16,100' },
      'Grade D': { fico: '670 - 689', volume: '$410M', avgLoan: '$16,800' },
      'Grade E': { fico: '650 - 669', volume: '$215M', avgLoan: '$17,500' },
      'Grade F': { fico: '630 - 649', volume: '$95M', avgLoan: '$18,200' },
      'Grade G': { fico: '600 - 629', volume: '$38M', avgLoan: '$19,400' },
    };

    const dtiDelta = (dtiThreshold - 25) * 0.45;

    return (
      <div className="space-y-4">
        {/* Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Sliders className="h-3.5 w-3.5 text-indigo-600" />
              <span>DTI Cap Simulation:</span>
            </span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-500">15%</span>
              <input 
                id="dti-threshold-slider"
                type="range" 
                min="15" 
                max="35" 
                step="1" 
                value={dtiThreshold} 
                onChange={(e) => setDtiThreshold(parseInt(e.target.value))}
                className="w-24 sm:w-36 accent-indigo-600 cursor-pointer h-2 bg-slate-200 rounded-none appearance-none"
              />
              <span className="text-xs font-mono text-slate-500">35%</span>
              <span className="ml-1 text-xs font-bold text-indigo-700 font-mono bg-indigo-50 px-2 py-0.5 rounded-none border border-indigo-200">
                {dtiThreshold}% DTI
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Metric View:</span>
            <div className="inline-flex rounded-none bg-slate-100 p-1 border border-slate-200">
              <button 
                id="lending-default-metric-btn"
                onClick={() => setLendingMetricView('defaultRate')}
                className={`rounded-none px-3 py-1 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  lendingMetricView === 'defaultRate' 
                    ? 'bg-slate-900 text-white' 
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Default Rate (%)
              </button>
              <button 
                id="lending-interest-metric-btn"
                onClick={() => setLendingMetricView('interestRate')}
                className={`rounded-none px-3 py-1 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  lendingMetricView === 'interestRate' 
                    ? 'bg-slate-900 text-white' 
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Interest Rate (%)
              </button>
            </div>
          </div>
        </div>

        {/* Bar Chart Visualization */}
        <div className="relative rounded-none border border-slate-200 bg-slate-50/70 p-4">
          <div className="space-y-3">
            {rawData.map((d, index) => {
              const sensitivity = 0.4 + (index * 0.25);
              const dynamicDefaultRate = Math.max(3.0, Math.min(65.0, Number((d.value + dtiDelta * sensitivity).toFixed(1))));
              const interestRate = d.secondaryValue || 10;
              const meta = gradeMeta[d.label] || { fico: 'N/A', volume: '$100M', avgLoan: '$15,000' };
              const isHovered = hoveredGrade === d.label;

              const activeDisplayValue = lendingMetricView === 'defaultRate' ? dynamicDefaultRate : interestRate;
              const barWidthPercent = Math.min(100, Math.max(8, (activeDisplayValue / 60) * 100));

              let barColor = 'bg-emerald-600';
              let badgeColor = 'text-emerald-700 bg-emerald-50 border-emerald-200';
              if (index >= 2 && index <= 3) {
                barColor = 'bg-amber-500';
                badgeColor = 'text-amber-800 bg-amber-50 border-amber-200';
              } else if (index >= 4) {
                barColor = 'bg-rose-600';
                badgeColor = 'text-rose-800 bg-rose-50 border-rose-200';
              }

              return (
                <div 
                  key={d.label}
                  className="space-y-1"
                  onMouseEnter={() => setHoveredGrade(d.label)}
                  onMouseLeave={() => setHoveredGrade(null)}
                >
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 font-mono w-16">{d.label}</span>
                      <span className={`text-[10px] font-mono px-1.5 py-0.5 border ${badgeColor}`}>
                        FICO {meta.fico}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 font-mono text-xs">
                      <span className="text-slate-500 text-[11px] hidden sm:inline">Volume: {meta.volume}</span>
                      <span className="font-bold text-slate-900 w-16 text-right">
                        {activeDisplayValue}%
                      </span>
                    </div>
                  </div>

                  <div className="h-6 w-full bg-slate-200/80 rounded-none overflow-hidden relative cursor-pointer">
                    <div 
                      className={`h-full transition-all duration-300 ${barColor} ${isHovered ? 'brightness-110' : ''}`}
                      style={{ width: `${barWidthPercent}%` }}
                    />
                    {lendingMetricView === 'defaultRate' && (
                      <div 
                        className="absolute top-0 bottom-0 w-0.5 bg-slate-900 z-10 opacity-70"
                        style={{ left: `${(interestRate / 60) * 100}%` }}
                        title={`Average Interest Rate: ${interestRate}%`}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-slate-500">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <span className="h-2.5 w-2.5 bg-emerald-600 inline-block"></span> Prime (A-B)
              </span>
              <span className="flex items-center gap-1">
                <span className="h-2.5 w-2.5 bg-amber-500 inline-block"></span> Moderate (C-D)
              </span>
              <span className="flex items-center gap-1">
                <span className="h-2.5 w-2.5 bg-rose-600 inline-block"></span> Subprime (E-G)
              </span>
            </div>
            <span>*Based on 887,379 Lending Club loans</span>
          </div>
        </div>

        <div className="rounded-none bg-indigo-50/40 border border-indigo-200 p-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-900 flex items-center gap-1.5">
            <ShieldAlert className="h-3.5 w-3.5 text-indigo-600" /> Risk Engineering Takeaway
          </h4>
          <p className="mt-1 text-xs text-indigo-950 leading-relaxed font-sans">
            Notice how Grade E, F, and G default rates spike aggressively above 40% when the DTI ratio exceeds 25%. Restricting DTI to ≤25% across subprime tiers cuts expected charge-off losses by <strong className="text-indigo-900">18.7%</strong> while preserving over 91% of loan origination revenue in Prime Grades A-C.
          </p>
        </div>
      </div>
    );
  };

  // -------------------------------------------------------------
  // 2. Football Match Analytics (Pitch & Expected Goals xG)
  // -------------------------------------------------------------
  const renderFootballChart = () => {
    const rawShots = activeProject.scatterData || [];
    const filterOptions = ['All', 'High xG (>0.50)', 'Medium xG (0.20-0.50)', 'Low xG (<0.20)'];

    const filteredShots = shotFilter === 'All' 
      ? rawShots 
      : rawShots.filter(s => s.category === shotFilter);

    const mapPitchX = (latY: number) => 270 + (latY / 20) * 210;
    const mapPitchY = (distX: number) => 30 + (distX / 35) * 280;

    const getShotColor = (cat: string) => {
      if (cat.includes('High')) return 'fill-emerald-500 stroke-emerald-700';
      if (cat.includes('Medium')) return 'fill-amber-400 stroke-amber-600';
      return 'fill-rose-500 stroke-rose-700';
    };

    return (
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Shot Quality Filter:</span>
            <select 
              id="shot-filter-select"
              value={shotFilter}
              onChange={(e) => setShotFilter(e.target.value)}
              className="rounded-none border border-slate-350 bg-white px-2.5 py-1 text-xs font-bold text-slate-700 focus:border-indigo-600 focus:outline-none cursor-pointer"
            >
              {filterOptions.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Tactical Vectors:</span>
            <button
              id="toggle-vectors-btn"
              onClick={() => setShowGoalVectors(!showGoalVectors)}
              className={`rounded-none border px-3 py-1 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                showGoalVectors 
                  ? 'bg-indigo-50 border-indigo-300 text-indigo-700' 
                  : 'bg-white border-slate-200 text-slate-500 hover:text-slate-900'
              }`}
            >
              {showGoalVectors ? 'Trajectory Rays: On' : 'Trajectory Rays: Off'}
            </button>
          </div>
        </div>

        <div className="relative rounded-none border border-slate-200 bg-emerald-900/10 p-3 overflow-hidden">
          <svg viewBox="0 0 540 340" className="w-full bg-[#1b4332] rounded-none">
            <rect x="20" y="20" width="500" height="300" fill="#1b4332" stroke="#40916c" strokeWidth="2" />
            <line x1="20" y1="310" x2="520" y2="310" stroke="#40916c" strokeWidth="2" strokeDasharray="4 4" />
            
            <rect x="235" y="14" width="70" height="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="235" y1="22" x2="305" y2="22" stroke="#e2e8f0" strokeWidth="3" />

            <rect x="205" y="20" width="130" height="45" fill="none" stroke="#52b788" strokeWidth="1.5" />
            <rect x="135" y="20" width="270" height="120" fill="none" stroke="#52b788" strokeWidth="1.5" />
            <circle cx="270" cy="110" r="2.5" fill="#ffffff" />
            <path d="M 220 140 A 55 55 0 0 0 320 140" fill="none" stroke="#52b788" strokeWidth="1.5" />

            <text x="30" y="70" className="fill-[#74c69d] font-mono text-[9px]">6 yds (Goal Area)</text>
            <text x="30" y="145" className="fill-[#74c69d] font-mono text-[9px]">18 yds (Penalty Box Edge)</text>
            <text x="30" y="225" className="fill-[#74c69d] font-mono text-[9px]">25 yds (Long Range Zone)</text>
            <text x="30" y="305" className="fill-[#74c69d] font-mono text-[9px]">35 yds (Midfield Line)</text>

            {showGoalVectors && filteredShots.map((shot) => {
              const sx = mapPitchX(shot.y);
              const sy = mapPitchY(shot.x);
              return (
                <line 
                  key={`ray-${shot.label}`}
                  x1={sx} 
                  y1={sy} 
                  x2={270} 
                  y2={22} 
                  stroke="#74c69d" 
                  strokeWidth="1" 
                  strokeDasharray="2 2" 
                  opacity="0.45"
                />
              );
            })}

            {filteredShots.map((shot) => {
              const sx = mapPitchX(shot.y);
              const sy = mapPitchY(shot.x);
              const isGoal = shot.label.includes('Goal');
              const isHovered = hoveredShot?.label === shot.label;

              return (
                <g 
                  key={shot.label}
                  className="cursor-crosshair"
                  onMouseEnter={() => setHoveredShot(shot)}
                  onMouseLeave={() => setHoveredShot(null)}
                >
                  {isGoal && (
                    <circle 
                      cx={sx} 
                      cy={sy} 
                      r={isHovered ? 12 : 9} 
                      fill="none" 
                      stroke="#ffd166" 
                      strokeWidth="2" 
                      strokeDasharray="3 2"
                      className="animate-spin"
                    />
                  )}
                  <circle 
                    cx={sx} 
                    cy={sy} 
                    r={isHovered ? 7 : (shot.category.includes('High') ? 6 : 4.5)} 
                    className={`transition-all duration-150 ${getShotColor(shot.category)}`}
                    strokeWidth={isHovered ? 2.5 : 1.5}
                  />
                </g>
              );
            })}
          </svg>

          {hoveredShot && (
            <div 
              className="absolute pointer-events-none rounded-none border border-slate-900 bg-white p-3 text-xs shadow-none z-20"
              style={{
                left: `${Math.min(mapPitchX(hoveredShot.y) / 5.4, 62)}%`,
                top: `${Math.min(mapPitchY(hoveredShot.x) / 3.6 + 5, 65)}%`,
              }}
            >
              <div className="flex items-center justify-between gap-2 border-b border-slate-200 pb-1 mb-1">
                <span className="font-bold text-slate-900 font-sans">{hoveredShot.label}</span>
                <span className="text-[9px] font-mono font-bold uppercase text-emerald-700 bg-emerald-50 px-1 py-0.5 border border-emerald-200">
                  {hoveredShot.category}
                </span>
              </div>
              <div className="space-y-0.5 text-[11px] font-mono text-slate-600">
                <div>Distance to Goal: <strong className="text-slate-900">{hoveredShot.x} meters</strong></div>
                <div>Angle Deviation: <strong className="text-slate-900">{Math.abs(hoveredShot.y * 2.4).toFixed(0)}° from center</strong></div>
                <div>Calculated xG: <strong className="text-emerald-700 font-bold">{hoveredShot.category.includes('High') ? '0.64 xG' : hoveredShot.category.includes('Medium') ? '0.31 xG' : '0.07 xG'}</strong></div>
              </div>
            </div>
          )}
        </div>

        <div className="rounded-none bg-emerald-50/40 border border-emerald-200 p-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
            <Target className="h-3.5 w-3.5 text-emerald-600" /> Spatial Analytics Takeaway
          </h4>
          <p className="mt-1 text-xs text-emerald-950 leading-relaxed font-sans">
            Notice the clustering of goals inside the central 18-yard box with xG &gt; 0.50. Shots taken from outside the box have an average conversion rate under <strong className="text-emerald-900">4.8%</strong> despite accounting for 38% of match attempts. Prioritizing cutback crosses over contested long-distance shots yielded a <strong className="text-emerald-900">+22% lift</strong> in dangerous penalty box entries.
          </p>
        </div>
      </div>
    );
  };

  // -------------------------------------------------------------
  // 3. Telecom Customer Churn Diagnostic & Retention Engine
  // -------------------------------------------------------------
  const renderTelecomChurnMatrix = () => {
    const data = activeProject.cohortData;
    if (!data) return null;

    const cohortBaseCounts: Record<string, number> = {
      'Month-to-Month': 3875,
      'One-Year Plan': 1473,
      'Two-Year Plan': 1695,
      'Fiber Optic Sub': 3096,
      'DSL Sub': 2421,
    };

    const getHeatmapColor = (retentionRate: number) => {
      if (retentionRate >= 85) return 'bg-emerald-600 text-white font-bold border-emerald-700';
      if (retentionRate >= 70) return 'bg-emerald-500 text-white font-semibold border-emerald-600';
      if (retentionRate >= 55) return 'bg-emerald-300 text-emerald-950 border-emerald-400';
      if (retentionRate >= 40) return 'bg-amber-200 text-amber-950 border-amber-300';
      if (retentionRate >= 25) return 'bg-rose-200 text-rose-950 border-rose-300';
      return 'bg-rose-500 text-white font-bold border-rose-600';
    };

    return (
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Display Metric:</span>
            <div className="inline-flex rounded-none bg-slate-100 p-1 border border-slate-200">
              <button 
                id="telecom-percent-btn"
                onClick={() => setTelecomViewMode('percent')}
                className={`rounded-none px-3 py-1 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  telecomViewMode === 'percent' 
                    ? 'bg-slate-900 text-white' 
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Retention %
              </button>
              <button 
                id="telecom-absolute-btn"
                onClick={() => setTelecomViewMode('absolute')}
                className={`rounded-none px-3 py-1 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  telecomViewMode === 'absolute' 
                    ? 'bg-slate-900 text-white' 
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Surviving Subscribers
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Proactive Intervention:</span>
            <button
              id="toggle-proactive-bundle-btn"
              onClick={() => setApplyProactiveBundle(!applyProactiveBundle)}
              className={`rounded-none border px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                applyProactiveBundle 
                  ? 'bg-emerald-50 border-emerald-400 text-emerald-800 font-bold' 
                  : 'bg-white border-slate-200 text-slate-500 hover:text-slate-900'
              }`}
            >
              {applyProactiveBundle ? '✓ Retention Bundle Applied (+15.3% Lift)' : '+ Test Retention Bundle'}
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[540px] select-none p-1">
            <div className="grid grid-cols-7 gap-1.5 text-center text-[10px] font-bold tracking-wider uppercase text-slate-400 pb-2 border-b border-slate-200">
              <div className="text-left font-bold text-slate-500 pl-1">Contract Segment</div>
              <div>Subscribers</div>
              <div>Month 0</div>
              <div>Month 6</div>
              <div>Month 12</div>
              <div>Month 24</div>
              <div>Month 36+</div>
            </div>

            {data.months.map((segment, rIdx) => {
              const baseCount = cohortBaseCounts[segment] || 2000;
              return (
                <div key={segment} className="grid grid-cols-7 gap-1.5 py-1.5 text-center items-center">
                  <div className="text-left text-xs font-bold text-slate-800 pl-1 border-l-2 border-indigo-600 truncate">
                    {segment}
                  </div>
                  <div className="text-xs font-mono text-slate-500 bg-slate-50 rounded-none py-1.5 border border-slate-200">
                    {baseCount.toLocaleString()}
                  </div>
                  {data.rates[rIdx].slice(0, 5).map((baseRate, cIdx) => {
                    let rate = baseRate;
                    if (applyProactiveBundle && cIdx > 0) {
                      if (segment === 'Month-to-Month' || segment === 'Fiber Optic Sub') {
                        rate = Math.min(95, baseRate + 14);
                      }
                    }

                    const displayVal = telecomViewMode === 'percent' 
                      ? `${rate}%` 
                      : Math.round((rate / 100) * baseCount).toLocaleString();

                    return (
                      <div 
                        key={cIdx} 
                        className={`text-xs font-mono py-2 rounded-none border transition-colors ${getHeatmapColor(rate)}`}
                        title={`Retention at Month ${cIdx * 6}: ${rate}%`}
                      >
                        {displayVal}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-none bg-indigo-50/40 border border-indigo-200 p-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-900 flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 text-indigo-600" /> Retention Strategy Takeaway
          </h4>
          <p className="mt-1 text-xs text-indigo-950 leading-relaxed font-sans">
            The data confirms a massive survival cliff for <strong className="text-indigo-900">Month-to-Month contracts</strong>, where retention drops from 100% to 58% in the first 6 months. In comparison, One-Year and Two-Year contracts sustain 84%+ retention. Testing the proactive retention bundle (automating tech support check-ins and auto-pay discount) mitigates early churn by <strong className="text-indigo-900">15.3%</strong>.
          </p>
        </div>
      </div>
    );
  };

  // -------------------------------------------------------------
  // 4. IMDb Ratings & Box Office EDA Explorer
  // -------------------------------------------------------------
  const renderImdbRatingsChart = () => {
    const rawData = activeProject.data || [];
    
    // Genre specific stats
    const genreMeta: Record<string, { medianRuntime: number; voteCount: string; budgetM: number }> = {
      'Animation': { medianRuntime: 98, voteCount: '480K', budgetM: 75 },
      'Sci-Fi': { medianRuntime: 124, voteCount: '620K', budgetM: 110 },
      'Drama': { medianRuntime: 118, voteCount: '390K', budgetM: 35 },
      'Action': { medianRuntime: 122, voteCount: '550K', budgetM: 125 },
      'Comedy': { medianRuntime: 102, voteCount: '290K', budgetM: 28 },
      'Horror': { medianRuntime: 95, voteCount: '210K', budgetM: 15 },
      'Documentary': { medianRuntime: 92, voteCount: '85K', budgetM: 5 },
    };

    return (
      <div className="space-y-4">
        {/* Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Analysis Dimension:</span>
            <div className="inline-flex rounded-none bg-slate-100 p-1 border border-slate-200">
              <button 
                id="imdb-metric-roi"
                onClick={() => setImdbMetricView('roi')}
                className={`rounded-none px-3 py-1 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  imdbMetricView === 'roi' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Box Office ROI (x)
              </button>
              <button 
                id="imdb-metric-rating"
                onClick={() => setImdbMetricView('rating')}
                className={`rounded-none px-3 py-1 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  imdbMetricView === 'rating' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                IMDb Rating (1-10)
              </button>
              <button 
                id="imdb-metric-runtime"
                onClick={() => setImdbMetricView('runtime')}
                className={`rounded-none px-3 py-1 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  imdbMetricView === 'runtime' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Median Runtime (min)
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Runtime Sweet-Spot:</span>
            <span className="text-xs font-bold text-indigo-700 font-mono bg-indigo-50 px-2 py-1 rounded-none border border-indigo-200">
              110 - 125 mins
            </span>
          </div>
        </div>

        {/* Bar Visualizer */}
        <div className="rounded-none border border-slate-200 bg-slate-50/70 p-4 space-y-3">
          {rawData.map((d) => {
            const meta = genreMeta[d.label] || { medianRuntime: 110, voteCount: '300K', budgetM: 40 };
            
            let displayVal = '';
            let barWidthPercent = 0;
            let barColor = 'bg-indigo-600';

            if (imdbMetricView === 'roi') {
              const roi = d.secondaryValue || 2.0;
              displayVal = `${roi.toFixed(1)}x ROI`;
              barWidthPercent = (roi / 4.0) * 100;
              barColor = roi >= 3.0 ? 'bg-emerald-600' : roi >= 2.5 ? 'bg-indigo-600' : 'bg-slate-700';
            } else if (imdbMetricView === 'rating') {
              displayVal = `${d.value.toFixed(1)} / 10`;
              barWidthPercent = (d.value / 10.0) * 100;
              barColor = d.value >= 7.2 ? 'bg-emerald-600' : d.value >= 6.5 ? 'bg-indigo-600' : 'bg-amber-500';
            } else {
              displayVal = `${meta.medianRuntime} mins`;
              barWidthPercent = (meta.medianRuntime / 140) * 100;
              barColor = meta.medianRuntime >= 110 && meta.medianRuntime <= 125 ? 'bg-emerald-600' : 'bg-indigo-600';
            }

            return (
              <div key={d.label} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900 font-sans w-24">{d.label}</span>
                    <span className="text-[10px] font-mono text-slate-500 bg-white px-1.5 py-0.5 border border-slate-200 hidden sm:inline">
                      Avg Budget: ${meta.budgetM}M
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 bg-white px-1.5 py-0.5 border border-slate-200 hidden sm:inline">
                      Votes: {meta.voteCount}
                    </span>
                  </div>
                  <span className="font-bold text-slate-900 font-mono">{displayVal}</span>
                </div>

                <div className="h-5 w-full bg-slate-200/80 rounded-none overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-300 ${barColor}`}
                    style={{ width: `${Math.min(100, Math.max(8, barWidthPercent))}%` }}
                  />
                </div>
              </div>
            );
          })}

          <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[10px] font-mono text-slate-500">
            <span>*Based on 5,043 IMDb catalog films with box office gross data</span>
            <span className="text-indigo-600 font-bold">Python Pandas &amp; Seaborn Distributions</span>
          </div>
        </div>

        {/* Insight Box */}
        <div className="rounded-none bg-indigo-50/40 border border-indigo-200 p-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-900 flex items-center gap-1.5">
            <Film className="h-3.5 w-3.5 text-indigo-600" /> Statistical Distribution Finding
          </h4>
          <p className="mt-1 text-xs text-indigo-950 leading-relaxed font-sans">
            Animation and Sci-Fi deliver the highest box office multiplier (<strong className="text-indigo-900">3.4x and 3.2x</strong> of production cost) despite demanding higher initial budgets. In terms of audience score, films situated in the 110–125 minute window earned an average of <strong className="text-indigo-900">+0.6 points higher</strong> IMDb rating compared to sub-95 minute releases.
          </p>
        </div>
      </div>
    );
  };

  // -------------------------------------------------------------
  // 5. Global YouTube Channels Performance & Monetization EDA
  // -------------------------------------------------------------
  const renderYoutubeChannelsChart = () => {
    const rawData = activeProject.data || [];

    const categoryStats: Record<string, { viewsB: number; avgSubsM: number; uploadFreq: string; velocityScore: number }> = {
      'Entertainment': { viewsB: 2450, avgSubsM: 34.2, uploadFreq: '4.2 / wk', velocityScore: 88 },
      'Music': { viewsB: 2180, avgSubsM: 28.5, uploadFreq: '2.1 / wk', velocityScore: 94 },
      'Education': { viewsB: 840, avgSubsM: 14.2, uploadFreq: '1.8 / wk', velocityScore: 68 },
      'Gaming': { viewsB: 1240, avgSubsM: 18.6, uploadFreq: '6.5 / wk', velocityScore: 62 },
      'People & Blogs': { viewsB: 920, avgSubsM: 15.1, uploadFreq: '3.4 / wk', velocityScore: 59 },
      'Tech / HowTo': { viewsB: 480, avgSubsM: 9.8, uploadFreq: '2.0 / wk', velocityScore: 71 },
    };

    return (
      <div className="space-y-4">
        {/* Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">View Dimension:</span>
            <div className="inline-flex rounded-none bg-slate-100 p-1 border border-slate-200">
              <button 
                id="yt-metric-views"
                onClick={() => setYoutubeMetricView('views')}
                className={`rounded-none px-3 py-1 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  youtubeMetricView === 'views' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Total Views (Billions)
              </button>
              <button 
                id="yt-metric-subs"
                onClick={() => setYoutubeMetricView('subs')}
                className={`rounded-none px-3 py-1 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  youtubeMetricView === 'subs' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Avg Subscribers (M)
              </button>
              <button 
                id="yt-metric-velocity"
                onClick={() => setYoutubeMetricView('velocity')}
                className={`rounded-none px-3 py-1 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  youtubeMetricView === 'velocity' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                View Velocity Index
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Market Focus:</span>
            <select
              id="yt-geo-filter"
              value={youtubeGeoFilter}
              onChange={(e) => setYoutubeGeoFilter(e.target.value as any)}
              className="rounded-none border border-slate-350 bg-white px-2.5 py-1 text-xs font-bold text-slate-700 focus:border-indigo-600 focus:outline-none cursor-pointer"
            >
              <option value="Global">Global 1,000</option>
              <option value="US">United States Market</option>
              <option value="India">India Market</option>
            </select>
          </div>
        </div>

        {/* Bar Visualization */}
        <div className="rounded-none border border-slate-200 bg-slate-50/70 p-4 space-y-3">
          {rawData.map((d) => {
            const stats = categoryStats[d.label] || { viewsB: 500, avgSubsM: 10, uploadFreq: '2/wk', velocityScore: 50 };
            
            let val = 0;
            let labelText = '';
            let barColor = 'bg-indigo-600';

            if (youtubeMetricView === 'views') {
              val = stats.viewsB;
              labelText = `${val.toLocaleString()} Billion Views`;
              barColor = val > 2000 ? 'bg-emerald-600' : 'bg-indigo-600';
            } else if (youtubeMetricView === 'subs') {
              val = stats.avgSubsM;
              labelText = `${val}M Subscribers`;
              barColor = val > 25 ? 'bg-emerald-600' : 'bg-indigo-600';
            } else {
              val = stats.velocityScore;
              labelText = `${val} / 100 Index`;
              barColor = val > 80 ? 'bg-emerald-600' : val > 65 ? 'bg-indigo-600' : 'bg-amber-500';
            }

            const maxVal = youtubeMetricView === 'views' ? 2600 : youtubeMetricView === 'subs' ? 40 : 100;
            const widthPct = Math.min(100, Math.max(8, (val / maxVal) * 100));

            return (
              <div key={d.label} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900 font-sans w-28">{d.label}</span>
                    <span className="text-[10px] font-mono text-slate-500 bg-white px-1.5 py-0.5 border border-slate-200 hidden sm:inline">
                      Uploads: {stats.uploadFreq}
                    </span>
                  </div>
                  <span className="font-bold text-slate-900 font-mono">{labelText}</span>
                </div>

                <div className="h-5 w-full bg-slate-200/80 rounded-none overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-300 ${barColor}`}
                    style={{ width: `${widthPct}%` }}
                  />
                </div>
              </div>
            );
          })}

          <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[10px] font-mono text-slate-500">
            <span>*Aggregated metrics for top 1,000 global YouTube channels</span>
            <span className="text-indigo-600 font-bold">10.2 Trillion Views Analyzed</span>
          </div>
        </div>

        {/* Insight Box */}
        <div className="rounded-none bg-indigo-50/40 border border-indigo-200 p-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-900 flex items-center gap-1.5">
            <Video className="h-3.5 w-3.5 text-indigo-600" /> Content Velocity & Saturation Finding
          </h4>
          <p className="mt-1 text-xs text-indigo-950 leading-relaxed font-sans">
            Gaming channels average the highest weekly upload frequency (6.5 videos/week) but show diminished view velocity per upload. By contrast, <strong className="text-indigo-900">Music and Entertainment</strong> capture 48.2% of all cumulative views with only 2–4 strategic uploads per week, establishing high evergreen retention value.
          </p>
        </div>
      </div>
    );
  };

  // -------------------------------------------------------------
  // 6. Ola Ride-Hailing Operations & Revenue SQL Analytics
  // -------------------------------------------------------------
  const renderOlaSqlChart = () => {
    const rawData = activeProject.data || [];

    const olaVehicleMeta: Record<string, { totalRides: string; avgFare: number; driverCancelPct: number; customerCancelPct: number }> = {
      'Prime Sedan': { totalRides: '28,450', avgFare: 420, driverCancelPct: 11.2, customerCancelPct: 6.4 },
      'Mini': { totalRides: '41,200', avgFare: 310, driverCancelPct: 15.8, customerCancelPct: 6.1 },
      'Prime SUV': { totalRides: '12,180', avgFare: 580, driverCancelPct: 8.9, customerCancelPct: 5.5 },
      'Auto': { totalRides: '15,640', avgFare: 140, driverCancelPct: 22.4, customerCancelPct: 6.3 },
      'Bike': { totalRides: '9,820', avgFare: 85, driverCancelPct: 7.1, customerCancelPct: 3.7 },
    };

    const sqlSample = `WITH hourly_booking_metrics AS (
  SELECT 
    vehicle_type,
    EXTRACT(HOUR FROM booking_timestamp) AS booking_hour,
    COUNT(booking_id) AS total_requests,
    SUM(CASE WHEN booking_status = 'Completed' THEN 1 ELSE 0 END) AS completed_rides,
    SUM(CASE WHEN booking_status = 'Driver Canceled' THEN 1 ELSE 0 END) AS driver_cancels,
    AVG(trip_fare) AS avg_trip_fare
  FROM ola_rides
  WHERE booking_date >= CURRENT_DATE - INTERVAL '90 days'
  GROUP BY vehicle_type, EXTRACT(HOUR FROM booking_timestamp)
)
SELECT 
  vehicle_type,
  ROUND(SUM(completed_rides)::NUMERIC / NULLIF(SUM(total_requests), 0) * 100, 2) AS fulfillment_rate_pct,
  ROUND(AVG(avg_trip_fare)::NUMERIC, 2) AS avg_fare_inr,
  RANK() OVER (ORDER BY SUM(completed_rides) DESC) AS volume_rank
FROM hourly_booking_metrics
WHERE booking_hour BETWEEN 17 AND 20 -- Evening Rush Hour (5-8 PM)
GROUP BY vehicle_type
ORDER BY fulfillment_rate_pct DESC;`;

    return (
      <div className="space-y-4">
        {/* Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Operational Metric:</span>
            <div className="inline-flex rounded-none bg-slate-100 p-1 border border-slate-200">
              <button 
                id="ola-metric-fulfillment"
                onClick={() => setOlaMetricView('fulfillment')}
                className={`rounded-none px-3 py-1 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  olaMetricView === 'fulfillment' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Fulfillment Rate (%)
              </button>
              <button 
                id="ola-metric-revenue"
                onClick={() => setOlaMetricView('revenue')}
                className={`rounded-none px-3 py-1 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  olaMetricView === 'revenue' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Avg Trip Fare (₹ INR)
              </button>
              <button 
                id="ola-metric-cancellations"
                onClick={() => setOlaMetricView('cancellations')}
                className={`rounded-none px-3 py-1 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  olaMetricView === 'cancellations' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Driver Cancellation (%)
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="toggle-sql-query-btn"
              onClick={() => setShowSqlQuery(!showSqlQuery)}
              className={`rounded-none border px-3 py-1 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                showSqlQuery 
                  ? 'bg-slate-900 border-slate-900 text-white' 
                  : 'bg-white border-slate-200 text-slate-700 hover:text-slate-900'
              }`}
            >
              <Code2 className="h-3.5 w-3.5" />
              <span>{showSqlQuery ? 'Hide SQL Query' : 'View SQL Query (CTE)'}</span>
            </button>
          </div>
        </div>

        {/* Interactive SQL Query Drawer */}
        {showSqlQuery && (
          <div className="rounded-none bg-slate-950 text-slate-200 p-4 font-mono text-xs overflow-x-auto border border-slate-800">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2 text-slate-400">
              <span className="flex items-center gap-1.5 text-indigo-400 font-bold">
                <Terminal className="h-3.5 w-3.5" />
                <span>PostgreSQL CTE &amp; Window Function Query</span>
              </span>
              <span className="text-[10px] text-emerald-400 font-mono">Status: Executed (24ms)</span>
            </div>
            <pre className="text-[11px] leading-relaxed text-slate-300">
              {sqlSample}
            </pre>
          </div>
        )}

        {/* Bar Visualizer */}
        <div className="rounded-none border border-slate-200 bg-slate-50/70 p-4 space-y-3">
          {rawData.map((d) => {
            const meta = olaVehicleMeta[d.label] || { totalRides: '20,000', avgFare: 300, driverCancelPct: 12, customerCancelPct: 5 };
            
            let val = 0;
            let displayVal = '';
            let barColor = 'bg-indigo-600';

            if (olaMetricView === 'fulfillment') {
              val = d.value;
              displayVal = `${val.toFixed(1)}% Completed`;
              barColor = val >= 85 ? 'bg-emerald-600' : val >= 75 ? 'bg-indigo-600' : 'bg-amber-500';
            } else if (olaMetricView === 'revenue') {
              val = meta.avgFare;
              displayVal = `₹${val} INR`;
              barColor = val >= 400 ? 'bg-emerald-600' : 'bg-indigo-600';
            } else {
              val = meta.driverCancelPct;
              displayVal = `${val.toFixed(1)}% Driver Cancel`;
              barColor = val <= 10 ? 'bg-emerald-600' : val <= 16 ? 'bg-amber-500' : 'bg-rose-600';
            }

            const maxVal = olaMetricView === 'fulfillment' ? 100 : olaMetricView === 'revenue' ? 600 : 25;
            const widthPct = Math.min(100, Math.max(8, (val / maxVal) * 100));

            return (
              <div key={d.label} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900 font-sans w-24">{d.label}</span>
                    <span className="text-[10px] font-mono text-slate-500 bg-white px-1.5 py-0.5 border border-slate-200 hidden sm:inline">
                      Total Rides: {meta.totalRides}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 bg-white px-1.5 py-0.5 border border-slate-200 hidden sm:inline">
                      Customer Drop: {meta.customerCancelPct}%
                    </span>
                  </div>
                  <span className="font-bold text-slate-900 font-mono">{displayVal}</span>
                </div>

                <div className="h-5 w-full bg-slate-200/80 rounded-none overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-300 ${barColor}`}
                    style={{ width: `${widthPct}%` }}
                  />
                </div>
              </div>
            );
          })}

          <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[10px] font-mono text-slate-500">
            <span>*Computed from 100,000+ transactional ride logs</span>
            <span className="text-indigo-600 font-bold">PostgreSQL Window Analytics</span>
          </div>
        </div>

        {/* Insight Box */}
        <div className="rounded-none bg-indigo-50/40 border border-indigo-200 p-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-900 flex items-center gap-1.5">
            <Car className="h-3.5 w-3.5 text-indigo-600" /> Operational Mobility Takeaway
          </h4>
          <p className="mt-1 text-xs text-indigo-950 leading-relaxed font-sans">
            Auto rickshaws suffer the highest driver cancellation rate (<strong className="text-indigo-900">22.4%</strong>) during peak commute hours, primarily driven by short-distance or cash payment preferences. In contrast, <strong className="text-indigo-900">Bike and Prime SUV</strong> maintain the highest fulfillment resilience (&gt;85%), pointing to opportunities for targeted corridor incentives to lift overall GMV by 14.8%.
          </p>
        </div>
      </div>
    );
  };

  // -------------------------------------------------------------
  // 7. Sales KPI Dashboard & Executive Margin Modeling (Excel)
  // -------------------------------------------------------------
  const renderSalesKpiChart = () => {
    const regions = [
      { name: 'North America', baseSales: 4.82, baseMargin: 28.4, orders: 4210, discountRate: 14.2 },
      { name: 'Europe', baseSales: 3.65, baseMargin: 24.1, orders: 3180, discountRate: 12.8 },
      { name: 'Asia-Pacific', baseSales: 5.12, baseMargin: 31.8, orders: 4890, discountRate: 9.4 },
      { name: 'Latin America', baseSales: 1.94, baseMargin: 21.5, orders: 1650, discountRate: 16.5 },
      { name: 'Middle East', baseSales: 1.45, baseMargin: 26.2, orders: 1220, discountRate: 11.0 }
    ];

    const quarterMultipliers: Record<string, number> = {
      'All': 1.0,
      'Q1': 0.22,
      'Q2': 0.25,
      'Q3': 0.24,
      'Q4': 0.29
    };

    const multiplier = quarterMultipliers[excelQuarter] || 1.0;

    return (
      <div className="space-y-4">
        {/* Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Quarter Slicer:</span>
            <div className="inline-flex rounded-none bg-slate-100 p-1 border border-slate-200">
              {(['All', 'Q1', 'Q2', 'Q3', 'Q4'] as const).map(q => (
                <button
                  key={q}
                  id={`excel-q-${q}`}
                  onClick={() => setExcelQuarter(q)}
                  className={`rounded-none px-2.5 py-1 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    excelQuarter === q ? 'bg-slate-900 text-white' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Sliders className="h-3.5 w-3.5 text-indigo-600" />
              <span>Discount Cap:</span>
            </span>
            <div className="flex items-center gap-2">
              <input
                id="excel-discount-slider"
                type="range"
                min="5"
                max="20"
                step="1"
                value={excelDiscountCap}
                onChange={(e) => setExcelDiscountCap(parseInt(e.target.value))}
                className="w-24 accent-indigo-600 cursor-pointer h-2 bg-slate-200 rounded-none appearance-none"
              />
              <span className="text-xs font-bold text-indigo-700 font-mono bg-indigo-50 px-2 py-0.5 border border-indigo-200">
                ≤ {excelDiscountCap}%
              </span>
            </div>
          </div>
        </div>

        {/* Pivot Summary Visualizer */}
        <div className="rounded-none border border-slate-200 bg-slate-50/70 p-4 space-y-3">
          {regions.map((r) => {
            const currentDiscount = r.discountRate;
            const excessDiscount = Math.max(0, currentDiscount - excelDiscountCap);
            const recoveredMargin = excessDiscount * 0.85;
            const finalMargin = Number((r.baseMargin + recoveredMargin).toFixed(1));
            const salesM = Number((r.baseSales * multiplier).toFixed(2));
            const ordersCount = Math.round(r.orders * multiplier);

            const displayVal = excelMetricView === 'margin' 
              ? `${finalMargin}% Margin` 
              : `$${salesM}M Gross Sales`;

            const barWidth = excelMetricView === 'margin' ? (finalMargin / 40) * 100 : (salesM / 5.5) * 100;
            const barColor = finalMargin >= 28 ? 'bg-emerald-600' : finalMargin >= 24 ? 'bg-indigo-600' : 'bg-amber-500';

            return (
              <div key={r.name} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900 font-sans w-28">{r.name}</span>
                    <span className="text-[10px] font-mono text-slate-500 bg-white px-1.5 py-0.5 border border-slate-200 hidden sm:inline">
                      Orders: {ordersCount.toLocaleString()}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 bg-white px-1.5 py-0.5 border border-slate-200 hidden sm:inline">
                      Discount: {currentDiscount}%
                    </span>
                    {recoveredMargin > 0 && (
                      <span className="text-[10px] font-mono text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 border border-emerald-200">
                        +{recoveredMargin.toFixed(1)}% Recov.
                      </span>
                    )}
                  </div>
                  <span className="font-bold text-slate-900 font-mono">{displayVal}</span>
                </div>

                <div className="h-5 w-full bg-slate-200/80 rounded-none overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${barColor}`}
                    style={{ width: `${Math.min(100, Math.max(8, barWidth))}%` }}
                  />
                </div>
              </div>
            );
          })}

          <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[10px] font-mono text-slate-500">
            <span>*Aggregated from 10,000+ transactional sales orders</span>
            <span className="text-indigo-600 font-bold">Excel Dynamic Arrays &amp; Pivot Slicers</span>
          </div>
        </div>

        {/* Takeaway */}
        <div className="rounded-none bg-indigo-50/40 border border-indigo-200 p-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-900 flex items-center gap-1.5">
            <FileSpreadsheet className="h-3.5 w-3.5 text-indigo-600" /> Excel BI Modeling Takeaway
          </h4>
          <p className="mt-1 text-xs text-indigo-950 leading-relaxed font-sans">
            By capping unmonitored promotional discounts at 10%, Latin America and North America recover over <strong className="text-indigo-900">+3.5% to +4.2% net profit margin</strong>. Replacing manual static sheets with Power Query and dynamic PivotTable slicers reduced executive reporting preparation time by <strong className="text-indigo-900">85%</strong>.
          </p>
        </div>
      </div>
    );
  };

  // -------------------------------------------------------------
  // 8. Nashville Housing Market Data Cleaning & Valuation SQL
  // -------------------------------------------------------------
  const renderNashvilleHousingChart = () => {
    const rawDataSample = [
      {
        parcelId: '093 08 0 028.00',
        rawAddress: 'NULL',
        cleanAddress: '1808 FOXBORO DR, NASHVILLE',
        rawDate: 'April 9, 2013',
        cleanDate: '2013-04-09',
        rawVacant: 'Y',
        cleanVacant: 'Yes',
        rawOwner: 'SMITH, JOHN & JANE',
        cleanStreet: '1808 FOXBORO DR',
        cleanCity: 'NASHVILLE',
        cleanState: 'TN',
        status: 'Address Imputed via Self-Join'
      },
      {
        parcelId: '093 08 0 031.00',
        rawAddress: 'NULL',
        cleanAddress: '1814 FOXBORO DR, NASHVILLE',
        rawDate: 'June 10, 2014',
        cleanDate: '2014-06-10',
        rawVacant: 'N',
        cleanVacant: 'No',
        rawOwner: 'WILLIAMS, ROBERT',
        cleanStreet: '1814 FOXBORO DR',
        cleanCity: 'NASHVILLE',
        cleanState: 'TN',
        status: 'Address Imputed via Self-Join'
      },
      {
        parcelId: '081 12 0 014.00',
        rawAddress: '2118 8TH AVE N',
        cleanAddress: '2118 8TH AVE N, NASHVILLE',
        rawDate: 'January 15, 2015',
        cleanDate: '2015-01-15',
        rawVacant: 'Yes',
        cleanVacant: 'Yes',
        rawOwner: 'DOE, ARTHUR',
        cleanStreet: '2118 8TH AVE N',
        cleanCity: 'NASHVILLE',
        cleanState: 'TN',
        status: 'Duplicate Deed Row Pruned'
      }
    ];

    const sqlScript = `-- 1. Populate Missing Property Addresses using Self-Join on ParcelID
UPDATE a
SET PropertyAddress = ISNULL(a.PropertyAddress, b.PropertyAddress)
FROM NashvilleHousing a
JOIN NashvilleHousing b
  ON a.ParcelID = b.ParcelID
  AND a.[UniqueID ] <> b.[UniqueID ]
WHERE a.PropertyAddress IS NULL;

-- 2. Parse Concatenated Owner Address into Individual Columns
ALTER TABLE NashvilleHousing
ADD OwnerSplitAddress Nvarchar(255), OwnerSplitCity Nvarchar(255), OwnerSplitState Nvarchar(255);

UPDATE NashvilleHousing
SET OwnerSplitAddress = PARSENAME(REPLACE(OwnerAddress, ',', '.'), 3),
    OwnerSplitCity    = PARSENAME(REPLACE(OwnerAddress, ',', '.'), 2),
    OwnerSplitState   = PARSENAME(REPLACE(OwnerAddress, ',', '.'), 1);

-- 3. Standardize 'SoldAsVacant' (Y/N to Yes/No)
UPDATE NashvilleHousing
SET SoldAsVacant = CASE 
    WHEN SoldAsVacant = 'Y' THEN 'Yes'
    WHEN SoldAsVacant = 'N' THEN 'No'
    ELSE SoldAsVacant
END;

-- 4. Eliminate Duplicate Records via CTE and ROW_NUMBER()
WITH RowNumCTE AS (
  SELECT *,
    ROW_NUMBER() OVER (
      PARTITION BY ParcelID, PropertyAddress, SalePrice, SaleDate, LegalReference
      ORDER BY UniqueID
    ) row_num
  FROM NashvilleHousing
)
DELETE FROM RowNumCTE WHERE row_num > 1;`;

    return (
      <div className="space-y-4">
        {/* Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Data State:</span>
            <div className="inline-flex rounded-none bg-slate-100 p-1 border border-slate-200">
              <button
                id="housing-after-btn"
                onClick={() => setHousingCleaningStage('after')}
                className={`rounded-none px-3 py-1 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  housingCleaningStage === 'after' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Cleaned Production Table (100%)
              </button>
              <button
                id="housing-before-btn"
                onClick={() => setHousingCleaningStage('before')}
                className={`rounded-none px-3 py-1 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  housingCleaningStage === 'before' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Raw Uncleaned Schema (Dirty)
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="toggle-housing-sql-btn"
              onClick={() => setHousingShowSql(!housingShowSql)}
              className={`rounded-none border px-3 py-1 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                housingShowSql ? 'bg-slate-900 border-slate-900 text-white' : 'bg-white border-slate-200 text-slate-700 hover:text-slate-900'
              }`}
            >
              <Code2 className="h-3.5 w-3.5" />
              <span>{housingShowSql ? 'Hide Cleaning SQL' : 'View SQL Transformation Script'}</span>
            </button>
          </div>
        </div>

        {/* Interactive SQL Drawer */}
        {housingShowSql && (
          <div className="rounded-none bg-slate-950 text-slate-200 p-4 font-mono text-xs overflow-x-auto border border-slate-800">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2 text-slate-400">
              <span className="flex items-center gap-1.5 text-indigo-400 font-bold">
                <Terminal className="h-3.5 w-3.5" />
                <span>PostgreSQL / T-SQL Data Wrangling Script</span>
              </span>
              <span className="text-[10px] text-emerald-400 font-mono">1,244 Duplicates Pruned</span>
            </div>
            <pre className="text-[11px] leading-relaxed text-slate-300">
              {sqlScript}
            </pre>
          </div>
        )}

        {/* Data Sample Preview */}
        <div className="rounded-none border border-slate-200 overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-slate-100 text-[10px] uppercase tracking-wider text-slate-500 border-b border-slate-200">
              <tr>
                <th className="p-2.5">ParcelID</th>
                <th className="p-2.5">Property Address</th>
                <th className="p-2.5">Sale Date</th>
                <th className="p-2.5">Sold As Vacant</th>
                <th className="p-2.5">Owner City/State</th>
                <th className="p-2.5">Data Integrity Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {rawDataSample.map((row) => (
                <tr key={row.parcelId} className="hover:bg-slate-50">
                  <td className="p-2.5 font-bold text-slate-900">{row.parcelId}</td>
                  <td className="p-2.5">
                    {housingCleaningStage === 'before' ? (
                      <span className="text-rose-600 bg-rose-50 px-1 py-0.5 border border-rose-200">{row.rawAddress}</span>
                    ) : (
                      <span className="text-emerald-700 bg-emerald-50 px-1 py-0.5 border border-emerald-200">{row.cleanAddress}</span>
                    )}
                  </td>
                  <td className="p-2.5 text-slate-600">
                    {housingCleaningStage === 'before' ? row.rawDate : row.cleanDate}
                  </td>
                  <td className="p-2.5">
                    {housingCleaningStage === 'before' ? (
                      <span className="text-amber-700 bg-amber-50 px-1 py-0.5 border border-amber-200">{row.rawVacant}</span>
                    ) : (
                      <span className="text-emerald-700 bg-emerald-50 px-1 py-0.5 border border-emerald-200">{row.cleanVacant}</span>
                    )}
                  </td>
                  <td className="p-2.5 text-slate-600">
                    {housingCleaningStage === 'before' ? (
                      <span className="text-slate-400">Unparsed String</span>
                    ) : (
                      `${row.cleanCity}, ${row.cleanState}`
                    )}
                  </td>
                  <td className="p-2.5">
                    <span className="text-[10px] font-bold uppercase text-indigo-700 bg-indigo-50 px-1.5 py-0.5 border border-indigo-200">
                      {housingCleaningStage === 'before' ? 'Pending Sanitization' : row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Takeaway */}
        <div className="rounded-none bg-indigo-50/40 border border-indigo-200 p-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-900 flex items-center gap-1.5">
            <Building2 className="h-3.5 w-3.5 text-indigo-600" /> SQL Wrangling Impact
          </h4>
          <p className="mt-1 text-xs text-indigo-950 leading-relaxed font-sans">
            Self-joining on <code className="font-mono bg-indigo-100 px-1">ParcelID</code> restored <strong className="text-indigo-900">2,840 missing property addresses</strong> without requiring external API calls. Pruning 1,244 duplicate deed entries via <code className="font-mono bg-indigo-100 px-1">ROW_NUMBER()</code> prevented artificial transaction volume inflation and raised model R² to 0.79.
          </p>
        </div>
      </div>
    );
  };

  // -------------------------------------------------------------
  // 9. Cybersecurity Password Strength & Entropy Validator
  // -------------------------------------------------------------
  const renderPasswordChecker = () => {
    const presets = [
      { label: 'Common Weak', pw: '12345678' },
      { label: 'Predictable Word', pw: 'P@ssword1!' },
      { label: 'Recommended Strong', pw: 'Tr0ub4dor&3!' },
      { label: 'Passphrase Entropy', pw: 'Correct-Horse-Battery-Staple-2026' }
    ];

    const hasLower = /[a-z]/.test(testPassword);
    const hasUpper = /[A-Z]/.test(testPassword);
    const hasDigit = /[0-9]/.test(testPassword);
    const hasSpecial = /[^A-Za-z0-9]/.test(testPassword);
    const hasLength = testPassword.length >= 12;
    const hasNoWalks = !/(12345|qwerty|asdfgh|password|admin)/i.test(testPassword);

    let pool = 0;
    if (hasLower) pool += 26;
    if (hasUpper) pool += 26;
    if (hasDigit) pool += 10;
    if (hasSpecial) pool += 32;
    const entropyBits = Math.max(0, Math.round(testPassword.length * Math.log2(Math.max(2, pool))));

    let tierLabel = 'Critically Vulnerable';
    let tierColor = 'text-rose-700 bg-rose-50 border-rose-200';
    let crackTime = 'Instant (< 0.001 sec)';
    let score = 20;

    if (entropyBits >= 85) {
      tierLabel = 'Cryptographic / Military Grade';
      tierColor = 'text-emerald-700 bg-emerald-50 border-emerald-200';
      crackTime = '12 Trillion Years';
      score = 100;
    } else if (entropyBits >= 60) {
      tierLabel = 'Enterprise Strong';
      tierColor = 'text-emerald-700 bg-emerald-50 border-emerald-200';
      crackTime = '42,000 Years';
      score = 85;
    } else if (entropyBits >= 40) {
      tierLabel = 'Moderate';
      tierColor = 'text-amber-700 bg-amber-50 border-amber-200';
      crackTime = '3 Days';
      score = 55;
    } else if (entropyBits >= 25) {
      tierLabel = 'Weak (Predictable)';
      tierColor = 'text-rose-700 bg-rose-50 border-rose-200';
      crackTime = '4 Minutes';
      score = 35;
    }

    return (
      <div className="space-y-4">
        {/* Test input and presets */}
        <div className="space-y-2 border-b border-slate-200 pb-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Lock className="h-3.5 w-3.5 text-indigo-600" />
              <span>Test Password / Regex Input:</span>
            </span>
            <span className={`text-xs font-mono font-bold px-2 py-0.5 border ${tierColor}`}>
              {tierLabel} ({entropyBits} bits)
            </span>
          </div>

          <input
            id="password-input"
            type="text"
            value={testPassword}
            onChange={(e) => setTestPassword(e.target.value)}
            placeholder="Type any test credential..."
            className="w-full rounded-none border border-slate-350 bg-white px-3 py-2 text-sm font-mono font-bold text-slate-900 focus:border-indigo-600 focus:outline-none"
          />

          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="text-[10px] uppercase font-bold text-slate-400 mr-1">Load Presets:</span>
            {presets.map(p => (
              <button
                key={p.label}
                onClick={() => setTestPassword(p.pw)}
                className="text-[10px] font-mono px-2 py-0.5 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 rounded-none cursor-pointer"
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Live Regex Checklist */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          <div className={`p-2 border rounded-none text-xs flex items-center justify-between ${hasLength ? 'bg-emerald-50/60 border-emerald-200 text-emerald-900' : 'bg-rose-50/60 border-rose-200 text-rose-900'}`}>
            <span>Length &ge; 12 chars</span>
            {hasLength ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <X className="h-3.5 w-3.5 text-rose-600" />}
          </div>
          <div className={`p-2 border rounded-none text-xs flex items-center justify-between ${hasUpper && hasLower ? 'bg-emerald-50/60 border-emerald-200 text-emerald-900' : 'bg-rose-50/60 border-rose-200 text-rose-900'}`}>
            <span>Upper &amp; Lower Case</span>
            {hasUpper && hasLower ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <X className="h-3.5 w-3.5 text-rose-600" />}
          </div>
          <div className={`p-2 border rounded-none text-xs flex items-center justify-between ${hasDigit ? 'bg-emerald-50/60 border-emerald-200 text-emerald-900' : 'bg-rose-50/60 border-rose-200 text-rose-900'}`}>
            <span>Contains Digits (0-9)</span>
            {hasDigit ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <X className="h-3.5 w-3.5 text-rose-600" />}
          </div>
          <div className={`p-2 border rounded-none text-xs flex items-center justify-between ${hasSpecial ? 'bg-emerald-50/60 border-emerald-200 text-emerald-900' : 'bg-rose-50/60 border-rose-200 text-rose-900'}`}>
            <span>Special Characters (!@#)</span>
            {hasSpecial ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <X className="h-3.5 w-3.5 text-rose-600" />}
          </div>
          <div className={`p-2 border rounded-none text-xs flex items-center justify-between ${hasNoWalks ? 'bg-emerald-50/60 border-emerald-200 text-emerald-900' : 'bg-rose-50/60 border-rose-200 text-rose-900'}`}>
            <span>No Dictionary / Walks</span>
            {hasNoWalks ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <X className="h-3.5 w-3.5 text-rose-600" />}
          </div>
          <div className="p-2 border border-slate-200 bg-slate-50 rounded-none text-xs flex items-center justify-between text-slate-700">
            <span>Brute Force Est:</span>
            <strong className="font-mono text-indigo-700">{crackTime}</strong>
          </div>
        </div>

        {/* Takeaway */}
        <div className="rounded-none bg-indigo-50/40 border border-indigo-200 p-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-900 flex items-center gap-1.5">
            <Key className="h-3.5 w-3.5 text-indigo-600" /> Information Security Finding
          </h4>
          <p className="mt-1 text-xs text-indigo-950 leading-relaxed font-sans">
            Naive complexity rules can be defeated by simple substitutions (e.g. <code className="font-mono bg-indigo-100 px-1">P@ssword1!</code> has only 34 bits of entropy). Calculating mathematical Shannon entropy and enforcing multi-tier regex dictionary exclusions reliably blocks <strong className="text-indigo-900">98.6% of breach-vulnerable passwords</strong> at under 2ms latency.
          </p>
        </div>
      </div>
    );
  };

  // -------------------------------------------------------------
  // 10. Statistical Foundations & Diagnostic Data Analysis Warm-Up
  // -------------------------------------------------------------
  const renderWarmUpEdaChart = () => {
    const variableProfiles = [
      { name: 'Household Income ($)', rawSkew: 3.42, logSkew: 0.18, outliers: 84, pVal: 0.001, status: 'Highly Skewed' },
      { name: 'Customer Age (Years)', rawSkew: 0.24, logSkew: 0.12, outliers: 6, pVal: 0.38, status: 'Near Normal' },
      { name: 'Daily Engagement (Min)', rawSkew: 2.15, logSkew: 0.31, outliers: 42, pVal: 0.02, status: 'Bimodal Skew' },
      { name: 'Transaction Spend ($)', rawSkew: 4.88, logSkew: 0.42, outliers: 112, pVal: 0.001, status: 'Extreme Outliers' }
    ];

    return (
      <div className="space-y-4">
        {/* Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Diagnostic Suite:</span>
            <div className="inline-flex rounded-none bg-slate-100 p-1 border border-slate-200">
              <button
                id="eda-dist-btn"
                onClick={() => setEdaDiagnosticMode('distribution')}
                className={`rounded-none px-3 py-1 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  edaDiagnosticMode === 'distribution' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Skewness &amp; Normality
              </button>
              <button
                id="eda-outlier-btn"
                onClick={() => setEdaDiagnosticMode('outliers')}
                className={`rounded-none px-3 py-1 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  edaDiagnosticMode === 'outliers' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                IQR Outlier Diagnostics
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-indigo-700 font-mono bg-indigo-50 px-2 py-1 border border-indigo-200">
              {edaDiagnosticMode === 'distribution' ? 'Log1p Transformation Applied' : 'IQR 1.5x Bound Active'}
            </span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="rounded-none border border-slate-200 bg-slate-50/70 p-4 space-y-3">
          {variableProfiles.map((v) => {
            const displayVal = edaDiagnosticMode === 'distribution'
              ? `Skew: ${v.rawSkew} → ${v.logSkew}`
              : `${v.outliers} Outliers Detected`;

            const barWidth = edaDiagnosticMode === 'distribution'
              ? Math.min(100, Math.max(10, (v.rawSkew / 5) * 100))
              : Math.min(100, Math.max(10, (v.outliers / 120) * 100));

            const barColor = edaDiagnosticMode === 'distribution'
              ? (v.rawSkew > 2.0 ? 'bg-amber-500' : 'bg-emerald-600')
              : (v.outliers > 50 ? 'bg-rose-600' : 'bg-indigo-600');

            return (
              <div key={v.name} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900 font-sans w-36">{v.name}</span>
                    <span className="text-[10px] font-mono text-slate-500 bg-white px-1.5 py-0.5 border border-slate-200 hidden sm:inline">
                      Shapiro-Wilk p: {v.pVal}
                    </span>
                    <span className="text-[10px] font-mono text-indigo-700 font-bold bg-indigo-50 px-1.5 py-0.5 border border-indigo-200">
                      {v.status}
                    </span>
                  </div>
                  <span className="font-bold text-slate-900 font-mono">{displayVal}</span>
                </div>

                <div className="h-5 w-full bg-slate-200/80 rounded-none overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${barColor}`}
                    style={{ width: `${barWidth}%` }}
                  />
                </div>
              </div>
            );
          })}

          <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[10px] font-mono text-slate-500">
            <span>*Benchmark EDA diagnostic pipeline written in Python Pandas</span>
            <span className="text-indigo-600 font-bold">Automated Statistical Triage</span>
          </div>
        </div>

        {/* Takeaway */}
        <div className="rounded-none bg-indigo-50/40 border border-indigo-200 p-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-900 flex items-center gap-1.5">
            <Activity className="h-3.5 w-3.5 text-indigo-600" /> Statistical Profiling Finding
          </h4>
          <p className="mt-1 text-xs text-indigo-950 leading-relaxed font-sans">
            Applying log-transformation reduced skewness in transaction and income distributions from <strong className="text-indigo-900">3.42+ down to 0.18</strong>, restoring linearity required for regression algorithms. Automated statistical benchmarking collapsed exploratory triage from 3 hours to <strong className="text-indigo-900">8 minutes</strong>.
          </p>
        </div>
      </div>
    );
  };

  // -------------------------------------------------------------
  // 11. Zomato Customer RFM Segmentation & Cohort Order Economics
  // -------------------------------------------------------------
  const renderZomatoSqlChart = () => {
    const segments = [
      { name: 'Champions (Top Tier)', rfm: '5-5-5', userPct: 8.2, gmvPct: 41.3, aov: 620, baseRetention: 91 },
      { name: 'Loyal Diners', rfm: '4-4-4', userPct: 23.4, gmvPct: 27.5, aov: 480, baseRetention: 79 },
      { name: 'Potential Loyalists', rfm: '4-2-3', userPct: 21.6, gmvPct: 14.8, aov: 340, baseRetention: 64 },
      { name: 'At Risk Diners', rfm: '2-3-4', userPct: 24.8, gmvPct: 11.2, aov: 410, baseRetention: 38 },
      { name: 'Hibernating / Churned', rfm: '1-1-1', userPct: 22.0, gmvPct: 5.2, aov: 210, baseRetention: 18 }
    ];

    const zomatoSql = `WITH customer_rfm_raw AS (
  SELECT 
    user_id,
    CURRENT_DATE - MAX(order_date) AS recency_days,
    COUNT(order_id) AS frequency_orders,
    SUM(order_total) AS monetary_value
  FROM zomato_orders
  GROUP BY user_id
),
rfm_ranked AS (
  SELECT 
    user_id,
    recency_days,
    frequency_orders,
    monetary_value,
    NTILE(5) OVER (ORDER BY recency_days DESC) AS r_score,
    NTILE(5) OVER (ORDER BY frequency_orders ASC) AS f_score,
    NTILE(5) OVER (ORDER BY monetary_value ASC) AS m_score
  FROM customer_rfm_raw
)
SELECT 
  CASE 
    WHEN r_score >= 4 AND f_score >= 4 AND m_score >= 4 THEN 'Champions'
    WHEN r_score >= 3 AND f_score >= 3 THEN 'Loyal Diners'
    WHEN r_score >= 4 AND f_score <= 2 THEN 'Potential Loyalists'
    WHEN r_score <= 2 AND f_score >= 3 THEN 'At Risk Diners'
    ELSE 'Hibernating'
  END AS customer_segment,
  COUNT(user_id) AS total_users,
  ROUND(SUM(monetary_value)::NUMERIC, 2) AS total_gmv,
  ROUND(AVG(monetary_value / NULLIF(frequency_orders, 0))::NUMERIC, 2) AS avg_order_value
FROM rfm_ranked
GROUP BY customer_segment
ORDER BY total_gmv DESC;`;

    return (
      <div className="space-y-4">
        {/* Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Reactivation Prompt:</span>
            <button
              id="toggle-zomato-nudge-btn"
              onClick={() => setZomatoNudgeApplied(!zomatoNudgeApplied)}
              className={`rounded-none border px-3 py-1 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                zomatoNudgeApplied
                  ? 'bg-emerald-50 border-emerald-400 text-emerald-800 font-bold'
                  : 'bg-white border-slate-200 text-slate-500 hover:text-slate-900'
              }`}
            >
              {zomatoNudgeApplied ? '✓ 14-Day Reactivation Nudge Applied (2x Retention)' : '+ Test 14-Day Second-Order Nudge'}
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="toggle-zomato-sql-btn"
              onClick={() => setZomatoShowSql(!zomatoShowSql)}
              className={`rounded-none border px-3 py-1 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                zomatoShowSql ? 'bg-slate-900 border-slate-900 text-white' : 'bg-white border-slate-200 text-slate-700 hover:text-slate-900'
              }`}
            >
              <Code2 className="h-3.5 w-3.5" />
              <span>{zomatoShowSql ? 'Hide SQL Query' : 'View SQL RFM Query (NTILE)'}</span>
            </button>
          </div>
        </div>

        {/* SQL Drawer */}
        {zomatoShowSql && (
          <div className="rounded-none bg-slate-950 text-slate-200 p-4 font-mono text-xs overflow-x-auto border border-slate-800">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2 text-slate-400">
              <span className="flex items-center gap-1.5 text-indigo-400 font-bold">
                <Terminal className="h-3.5 w-3.5" />
                <span>PostgreSQL RFM Window Scoring Script</span>
              </span>
              <span className="text-[10px] text-emerald-400 font-mono">50,000+ Customers Segmented</span>
            </div>
            <pre className="text-[11px] leading-relaxed text-slate-300">
              {zomatoSql}
            </pre>
          </div>
        )}

        {/* Visualizer */}
        <div className="rounded-none border border-slate-200 bg-slate-50/70 p-4 space-y-3">
          {segments.map((seg) => {
            const retention = zomatoNudgeApplied && (seg.name.includes('Risk') || seg.name.includes('Potential'))
              ? Math.min(95, seg.baseRetention + 24)
              : seg.baseRetention;

            const barColor = seg.gmvPct >= 30 ? 'bg-emerald-600' : seg.gmvPct >= 15 ? 'bg-indigo-600' : 'bg-slate-700';

            return (
              <div key={seg.name} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900 font-sans w-36">{seg.name}</span>
                    <span className="text-[10px] font-mono text-slate-500 bg-white px-1.5 py-0.5 border border-slate-200 hidden sm:inline">
                      User Share: {seg.userPct}%
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 bg-white px-1.5 py-0.5 border border-slate-200 hidden sm:inline">
                      AOV: ₹{seg.aov}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-indigo-700 bg-indigo-50 px-1.5 py-0.5 border border-indigo-200">
                      Retention: {retention}%
                    </span>
                  </div>
                  <span className="font-bold text-slate-900 font-mono">{seg.gmvPct}% of Platform GMV</span>
                </div>

                <div className="h-5 w-full bg-slate-200/80 rounded-none overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${barColor}`}
                    style={{ width: `${(seg.gmvPct / 45) * 100}%` }}
                  />
                </div>
              </div>
            );
          })}

          <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[10px] font-mono text-slate-500">
            <span>*Computed from 50,000+ Zomato food delivery transactional logs</span>
            <span className="text-indigo-600 font-bold">PostgreSQL NTILE Window Functions</span>
          </div>
        </div>

        {/* Takeaway */}
        <div className="rounded-none bg-indigo-50/40 border border-indigo-200 p-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-900 flex items-center gap-1.5">
            <Utensils className="h-3.5 w-3.5 text-indigo-600" /> Consumer Behavior Takeaway
          </h4>
          <p className="mt-1 text-xs text-indigo-950 leading-relaxed font-sans">
            Top-tier <strong className="text-indigo-900">Champions</strong> represent just 8.2% of diners but generate <strong className="text-indigo-900">41.3% of total platform GMV</strong>. Furthermore, triggering an automated targeted discount prompt within 14 days of a customer's initial order doubles their 90-day retention survival rate.
          </p>
        </div>
      </div>
    );
  };

  return (
    <section id="sandbox" className="py-20 bg-white border-b border-slate-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-none bg-indigo-50 border border-indigo-200 text-indigo-700 text-[10px] font-bold uppercase tracking-wider mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Interactive Terminal</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl font-sans">
            Live Interactive Analytics Playground
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            As a data analyst, static slides don't do complex datasets justice. Interact with simulated pipeline outputs and diagnostic models from my eleven GitHub showcase repositories below.
          </p>
        </div>

        {/* Grid Dashboard */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Nav rail */}
          <div className="lg:col-span-4 space-y-2.5 max-h-[720px] overflow-y-auto pr-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block px-1">
              Select Showcase Case Study ({portfolioProjects.length}):
            </span>
            
            {portfolioProjects.map(proj => {
              const isActive = proj.id === activeProject.id;
              return (
                <button
                  id={`proj-nav-${proj.id}`}
                  key={proj.id}
                  onClick={() => handleProjectSelect(proj)}
                  className={`w-full text-left p-3.5 rounded-none border transition-all duration-150 relative overflow-hidden group cursor-pointer ${
                    isActive 
                      ? 'bg-slate-50 border-slate-900 border-l-4 border-l-indigo-650 shadow-none' 
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-650 font-mono truncate max-w-[200px]">
                      {proj.category}
                    </span>
                    <ChevronRight className={`h-4 w-4 shrink-0 transition-transform ${
                      isActive ? 'text-indigo-600 translate-x-0.5' : 'text-slate-300 group-hover:text-slate-400'
                    }`} />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 mt-1 leading-snug">
                    {proj.title}
                  </h3>
                  <p className="text-[11px] text-slate-550 mt-1 line-clamp-2 leading-relaxed font-sans">
                    {proj.summary}
                  </p>

                  <div className="flex flex-wrap gap-1 mt-2.5">
                    {proj.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-[9px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 bg-slate-100 text-slate-600 border border-slate-200 rounded-none">
                        {tag}
                      </span>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Visualization Console */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-none p-5 sm:p-6 shadow-none">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200 pb-5 mb-5">
              <div>
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <BarChart className="h-5 w-5 text-indigo-600" />
                  {activeProject.title}
                </h3>
                <p className="text-xs text-slate-550 mt-1 font-mono uppercase tracking-wider">
                  Diagnostics Matrix: {activeProject.subtitle}
                </p>
              </div>
              
              {/* GitHub Link & Chart Badge */}
              <div className="flex items-center gap-2">
                <a
                  id={`playground-github-link-${activeProject.id}`}
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 px-3 py-1.5 rounded-none font-sans transition-colors cursor-pointer"
                >
                  <ExternalLink className="h-3 w-3 text-indigo-600" />
                  <span>GitHub Repo</span>
                </a>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1.5 rounded-none font-mono">
                  Type: {activeProject.chartType.toUpperCase()}
                </span>
              </div>
            </div>

            {/* Metrics cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {activeProject.metrics.map(metric => (
                <div key={metric.label} className="bg-slate-50 border border-slate-200 rounded-none p-4 text-center">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block">{metric.label}</span>
                  <span className="text-base sm:text-lg font-bold text-slate-900 block mt-1 font-mono">{metric.value}</span>
                  <span className="text-[11px] text-slate-550 block mt-0.5">{metric.description}</span>
                </div>
              ))}
            </div>

            {/* Active Chart Element */}
            <div className="mt-4">
              {activeProject.id === 'lending-club-default' && renderLendingClubChart()}
              {activeProject.id === 'football-match-analytics' && renderFootballChart()}
              {activeProject.id === 'telecom-churn-analysis' && renderTelecomChurnMatrix()}
              {activeProject.id === 'imdb-ratings-eda' && renderImdbRatingsChart()}
              {activeProject.id === 'youtube-channels-eda' && renderYoutubeChannelsChart()}
              {activeProject.id === 'ola-ride-hailing-sql' && renderOlaSqlChart()}
              {activeProject.id === 'sales-kpi-dashboard-excel' && renderSalesKpiChart()}
              {activeProject.id === 'nashville-housing-sql' && renderNashvilleHousingChart()}
              {activeProject.id === 'password-checker-regex' && renderPasswordChecker()}
              {activeProject.id === 'data-analysis-warm-up-eda' && renderWarmUpEdaChart()}
              {activeProject.id === 'zomato-customers-sql' && renderZomatoSqlChart()}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
