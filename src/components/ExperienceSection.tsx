import React, { useState } from 'react';
import { Briefcase, BookOpen, Calendar, MapPin, ExternalLink, Award } from 'lucide-react';
import { JA_EXPERIENCE } from '../data/japaneseN3Data';
import { RESEARCH_ARTICLES } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const [tab, setTab] = useState<'experience' | 'research'>('experience');

  return (
    <section id="experience" className="py-12 sm:py-16 border-b border-slate-900 scroll-mt-20">
      <div className="space-y-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-xs font-mono text-rose-300 mb-3">
              <Briefcase className="w-3.5 h-3.5 text-rose-400" />
              <span>開発経歴 & 国際学会論文</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
              職務経歴・研究活動 & 執筆論文
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              深層学習の研究室におけるリードAIエンジニアとしての研究開発、国際学会での論文発表、大学首席としての学問的リーダーシップ。
            </p>
          </div>

          {/* Toggle Tab */}
          <div className="flex bg-slate-950/90 p-1 rounded-xl border border-slate-800 self-start">
            <button
              onClick={() => setTab('experience')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                tab === 'experience'
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>実務・研究開発</span>
            </button>
            <button
              onClick={() => setTab('research')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                tab === 'research'
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>論文・技術記事</span>
            </button>
          </div>
        </div>

        {/* Experience Tab Content */}
        {tab === 'experience' ? (
          <div className="space-y-4">
            {JA_EXPERIENCE.map((exp) => (
              <div
                key={exp.id}
                className="bg-slate-950/85 backdrop-blur-md border border-slate-800/90 hover:border-slate-700 rounded-2xl p-5 sm:p-6 transition-all shadow-xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800/80">
                  <div>
                    <span className="text-[11px] font-mono font-semibold text-rose-400 bg-rose-950/50 px-2.5 py-0.5 rounded border border-rose-800/60">
                      {exp.type}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-100 mt-1.5">
                      {exp.role}
                    </h3>
                    <p className="text-xs text-slate-300 font-medium mt-0.5">
                      {exp.organization}
                    </p>
                  </div>

                  <div className="flex flex-row sm:flex-col items-start sm:items-end gap-1 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-rose-400" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 mt-3 font-medium">
                  {exp.summary}
                </p>

                <ul className="space-y-1.5 mt-3 text-xs text-slate-300">
                  {exp.bulletPoints.map((bp, i) => (
                    <li key={i} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-rose-400 mt-1">▸</span>
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Research Articles Tab Content */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {RESEARCH_ARTICLES.map((art) => (
              <div
                key={art.id}
                className="bg-slate-950/85 backdrop-blur-md border border-slate-800/90 hover:border-slate-700 rounded-2xl p-5 transition-all shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                    <span className="text-rose-400 font-semibold">{art.venue}</span>
                    <span>{art.date}</span>
                  </div>

                  <h3 className="font-bold text-sm sm:text-base text-slate-100 leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {art.summary}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {art.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
