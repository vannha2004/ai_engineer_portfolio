import React, { useState } from 'react';
import {
  GitFork,
  ChevronDown,
  ChevronUp,
  Play,
  CheckCircle2,
  Cpu,
  Zap,
  ShieldCheck,
  TrendingDown,
  TrendingUp,
  ExternalLink
} from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpenDemo?: (demoType: string) => void;
  lang?: 'ja' | 'en' | 'vi';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDemo, lang = 'ja' }) => {
  const [expanded, setExpanded] = useState(false);

  const getCategoryBadge = (cat: Project['category']) => {
    switch (cat) {
      case 'speech_audio':
        return { label: '音声・音響AI', color: 'text-rose-400 bg-rose-950/60 border-rose-800/60' };
      case 'cv_iot':
        return { label: 'コンピュータビジョン・IoT', color: 'text-emerald-400 bg-emerald-950/60 border-emerald-800/60' };
      case 'genai_rag':
        return { label: 'RAG・LLM', color: 'text-indigo-400 bg-indigo-950/60 border-indigo-800/60' };
      case 'mlops_inference':
        return { label: '推論高速化・MLOps', color: 'text-amber-400 bg-amber-950/60 border-amber-800/60' };
      default:
        return { label: 'AIシステム', color: 'text-slate-400 bg-slate-900 border-slate-800' };
    }
  };

  const badge = getCategoryBadge(project.category);

  return (
    <div
      id={`project-card-${project.id}`}
      className="bg-slate-950/80 hover:bg-slate-900/90 border border-slate-800/90 hover:border-rose-500/40 rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between group shadow-xl shadow-black/40 backdrop-blur-md relative overflow-hidden"
    >
      {/* Subtle Sakura Accent line on top hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-rose-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div>
        {/* Card Header: Category & Demo button */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium border ${badge.color}`}>
              {badge.label}
            </span>
            {project.statusBadge && (
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-slate-900 text-slate-300 border border-slate-800">
                {project.statusBadge}
              </span>
            )}
          </div>

          {project.demoType && onOpenDemo && (
            <button
              onClick={() => onOpenDemo(project.demoType!)}
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 hover:text-rose-200 border border-rose-500/30 text-xs font-mono font-medium transition-colors"
              title="ポートフォリオ内でデモを試す"
            >
              <Play className="w-3 h-3 fill-current text-rose-400" />
              <span>デモを起動</span>
            </button>
          )}
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-base sm:text-lg font-bold text-slate-100 group-hover:text-rose-300 transition-colors leading-snug">
          {project.title}
        </h3>
        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
          {project.subtitle}
        </p>

        {/* Key Production Metrics Grid (Concise) */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-3.5 p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-[10px] font-mono text-slate-400 uppercase truncate">
                  {metric.label}
                </span>
                <span className="text-sm sm:text-base font-extrabold font-mono text-rose-300 mt-0.5">
                  {metric.value}
                </span>
                {metric.change && (
                  <span className="text-[10px] text-emerald-400 font-mono truncate">
                    {metric.change}
                  </span>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Concise STAR Summary */}
        <div className="space-y-2 mt-3 text-xs leading-relaxed text-slate-300">
          <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
            <span className="text-rose-400 font-bold font-mono mr-1.5">【課題背景】</span>
            <span>{project.star.situation}</span>
          </div>

          <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
            <span className="text-amber-400 font-bold font-mono mr-1.5">【目標】</span>
            <span>{project.star.task}</span>
          </div>

          {/* Collapsible Action & Result details */}
          {expanded && (
            <div className="space-y-2.5 pt-1 animate-fadeIn">
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                <p className="text-cyan-400 font-bold font-mono mb-1.5">【取り組み・エンジニアリング】</p>
                <ul className="space-y-1 text-slate-300 list-disc list-inside">
                  {project.star.action.map((act, i) => (
                    <li key={i} className="leading-snug">{act}</li>
                  ))}
                </ul>
              </div>

              <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-800/40">
                <p className="text-emerald-400 font-bold font-mono mb-1.5">【実測成果・導入効果】</p>
                <ul className="space-y-1 text-slate-200">
                  {project.star.result.map((res, i) => (
                    <li key={i} className="flex items-start gap-1.5 leading-snug">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Architecture Pipeline */}
              {project.architecture && project.architecture.length > 0 && (
                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 font-mono text-[11px]">
                  <p className="text-indigo-300 font-bold mb-1.5">【システム構成パイプライン】</p>
                  <div className="space-y-1">
                    {project.architecture.map((arch, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-slate-300">
                        <span className="text-rose-400 font-bold">0{i+1}.</span>
                        <span>{arch}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Card Footer: Tech Tags & Expand Toggle */}
      <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-col gap-2.5">
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-1">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-xs text-rose-400 hover:text-rose-300 font-mono font-medium transition-colors"
          >
            <span>{expanded ? '詳細を閉じる' : 'STAR詳細とアーキテクチャを見る'}</span>
            {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          <div className="flex items-center gap-2">
            {project.huggingFaceUrl && (
              <a
                href={project.huggingFaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-1 rounded bg-slate-900 hover:bg-slate-800 text-[11px] font-mono text-slate-300 hover:text-white border border-slate-800 transition-colors flex items-center gap-1"
                title="Hugging Face Model"
              >
                <span>🤗 モデル</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                title="GitHub Repository"
              >
                <GitFork className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
