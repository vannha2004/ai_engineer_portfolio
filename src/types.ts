export type ProjectCategory = 'all' | 'speech_audio' | 'genai_rag' | 'mlops_inference' | 'cv_iot';

export interface ProjectMetric {
  label: string;
  value: string;
  change?: string;
  direction?: 'up' | 'down' | 'neutral';
}

export interface ProjectStar {
  situation: string;
  task: string;
  action: string[];
  result: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'speech_audio' | 'genai_rag' | 'mlops_inference' | 'cv_iot';
  description: string;
  star: ProjectStar;
  architecture: string[];
  metrics: ProjectMetric[];
  techStack: string[];
  githubUrl: string;
  huggingFaceUrl?: string;
  liveUrl?: string;
  demoType?: 'speech_sim' | 'rag' | 'vram_calc' | 'agent' | 'benchmark';
  featured: boolean;
  statusBadge?: string;
}

export interface SkillItem {
  name: string;
  level: number; // 1-100
  experience: string;
  badge?: string;
  popularProjects?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: SkillItem[];
}

export interface ModelBenchmark {
  id: string;
  modelName: string;
  task: string;
  parameterCount: string;
  originalSize: string;
  precisionBenchmarks: {
    runtime: string; // e.g. 'PyTorch FP32', 'ONNX FP16', 'TensorRT FP16', 'TensorRT INT8'
    latencyMs: number;
    throughputReqSec: number;
    vramMb: number;
    metricScore: string; // e.g. 'EER 1.12%', 'mAP 54.2%', '99.4% Acc'
    speedup: string;
  }[];
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: 'Production & Industry' | 'Research Lab' | 'Education & Leadership';
  summary: string;
  bulletPoints: string[];
  technologies: string[];
  metricHighlight?: string;
}

export interface CredentialItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: 'valedictorian' | 'award' | 'certification' | 'publication' | 'leadership';
  badgeText: string;
  description: string;
  verificationDetails?: string;
  highlightStat?: string;
  iconType: 'trophy' | 'award' | 'medal' | 'book' | 'star' | 'heart';
}

export interface ResearchArticle {
  id: string;
  title: string;
  venue: string;
  date: string;
  readTime: string;
  summary: string;
  tags: string[];
  metrics?: string;
  link?: string;
  authors?: string;
}
