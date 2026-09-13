import React, { useState } from 'react';
import { Bot, GitBranch, CheckCircle2, Shield, Code, Terminal } from 'lucide-react';

interface AgentStep {
  agentName: string;
  role: string;
  icon: any;
  status: 'completed' | 'active' | 'waiting';
  action: string;
  thought: string;
  output: string;
  toolsUsed: string[];
}

const AGENT_WORKFLOW_TRACE: AgentStep[] = [
  {
    agentName: 'Orchestrator / Architect',
    role: 'Decomposes task into stateful DAG execution plan',
    icon: GitBranch,
    status: 'completed',
    action: 'Plan decomposition for Repository Vulnerability Audit',
    thought: 'The repository contains FastAPI endpoints with raw SQL queries. I need to trigger the static security analyzer and pass high-risk findings to the code remediation agent.',
    output: 'Execution Graph dispatched: 3 sub-agents assigned to tasks [StaticScan, PatchGeneration, ContainerSandboxTest].',
    toolsUsed: ['ast_parser', 'repo_map_generator']
  },
  {
    agentName: 'Vulnerability Hunter',
    role: 'AST & Semgrep static analysis + Semantics check',
    icon: Shield,
    status: 'completed',
    action: 'Scan SQL queries for injection and unescaped format strings',
    thought: 'Detected raw f-string SQL query at `app/routes/user.py:42`: `SELECT * FROM users WHERE id = {user_id}` without parameter binding.',
    output: 'Vulnerability Flagged: SQL Injection (CWE-89, Severity: HIGH). Formatted structured JSON report.',
    toolsUsed: ['semgrep_scan', 'git_blame_inspector']
  },
  {
    agentName: 'Code Fixer & Synthesizer',
    role: 'Generates secure patch & unit regression test',
    icon: Code,
    status: 'completed',
    action: 'Rewrite query to parameterized SQLAlchemy statement',
    thought: 'Replaced format string with parameterized `select(User).where(User.id == bindparam("id"))`. Generated unit test mocking malicious payload `1 OR 1=1`.',
    output: 'Pull Request patch diff generated with 100% syntax validation.',
    toolsUsed: ['python_ast_validator', 'code_diff_generator']
  },
  {
    agentName: 'Docker Sandbox Evaluator',
    role: 'Runs isolated unit tests & verifies zero regressions',
    icon: Terminal,
    status: 'completed',
    action: 'Execute pytest in ephemeral Docker container',
    thought: 'Container initialized in 180ms. Running 14 integration test cases. Both benign and exploit test cases pass.',
    output: '14/14 tests PASSED. Zero regressions detected. Execution complete.',
    toolsUsed: ['docker_sandbox_api', 'pytest_runner']
  }
];

export const AgentWorkflowViewer: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const currentStep = AGENT_WORKFLOW_TRACE[activeStepIndex];
  const StepIcon = currentStep.icon;

  return (
    <div id="agent-workflow-viewer-container" className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 sm:p-7 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-slate-100 flex items-center gap-2">
                Autonomous Multi-Agent DAG Viewer
                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-indigo-950 text-indigo-300 border border-indigo-800/60">
                  LangGraph Stateful Engine
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Inspect live agent reasoning chains, tool invocations, and state transitions
              </p>
            </div>
          </div>
        </div>

        <span className="text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 self-start sm:self-center">
          State Machine: Deterministic Loop
        </span>
      </div>

      {/* Interactive Agent Node Selector Bar */}
      <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-2">
        {AGENT_WORKFLOW_TRACE.map((step, idx) => {
          const Icon = step.icon;
          const isSelected = activeStepIndex === idx;
          return (
            <button
              key={idx}
              id={`agent-step-btn-${idx}`}
              onClick={() => setActiveStepIndex(idx)}
              className={`text-left p-3 rounded-xl border transition-all ${
                isSelected
                  ? 'bg-slate-800 border-indigo-500 text-white shadow-md'
                  : 'bg-slate-950/70 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <Icon className={`w-4 h-4 ${isSelected ? 'text-indigo-400' : 'text-slate-400'}`} />
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                  Done
                </span>
              </div>
              <div className="text-xs font-semibold truncate text-slate-200">{step.agentName}</div>
              <div className="text-[10px] text-slate-400 truncate mt-0.5">{step.action}</div>
            </button>
          );
        })}
      </div>

      {/* Active Node Detail Card */}
      <div className="mt-5 p-4 sm:p-5 rounded-xl bg-slate-950 border border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-900">
          <div className="flex items-center gap-2">
            <StepIcon className="w-5 h-5 text-indigo-400" />
            <div>
              <span className="font-semibold text-sm sm:text-base text-slate-100">{currentStep.agentName}</span>
              <span className="text-xs text-slate-400 block">{currentStep.role}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {currentStep.toolsUsed.map((tool) => (
              <span key={tool} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-cyan-300 border border-slate-800">
                🛠️ {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Thought Chain */}
        <div className="space-y-3 font-mono text-xs">
          <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80">
            <div className="text-indigo-400 font-semibold mb-1 flex items-center gap-1.5">
              <span>🧠 Internal ReAct Thought:</span>
            </div>
            <p className="text-slate-300 leading-relaxed font-sans text-xs sm:text-sm">
              "{currentStep.thought}"
            </p>
          </div>

          <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80">
            <div className="text-emerald-400 font-semibold mb-1 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Execution Output & State Update:</span>
            </div>
            <p className="text-slate-200 leading-relaxed font-sans text-xs sm:text-sm">
              {currentStep.output}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
