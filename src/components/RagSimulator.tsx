import React, { useState } from 'react';
import { Search, Database, Layers, ShieldCheck, FileText, Sparkles, Loader2 } from 'lucide-react';

const SAMPLE_QUERIES = [
  {
    query: 'How does PagedAttention eliminate memory fragmentation in vLLM?',
    chunks: [
      {
        id: 'chunk-1',
        source: 'vLLM Architecture Paper (Kwon et al.) §3.2',
        bm25Score: 0.88,
        denseScore: 0.94,
        rerankScore: 0.97,
        text: 'PagedAttention manages KV-cache memory in non-contiguous physical blocks similar to OS virtual memory paging. It dynamically assigns fixed-size memory blocks (typically 16 tokens) per block, reducing memory waste from ~60-80% down to under 4%.'
      },
      {
        id: 'chunk-2',
        source: 'Continuous Batching & Speculative Decoding Benchmarks',
        bm25Score: 0.65,
        denseScore: 0.86,
        rerankScore: 0.89,
        text: 'Unlike standard PyTorch caching where tensors are pre-allocated for maximum context sequence lengths, PagedAttention enables prompt sharing across parallel decoding processes and avoids OOM during sudden bursts.'
      },
      {
        id: 'chunk-3',
        source: 'CUDA Memory Allocation Guidelines',
        bm25Score: 0.42,
        denseScore: 0.61,
        rerankScore: 0.44,
        text: 'NVIDIA CUDA unified memory provides single-pointer virtual address space across host CPU and device memory, though page faults induce high latency overhead compared to pinned device memory.'
      }
    ],
    answer: 'PagedAttention eliminates internal KV-cache fragmentation by adopting the OS virtual memory paging concept. Instead of allocating contiguous GPU memory blocks sized to the maximum possible sequence length, it partitions KV-cache into fixed-size physical blocks (typically 16 tokens). This dynamic allocation reduces KV-cache memory waste from traditional 60–80% down to under 4%, drastically boosting continuous batching capacity and throughput.'
  },
  {
    query: 'Why is hybrid retrieval (BM25 + Dense) superior to pure vector search for enterprise docs?',
    chunks: [
      {
        id: 'chunk-a',
        source: 'Hybrid Search Benchmark Report (Reciprocal Rank Fusion)',
        bm25Score: 0.96,
        denseScore: 0.74,
        rerankScore: 0.95,
        text: 'Dense bi-encoders encode semantics into latent embeddings but frequently drop exact alphanumeric identifiers, version numbers (e.g. CVE-2024-38812), and exact acronyms. BM25 term matching guarantees exact lexical recall for critical tokens.'
      },
      {
        id: 'chunk-b',
        source: 'Information Retrieval Systems (Manning et al.) §6',
        bm25Score: 0.82,
        denseScore: 0.91,
        rerankScore: 0.92,
        text: 'Combining sparse inverted indices with dense vector representations using Reciprocal Rank Fusion (RRF) provides monotonic rank stabilization, ensuring that both synonym semantics and exact keyword matches surface in top-k candidates.'
      }
    ],
    answer: 'Pure dense vector models map text into high-dimensional semantic spaces, which excel at thematic understanding but notoriously struggle with exact alphanumeric IDs, SKU codes, version tags, and rare domain abbreviations. Hybrid search pairs the semantic breadth of dense embeddings with the strict token-level precision of BM25, fused via Reciprocal Rank Fusion (RRF) and validated with cross-encoder rerankers.'
  }
];

export const RagSimulator: React.FC = () => {
  const [selectedQueryIndex, setSelectedQueryIndex] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(4); // 1: Embed, 2: Retrieve, 3: Rerank, 4: Generate

  const currentScenario = SAMPLE_QUERIES[selectedQueryIndex];

  const handleSimulate = (index: number) => {
    setSelectedQueryIndex(index);
    setIsProcessing(true);
    setActiveStep(1);

    setTimeout(() => {
      setActiveStep(2);
      setTimeout(() => {
        setActiveStep(3);
        setTimeout(() => {
          setActiveStep(4);
          setIsProcessing(false);
        }, 350);
      }, 350);
    }, 350);
  };

  return (
    <div id="rag-simulator-container" className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 sm:p-7 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-slate-100 flex items-center gap-2">
                Multi-Stage RAG Pipeline Simulator
                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-950 text-emerald-300 border border-emerald-800/60">
                  Hybrid Search + Reranker
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Visualizing the retrieval-to-generation pipeline implemented in OmniRAG Enterprise
              </p>
            </div>
          </div>
        </div>

        <span className="text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 self-start sm:self-center flex items-center gap-1.5">
          {isProcessing ? (
            <>
              <Loader2 className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
              <span className="text-cyan-300">Retrieving & Reranking...</span>
            </>
          ) : (
            <span>Engine: BGE-M3 + Qdrant + BGE-Reranker-Large</span>
          )}
        </span>
      </div>

      {/* Query Selection */}
      <div className="mt-5">
        <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
          Select Domain Query Test Case:
        </label>
        <div className="flex flex-wrap gap-2">
          {SAMPLE_QUERIES.map((q, idx) => (
            <button
              key={idx}
              id={`query-scenario-btn-${idx}`}
              onClick={() => handleSimulate(idx)}
              className={`text-left px-3.5 py-2 rounded-xl text-xs sm:text-sm transition-all border ${
                selectedQueryIndex === idx
                  ? 'bg-slate-800 text-cyan-300 border-cyan-500/50 shadow-sm'
                  : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-2">
                <Search className="w-3.5 h-3.5 shrink-0 text-cyan-400" />
                <span className="font-medium truncate max-w-xs sm:max-w-md">{q.query}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Pipeline Stage Indicators */}
      <div className="mt-6 p-3 sm:p-4 rounded-xl bg-slate-950 border border-slate-800">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-mono">
          <div className={`p-2 rounded-lg border transition-all ${activeStep >= 1 ? 'bg-cyan-950/40 border-cyan-800 text-cyan-300' : 'border-slate-800 text-slate-400'}`}>
            <div className="font-semibold">1. Embedding</div>
            <div className="text-[10px] text-slate-400">Dense 1024-d Vector</div>
          </div>
          <div className={`p-2 rounded-lg border transition-all ${activeStep >= 2 ? 'bg-cyan-950/40 border-cyan-800 text-cyan-300' : 'border-slate-800 text-slate-400'}`}>
            <div className="font-semibold">2. Hybrid Search</div>
            <div className="text-[10px] text-slate-400">BM25 + Qdrant HNSW</div>
          </div>
          <div className={`p-2 rounded-lg border transition-all ${activeStep >= 3 ? 'bg-cyan-950/40 border-cyan-800 text-cyan-300' : 'border-slate-800 text-slate-400'}`}>
            <div className="font-semibold">3. Cross-Encoder</div>
            <div className="text-[10px] text-slate-400">BGE-Reranker-Large</div>
          </div>
          <div className={`p-2 rounded-lg border transition-all ${activeStep >= 4 ? 'bg-emerald-950/40 border-emerald-800 text-emerald-300' : 'border-slate-800 text-slate-400'}`}>
            <div className="font-semibold">4. Grounded Gen</div>
            <div className="text-[10px] text-slate-400">Zero-Hallucination</div>
          </div>
        </div>
      </div>

      {/* Retrieved Chunks & Reranker Scores */}
      <div className="mt-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            Top-Ranked Context Chunks
          </span>
          <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> G-Eval Faithfulness: 98.4%
          </span>
        </div>

        <div className="space-y-3">
          {currentScenario.chunks.map((chunk) => (
            <div
              key={chunk.id}
              className="p-3.5 sm:p-4 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2 pb-2 border-b border-slate-900">
                <span className="text-xs font-mono font-semibold text-slate-200 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-slate-400" />
                  {chunk.source}
                </span>
                <div className="flex items-center gap-2 text-[11px] font-mono">
                  <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                    BM25: {chunk.bm25Score.toFixed(2)}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 text-cyan-400 border border-slate-800">
                    Dense: {chunk.denseScore.toFixed(2)}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 font-bold border border-emerald-800">
                    Rerank: {chunk.rerankScore.toFixed(2)}
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{chunk.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Synthesized Output */}
      <div className="mt-6 p-4 sm:p-5 rounded-xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-cyan-900/50">
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-1.5 font-semibold">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            Synthesized Grounded Response
          </span>
          <span className="text-[11px] font-mono text-slate-400">Latency: 284ms • TTFT: 38ms</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
          {currentScenario.answer}
        </p>
      </div>
    </div>
  );
};
