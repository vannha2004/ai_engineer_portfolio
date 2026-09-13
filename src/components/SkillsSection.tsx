import React, { useState } from 'react';
import { Cpu, Brain, Server, Zap, CheckCircle2 } from 'lucide-react';
import { JA_SKILL_CATEGORIES } from '../data/japaneseN3Data';

export const SkillsSection: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const activeCategory = JA_SKILL_CATEGORIES[activeCategoryIndex];

  return (
    <section id="skills" className="py-12 sm:py-16 border-b border-slate-900 scroll-mt-20">
      <div className="space-y-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-xs font-mono text-rose-300 mb-3">
              <Cpu className="w-3.5 h-3.5 text-rose-400" />
              <span>専門技術・コアスキル</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
              AI開発 & 低遅延エンジニアリング技術
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              音声モデルの学習・最適化から、ONNX Runtime・TensorRTによるハードウェア高速化、本番APIパイプラインまで一貫した開発力を有しています。
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-xl border border-slate-800 shrink-0">
            <CheckCircle2 className="w-4 h-4 text-rose-400" />
            <span>4つの専門領域</span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
          {JA_SKILL_CATEGORIES.map((cat, idx) => {
            const isSelected = activeCategoryIndex === idx;
            return (
              <button
                key={cat.title}
                onClick={() => setActiveCategoryIndex(idx)}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'bg-rose-500/15 border-rose-500/40 text-rose-200 shadow-md'
                    : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold truncate">{cat.title}</span>
                  <span className="text-[10px] font-mono text-slate-400">0{idx+1}</span>
                </div>
                <p className="text-[11px] text-slate-400 font-mono truncate">
                  {cat.en}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Category Skills Grid */}
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-slate-800/90 shadow-xl space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-100 flex items-center gap-2">
                <span className="text-rose-400">●</span>
                <span>{activeCategory.title}</span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                {activeCategory.description}
              </p>
            </div>
            <span className="text-xs font-mono text-rose-400 hidden sm:inline">
              熟練度・実務経験
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {activeCategory.skills.map((skill) => (
              <div
                key={skill.name}
                className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-bold font-mono text-slate-100">
                    {skill.name}
                  </span>
                  <span className="text-xs font-mono font-bold text-rose-300">
                    {skill.level}%
                  </span>
                </div>

                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden my-2">
                  <div
                    className="h-full bg-gradient-to-r from-rose-500 to-indigo-500 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <p className="text-[11px] text-slate-400">
                  {skill.experience}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
