import { Search, Bell, ChevronDown } from 'lucide-react';
import { APP } from '../../core/constants/app';
import { Avatar } from '../ui/Avatar';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="h-16 md:h-[70px] bg-gradient-to-l from-[#1f395e] via-[#2f5567] to-[#0a0a2e] border-b border-blue-900/30 flex items-center justify-between px-4 md:px-8">
      <h1 className="text-xl md:text-2xl font-semibold text-white">{title}</h1>

      <div className="flex items-center gap-3 md:gap-5">
        <div className="relative hidden sm:flex items-center">
          <Search size={18} className="absolute left-3 text-gray-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search..."
            className="w-40 lg:w-64 pl-10 pr-4 py-2 rounded-lg border border-blue-200/30 bg-white/20 text-white placeholder-gray-400 backdrop-blur-md focus:outline-none focus:border-blue-400/50 transition-all text-sm"
          />
        </div>

        <button className="relative w-9 h-9 md:w-10 md:h-10 rounded-lg bg-white/20 border border-blue-200/30 flex items-center justify-center transition-colors hover:bg-white/30">
          <Bell size={18} className="text-gray-300" />
          <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
        </button>

        <button className="flex items-center gap-2 md:gap-3 px-2 md:px-3 py-2 rounded-lg transition-colors hover:bg-blue-600/10">
          <Avatar initials={APP.USER.INITIALS} size="sm" />
          <div className="hidden md:flex flex-col items-start">
            <span className="text-sm font-semibold text-white leading-tight">{APP.USER.NAME}</span>
            <span className="text-xs text-gray-400 leading-tight">{APP.USER.ROLE}</span>
          </div>
          <ChevronDown size={16} className="text-gray-400 hidden md:block" />
        </button>
      </div>
    </header>
  );
}
