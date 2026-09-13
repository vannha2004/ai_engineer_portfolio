import React, { useState } from 'react';
import { Mail, GitFork, Link2, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { JA_PERSONAL_INFO } from '../data/japaneseN3Data';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '【採用・開発相談】AIエンジニア採用について',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 scroll-mt-20">
      <div className="bg-slate-950/85 backdrop-blur-md border border-slate-800/90 rounded-3xl p-6 sm:p-9 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Direct Info in Japanese */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-xs font-mono text-rose-300 mb-3">
                <Mail className="w-3.5 h-3.5 text-rose-400" />
                <span>お問い合わせ・採用連絡</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">
                お仕事のご相談・面談のご連絡
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                正社員のAIエンジニアポジション、低遅延推論パイプラインの開発、音声AIシステムの設計など、お気軽にご連絡ください。日本国内企業・フルリモートどちらも対応可能です。
              </p>

              {/* Direct Email Box with 1-click copy */}
              <div className="mt-5 p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                  メールアドレス（直接連絡）
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-xs sm:text-sm font-mono text-rose-300 hover:underline truncate"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors shrink-0"
                    title="メールアドレスをコピー"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Japanese Status summary */}
              <div className="mt-4 p-3 rounded-xl bg-rose-950/20 border border-rose-500/20 text-xs text-rose-300 leading-relaxed">
                <p className="font-bold mb-1">🌸 日本語でのコミュニケーションについて</p>
                <p className="text-slate-300">
                  日本語能力試験 (JLPT N3) を取得しており、仕様書の読解、技術ドキュメントの作成、日常的な業務連絡を日本語で行うことができます。
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-800/80">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
              >
                <GitFork className="w-3.5 h-3.5 text-rose-400" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
              >
                <Link2 className="w-3.5 h-3.5 text-rose-400" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={PERSONAL_INFO.huggingface}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-rose-300 transition-colors"
              >
                <span>🤗 Hugging Face</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            {formSubmitted ? (
              <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center p-8 bg-slate-900/90 rounded-2xl border border-slate-800">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-100">
                  メッセージありがとうございます！
                </h3>
                <p className="text-xs text-slate-400 mt-2 max-w-md">
                  内容を確認の上、1営業日以内にご返信いたします。
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-5 text-xs text-rose-400 hover:underline"
                >
                  別のメッセージを送信する
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      お名前・貴社名 *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="例: 山田 太郎 / 株式会社AIソリューションズ"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs focus:outline-none focus:border-rose-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      返信用メールアドレス *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.name@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs focus:outline-none focus:border-rose-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">
                    ご用件・件名
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs focus:outline-none focus:border-rose-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">
                    メッセージ本文 *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="ポジションの詳細、プロジェクト内容、またはオンラインカジュアル面談のご希望などをご記入ください。"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs focus:outline-none focus:border-rose-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-rose-600 to-indigo-600 hover:from-rose-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-rose-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>メッセージを送信する</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
