import { useState } from 'react';
import { portfolioProjects, skillsData } from '../data/projects';
import { 
  BarChart, 
  TrendingUp, 
  Layers, 
  Compass, 
  HelpCircle, 
  ChevronRight, 
  Sparkles, 
  Sliders, 
  Eye, 
  RefreshCw,
  Info
} from 'lucide-react';

export default function DashboardPlayground() {
  const [activeProject, setActiveProject] = useState(portfolioProjects[0]);
  
  // E-commerce Cohort States
  const [cohortViewMode, setCohortViewMode] = useState<'percent' | 'absolute'>('percent');
  const cohortBaseSizes: Record<string, number> = {
    'Jan Cohort': 2450,
    'Feb Cohort': 2100,
    'Mar Cohort': 1850,
    'Apr Cohort': 2900,
    'May Cohort': 3100,
  };

  // Climate Study States
  const [showRegressionLine, setShowRegressionLine] = useState(true);
  const [selectedRegionFilter, setSelectedRegionFilter] = useState<string>('All');
  const [hoveredScatterPoint, setHoveredScatterPoint] = useState<any | null>(null);

  // Sales Forecasting States
  const [forecastSensitivity, setForecastSensitivity] = useState<number>(1.0); // Multiplier
  const [hoveredMonth, setHoveredMonth] = useState<number | null>(null);

  // Reset controls when active project changes
  const handleProjectSelect = (proj: any) => {
    setActiveProject(proj);
    setHoveredScatterPoint(null);
    setHoveredMonth(null);
  };

  // Helper to color-code cohort blocks
  const getCohortBgColor = (rate: number) => {
    if (rate === 0) return 'bg-gray-50 text-transparent border-gray-100';
    if (rate === 100) return 'bg-emerald-600 text-white font-semibold border-emerald-700';
    if (rate >= 45) return 'bg-emerald-500 text-white border-emerald-600';
    if (rate >= 35) return 'bg-emerald-400 text-emerald-950 border-emerald-500';
    if (rate >= 25) return 'bg-emerald-200 text-emerald-900 border-emerald-300';
    if (rate >= 20) return 'bg-emerald-100 text-emerald-850 border-emerald-200';
    return 'bg-emerald-50 text-emerald-800 border-emerald-100';
  };

  const allRegions = ['All', 'Europe', 'Americas', 'Developing Asia', 'Advanced Asia', 'Africa'];

  // Calculate coordinates for SVG scatter plot
  // GDP ranges from 0 to 70. CO2 ranges from 0 to 14.
  const mapScatterX = (val: number) => 60 + (val / 70) * 480;
  const mapScatterY = (val: number) => 340 - (val / 14) * 280;

  // Render E-Commerce Cohort Grid
  const renderCohortGrid = () => {
    const data = activeProject.cohortData;
    if (!data) return null;

    return (
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Control Panel:</span>
            <div className="inline-flex rounded-none bg-slate-100 p-1 border border-slate-200">
              <button 
                id="cohort-percent-btn"
                onClick={() => setCohortViewMode('percent')}
                className={`rounded-none px-3 py-1 text-xs font-bold uppercase tracking-wider transition-all ${
                  cohortViewMode === 'percent' 
                    ? 'bg-slate-900 text-white' 
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Retention %
              </button>
              <button 
                id="cohort-absolute-btn"
                onClick={() => setCohortViewMode('absolute')}
                className={`rounded-none px-3 py-1 text-xs font-bold uppercase tracking-wider transition-all ${
                  cohortViewMode === 'absolute' 
                    ? 'bg-slate-900 text-white' 
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Active Customers
              </button>
            </div>
          </div>
          <span className="text-xs text-slate-500 font-mono">
            *Simulated Cohort Size: <strong className="text-slate-700">12,400 acquisition units</strong>
          </span>
        </div>

        {/* Cohort Matrix Scrollable wrapper */}
        <div className="overflow-x-auto">
          <div className="min-w-[500px] select-none p-1">
            {/* Header */}
            <div className="grid grid-cols-7 gap-1.5 text-center text-[10px] font-bold tracking-wider uppercase text-slate-400 pb-2">
              <div className="text-left font-bold text-slate-500 pl-1">Cohort</div>
              <div>Acquired</div>
              <div>Month 0</div>
              <div>Month 1</div>
              <div>Month 2</div>
              <div>Month 3</div>
              <div>Month 4</div>
            </div>

            {/* Matrix rows */}
            {data.months.map((month, rIndex) => {
              const baseSize = cohortBaseSizes[month] || 1000;
              return (
                <div key={month} className="grid grid-cols-7 gap-1.5 py-1 text-center items-center">
                  <div className="text-left text-xs font-bold text-slate-700 pl-1 border-l-2 border-emerald-500">{month}</div>
                  <div className="text-xs font-mono text-slate-500 bg-slate-50 rounded-none py-1 border border-slate-200">{baseSize.toLocaleString()}</div>
                  {data.rates[rIndex].slice(0, 5).map((rate, cIndex) => {
                    const displayVal = cohortViewMode === 'percent' 
                      ? `${rate}%` 
                      : rate === 0 ? '' : Math.round((rate / 100) * baseSize).toLocaleString();

                    return (
                      <div 
                        key={cIndex} 
                        className={`text-xs font-mono py-2 rounded-none border transition-colors ${getCohortBgColor(rate)}`}
                        title={`Retention in Month ${cIndex}: ${rate}%`}
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

        <div className="rounded-none bg-emerald-50/40 border border-emerald-200 p-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-850 flex items-center gap-1.5">
            <Info className="h-3.5 w-3.5" /> Analyst Insight
          </h4>
          <p className="mt-1 text-xs text-emerald-950 leading-relaxed">
            Observe the steep drop-off between Month 0 and Month 1 (averaging over 55% loss). This cohort diagnostic clearly indicates that onboarding efforts are failing within the initial 30 days. Targeting this critical drop-off interval yields the highest analytical return-on-investment.
          </p>
        </div>
      </div>
    );
  };

  // Render Climate Scatter Plot
  const renderClimateScatter = () => {
    const rawData = activeProject.scatterData || [];
    const filteredPoints = selectedRegionFilter === 'All' 
      ? rawData 
      : rawData.filter(p => p.category === selectedRegionFilter);

    // Hardcode regression line coords for standard OLS: y = 0.16 * x + 0.3
    // Start x=5 (mapped), End x=65 (mapped)
    const regressionStart = { x: mapScatterX(5), y: mapScatterY(0.16 * 5 + 0.3) };
    const regressionEnd = { x: mapScatterX(65), y: mapScatterY(0.16 * 65 + 0.3) };

    const getRegionColorClass = (cat: string) => {
      switch(cat) {
        case 'Europe': return 'fill-indigo-500 stroke-indigo-600 hover:fill-indigo-600';
        case 'Americas': return 'fill-rose-500 stroke-rose-600 hover:fill-rose-600';
        case 'Developing Asia': return 'fill-amber-500 stroke-amber-600 hover:fill-amber-600';
        case 'Advanced Asia': return 'fill-emerald-500 stroke-emerald-600 hover:fill-emerald-600';
        case 'Africa': return 'fill-teal-500 stroke-teal-600 hover:fill-teal-600';
        default: return 'fill-gray-400 stroke-gray-500';
      }
    };

    return (
      <div className="space-y-4">
        {/* Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Filter Region:</span>
            <select 
              id="region-filter-select"
              value={selectedRegionFilter}
              onChange={(e) => setSelectedRegionFilter(e.target.value)}
              className="rounded-none border border-slate-300 bg-white px-2.5 py-1 text-xs font-bold text-slate-700 focus:border-indigo-600 focus:outline-none"
            >
              {allRegions.map(reg => (
                <option key={reg} value={reg}>{reg}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Model Fits:</span>
            <button
              id="toggle-regression-btn"
              onClick={() => setShowRegressionLine(!showRegressionLine)}
              className={`rounded-none border px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all ${
                showRegressionLine 
                  ? 'bg-indigo-50 border-indigo-350 text-indigo-700 font-bold' 
                  : 'bg-white border-slate-200 text-slate-500 hover:text-slate-900'
              }`}
            >
              {showRegressionLine ? 'Regression Line: On' : 'Regression Line: Off'}
            </button>
          </div>
        </div>

        {/* SVG Workspace */}
        <div className="relative rounded-none border border-slate-200 bg-slate-50/70 p-3">
          <svg viewBox="0 0 580 370" className="w-full">
            {/* Grid Lines */}
            <line x1="60" y1="60" x2="540" y2="60" stroke="#e2e8f0" strokeWidth="1" />
            <line x1="60" y1="130" x2="540" y2="130" stroke="#e2e8f0" strokeWidth="1" />
            <line x1="60" y1="200" x2="540" y2="200" stroke="#cbd5e1" strokeDasharray="3 3" />
            <line x1="60" y1="270" x2="540" y2="270" stroke="#e2e8f0" strokeWidth="1" />
            <line x1="180" y1="60" x2="180" y2="340" stroke="#e2e8f0" strokeWidth="1" />
            <line x1="300" y1="60" x2="300" y2="340" stroke="#cbd5e1" strokeDasharray="3 3" />
            <line x1="420" y1="60" x2="420" y2="340" stroke="#e2e8f0" strokeWidth="1" />

            {/* Axes */}
            <line x1="60" y1="340" x2="540" y2="340" stroke="#475569" strokeWidth="2" />
            <line x1="60" y1="60" x2="60" y2="340" stroke="#475569" strokeWidth="2" />

            {/* Axis Labels */}
            <text x="300" y="365" textAnchor="middle" className="fill-slate-500 font-sans text-[11px] font-bold uppercase tracking-wider">
              GDP per Capita ($k USD)
            </text>
            <text x="18" y="200" textAnchor="middle" transform="rotate(-90, 18, 200)" className="fill-slate-500 font-sans text-[11px] font-bold uppercase tracking-wider">
              CO₂ Emissions per Capita (Metric Tons)
            </text>

            {/* Axis Ticks */}
            {[0, 2, 4, 6, 8, 10, 12, 14].map(val => (
              <g key={val}>
                <line x1="55" y1={mapScatterY(val)} x2="60" y2={mapScatterY(val)} stroke="#475569" strokeWidth="1.5" />
                <text x="48" y={mapScatterY(val) + 4} textAnchor="end" className="fill-slate-400 font-mono text-[10px]">{val}</text>
              </g>
            ))}

            {/* X Ticks */}
            {[0, 10, 20, 30, 40, 50, 60, 70].map(val => (
              <g key={val}>
                <line x1={mapScatterX(val)} y1="340" x2={mapScatterX(val)} y2="345" stroke="#475569" strokeWidth="1.5" />
                <text x={mapScatterX(val)} y="354" textAnchor="middle" className="fill-slate-400 font-mono text-[10px]">${val}k</text>
              </g>
            ))}

            {/* Regression Line */}
            {showRegressionLine && (
              <line 
                x1={regressionStart.x} 
                y1={regressionStart.y} 
                x2={regressionEnd.x} 
                y2={regressionEnd.y} 
                stroke="#4f46e5" 
                strokeWidth="2.5" 
                strokeDasharray="0" 
                className="transition-all duration-300"
              />
            )}

            {/* Data Points */}
            {filteredPoints.map((pt) => {
              const cx = mapScatterX(pt.x);
              const cy = mapScatterY(pt.y);
              const isHovered = hoveredScatterPoint?.label === pt.label;

              return (
                <rect
                  key={pt.label}
                  x={cx - (isHovered ? 5 : 4.5)}
                  y={cy - (isHovered ? 5 : 4.5)}
                  width={isHovered ? 10 : 9}
                  height={isHovered ? 10 : 9}
                  className={`transition-all duration-150 cursor-crosshair stroke-white ${getRegionColorClass(pt.category)}`}
                  strokeWidth={isHovered ? 2 : 1.5}
                  onMouseEnter={() => setHoveredScatterPoint(pt)}
                  onMouseLeave={() => setHoveredScatterPoint(null)}
                />
              );
            })}
          </svg>

          {/* Dynamic Tooltip inside container */}
          {hoveredScatterPoint && (
            <div 
              className="absolute pointer-events-none rounded-none border border-slate-900 bg-white p-2.5 shadow-none text-xs transition-all duration-100"
              style={{
                left: `${Math.min(mapScatterX(hoveredScatterPoint.x) / 5.8 + 2, 65)}%`,
                top: `${Math.min(mapScatterY(hoveredScatterPoint.y) / 3.7 - 20, 75)}%`,
              }}
            >
              <div className="font-bold text-slate-900 font-sans">{hoveredScatterPoint.label}</div>
              <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-indigo-650 font-mono">
                <span>{hoveredScatterPoint.category}</span>
              </div>
              <div className="mt-1 font-mono text-[11px] text-slate-500">
                GDP/Capita: <strong className="text-slate-700">${hoveredScatterPoint.x}k</strong><br/>
                CO₂ Emissions: <strong className="text-slate-700">{hoveredScatterPoint.y} t</strong>
              </div>
            </div>
          )}
        </div>

        <div className="rounded-none bg-indigo-50/40 border border-indigo-200 p-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-800 flex items-center gap-1.5">
            <Info className="h-3.5 w-3.5" /> Analyst Insight
          </h4>
          <p className="mt-1 text-xs text-indigo-950 leading-relaxed">
            Note the distinct clustering: European nations group in the lower-right quadrant, indicating highly decoupled structures (service-driven economies with emission abatement plans). In contrast, the USA/Canada cluster stands out with twice the emission footprint for similar wealth bands, exhibiting structural policy and transport dependencies.
          </p>
        </div>
      </div>
    );
  };

  // Render Forecasting Line Chart
  const renderForecastingChart = () => {
    const data = activeProject.data;
    if (!data) return null;

    // We have 12 data points. 
    // Actual sales (Jan to Dec): solid. Forecasted sales: based on sensitivity.
    const width = 540;
    const height = 280;
    const paddingLeft = 50;
    const paddingRight = 20;
    const paddingTop = 30;
    const paddingBottom = 40;

    const chartW = width - paddingLeft - paddingRight;
    const chartH = height - paddingTop - paddingBottom;

    // Max value is 420. Let's make y scale max 450.
    const maxY = 450;
    const mapY = (val: number) => height - paddingBottom - (val / maxY) * chartH;
    const mapX = (idx: number) => paddingLeft + (idx / 11) * chartW;

    // Generate path descriptions
    let actualPoints = '';
    let forecastPoints = '';
    
    data.forEach((d, i) => {
      const x = mapX(i);
      
      // Actual path
      const yActual = mapY(d.value);
      if (i === 0) actualPoints += `M ${x} ${yActual}`;
      else actualPoints += ` L ${x} ${yActual}`;

      // Forecasted path (modified by sensitivity slider)
      const baseForecast = d.secondaryValue || d.value;
      // Multiplier applies a delta starting around mid-year (index 5)
      const devFactor = i >= 5 ? 1 + (forecastSensitivity - 1) * (i - 4) * 0.05 : 1;
      const forecastVal = baseForecast * devFactor;
      const yForecast = mapY(forecastVal);
      if (i === 0) forecastPoints += `M ${x} ${yForecast}`;
      else forecastPoints += ` L ${x} ${yForecast}`;
    });

    // Generate shade boundaries for forecast confidence interval
    let confidencePath = '';
    data.forEach((d, i) => {
      const x = mapX(i);
      const baseForecast = d.secondaryValue || d.value;
      const devFactor = i >= 5 ? 1 + (forecastSensitivity - 1) * (i - 4) * 0.05 : 1;
      const forecastVal = baseForecast * devFactor;
      
      // Bounds: forecastVal +- 10% * index factors
      const spread = i >= 5 ? (i - 4) * 15 * forecastSensitivity : 0;
      const upperVal = forecastVal + spread;
      const yUpper = mapY(upperVal);
      
      if (i === 0) confidencePath += `M ${x} ${yUpper}`;
      else confidencePath += ` L ${x} ${yUpper}`;
    });

    // Draw bottom back line of confidence boundary
    for (let i = data.length - 1; i >= 0; i--) {
      const d = data[i];
      const x = mapX(i);
      const baseForecast = d.secondaryValue || d.value;
      const devFactor = i >= 5 ? 1 + (forecastSensitivity - 1) * (i - 4) * 0.05 : 1;
      const forecastVal = baseForecast * devFactor;
      
      const spread = i >= 5 ? (i - 4) * 15 * forecastSensitivity : 0;
      const lowerVal = Math.max(0, forecastVal - spread);
      const yLower = mapY(lowerVal);
      confidencePath += ` L ${x} ${yLower}`;
    }
    confidencePath += ' Z';

    return (
      <div className="space-y-4">
        {/* Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
              <Sliders className="h-3 w-3" /> Demand Sensitivity:
            </span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-500">0.5x</span>
              <input 
                id="forecast-sensitivity-range"
                type="range" 
                min="0.5" 
                max="1.5" 
                step="0.1" 
                value={forecastSensitivity} 
                onChange={(e) => setForecastSensitivity(parseFloat(e.target.value))}
                className="w-28 sm:w-36 accent-indigo-600 cursor-pointer h-2 bg-slate-200 rounded-none appearance-none"
              />
              <span className="text-xs font-mono text-slate-500">1.5x</span>
              <span className="ml-1 text-xs font-semibold text-emerald-600 font-mono bg-emerald-50 px-1.5 py-0.5 rounded-none border border-emerald-200">
                {forecastSensitivity}x
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider">
            <div className="flex items-center gap-1.5 text-emerald-600">
              <span className="inline-block h-2.5 w-4 bg-emerald-500 border border-emerald-600"></span>
              <span>Historical Actual</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-500">
              <span className="inline-block h-2.5 w-4 border border-dashed border-slate-500 bg-slate-100"></span>
              <span>Prophet Forecast</span>
            </div>
          </div>
        </div>

        {/* Chart SVG */}
        <div className="relative rounded-none border border-slate-200 bg-slate-50/70 p-3">
          <svg viewBox="0 0 540 280" className="w-full">
            {/* Grid Lines */}
            {[0, 100, 200, 300, 400].map(val => (
              <line 
                key={val} 
                x1={paddingLeft} 
                y1={mapY(val)} 
                x2={width - paddingRight} 
                y2={mapY(val)} 
                stroke="#e2e8f0" 
                strokeWidth="1" 
              />
            ))}

            {/* X-Axis Month Dividers */}
            {data.map((_, i) => (
              <line 
                key={i}
                x1={mapX(i)}
                y1={paddingTop}
                x2={mapX(i)}
                y2={height - paddingBottom}
                stroke={hoveredMonth === i ? "#cbd5e1" : "#f1f5f9"}
                strokeWidth={hoveredMonth === i ? "1.5" : "0.5"}
              />
            ))}

            {/* Axes */}
            <line x1={paddingLeft} y1={height - paddingBottom} x2={width - paddingRight} y2={height - paddingBottom} stroke="#cbd5e1" strokeWidth="1.5" />
            <line x1={paddingLeft} y1={paddingTop} x2={paddingLeft} y2={height - paddingBottom} stroke="#cbd5e1" strokeWidth="1.5" />

            {/* Y axis Ticks */}
            {[0, 100, 200, 300, 400].map(val => (
              <g key={val}>
                <text x={paddingLeft - 8} y={mapY(val) + 4} textAnchor="end" className="fill-gray-400 font-mono text-[10px]">${val}</text>
              </g>
            ))}

            {/* X axis Labels */}
            {data.map((d, i) => (
              <g key={i}>
                <text x={mapX(i)} y={height - paddingBottom + 16} textAnchor="middle" className="fill-gray-400 font-mono text-[10px]">{d.label}</text>
              </g>
            ))}

            {/* Confidence shade region */}
            <path 
              d={confidencePath} 
              className="fill-emerald-100/40 stroke-none transition-all duration-150"
            />

            {/* Forecast Line */}
            <path 
              d={forecastPoints} 
              fill="none" 
              stroke="#94a3b8" 
              strokeWidth="2" 
              strokeDasharray="4 3"
              className="transition-all duration-150"
            />

            {/* Actual Line */}
            <path 
              d={actualPoints} 
              fill="none" 
              stroke="#10b981" 
              strokeWidth="2.5" 
            />

            {/* Hover Triggers (Invisible thick vertical rectangles to facilitate hover engagement) */}
            {data.map((d, i) => {
              const x = mapX(i);
              const colW = chartW / 11;

              return (
                <rect
                  key={i}
                  x={x - colW / 2}
                  y={paddingTop}
                  width={colW}
                  height={chartH}
                  className="fill-transparent hover:fill-slate-900/5 cursor-pointer"
                  onMouseEnter={() => setHoveredMonth(i)}
                  onMouseLeave={() => setHoveredMonth(null)}
                />
              );
            })}
          </svg>

          {/* Dynamic Tooltip inside container */}
          {hoveredMonth !== null && (
            <div 
              className="absolute pointer-events-none rounded-none border border-slate-900 bg-white p-2.5 shadow-none text-xs transition-all duration-100 animate-none"
              style={{
                left: `${Math.min(mapX(hoveredMonth) / 5.4 + 2, 75)}%`,
                top: '15%',
              }}
            >
              <div className="font-bold text-slate-900 font-sans">{data[hoveredMonth].label} Demand Metrics</div>
              <div className="mt-1.5 space-y-1 font-mono text-[11px]">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-gray-400">Actual:</span>
                  <strong className="text-emerald-600">${data[hoveredMonth].value}k</strong>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-gray-400">Forecasted:</span>
                  <strong className="text-slate-800">
                    ${Math.round((data[hoveredMonth].secondaryValue || data[hoveredMonth].value) * (hoveredMonth >= 5 ? 1 + (forecastSensitivity - 1) * (hoveredMonth - 4) * 0.05 : 1))}k
                  </strong>
                </div>
                <div className="flex items-center justify-between gap-4 pt-1 border-t border-slate-200 text-[10px]">
                  <span className="text-gray-400">Confidence range:</span>
                  <span className="text-slate-600 font-semibold">
                    ±{hoveredMonth >= 5 ? Math.round((hoveredMonth - 4) * 15 * forecastSensitivity) : 0}k
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="rounded-none bg-emerald-50/40 border border-emerald-200 p-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-850 flex items-center gap-1.5">
            <Info className="h-3.5 w-3.5" /> Analyst Insight
          </h4>
          <p className="mt-1 text-xs text-emerald-950 leading-relaxed">
            Adjusting the sensitivity index allows testing extreme holding scenarios. Notice how the predictive confidence bounds widen dramatically in Q4 (Nov-Dec) to model heavy end-of-year seasonal shifts. Transitioning the logistics supply matrix to this buffer logic prevents storage spikes while insuring against peak demand blockages.
          </p>
        </div>
      </div>
    );
  };

  return (
    <section id="sandbox" className="py-20 bg-white border-b border-slate-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-none bg-indigo-50 border border-indigo-200 text-indigo-700 text-[10px] font-bold uppercase tracking-wider mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Interactive Terminal</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl font-sans">
            Live Interactive Analytics Playground
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            As a data analyst, static slides don't do complex datasets justice. Interact with real, simulated pipeline outputs from my three showcase projects below.
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
                  className={`w-full text-left p-4 rounded-none border transition-all duration-150 relative overflow-hidden group ${
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
              
              {/* Dynamic tag */}
              <div className="self-start sm:self-center">
                <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-none font-mono">
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
              {activeProject.chartType === 'cohort' && renderCohortGrid()}
              {activeProject.chartType === 'scatter' && renderClimateScatter()}
              {activeProject.chartType === 'line' && renderForecastingChart()}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
