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
