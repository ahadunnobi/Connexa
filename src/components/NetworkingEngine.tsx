"use client";

import { Network, Users, MessageSquare, Send, Sparkles, UserPlus } from "lucide-react";

export function NetworkingEngine() {
  return (
    <div className="max-w-6xl mx-auto h-full flex flex-col">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
          <Network className="w-8 h-8 text-blue-400" />
          Auto-Networking Engine
        </h1>
        <p className="text-slate-400">AI-driven connection generation and relationship nurturing.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 flex-1 min-h-0">
        
        {/* Left Column - Target Setting */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Users className="w-5 h-5 text-slate-400" />
            Target Persona
          </h2>
          
          <div className="space-y-4 flex-1">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Target Title</label>
              <input 
                type="text" 
                defaultValue="VP of Engineering"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Industry / Niche</label>
              <input 
                type="text" 
                defaultValue="B2B SaaS"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Connection Angle</label>
              <select className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 appearance-none">
                <option>Mutual interests in Architecture & Philosophy</option>
                <option>Direct Value Proposition (Sales)</option>
                <option>Podcast/Interview Invite</option>
              </select>
            </div>
          </div>

          <button className="w-full mt-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-bold shadow-lg transition-all flex justify-center items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-400" />
            Find Prospects
          </button>
        </div>

        {/* Right Column - Outreach Sequences */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
           
           <div className="flex justify-between items-center mb-6 z-10">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-slate-400" />
              Generated Outreach 
            </h2>
            <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold">
              3 AI Suggestions
            </span>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto pr-2 z-10">
            {/* Mock Prospect 1 */}
            <div className="bg-slate-950 border border-slate-800 rounded-lg p-5 hover:border-slate-700 transition-colors cursor-pointer">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-bold text-white text-lg">Alex Mercer</h4>
                  <p className="text-sm text-slate-400">VP of Engineering @ CloudFleet</p>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-green-400 bg-green-400/10 px-2 py-1 rounded">High Match</span>
              </div>
              
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-md mb-4">
                <p className="text-sm text-slate-300">
                  "Hi Alex, noticed you're scaling the engineering team at CloudFleet. I write a lot about the intersection of stoic philosophy and deep tech architecture—thought we might have some shared interests. Would love to connect!"
                </p>
              </div>

              <div className="flex justify-end gap-3">
                <button className="py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2">
                  <UserPlus className="w-4 h-4" /> Send Request
                </button>
                <button className="py-2.5 px-4 bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 border border-blue-500/20 text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" /> Queue via Automation
                </button>
              </div>
            </div>

            {/* Mock Prospect 2 */}
            <div className="bg-slate-950 border border-slate-800 rounded-lg p-5 hover:border-slate-700 transition-colors cursor-pointer opacity-70 hover:opacity-100">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-bold text-white text-lg">Jordan Lee</h4>
                  <p className="text-sm text-slate-400">Head of Tech @ Synapse AI</p>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-400/10 px-2 py-1 rounded">Good Match</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
