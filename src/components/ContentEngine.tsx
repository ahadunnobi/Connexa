"use client";

import { useState } from "react";
import { PenTool, Brain, Zap, CheckCircle2, RefreshCw, Settings2 } from "lucide-react";

export function ContentEngine() {
  const [topic, setTopic] = useState("The intersection of software architecture and stoic philosophy");
  const [tone, setTone] = useState("Philosophical & Bold");
  const [target, setTarget] = useState("VPs of Engineering & Tech Founders");
  
  const [isGenerating, setIsGenerating] = useState(false);

  return (
    <div className="max-w-6xl mx-auto h-full flex flex-col">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
          <PenTool className="w-8 h-8 text-cyan-400" />
          AI Content Engine
        </h1>
        <p className="text-slate-400">Your personal ghostwriter for blending sales insights with philosophical depth.</p>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-0">
        {/* Left Panel: Configuration */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col">
          <div className="flex items-center gap-2 mb-6">
            <Settings2 className="w-5 h-5 text-slate-400" />
            <h2 className="text-xl font-bold text-white">Post Generator</h2>
          </div>

          <div className="space-y-6 flex-1 overflow-y-auto pr-2">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Core Topic or Idea</label>
              <textarea 
                rows={4}
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 resize-none transition-all"
                placeholder="What's on your mind today?"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Primary Tone</label>
                <select 
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 appearance-none"
                >
                  <option>Philosophical & Bold</option>
                  <option>Direct Sales & Actionable</option>
                  <option>Storytelling & Vulnerable</option>
                  <option>Deep Tech Dive</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Target Audience</label>
                <input 
                  type="text"
                  value={target}
                  onChange={(e) => setTarget(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                  placeholder="e.g. Founders"
                />
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-800/50">
              <h4 className="text-sm font-medium text-white mb-2 flex items-center gap-2">
                <Brain className="w-4 h-4 text-purple-400" />
                AI Context Memory
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                The AI will automatically reference your past 3 high-performing posts and maintain your unique "LogosAI" brand voice.
              </p>
              <div className="flex gap-2">
                <span className="text-[10px] uppercase font-bold tracking-wider bg-slate-800 text-slate-300 px-2 py-1 rounded">Industry: Dev/Sales</span>
                <span className="text-[10px] uppercase font-bold tracking-wider bg-slate-800 text-slate-300 px-2 py-1 rounded">Platform: Facebook</span>
              </div>
            </div>
          </div>

          <button 
            className="w-full mt-6 py-3.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-lg font-bold shadow-lg shadow-cyan-900/20 transition-all flex justify-center items-center gap-2"
            onClick={() => setIsGenerating(true)}
          >
            {isGenerating ? (
              <RefreshCw className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <Zap className="w-5 h-5" />
                Generate Magic
              </>
            )}
          </button>
        </div>

        {/* Right Panel: Output & Editing */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex justify-between items-center mb-6 z-10">
            <h2 className="text-xl font-bold text-white">AI Drafts</h2>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm rounded-md transition-colors">
                Regenerate
              </button>
            </div>
          </div>

          <div className="flex-1 bg-slate-950 border border-slate-800 rounded-xl p-6 overflow-y-auto mb-6 z-10">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Option 1: The Hook Approach</span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap">
                  Most teams try to build faster. The stoics would say they're running blindly.
                  {'\n\n'}
                  The intersection of good software architecture and philosophy is simple: Control what you can (your system boundaries) and accept what you can't (third-party API downtime).
                  {'\n\n'}
                  As a VP of Engineering, building loosely coupled systems isn't just a technical decision—it's a mindset that protects your team's sanity. 
                  {'\n\n'}
                  Stop fighting the chaos. Engineer for resilience.
                  {'\n\n'}
                  How are you building resilience into your stack this quarter? 👇
                </p>
                <div className="mt-4 flex gap-3">
                  <button className="flex-1 py-2 bg-cyan-600/10 hover:bg-cyan-600/20 text-cyan-400 text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2">
                    <PenTool className="w-4 h-4" /> Edit
                  </button>
                  <button className="flex-1 py-2 bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-400 text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> Select & Schedule
                  </button>
                </div>
              </div>

              <div className="h-px bg-slate-800" />

               <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-400">Option 2: The Storytelling Approach</span>
                </div>
                <p className="text-slate-400 text-sm italic">
                  [Alternative draft is generating behind the scenes...]
                </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
