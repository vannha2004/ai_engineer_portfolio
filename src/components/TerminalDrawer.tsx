import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, CornerDownLeft } from 'lucide-react';
import { PERSONAL_INFO, QUICK_METRICS, SKILL_CATEGORIES, PROJECTS } from '../data/portfolioData';

interface TerminalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  command: string;
  output: string | React.ReactNode;
}

export const TerminalDrawer: React.FC<TerminalDrawerProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandLog[]>([
    {
      command: 'welcome',
      output: (
        <div>
          <p className="text-cyan-400 font-semibold">⚡ Tran Van Nha — Production AI Systems Engineering CLI [v2.5.0]</p>
          <p className="text-slate-400 mt-1">Type <span className="text-amber-400 font-mono">help</span> to view available system diagnostics and commands.</p>
        </div>
      )
    }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode = '';

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-slate-300">
            <p className="text-cyan-400 font-bold">Available diagnostics & telemetry commands:</p>
            <p>• <span className="text-amber-400 font-mono">about</span> : Display engineer background, GPA & philosophy</p>
            <p>• <span className="text-amber-400 font-mono">valedictorian</span> : View graduation honors & academic transcript summary</p>
            <p>• <span className="text-amber-400 font-mono">projects</span> : List production engineering systems & STAR metrics</p>
            <p>• <span className="text-amber-400 font-mono">benchmarks</span> : Query TensorRT & ONNX inference acceleration stats</p>
            <p>• <span className="text-amber-400 font-mono">skills</span> : Inspect deep learning & serving competencies</p>
            <p>• <span className="text-amber-400 font-mono">metrics</span> : Query real-time production telemetry</p>
            <p>• <span className="text-amber-400 font-mono">contact</span> : Output email, GitHub, Hugging Face and socials</p>
            <p>• <span className="text-amber-400 font-mono">clear</span> : Clear terminal screen</p>
          </div>
        );
        break;

      case 'about':
        output = (
          <div className="space-y-1.5 text-slate-300">
            <p className="text-slate-100 font-semibold">{PERSONAL_INFO.name} ({PERSONAL_INFO.englishName})</p>
            <p className="text-cyan-400">{PERSONAL_INFO.title}</p>
            <p className="text-slate-300 text-xs leading-relaxed">{PERSONAL_INFO.bio}</p>
            <p className="text-emerald-400 text-xs">🎓 {PERSONAL_INFO.valedictorianBadge} • Tốt nghiệp Xuất sắc (Degree of Bachelor - Excellent)</p>
          </div>
        );
        break;

      case 'valedictorian':
      case 'gpa':
        output = (
          <div className="space-y-1 text-xs">
            <p className="text-amber-300 font-bold">🎓 ACADEMIC VALEDICTORIAN RECORD</p>
            <p className="text-slate-300">• Title: Thủ khoa Tốt nghiệp Khoa học Máy tính K17 (Hanoi University of Industry)</p>
            <p className="text-slate-300">• Cumulative GPA: <span className="text-emerald-400 font-bold">3.76 / 4.0</span> (Loại Xuất sắc)</p>
            <p className="text-slate-300">• Honors: Sinh viên tiêu biểu toàn khóa 2022-2026</p>
            <p className="text-slate-300">• Research: 1st Prize University AI Scientific Research (2025-2026)</p>
            <p className="text-slate-300">• International: Silver Medal TOFAS Programming (SPRIX Japan)</p>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2 text-xs">
            <p className="text-cyan-400 font-bold">🚀 PRODUCTION SYSTEMS INVENTORY:</p>
            {PROJECTS.map((p) => (
              <div key={p.id} className="border-l-2 border-cyan-500 pl-2">
                <p className="text-slate-100 font-bold">{p.title}</p>
                <p className="text-slate-400 text-[11px]">{p.subtitle}</p>
                <p className="text-emerald-400 text-[11px]">Metrics: {p.metrics.map((m) => `${m.label}: ${m.value}`).join(' • ')}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'benchmarks':
        output = (
          <div className="space-y-1.5 font-mono text-xs">
            <p className="text-amber-400 font-bold">⚡ INFERENCE ACCELERATION MATRIX (FP16/INT8 vs FP32):</p>
            <p className="text-slate-300">• ECAPA-TDNN (VoiceGuard): 38.2ms → <span className="text-emerald-400">7.4ms (5.16x speedup)</span> | EER 1.12%</p>
            <p className="text-slate-300">• EfficientNetB7 (IoT-Sentinel): 52.4ms → <span className="text-emerald-400">9.6ms (5.45x speedup)</span> | 99.4% Acc</p>
            <p className="text-slate-300">• LLaMA-3 8B (HyperServe): 115ms/tok → <span className="text-emerald-400">14.8ms/tok (7.77x speedup via Speculative Decoding)</span></p>
            <p className="text-slate-300">• YOLOv9-C (EdgeTrack): 28.5ms → <span className="text-emerald-400">4.1ms (243 FPS)</span></p>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-2 text-xs">
            {SKILL_CATEGORIES.map((cat) => (
              <div key={cat.title}>
                <p className="text-cyan-400 font-semibold">{cat.title}:</p>
                <p className="text-slate-300">
                  {cat.skills.map((s) => `${s.name} (${s.level}%)`).join(', ')}
                </p>
              </div>
            ))}
          </div>
        );
        break;

      case 'metrics':
      case 'curl /metrics':
        output = (
          <div className="space-y-1.5 font-mono text-xs">
            <p className="text-emerald-400">// PRODUCTION TELEMETRY ENDPOINTS</p>
            {QUICK_METRICS.map((s) => (
              <p key={s.label} className="text-slate-300">
                <span className="text-cyan-400">{s.label}:</span> {s.value} <span className="text-slate-400">({s.detail})</span>
              </p>
            ))}
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-1 font-mono text-xs text-slate-300">
            <p>• Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-cyan-400 underline">{PERSONAL_INFO.email}</a></p>
            <p>• GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-cyan-400 underline">{PERSONAL_INFO.github}</a></p>
            <p>• HuggingFace: <a href={PERSONAL_INFO.huggingface} target="_blank" rel="noreferrer" className="text-cyan-400 underline">{PERSONAL_INFO.huggingface}</a></p>
            <p>• LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 underline">{PERSONAL_INFO.linkedin}</a></p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        output = (
          <p className="text-rose-400">
            command not recognized: "{cmd}". Type <span className="text-amber-400">help</span> for valid commands.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: inputVal, output }]);
    setInputVal('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div
        id="terminal-modal"
        className="w-full max-w-3xl h-[520px] bg-slate-950 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden font-mono"
      >
        {/* Terminal Titlebar */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800 select-none">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <span className="text-xs text-slate-400 ml-2 font-mono flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              nha@production-cluster: ~
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="Close terminal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs sm:text-sm">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-cyan-400 font-bold">
                <span>❯</span>
                <span className="text-slate-100">{item.command}</span>
              </div>
              <div className="pl-4 text-slate-300">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Input Bar */}
        <form
          onSubmit={handleCommand}
          className="flex items-center gap-2 px-4 py-3 bg-slate-900/90 border-t border-slate-800"
        >
          <span className="text-cyan-400 font-bold">❯</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help', 'about', 'valedictorian', 'projects', 'benchmarks'..."
            className="flex-1 bg-transparent text-slate-100 text-xs sm:text-sm focus:outline-none font-mono placeholder:text-slate-500"
          />
          <button
            type="submit"
            className="p-1 text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
