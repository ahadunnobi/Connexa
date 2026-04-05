import { Suspense } from "react";
import { TrendingUp, Users, MessageSquare, Calendar, ChevronRight, AlertCircle } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { connection } from "next/server";

// --- Sub-components ---

async function RecentInteractions() {
  try {
    await connection();
    const interactions = await prisma.interaction.findMany({
      orderBy: { createdAt: 'desc' },
      take: 3
    });

    if (interactions.length === 0) {
      return (
        <div className="p-8 text-center border border-dashed border-slate-800 rounded-lg">
          <p className="text-slate-500 text-sm italic">No recent AI interactions found.</p>
        </div>
      );
    }

    return (
      <div className="space-y-4 relative z-10">
        {interactions.map((contact: any, i: number) => (
          <div key={i} className={`flex items-center justify-between p-4 bg-slate-800/40 rounded-lg border border-slate-800 border-l-4 ${contact.color} hover:bg-slate-800/80 transition-all cursor-pointer group`}>
            <div>
              <h4 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">{contact.name}</h4>
              <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500">{contact.role}</p>
            </div>
            <div className="text-right">
              <span className="text-sm font-medium text-slate-200">{contact.status}</span>
              <p className="text-[10px] text-slate-500 mt-1 uppercase font-bold tracking-wider">Topic: {contact.type}</p>
            </div>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    return (
      <div className="p-8 text-center border border-red-500/20 bg-red-500/5 rounded-lg flex flex-col items-center gap-2">
        <AlertCircle className="w-5 h-5 text-red-400" />
        <p className="text-red-400 text-sm font-medium">Database Offline</p>
        <p className="text-slate-500 text-xs">Could not fetch interactions.</p>
      </div>
    );
  }
}

async function PostQueue() {
  try {
    await connection();
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: 'desc' },
      take: 5
    });

    if (posts.length === 0) {
      return <p className="text-slate-500 text-sm italic">Queue is empty. Generate some content!</p>;
    }

    return (
      <div className="space-y-4 flex-1">
        {posts.map((post: any, i: number) => (
          <div key={i} className="border-b border-slate-800 last:border-0 pb-4 last:pb-0">
            <p className="text-sm font-medium text-slate-200 line-clamp-2 mb-2">"{post.title}"</p>
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>{post.status}</span>
              <span className="bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded font-medium">{post.platform}</span>
            </div>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    return (
      <div className="p-4 text-center border border-red-500/20 bg-red-500/5 rounded-lg flex flex-col items-center gap-2">
        <AlertCircle className="w-4 h-4 text-red-400" />
        <p className="text-red-400 text-xs font-medium">Fetch Failed</p>
      </div>
    );
  }
}

function SectionSkeleton({ height = "200px" }: { height?: string }) {
  return (
    <div className="w-full animate-pulse bg-slate-800/50 rounded-lg" style={{ height }} />
  );
}

// --- Main Page ---

export default function HomeDashboard() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Welcome back, Ahad</h1>
        <p className="text-slate-400">Here's what your AI networking engine is up to today.</p>
      </div>

      {/* Metrics (Static Shell) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "New Connections", value: "+34", trend: "+12%", icon: Users, color: "text-blue-400", bg: "bg-blue-500/10" },
          { label: "Profile Views", value: "1,245", trend: "+24%", icon: TrendingUp, color: "text-emerald-400", bg: "bg-emerald-500/10" },
          { label: "Messages Sent", value: "156", trend: "+5%", icon: MessageSquare, color: "text-purple-400", bg: "bg-purple-500/10" },
          { label: "Posts Scheduled", value: "--", trend: "Syncing", icon: Calendar, color: "text-orange-400", bg: "bg-orange-400/10" },
        ].map((metric: any, i: number) => (
          <div 
            key={i} 
            className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-6 rounded-xl flex flex-col justify-between hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-2 rounded-lg ${metric.bg} ${metric.color} group-hover:scale-110 transition-transform duration-300`}>
                <metric.icon className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                {metric.trend}
              </span>
            </div>
            <div>
                <p className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-1">{metric.label}</p>
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{metric.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Interactions */}
        <div className="lg:col-span-2 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
          <div className="flex justify-between items-center mb-6 relative z-10">
            <h2 className="text-xl font-bold text-white">Recent AI Interactions</h2>
            <button className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-all group">
              View All <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
          <Suspense fallback={<SectionSkeleton height="240px" />}>
            <RecentInteractions />
          </Suspense>
        </div>

        {/* Content Queue */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col">
          <h2 className="text-xl font-bold text-white mb-6">Next Posts Queue</h2>
          <Suspense fallback={<SectionSkeleton height="150px" />}>
            <PostQueue />
          </Suspense>
          <button className="w-full mt-6 py-2.5 bg-cyan-600/10 hover:bg-cyan-600/20 text-cyan-400 border border-cyan-500/20 rounded-lg text-sm font-medium transition-colors">
            Generate New Content
          </button>
        </div>
      </div>
    </div>
  );
}
