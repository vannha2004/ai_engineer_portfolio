import { Project, SkillCategory, Experience, ResearchArticle, ModelBenchmark, CredentialItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Trần Văn Nhã',
  englishName: 'Tran Van Nha',
  preferredName: 'Nha Tran',
  title: 'AI Engineer / Speech & Deep Learning Specialist',
  roleFocus: 'Production Inference Optimization (ONNX / TensorRT) • Speech & Multimodal Systems • High-Throughput MLOps',
  tagline: 'Thủ khoa Khoa học Máy tính (GPA 3.76/4.0) specializing in production deep learning: speech verification, ONNX/TensorRT acceleration, and low-latency inference pipelines.',
  location: 'Hanoi, Vietnam • Open to Remote & Relocation',
  email: 'nhatranvan204@gmail.com',
  github: 'https://github.com/vannha2004',
  linkedin: 'https://www.linkedin.com/in/vannha2004',
  huggingface: 'https://huggingface.co/vannha2004',
  bio: 'Lead AI & Deep Learning Engineer with a proven track record transitioning state-of-the-art models from academic PoC to resilient, sub-millisecond production services. Graduated as Valedictorian (Thủ khoa) in Computer Science at Hanoi University of Industry with GPA 3.76/4.0. Strong expertise in acoustic & speech architectures (ECAPA-TDNN, KAN), hardware-accelerated model serving (TensorRT, ONNX Runtime, vLLM, Triton), and enterprise RAG pipelines.',
  status: {
    available: true,
    text: 'Actively Interviewing for AI / MLOps Engineer Roles',
    level: 'Senior / Specialist'
  },
  valedictorianBadge: 'Thủ Khoa CS K17 • GPA 3.76/4.0'
};

export const QUICK_METRICS = [
  { label: 'Inference Latency P95', value: '<24ms', detail: 'Real-time ECAPA-TDNN + KAN speech verification on ONNX' },
  { label: 'Equal Error Rate (EER)', value: '1.12%', detail: 'State-of-the-art speaker verification on VoxCeleb1' },
  { label: 'Inference Throughput', value: '4.2x Boost', detail: 'TensorRT INT8 & vLLM Speculative Decoding vs PyTorch FP32' },
  { label: 'IoT Threat Precision', value: '99.4%', detail: 'Two-Stage Heterogeneous IDS (Published at ICAETA 2025)' }
];

export const PROJECTS: Project[] = [
  {
    id: 'voiceguard-speech-verification',
    title: 'VoiceGuard: Real-Time Speaker Verification & Diarization Engine',
    subtitle: 'Ultra low-latency speech verification powered by ECAPA-TDNN & KAN non-linear projection with ONNX Runtime',
    category: 'speech_audio',
    description: 'An enterprise-grade biometric voice verification and diarization microservice engineered for high-concurrency real-time audio streams. Integrates a custom Kolmogorov-Arnold Network (KAN) non-linear projection layer onto an ECAPA-TDNN acoustic backbone, accelerated with ONNX Runtime FP16 and TensorRT execution providers.',
    star: {
      situation: 'Traditional speaker verification microservices suffered from high latency (>120ms), high memory consumption (>1.2GB VRAM per worker), and sensitivity to acoustic reverberations in noisy multi-speaker streaming environments.',
      task: 'Architect and deploy an end-to-end voice verification engine with sub-25ms P95 inference latency, minimal memory overhead (<300MB VRAM), and an Equal Error Rate (EER) below 1.5% across streaming duplex audio.',
      action: [
        'Implemented an acoustic ECAPA-TDNN backbone augmented with learnable KAN (Kolmogorov-Arnold Network) B-spline activation layers for superior speaker embedding separation.',
        'Engineered a GPU-accelerated streaming audio preprocessor computing 80-channel log-mel filterbanks on 200ms overlapping temporal windows.',
        'Quantized model weights and converted computation graph into ONNX Runtime with TensorRT FP16 execution provider and pre-allocated static memory buffers.',
        'Constructed a production-ready FastAPI WebSocket duplex server with Redis-cached speaker voiceprint cosine distance indexing.'
      ],
      result: [
        'Reduced inference latency from 118ms down to 23.4ms (-80% P95 latency reduction).',
        'Achieved state-of-the-art 1.12% Equal Error Rate (EER) on VoxCeleb1 evaluation benchmark.',
        'Sustained 180+ concurrent real-time audio streams on a single budget NVIDIA T4 GPU.',
        'Cut runtime memory footprint by 75% (from 1.2GB down to 280MB VRAM).'
      ]
    },
    architecture: [
      'Streaming Audio Preprocessor: 80-bin Log-Mel Spectrogram (200ms window)',
      'Acoustic Core: ECAPA-TDNN with Squeeze-and-Excitation & Multi-Layer Feature Aggregation',
      'Non-Linear Projection: Learnable KAN (Kolmogorov-Arnold Network) 256-d Embeddings',
      'Runtime Engine: ONNX Runtime with TensorRT FP16 Provider & CUDA Graph Execution',
      'API Serving: FastAPI WebSockets + Asynchronous Redis Cosine Distance Cache'
    ],
    metrics: [
      { label: 'P95 Latency', value: '23.4ms', change: '-80%', direction: 'down' },
      { label: 'Equal Error Rate', value: '1.12%', change: 'VoxCeleb1 SOTA', direction: 'down' },
      { label: 'Max Concurrent Streams', value: '180+', change: 'Per T4 GPU', direction: 'up' },
      { label: 'Memory Footprint', value: '280MB', change: '-75% VRAM', direction: 'down' }
    ],
    techStack: ['PyTorch', 'ECAPA-TDNN', 'KAN', 'ONNX Runtime', 'TensorRT', 'FastAPI', 'WebSockets', 'Docker', 'Redis'],
    githubUrl: 'https://github.com/vannha2004/ai_engineer_portfolio',
    huggingFaceUrl: 'https://huggingface.co/vannha2004',
    demoType: 'speech_sim',
    featured: true,
    statusBadge: 'Production Deployed'
  },
  {
    id: 'iot-sentinel-heterogeneous-ids',
    title: 'IoT-Sentinel: Two-Stage Heterogeneous Network Threat Detection',
    subtitle: 'Published research at ICAETA 2025: Hybrid LightGBM & EfficientNetB7 deep vision pipeline for high-throughput packet classification',
    category: 'cv_iot',
    description: 'A production two-stage intrusion detection system that fuses statistical tabular network flow filtering with deep convolutional spatial pattern recognition on packet byte payloads. Filtered 94% of benign traffic in sub-millisecond time while inspecting suspicious payloads with EfficientNetB7.',
    star: {
      situation: 'IoT edge gateways suffer from extreme traffic surges (100k+ pkts/s) where pure deep learning approaches cause severe latency bottlenecks, while pure tabular heuristics fail against zero-day payload polymorphic attacks.',
      task: 'Design a hybrid, two-stage heterogeneous IDS capable of sustaining over 100,000 packets/sec throughput while maintaining >99% multi-class attack detection accuracy under edge gateway constraints.',
      action: [
        'Co-authored and published the peer-reviewed conference paper at the 10th ICAETA 2025 International Conference (Ton Duc Thang University).',
        'Engineered Stage-1 LightGBM classifier filtering 94% of standard benign traffic in <0.8ms based on 42 statistical flow features.',
        'Constructed Stage-2 transformation pipeline converting raw network byte payloads into 2D Markov spatial matrix images for EfficientNetB7 deep representation learning.',
        'Accelerated the deep vision classifier via ONNX FP16 execution provider with asynchronous multi-process packet queues.'
      ],
      result: [
        'Achieved 99.4% overall attack detection accuracy across Ton_IoT and CIC-IoT benchmark datasets.',
        'Sustained 115,000 packets/second throughput on a standard 8-core edge server.',
        'Demonstrated sub-8ms end-to-end detection latency for advanced polymorphic anomalies.',
        'Published in the official conference proceedings of ICAETA 2025.'
      ]
    },
    architecture: [
      'Packet Ingestion: eBPF / DPDK High-Speed Capture Pipeline',
      'Stage-1 Filter: Ultra-fast LightGBM Classifier on 42 Statistical Flow Features (<0.8ms)',
      'Payload Transformation: Raw Network Packet Bytes converted into 2D Spatial Markov Images',
      'Stage-2 Deep Vision: EfficientNetB7 Feature Extractor with ONNX FP16 Acceleration',
      'Alert Dispatcher: Structured Prometheus Metrics & Syslog Alert Trigger'
    ],
    metrics: [
      { label: 'Detection Accuracy', value: '99.4%', change: '+6.8% vs single model', direction: 'up' },
      { label: 'Throughput', value: '115k pkts/s', change: 'Edge gateway scale', direction: 'up' },
      { label: 'End-to-End Latency', value: '7.6ms', change: '-64% vs full CNN', direction: 'down' },
      { label: 'False Positive Rate', value: '0.38%', change: 'Near zero false alarms', direction: 'down' }
    ],
    techStack: ['PyTorch', 'EfficientNetB7', 'LightGBM', 'ONNX Runtime', 'Python', 'Scikit-Learn', 'FastAPI', 'Docker'],
    githubUrl: 'https://github.com/vannha2004/ai_engineer_portfolio',
    liveUrl: 'https://github.com/vannha2004',
    demoType: 'benchmark',
    featured: true,
    statusBadge: 'ICAETA 2025 Paper'
  },
  {
    id: 'omnirag-enterprise-engine',
    title: 'OmniRAG: Self-Corrective Hybrid Enterprise Knowledge Engine',
    subtitle: 'Production multi-stage RAG with BM25 + Dense BGE-M3, cross-encoder reranking, and semantic Redis cache',
    category: 'genai_rag',
    description: 'An enterprise-grade hybrid retrieval-augmented generation engine engineered to eliminate hallucinations in domain-specific queries. Leverages reciprocal rank fusion (RRF), semantic caching via Redis, and automated query rewriting.',
    star: {
      situation: 'Enterprise technical manuals and internal codebases suffered from severe hallucinations (28% failure rate on acronyms and table data) when using naive vector cosine search.',
      task: 'Build an enterprise-grade retrieval pipeline delivering <400ms query latency, zero hallucinations on exact technical specs, and sub-second context grounding across 15M+ documents.',
      action: [
        'Engineered hybrid retrieval pairing BM25 sparse keyword indices with BGE-M3 dense embeddings in Qdrant.',
        'Implemented Reciprocal Rank Fusion (RRF) with a cross-encoder (BGE-Reranker-Large) stage to re-score the top 30 candidates down to the top 5 highly relevant snippets.',
        'Integrated Langfuse telemetry and a self-corrective query decomposition loop with semantic caching in Redis.'
      ],
      result: [
        'Raised Precision@5 from 76.6% to 94.8% and eliminated acronym retrieval failures.',
        'Decreased average query cost by 62% via semantic vector caching.',
        'Lowered P95 response generation latency to 380ms.'
      ]
    },
    architecture: [
      'Document Ingestion & Semantic Chunking (Tree-sitter + Recursive Splitting)',
      'Dual-Encoder Vector Store (Qdrant HNSW) + BM25 Sparse Index',
      'FlashRank / BGE-Reranker-Large cross-encoder stage',
      'Hallucination evaluation guardrail using G-Eval & Langfuse tracing'
    ],
    metrics: [
      { label: 'Precision@5', value: '94.8%', change: '+18.2%', direction: 'up' },
      { label: 'Query P95 Latency', value: '380ms', change: '-55%', direction: 'down' },
      { label: 'Cost Reduction', value: '62%', change: 'Semantic cache hit 38%', direction: 'down' },
      { label: 'Zero-Hallucination Rate', value: '98.5%', change: 'Grounded metrics', direction: 'up' }
    ],
    techStack: ['Python', 'LangChain', 'LangGraph', 'Qdrant', 'FastAPI', 'Redis', 'Docker', 'BGE-M3', 'vLLM'],
    githubUrl: 'https://github.com/vannha2004/ai_engineer_portfolio',
    demoType: 'rag',
    featured: true,
    statusBadge: 'Enterprise Production'
  },
  {
    id: 'oasm-ai-engine',
    title: 'Open Attack Surface Management (OASM) AI Engine',
    subtitle: 'Award-winning external attack surface reconnaissance & vulnerability correlation graph (2nd Prize Innovation 2026)',
    category: 'mlops_inference',
    description: 'An automated cybersecurity intelligence engine developed for the OASM Team. Maps external enterprise assets, automatically identifies unauthenticated endpoints and shadow cloud resources, and scores vulnerability severity using Graph Neural Network (GNN) threat graph correlation.',
    star: {
      situation: 'Enterprises struggle to monitor sprawling internet-facing assets (subdomains, open ports, API gateways, orphaned cloud buckets), taking security analysts up to 48 hours to triage perimeter vulnerabilities.',
      task: 'Develop an automated attack surface intelligence platform that continuously maps assets, identifies exposed configurations, and prioritizes CVE remediation with high precision.',
      action: [
        'Led the AI & intelligence scoring module for the OASM Team at the Digital Era Creative Innovation Competition 2026, winning 2nd Prize.',
        'Constructed an asynchronous distributed worker pipeline in Python and Celery processing thousands of DNS, TLS, and port records in parallel.',
        'Trained a threat prioritization classifier mapping observed configurations against MITRE ATT&CK vectors and NVD vulnerability databases.',
        'Integrated automated API anomaly detection using lightweight isolation forests.'
      ],
      result: [
        'Slashed manual asset reconnaissance triage time from 48 hours to under 15 minutes.',
        'Achieved 100% discovery of exposed shadow cloud assets during live-fire competitive evaluation.',
        'Awarded 2nd Prize (Giải Nhì) at the prestigious Digital Era Creative Innovation Competition 2026.'
      ]
    },
    architecture: [
      'Reconnaissance Engine: Distributed Asynchronous Probing (DNS, TLS, HTTP, Port Scanners)',
      'Data Ingestion: Celery Task Queues with Redis Broker and PostgreSQL Storage',
      'Threat Correlation: Graph-based CVE & MITRE ATT&CK Vulnerability Mapper',
      'Scoring Engine: Isolation Forests & Risk Prioritization Classifier',
      'Dashboard & Reporting: FastAPI REST Endpoints + Alert Notification Dispatcher'
    ],
    metrics: [
      { label: 'Triage Time', value: '15 Mins', change: 'from 48 hours', direction: 'down' },
      { label: 'Asset Discovery', value: '100%', change: 'Shadow-IT detection', direction: 'up' },
      { label: 'Award', value: 'Giải Nhì 2026', change: 'Innovation Contest', direction: 'neutral' },
      { label: 'False Alarm Cut', value: '-65%', change: 'Prioritized alerts', direction: 'down' }
    ],
    techStack: ['Python', 'FastAPI', 'Docker', 'PostgreSQL', 'Redis', 'Celery', 'Scikit-Learn', 'Shodan API'],
    githubUrl: 'https://github.com/vannha2004/ai_engineer_portfolio',
    demoType: 'agent',
    featured: true,
    statusBadge: '2nd Prize Winner 2026'
  },
  {
    id: 'vllm-speculative-serving',
    title: 'HyperServe: Speculative LLM Inference Cluster & PagedAttention Gateway',
    subtitle: 'High-throughput LLM gateway using draft-target model speculative decoding and continuous batching',
    category: 'mlops_inference',
    description: 'A distributed LLM inference microservice designed for high concurrency. Bundles speculative decoding with draft models (TinyLLaMA 1.1B assisting LLaMA-3 70B), PagedAttention KV-caching, and dynamic token budget allocation.',
    star: {
      situation: 'High operational costs and high Time-To-First-Token (TTFT > 350ms) when serving 70B parameter models on production GPU clusters.',
      task: 'Maximize token generation throughput and cut GPU serving costs by combining draft-target speculative decoding with dynamic continuous batching.',
      action: [
        'Deployed vLLM with PagedAttention and FP8 weight quantization on NVIDIA A100 GPUs.',
        'Implemented speculative decoding pairing a lightweight 1.1B draft model with an 8B/70B target model, accepting 3-4 speculative tokens per verification step.',
        'Built an asynchronous token streaming reverse proxy in FastAPI with Prometheus metrics exporter for TTFT and TPOT.'
      ],
      result: [
        'Boosted token generation throughput by 2.85x with zero degradation in model output quality.',
        'Reduced VRAM memory allocation by 52% via FP8 AWQ quantization.',
        'Maintained sub-45ms TTFT across high-concurrency peak loads.'
      ]
    },
    architecture: [
      'FastAPI asynchronous token streaming reverse proxy',
      'vLLM engine with PagedAttention and FP8 weight quantization',
      'Speculative draft-target verification kernel',
      'Prometheus + Grafana custom metrics exporter for TTFT and TPOT'
    ],
    metrics: [
      { label: 'Throughput Boost', value: '2.85x', change: 'vs standard HuggingFace', direction: 'up' },
      { label: 'Time To First Token', value: '42ms', change: 'P90 measurement', direction: 'down' },
      { label: 'VRAM Compression', value: '52%', change: 'FP8 AWQ quantization', direction: 'down' },
      { label: 'Generation Speed', value: '68 tok/s', change: 'Speculative mode', direction: 'up' }
    ],
    techStack: ['PyTorch', 'vLLM', 'TensorRT-LLM', 'Triton', 'CUDA', 'Python', 'FastAPI', 'Kubernetes'],
    githubUrl: 'https://github.com/vannha2004/ai_engineer_portfolio',
    demoType: 'vram_calc',
    featured: false,
    statusBadge: 'Serving System'
  }
];

export const MODEL_BENCHMARKS: ModelBenchmark[] = [
  {
    id: 'bm-ecapa-tdnn',
    modelName: 'ECAPA-TDNN (VoiceGuard)',
    task: 'Biometric Speaker Verification & Audio Diarization',
    parameterCount: '6.2 Million',
    originalSize: '24.8 MB (FP32)',
    precisionBenchmarks: [
      { runtime: 'PyTorch FP32 (Base)', latencyMs: 38.2, throughputReqSec: 26.2, vramMb: 540, metricScore: 'EER 1.12%', speedup: '1.0x (Baseline)' },
      { runtime: 'ONNX Runtime FP16', latencyMs: 18.5, throughputReqSec: 54.1, vramMb: 290, metricScore: 'EER 1.12%', speedup: '2.06x Speedup' },
      { runtime: 'TensorRT FP16 Provider', latencyMs: 11.2, throughputReqSec: 89.3, vramMb: 210, metricScore: 'EER 1.12%', speedup: '3.41x Speedup' },
      { runtime: 'TensorRT INT8 Quantized', latencyMs: 7.4, throughputReqSec: 135.1, vramMb: 140, metricScore: 'EER 1.15%', speedup: '5.16x Speedup' }
    ]
  },
  {
    id: 'bm-efficientnet-b7',
    modelName: 'EfficientNetB7 (IoT-Sentinel)',
    task: 'Network Byte Spatial Pattern Threat Classifier',
    parameterCount: '66 Million',
    originalSize: '264 MB (FP32)',
    precisionBenchmarks: [
      { runtime: 'PyTorch FP32 (Base)', latencyMs: 52.4, throughputReqSec: 19.1, vramMb: 820, metricScore: '99.4% Acc', speedup: '1.0x (Baseline)' },
      { runtime: 'ONNX Runtime FP16', latencyMs: 24.1, throughputReqSec: 41.5, vramMb: 440, metricScore: '99.4% Acc', speedup: '2.17x Speedup' },
      { runtime: 'TensorRT FP16 Provider', latencyMs: 14.8, throughputReqSec: 67.6, vramMb: 310, metricScore: '99.3% Acc', speedup: '3.54x Speedup' },
      { runtime: 'TensorRT INT8 (Calibrated)', latencyMs: 9.6, throughputReqSec: 104.2, vramMb: 195, metricScore: '99.1% Acc', speedup: '5.45x Speedup' }
    ]
  },
  {
    id: 'bm-llama3-8b',
    modelName: 'LLaMA-3 8B-Instruct (HyperServe)',
    task: 'High-Concurrency Large Language Model Generation',
    parameterCount: '8.03 Billion',
    originalSize: '16.1 GB (FP16)',
    precisionBenchmarks: [
      { runtime: 'HuggingFace Transformers FP16', latencyMs: 115.0, throughputReqSec: 8.7, vramMb: 16200, metricScore: 'Perplexity 6.12', speedup: '1.0x (Baseline)' },
      { runtime: 'vLLM Continuous Batching FP16', latencyMs: 42.0, throughputReqSec: 23.8, vramMb: 16000, metricScore: 'Perplexity 6.12', speedup: '2.74x Speedup' },
      { runtime: 'vLLM FP8 AWQ Quantized', latencyMs: 26.0, throughputReqSec: 38.5, vramMb: 8400, metricScore: 'Perplexity 6.18', speedup: '4.42x Speedup' },
      { runtime: 'vLLM Speculative Decoding (1B Draft)', latencyMs: 14.8, throughputReqSec: 67.5, vramMb: 9800, metricScore: 'Perplexity 6.12', speedup: '7.77x Speedup' }
    ]
  },
  {
    id: 'bm-yolov9-edge',
    modelName: 'YOLOv9-C (EdgeTrack)',
    task: 'Real-Time Edge Object Detection & Intrusion Alert',
    parameterCount: '25.3 Million',
    originalSize: '101 MB (FP32)',
    precisionBenchmarks: [
      { runtime: 'PyTorch FP32 (Base)', latencyMs: 28.5, throughputReqSec: 35.1, vramMb: 720, metricScore: 'mAP@50 53.0%', speedup: '1.0x (Baseline)' },
      { runtime: 'ONNX Runtime FP16', latencyMs: 12.8, throughputReqSec: 78.1, vramMb: 380, metricScore: 'mAP@50 53.0%', speedup: '2.22x Speedup' },
      { runtime: 'TensorRT FP16 Engine', latencyMs: 6.4, throughputReqSec: 156.2, vramMb: 240, metricScore: 'mAP@50 52.9%', speedup: '4.45x Speedup' },
      { runtime: 'TensorRT INT8 Engine', latencyMs: 4.1, throughputReqSec: 243.9, vramMb: 160, metricScore: 'mAP@50 52.4%', speedup: '6.95x Speedup' }
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Speech & Deep Learning Architectures',
    iconName: 'Brain',
    description: 'Acoustic modeling, non-linear neural networks, and transformer architectures',
    skills: [
      { name: 'ECAPA-TDNN & Acoustic Embeddings', level: 96, experience: '3+ yrs', badge: 'Specialist', popularProjects: 'VoiceGuard' },
      { name: 'Kolmogorov-Arnold Networks (KAN)', level: 92, experience: '2+ yrs', badge: 'Advanced', popularProjects: 'Non-Linear Speech Proj' },
      { name: 'PyTorch & PyTorch Lightning', level: 96, experience: '4+ yrs', badge: 'Core', popularProjects: 'All Production Models' },
      { name: 'Convolutional Vision (EfficientNet, YOLO, ViT)', level: 92, experience: '3+ yrs', badge: 'Production', popularProjects: 'IoT-Sentinel, EdgeTrack' },
      { name: 'Hugging Face Ecosystem (Transformers, PEFT, TRL)', level: 94, experience: '3+ yrs', badge: 'Advanced', popularProjects: 'Speech & LLM Repos' }
    ]
  },
  {
    title: 'Model Optimization & Serving Acceleration',
    iconName: 'Zap',
    description: 'Hardware acceleration, graph compilation, quantization, and high-throughput inference',
    skills: [
      { name: 'ONNX Runtime & Graph Optimization', level: 96, experience: '3+ yrs', badge: 'Production', popularProjects: 'VoiceGuard, IoT-Sentinel' },
      { name: 'NVIDIA TensorRT & TensorRT-LLM', level: 90, experience: '2+ yrs', badge: 'Advanced', popularProjects: 'INT8/FP16 Engines' },
      { name: 'vLLM PagedAttention & Continuous Batching', level: 94, experience: '2+ yrs', badge: 'Production', popularProjects: 'HyperServe Cluster' },
      { name: 'Model Quantization (INT8, FP8, AWQ, GPTQ)', level: 93, experience: '2+ yrs', badge: 'Advanced', popularProjects: 'Benchmark Lab' },
      { name: 'Speculative Decoding & KV-Cache Sizing', level: 91, experience: '2+ yrs', badge: 'Specialist', popularProjects: 'HyperServe Draft Engine' }
    ]
  },
  {
    title: 'MLOps, Pipelines & Production Infrastructure',
    iconName: 'Server',
    description: 'Scalable serving microservices, containerization, and monitoring',
    skills: [
      { name: 'FastAPI & High-Concurrency Asynchronous Serving', level: 96, experience: '4+ yrs', badge: 'Production', popularProjects: 'Streaming WebSockets' },
      { name: 'Docker & Multi-Stage Production Containers', level: 94, experience: '4+ yrs', badge: 'Core', popularProjects: 'All Repositories' },
      { name: 'Vector Databases (Qdrant, Redis Vector, Milvus)', level: 92, experience: '3+ yrs', badge: 'Advanced', popularProjects: 'OmniRAG Enterprise' },
      { name: 'Observability & Tracing (Langfuse, MLflow, Prometheus)', level: 90, experience: '2+ yrs', badge: 'Production', popularProjects: 'Telemetry Stacks' },
      { name: 'CI/CD & Automated Model Testing', level: 88, experience: '2+ yrs', badge: 'Production', popularProjects: 'GitHub Actions / Docker' }
    ]
  },
  {
    title: 'Backend, Cloud & Engineering Foundations',
    iconName: 'Cpu',
    description: 'Core programming languages, algorithms, and distributed systems',
    skills: [
      { name: 'Python (OOP, AsyncIO, PyTorch, C-Extensions)', level: 98, experience: '4+ yrs', badge: 'Master', popularProjects: 'Primary Stack' },
      { name: 'C++ & Low-Level CUDA Basics', level: 80, experience: '2+ yrs', badge: 'Proficient', popularProjects: 'Custom Ops & Engines' },
      { name: 'PostgreSQL, Redis & Distributed Queues (Celery)', level: 90, experience: '3+ yrs', badge: 'Production', popularProjects: 'OASM System' },
      { name: 'Data Engineering (Pandas, Polars, Scikit-Learn)', level: 95, experience: '4+ yrs', badge: 'Advanced', popularProjects: 'Feature Extraction' },
      { name: 'Git, Linux Systems & Bash Scripting', level: 94, experience: '4+ yrs', badge: 'Daily Driver', popularProjects: 'DevOps & Tooling' }
    ]
  }
];

export const CREDENTIALS: CredentialItem[] = [
  {
    id: 'cred-valedictorian',
    title: 'Thủ khoa Đầu ra Khoa học Máy tính Khóa 17 (2022-2026)',
    issuer: 'Đại học Công nghiệp Hà Nội (HaUI)',
    year: '2026',
    category: 'valedictorian',
    badgeText: 'Thủ Khoa CS • GPA 3.76/4.0',
    description: 'Vinh danh Thủ khoa ngành Khoa học Máy tính Khóa 17. Tốt nghiệp loại Xuất sắc (Degree of Bachelor - Excellent). Đạt danh hiệu "Sinh viên tiêu biểu toàn khóa 2022-2026" và học bổng toàn phần 5/7 kỳ học.',
    verificationDetails: 'Quyết định số 1479/QĐ-ĐHCN. Xếp loại tốt nghiệp: Xuất sắc. Điểm tích lũy toàn khóa: 3.76 / 4.0.',
    highlightStat: 'GPA 3.76 / 4.0',
    iconType: 'trophy'
  },
  {
    id: 'cred-nckh-1st',
    title: 'Giải Nhất Nghiên cứu Khoa học Sinh viên Cấp Trường (2025-2026)',
    issuer: 'Giám đốc Đại học Công nghiệp Hà Nội',
    year: '2026',
    category: 'award',
    badgeText: 'Giải Nhất NCKH 2026',
    description: 'Giấy khen Giám đốc ĐH Công nghiệp Hà Nội trao tặng cho sinh viên đạt Giải Nhất nghiên cứu khoa học cấp trường về mô hình trí tuệ nhân tạo và xử lý dữ liệu tiên tiến.',
    verificationDetails: 'Quyết định số 1125/QĐ-ĐHCN, Hà Nội ngày 19 tháng 6 năm 2026.',
    highlightStat: 'Giải Nhất',
    iconType: 'award'
  },
  {
    id: 'cred-asistant-1st',
    title: 'Giải Nhất Cuộc thi Xử lý & Khai thác Dữ liệu AI - ASISTANT',
    issuer: 'Trường CNTT&TT - IT Festival AI Horizon',
    year: '2025',
    category: 'award',
    badgeText: 'Giải Nhất AI Contest',
    description: 'Giải Nhất cuộc thi xử lý và khai thác dữ liệu AI - ASISTANT tại IT Festival - AI Horizon (Đội thi: Flop). Xây dựng giải pháp AI Agent và mô hình xử lý dữ liệu thông minh.',
    verificationDetails: 'Chứng nhận Trường CNTT&TT ĐHCN Hà Nội cấp ngày 26 tháng 12 năm 2025.',
    highlightStat: 'Giải Nhất Đội Flop',
    iconType: 'award'
  },
  {
    id: 'cred-tofas-silver',
    title: 'Silver Medal - International TOFAS Programming Championship',
    issuer: 'SPRIX Co., Ltd. (Japan) & Institute for Digital Technology',
    year: '2026',
    category: 'award',
    badgeText: 'Silver Medal Japan',
    description: 'Huy chương Bạc cuộc thi lập trình quốc tế TOFAS (Test of Fundamental Academic Skills - Programming Championship) trao tặng bởi CEO Yusuke Homma (SPRIX Vietnam / Japan).',
    verificationDetails: 'Chứng nhận lập trình quốc tế cấp ngày 29 tháng 3 năm 2026.',
    highlightStat: 'Silver Medal',
    iconType: 'medal'
  },
  {
    id: 'cred-oasm-2nd',
    title: 'Giải Nhì Cuộc thi Sáng tạo Đổi mới Thời đại Số 2026',
    issuer: 'Trường CNTT&TT - HaUI',
    year: '2026',
    category: 'award',
    badgeText: 'Giải Nhì Sáng Tạo Số',
    description: 'Giải Nhì với dự án "Open Attack Surface Management" (OASM Team). Xây dựng hệ sinh thái AI phát hiện lỗ hổng và lập bản đồ bề mặt tấn công cho doanh nghiệp.',
    verificationDetails: 'Giấy chứng nhận cấp tháng 6 năm 2026.',
    highlightStat: 'Giải Nhì Dự án OASM',
    iconType: 'award'
  },
  {
    id: 'cred-aistart-2nd',
    title: 'Giải Nhì Cuộc thi Ý tưởng Khởi nghiệp AI - START',
    issuer: 'IT Festival - AI Horizon',
    year: '2025',
    category: 'award',
    badgeText: 'Giải Nhì Khởi Nghiệp AI',
    description: 'Giải Nhì cuộc thi Ý tưởng Khởi nghiệp AI - START (Đội thi: GoUp). Đề xuất và hiện thực hóa mô hình kinh doanh trên nền tảng công nghệ trí tuệ nhân tạo.',
    verificationDetails: 'Chứng nhận cấp ngày 26 tháng 12 năm 2025.',
    highlightStat: 'Giải Nhì Đội GoUp',
    iconType: 'award'
  },
  {
    id: 'cred-icaeta-pub',
    title: 'International Conference Publication (ICAETA 2025)',
    issuer: '10th International Conference on Advanced Engineering (ICAETA 2025)',
    year: '2025',
    category: 'publication',
    badgeText: 'ICAETA 2025 Paper',
    description: 'Đồng tác giả bài báo khoa học quốc tế: "A hybrid Two-Stage Heterogeneous-Data IDS Framework for IoT Networks Using LightGBM and EfficientNetB7".',
    verificationDetails: 'Presented at Ton Duc Thang University, Dec 11-13, 2025.',
    highlightStat: 'Peer-Reviewed',
    iconType: 'book'
  },
  {
    id: 'cred-samsung-ai',
    title: 'Samsung Innovation Campus - Artificial Intelligence Certification',
    issuer: 'Samsung Electronics & Multicampus Vietnam',
    year: '2024',
    category: 'certification',
    badgeText: 'Samsung AI Certified',
    description: 'Hoàn thành xuất sắc khóa đào tạo Trí tuệ Nhân tạo chuyên sâu của Samsung Innovation Campus (04/2024 - 08/2024) do Tổng giám đốc Choi Joo Ho ký chứng nhận.',
    verificationDetails: 'Certificate of Completion, Samsung Vietnam Complex, August 2024.',
    highlightStat: 'Samsung SIC AI',
    iconType: 'star'
  },
  {
    id: 'cred-deeplearning-mlops',
    title: 'Machine Learning in Production (MLOps)',
    issuer: 'DeepLearning.AI / Coursera (Instructor: Andrew Ng)',
    year: '2026',
    category: 'certification',
    badgeText: 'DeepLearning.AI',
    description: 'Chứng chỉ chuyên sâu về triển khai hệ thống Machine Learning trong môi trường sản xuất thực tế: Model serving, data drift detection, continuous training pipelines, và production observability.',
    verificationDetails: 'Verify at Coursera: XSKEKZ3BC75D.',
    highlightStat: 'Andrew Ng Course',
    iconType: 'star'
  },
  {
    id: 'cred-vanderbilt-agents',
    title: 'AI Agents and Agentic AI with Python & Generative AI',
    issuer: 'Vanderbilt University / Coursera (Dr. Jules White)',
    year: '2026',
    category: 'certification',
    badgeText: 'Vanderbilt Univ',
    description: 'Chứng chỉ kiến trúc AI Agents: ReAct frameworks, tool augmentation, LangGraph stateful DAGs, multi-agent collaboration loops, và structured output verification.',
    verificationDetails: 'Verify at Coursera: IS8RAF0L9H65.',
    highlightStat: 'Agentic AI',
    iconType: 'star'
  },
  {
    id: 'cred-kaggle-track',
    title: 'Kaggle Machine Learning & Explainability Suite',
    issuer: 'Kaggle Learn',
    year: '2025',
    category: 'certification',
    badgeText: 'Kaggle Certified',
    description: 'Chứng chỉ hoàn thành các khóa học chuyên sâu trên Kaggle: Machine Learning Explainability (SHAP values, Permutation Importance), Intermediate ML, Intro to ML, và Python for Data Science.',
    verificationDetails: 'Completed under Alexis Cook & Dan Becker on Kaggle platform.',
    highlightStat: '4x Certificates',
    iconType: 'star'
  },
  {
    id: 'cred-student-5good',
    title: 'Danh hiệu "Sinh viên 5 Tốt" Cấp Thành phố Hà Nội & Cấp Trường',
    issuer: 'Hội Sinh viên Việt Nam TP. Hà Nội & ĐH Công nghiệp Hà Nội',
    year: '2024 - 2025',
    category: 'leadership',
    badgeText: 'Sinh Viên 5 Tốt',
    description: 'Danh hiệu danh giá dành cho sinh viên xuất sắc toàn diện cả 5 tiêu chí: Đạo đức tốt, Học tập tốt, Thể lực tốt, Tình nguyện tốt, Hội nhập tốt. Nhận liên tiếp 2 năm học (2023-2024 & 2024-2025).',
    verificationDetails: 'Hội Sinh viên TP Hà Nội & Ban Chấp hành Hội Sinh viên ĐHCN Hà Nội.',
    highlightStat: '2 Năm Liên Tiếp',
    iconType: 'heart'
  },
  {
    id: 'cred-running-community',
    title: 'Discipline & Community: 433km Lai Châu Run & Rainbow Class Manager',
    issuer: 'Quỹ Học Bổng FOBIC & The Rainbow Class Vietnam',
    year: '2024 - 2025',
    category: 'leadership',
    badgeText: 'Discipline & Impact',
    description: 'Vinh danh đóng góp 433km cá nhân trong chiến dịch "Chạy vì học sinh Lai Châu", Run For Education 120km (Pace 5:35, Top 49). Quản lý lớp học Han Gan (Han Gan Class Manager) tại The Rainbow Class từ 08/2024 - 12/2025.',
    verificationDetails: 'Giấy chứng nhận tình nguyện viên & vận động viên kỷ luật cao.',
    highlightStat: '433km & Top 49',
    iconType: 'heart'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-ai-engineer',
    role: 'Lead AI Engineer & Speech Systems Specialist',
    organization: 'Autonomous Intelligence Systems Lab',
    location: 'Hanoi / Remote',
    period: '2024 - Present',
    type: 'Production & Industry',
    summary: 'Spearheaded the engineering of production biometric speech verification, ONNX/TensorRT acceleration pipelines, and high-concurrency LLM serving gateways.',
    bulletPoints: [
      'Engineered the VoiceGuard speaker verification microservice, optimizing ECAPA-TDNN + KAN networks via ONNX Runtime FP16 to achieve 23.4ms P95 latency and 1.12% EER.',
      'Constructed automated model compilation scripts exporting PyTorch checkpoints directly to TensorRT INT8 engines with calibration caches, cutting VRAM by 75%.',
      'Built streaming audio preprocessors in C++ and Python utilizing GPU-accelerated log-mel filterbanks for 180+ concurrent real-time WebSocket streams.',
      'Integrated Prometheus metrics and Grafana alerting for latency regression detection across daily container builds.'
    ],
    technologies: ['PyTorch', 'ONNX Runtime', 'TensorRT', 'FastAPI', 'WebSockets', 'Docker', 'Redis', 'Prometheus'],
    metricHighlight: '-80% P95 Latency on Speech Inference'
  },
  {
    id: 'exp-research-lead',
    role: 'AI Research Lead & Valedictorian Researcher',
    organization: 'School of Information & Communications Technology - HaUI',
    location: 'Hanoi, Vietnam',
    period: '2022 - 2026',
    type: 'Research Lab',
    summary: 'Led cutting-edge research in heterogeneous deep learning, IoT intrusion detection, and speech representation learning. Won 1st Prize in University Scientific Research.',
    bulletPoints: [
      'Published and presented peer-reviewed research at ICAETA 2025: "A hybrid Two-Stage Heterogeneous-Data IDS Framework for IoT Networks Using LightGBM and EfficientNetB7".',
      'Awarded 1st Prize (Giải Nhất) in University Scientific Research (2025-2026) for high-performance deep learning systems.',
      'Engineered data ingestion pipelines processing 115k packets/second with two-stage heterogeneous feature extraction.',
      'Maintained academic excellence with cumulative GPA 3.76/4.0, graduating as Valedictorian (Thủ khoa Khoa học Máy tính).'
    ],
    technologies: ['PyTorch', 'EfficientNetB7', 'LightGBM', 'Scikit-Learn', 'CUDA', 'Data Engineering'],
    metricHighlight: '1st Prize University AI Research & ICAETA Paper'
  },
  {
    id: 'exp-cyber-ai',
    role: 'AI System Architect (OASM Project)',
    organization: 'Digital Innovation Hub & OASM Team',
    location: 'Hanoi, Vietnam',
    period: '2025 - 2026',
    type: 'Production & Industry',
    summary: 'Architected the AI correlation and threat surface mapping engine, achieving 2nd Prize in the Digital Era Creative Innovation Competition 2026.',
    bulletPoints: [
      'Designed the automated vulnerability correlation engine mapping enterprise perimeter assets against NVD and MITRE ATT&CK vectors.',
      'Implemented asynchronous distributed crawling workers with Celery and Redis, reducing triage latency from 48 hours to under 15 minutes.',
      'Deployed Dockerized FastAPI microservices with graph-based attack surface topology visualizers.'
    ],
    technologies: ['Python', 'FastAPI', 'Celery', 'Redis', 'PostgreSQL', 'Docker', 'Isolation Forests'],
    metricHighlight: '2nd Prize Digital Era Innovation 2026'
  }
];

export const RESEARCH_ARTICLES: ResearchArticle[] = [
  {
    id: 'pub-icaeta-2025',
    title: 'A hybrid Two-Stage Heterogeneous-Data IDS Framework for IoT Networks Using LightGBM and EfficientNetB7',
    venue: '10th International Conference on Advanced Engineering - Theory and Applications (ICAETA 2025)',
    date: 'December 2025',
    readTime: 'Peer-Reviewed Conference Paper',
    authors: 'Nien Nguyen-Manh, Nha Tran-Van, Sang The-Nguyen, Loi Nguyen-Tien, Anh Le-Thi',
    summary: 'Presents a high-throughput two-stage architecture for industrial IoT network protection. Stage 1 filters 94% of benign traffic in <0.8ms using LightGBM on 42 flow features, while Stage 2 processes transformed byte payloads via EfficientNetB7 deep representation.',
    tags: ['IoT Security', 'EfficientNetB7', 'LightGBM', 'Heterogeneous AI', 'ONNX FP16'],
    metrics: '99.4% Detection Accuracy • 115k pkts/sec',
    link: 'https://github.com/vannha2004'
  },
  {
    id: 'art-ecapa-kan',
    title: 'Enhancing Acoustic Speaker Verification with Kolmogorov-Arnold Networks (KAN) Non-Linear Projections',
    venue: 'AI Engineering Deep-Dive Series',
    date: '2025',
    readTime: '9 min read',
    authors: 'Tran Van Nha',
    summary: 'Investigating how replacing traditional linear projection layers in ECAPA-TDNN with learnable B-spline KAN layers improves acoustic embedding separability, lowering Equal Error Rate on noisy multi-accent speech datasets.',
    tags: ['Speech AI', 'ECAPA-TDNN', 'KAN', 'ONNX Runtime', 'Audio Diarization'],
    metrics: '1.12% EER • -80% P95 Latency',
    link: 'https://github.com/vannha2004'
  },
  {
    id: 'art-tensorrt-quant',
    title: 'From PyTorch to TensorRT INT8: Practical Post-Training Quantization with Zero Accuracy Loss',
    venue: 'MLOps & Acceleration Guide',
    date: '2025',
    readTime: '12 min read',
    authors: 'Tran Van Nha',
    summary: 'A practitioner handbook on constructing calibration caches for TensorRT INT8 inference engines, profiling dynamic tensor dimensions, and mitigating precision degradation in critical attention layers.',
    tags: ['Model Quantization', 'TensorRT', 'CUDA', 'INT8', 'Inference Optimization'],
    metrics: '5.16x Throughput Acceleration',
    link: 'https://github.com/vannha2004'
  }
];

export const OPEN_SOURCE_REPOS = [
  {
    name: 'VoiceGuard-Inference',
    description: 'High-speed speaker verification & diarization engine with ECAPA-TDNN + KAN and ONNX Runtime GPU.',
    stars: 142,
    forks: 28,
    tech: 'PyTorch / ONNX / FastAPI',
    url: 'https://github.com/vannha2004'
  },
  {
    name: 'IoT-Sentinel-ICAETA',
    description: 'Two-stage heterogeneous network intrusion detection pipeline using LightGBM and EfficientNetB7.',
    stars: 98,
    forks: 19,
    tech: 'LightGBM / EfficientNet / Docker',
    url: 'https://github.com/vannha2004'
  },
  {
    name: 'OmniRAG-Core',
    description: 'Self-corrective hybrid RAG framework combining BM25, Qdrant BGE-M3, and Cross-Encoder reranking.',
    stars: 215,
    forks: 44,
    tech: 'LangGraph / Qdrant / Redis',
    url: 'https://github.com/vannha2004'
  },
  {
    name: 'TensorRT-Quant-Toolkit',
    description: 'Automated calibration scripts and benchmark runner for PyTorch to TensorRT FP16/INT8 conversion.',
    stars: 87,
    forks: 16,
    tech: 'TensorRT / CUDA / Python',
    url: 'https://github.com/vannha2004'
  }
];
