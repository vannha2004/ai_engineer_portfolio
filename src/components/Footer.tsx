import React from 'react';
import { Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal }) => {
  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}. Built for AI & Machine Learning Systems.</span>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono">
          <button
            onClick={onOpenTerminal}
            className="text-slate-400 hover:text-cyan-400 flex items-center gap-1 transition-colors"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Open CLI</span>
          </button>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="text-slate-400 hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};
