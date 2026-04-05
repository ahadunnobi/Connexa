"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, PenTool, Network, BarChart, Settings, Hexagon } from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Dashboard", icon: Home },
    { href: "/content", label: "Content Engine", icon: PenTool },
    { href: "/networking", label: "Networking AI", icon: Network },
    { href: "/analytics", label: "Analytics", icon: BarChart },
  ];

  return (
    <aside className="w-64 min-h-screen bg-slate-900 border-r border-slate-800 text-slate-300 p-4 flex flex-col">
      <div className="flex items-center gap-3 mb-10 px-2 text-white">
        <Hexagon className="text-cyan-400 w-8 h-8" />
        <span className="text-xl font-bold tracking-tight">Connexa AI</span>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item: any) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.href}
              href={item.href} 
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                isActive 
                  ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20" 
                  : "hover:bg-slate-800 hover:text-white"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto border-t border-slate-800 pt-4">
        <Link 
          href="/settings" 
          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
            pathname === "/settings"
              ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
              : "hover:bg-slate-800 hover:text-white"
          }`}
        >
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </Link>
      </div>
    </aside>
  );
}
