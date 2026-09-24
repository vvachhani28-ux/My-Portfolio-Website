import { PortfolioProject } from '../types';

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'ecommerce-churn',
    title: 'E-Commerce Cohort Retention & Churn Engine',
    subtitle: 'Customer Lifetime Value & Drop-off Diagnostic Tool',
    category: 'Business Analytics',
    tags: ['Python', 'Pandas', 'SQL', 'Seaborn', 'Power BI'],
    summary: 'Analyzed 12 months of transactional data to identify customer churn triggers, developing retention cohorts that localized high drop-offs to post-first-purchase intervals.',
    problem: 'An emerging DTC e-commerce brand observed a quarter-over-quarter revenue stagnation. While acquisition costs (CAC) were rising, lifetime value (LTV) trended downward, indicating a silent leak in the retention funnel that the team was unable to quantify.',
    approach: 'Wrote advanced SQL window functions to segment customers into monthly acquisition cohorts. Conducted survival analysis in Python (Pandas) and mapped week-over-week retention matrices. Segmented cohorts by purchase behavior, product category, and discount engagement.',
    impact: 'Identified a critical 24% retention cliff between week 1 and week 4 for customers buying discounted items. Initiated a post-purchase automated onboarding flow, increasing week-4 retention by 4.2% and lifting average LTV by 11%.',
    metrics: [
      { label: 'Dataset Size', value: '1.2M+ Rows', description: 'Raw transaction entries analyzed' },
      { label: 'Retention Lift', value: '+4.2%', description: 'Achieved in the target trial cohort' },
      { label: 'LTV Increase', value: '11% Boost', description: 'Attributed to retention optimization' }
    ],
    chartType: 'cohort',
    data: [
      { label: 'Month 0', value: 100 },
      { label: 'Month 1', value: 42 },
      { label: 'Month 2', value: 31 },
      { label: 'Month 3', value: 25 },
      { label: 'Month 4', value: 21 },
      { label: 'Month 5', value: 18 }
    ],
    cohortData: {
      months: ['Jan Cohort', 'Feb Cohort', 'Mar Cohort', 'Apr Cohort', 'May Cohort'],
      rates: [
        [100, 42, 31, 25, 21, 18],
        [100, 45, 33, 27, 23, 0],
        [100, 39, 29, 22, 0, 0],
        [100, 48, 36, 0, 0, 0],
        [100, 44, 0, 0, 0, 0]
      ]
    }
  },
  {
    id: 'climate-gdp',
    title: 'Global CO2 Emissions vs. GDP Growth Coupling Study',
    subtitle: 'Statistical Regression & Regional Clustering Analysis',
    category: 'Macroeconomic & Environmental Analysis',
    tags: ['R Studio', 'Python', 'Statsmodels', 'Clustering', 'Data Wrangling'],
    summary: 'Constructed regression models to analyze whether economic development strictly dictates environmental footprint, revealing decoupling trends in advanced service economies.',
    problem: 'Policy debates often oversimplify the trade-off between GDP growth and environmental sustainability. Academic teams required granular, empirical evidence on whether economic growth can be decoupled from greenhouse gas emissions.',
    approach: 'Merged World Bank GDP records with Global Carbon Project databases. Built a log-linear regression model with fixed-effects controls in Python Statsmodels. Performed K-Means clustering to classify nations into developmental-environmental archetypes.',
    impact: 'Proven that service-based economies achieve an emission peak and decouple at a threshold of ~$38k GDP per capita, while manufacturing hubs maintain a persistent 1.25x linear emission coefficient, providing crucial insights for regional policy makers.',
    metrics: [
      { label: 'Variables Mapped', value: '18 indicators', description: 'Over a 25-year historic timeframe' },
      { label: 'R-Squared Score', value: '0.84', description: 'Goodness of fit for the primary model' },
      { label: 'Nations Grouped', value: '162 Countries', description: 'Clustered into 4 distinct groups' }
    ],
    chartType: 'scatter',
    data: [],
    scatterData: [
      { x: 12, y: 1.5, label: 'India', category: 'Developing Asia' },
      { x: 18, y: 2.8, label: 'Brazil', category: 'Americas' },
      { x: 22, y: 4.1, label: 'China', category: 'Developing Asia' },
      { x: 34, y: 5.5, label: 'Poland', category: 'Europe' },
      { x: 42, y: 6.8, label: 'Japan', category: 'Advanced Asia' },
      { x: 46, y: 5.2, label: 'UK', category: 'Europe' },
      { x: 49, y: 4.8, label: 'France', category: 'Europe' },
      { x: 52, y: 5.9, label: 'Germany', category: 'Europe' },
      { x: 61, y: 12.2, label: 'USA', category: 'Americas' },
      { x: 65, y: 11.4, label: 'Canada', category: 'Americas' },
      { x: 8, y: 0.6, label: 'Kenya', category: 'Africa' },
      { x: 14, y: 1.1, label: 'Indonesia', category: 'Developing Asia' },
      { x: 28, y: 3.5, label: 'Mexico', category: 'Americas' },
      { x: 55, y: 7.2, label: 'Australia', category: 'Americas' }
    ]
  },
  {
    id: 'sales-forecast',
    title: 'Superstore Sales Forecasting & Inventory Modeler',
    subtitle: 'Time Series Predictive Engine for Supply Optimization',
    category: 'Supply Chain Operations',
    tags: ['Python', 'Prophet', 'Advanced Excel', 'Time Series', 'EDA'],
    summary: 'Built an end-to-end seasonal forecasting algorithm to predict inventory requirements, reducing warehousing stockouts during high-demand retail cycles.',
    problem: 'A national superstore distributor suffered from recurring seasonal stockouts on high-margin storage and tech accessories, combined with overstocking of low-demand furniture, resulting in high holding costs.',
    approach: 'Extracted historical sales logs. Executed seasonal decomposition (STL) to separate macro trends from local seasonality. Developed a predictive forecast model using Facebook Prophet, comparing performance against classic SARIMA models.',
    impact: 'Achieved a 91.2% accuracy rate in forecasting monthly product category demand, helping purchasing managers align lead times, reducing product stockouts by 14% and cutting storage costs by 8%.',
    metrics: [
      { label: 'Forecast Accuracy', value: '91.2% MAPE', description: 'Mean Absolute Percentage Error' },
      { label: 'Stockouts Reduced', value: '-14% Drop', description: 'Optimized via predictive buffer stocks' },
      { label: 'Holding Savings', value: '8.4% Cut', description: 'Saved from excess storage reduction' }
    ],
    chartType: 'line',
    data: [
      { label: 'Jan', value: 120, secondaryValue: 115 },
      { label: 'Feb', value: 145, secondaryValue: 140 },
      { label: 'Mar', value: 190, secondaryValue: 185 },
      { label: 'Apr', value: 165, secondaryValue: 172 },
      { label: 'May', value: 210, secondaryValue: 205 },
      { label: 'Jun', value: 250, secondaryValue: 245 },
      { label: 'Jul', value: 240, secondaryValue: 252 },
      { label: 'Aug', value: 310, secondaryValue: 295 },
      { label: 'Sep', value: 270, secondaryValue: 282 },
      { label: 'Oct', value: 290, secondaryValue: 305 },
      { label: 'Nov', value: 380, secondaryValue: 365 },
      { label: 'Dec', value: 420, secondaryValue: 410 }
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
