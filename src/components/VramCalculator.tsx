import React, { useState, useMemo } from 'react';
import { Zap, Info, Sliders } from 'lucide-react';

interface ModelPreset {
  name: string;
  paramsBillions: number;
  layers: number;
  hiddenDim: number;
  heads: number;
  kvHeads: number; // For GQA
  defaultContext: number;
}

const PRESETS: ModelPreset[] = [
  { name: 'LLaMA-3.1 8B (GQA 8:1)', paramsBillions: 8.03, layers: 32, hiddenDim: 4096, heads: 32, kvHeads: 8, defaultContext: 8192 },
  { name: 'LLaMA-3.1 70B (GQA 8:1)', paramsBillions: 70.6, layers: 80, hiddenDim: 8192, heads: 64, kvHeads: 8, defaultContext: 8192 },
  { name: 'Mistral 7B v0.3 (GQA 4:1)', paramsBillions: 7.24, layers: 32, hiddenDim: 4096, heads: 32, kvHeads: 8, defaultContext: 8192 },
  { name: 'DeepSeek-R1-Distill 14B', paramsBillions: 14.7, layers: 48, hiddenDim: 5120, heads: 40, kvHeads: 8, defaultContext: 16384 },
  { name: 'Gemma 2 9B', paramsBillions: 9.24, layers: 42, hiddenDim: 3584, heads: 16, kvHeads: 8, defaultContext: 8192 },
];

export const VramCalculator: React.FC = () => {
  const [selectedPreset, setSelectedPreset] = useState<string>(PRESETS[0].name);
  const [precision, setPrecision] = useState<'fp16' | 'fp8' | 'int4'>('fp16');
  const [contextLength, setContextLength] = useState<number>(8192);
  const [batchSize, setBatchSize] = useState<number>(4);
  const [showFormula, setShowFormula] = useState<boolean>(false);

  const activeModel = PRESETS.find((p) => p.name === selectedPreset) || PRESETS[0];

  const {
    weightMemoryGB,
    kvCacheGB,
    cudaOverheadGB,
    totalVramGB,
    hardwareRecommendation,
    tensorParallelism,
  } = useMemo(() => {
    // 1. Model Weights Memory
    // fp16 = 2 bytes/param, fp8 = 1 byte/param, int4 = 0.5 bytes/param + 10% packing/metadata
    let bytesPerParam = 2.0;
    if (precision === 'fp8') bytesPerParam = 1.0;
    if (precision === 'int4') bytesPerParam = 0.55;

    const weightsGB = (activeModel.paramsBillions * 1e9 * bytesPerParam) / 1e9 * 1.02; // +2% buffer

    // 2. KV Cache Memory (in GB)
    // Formula: 2 (K and V) * layers * kv_heads * head_dim * context_len * batch_size * bytes_per_element
    // head_dim = hidden_dim / heads
    const headDim = activeModel.hiddenDim / activeModel.heads;
    const kvBytesPerToken = 2 * activeModel.layers * activeModel.kvHeads * headDim * 2; // 2 bytes for FP16 KV cache
    const totalKvBytes = kvBytesPerToken * contextLength * batchSize;
    const kvGB = totalKvBytes / (1024 * 1024 * 1024);

    // 3. CUDA runtime & activation buffer
    const overheadGB = 1.6 + (batchSize * 0.15);

    const total = weightsGB + kvGB + overheadGB;

    // Hardware recommendations based on total VRAM
    let rec = '';
    let tp = 1;
    if (total <= 12) {
      rec = '1x RTX 4070 (12GB) / RTX 3060 (12GB)';
      tp = 1;
    } else if (total <= 16) {
      rec = '1x RTX 4080 (16GB) or Apple M3 Pro (18GB)';
      tp = 1;
    } else if (total <= 24) {
      rec = '1x RTX 3090 / 4090 (24GB) or L4 (24GB)';
      tp = 1;
    } else if (total <= 48) {
      rec = '2x RTX 4090 (48GB) or 1x A40 / A6000 (48GB)';
      tp = 2;
    } else if (total <= 80) {
      rec = '1x NVIDIA A100 (80GB) or H100 (80GB)';
      tp = 1;
    } else if (total <= 160) {
      rec = '2x NVIDIA A100/H100 80GB (Tensor Parallelism = 2)';
      tp = 2;
    } else {
      rec = '4x to 8x NVIDIA H100 80GB (Tensor Parallelism = 4 or 8)';
      tp = 4;
    }

    return {
      weightMemoryGB: Number(weightsGB.toFixed(2)),
      kvCacheGB: Number(kvGB.toFixed(2)),
      cudaOverheadGB: Number(overheadGB.toFixed(2)),
      totalVramGB: Number(total.toFixed(2)),
      hardwareRecommendation: rec,
      tensorParallelism: tp,
    };
  }, [activeModel, precision, contextLength, batchSize]);

  return (
    <div id="vram-calculator-container" className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 sm:p-7 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-slate-100 flex items-center gap-2">
                LLM Inference & KV-Cache Sizer
                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-800/60">
                  Interactive AI Tool
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Simulate production GPU VRAM requirements with PagedAttention and Grouped-Query Attention (GQA)
              </p>
            </div>
          </div>
        </div>

        <button
          id="toggle-math-formula-btn"
          onClick={() => setShowFormula(!showFormula)}
          className="self-start sm:self-center text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 transition-colors"
        >
          <Info className="w-3.5 h-3.5" />
          {showFormula ? 'Hide Math Formula' : 'View Sizing Math'}
        </button>
      </div>

      {showFormula && (
        <div className="mt-4 p-4 rounded-xl bg-slate-950 border border-cyan-900/40 text-xs font-mono text-slate-300 space-y-2 animate-fadeIn">
          <p className="text-cyan-400 font-semibold">// Production Inference Sizing Formula:</p>
          <p>• Weight Memory = Params × Precision_Bytes (FP16: 2B, FP8: 1B, INT4: 0.5B)</p>
          <p>• KV Cache Memory = 2 × Layers × KV_Heads × (Hidden_Dim / Q_Heads) × Context_Len × Batch_Size × 2 Bytes</p>
          <p>• Total VRAM = Weight Memory + KV Cache + CUDA Overhead (~1.6GB + Batch Buffer)</p>
          <p className="text-slate-400 text-[11px]">Notice: GQA (Grouped-Query Attention) reduces KV-cache by ratio of (Q_Heads / KV_Heads), e.g. 32/8 = 4x savings!</p>
        </div>
      )}

      {/* Controls Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {/* Model Selector */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">Model Architecture</label>
          <select
            id="vram-model-select"
            value={selectedPreset}
            onChange={(e) => setSelectedPreset(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs sm:text-sm text-slate-200 focus:ring-1 focus:ring-cyan-500 focus:outline-none"
          >
            {PRESETS.map((p) => (
              <option key={p.name} value={p.name}>
                {p.name}
              </option>
            ))}
          </select>
          <span className="text-[11px] text-slate-400 mt-1 block">
            {activeModel.layers} layers • {activeModel.kvHeads} KV heads • {activeModel.hiddenDim} dim
          </span>
        </div>

        {/* Quantization */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">Quantization Precision</label>
          <div className="grid grid-cols-3 gap-1.5 bg-slate-950 p-1 rounded-lg border border-slate-700">
            {(['fp16', 'fp8', 'int4'] as const).map((q) => (
              <button
                key={q}
                id={`precision-btn-${q}`}
                onClick={() => setPrecision(q)}
                className={`py-1.5 rounded text-xs font-mono font-medium transition-all ${
                  precision === q
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {q.toUpperCase()}
              </button>
            ))}
          </div>
          <span className="text-[11px] text-slate-400 mt-1 block">
            {precision === 'fp16' ? 'Full fidelity (16-bit)' : precision === 'fp8' ? 'FP8 E4M3 (1 byte)' : 'AWQ / GPTQ (4-bit)'}
          </span>
        </div>

        {/* Context Length */}
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <label className="text-xs font-medium text-slate-300">Context Window</label>
            <span className="text-xs font-mono text-cyan-400 font-semibold">{contextLength.toLocaleString()} tokens</span>
          </div>
          <input
            id="context-slider"
            type="range"
            min="2048"
            max="65536"
            step="2048"
            value={contextLength}
            onChange={(e) => setContextLength(Number(e.target.value))}
            className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-400"
          />
          <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
            <span>2K</span>
            <span>8K</span>
            <span>32K</span>
            <span>64K</span>
          </div>
        </div>

        {/* Concurrency / Batch Size */}
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <label className="text-xs font-medium text-slate-300">Concurrent Requests (Batch)</label>
            <span className="text-xs font-mono text-cyan-400 font-semibold">{batchSize} streams</span>
          </div>
          <input
            id="batch-slider"
            type="range"
            min="1"
            max="32"
            step="1"
            value={batchSize}
            onChange={(e) => setBatchSize(Number(e.target.value))}
            className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-400"
          />
          <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
            <span>1 (Single)</span>
            <span>8</span>
            <span>16</span>
            <span>32 (High)</span>
          </div>
        </div>
      </div>

      {/* Output Visualizer Bar */}
      <div className="mt-7 pt-6 border-t border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">VRAM Allocation Breakdown</span>
          <span className="text-sm font-semibold text-slate-100 flex items-center gap-1.5 font-mono">
            Total Required: <strong className="text-cyan-400 text-base">{totalVramGB} GB</strong>
          </span>
        </div>

        {/* Visual Stacked Progress Bar */}
        <div className="w-full h-4 bg-slate-950 rounded-full overflow-hidden flex border border-slate-800 p-0.5">
          <div
            className="h-full bg-blue-500 rounded-l transition-all duration-300"
            style={{ width: `${Math.min(100, (weightMemoryGB / totalVramGB) * 100)}%` }}
            title={`Model Weights: ${weightMemoryGB} GB`}
          />
          <div
            className="h-full bg-amber-500 transition-all duration-300"
            style={{ width: `${Math.min(100, (kvCacheGB / totalVramGB) * 100)}%` }}
            title={`KV Cache: ${kvCacheGB} GB`}
          />
          <div
            className="h-full bg-cyan-500 rounded-r transition-all duration-300"
            style={{ width: `${Math.min(100, (cudaOverheadGB / totalVramGB) * 100)}%` }}
            title={`CUDA Context Overhead: ${cudaOverheadGB} GB`}
          />
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-4">
          <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
            <div className="flex items-center gap-1.5 text-xs text-blue-400 font-medium mb-1">
              <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
              Weights Memory
            </div>
            <div className="text-base sm:text-xl font-bold font-mono text-slate-100">{weightMemoryGB} <span className="text-xs text-slate-400 font-normal">GB</span></div>
            <p className="text-[10px] text-slate-400 mt-0.5">Parameters in VRAM</p>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
            <div className="flex items-center gap-1.5 text-xs text-amber-400 font-medium mb-1">
              <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
              KV-Cache Pool
            </div>
            <div className="text-base sm:text-xl font-bold font-mono text-slate-100">{kvCacheGB} <span className="text-xs text-slate-400 font-normal">GB</span></div>
            <p className="text-[10px] text-slate-400 mt-0.5">PagedAttention tokens</p>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
            <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-medium mb-1">
              <span className="w-2 h-2 rounded-full bg-cyan-500 inline-block" />
              CUDA & Activations
            </div>
            <div className="text-base sm:text-xl font-bold font-mono text-slate-100">{cudaOverheadGB} <span className="text-xs text-slate-400 font-normal">GB</span></div>
            <p className="text-[10px] text-slate-400 mt-0.5">Context & driver buffers</p>
          </div>
        </div>

        {/* Hardware Recommendation Box */}
        <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-slate-950 to-slate-900 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-start gap-2.5">
            <Zap className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
            <div>
              <span className="text-xs font-medium uppercase tracking-wider text-slate-400">Recommended Hardware Spec</span>
              <p className="font-semibold text-slate-100 text-sm sm:text-base mt-0.5">{hardwareRecommendation}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-mono">Tensor Parallelism:</span>
            <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-xs font-mono font-bold text-cyan-300">
              TP = {tensorParallelism}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
