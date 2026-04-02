import { TrendingUp, Users, MessageSquare, Calendar, ChevronRight } from "lucide-react";

export default function HomeDashboard() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Welcome back, Ahad</h1>
        <p className="text-slate-400">Here's what your AI networking engine is up to today.</p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "New Connections", value: "+34", trend: "+12%", icon: Users, color: "text-blue-400" },
          { label: "Profile Views", value: "1,245", trend: "+24%", icon: TrendingUp, color: "text-green-400" },
          { label: "Messages Sent", value: "156", trend: "+5%", icon: MessageSquare, color: "text-purple-400" },
          { label: "Posts Scheduled", value: "8", trend: "Active", icon: Calendar, color: "text-orange-400" },
        ].map((metric, i) => (
          <div key={i} className="bg-slate-900 border border-slate-800 p-6 rounded-xl flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-2 bg-slate-800 rounded-lg ${metric.color}`}>
                <metric.icon className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">
                {metric.trend}
              </span>
            </div>
            <div>
                <p className="text-sm text-slate-400 mb-1">{metric.label}</p>
                <h3 className="text-2xl font-bold text-white">{metric.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Connections */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-white">Recent AI Interactions</h2>
            <button className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors">
              View All <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-4">
            {[
              { name: "Sarah Jenkins", role: "VP of Sales @ TechFlow", status: "Replied strongly", type: "Philosophy Hook" },
              { name: "David Chen", role: "Senior Developer @ Innovate", status: "Connection accepted", type: "Tech Leadership" },
              { name: "Elena Rodriguez", role: "Founder @ AI Dynamics", status: "Meeting booked", type: "Sales Pitch" },
            ].map((contact, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg border border-slate-800 border-l-4 border-l-cyan-500 hover:bg-slate-800 transition-colors cursor-pointer">
                <div>
                  <h4 className="font-semibold text-white">{contact.name}</h4>
                  <p className="text-xs text-slate-400">{contact.role}</p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium text-slate-200">{contact.status}</span>
                  <p className="text-xs text-slate-500 mt-1">Topic: {contact.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Queue */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col">
          <h2 className="text-xl font-bold text-white mb-6">Next Posts Queue</h2>
          <div className="space-y-4 flex-1">
            {[
              { title: "The Philosophy of Clean Code vs Speed", time: "Today, 2:00 PM", platform: "LinkedIn" },
              { title: "Cold Outbound Strategy 2026: The AI Revolution", time: "Tomorrow, 9:00 AM", platform: "LinkedIn" },
            ].map((post, i) => (
              <div key={i} className="border-b border-slate-800 last:border-0 pb-4 last:pb-0">
                <p className="text-sm font-medium text-slate-200 line-clamp-2 mb-2">"{post.title}"</p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{post.time}</span>
                  <span className="bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded font-medium">{post.platform}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-2.5 bg-cyan-600/10 hover:bg-cyan-600/20 text-cyan-400 border border-cyan-500/20 rounded-lg text-sm font-medium transition-colors">
            Generate New Content
          </button>
        </div>
      </div>
    </div>
  );
}
