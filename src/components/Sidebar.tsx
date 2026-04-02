import Link from "next/link";
import { Home, PenTool, Network, BarChart, Settings, Hexagon } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 border-r border-slate-800 text-slate-300 p-4 flex flex-col">
      <div className="flex items-center gap-3 mb-10 px-2 text-white">
        <Hexagon className="text-cyan-400 w-8 h-8" />
        <span className="text-xl font-bold tracking-tight">Connexa AI</span>
      </div>

      <nav className="flex-1 space-y-2">
        <Link 
          href="/" 
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 hover:text-white transition-colors"
        >
          <Home className="w-5 h-5" />
          <span>Dashboard</span>
        </Link>
        <Link 
          href="/content" 
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 hover:text-white transition-colors"
        >
          <PenTool className="w-5 h-5" />
          <span>Content Engine</span>
        </Link>
        <Link 
          href="/networking" 
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 hover:text-white transition-colors"
        >
          <Network className="w-5 h-5" />
          <span>Networking AI</span>
        </Link>
        <Link 
          href="/analytics" 
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 hover:text-white transition-colors"
        >
          <BarChart className="w-5 h-5" />
          <span>Analytics</span>
        </Link>
      </nav>

      <div className="mt-auto border-t border-slate-800 pt-4">
        <Link 
          href="/settings" 
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 hover:text-white transition-colors"
        >
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </Link>
      </div>
    </aside>
  );
}
