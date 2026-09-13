import React, { useState } from 'react';
import {
  Award,
  Trophy,
  Medal,
  BookOpen,
  Star,
  Heart,
  CheckCircle2,
  ShieldCheck,
  Eye,
  X
} from 'lucide-react';
import { JA_HONORS } from '../data/japaneseN3Data';

export const CredentialsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<any | null>(null);

  const categories = [
    { id: 'all', label: 'すべて' },
    { id: 'valedictorian', label: '大学首席・学業' },
    { id: 'award', label: 'コンテスト・受賞歴' },
    { id: 'publication', label: '学会論文' },
    { id: 'certification', label: '専門認定・資格' },
    { id: 'leadership', label: 'リーダーシップ・健康' },
  ];

  const filteredCredentials = JA_HONORS.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const getIcon = (type: string) => {
    switch (type) {
      case 'trophy': return Trophy;
      case 'medal': return Medal;
      case 'book': return BookOpen;
      case 'star': return Star;
      case 'heart': return Heart;
      default: return Award;
    }
  };

  return (
    <section id="credentials" className="py-12 sm:py-16 border-b border-slate-900 scroll-mt-20">
      <div className="space-y-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-300 mb-3">
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>公式認定・学術およびコンテスト受賞歴</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
              首席卒業・受賞歴 & 専門認定
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              ハノイ工業大学首席卒業（GPA 3.76）、全学AI学術研究第1位、国際プログラミング検定TOFAS銀メダル（日本SPRIX主催）などの客観的実績です。
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-amber-300 bg-amber-950/30 px-3 py-1.5 rounded-xl border border-amber-800/40 shrink-0">
            <Award className="w-4 h-4 text-amber-400" />
            <span>大学全学第1位（首席）</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-1.5 bg-slate-950/80 p-1.5 rounded-xl border border-slate-800">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCredentials.map((item) => {
            const Icon = getIcon(item.iconType);
            const isValedictorian = item.category === 'valedictorian';
            return (
              <div
                key={item.id}
                className={`p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between group shadow-lg ${
                  isValedictorian
                    ? 'bg-gradient-to-b from-amber-950/30 to-slate-950 border-amber-500/40 shadow-amber-950/20'
                    : 'bg-slate-950/80 hover:bg-slate-900/90 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className={`p-2.5 rounded-xl ${
                      isValedictorian
                        ? 'bg-amber-500/20 text-amber-300'
                        : 'bg-rose-500/10 text-rose-400'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-900 text-slate-300 border border-slate-800">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="font-bold text-sm sm:text-base text-slate-100 group-hover:text-rose-300 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 mt-1">
                    {item.issuer}
                  </p>

                  <div className="mt-2.5">
                    <span className={`inline-block text-[11px] font-mono px-2.5 py-1 rounded-md border ${
                      isValedictorian
                        ? 'bg-amber-500/15 border-amber-500/30 text-amber-300 font-bold'
                        : 'bg-rose-500/10 border-rose-500/20 text-rose-300'
                    }`}>
                      {item.badgeText}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1 text-[11px] text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>公式証明・確認済み</span>
                  </span>

                  <button
                    onClick={() => setActiveModalItem(item)}
                    className="p-1.5 rounded-lg hover:text-white hover:bg-slate-800 transition-colors"
                    title="詳細を確認"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal for credential detail */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-lg bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-mono text-rose-400 font-bold">
                【公式認定・受賞証明書】
              </span>
              <button
                onClick={() => setActiveModalItem(null)}
                className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-900"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-100">
                {activeModalItem.title}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                授与機関: {activeModalItem.issuer} ({activeModalItem.year})
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 leading-relaxed">
              <p className="font-bold text-amber-300 mb-1">公式認定ランク: {activeModalItem.badgeText}</p>
              <p>{activeModalItem.description}</p>
            </div>

            <button
              onClick={() => setActiveModalItem(null)}
              className="w-full py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs transition-colors"
            >
              閉じる
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
