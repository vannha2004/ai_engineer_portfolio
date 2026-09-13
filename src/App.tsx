import { useState, useEffect } from 'react';
import {
  Cpu,
  Terminal,
  ArrowRight,
  Layers,
  Sparkles,
  Award,
  Zap,
  CheckCircle2,
  GitFork,
  ExternalLink,
  ShieldCheck,
  Trophy,
  Mic,
  Activity,
  Globe,
  FileText
} from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { ProjectCard } from './components/ProjectCard';
import { BenchmarkLab } from './components/BenchmarkLab';
import { SpeechVerifierSimulator } from './components/SpeechVerifierSimulator';
import { VramCalculator } from './components/VramCalculator';
import { RagSimulator } from './components/RagSimulator';
import { AgentWorkflowViewer } from './components/AgentWorkflowViewer';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { AchievementSlidebar } from './components/AchievementSlidebar';
import { CredentialsSection } from './components/CredentialsSection';
import { OpenSourceSection } from './components/OpenSourceSection';
import { ContactSection } from './components/ContactSection';
import { TerminalDrawer } from './components/TerminalDrawer';
import { PERSONAL_INFO, QUICK_METRICS, PROJECTS } from './data/portfolioData';
import { JA_PERSONAL_INFO, JA_METRICS, JA_PROJECTS } from './data/japaneseN3Data';
import { ProjectCategory } from './types';

export default function App() {
  const [lang, setLang] = useState<'ja' | 'en' | 'vi'>('ja');
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [activeToolTab, setActiveToolTab] = useState<'speech' | 'vram' | 'rag' | 'agent'>('speech');
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  // Listen for keyboard shortcut '~' to toggle terminal & scroll listener for active section
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '`' || e.key === '~') {
        if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };

    const handleScroll = () => {
      const sections = [
        'overview',
        'skills',
        'projects',
        'benchmarks',
        'interactive-tools',
        'experience',
        'achievement-slider',
        'credentials',
        'opensource',
        'contact'
      ];
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Filter projects according to category
  const projectsList = (lang === 'ja' ? JA_PROJECTS : PROJECTS) as any[];
  const filteredProjects = projectsList.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenDemo = (demoType: string) => {
    if (demoType === 'speech_sim') setActiveToolTab('speech');
    else if (demoType === 'vram_calc') setActiveToolTab('vram');
    else if (demoType === 'rag') setActiveToolTab('rag');
    else if (demoType === 'agent') setActiveToolTab('agent');
    handleNavigate('interactive-tools');
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-rose-500 selection:text-white">
      {/* 🌸 Japanese Background Image (Mount Fuji, Chureito Pagoda & Cherry Blossoms) */}
      <div
        className="fixed inset-0 pointer-events-none z-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
        style={{
          backgroundImage: `url('/background.jpg')`,
        }}
      />
      {/* Dark frosted glass scrim for high contrast readability and authentic Wa-Modern atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-slate-950/80 backdrop-blur-[1.5px]" />

      {/* Subtle Falling Sakura Petals for Japanese Aesthetics */}
      <div className="sakura-petal w-3 h-3 left-[12%] animate-[sakura-fall_12s_linear_infinite]" />
      <div className="sakura-petal w-2.5 h-2.5 left-[34%] animate-[sakura-fall_16s_linear_infinite_2s]" />
      <div className="sakura-petal w-3 h-3 left-[58%] animate-[sakura-fall_14s_linear_infinite_5s]" />
      <div className="sakura-petal w-2 h-2 left-[82%] animate-[sakura-fall_18s_linear_infinite_3s]" />

      {/* Persistent Left Sidebar */}
      <Sidebar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenTerminal={() => setTerminalOpen(true)}
        lang={lang}
        onLanguageChange={setLang}
      />

      {/* Main Content Area */}
      <main className="lg:pl-80 relative z-10 min-h-screen pt-16 lg:pt-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 sm:space-y-16">

          {/* Top Bar: Language Switcher & Terminal Quick Button */}
          <div className="flex items-center justify-between py-2 border-b border-slate-800/80">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
              <span className="text-rose-400">🌸</span>
              <span>チャン・ヴァン・ニャー（Trần Văn Nhã）ポートフォリオ</span>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setLang('ja')}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                  lang === 'ja'
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="日本語 (JLPT N3)"
              >
                🇯🇵 日本語 (N3)
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                  lang === 'en'
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="English Version"
              >
                🇬🇧 English
              </button>
              <button
                onClick={() => setLang('vi')}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                  lang === 'vi'
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Tiếng Việt"
              >
                🇻🇳 Tiếng Việt
              </button>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* 1. OVERVIEW / HERO SECTION (Japanese N3 style, concise & high impact)     */}
          {/* ========================================================================= */}
          <section id="overview" className="scroll-mt-24 space-y-6">
            {/* Main Avatar & Profile Intro Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 pb-2">
              {/* Main Avatar (Circular) */}
              <div className="relative shrink-0 group">
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full p-1 bg-gradient-to-tr from-rose-500 via-purple-500 to-indigo-600 shadow-2xl shadow-rose-500/30 transition-transform duration-300 group-hover:scale-105">
                  <img
                    src="/main_avatar.jpeg"
                    alt="Trần Văn Nhã - AI Systems Engineer"
                    className="w-full h-full rounded-full object-cover shadow-inner"
                  />
                </div>
                <span
                  className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-500 border-2 border-slate-950 flex items-center justify-center shadow-lg"
                  title="Actively Available for AI / MLOps Roles"
                >
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white animate-pulse" />
                </span>
              </div>

              {/* Japanese Valedictorian & JLPT Badges */}
              <div className="flex-1 min-w-0 space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-300">
                    <Trophy className="w-3.5 h-3.5 text-amber-400" />
                    <span>ハノイ工業大学（HaUI）首席卒業（GPA 3.76 / 4.0）</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-xs font-mono text-rose-300">
                    <span className="text-xs">🌸</span>
                    <span>日本語能力試験 (JLPT N3) • 日本国内勤務対応可能</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>正社員・開発ポジション積極応募中</span>
                  </div>
                </div>

                <p className="text-xs font-mono text-slate-400">
                  チャン・ヴァン・ニャー • Trần Văn Nhã • @vannha2004
                </p>
              </div>
            </div>

            {/* Concise Title & Subtitle */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-100 leading-[1.15]">
                音声認識AI • モデル推論高速化<br />
                <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                  本番環境向け MLOps エンジニア
                </span>
              </h1>
              <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
                はじめまして、AIエンジニアの<span className="text-white font-bold">チャン・ヴァン・ニャー（Trần Văn Nhã）</span>です。
                ハノイ工業大学のコンピュータサイエンス学科を首席（GPA 3.76/4.0）で卒業しました。
                深層学習を用いた音声認識・話者照合（ECAPA-TDNN）や、ONNX Runtime・TensorRTによる推論高速化、
                低遅延な本番APIシステムの設計・運用を得意としています。
              </p>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="/nhatranvan_ai_engineer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-indigo-600 hover:from-rose-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-rose-500/25 transition-all flex items-center gap-2 hover:scale-[1.02]"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{lang === 'ja' ? '履歴書・職務経歴書 (PDF)' : lang === 'vi' ? 'Xem / Tải CV (PDF)' : 'Download / View CV'}</span>
                <ExternalLink className="w-3 h-3 opacity-80" />
              </a>

              <button
                onClick={() => handleNavigate('projects')}
                className="px-5 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-white font-bold text-xs transition-colors flex items-center gap-2"
              >
                <span>開発実績（STAR形式）を見る</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => handleNavigate('interactive-tools')}
                className="px-5 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-white font-bold text-xs transition-colors flex items-center gap-2"
              >
                <Zap className="w-3.5 h-3.5 text-rose-400" />
                <span>AI体験デモを試す</span>
              </button>

              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=【面談希望】AIエンジニア採用について`}
                className="px-5 py-2.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-rose-300 font-bold text-xs transition-colors flex items-center gap-2"
              >
                <span>面談・ご連絡はこちら</span>
              </a>
            </div>

            {/* Real-World Production Metrics (Concise Telemetry Bar) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4">
              {JA_METRICS.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-slate-800/90 shadow-lg flex flex-col justify-between"
                >
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider truncate">
                    {metric.label}
                  </span>
                  <span className="text-2xl sm:text-3xl font-extrabold font-mono text-rose-300 my-1">
                    {metric.value}
                  </span>
                  <span className="text-[11px] text-slate-400 leading-snug">
                    {metric.detail}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* ========================================================================= */}
          {/* 2. CORE SKILLS & TECH STACK                                               */}
          {/* ========================================================================= */}
          <SkillsSection />

          {/* ========================================================================= */}
          {/* 3. FEATURED ENGINEERING PROJECTS (STAR Format, Concise)                   */}
          {/* ========================================================================= */}
          <section id="projects" className="py-8 scroll-mt-24 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-xs font-mono text-rose-300 mb-3">
                  <Layers className="w-3.5 h-3.5 text-rose-400" />
                  <span>開発実績・プロジェクト</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
                  本番環境AIシステム 開発実績（STAR標準）
                </h2>
                <p className="text-sm text-slate-400 mt-1 max-w-2xl">
                  各プロジェクトは「状況 (Situation)」「目標 (Task)」「取り組み (Action)」「実測成果 (Result)」の形式で簡潔に整理しています。
                </p>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-1.5 bg-slate-950/90 p-1.5 rounded-xl border border-slate-800 self-start">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                    activeCategory === 'all'
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  すべて ({projectsList.length})
                </button>
                <button
                  onClick={() => setActiveCategory('speech_audio')}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                    activeCategory === 'speech_audio'
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  音声AI
                </button>
                <button
                  onClick={() => setActiveCategory('cv_iot')}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                    activeCategory === 'cv_iot'
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  CV & IoT
                </button>
                <button
                  onClick={() => setActiveCategory('genai_rag')}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                    activeCategory === 'genai_rag'
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  RAG・LLM
                </button>
                <button
                  onClick={() => setActiveCategory('mlops_inference')}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                    activeCategory === 'mlops_inference'
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  高速化
                </button>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredProjects.map((project: any) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpenDemo={handleOpenDemo}
                  lang={lang}
                />
              ))}
            </div>
          </section>

          {/* ========================================================================= */}
          {/* 4. MODEL BENCHMARKS & INFERENCE LAB                                       */}
          {/* ========================================================================= */}
          <section id="benchmarks" className="py-8 scroll-mt-24">
            <BenchmarkLab />
          </section>

          {/* ========================================================================= */}
          {/* 5. INTERACTIVE LIVE TOOLS (Flagship VoiceGuard, VRAM Sizer, RAG, Agent)  */}
          {/* ========================================================================= */}
          <section id="interactive-tools" className="py-8 scroll-mt-24 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-xs font-mono text-rose-300 mb-3">
                  <Zap className="w-3.5 h-3.5 text-rose-400" />
                  <span>ブラウザ上で試せる AI体験デモ</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
                  本番パイプライン 実演シミュレーター
                </h2>
                <p className="text-sm text-slate-400 mt-1 max-w-2xl">
                  ポートフォリオ内で直接動作するインタラクティブな実証ツールです。
                </p>
              </div>

              {/* Tool Switcher Tabs */}
              <div className="flex flex-wrap gap-1.5 bg-slate-950/90 p-1.5 rounded-xl border border-slate-800 self-start">
                <button
                  onClick={() => setActiveToolTab('speech')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                    activeToolTab === 'speech'
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Mic className="w-3.5 h-3.5" />
                  <span>音声照合デモ</span>
                </button>
                <button
                  onClick={() => setActiveToolTab('vram')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                    activeToolTab === 'vram'
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>VRAM計算機</span>
                </button>
                <button
                  onClick={() => setActiveToolTab('rag')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                    activeToolTab === 'rag'
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <span>🔍 RAG検索</span>
                </button>
                <button
                  onClick={() => setActiveToolTab('agent')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                    activeToolTab === 'agent'
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <span>🤖 AIエージェント</span>
                </button>
              </div>
            </div>

            {/* Active Live Tool Panel */}
            <div className="transition-all duration-300">
              {activeToolTab === 'speech' && <SpeechVerifierSimulator />}
              {activeToolTab === 'vram' && <VramCalculator />}
              {activeToolTab === 'rag' && <RagSimulator />}
              {activeToolTab === 'agent' && <AgentWorkflowViewer />}
            </div>
          </section>

          {/* ========================================================================= */}
          {/* 6. EXPERIENCE & RESEARCH (Industry Lab, HaUI Valedictorian)               */}
          {/* ========================================================================= */}
          <ExperienceSection />

          {/* ========================================================================= */}
          {/* 6.5. OFFICIAL CREDENTIALS & AWARDS SLIDEBAR (13 Slides)                   */}
          {/* ========================================================================= */}
          <AchievementSlidebar lang={lang} />

          {/* ========================================================================= */}
          {/* 7. HONORS, VALEDICTORIAN & CERTIFICATIONS                                 */}
          {/* ========================================================================= */}
          <CredentialsSection />

          {/* ========================================================================= */}
          {/* 8. OPEN SOURCE & MODEL HUBS                                               */}
          {/* ========================================================================= */}
          <OpenSourceSection />

          {/* ========================================================================= */}
          {/* 9. CONTACT SECTION & DIRECT LINKS                                         */}
          {/* ========================================================================= */}
          <ContactSection />

          {/* Footer with Japanese copyright */}
          <footer className="pt-8 pb-12 border-t border-slate-900 text-center text-xs font-mono text-slate-400">
            <p>
              © 2026 Trần Văn Nhã (チャン・ヴァン・ニャー) • ハノイ工業大学 首席卒業 • AIエンジニア
            </p>
            <p className="mt-1 text-[11px] text-slate-400">
              富士山・五重塔の和風デザイン • 日本語 (JLPT N3) • ONNX Runtime & TensorRT 推論最適化
            </p>
          </footer>
        </div>
      </main>

      {/* Interactive CLI Terminal Drawer */}
      <TerminalDrawer
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </div>
  );
}
