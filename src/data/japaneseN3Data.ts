// Japanese (JLPT N3 Level) Portfolio Data for Trần Văn Nhã (チャン・ヴァン・ニャー)
// 自然で分かりやすい日本語（N3レベル・敬体です・ます調）

export const JA_PERSONAL_INFO = {
  name: 'チャン・ヴァン・ニャー',
  nameRomaji: 'Tran Van Nha',
  furigana: 'チャン・ヴァン・ニャー',
  handle: '@vannha2004',
  title: 'AI / 機械学習エンジニア',
  specialty: '音声AI・ディープラーニング・推論高速化（ONNX / TensorRT）',
  valedictorianTitle: 'ハノイ工業大学（HaUI）首席卒業（GPA 3.76 / 4.0）',
  location: 'ベトナム・ハノイ（日本勤務・フルリモート対応可能）',
  statusText: 'AIエンジニア・MLOpsポジション積極応募中',
  email: 'nhatranvan204@gmail.com',
  github: 'https://github.com/vannha2004',
  linkedin: 'https://www.linkedin.com/in/vannha2004',
  huggingface: 'https://huggingface.co/vannha2004',
  shortBio: 'ハノイ工業大学のコンピュータサイエンス学科を首席（GPA 3.76/4.0）で卒業しました。深層学習を用いた音声認識・話者照合や、ONNX・TensorRTによる推論の高速化、低遅延な本番APIパイプラインの構築が得意です。研究成果を実際のビジネス環境で高速かつ安定して動かすエンジニアリングに強みがあります。',
  japaneseSkill: '日本語能力試験 (JLPT N3) • 日本のIT企業での開発業務に対応可能',
  avatarUrl: '/main_avatar.jpeg',
  resumeUrl: '/nhatranvan_ai_engineer.pdf'
};

export const JA_METRICS = [
  {
    label: '推論遅延 (P95)',
    value: '<24ms',
    detail: 'ECAPA-TDNN + ONNXによるリアルタイム音声照合'
  },
  {
    label: '等価エラー率 (EER)',
    value: '1.12%',
    detail: 'VoxCeleb1データセットで世界水準の精度を達成'
  },
  {
    label: '推論処理の高速化',
    value: '4.2倍 向上',
    detail: 'TensorRT INT8量子化と投機的デコーディング'
  },
  {
    label: 'IoT脅威検知の精度',
    value: '99.4%',
    detail: 'ICAETA 2025国際学会にて査読付き論文を発表'
  }
];

export const JA_NAV_ITEMS = [
  { id: 'overview', label: '概要', en: 'Overview' },
  { id: 'skills', label: 'スキル', en: 'Skills' },
  { id: 'projects', label: '開発実績', en: 'Projects' },
  { id: 'benchmarks', label: 'ベンチマーク', en: 'Benchmarks' },
  { id: 'interactive-tools', label: 'AI体験デモ', en: 'Live Tools' },
  { id: 'experience', label: '職歴・研究', en: 'Experience' },
  { id: 'credentials', label: '表彰・資格', en: 'Honors' },
  { id: 'opensource', label: 'オープンソース', en: 'Open Source' },
  { id: 'contact', label: 'お問い合わせ', en: 'Contact' }
];

export const JA_PROJECTS = [
  {
    id: 'voiceguard-speech-verification',
    title: 'VoiceGuard: リアルタイム音声照合・話者認識エンジン',
    subtitle: 'ECAPA-TDNNとKAN非線形射影、ONNX Runtimeによる超低遅延バイオメトリクス照合',
    category: 'speech_audio',
    categoryLabel: '音声・音響AI',
    description: '通話やストリーミング音声から、ミリ秒単位で話者を特定・認証する企業向け音声認識エンジンです。ECAPA-TDNNモデルにKAN（コルモゴロフ・アーノルド・ネットワーク）を組み合わせ、TensorRT FP16で高速化しました。',
    star: {
      situation: '従来の音声認識システムは推論遅延が長く（120ms以上）、同時アクセス時のGPUメモリ消費が大きいという課題がありました。',
      task: 'P95遅延を25ms以下に抑え、GPUメモリを300MB未満に削減しながら、エラー率（EER）1.5%以下を達成すること。',
      action: [
        'ECAPA-TDNN構造にKANのB-スプライン活性化層を導入し、話者の特徴量をより精密に分離しました。',
        '200msの音声ウィンドウから80チャンネルのログメルスペクトログラムを高速抽出するGPUパイプラインを開発しました。',
        'ONNX RuntimeおよびTensorRT FP16形式へ変換・静的メモリ最適化を実施しました。',
        'FastAPIとWebSocket、Redisを用いた話者ベクトルのキャッシュ照合システムを構築しました。'
      ],
      result: [
        '推論遅延を118msから23.4msへ大幅短縮（約80%の高速化）。',
        'VoxCeleb1評価データにおいて、等価エラー率（EER）1.12%の最高水準を達成。',
        '1台のNVIDIA T4 GPUで180ストリーム以上の同時リアルタイム処理を実現。',
        'GPUメモリ使用量を1.2GBから280MBへ75%削減。'
      ]
    },
    techStack: ['PyTorch', 'ECAPA-TDNN', 'KAN', 'ONNX Runtime', 'TensorRT', 'FastAPI', 'WebSockets', 'Redis', 'Docker'],
    metrics: [
      { label: 'P95遅延', value: '23.4ms', change: '-80% 高速化' },
      { label: '等価エラー率', value: '1.12%', change: '最高水準' },
      { label: '同時処理数', value: '180+', change: 'T4 GPU 1枚' },
      { label: 'メモリ消費', value: '280MB', change: '-75% 削減' }
    ],
    demoType: 'speech_sim',
    featured: true
  },
  {
    id: 'iot-sentinel-heterogeneous-ids',
    title: 'IoT-Sentinel: 2段階ハイブリッドIoT脅威検知システム',
    subtitle: 'ICAETA 2025国際学会発表：LightGBMとEfficientNetB7を統合したパケット解析',
    category: 'cv_iot',
    categoryLabel: 'コンピュータビジョン・IoT',
    description: '毎秒10万パケットを超えるネットワーク通信から、高速かつ正確にサイバー攻撃を検知するハイブリッドシステムです。正常な通信をLightGBMで0.8ms以内に通過させ、疑わしいパケットのみをEfficientNetB7画像認識モデルで深層解析します。',
    star: {
      situation: 'IoTゲートウェイでは大量の通信が発生するため、深層学習だけでは処理が追いつかず、軽量ルールだけでは未知の攻撃を見逃す問題がありました。',
      task: 'エッジサーバー上で毎秒10万パケット以上を処理しつつ、99%以上の検知精度を維持するシステムを作ること。',
      action: [
        '第10回 ICAETA 2025 国際学会にて筆頭執筆陣として論文を発表・採択されました。',
        '42種類の特徴量を用いて正常通信の94%を0.8ms未満で素早く判定するLightGBMフィルターを作成。',
        '怪しいパケットのバイトデータを2次元マルコフ遷移画像へ変換し、EfficientNetB7でパターン解析。',
        'ONNX FP16への変換とマルチプロセス非同期キューにより、エッジ環境へ最適化。'
      ],
      result: [
        'ベンチマークデータセットで99.4%の高い検知精度を達成。',
        '通常の8コアエッジサーバーで毎秒115,000パケットの処理に成功。',
        '未知の変種攻撃に対しても8ms未満で検知を完了。',
        '国際学会のプロシーディングス（査読付き）として正式出版。'
      ]
    },
    techStack: ['Python', 'LightGBM', 'EfficientNetB7', 'ONNX FP16', 'eBPF', 'Docker', 'FastAPI'],
    metrics: [
      { label: '検知精度', value: '99.4%', change: '高精度' },
      { label: '処理スループット', value: '115k pkt/s', change: 'リアルタイム' },
      { label: '1次判定時間', value: '<0.8ms', change: '94%トラフィック' },
      { label: '学会論文', value: 'ICAETA 2025', change: '査読付き' }
    ],
    demoType: 'benchmark',
    featured: true
  },
  {
    id: 'omnirag-enterprise-knowledge-engine',
    title: 'OmniRAG: 高精度ハイブリッド社内ナレッジ検索エンジン',
    subtitle: 'BM25とQdrant BGE-M3ベクトル検索、クロスエンコーダー再ランクによるエンタープライズRAG',
    category: 'genai_rag',
    categoryLabel: 'RAG・LLM',
    description: '社内文書やマニュアルを高速・高精度に検索し、LLMで回答を生成するRAGシステムです。キーワード検索（BM25）と意味検索（Dense Vector）を融合（RRF）させ、ハルシネーション（嘘の回答）を防ぎます。',
    star: {
      situation: '従来のベクトル検索だけでは、型番や固有名詞、社内コードの検索漏れが多く、LLMの誤答が発生していました。',
      task: '検索適合率（Precision@5）を85%以上に向上させ、質問応答の回答精度を大幅に改善すること。',
      action: [
        'BM25による単語一致と、Qdrant上のBGE-M3多言語埋め込みベクトルを相互ランク融合（RRF）で結合。',
        '取得した上位20件をクロスエンコーダー（bge-reranker-large）で再スコアリングする2段階検索を実装。',
        'Redisによるセマンティックキャッシュを導入し、よくある質問はLLMを呼ばずに数ミリ秒で即答。'
      ],
      result: [
        '上位5件の検索適合率が18.2%向上（Top-5 Precision 89.4%達成）。',
        'キャッシュ効果により、外部LLMのAPIコストを月間62%削減。',
        '回答までの待ち時間を平均3.8秒から1.1秒へ短縮。'
      ]
    },
    techStack: ['LangChain', 'Qdrant', 'BM25', 'BGE-M3', 'Cross-Encoder', 'Redis', 'FastAPI', 'Docker'],
    metrics: [
      { label: '検索精度 (P@5)', value: '89.4%', change: '+18.2% 向上' },
      { label: 'APIコスト', value: '-62%', change: '月間コスト削減' },
      { label: '平均応答時間', value: '1.1s', change: '即座に応答' }
    ],
    demoType: 'rag',
    featured: true
  },
  {
    id: 'oasm-cyber-intelligence',
    title: 'OASM: 自律型アタックサーフェス監視・脆弱性診断エンジン',
    subtitle: '2026年 デジタル時代イノベーションコンテスト 全国第2位（銀賞）受賞システム',
    category: 'cv_iot',
    categoryLabel: 'セキュリティ・AI',
    description: '企業の外部公開資産（サーバー・API・サブドメイン）を自動スキャンし、AIグラフ分析で侵入経路や脆弱性を予測・可視化するセキュリティシステムです。',
    star: {
      situation: '企業のクラウド資産が増加し、手作業でのセキュリティ診断では設定ミスや脆弱性の発見が遅れていました。',
      task: '数千個のドメインやIPを自動収集し、重大な脆弱性を優先度順に自動分類するAIエージェントを作ること。',
      action: [
        '非同期クローラーとDNSスキャナーで組織の全アセットをマッピングするパイプラインを開発。',
        'グラフニューラルネットワーク（GNN）を用いて攻撃経路の伝播リスクを自動計算。',
        '2026年の全国イノベーションコンテストにて実演発表。'
      ],
      result: [
        '全国コンテスト「デジタル時代のイノベーション 2026」にて第2位（準優勝）を受賞。',
        '脆弱性スキャンの所要時間を従来の5日から2時間へ大幅に短縮。'
      ]
    },
    techStack: ['Python', 'FastAPI', 'Neo4j', 'PostgreSQL', 'Docker', 'Celery', 'Vue/React'],
    metrics: [
      { label: '全国大会', value: '第2位 (銀賞)', change: '全国コンテスト' },
      { label: 'スキャン時間', value: '2時間', change: '従来5日→2時間' },
      { label: '検知カバー率', value: '98.5%', change: '全資産監視' }
    ],
    demoType: 'agent',
    featured: true
  },
  {
    id: 'hyperserve-speculative-decoding',
    title: 'HyperServe: 投機的デコーディングによる超高速LLM推論基盤',
    subtitle: 'vLLM・TensorRT-LLMとドラフトモデルによる生成トークン速度2.8倍化',
    category: 'mlops_inference',
    categoryLabel: '推論高速化・MLOps',
    description: '大規模言語モデル（LLaMA-3 8B）のテキスト生成速度を、軽量ドラフトモデル（LLaMA-3 1B）による投機的デコーディングで大幅に加速させた本番推論基盤です。',
    star: {
      situation: 'LLMの逐次生成はメモリ帯域がボトルネックとなり、1秒あたりの出力文字数が制限されていました。',
      task: 'モデルの出力品質を100%保ったまま、生成速度（トークン/秒）を2倍以上に向上させること。',
      action: [
        '小さなドラフトモデルに先行予測させ、親モデルで一括検証する投機的サンプリングを導入。',
        'PagedAttentionとKVキャッシュの動的割り当てでVRAMの断片化をゼロ化。',
        'AWQ INT4/FP8量子化により推論時のメモリ帯域消費を最小化。'
      ],
      result: [
        'テキスト生成速度が14.8ms/tokから5.2ms/tokへ加速（約2.85倍のスループット向上）。',
        '単一のRTX 4090で秒間190トークンの連続出力を安定して達成。'
      ]
    },
    techStack: ['vLLM', 'TensorRT-LLM', 'PyTorch', 'CUDA', 'Triton', 'Docker', 'Prometheus'],
    metrics: [
      { label: '生成速度向上', value: '2.85倍', change: 'トークン生成' },
      { label: 'トークン遅延', value: '5.2ms/tok', change: '超低遅延' },
      { label: '最大スループット', value: '190 tok/s', change: 'RTX 4090' }
    ],
    demoType: 'vram_calc',
    featured: true
  }
];

export const JA_SKILL_CATEGORIES = [
  {
    title: '音声認識・音響ディープラーニング',
    en: 'Speech & Audio Deep Learning',
    description: '話者認識・照合、音響特徴抽出、ノイズ除去モデルの開発と学習',
    skills: [
      { name: 'ECAPA-TDNN', level: 95, experience: '話者特徴抽出・SOTA照合モデル' },
      { name: 'KAN (Kolmogorov-Arnold)', level: 88, experience: '非線形射影層の実装と研究' },
      { name: 'PyTorch / Torchaudio', level: 94, experience: 'カスタム損失関数（AAM-Softmax等）' },
      { name: 'スペクトログラム前処理', level: 92, experience: '80-bin Log-Mel, MFCCのGPU処理' },
      { name: 'SpeechBrain / Whisper', level: 86, experience: '音声書き起こし・話者分離' }
    ]
  },
  {
    title: 'モデル最適化・推論高速化',
    en: 'Model Optimization & Low-Latency Serving',
    description: 'モデルの軽量化（量子化・枝刈り）とハードウェアに合わせた高速実行',
    skills: [
      { name: 'ONNX Runtime', level: 95, experience: 'FP16・INT8量子化、静的グラフ' },
      { name: 'TensorRT / TensorRT-LLM', level: 90, experience: 'CUDAエンジン構築、カーネル最適化' },
      { name: 'vLLM / PagedAttention', level: 92, experience: 'KVキャッシュ最適化、投機的デコード' },
      { name: 'Triton Inference Server', level: 85, experience: 'モデルアンサンブル、動的バッチ処理' },
      { name: 'AWQ / GPTQ 量子化', level: 88, experience: '4bit/8bit重み量子化による省メモリ化' }
    ]
  },
  {
    title: 'MLOps・パイプライン自動化',
    en: 'MLOps, Pipelines & Monitoring',
    description: '再現性のある実験管理から継続的なデプロイ・監視パイプライン',
    skills: [
      { name: 'Docker / コンテナ化', level: 92, experience: 'マルチステージビルド・CUDA軽量イメージ' },
      { name: 'Kubernetes / KubeFlow', level: 82, experience: '推論サービスのオートスケーリング' },
      { name: 'MLflow / Weights & Biases', level: 88, experience: '実験追跡・モデルレジストリ管理' },
      { name: 'CI/CD (GitHub Actions)', level: 90, experience: '自動テスト・モデルビルドパイプライン' },
      { name: 'Prometheus / Grafana', level: 85, experience: '推論レイテンシ・GPU使用率の可視化' }
    ]
  },
  {
    title: 'バックエンド・データ基盤',
    en: 'Backend & High-Throughput Infrastructure',
    description: '数万リクエストを捌く高速APIサーバーとベクトル検索基盤',
    skills: [
      { name: 'FastAPI / Asynchronous Python', level: 95, experience: '非同期I/O・WebSocket双方向通信' },
      { name: 'Qdrant / Milvus (ベクトルDB)', level: 90, experience: '数百万ベクトルの高速類似度検索' },
      { name: 'Redis (インメモリDB)', level: 92, experience: 'セマンティックキャッシュ・PubSub' },
      { name: 'PostgreSQL / SQL', level: 88, experience: 'データモデリング・インデックス最適化' },
      { name: 'C++ / CUDA C (基礎)', level: 78, experience: 'カスタム推論カーネルの解析' }
    ]
  }
];

export const JA_EXPERIENCE = [
  {
    id: 'lead-ai-engineer-iot',
    role: 'リードAIエンジニア & 研究員',
    organization: 'スマートシステム & サイバーセキュリティ研究室（HaUI）',
    location: 'ベトナム・ハノイ',
    period: '2023年 - 2026年',
    type: '研究室・産学連携',
    summary: '音声照合システム「VoiceGuard」およびIoT脅威検知フレームワークの設計・開発を主導。',
    bulletPoints: [
      'ECAPA-TDNNとKAN層を組み合わせた音声認識モデルをゼロから設計し、1.12%のEERを記録。',
      '第10回 ICAETA 2025 国際学会にて筆頭執筆陣として論文発表・採択（IEEE/Springer系）。',
      '大学の学術研究コンテストにて全学第1位（最優秀賞）を受賞。',
      'ONNX RuntimeおよびTensorRTを用いて推論遅延を80%短縮し、エッジ機器への組み込みを実現。'
    ],
    technologies: ['PyTorch', 'ONNX Runtime', 'TensorRT', 'FastAPI', 'LightGBM', 'EfficientNetB7']
  },
  {
    id: 'valedictorian-academic',
    role: 'コンピュータサイエンス学部 首席学生',
    organization: 'ハノイ工業大学（Hanoi University of Industry）',
    location: 'ベトナム・ハノイ',
    period: '2022年 - 2026年',
    type: '学歴・代表実績',
    summary: 'コンピュータサイエンス学科を総合成績第1位（首席・GPA 3.76/4.0）で卒業。',
    bulletPoints: [
      '学部全学生の中でトップの成績を収め、優秀学生表彰（Degree with Honors / Valedictorian）を獲得。',
      '国際プログラミング検定「TOFAS」（日本・SPRIX主催）にて銀メダルを獲得。',
      '全国イノベーションコンテスト「Digital Era 2026」にて準優勝（第2位）を受賞。',
      '学術奨学金を全セメスターで満額獲得し、後輩へのプログラミング指導・ゼミ運営を担当。'
    ],
    technologies: ['アルゴリズム・データ構造', '深層学習', 'コンピュータアーキテクチャ', '分散システム']
  }
];

export const JA_HONORS = [
  {
    id: 'valedictorian-haui',
    title: 'ハノイ工業大学 コンピュータサイエンス学科 首席卒業',
    issuer: 'ハノイ工業大学（Hanoi University of Industry）',
    year: '2026年',
    badgeText: '学年第1位 (GPA 3.76 / 4.0)',
    description: '4年間の全課程において最高成績を収め、首席（Valedictorian）として卒業。優秀卒業証書を授与されました。',
    iconType: 'trophy',
    category: 'valedictorian'
  },
  {
    id: 'nckh-first-prize',
    title: '大学AI学術研究コンテスト 全学第1位（最優秀賞）',
    issuer: 'ハノイ工業大学 科学技術部',
    year: '2025年 - 2026年',
    badgeText: '第1位（最優秀研究賞）',
    description: '深層学習を用いたバイオメトリクス音声照合・ハードウェア最適化の研究で最高評価を獲得しました。',
    iconType: 'award',
    category: 'award'
  },
  {
    id: 'tofas-silver',
    title: 'TOFAS 国際プログラミングコンテスト 銀メダル',
    issuer: 'SPRIX（日本・東京）',
    year: '2024年',
    badgeText: 'Silver Medal（世界水準）',
    description: '日本の教育大手SPRIXが主催する国際基礎学力・プログラミング検定にて、高得点を記録し銀メダルを受賞。',
    iconType: 'medal',
    category: 'award'
  },
  {
    id: 'icaeta-publication',
    title: 'ICAETA 2025 国際学会 査読付き学術論文 採択・発表',
    issuer: '第10回 ICAETA 2025（トンドゥックタン大学）',
    year: '2025年',
    badgeText: '国際会議論文 採択',
    description: 'IoT侵入検知システム「IoT-Sentinel」に関する2段階ハイブリッド深層学習論文を発表しました。',
    iconType: 'book',
    category: 'publication'
  },
  {
    id: 'oasm-silver-award',
    title: 'デジタル時代イノベーションコンテスト 全国第2位（準優勝）',
    issuer: '全国学生起業・イノベーション連盟',
    year: '2026年',
    badgeText: '全国第2位（銀賞）',
    description: 'AI自動脆弱性スキャン・アタックサーフェス監視システム「OASM」の事業性と技術力が高く評価されました。',
    iconType: 'award',
    category: 'award'
  },
  {
    id: 'samsung-ai',
    title: 'Samsung Innovation Campus AI専攻 プログラム修了',
    issuer: 'サムスン電子ベトナム (Samsung Electronics)',
    year: '2024年',
    badgeText: '公式認定',
    description: '機械学習・ディープラーニングアルゴリズムと産業応用に関する集中トレーニングを修了。',
    iconType: 'star',
    category: 'certification'
  },
  {
    id: 'deeplearning-mlops',
    title: 'Machine Learning in Production (Andrew Ng 監修)',
    issuer: 'DeepLearning.AI (Coursera)',
    year: '2024年',
    badgeText: 'MLOps認定',
    description: '本番環境におけるデータパイプライン構築、モデル監視、ドリフト検知、デプロイ技術を修得。',
    iconType: 'star',
    category: 'certification'
  },
  {
    id: 'vanderbilt-agentic-ai',
    title: 'Agentic AI with Python 専門認定',
    issuer: 'ヴァンダービルト大学 (Vanderbilt University)',
    year: '2025年',
    badgeText: 'AIエージェント認定',
    description: 'LangChain, LangGraphを用いた自律型AIエージェントおよびマルチエージェント協調システムの構築。',
    iconType: 'star',
    category: 'certification'
  },
  {
    id: 'run-marathon',
    title: '433km コミュニティランニング達成 & 学生代表',
    issuer: 'ハノイ学生スポーツ連合 & HaUI K17',
    year: '2024年 - 2025年',
    badgeText: '433km 完走',
    description: '継続的な健康維持と強い意志力を育むコミュニティランニングで累計433kmを走破。クラス代表（学級委員長）も歴任。',
    iconType: 'heart',
    category: 'leadership'
  }
];
