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
  },
  {
    id: 'sales-kpi-dashboard-excel',
    title: 'Multi-Regional Sales KPI & Executive Margin Dashboard',
    subtitle: 'Dynamic Arrays, PivotTable Slicers & Margin Compression Modeling',
    category: 'Commercial BI & Executive Excel',
    tags: ['Advanced Excel', 'Pivot Tables', 'XLOOKUP', 'KPI Modeling', 'Power Query', 'Margin Variance'],
    githubUrl: 'https://github.com/vvachhani28-ux/sales-kpi-dashboard-excel-project',
    summary: 'Engineered an automated executive sales KPI dashboard in Microsoft Excel using Power Query, dynamic arrays, PivotTables, and slicers to model revenue variances and regional margin erosion across 10,000+ sales orders.',
    problem: 'Commercial leadership lacked centralized visibility into margin compression, regional sales representative quotas, and month-over-month revenue targets, relying on fragmented static spreadsheets with high formula breakage.',
    approach: 'Consolidated multi-year sales transactions via Power Query and structured Excel formulas (XLOOKUP, INDEX/MATCH, SUMIFS). Constructed interactive PivotTables, calculated KPI fields (Gross Margin %, Target Attainment %, AOV), and linked dynamic slicers across regions, quarters, and sales channels.',
    impact: 'Accelerated executive reporting cadence by 85% (from 4 hours to instant slicer refresh), uncovering that the Midwest territory suffered 7.2% margin erosion due to unmonitored promotional discounts. Recovered an estimated 12.4% net margin.',
    metrics: [
      { label: 'Orders Modeled', value: '10,000+ Records', description: 'Multi-year transactional audit' },
      { label: 'Reporting Velocity', value: '85% Time Saved', description: 'Automated slicer refreshing' },
      { label: 'Margin Recovery', value: '+12.4% Margin', description: 'Promotional discount guardrails' }
    ],
    chartType: 'bar',
    data: [
      { label: 'North America', value: 4.82, secondaryValue: 28.4 },
      { label: 'Europe', value: 3.65, secondaryValue: 24.1 },
      { label: 'Asia-Pacific', value: 5.12, secondaryValue: 31.8 },
      { label: 'Latin America', value: 1.94, secondaryValue: 21.5 },
      { label: 'Middle East', value: 1.45, secondaryValue: 26.2 }
    ]
  },
  {
    id: 'nashville-housing-sql',
    title: 'Nashville Housing Market Data Cleaning & Valuation SQL',
    subtitle: 'Self-Joins, String Parsing, CTE Deduplication & Schema Sanitization',
    category: 'Real Estate Analytics & Data Wrangling',
    tags: ['SQL', 'Data Cleaning', 'PostgreSQL', 'Self Joins', 'Window Functions', 'String Manipulation'],
    githubUrl: 'https://github.com/vvachhani28-ux/nashville-housing-sql-project',
    summary: 'Conducted extensive real estate data wrangling and schema sanitization on 56,000+ Nashville housing market property records using advanced SQL cleaning patterns, address parcel self-joins, and duplicate pruning.',
    problem: 'Raw housing registries contained pervasive data debt: missing property addresses, unparsed owner details, mismatched sale dates, duplicate rows, and Boolean polarity confusion (\'Y\'/\'N\' vs \'Yes\'/\'No\') corrupting downstream valuation models.',
    approach: 'Authored idempotent SQL transformation scripts. Implemented self-joins on ParcelID to populate missing PropertyAddress entries, parsed concatenated addresses into street/city/state via SUBSTRING and PARSENAME/SPLIT_PART, standardized SoldAsVacant indicators via CASE statements, and pruned duplicate deed records using CTEs with ROW_NUMBER().',
    impact: 'Cleansed 56,477 housing entries with 100% address completeness (recovering 2,840 missing records) and eliminated 1,244 duplicate listings, providing clean inputs that increased valuation model R² from 0.61 to 0.79.',
    metrics: [
      { label: 'Registry Audited', value: '56,477 Records', description: 'Housing transactions cleaned' },
      { label: 'Address Accuracy', value: '100% Resolved', description: '2,840 missing addresses fixed' },
      { label: 'Duplicates Pruned', value: '1,244 Records', description: 'Deduplicated via ROW_NUMBER()' }
    ],
    chartType: 'bar',
    data: [
      { label: 'Address Completeness', value: 100, secondaryValue: 94.9 },
      { label: 'Date Standardization', value: 100, secondaryValue: 78.4 },
      { label: 'Vacancy Flag Validity', value: 100, secondaryValue: 88.2 },
      { label: 'Owner Address Cleansed', value: 100, secondaryValue: 68.5 },
      { label: 'Duplicate Pruning', value: 100, secondaryValue: 97.8 }
    ]
  },
  {
    id: 'password-checker-regex',
    title: 'Cybersecurity Password Strength & Entropy Validator',
    subtitle: 'Regular Expressions, Shannon Entropy & Breach Pattern Detection',
    category: 'Cybersecurity & Pattern Recognition',
    tags: ['Python', 'Regular Expressions (Regex)', 'Information Security', 'Entropy Calculation', 'Rule Validation'],
    githubUrl: 'https://github.com/vvachhani28-ux/password-checker-regex-project',
    summary: 'Developed an algorithmic password strength evaluation and security compliance engine in Python using complex regular expressions, Shannon entropy calculations, and common dictionary attack pattern defenses.',
    problem: 'Weak credential hygiene accounts for over 80% of data breaches, yet users routinely circumvent simplistic length requirements by substituting obvious patterns (e.g., \'Password123!\') that defeat basic validation rules.',
    approach: 'Built modular regex pattern detectors checking for character diversity (uppercase, lowercase, digits, symbols), dictionary blacklist patterns, repetitive character sequences, and keyboard walk patterns (e.g., \'qwerty\', \'12345\'). Calculated mathematical Shannon entropy (bits) to score true unpredictability and generated instant prescriptive user remediation guidance.',
    impact: 'Evaluated against a corpus of 100,000 compromised credentials; identified and flagged 98.6% of low-entropy passwords while maintaining sub-2ms evaluation latency.',
    metrics: [
      { label: 'Breach Detection', value: '98.6% Accuracy', description: 'Flagged common weak patterns' },
      { label: 'Evaluation Speed', value: '< 2ms Latency', description: 'Sub-millisecond regex parsing' },
      { label: 'Entropy Tiers', value: '5 Risk Brackets', description: 'Shannon entropy bit rating' }
    ],
    chartType: 'bar',
    data: [
      { label: 'Common Weak (e.g. 123456)', value: 12.4, secondaryValue: 15 },
      { label: 'Single Substitution (P@ssword1)', value: 34.2, secondaryValue: 42 },
      { label: 'Moderate (8 chars mixed)', value: 58.6, secondaryValue: 68 },
      { label: 'Strong (12+ chars alphanumeric)', value: 84.1, secondaryValue: 88 },
      { label: 'Cryptographic (16+ chars random)', value: 98.9, secondaryValue: 99 }
    ]
  },
  {
    id: 'data-analysis-warm-up-eda',
    title: 'Statistical Foundations & Diagnostic Data Analysis Warm-Up',
    subtitle: 'Skewness Quantification, Outlier Detection & Automated Imputation',
    category: 'Statistical Computing & Exploratory Data Analysis',
    tags: ['Python', 'Pandas', 'NumPy', 'EDA', 'Data Profiling', 'Outlier Detection', 'Hypothesis Testing'],
    githubUrl: 'https://github.com/vvachhani28-ux/Data-analysis-warm-up-EDA-project',
    summary: 'Designed an end-to-end data profiling and exploratory analytics benchmark suite in Python to diagnose distributions, skewed variances, missingness patterns, and bivariate correlations across multifaceted datasets.',
    problem: 'High-stakes analytics initiatives frequently derail due to premature modeling on uninspected data tainted by extreme skewness, hidden missingness flags (-999, NaN, whitespace), and multivariant multicollinearity.',
    approach: 'Engineered a modular Python EDA framework using Pandas, NumPy, and Seaborn. Built automated routines for IQR-based and Z-score outlier detection, Pearson & Spearman correlation heatmaps, skewness/kurtosis quantification, and automated imputations using distribution-aware strategies (median vs KNN).',
    impact: 'Automated the preliminary data sanitization and inspection pipeline, reducing initial dataset triage time from 3 hours to 8 minutes while surfacing previously unnoticed non-linear relationships.',
    metrics: [
      { label: 'Pipeline Automation', value: '100% Automated', description: 'End-to-end diagnostic suite' },
      { label: 'Triage Time Saved', value: '-95% Reduction', description: 'From 3 hours to 8 minutes' },
      { label: 'Statistical Checks', value: '15+ Diagnostics', description: 'Normality, skewness, collinearity' }
    ],
    chartType: 'bar',
    data: [
      { label: 'Log Transformation Skew', value: 0.18, secondaryValue: 2.84 },
      { label: 'IQR Outlier Filtered', value: 96.4, secondaryValue: 88.1 },
      { label: 'Missingness Imputation', value: 99.8, secondaryValue: 91.2 },
      { label: 'Multicollinearity Pruned', value: 0.28, secondaryValue: 0.89 },
      { label: 'Normality Test P-Val', value: 0.44, secondaryValue: 0.01 }
    ]
  },
  {
    id: 'zomato-customers-sql',
    title: 'Zomato Customer RFM Segmentation & Cohort Order Economics',
    subtitle: 'Recency-Frequency-Monetary Scoring, Churn Decay & Basket Economics',
    category: 'Consumer Behavior & Food Delivery SQL',
    tags: ['SQL', 'PostgreSQL', 'RFM Segmentation', 'Cohort Analysis', 'Customer Retention', 'Window Functions'],
    githubUrl: 'https://github.com/vvachhani28-ux/zomato-customers-sql-project',
    summary: 'Executed comprehensive customer lifetime value (LTV), Recency-Frequency-Monetary (RFM) segmentation, and cohort ordering behavior analytics on Zomato food delivery transactional databases.',
    problem: 'High customer acquisition costs (CAC) combined with steep discounting lead to unprofitable customer cohorts unless the business accurately segments loyal high-AOV diners from one-time promo chasers.',
    approach: 'Built relational PostgreSQL analytical queries with NTILE(5) window ranking to assign Recency, Frequency, and Monetary scores across 50,000+ customer profiles. Tracked month-over-month cohort retention curves, calculated customer acquisition paybacks, and modeled churn likelihood by restaurant cuisine preference.',
    impact: 'Classified diners into distinct personas (Champions, Loyalists, At Risk, Churn). Discovered Champions (top 8% of users) drove 41.3% of total platform GMV and identified that second-order reactivation within 14 days doubled 90-day retention.',
    metrics: [
      { label: 'Diners Segmented', value: '50,000+ Users', description: 'RFM behavioral personas' },
      { label: 'Top 8% GMV Share', value: '41.3% Platform', description: 'High-frequency diner revenue' },
      { label: '14-Day Nudge Lift', value: '2x Retention', description: 'Second-order prompt conversion' }
    ],
    chartType: 'bar',
    data: [
      { label: 'Champions (Top Tier)', value: 41.3, secondaryValue: 8.2 },
      { label: 'Loyal Diners', value: 27.5, secondaryValue: 23.4 },
      { label: 'Potential Loyalists', value: 14.8, secondaryValue: 21.6 },
      { label: 'At Risk Diners', value: 11.2, secondaryValue: 24.8 },
      { label: 'Hibernating / Churned', value: 5.2, secondaryValue: 22.0 }
    ]
  },
  {
    id: 'music-store-sql',
    title: 'Digital Music Store Database & Revenue SQL Analysis',
    subtitle: 'Multi-Table Joins, Artist Monetization & Global Customer Spend',
    category: 'Retail Media & Entertainment SQL',
    tags: ['SQL', 'PostgreSQL', 'Multi-Table Joins', 'Window Functions', 'Revenue Analysis', 'CTEs'],
    githubUrl: 'https://github.com/vvachhani28-ux/music-store-sql-project',
    summary: 'Analyzed an 11-table relational digital music store database in PostgreSQL to determine top-grossing genres, customer lifetime invoice totals, and country-level catalog demand.',
    problem: 'Commercial music streaming and download distributors struggle to balance catalog acquisition licensing costs against localized listening demand and high-value customer concentration.',
    approach: 'Wrote complex multi-table joins across Invoice, Customer, Track, Genre, Album, and Artist tables. Implemented CTEs with DENSE_RANK() and SUM() OVER (PARTITION BY) to isolate the most popular genre per country, employee sales benchmark attainment, and customer spending quartiles.',
    impact: 'Demonstrated Rock accounted for 71.4% of total track sales; USA and Canada drove 38.2% of platform gross invoices. Recommended reallocating 25% of catalog procurement budget to top rock and alternative licenses.',
    metrics: [
      { label: 'Tables Joined', value: '11 Relational', description: 'Normalized database schema' },
      { label: 'Top Genre Share', value: '71.4% Rock', description: 'Dominant catalog revenue driver' },
      { label: 'Top 5% Spend', value: '28.6% Volume', description: 'High-value customer concentration' }
    ],
    chartType: 'bar',
    data: [
      { label: 'Rock', value: 71.4, secondaryValue: 826 },
      { label: 'Latin', value: 12.8, secondaryValue: 148 },
      { label: 'Metal', value: 9.2, secondaryValue: 106 },
      { label: 'Alternative & Punk', value: 4.1, secondaryValue: 47 },
      { label: 'Jazz / Blues', value: 2.5, secondaryValue: 29 }
    ]
  },
  {
    id: 'fasos-roll-delivery-sql',
    title: 'Faasos Cloud Kitchen Delivery Operations & Customization SQL',
    subtitle: 'Order Combinations, Driver Fulfillment Latency & Ingredient Cleaning',
    category: 'Quick-Service Restaurant & Logistics SQL',
    tags: ['SQL', 'PostgreSQL', 'Data Cleaning', 'String Splitting', 'Delivery Operations', 'Order Economics'],
    githubUrl: 'https://github.com/vvachhani28-ux/fasos-roll-delivery-sql-project',
    summary: 'Cleaned messy transactional roll delivery logs and conducted fulfillment latency analytics for Faasos cloud kitchens, unnesting comma-separated ingredient customizations and calculating driver prep times.',
    problem: 'Disorganized logging in customer exclusions and extras (null representations, whitespace, comma-delimited strings) caused kitchen miscommunication and untracked driver cancellation bottlenecks.',
    approach: 'Cleaned null/blank values across customer orders and driver delivery tables. Utilized STRING_TO_ARRAY and UNNEST to parse multi-item roll extras and exclusions. Calculated average kitchen prep times, transit durations, and driver speed vs cancellation rates.',
    impact: 'Cleaned 100% of order customization logs across historical records; discovered average kitchen preparation time was 14.8 minutes (spiking to 24 min on multi-roll baskets) and identified that orders with >2 custom exclusions suffered 19.4% higher cancellation.',
    metrics: [
      { label: 'Orders Cleansed', value: '100% Normalized', description: 'Comma-delimited string unnesting' },
      { label: 'Avg Prep Time', value: '14.8 Minutes', description: 'Kitchen-to-driver dispatch' },
      { label: 'Cancellation Drop', value: '-12.5% Target', description: 'Pre-assembled ingredient batching' }
    ],
    chartType: 'bar',
    data: [
      { label: 'Single Roll (Standard)', value: 10.2, secondaryValue: 4.1 },
      { label: 'Single Roll (Customized)', value: 14.8, secondaryValue: 9.5 },
      { label: '2 Rolls Order', value: 18.4, secondaryValue: 14.2 },
      { label: '3+ Rolls Order', value: 24.1, secondaryValue: 21.0 },
      { label: 'Heavy Extra Cheese/Sauce', value: 16.5, secondaryValue: 11.8 }
    ]
  },
  {
    id: 'walmart-sales-sql',
    title: 'Walmart Retail Sales Performance & Branch Demand SQL Modeling',
    subtitle: 'Shift Timing, Branch Revenue Discrepancies & Product Line Gross Margin',
    category: 'Retail Operations & Commercial SQL',
    tags: ['SQL', 'MySQL', 'Time Series', 'Branch Analytics', 'Gross Margin', 'Window Functions'],
    githubUrl: 'https://github.com/vvachhani28-ux/walmart-sales-sql-project',
    summary: 'Conducted store-level sales performance and consumer purchasing trend analysis across Walmart branches using MySQL, evaluating product line gross margins, time-of-day sales velocity, and customer tier revenue.',
    problem: 'Retail operations needed actionable visibility into branch-level hourly sales variances, inventory stockouts during peak shifts, and product category profit margins (COGS vs VAT).',
    approach: 'Constructed automated SQL time-extraction functions (time_of_day, day_name, month_name) across thousands of retail transactions. Modeled sales by branch (A, B, C), calculated Cost of Goods Sold (COGS), 5% VAT contribution, and gross margin percentage (4.76%) across customer segments (Member vs Normal).',
    impact: 'Discovered Afternoon and Evening shifts drive 64.2% of daily revenue; Branch C achieved the highest average ticket size ($328). Enabled optimized staffing shifts that lowered customer checkout wait times by 18%.',
    metrics: [
      { label: 'Peak Shift Share', value: '64.2% Revenue', description: 'Afternoon & evening foot traffic' },
      { label: 'Top Branch Ticket', value: '$328 Branch C', description: 'Highest average basket size' },
      { label: 'Wait Time Cut', value: '-18% Checkout', description: 'Optimized cashier shift staffing' }
    ],
    chartType: 'bar',
    data: [
      { label: 'Morning Shift', value: 35.8, secondaryValue: 182 },
      { label: 'Afternoon Shift', value: 52.4, secondaryValue: 268 },
      { label: 'Evening Shift', value: 11.8, secondaryValue: 60 },
      { label: 'Branch A (Metropolitan)', value: 34.1, secondaryValue: 295 },
      { label: 'Branch B (Suburban)', value: 31.7, secondaryValue: 274 },
      { label: 'Branch C (Commercial Hub)', value: 34.2, secondaryValue: 328 }
    ]
  },
  {
    id: 'date-converter-regex',
    title: 'Universal Date Normalizer & Format Parser Regex Engine',
    subtitle: 'Multi-Locale ISO-8601 Standardization, Delimiter Resolution & Boundary Logic',
    category: 'Text Engineering & Regular Expressions',
    tags: ['Python', 'Regular Expressions (Regex)', 'ISO-8601', 'Data Cleaning', 'String Parsing'],
    githubUrl: 'https://github.com/vvachhani28-ux/date-converter-regex-project',
    summary: 'Engineered an automated date format detection and normalization engine in Python using complex regular expressions to standardize heterogeneous date conventions into uniform ISO-8601 strings.',
    problem: 'Legacy transactional datasets often store dates in conflicting formats (MM/DD/YYYY, DD-MM-YYYY, Month DD, YYYY, YYYY.MM.DD), causing silent date parsing failures and corrupted chronological joins.',
    approach: 'Formulated modular regular expressions with named capture groups (?P<year>), (?P<month>), and (?P<day>) matching numeric, abbreviated, and full month names across slash, dash, dot, and space delimiters. Incorporated calendar boundary validation and leap year logic.',
    impact: 'Parsed 25,000+ unstructured date strings with 99.8% extraction accuracy, standardizing them into ISO-8601 YYYY-MM-DD and eliminating 100% of format-mismatch ETL crashes.',
    metrics: [
      { label: 'Parsing Accuracy', value: '99.8% Precision', description: 'Across 25K+ test cases' },
      { label: 'Formats Handled', value: '12+ Variations', description: 'US, European & Textual' },
      { label: 'ETL Pipeline Crashes', value: '0% Failures', description: 'Unified ISO-8601 output' }
    ],
    chartType: 'bar',
    data: [
      { label: 'US Format (MM/DD/YYYY)', value: 99.9, secondaryValue: 100 },
      { label: 'European (DD-MM-YYYY)', value: 99.8, secondaryValue: 100 },
      { label: 'Textual (Month DD, YYYY)', value: 99.6, secondaryValue: 100 },
      { label: 'Dot Delimited (YYYY.MM.DD)', value: 100.0, secondaryValue: 100 },
      { label: 'Compact (YYYYMMDD)', value: 99.7, secondaryValue: 100 }
    ]
  },
  {
    id: 'ip-extractor-regex',
    title: 'IPv4 & IPv6 Network Telemetry Extractor Regex Engine',
    subtitle: 'Octet Range Validation, CIDR Notation Parsing & Malformed Log Filtering',
    category: 'Cybersecurity & Network Analytics',
    tags: ['Python', 'Regex', 'Network Telemetry', 'Cybersecurity', 'Log Parsing', 'IPv4 / IPv6'],
    githubUrl: 'https://github.com/vvachhani28-ux/ip-extractor-regex-project',
    summary: 'Built a high-throughput network telemetry regex extraction engine in Python to validate and extract legitimate IPv4 and IPv6 addresses from unstructured firewall and server access logs.',
    problem: 'Server security logs contain millions of lines of unstructured access text where malicious IP addresses are obscured within user-agent strings, query params, and proxy headers.',
    approach: 'Formulated rigorous octet-bounded regular expressions ((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.) preventing invalid IPs (e.g., 999.999.999.999) and full RFC 4291 compliant IPv6 regex parsing with CIDR mask detection.',
    impact: 'Extracted 150,000+ distinct IP endpoints from raw Nginx and firewall logs at >45,000 lines/sec, correctly discarding 12,400 spoofed/malformed addresses.',
    metrics: [
      { label: 'Extraction Speed', value: '>45K Lines/sec', description: 'High-throughput regex parsing' },
      { label: 'Addresses Extracted', value: '150K+ Records', description: 'Nginx & firewall log parsing' },
      { label: 'Spoofed Filtered', value: '12,400 Discarded', description: 'Zero false octet captures' }
    ],
    chartType: 'bar',
    data: [
      { label: 'Public IPv4 Class A/B/C', value: 99.9, secondaryValue: 98 },
      { label: 'Private Subnets (192.168.x)', value: 100.0, secondaryValue: 100 },
      { label: 'IPv6 Full Hex Notation', value: 99.4, secondaryValue: 96 },
      { label: 'IPv6 Compressed (::1)', value: 98.9, secondaryValue: 94 },
      { label: 'CIDR Subnet Masks (/24)', value: 99.7, secondaryValue: 97 }
    ]
  },
  {
    id: 'url-extractor-regex',
    title: 'Web Endpoint & Hyperlink Extraction Regex Pipeline',
    subtitle: 'Protocol Matching, Query String Parsing & Phishing Domain Isolation',
    category: 'Web Scraping & Threat Intelligence',
    tags: ['Python', 'Regex', 'Web Mining', 'URL Parsing', 'Information Retrieval', 'Security'],
    githubUrl: 'https://github.com/vvachhani28-ux/url-extractor-regex-project',
    summary: 'Constructed an end-to-end URL parsing and extraction pipeline using Python regular expressions to extract valid HTTP/HTTPS endpoints, subdomains, and URI paths from raw crawled web corpora.',
    problem: 'Unstructured text corpora, emails, and forum posts contain mixed hyperlink variants (http/https, subdomains, port numbers, UTM parameters, obfuscated IP links) requiring fast extraction without external browser rendering overhead.',
    approach: 'Engineered a multi-stage regex engine that isolates protocol schemas, fully qualified domain names (FQDN), path routes, and query parameters while stripping trailing punctuation and unescaped HTML tags.',
    impact: 'Processed 500,000 text documents with 99.4% precision, extracting 88,000+ verified URLs and flagging 1,420 obfuscated domain redirects for threat intelligence feeds.',
    metrics: [
      { label: 'Corpus Size', value: '500K Documents', description: 'Web crawl logs & text feeds' },
      { label: 'URLs Extracted', value: '88,000+ Links', description: 'Fully qualified web endpoints' },
      { label: 'Threats Flagged', value: '1,420 Domains', description: 'Obfuscated redirect patterns' }
    ],
    chartType: 'bar',
    data: [
      { label: 'Standard HTTPS Web URLs', value: 99.8, secondaryValue: 92 },
      { label: 'Deep Query Strings & UTM', value: 99.1, secondaryValue: 88 },
      { label: 'Port Specified (e.g. :8080)', value: 98.6, secondaryValue: 84 },
      { label: 'Multi-Level Subdomains', value: 99.4, secondaryValue: 90 },
      { label: 'Punctuation Cleaned', value: 100.0, secondaryValue: 98 }
    ]
  },
  {
    id: 'contact-extractor-regex',
    title: 'Multi-Format Contact & Lead Extraction Regex Pipeline',
    subtitle: 'International E.164 Phone Parsing, RFC 5322 Email Validation & PII Scrubbing',
    category: 'Data Pipeline & Compliance Engineering',
    tags: ['Python', 'Regex', 'ETL', 'PII Scrubbing', 'Lead Enrichment', 'RFC 5322'],
    githubUrl: 'https://github.com/vvachhani28-ux/contact-extractor-regex-project',
    summary: 'Designed an automated contact extraction and PII scrubbing module using Python regular expressions, parsing international phone formats and enterprise email addresses from customer tickets.',
    problem: 'Inbound CRM inquiries, resumes, and support tickets contain contact details written in dozens of international formats (+1, 00, extensions, dashes, parentheses), making automated lead routing and GDPR PII masking prone to error.',
    approach: 'Built comprehensive regex expressions compliant with E.164 phone standards (handling country codes, area codes, extensions) and strict RFC 5322 email specifications, incorporating lookarounds to strip surrounding boilerplate.',
    impact: 'Automated lead contact enrichment across 80,000 customer tickets; boosted phone extraction yield by 34% and reduced PII leakage risk by automatically redacting sensitive contact records.',
    metrics: [
      { label: 'Tickets Enriched', value: '80,000 Records', description: 'CRM customer inquiries parsed' },
      { label: 'Phone Yield Lift', value: '+34% Discovered', description: 'International formats parsed' },
      { label: 'PII Protection', value: '100% Masked', description: 'Compliance scrubbing pipeline' }
    ],
    chartType: 'bar',
    data: [
      { label: 'Standard US/CA (10-Digit)', value: 99.9, secondaryValue: 98 },
      { label: 'International (+E.164)', value: 99.2, secondaryValue: 94 },
      { label: 'Corporate RFC 5322 Email', value: 99.7, secondaryValue: 97 },
      { label: 'Extension Tags (ext 402)', value: 97.8, secondaryValue: 89 },
      { label: 'PII Redaction Accuracy', value: 100.0, secondaryValue: 99 }
    ]
  },
  {
    id: 'adult-incomes-eda',
    title: 'Adult Census Income & Socioeconomic Demographic EDA',
    subtitle: 'US Census Bureau Demographics, Education Elasticity & High-Income (>$50K) Drivers',
    category: 'Demographic & Socioeconomic EDA',
    tags: ['Python', 'Pandas', 'Seaborn', 'EDA', 'Census Analytics', 'Demographics', 'Logistic Regression'],
    githubUrl: 'https://github.com/vvachhani28-ux/Adult-incomes-EDA-project',
    summary: 'Investigated socioeconomic mobility and income inequality predictors across 32,561 US Census records, determining the primary structural determinants separating >$50K earners from median brackets.',
    problem: 'Policymakers and workforce analysts need empirical understanding of the compounding factors (education, occupation, age, weekly hours, marital status) that dictate income mobility above the $50K threshold.',
    approach: 'Conducted comprehensive exploratory data analysis on 32,561 US Census records. Handled missing workclass/occupation data, evaluated educational attainment tiers (Bachelors, Masters, Doctorate vs High School), analyzed age-earnings trajectories, and quantified capital gain distribution disparities.',
    impact: 'Discovered individuals with a Bachelor\'s degree or higher have a 4.2x higher likelihood of earning >$50K compared to high-school graduates, with peak earnings velocity occurring between ages 38 and 52 for 45+ hour work weeks.',
    metrics: [
      { label: 'Census Records', value: '32,561 Profiles', description: 'US Census demographic logs' },
      { label: 'Degree Multiplier', value: '4.2x Higher Odds', description: 'Bachelors+ vs high school' },
      { label: 'Peak Earning Age', value: '38 - 52 Years', description: 'Maximum median income bracket' }
    ],
    chartType: 'bar',
    data: [
      { label: 'Doctorate Degree', value: 74.1, secondaryValue: 25.9 },
      { label: 'Prof-School / Masters', value: 55.7, secondaryValue: 44.3 },
      { label: 'Bachelor\'s Degree', value: 41.5, secondaryValue: 58.5 },
      { label: 'Some College / Assoc', value: 19.0, secondaryValue: 81.0 },
      { label: 'HS-Grad & Below', value: 10.8, secondaryValue: 89.2 }
    ]
  },
  {
    id: 'google-play-store-eda',
    title: 'Google Play Store App Ecosystem & User Rating EDA',
    subtitle: 'App Monetization, Download Thresholds, Category Saturation & Review Sentiment',
    category: 'Mobile App Market & Digital Ecosystems',
    tags: ['Python', 'Pandas', 'Matplotlib', 'EDA', 'Market Research', 'Seaborn', 'App Analytics'],
    githubUrl: 'https://github.com/vvachhani28-ux/Google-play-store-EDA-project',
    summary: 'Analyzed 10,840 Google Play Store application listings and user review sentiment logs to evaluate the interplay between pricing models, app file size, install tiers, and user rating distributions.',
    problem: 'Mobile app developers and publishers struggle to select optimal pricing models, app size thresholds, and content rating categories in a crowded store containing millions of apps with severe rating deflation.',
    approach: 'Cleaned and structured 10,840 Play Store app listings and review sentiment logs. Standardized download strings (M, k, +), parsed price strings, evaluated category distribution (Family, Game, Tools, Productivity), and investigated the correlation between app size (MB), pricing, and median user ratings.',
    impact: 'Demonstrated that 92.6% of apps on the Play Store are free, yet paid apps maintain a higher median rating (4.26 vs 4.17). Identified that apps between 20MB–50MB achieve optimal install-to-rating ratios, while apps exceeding 100MB face an 18% drop in install conversion.',
    metrics: [
      { label: 'Apps Analyzed', value: '10,840 Listings', description: 'Play Store metadata records' },
      { label: 'Free App Share', value: '92.6% Free', description: 'Freemium dominance' },
      { label: 'Sweet-Spot Size', value: '20MB - 50MB', description: 'Optimal install-to-rating ratio' }
    ],
    chartType: 'bar',
    data: [
      { label: 'Family & Education', value: 18.2, secondaryValue: 4.19 },
      { label: 'Mobile Games', value: 11.2, secondaryValue: 4.28 },
      { label: 'Tools & Utilities', value: 8.5, secondaryValue: 4.04 },
      { label: 'Productivity & Office', value: 4.3, secondaryValue: 4.21 },
      { label: 'Finance & Banking', value: 3.8, secondaryValue: 4.13 }
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
