import { useState } from 'react';
import { Search, Bell, ChevronDown, Menu } from 'lucide-react';
import { APP, ROUTES } from '../../core/constants/app';
import { Avatar } from '../ui/Avatar';
import { useSidebar } from '../context/SidebarContext';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const sidebar = useSidebar();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = searchQuery.trim().toLowerCase();
    if (!q) return;

    if (q.includes('client') || q.includes('call') || q.includes('log')) {
      navigate(ROUTES.CLIENT_LOG);
    } else if (q.includes('ai') || q.includes('chat') || q.includes('bot')) {
      navigate(ROUTES.AI_LOG);
    } else {
      navigate(ROUTES.DASHBOARD);
    }
    setSearchQuery('');
  };

  return (
    <header className="h-16 md:h-header bg-gradient-to-l from-header-from via-header-via to-header-to border-b border-border-blue flex items-center justify-between px-4 md:px-8">
      <div className="flex items-center gap-3">
        <button
          onClick={sidebar.toggle}
          className="md:hidden p-2 rounded-lg text-white/70 hover:bg-white/10 transition-colors"
        >
          <Menu size={22} />
        </button>
        <h1 className="text-xl md:text-2xl font-semibold text-white truncate">{title}</h1>
      </div>

      <div className="flex items-center gap-3 md:gap-5">
        <form onSubmit={handleSearch} className="relative hidden sm:flex items-center">
          <Search size={18} className="absolute left-3 text-gray-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={APP.SEARCH_PLACEHOLDER}
            className="w-40 lg:w-64 pl-10 pr-4 py-2 rounded-lg border border-blue-200/30 bg-white/20 text-white placeholder-gray-400 backdrop-blur-md focus:outline-none focus:border-blue-400/50 transition-all text-sm"
          />
        </form>

        <button className="relative w-9 h-9 md:w-10 md:h-10 rounded-lg bg-white/20 border border-blue-200/30 flex items-center justify-center transition-colors hover:bg-white/30">
          <Bell size={18} className="text-gray-300" />
          <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
        </button>

        <button className="flex items-center gap-2 md:gap-3 px-2 md:px-3 py-2 rounded-lg transition-colors hover:bg-accent-blue/10">
          <Avatar initials={APP.USER.INITIALS} size="sm" />
          <div className="hidden md:flex flex-col items-start">
            <span className="text-sm font-semibold text-white leading-tight">{APP.USER.NAME}</span>
            <span className="text-xs text-text-muted leading-tight">{APP.USER.ROLE}</span>
          </div>
          <ChevronDown size={16} className="text-gray-400 hidden md:block" />
        </button>
      </div>
    </header>
  );
}
