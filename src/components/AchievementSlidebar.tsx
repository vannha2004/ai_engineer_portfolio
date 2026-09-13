import React, { useState, useEffect, useRef } from 'react';
import {
  Award,
  Trophy,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Play,
  Pause,
  Upload,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Layers,
  ZoomIn,
  Eye,
  X,
  FileCheck
} from 'lucide-react';

export interface SlideItem {
  id: string;
  filename: string;
  category: 'valedictorian_official' | 'valedictorian_awards' | 'academic_excellence' | 'research_international' | 'certifications' | 'community_social';
  titleJa: string;
  titleVi: string;
  titleEn: string;
  date: string;
  badgeJa: string;
  badgeVi: string;
  highlightsJa: string[];
  highlightsVi: string[];
  organization: string;
}

export const SLIDE_DATA: SlideItem[] = [
  {
    id: 'new_sl5',
    filename: 'new_sl5.webp',
    category: 'valedictorian_official',
    titleJa: '大学首席公式証書: 首席表彰状・学士学位記（優秀）・公式成績表 GPA 3.76',
    titleVi: 'Bộ Hồ sơ Thủ khoa: Giấy khen Tốt nghiệp Xuất sắc, Bằng Cử nhân & Bảng điểm GPA 3.76',
    titleEn: 'Official Valedictorian Credentials: Bachelor Degree, Transcript (GPA 3.76) & Top Graduate Award',
    date: '2026年6月',
    badgeJa: '大学全学首席',
    badgeVi: 'Thủ khoa HaUI',
    highlightsJa: [
      'ハノイ工業大学学長表彰: 2022-2026年度 模範学生・最優秀卒業・コンピュータサイエンス学科首席',
      '学士学位記（The Degree of Bachelor in Computer Science）: 優秀格付（Excellent）',
      '公式学業成績証明書: 累積GPA 3.76 / 4.0（全45科目、多数のA/A+評価）',
      '教育・訓練省規則第1479/QĐ-ĐHCN号による公式授与'
    ],
    highlightsVi: [
      'Giấy khen Giám đốc ĐH Công nghiệp Hà Nội: Sinh viên tiêu biểu khóa 2022-2026, Tốt nghiệp Xuất sắc, Thủ khoa Khoa học Máy tính',
      'Bằng tốt nghiệp Cử nhân (The Degree of Bachelor): Xếp loại Xuất sắc (Excellent)',
      'Bảng kết quả học tập chính thức: Điểm trung bình tích lũy GPA 3.76/4.0',
      'Quyết định số 1479/QĐ-ĐHCN và số hiệu văn bằng DB01769'
    ],
    organization: 'ハノイ工業大学（Hanoi University of Industry）'
  },
  {
    id: 'new_sl1',
    filename: 'new_sl1.webp',
    category: 'research_international',
    titleJa: '学術研究論文（国際会議ICAETA 2025発表）& SPRIX日本代表表彰セレモニー',
    titleVi: 'Công trình NCKH Quốc tế ICAETA 2025 & Khoảnh khắc trao giải TOFAS Nhật Bản',
    titleEn: 'ICAETA 2025 International Paper & TOFAS Award Ceremony with SPRIX CEO',
    date: '2025 - 2026',
    badgeJa: '国際学会発表',
    badgeVi: 'Hội nghị Quốc tế',
    highlightsJa: [
      '国際学術会議 ICAETA 2025 採択・登壇発表証書（トン・ドゥック・タン大学主催）',
      'LightGBMとEfficientNetB7を組み合わせたIoT向け高精度侵入検知AIフレームワーク',
      'SPRIX代表取締役との表彰記念写真および物理メダル授与',
      '学長 Kiều Xuân Thực 氏署名による全学研究第1位公式表彰状'
    ],
    highlightsVi: [
      'Certificate of Attendance: Báo cáo công trình tại Hội thảo Quốc tế ICAETA 2025',
      'Đề tài: "A hybrid Two-Stage Heterogeneous-Data IDS Framework for IoT Networks Using LightGBM and EfficientNetB7"',
      'Chụp ảnh lưu niệm và nhận Huy chương Bạc cùng đại diện Tập đoàn Giáo dục SPRIX Nhật Bản',
      'Bằng khen NCKH Giải Nhất cấp Trường do Hiệu trưởng Kiều Xuân Thực ký duyệt'
    ],
    organization: 'ICAETA 2025, SPRIX, HaUI'
  },
  {
    id: 'new_sl3',
    filename: 'new_sl3.webp',
    category: 'certifications',
    titleJa: 'Coursera認定証: Vanderbilt大学 AIエージェント & DeepLearning.AI MLOps (Andrew Ng)',
    titleVi: 'Bộ đôi Chứng chỉ Coursera: AI Agents (Vanderbilt) & MLOps in Production (Andrew Ng)',
    titleEn: 'Coursera Certificates: AI Agents (Vanderbilt) & ML in Production (DeepLearning.AI)',
    date: '2026年5月',
    badgeJa: 'Coursera専門認定',
    badgeVi: 'Coursera AI Certified',
    highlightsJa: [
      'Vanderbilt University: AI Agents and Agentic AI with Python & Generative AI（Jules White 教授指導）',
      'DeepLearning.AI: Machine Learning in Production（Andrew Ng 氏設立プログラム、MLOps本番運用パイプライン）',
      '認証ID: Coursera IS8RAF0L9H65 & XSKEKZ3BC75D 公式検証可能',
      '生成AIエージェント、関数呼び出し、モデルデプロイ、データドリブン監視の習得'
    ],
    highlightsVi: [
      'Đại học Vanderbilt: Khóa học AI Agents and Agentic AI with Python & Generative AI (Giáo sư Jules White)',
      'DeepLearning.AI: Khóa học Machine Learning in Production (Thầy Andrew Ng giảng dạy)',
      'Mã xác thực Coursera chính thức: IS8RAF0L9H65 và XSKEKZ3BC75D',
      'Nắm vững kiến trúc Multi-Agent, Tool Calling, Quản lý vòng đời MLOps và CI/CD Model Serving'
    ],
    organization: 'Coursera, Vanderbilt University, DeepLearning.AI'
  },
  {
    id: 'new_sl2',
    filename: 'new_sl2.webp',
    category: 'certifications',
    titleJa: 'Kaggle認定プロフェッショナル修了証（Python, 機械学習, 説明可能AI）',
    titleVi: 'Bộ 4 Chứng chỉ Chuyên sâu từ Kaggle (Python, Machine Learning, Explainability)',
    titleEn: 'Kaggle Certified Specialist: Python, ML, Feature Engineering & Explainability',
    date: '2025年9月 - 11月',
    badgeJa: 'Kaggle認定証 4冠',
    badgeVi: 'Kaggle 4 chứng chỉ',
    highlightsJa: [
      'Kaggle Certificate: Python（データ処理、アルゴリズム、NumPy/Pandas）',
      'Kaggle Certificate: Intro to Machine Learning（決定木、ランダムフォレスト、モデル検証）',
      'Kaggle Certificate: Intermediate Machine Learning（欠損値処理、カテゴリカル変数、XGBoostパイプライン）',
      'Kaggle Certificate: Machine Learning Explainability（SHAP値、Permutation Importance、Partial Dependence Plots）'
    ],
    highlightsVi: [
      'Chứng chỉ Kaggle Python: Làm chủ xử lý dữ liệu với NumPy, Pandas, cấu trúc dữ liệu nâng cao',
      'Chứng chỉ Kaggle Intro to Machine Learning: Cây quyết định, Random Forest, thẩm định mô hình',
      'Chứng chỉ Kaggle Intermediate Machine Learning: Pipeline, Cross-Validation, XGBoost',
      'Chứng chỉ Kaggle Machine Learning Explainability: SHAP values, Permutation Importance'
    ],
    organization: 'Kaggle (Google)'
  },
  {
    id: 'slide_bar_6',
    filename: 'slide_bar_6.webp',
    category: 'valedictorian_awards',
    titleJa: 'デジタル革新・AIスタートアップ・サムスンAI認定証 クローズアップ',
    titleVi: 'Chứng nhận Đổi mới Kỷ nguyên số, Khởi nghiệp AI & Samsung Innovation',
    titleEn: 'Digital Era Innovation, AI-START & Samsung AI Certificate Set',
    date: '2024 - 2026',
    badgeJa: 'サムスンAI・銀賞',
    badgeVi: 'Samsung AI & Giải Nhì',
    highlightsJa: [
      'Digital Era Creative Innovation 2026: Giải Nhì (Dự án OASM)',
      'Samsung Innovation Campus: Trí tuệ Nhân tạo AI Course Certificate',
      'IT Festival AI Horizon: Giải Nhì Ý tưởng Khởi nghiệp AI-START',
      'TOFAS International Programming: Silver Medal'
    ],
    highlightsVi: [
      'Giải Nhì Cuộc thi Đổi mới Sáng tạo Kỷ nguyên số 2026 (Dự án OASM)',
      'Chứng chỉ hoàn thành khóa học Trí tuệ Nhân tạo - Samsung Innovation Campus',
      'Giải Nhì Cuộc thi Ý tưởng Khởi nghiệp AI-START (IT Festival 2025)',
      'Huy chương Bạc Lập trình Quốc tế TOFAS'
    ],
    organization: 'HaUI, Samsung, SPRIX'
  },
  {
    id: 'slide_bar_7',
    filename: 'slide_bar_7.webp',
    category: 'valedictorian_awards',
    titleJa: 'AIデータ活用最優秀賞 & 優秀学生二重認定証 クローズアップ',
    titleVi: 'Bộ chứng nhận Giải Nhất Khai thác dữ liệu AI, Hùng biện & Sinh viên 5 tốt',
    titleEn: 'AI Data Mining 1st Prize, Speech Contest & Student of 5 Merits',
    date: '2024 - 2025',
    badgeJa: 'データ処理第1位',
    badgeVi: 'Giải Nhất Dữ liệu AI',
    highlightsJa: [
      'AI-ASISTANT データ処理コンテスト: 最優秀賞（Giải Nhất）',
      'I-POF 2025 プレゼンコンテスト: 最優秀賞（Giải Nhất）',
      '全国学生連合「Sinh viên 5 tốt」2年連続認定証',
      'DevPro Java Web Fullstack 認定証'
    ],
    highlightsVi: [
      'Giải Nhất Cuộc thi Xử lý & Khai thác Dữ liệu AI-ASISTANT',
      'Giải Nhất Cuộc thi Hùng biện I-POF 2025',
      'Chứng nhận Sinh viên 5 tốt cấp trường 2023-2024 và 2024-2025',
      'Chứng chỉ Lập trình Java Web Fullstack DevPro'
    ],
    organization: 'Trường CNTT&TT HaUI, DevPro'
  },
  {
    id: 'slide_bar_8',
    filename: 'slide_bar_8.webp',
    category: 'academic_excellence',
    titleJa: '学内最高成績表彰・数学オリンピック・地域奨学表彰 クローズアップ',
    titleVi: 'Bộ Giấy khen Sinh viên Xuất sắc, Olympic Toán học & Khuyến học Quê hương',
    titleEn: 'Top Academic Honor, Math Olympiad & Cultural Village Certificate',
    date: '2023 - 2025',
    badgeJa: '学業優秀賞',
    badgeVi: 'Thành tích Xuất sắc',
    highlightsJa: [
      'Sinh viên xuất sắc năm học 2024-2025 表彰状',
      'Olympic Toán học HaUI 2023: Giải Nhì 表彰状',
      'Ban Khuyến học Làng văn hóa Thanh Phần 表彰状',
      'Hội Sinh viên HaUI 表彰状'
    ],
    highlightsVi: [
      'Giấy khen Sinh viên Xuất sắc năm học 2024-2025',
      'Giấy khen Giải Nhì Olympic Toán học cấp trường 2023',
      'Giấy khen Ban Khuyến học Làng văn hóa Thanh Phần',
      'Giấy khen Ban chấp hành Hội Sinh viên trường'
    ],
    organization: 'ĐH Công nghiệp Hà Nội'
  },
  {
    id: 'new_sl4',
    filename: 'new_sl4.webp',
    category: 'community_social',
    titleJa: '地域教育支援ボランティア & 433km ライチャウ省児童支援マラソン',
    titleVi: 'Hành trình Thiện nguyện Lớp học Cầu Vồng & 433km Tiếp sức Học sinh Lai Châu',
    titleEn: 'Community Engagement: The Rainbow Class & 433km Charity Run for Children',
    date: '2024 - 2025',
    badgeJa: '社会貢献活動',
    badgeVi: 'Cống hiến vì Cộng đồng',
    highlightsJa: [
      '恵まれない児童のための無料教育プログラム「The Rainbow Class」リーダーシップ',
      'ライチャウ省山岳地帯の生徒へ教科書と自転車を届ける433kmランニングプロジェクト',
      '社会貢献・チームワーク・リーダーシップ・健康管理の実践証明',
      '青年ボランティア隊員集合写真（ハノイ工業大学）'
    ],
    highlightsVi: [
      'Bằng khen quản lý lớp học tình nguyện dạy học cho trẻ em có hoàn cảnh khó khăn',
      'Hoàn thành 433 km đóng góp vào chương trình trao 7.950 cuốn sách và 9 xe đạp tới học sinh Lai Châu',
      'Minh chứng rõ nét cho tinh thần trách nhiệm xã hội, khả năng lãnh đạo đội ngũ và sức khỏe dẻo dai',
      'Hình ảnh thanh niên tình nguyện áo xanh trường ĐH Công nghiệp Hà Nội'
    ],
    organization: 'The Rainbow Class, Quỹ FOBIC'
  }
];

interface AchievementSlidebarProps {
  lang?: 'ja' | 'en' | 'vi';
}

export const AchievementSlidebar: React.FC<AchievementSlidebarProps> = ({ lang = 'ja' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [customImages, setCustomImages] = useState<{ [key: string]: string }>({});
  const fileInputRef = useRef<HTMLInputElement>(null);
  const autoplayTimerRef = useRef<any>(null);

  // Filter slides
  const filteredSlides = SLIDE_DATA.filter((slide) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'valedictorian') {
      return slide.category === 'valedictorian_official' || slide.category === 'valedictorian_awards';
    }
    if (activeCategory === 'research') {
      return slide.category === 'research_international' || slide.category === 'academic_excellence';
    }
    if (activeCategory === 'certifications') {
      return slide.category === 'certifications';
    }
    if (activeCategory === 'community') {
      return slide.category === 'community_social';
    }
    return true;
  });

  // Current slide
  const currentSlide = filteredSlides[currentIndex] || filteredSlides[0] || SLIDE_DATA[0];

  // Autoplay handler
  useEffect(() => {
    if (!isPlaying) {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
      return;
    }

    autoplayTimerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredSlides.length);
    }, 5500);

    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    };
  }, [isPlaying, filteredSlides.length]);

  // Reset index when category changes
  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentIndex(0);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredSlides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredSlides.length) % filteredSlides.length);
  };

  // Allow user to select local files to preview in-memory if needed
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const newMap: { [key: string]: string } = { ...customImages };
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const url = URL.createObjectURL(file);
      // Match by exact filename or index
      newMap[file.name] = url;
      // Also match without extension
      const baseName = file.name.replace(/\.[^/.]+$/, '');
      newMap[baseName] = url;
    }
    setCustomImages(newMap);
  };

  const getSlideImageUrl = (slide: SlideItem) => {
    // 1. In-memory user-uploaded object URL
    if (customImages[slide.filename]) return customImages[slide.filename];
    const baseName = slide.filename.replace(/\.[^/.]+$/, '');
    if (customImages[baseName]) return customImages[baseName];
    if (customImages[slide.id]) return customImages[slide.id];
    // 2. Direct public folder path
    return `/imgs/${slide.filename}`;
  };

  const categories = [
    { id: 'all', ja: 'すべて表示', vi: 'Tất cả', count: SLIDE_DATA.length },
    { id: 'valedictorian', ja: '首席・公式証書', vi: 'Thủ khoa & Bằng cấp', count: 3 },
    { id: 'research', ja: '学術研究・五輪', vi: 'NCKH & Olympic', count: 2 },
    { id: 'certifications', ja: 'Coursera & Kaggle', vi: 'Chứng chỉ Quốc tế', count: 2 },
    { id: 'community', ja: '社会貢献・健康', vi: 'Cộng đồng & Marathon', count: 1 },
  ];

  return (
    <section id="achievement-slider" className="py-10 sm:py-14 scroll-mt-24 space-y-6">
      {/* Hidden file input for loading client-side files */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        multiple
        accept="image/*"
        className="hidden"
        id="slidebar-file-input"
      />

      {/* Header with Title and Badges */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-rose-500/20 border border-amber-500/40 text-xs font-mono text-amber-300 mb-3 shadow-md">
            <Trophy className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>
              {lang === 'ja'
                ? '公式表彰状・学術証明スライダー (8点コレクション)'
                : lang === 'vi'
                ? 'Thanh trượt Hồ sơ & Bằng khen Minh chứng (8 Slide)'
                : 'Official Achievement & Certificate Slidebar (8 Slides)'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight flex items-center gap-2.5">
            <span>
              {lang === 'ja'
                ? '公式表彰・学位記・学術コンテスト 実績ギャラリー'
                : lang === 'vi'
                ? 'Bộ Sưu Tập Bằng Khen, Bằng Cử Nhân & Giải Thưởng NCKH'
                : 'Official Diplomas, Academic Awards & Research Credentials'}
            </span>
          </h2>
          <p className="text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
            {lang === 'ja'
              ? 'ハノイ工業大学首席卒業証書、GPA 3.76公式成績表、日系企業SPRIX主催TOFAS銀メダル、国際学会ICAETA 2025採択論文などの客観的証拠資料です。'
              : lang === 'vi'
              ? 'Trực quan hóa trọn vẹn Bằng tốt nghiệp Cử nhân Xuất sắc, Bảng điểm GPA 3.76, Huy chương Bạc TOFAS Nhật Bản, Báo cáo Hội nghị Quốc tế ICAETA và các chứng chỉ MLOps.'
              : 'Visual proof of Valedictorian honors (GPA 3.76), TOFAS Japan Silver Medal, ICAETA 2025 International Paper, and Kaggle/Coursera certifications.'}
          </p>
        </div>

        {/* Action Controls: Autoplay & Load Files */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono flex items-center gap-1.5 border transition-all ${
              isPlaying
                ? 'bg-rose-500/10 border-rose-500/30 text-rose-300 hover:bg-rose-500/20'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
            }`}
            title={isPlaying ? 'スライド自動再生を一時停止' : 'スライド自動再生を開始'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isPlaying ? (lang === 'ja' ? '自動再生中' : 'Auto Playing') : (lang === 'ja' ? '停止中' : 'Paused')}</span>
          </button>

          <button
            onClick={() => fileInputRef.current?.click()}
            className="px-3 py-1.5 rounded-xl text-xs font-mono flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-all"
            title="ローカルから画像を追加読み込み / Tải ảnh từ máy tính"
          >
            <Upload className="w-3.5 h-3.5 text-rose-400" />
            <span>{lang === 'ja' ? '写真読込' : lang === 'vi' ? 'Nạp ảnh' : 'Load Img'}</span>
          </button>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-1.5 bg-slate-950/90 p-1.5 rounded-xl border border-slate-800/90">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryChange(cat.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              activeCategory === cat.id
                ? 'bg-gradient-to-r from-rose-500/25 to-amber-500/25 text-rose-200 border border-rose-500/40 font-bold shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
            }`}
          >
            <span>{lang === 'ja' ? cat.ja : cat.vi}</span>
            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-900/80 text-slate-300 border border-slate-800">
              {cat.count}
            </span>
          </button>
        ))}
      </div>

      {/* Main Slide Card Container */}
      <div className="relative rounded-3xl bg-slate-950/90 border border-slate-800/90 backdrop-blur-xl shadow-2xl overflow-hidden group">
        {/* Glowing Ambient Gradient behind the slide */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-rose-600/10 via-amber-600/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-600/10 via-purple-600/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-5 sm:p-7 relative z-10">
          {/* Left / Top: Visual Image Display Canvas */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="relative rounded-2xl overflow-hidden bg-slate-900/90 border border-slate-800 aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center shadow-inner group/img">
              {/* Actual Image with Graceful Fallback */}
              <img
                src={getSlideImageUrl(currentSlide)}
                alt={currentSlide.titleJa}
                className="w-full h-full object-contain transition-transform duration-500 group-hover/img:scale-[1.02]"
                onError={(e) => {
                  // If image file is not found in /public, hide broken image icon and reveal the fallback certificate badge card
                  (e.target as HTMLElement).style.display = 'none';
                  const fallbackEl = document.getElementById(`fallback-${currentSlide.id}`);
                  if (fallbackEl) fallbackEl.style.display = 'flex';
                }}
              />

              {/* Fallback Certificate Canvas if file isn't uploaded to public/ yet */}
              <div
                id={`fallback-${currentSlide.id}`}
                className="hidden absolute inset-0 p-6 flex-col justify-between bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/30 border-2 border-dashed border-amber-500/40 rounded-2xl text-center"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
                    <span className="text-xs font-mono text-amber-300">
                      HaUI • SPRIX • OFFICIAL CREDENTIAL
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    File: {currentSlide.filename}
                  </span>
                </div>

                <div className="my-auto space-y-2">
                  <div className="w-16 h-16 mx-auto rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                    <Award className="w-8 h-8 text-amber-400" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-100">
                    {lang === 'ja' ? currentSlide.titleJa : currentSlide.titleVi}
                  </h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    {currentSlide.organization} • {currentSlide.date}
                  </p>
                  <p className="text-[11px] text-amber-300/80 font-mono pt-2">
                    💡 Kéo thả file <code className="text-white">{currentSlide.filename}</code> vào thư mục <code className="text-white">public/</code> hoặc bấm nút "Nạp ảnh" ở trên để hiển thị ảnh chụp thực tế.
                  </p>
                </div>

                <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-slate-400">
                  <span>Trần Văn Nhã (チャン・ヴァン・ニャー)</span>
                  <span>•</span>
                  <span>ハノイ工業大学 首席卒業</span>
                </div>
              </div>

              {/* Hover Overlay with Zoom Button */}
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <button
                  onClick={() => setLightboxOpen(true)}
                  className="pointer-events-auto px-4 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-100 text-xs font-medium flex items-center gap-2 shadow-xl"
                >
                  <Maximize2 className="w-4 h-4 text-rose-400" />
                  <span>{lang === 'ja' ? '全画面で鮮明に確認' : 'Phóng to xem chi tiết'}</span>
                </button>
              </div>

              {/* Slide Counter Badge on Image */}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-slate-300 backdrop-blur-md">
                Slide {currentIndex + 1} / {filteredSlides.length}
              </div>

              {/* Category Pill on Image */}
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-amber-500/20 border border-amber-500/40 text-[11px] font-mono text-amber-200 backdrop-blur-md flex items-center gap-1.5">
                <Award className="w-3 h-3 text-amber-400" />
                <span>{lang === 'ja' ? currentSlide.badgeJa : currentSlide.badgeVi}</span>
              </div>
            </div>

            {/* Carousel Navigation Bar */}
            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-white transition-all shadow-md active:scale-95"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-white transition-all shadow-md active:scale-95"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <span className="text-xs font-mono text-slate-400 pl-2">
                  {currentSlide.filename}
                </span>
              </div>

              {/* Fullscreen Trigger */}
              <button
                onClick={() => setLightboxOpen(true)}
                className="px-3 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white transition-all flex items-center gap-1.5"
              >
                <ZoomIn className="w-3.5 h-3.5 text-rose-400" />
                <span>{lang === 'ja' ? '拡大表示' : 'Xem to'}</span>
              </button>
            </div>
          </div>

          {/* Right / Bottom: Detailed Credentials Breakdown */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div>
              {/* Organization & Date */}
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800/80 pb-2">
                <span className="text-amber-300 font-semibold">{currentSlide.organization}</span>
                <span>{currentSlide.date}</span>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-100 tracking-tight mt-3 leading-snug">
                {lang === 'ja'
                  ? currentSlide.titleJa
                  : lang === 'vi'
                  ? currentSlide.titleVi
                  : currentSlide.titleEn}
              </h3>

              {/* Sub-header in secondary language */}
              <p className="text-xs font-mono text-rose-300 mt-1">
                {lang === 'ja' ? currentSlide.titleVi : currentSlide.titleJa}
              </p>

              {/* Detailed Bullet Points */}
              <div className="mt-4 space-y-2.5">
                <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  {lang === 'ja' ? '主要実績・証明内容' : 'Nội dung chứng thực chi tiết'}
                </p>
                <ul className="space-y-2">
                  {(lang === 'ja' ? currentSlide.highlightsJa : currentSlide.highlightsVi).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Verification Note */}
            <div className="pt-4 border-t border-slate-800/80">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-slate-300 font-medium">
                    {lang === 'ja' ? '原本証明可能（面接時に提示可能）' : 'Có đầy đủ bản gốc & chứng thực đối chiếu'}
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  VERIFIED
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Preview Ribbon */}
        <div className="p-3 bg-slate-950/95 border-t border-slate-800/80 overflow-x-auto scrollbar-thin">
          <div className="flex items-center gap-2.5 min-w-max">
            {filteredSlides.map((slide, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={slide.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`group relative rounded-xl overflow-hidden border transition-all text-left flex items-center gap-2 p-1.5 ${
                    isActive
                      ? 'bg-rose-500/20 border-rose-500/50 shadow-md shadow-rose-500/10 scale-105'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/60 opacity-75 hover:opacity-100'
                  }`}
                >
                  <div className="w-12 h-8 rounded-lg bg-slate-950 overflow-hidden shrink-0 border border-slate-800 flex items-center justify-center relative">
                    <img
                      src={getSlideImageUrl(slide)}
                      alt={slide.filename}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="pr-2">
                    <div className="text-[11px] font-mono font-bold text-slate-200 truncate max-w-[140px]">
                      {slide.filename}
                    </div>
                    <div className="text-[10px] text-slate-400 truncate max-w-[140px]">
                      {lang === 'ja' ? slide.badgeJa : slide.badgeVi}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal for Ultra-Detailed Inspection */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col p-4 sm:p-6 overflow-hidden">
          {/* Modal Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-slate-100">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-rose-500/20 text-rose-300 text-xs font-mono font-bold">
                {currentSlide.filename}
              </span>
              <h3 className="font-bold text-sm sm:text-base text-slate-100 truncate max-w-xl">
                {lang === 'ja' ? currentSlide.titleJa : currentSlide.titleVi}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white"
                title="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs font-mono text-slate-400 px-2">
                {currentIndex + 1} / {filteredSlides.length}
              </span>
              <button
                onClick={handleNext}
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white"
                title="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => setLightboxOpen(false)}
                className="p-2 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 ml-2"
                title="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Image Body */}
          <div className="flex-1 flex items-center justify-center p-4 overflow-auto">
            <img
              src={getSlideImageUrl(currentSlide)}
              alt={currentSlide.titleJa}
              className="max-h-[82vh] max-w-full object-contain rounded-xl shadow-2xl border border-slate-800"
            />
          </div>

          {/* Modal Footer Notes */}
          <div className="pt-3 border-t border-slate-800/80 text-center text-xs text-slate-400">
            <span>{currentSlide.organization}</span>
            <span className="mx-2">•</span>
            <span>{currentSlide.date}</span>
            <span className="mx-2">•</span>
            <span className="text-amber-300">{lang === 'ja' ? currentSlide.badgeJa : currentSlide.badgeVi}</span>
          </div>
        </div>
      )}
    </section>
  );
};
