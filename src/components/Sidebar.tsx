import React, { useState } from 'react';
import {
  User,
  Cpu,
  FolderGit2,
  Zap,
  Briefcase,
  Award,
  GitFork,
  Mail,
  FileText,
  Terminal,
  Link2,
  ChevronRight,
  ShieldCheck,
  Menu,
  X,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { JA_PERSONAL_INFO } from '../data/japaneseN3Data';

interface SidebarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenTerminal: () => void;
  lang?: 'ja' | 'en' | 'vi';
  onLanguageChange?: (lang: 'ja' | 'en' | 'vi') => void;
}

const JA_NAV_ITEMS = [
  { id: 'overview', ja: '概要・自己紹介', en: 'About Me', icon: User, badge: '首席' },
  { id: 'skills', ja: '専門スキル', en: 'Tech Stack', icon: Cpu, badge: '4分野' },
  { id: 'projects', ja: '開発プロジェクト', en: 'Projects', icon: FolderGit2, badge: 'STAR' },
  { id: 'benchmarks', ja: '推論ベンチマーク', en: 'Benchmarks', icon: Zap, badge: '高速化' },
  { id: 'interactive-tools', ja: '体験デモツール', en: 'Live Tools', icon: Cpu, badge: '実演' },
  { id: 'experience', ja: '職歴・研究論文', en: 'Experience', icon: Briefcase, badge: 'ICAETA' },
  { id: 'achievement-slider', ja: '画像ギャラリー', en: 'Gallery', icon: Award, badge: '8枚' },
  { id: 'credentials', ja: '表彰・取得資格', en: 'Credentials', icon: ShieldCheck, badge: 'GPA 3.76' },
  { id: 'opensource', ja: 'オープンソース', en: 'Open Source', icon: GitFork, badge: 'HuggingFace' },
  { id: 'contact', ja: 'お問い合わせ', en: 'Contact', icon: Mail, badge: '連絡先' },
];

export const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  onNavigate,
  onOpenTerminal,
  lang = 'ja',
  onLanguageChange
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const sidebarContent = (
    <div className="flex flex-col h-full justify-between p-4 sm:p-5 overflow-y-auto">
      {/* Top Profile Summary Header */}
      <div>
        <div className="flex items-start gap-3.5 pb-4 border-b border-slate-800/80">
          {/* Circular Main Avatar with Sakura Gradient & Online Indicator */}
          <div className="relative shrink-0">
            <div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-tr from-rose-500 via-purple-500 to-indigo-600 shadow-lg shadow-rose-500/25">
              <img
                src="/main_avatar.jpeg"
                alt="Trần Văn Nhã"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <span
              className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-950 flex items-center justify-center shadow"
              title="日本での勤務・リモート対応可能 / Sẵn sàng làm việc"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            </span>
          </div>

          {/* Name & Title in Japanese */}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <h1 className="text-base font-bold text-slate-100 truncate tracking-tight">
                {JA_PERSONAL_INFO.name}
              </h1>
              <span title="認定AIエンジニア">
                <ShieldCheck className="w-4 h-4 text-rose-400 shrink-0" />
              </span>
            </div>
            <p className="text-xs font-mono text-rose-300 font-medium truncate mt-0.5">
              Trần Văn Nhã • {JA_PERSONAL_INFO.handle}
            </p>
            <p className="text-[11px] text-slate-400 mt-1 line-clamp-1 leading-tight">
              {JA_PERSONAL_INFO.title}
            </p>
          </div>
        </div>

        {/* Japanese Badges: Valedictorian & JLPT N3 */}
        <div className="py-3 border-b border-slate-800/80 space-y-1.5">
          {/* Valedictorian Badge */}
          <div className="flex items-center justify-between text-xs px-2.5 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 font-medium">
            <span className="flex items-center gap-1.5 truncate">
              <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="truncate">大学首席卒業 (GPA 3.76)</span>
            </span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 bg-amber-500/20 rounded text-amber-200">
              最高位
            </span>
          </div>

          {/* Japanese Proficiency & Location */}
          <div className="flex items-center justify-between text-xs px-2.5 py-1.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 font-medium">
            <span className="flex items-center gap-1.5 truncate">
              <span className="text-xs">🌸</span>
              <span className="truncate">日本語 N3 • 日本勤務歓迎</span>
            </span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 bg-rose-500/20 rounded text-rose-200">
              OK
            </span>
          </div>
        </div>

        {/* Navigation Items (Japanese N3 style with subtext) */}
        <nav className="py-3 space-y-1">
          <p className="px-2.5 text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
            目次・ナビゲーション
          </p>
          {JA_NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all group ${
                  isActive
                    ? 'bg-rose-500/15 text-rose-300 border border-rose-500/30 shadow-sm font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-rose-400' : 'text-slate-400 group-hover:text-slate-200'}`} />
                  <span className="truncate">{item.ja}</span>
                  <span className="text-[10px] text-slate-400 hidden xl:inline">({item.en})</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                    isActive ? 'bg-rose-500/20 text-rose-300' : 'bg-slate-900 text-slate-400'
                  }`}>
                    {item.badge}
                  </span>
                  <ChevronRight className={`w-3 h-3 transition-transform ${isActive ? 'text-rose-400 translate-x-0.5' : 'text-slate-400 opacity-0 group-hover:opacity-100'}`} />
                </div>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Actions: Resume CV, CLI Terminal & Social Handles */}
      <div className="pt-3 border-t border-slate-800/80 space-y-3">
        {/* CV Download / View Button */}
        <a
          href="/nhatranvan_ai_engineer.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-indigo-600 hover:from-rose-500 hover:to-indigo-500 text-white text-xs font-bold shadow-md shadow-rose-500/20 transition-all hover:scale-[1.01]"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>{lang === 'ja' ? '履歴書・職務経歴書 (PDF)' : lang === 'vi' ? 'Xem CV / Hồ sơ (PDF)' : 'View Resume / CV (PDF)'}</span>
          <ExternalLink className="w-3 h-3 opacity-70" />
        </a>

        {/* CLI Terminal Launcher */}
        <button
          onClick={onOpenTerminal}
          className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-xs font-mono text-slate-300 hover:text-rose-300 transition-colors"
          title="CLIターミナルを起動 (~)"
        >
          <span className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-rose-400" />
            <span>CLI端末を開く</span>
          </span>
          <kbd className="px-1.5 py-0.5 bg-slate-950 rounded text-[10px] text-slate-400 border border-slate-800">~</kbd>
        </button>

        {/* Social Icons Bar */}
        <div className="flex items-center justify-between px-1 text-slate-400">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:text-white hover:bg-slate-800/60 transition-colors"
            title="GitHub (@vannha2004)"
          >
            <GitFork className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.huggingface}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:text-rose-300 hover:bg-slate-800/60 transition-colors text-sm font-mono"
            title="Hugging Face Models"
          >
            🤗
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:text-white hover:bg-slate-800/60 transition-colors"
            title="LinkedIn Profile"
          >
            <Link2 className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-2 rounded-lg hover:text-white hover:bg-slate-800/60 transition-colors"
            title="Email Direct"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Left Sidebar */}
      <aside className="hidden lg:flex fixed top-0 left-0 bottom-0 w-80 bg-slate-950/90 backdrop-blur-xl border-r border-slate-800/80 z-40 flex-col shadow-2xl">
        {sidebarContent}
      </aside>

      {/* Mobile Top Header Bar */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80 z-50 flex items-center justify-between px-4">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-9 h-9 rounded-full p-0.5 bg-gradient-to-tr from-rose-500 to-indigo-600 shrink-0">
            <img
              src="/main_avatar.jpeg"
              alt="Trần Văn Nhã"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-bold text-slate-100 truncate">
              {JA_PERSONAL_INFO.name}
            </p>
            <p className="text-[11px] font-mono text-rose-400 truncate">
              AIエンジニア • 首席卒業
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenTerminal}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-rose-400"
            title="CLIターミナル"
          >
            <Terminal className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200"
            aria-label="メニュー開閉"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Slide-Over Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="absolute top-16 left-0 right-0 bottom-0 bg-slate-950 border-t border-slate-800 overflow-y-auto">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
};
