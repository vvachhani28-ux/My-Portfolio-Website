import { useState } from 'react';
import { portfolioProjects } from '../data/projects';
import { 
  BarChart, 
  TrendingUp, 
  ChevronRight, 
  Sparkles, 
  Sliders, 
  Eye, 
  Info,
  ShieldAlert,
  Target,
  Users,
  ExternalLink,
  Crosshair
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
  const [selectedCohortFilter, setSelectedCohortFilter] = useState<string>('All');

  // Reset controls when active project changes
  const handleProjectSelect = (proj: any) => {
    setActiveProject(proj);
    setHoveredGrade(null);
    setHoveredShot(null);
  };

  // -------------------------------------------------------------
  // 1. Lending Club Default Risk Explorer
  // -------------------------------------------------------------
  const renderLendingClubChart = () => {
    const rawData = activeProject.data || [];
    
    // Grade metadata for deep analytical context
    const gradeMeta: Record<string, { fico: string; volume: string; avgLoan: string }> = {
      'Grade A': { fico: '760 - 850', volume: '$342M', avgLoan: '$14,500' },
      'Grade B': { fico: '720 - 759', volume: '$518M', avgLoan: '$15,200' },
      'Grade C': { fico: '690 - 719', volume: '$620M', avgLoan: '$16,100' },
      'Grade D': { fico: '670 - 689', volume: '$410M', avgLoan: '$16,800' },
      'Grade E': { fico: '650 - 669', volume: '$215M', avgLoan: '$17,500' },
      'Grade F': { fico: '630 - 649', volume: '$95M', avgLoan: '$18,200' },
      'Grade G': { fico: '600 - 629', volume: '$38M', avgLoan: '$19,400' },
    };

    // Calculate dynamic default rate based on DTI threshold slider
    // Looser DTI (>25) increases subprime default; tighter DTI (<25) reduces default
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
                className={`rounded-none px-3 py-1 text-xs font-bold uppercase tracking-wider transition-all ${
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
                className={`rounded-none px-3 py-1 text-xs font-bold uppercase tracking-wider transition-all ${
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
              // Higher grades (D, E, F, G) react more strongly to DTI shifts
              const sensitivity = 0.4 + (index * 0.25);
              const dynamicDefaultRate = Math.max(3.0, Math.min(65.0, Number((d.value + dtiDelta * sensitivity).toFixed(1))));
              const interestRate = d.secondaryValue || 10;
              const meta = gradeMeta[d.label] || { fico: 'N/A', volume: '$100M', avgLoan: '$15,000' };
              const isHovered = hoveredGrade === d.label;

              const activeDisplayValue = lendingMetricView === 'defaultRate' ? dynamicDefaultRate : interestRate;
              const barWidthPercent = Math.min(100, Math.max(8, (activeDisplayValue / 60) * 100));

              // Risk status color coding
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

                  {/* Bar container */}
                  <div className="h-6 w-full bg-slate-200/80 rounded-none overflow-hidden relative cursor-pointer">
                    <div 
                      className={`h-full transition-all duration-300 ${barColor} ${isHovered ? 'brightness-110' : ''}`}
                      style={{ width: `${barWidthPercent}%` }}
                    />
                    {/* Comparison indicator line for interest spread */}
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

          {/* Footnote Legend */}
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
              {lendingMetricView === 'defaultRate' && (
                <span className="flex items-center gap-1 text-slate-700 font-semibold">
                  <span className="h-2.5 w-0.5 bg-slate-900 inline-block"></span> Black Mark = Interest Rate %
                </span>
              )}
            </div>
            <span>*Based on 887,379 Lending Club loans</span>
          </div>
        </div>

        {/* Insight Box */}
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

    // Coordinate mapping: Pitch coordinates
    // Attacking half from midfield (x=35m) to goal line (x=0m)
    // Lateral width from -20m (left) to +20m (right)
    // SVG viewBox: 0 0 540 340
    // Goal center is at (x=270, y=28)
    const mapPitchX = (latY: number) => 270 + (latY / 20) * 210; // lateral
    const mapPitchY = (distX: number) => 30 + (distX / 35) * 280; // distance from goal

    const getShotColor = (cat: string) => {
      if (cat.includes('High')) return 'fill-emerald-500 stroke-emerald-700';
      if (cat.includes('Medium')) return 'fill-amber-400 stroke-amber-600';
      return 'fill-rose-500 stroke-rose-700';
    };

    return (
      <div className="space-y-4">
        {/* Controls */}
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

        {/* Pitch SVG Workspace */}
        <div className="relative rounded-none border border-slate-200 bg-emerald-900/10 p-3 overflow-hidden">
          <svg viewBox="0 0 540 340" className="w-full bg-[#1b4332] rounded-none">
            
            {/* Pitch Grass Grid Lines */}
            <rect x="20" y="20" width="500" height="300" fill="#1b4332" stroke="#40916c" strokeWidth="2" />
            <line x1="20" y1="310" x2="520" y2="310" stroke="#40916c" strokeWidth="2" strokeDasharray="4 4" />
            
            {/* Goal Post on top line */}
            <rect x="235" y="14" width="70" height="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="235" y1="22" x2="305" y2="22" stroke="#e2e8f0" strokeWidth="3" />

            {/* 6-Yard Box */}
            <rect x="205" y="20" width="130" height="45" fill="none" stroke="#52b788" strokeWidth="1.5" />

            {/* 18-Yard Penalty Box */}
            <rect x="135" y="20" width="270" height="120" fill="none" stroke="#52b788" strokeWidth="1.5" />

            {/* Penalty Spot (11m) */}
            <circle cx="270" cy="110" r="2.5" fill="#ffffff" />

            {/* Penalty Arc (D-Box) */}
            <path d="M 220 140 A 55 55 0 0 0 320 140" fill="none" stroke="#52b788" strokeWidth="1.5" />

            {/* Distance Marks */}
            <text x="30" y="70" className="fill-[#74c69d] font-mono text-[9px]">6 yds (Goal Area)</text>
            <text x="30" y="145" className="fill-[#74c69d] font-mono text-[9px]">18 yds (Penalty Box Edge)</text>
            <text x="30" y="225" className="fill-[#74c69d] font-mono text-[9px]">25 yds (Long Range Zone)</text>
            <text x="30" y="305" className="fill-[#74c69d] font-mono text-[9px]">35 yds (Midfield Line)</text>

            {/* Shot Trajectory Rays */}
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

            {/* Shot Markers */}
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
                  {/* Outer pulse for Goals */}
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
                  {/* Main Shot Node */}
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

          {/* Hover Tooltip Card */}
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

        {/* Tactical Insight Box */}
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
        {/* Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Display Metric:</span>
            <div className="inline-flex rounded-none bg-slate-100 p-1 border border-slate-200">
              <button 
                id="telecom-percent-btn"
                onClick={() => setTelecomViewMode('percent')}
                className={`rounded-none px-3 py-1 text-xs font-bold uppercase tracking-wider transition-all ${
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
                className={`rounded-none px-3 py-1 text-xs font-bold uppercase tracking-wider transition-all ${
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

        {/* Matrix Grid */}
        <div className="overflow-x-auto">
          <div className="min-w-[540px] select-none p-1">
            {/* Table Header */}
            <div className="grid grid-cols-7 gap-1.5 text-center text-[10px] font-bold tracking-wider uppercase text-slate-400 pb-2 border-b border-slate-200">
              <div className="text-left font-bold text-slate-500 pl-1">Contract Segment</div>
              <div>Subscribers</div>
              <div>Month 0</div>
              <div>Month 6</div>
              <div>Month 12</div>
              <div>Month 24</div>
              <div>Month 36+</div>
            </div>

            {/* Rows */}
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
                    // If proactive bundle is active, boost Month-to-Month and Fiber retention
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

        {/* Insight Box */}
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
            As a data analyst, static slides don't do complex datasets justice. Interact with real, simulated pipeline outputs from my three showcase repositories below.
          </p>
        </div>

        {/* Grid Dashboard */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Nav rail */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block px-1">Select Case Study Output:</span>
            
            {portfolioProjects.map(proj => {
              const isActive = proj.id === activeProject.id;
              return (
                <button
                  id={`proj-nav-${proj.id}`}
                  key={proj.id}
                  onClick={() => handleProjectSelect(proj)}
                  className={`w-full text-left p-4 rounded-none border transition-all duration-150 relative overflow-hidden group cursor-pointer ${
                    isActive 
                      ? 'bg-slate-50 border-slate-900 border-l-4 border-l-indigo-650 shadow-none' 
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-650 font-mono">
                      {proj.category}
                    </span>
                    <ChevronRight className={`h-4 w-4 transition-transform ${
                      isActive ? 'text-indigo-600 translate-x-0.5' : 'text-slate-300 group-hover:text-slate-400'
                    }`} />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mt-1 leading-snug">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-550 mt-1.5 line-clamp-2 leading-relaxed font-sans">
                    {proj.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-3">
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
                  Chart: {activeProject.chartType.toUpperCase()}
                </span>
              </div>
            </div>

            {/* Metrics cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {activeProject.metrics.map(metric => (
                <div key={metric.label} className="bg-slate-50 border border-slate-200 rounded-none p-4 text-center">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block">{metric.label}</span>
                  <span className="text-lg font-bold text-slate-900 block mt-1 font-mono">{metric.value}</span>
                  <span className="text-[11px] text-slate-550 block mt-0.5">{metric.description}</span>
                </div>
              ))}
            </div>

            {/* Active Chart Element */}
            <div className="mt-4">
              {activeProject.id === 'lending-club-default' && renderLendingClubChart()}
              {activeProject.id === 'football-match-analytics' && renderFootballChart()}
              {activeProject.id === 'telecom-churn-analysis' && renderTelecomChurnMatrix()}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
