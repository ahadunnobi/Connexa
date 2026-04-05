export const unstable_instant = { prefetch: 'static' };

import { BarChart, TrendingUp, Target, Zap, Activity, PieChart } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
            <BarChart className="w-8 h-8 text-emerald-400" />
            Performance Analytics
          </h1>
          <p className="text-slate-400">Deep insights into your AI-driven social growth and networking efficiency.</p>
        </div>
        <div className="flex gap-2">
          <span className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg text-sm text-slate-300 font-medium">Last 30 Days</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Content Reach", value: "45.2k", change: "+18%", icon: Zap, color: "text-amber-400" },
          { label: "Conversion Rate", value: "4.8%", change: "+2.1%", icon: Target, color: "text-emerald-400" },
          { label: "Engagement Velocity", value: "89/hr", change: "+12%", icon: Activity, color: "text-cyan-400" },
        ].map((stat: any, i: number) => (
          <div key={i} className="bg-slate-900 border border-slate-800 p-6 rounded-xl relative overflow-hidden group">
            <div className={`absolute -right-4 -top-4 w-24 h-24 bg-slate-800/20 rounded-full blur-2xl group-hover:bg-slate-700/30 transition-all pointer-events-none`} />
            <div className="flex justify-between items-start mb-4">
              <div className={`p-2 bg-slate-800 rounded-lg ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">
                {stat.change}
              </span>
            </div>
            <p className="text-sm text-slate-400 mb-1">{stat.label}</p>
            <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Growth Chart Placeholder */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col min-h-[300px]">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-cyan-400" />
            Network Growth Trend
          </h2>
          <div className="flex-1 flex items-center justify-center border border-dashed border-slate-800 rounded-lg bg-slate-950/50">
             <div className="text-center">
                <PieChart className="w-12 h-12 text-slate-700 mx-auto mb-3" />
                <p className="text-slate-500 text-sm">Interactive growth visualization is processing...</p>
             </div>
          </div>
        </div>

        {/* Top Performing Hooks */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-6">Top Content Hooks</h2>
          <div className="space-y-4">
            {[
              { topic: "Stoic Software Arch", score: 98, res: "12 meetings" },
              { topic: "The AI Sales Ghost", score: 85, res: "84 connections" },
              { topic: "Engineering Deep Work", score: 79, res: "1.2k likes" },
            ].map((hook: any, i: number) => (
              <div key={i} className="flex items-center justify-between p-4 bg-slate-800/30 rounded-lg border border-slate-800 hover:bg-slate-800 transition-all cursor-default">
                <div>
                  <h4 className="font-semibold text-white text-sm">{hook.topic}</h4>
                  <p className="text-xs text-slate-400">Yield: {hook.res}</p>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-cyan-400 mb-1">Score: {hook.score}</div>
                  <div className="w-24 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-500" style={{ width: `${hook.score}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
