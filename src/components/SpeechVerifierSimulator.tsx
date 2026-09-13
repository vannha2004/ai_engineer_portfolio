import React, { useState } from 'react';
import {
  Mic,
  Play,
  CheckCircle2,
  AlertTriangle,
  Activity,
  ShieldCheck,
  RefreshCw,
  Sliders,
  Volume2
} from 'lucide-react';

interface AudioScenario {
  id: string;
  name: string;
  description: string;
  speakerTag: string;
  expectedResult: 'MATCH' | 'IMPOSTER_REJECT' | 'SPOOF_REJECT';
  cosineScore: number;
  threshold: number;
  latencyMs: number;
  snrDb: number;
}

const SAMPLE_SCENARIOS: AudioScenario[] = [
  {
    id: 'scen-auth-clean',
    name: '話者A（登録者本人・静かな環境）',
    description: '登録済みバイオメトリクス音声ベクトルと合致するクリアな音声。',
    speakerTag: '本人ID: #8942-VN',
    expectedResult: 'MATCH',
    cosineScore: 0.912,
    threshold: 0.72,
    latencyMs: 22.4,
    snrDb: 28.5
  },
  {
    id: 'scen-auth-noisy',
    name: '話者A（登録者本人・ノイズ環境）',
    description: 'ファン音やカフェの雑音がある環境。KAN層による頑健性をテスト。',
    speakerTag: '本人ID: #8942-VN',
    expectedResult: 'MATCH',
    cosineScore: 0.835,
    threshold: 0.72,
    latencyMs: 23.8,
    snrDb: 14.2
  },
  {
    id: 'scen-imposter',
    name: '話者B（未登録の別人による不正アクセス）',
    description: '異なる話者による音声アクセス。コサイン距離で即座に拒絶。',
    speakerTag: '未知の話者 (Unknown)',
    expectedResult: 'IMPOSTER_REJECT',
    cosineScore: 0.384,
    threshold: 0.72,
    latencyMs: 21.9,
    snrDb: 26.0
  },
  {
    id: 'scen-spoof',
    name: '合成音声・ディープフェイク攻撃',
    description: 'TTS（テキスト読み上げ）やボイスチェンジャーによる偽装攻撃。',
    speakerTag: 'AI生成音声 (Synthetic)',
    expectedResult: 'SPOOF_REJECT',
    cosineScore: 0.495,
    threshold: 0.72,
    latencyMs: 24.1,
    snrDb: 31.0
  }
];

export const SpeechVerifierSimulator: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<AudioScenario>(SAMPLE_SCENARIOS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [testRunCompleted, setTestRunCompleted] = useState(true);

  const handleRunVerification = (scenario: AudioScenario) => {
    setSelectedScenario(scenario);
    setIsPlaying(true);
    setTestRunCompleted(false);

    setTimeout(() => {
      setIsPlaying(false);
      setTestRunCompleted(true);
    }, 600);
  };

  const isMatch = selectedScenario.cosineScore >= selectedScenario.threshold;

  return (
    <div className="rounded-2xl bg-slate-950/85 backdrop-blur-md border border-slate-800/90 p-5 sm:p-7 shadow-2xl space-y-6">
      {/* Title Header with Japanese N3 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-800/80">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-rose-500/10 border border-rose-500/30 text-xs font-mono text-rose-300 mb-2">
            <Mic className="w-3.5 h-3.5 text-rose-400" />
            <span>VoiceGuard リアルタイム音声照合シミュレーター</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
            ECAPA-TDNN + KAN 音声バイオメトリクス検証
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
            200msのストリーミング音声から80-binログメルスペクトログラムを抽出し、256次元の話者特徴量ベクトルを高速照合します（推論遅延: 23.4ms）。
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 px-3 py-1.5 rounded-lg border border-emerald-800/40 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>ONNX FP16 稼働中</span>
          </span>
        </div>
      </div>

      {/* Scenario Selector Tabs */}
      <div className="space-y-2">
        <label className="text-xs font-mono text-slate-400">テスト音声シナリオを選択:</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {SAMPLE_SCENARIOS.map((scen) => (
            <button
              key={scen.id}
              onClick={() => handleRunVerification(scen)}
              className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                selectedScenario.id === scen.id
                  ? 'bg-rose-500/15 border-rose-500/40 text-rose-200 shadow-md'
                  : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-xs truncate">{scen.name}</span>
                  {scen.expectedResult === 'MATCH' ? (
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  ) : (
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                  )}
                </div>
                <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                  {scen.description}
                </p>
              </div>
              <div className="mt-2 text-[10px] font-mono text-slate-400 flex items-center justify-between">
                <span>{scen.speakerTag}</span>
                <span className="text-rose-400 font-bold">{scen.latencyMs}ms</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Real-Time Mel-Spectrogram & Inference Visualizer */}
      <div className="p-4 sm:p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Volume2 className={`w-4 h-4 ${isPlaying ? 'text-rose-400 animate-bounce' : 'text-slate-400'}`} />
            <span className="text-xs font-mono text-slate-200 font-bold">
              80-Channel Log-Mel Filterbank スペクトログラム (200ms Window)
            </span>
          </div>
          <span className="text-[11px] font-mono text-slate-400">
            サンプリング周波数: 16kHz • 16-bit PCM
          </span>
        </div>

        {/* Animated Spectrogram Waveform Bars */}
        <div className="h-20 bg-slate-950 rounded-lg p-2.5 flex items-end justify-between gap-1 border border-slate-800/80 overflow-hidden">
          {Array.from({ length: 48 }).map((_, i) => {
            const height = isPlaying
              ? Math.sin((i * 0.4) + Date.now() * 0.01) * 35 + 40
              : Math.sin(i * 0.3) * 20 + 35;
            return (
              <div
                key={i}
                className={`w-full rounded-t transition-all duration-150 ${
                  isMatch ? 'bg-gradient-to-t from-rose-600 to-indigo-400' : 'bg-gradient-to-t from-slate-700 to-rose-500'
                }`}
                style={{ height: `${Math.max(8, height)}%` }}
              />
            );
          })}
        </div>

        {/* Inference Verification Result Panel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
          {/* Cosine Similarity Score */}
          <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
            <div className="text-[11px] font-mono text-slate-400">コサイン類似度スコア:</div>
            <div className="text-xl sm:text-2xl font-extrabold font-mono mt-1 flex items-baseline gap-2">
              <span className={isMatch ? 'text-emerald-400' : 'text-rose-400'}>
                {selectedScenario.cosineScore.toFixed(3)}
              </span>
              <span className="text-xs text-slate-400 font-normal">
                (判定基準閾値: {selectedScenario.threshold})
              </span>
            </div>
          </div>

          {/* Inference Latency Breakdown */}
          <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
            <div className="text-[11px] font-mono text-slate-400">実測エンドツーエンド遅延:</div>
            <div className="text-xl sm:text-2xl font-extrabold font-mono text-rose-300 mt-1">
              {selectedScenario.latencyMs} ms
            </div>
          </div>

          {/* Verification Verdict */}
          <div className={`p-3 rounded-lg border flex items-center gap-3 ${
            isMatch
              ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-300'
              : 'bg-rose-950/30 border-rose-500/40 text-rose-300'
          }`}>
            {isMatch ? (
              <CheckCircle2 className="w-8 h-8 text-emerald-400 shrink-0" />
            ) : (
              <AlertTriangle className="w-8 h-8 text-rose-400 shrink-0" />
            )}
            <div>
              <div className="font-bold text-sm">
                {isMatch ? '【認証成功】 本人一致' : '【アクセス拒否】 不一致'}
              </div>
              <div className="text-[11px] text-slate-300">
                {isMatch ? '登録済み話者ベクトルと一致しました' : '閾値未満のためアクセスを遮断しました'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
