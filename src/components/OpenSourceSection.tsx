import React from 'react';
import {
  GitFork,
  Star,
  ExternalLink,
  Code2
} from 'lucide-react';
import { OPEN_SOURCE_REPOS, PERSONAL_INFO } from '../data/portfolioData';

export const OpenSourceSection: React.FC = () => {
  return (
    <section id="opensource" className="py-12 sm:py-16 border-b border-slate-900 scroll-mt-20">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-xs font-mono text-rose-300 mb-3">
              <GitFork className="w-3.5 h-3.5 text-rose-400" />
              <span>オープンソース & 公開モデルリポジトリ</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
              GitHub & Hugging Face 公開実績
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              ECAPA-TDNNモデルのチェックポイント、ONNX量子化変換スクリプト、RAG評価パイプラインをコミュニティ向けに公開しています。
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-xs font-mono text-slate-200 hover:text-white transition-colors"
            >
              <GitFork className="w-3.5 h-3.5 text-rose-400" />
              <span>github.com/vannha2004</span>
            </a>
            <a
              href={PERSONAL_INFO.huggingface}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-xs font-mono text-rose-300 transition-colors"
            >
              <span>🤗 HuggingFace Hub</span>
            </a>
          </div>
        </div>

        {/* Featured Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {OPEN_SOURCE_REPOS.map((repo) => (
            <div
              key={repo.name}
              className="bg-slate-950/85 backdrop-blur-md border border-slate-800/90 hover:border-slate-700 rounded-2xl p-5 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-rose-400 shrink-0" />
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-sm sm:text-base text-slate-100 group-hover:text-rose-300 transition-colors flex items-center gap-1"
                    >
                      <span>{repo.name}</span>
                      <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-rose-400" />
                    </a>
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">
                    {repo.stars} stars
                  </span>
                </div>

                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  {repo.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono text-slate-400">
                  {repo.tech}
                </span>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3 h-3" />
                    <span>{repo.forks}</span>
                  </span>
                  <span className="flex items-center gap-1 text-amber-400">
                    <Star className="w-3 h-3 fill-current" />
                    <span>{repo.stars}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
