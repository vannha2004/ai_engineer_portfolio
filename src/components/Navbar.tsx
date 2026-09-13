import React, { useState, useEffect } from 'react';
import { Terminal, Cpu, Sparkles, FolderGit2, BookOpen, Mail, GitFork, Link2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenTerminal: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'interactive-tools', label: 'AI Tools & Demos', icon: Cpu },
    { id: 'skills', label: 'Tech Stack', icon: Sparkles },
    { id: 'experience', label: 'Experience', icon: BookOpen },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Identity */}
        <a
          id="brand-logo"
          href="#"
          className="flex items-center gap-2.5 text-slate-100 group focus:outline-none"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-mono font-bold text-white shadow-sm shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
            AI
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm sm:text-base tracking-tight text-slate-100 flex items-center gap-1.5">
              {PERSONAL_INFO.name}
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Available for AI roles" />
            </span>
            <span className="font-mono text-[11px] text-slate-400">AI / ML Systems Engineer</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                id={`nav-link-${item.id}`}
                href={`#${item.id}`}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-slate-800 text-cyan-300 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons: Terminal & Socials */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            id="open-terminal-btn"
            onClick={onOpenTerminal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-xs font-mono text-cyan-400 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            title="Open Interactive AI CLI"
          >
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">CLI Inspect</span>
            <kbd className="hidden lg:inline-block px-1.5 py-0.5 bg-slate-800 rounded text-[10px] text-slate-400 border border-slate-700">~</kbd>
          </button>

          <a
            id="nav-github-link"
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors"
            title="GitHub Profile (vannha2004)"
          >
            <GitFork className="w-4 h-4" />
          </a>

          <a
            id="nav-linkedin-link"
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors"
            title="LinkedIn Profile"
          >
            <Link2 className="w-4 h-4" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
            aria-label="Toggle navigation menu"
          >
            <span className="text-xs font-mono">{mobileMenuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 px-4 py-3 bg-slate-950/95 border-b border-slate-800 backdrop-blur-lg flex flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-cyan-300 hover:bg-slate-900"
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
