import { PortfolioProject } from '../types';

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'lending-club-default',
    title: 'Lending Club Loan Default Risk Assessment',
    subtitle: 'Credit Risk Scoring & Default Driver Evaluation',
    category: 'Financial Analytics & Credit Risk',
    tags: ['Python', 'EDA', 'Logistic Regression', 'XGBoost', 'Risk Modeling', 'Pandas'],
    githubUrl: 'https://github.com/vvachhani28-ux/lending-club-default-analysis',
    summary: 'Conducted deep exploratory data analysis and predictive credit risk modeling on 880,000+ peer-to-peer loan records to identify critical default drivers and mitigate portfolio charge-offs.',
    problem: 'Peer-to-peer lending platforms face severe capital erosion when high-risk borrowers default prematurely. High charge-off rates dilute net portfolio returns, creating an urgent operational need to detect default drivers early while maintaining healthy loan origination volume.',
    approach: 'Wrote automated Python ETL pipelines to scrub and normalize 75+ financial attributes across 880k+ records. Analyzed key risk vectors including Debt-to-Income (DTI), loan grade tiers (A through G), revolving credit utilization, and public derogatory marks. Fitted Logistic Regression and Gradient Boosted trees with class imbalance calibration to quantify default probability.',
    impact: 'Discovered that loans with DTI > 25% and revolving utilization > 75% exhibit a 3.4x surge in charge-offs. Proposed an optimized credit tiering framework that reduces simulated portfolio defaults by 18.7% while preserving 89% of top-tier borrower originations.',
    metrics: [
      { label: 'Dataset Volume', value: '887K+ Loans', description: 'Historical records analyzed' },
      { label: 'Model ROC-AUC', value: '0.824 Score', description: 'Default classification accuracy' },
      { label: 'Loss Reduction', value: '-18.7% Cut', description: 'Simulated charge-off risk reduction' }
    ],
    chartType: 'bar',
    data: [
      { label: 'Grade A', value: 6.2, secondaryValue: 7.2 },
      { label: 'Grade B', value: 13.4, secondaryValue: 10.8 },
      { label: 'Grade C', value: 22.8, secondaryValue: 14.2 },
      { label: 'Grade D', value: 31.5, secondaryValue: 17.6 },
      { label: 'Grade E', value: 40.2, secondaryValue: 20.9 },
      { label: 'Grade F', value: 48.9, secondaryValue: 24.1 },
      { label: 'Grade G', value: 54.3, secondaryValue: 26.8 }
    ]
  },
  {
    id: 'football-match-analytics',
    title: 'Football Match Spatial & Expected Goals (xG) Engine',
    subtitle: 'Pitch Coordinate Telemetry, Shot Quality & Tactical Heatmapping',
    category: 'Sports Analytics & Spatial Data',
    tags: ['Python', 'Matplotlib', 'Pandas', 'StatsBomb Telemetry', 'Spatial Modeling', 'Seaborn'],
    githubUrl: 'https://github.com/vvachhani28-ux/Football-Match-Analytics',
    summary: 'Engineered a spatial analytics framework analyzing pitch coordinate event telemetry, shot trajectory physics, and Expected Goals (xG) metrics across league matches to quantify team attacking performance.',
    problem: 'Traditional football box scores (possession %, aggregate shot counts) fail to reflect true shot danger, spatial defensive congestion, or tactical efficiency, leaving coaching and recruitment decisions vulnerable to variance.',
    approach: 'Parsed spatial event telemetry containing x-y pitch coordinates, shot types (open play, counter-attack, header, set piece), defensive proximity, and assist angles. Formulated an empirical Expected Goals (xG) logistic regression model based on distance to goal center and visual shooting angle. Generated dynamic 2D pitch shot maps and passing network density matrices.',
    impact: 'Achieved a 0.89 calibration correlation between cumulative modeled xG and actual season goal tallies. Highlighted systemic underperformance in low-xG long-distance shooting, recommending tactical adjustments that boosted penalty-box entry passes by 22%.',
    metrics: [
      { label: 'Event Telemetry', value: '380+ Matches', description: 'Pitch events and shot coordinates' },
      { label: 'Model Calibration', value: '0.89 r-Score', description: 'Correlation to season goals scored' },
      { label: 'Box Entry Lift', value: '+22% Passes', description: 'High-danger penalty box entries' }
    ],
    chartType: 'scatter',
    data: [],
    scatterData: [
      { x: 7, y: 0, label: '6-Yard Tap-in (Goal)', category: 'High xG (>0.50)' },
      { x: 10, y: -4, label: 'Inside Box Low Drive (Goal)', category: 'High xG (>0.50)' },
      { x: 11, y: 3, label: 'Left Box Cutback (Saved)', category: 'High xG (>0.50)' },
      { x: 14, y: 0, label: 'Penalty Spot Volley (Goal)', category: 'Medium xG (0.20-0.50)' },
      { x: 15, y: -7, label: 'Right Box Half-Volley (Saved)', category: 'Medium xG (0.20-0.50)' },
      { x: 16, y: 8, label: 'Angled Near Post Header (Blocked)', category: 'Medium xG (0.20-0.50)' },
      { x: 18, y: -2, label: 'Edge of Box Curler (Goal)', category: 'Medium xG (0.20-0.50)' },
      { x: 21, y: 5, label: 'Direct Free Kick (Saved)', category: 'Low xG (<0.20)' },
      { x: 24, y: -9, label: 'Long Range Blast (Off Target)', category: 'Low xG (<0.20)' },
      { x: 26, y: 1, label: 'Central Long Shot (Blocked)', category: 'Low xG (<0.20)' },
      { x: 28, y: -12, label: 'Tight Angle Attempt (Off Target)', category: 'Low xG (<0.20)' },
      { x: 30, y: 8, label: 'Deep Distance Effort (Saved)', category: 'Low xG (<0.20)' },
      { x: 9, y: 2, label: 'Corner Rebound Header (Goal)', category: 'High xG (>0.50)' },
      { x: 13, y: -5, label: 'Through-ball Chip (Off Post)', category: 'Medium xG (0.20-0.50)' }
    ]
  },
  {
    id: 'telecom-churn-analysis',
    title: 'Telecom Customer Churn Diagnostic & Retention Engine',
    subtitle: 'Subscriber Tenure Survival Modeling & Cohort Risk Analysis',
    category: 'Customer Analytics & Retention',
    tags: ['Python', 'SQL', 'Customer Churn', 'Power BI', 'Tenure Analysis', 'EDA'],
    githubUrl: 'https://github.com/vvachhani28-ux/Telecom_Churn_Analysis',
    summary: 'Investigated demographic, contract, and service usage patterns across 7,000+ telecommunications subscribers to uncover root causes of customer attrition and model proactive retention interventions.',
    problem: 'A subscription telecommunications carrier suffered from an elevated 26.5% monthly customer churn rate. Steep attrition was eroding customer lifetime value (LTV) and multiplying customer acquisition costs (CAC) without clear visibility into drop-off triggers.',
    approach: 'Aggregated subscriber telemetry into tenure cohorts (0-12 months, 13-24 months, etc.). Evaluated churn probability against contract structures (month-to-month vs 1-year/2-year), internet service type (Fiber Optic vs DSL), tech support add-ons, and payment methods. Built classification trees and survival curves to measure customer lifetime decay.',
    impact: 'Discovered that Month-to-Month customers with Fiber Optic service lacking Tech Support suffered a peak 42.7% churn rate within their first 6 months. Designed a targeted proactive retention strategy providing bundled support and electronic auto-pay discounts, projecting a 15.3% reduction in overall cohort churn.',
    metrics: [
      { label: 'Subscriber Base', value: '7,043 Accounts', description: 'Granular subscriber profiles audited' },
      { label: 'Baseline Churn', value: '26.5% Rate', description: 'Initial customer attrition rate' },
      { label: 'Churn Reduction', value: '-15.3% Cut', description: 'Targeted retention bundle impact' }
    ],
    chartType: 'cohort',
    data: [
      { label: 'Tenure 0-6m', value: 42 },
      { label: 'Tenure 7-12m', value: 31 },
      { label: 'Tenure 13-24m', value: 23 },
      { label: 'Tenure 25-36m', value: 16 },
      { label: 'Tenure 37-48m', value: 11 },
      { label: 'Tenure 49-60m', value: 8 }
    ],
    cohortData: {
      months: ['Month-to-Month', 'One-Year Plan', 'Two-Year Plan', 'Fiber Optic Sub', 'DSL Sub'],
      rates: [
        [100, 58, 44, 35, 29, 24],
        [100, 89, 84, 80, 77, 75],
        [100, 96, 94, 92, 90, 89],
        [100, 57, 43, 34, 28, 22],
        [100, 78, 71, 67, 63, 61]
      ]
    }
  },
  {
    id: 'imdb-ratings-eda',
    title: 'IMDb Movie Ratings, Box Office & Genre Success EDA',
    subtitle: 'Runtime Optimization, Rating Distributions & Commercial Multipliers',
    category: 'Media & Entertainment Analytics',
    tags: ['Python', 'Pandas', 'EDA', 'Matplotlib', 'Seaborn', 'Statistical Analysis'],
    githubUrl: 'https://github.com/vvachhani28-ux/IMDB-ratings-EDA-project',
    summary: 'Performed exploratory data analysis and correlation modeling on 5,000+ film records from IMDb to uncover drivers of audience reception, critical acclaim, and return-on-investment (ROI).',
    problem: 'Entertainment studios and indie distributors frequently misgauge the relationship between production budgets, runtime duration, and audience ratings, leading to misallocated marketing capital and underperforming theatrical releases.',
    approach: 'Cleaned raw IMDb metadata, imputing missing financial data and parsing multi-genre attributes. Analyzed rating frequency distributions, voter demographic biases, runtime sweet-spots, and director track records. Applied log-transformation to gross revenues and calculated budget-to-return multipliers.',
    impact: 'Discovered that films with runtimes between 110–125 minutes achieved the optimal balance of rating approval (median 7.2) and theatrical earnings. Identified Sci-Fi and Animation as yielding the highest average ROI multipliers (3.4x production budget).',
    metrics: [
      { label: 'Catalog Analyzed', value: '5,043 Titles', description: 'Global feature films examined' },
      { label: 'Runtime Sweet-Spot', value: '110-125 min', description: 'Peak audience & critical score' },
      { label: 'Top Genre Multiple', value: '3.4x ROI', description: 'Average box office return multiplier' }
    ],
    chartType: 'bar',
    data: [
      { label: 'Animation', value: 7.1, secondaryValue: 3.4 },
      { label: 'Sci-Fi', value: 6.9, secondaryValue: 3.2 },
      { label: 'Drama', value: 7.3, secondaryValue: 2.1 },
      { label: 'Action', value: 6.4, secondaryValue: 2.7 },
      { label: 'Comedy', value: 6.2, secondaryValue: 2.4 },
      { label: 'Horror', value: 5.9, secondaryValue: 2.9 },
      { label: 'Documentary', value: 7.6, secondaryValue: 1.8 }
    ]
  },
  {
    id: 'youtube-channels-eda',
    title: 'Global YouTube Channels Performance & Monetization EDA',
    subtitle: 'Niche Velocity, Subscriber Saturation & Regional View Share',
    category: 'Social Media & Creator Economy',
    tags: ['Python', 'EDA', 'Pandas', 'Data Visualization', 'NumPy', 'Seaborn'],
    githubUrl: 'https://github.com/vvachhani28-ux/Youtube-channels-EDA-project',
    summary: 'Conducted comprehensive exploratory data analysis on the top 1,000 global YouTube channels, modeling subscriber saturation curves, view velocity per upload, and category earnings potential.',
    problem: 'Digital media networks and content creators struggle to decipher the non-linear relationship between upload volume, subscriber growth, and actual view velocity across content categories and geographic markets.',
    approach: 'Extracted and sanitized metrics for the top 1,000 global channels across 20+ countries and 15 niches. Evaluated subscriber-to-view ratios, upload frequency decay curves, and estimated CPM monetization brackets. Performed geographic concentration analysis across high-volume creator markets.',
    impact: 'Demonstrated that publishing more than 3 high-production videos per week yields diminishing returns in non-news niches. Proved that Music and Entertainment account for 48.2% of global aggregate views while representing only 31.4% of top creator profiles.',
    metrics: [
      { label: 'Top Channels', value: '1,000 Creators', description: 'Global verified channel logs' },
      { label: 'Cumulative Views', value: '10.2 Trillion', description: 'Aggregated view telemetry' },
      { label: 'Market Concentration', value: '48.2% Share', description: 'Entertainment & Music views' }
    ],
    chartType: 'bar',
    data: [
      { label: 'Entertainment', value: 48.5, secondaryValue: 32.1 },
      { label: 'Music', value: 42.1, secondaryValue: 28.4 },
      { label: 'Education', value: 16.8, secondaryValue: 14.5 },
      { label: 'Gaming', value: 24.3, secondaryValue: 18.7 },
      { label: 'People & Blogs', value: 18.2, secondaryValue: 15.2 },
      { label: 'Tech / HowTo', value: 9.4, secondaryValue: 7.8 }
    ]
  },
  {
    id: 'ola-ride-hailing-sql',
    title: 'Ola Ride-Hailing Operations & Revenue SQL Analytics',
    subtitle: 'Ride Fulfillment Diagnostics, Peak Surge Windows & Driver Churn SQL',
    category: 'Operations & Urban Mobility SQL',
    tags: ['SQL', 'PostgreSQL', 'Window Functions', 'CTEs', 'Data Aggregation', 'ETL'],
    githubUrl: 'https://github.com/vvachhani28-ux/ola-ride-hailing-sql-project',
    summary: 'Authored complex relational SQL analytical suites with CTEs and window functions on 100,000+ ride-hailing logs to optimize driver dispatching, reduce cancellations, and model revenue by vehicle category.',
    problem: 'Urban mobility platforms encounter severe revenue leakage from unmet demand, unbalanced vehicle category supply during morning/evening commute spikes, and high driver cancellation frequencies.',
    approach: 'Constructed 25+ advanced PostgreSQL queries utilizing Common Table Expressions (CTEs), multi-table joins, and window functions (ROW_NUMBER(), RANK(), LAG(), and PARTITION BY aggregates). Analyzed booking statuses, vehicle category utilization (Prime Sedan, Mini, Auto, Bike), customer payment modalities, and hourly cancellation reasons.',
    impact: 'Pinpointed that 34.2% of driver cancellations occurred during the 5 PM - 8 PM evening rush, predominantly due to unfavorable drop destinations. Formulated surge and corridor dispatch models that simulate a 14.8% increase in ride fulfillment and reduce driver turnaround idle time by 18 minutes.',
    metrics: [
      { label: 'Booking Logs', value: '100K+ Rides', description: 'Transactional database audited' },
      { label: 'SQL Analytical Queries', value: '25+ Complex', description: 'CTEs & window functions' },
      { label: 'Fulfillment Lift', value: '+14.8% Boost', description: 'Simulated corridor dispatch gain' }
    ],
    chartType: 'bar',
    data: [
      { label: 'Prime Sedan', value: 82.4, secondaryValue: 420 },
      { label: 'Mini', value: 78.1, secondaryValue: 310 },
      { label: 'Prime SUV', value: 85.6, secondaryValue: 580 },
      { label: 'Auto', value: 71.3, secondaryValue: 140 },
      { label: 'Bike', value: 89.2, secondaryValue: 85 }
    ]
  }
];

export const skillsData = {
  languages: [
    { name: 'Python', level: 90, usage: 'Pandas, NumPy, Seaborn, Scikit-learn, Statsmodels' },
    { name: 'SQL', level: 88, usage: 'PostgreSQL, MySQL, Complex Joins, Window Functions, CTEs' },
    { name: 'R Programming', level: 75, usage: 'ggplot2, dplyr, Tidyr, Hypothesis Testing' },
    { name: 'HTML/CSS/JS', level: 70, usage: 'Interactive dashboards, React visualizers, custom SVGs' }
  ],
  tools: [
    { name: 'Power BI', level: 85, category: 'Visualization', cert: 'PL-300 Certified' },
    { name: 'Tableau', level: 80, category: 'Visualization', cert: 'Desktop Specialist' },
    { name: 'Advanced Excel', level: 92, category: 'Data Wrangling', cert: 'Pivot Tables, VLOOKUP, Solver' },
    { name: 'Git & GitHub', level: 82, category: 'DevOps/Collaboration', cert: 'Version Control' }
  ],
  methodologies: [
    { name: 'Exploratory Data Analysis (EDA)', level: 95 },
    { name: 'A/B Testing & Hypothesis Testing', level: 85 },
    { name: 'Data Wrangling & ETL', level: 90 },
    { name: 'Regression & Clustering models', level: 80 }
  ]
};

export const educationHistory = [
  {
    degree: 'Bachelor of Science in Statistics & Computer Science',
    institution: 'Tech National University, College of Computing & Science',
    duration: '2022 - 2026 (Expected)',
    gpa: '3.82 / 4.00',
    achievements: [
      'Deans Honor List for 6 consecutive semesters',
      'President of the Tech Statistics & Analytics Student Society',
      'Winner of the National Data-Hackathon (2025) - Predictive Pricing Category'
    ],
    coursework: ['Applied Regression Analysis', 'Probability & Inference', 'Database Systems (SQL)', 'Machine Learning Models', 'Data Structures & Algorithms']
  }
];

export const academicExperience = [
  {
    role: 'Undergraduate Teaching Assistant - Business Analytics',
    institution: 'Tech National University',
    duration: 'Sep 2024 - Present',
    details: [
      'Led weekly practical lab sessions for 45+ sophomore students on advanced SQL querying, relational databases, and Python Pandas concepts.',
      'Designed mock business datasets simulating stock portfolios and marketing logs to create relatable training exercises.',
      'Maintained a 4.8/5.0 student feedback rating for clarity and structural support.'
    ]
  },
  {
    role: 'Data Analyst Intern',
    institution: 'Quantico Capital Management',
    duration: 'Jun 2024 - Aug 2024',
    details: [
      'Developed and automated a weekly pipeline using Python & Excel to extract, clean, and summarize macroeconomic indicators for fund managers.',
      'Refactored legacy Excel reports with dynamic templates and structured formulas, saving 4-5 hours of manual work weekly.',
      'Built a Power BI marketing tracking dashboard showing digital ad spends and conversion funnels.'
    ]
  }
];
