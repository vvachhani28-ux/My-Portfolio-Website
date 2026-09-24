export interface DataPoint {
  label: string;
  value: number;
  secondaryValue?: number;
}

export interface ScatterPoint {
  x: number;
  y: number;
  label: string;
  category: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  summary: string;
  problem: string;
  approach: string;
  impact: string;
  tags: string[];
  githubUrl: string;
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
  chartType: 'bar' | 'line' | 'scatter' | 'cohort';
  data: DataPoint[];
  scatterData?: ScatterPoint[];
  cohortData?: {
    months: string[];
    rates: number[][];
  };
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}
