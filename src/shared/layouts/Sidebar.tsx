import { LayoutDashboard, Users, Plus, Settings, LogOut, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { APP, ROUTES, SIDEBAR } from '../../core/constants/app';
import { cn } from '../../core/utils/cn';
import { useSidebar } from '../context/SidebarContext';
import logoImage from '../../assets/logo.png';

const ICONS = {
  dashboard: LayoutDashboard,
  'client-log': Users,
  'ai-log': Plus,
} as const;

export function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const sidebar = useSidebar();

  const handleNavigation = (path: string) => {
    navigate(path);
    sidebar.close();
  };

  const handleLogout = () => {
    sessionStorage.clear();
    navigate(ROUTES.LOGIN);
  };

  return (
    <aside className="h-full w-full bg-bg-sidebar text-white flex flex-col overflow-hidden">
      <div className="flex items-center justify-between px-5 py-[19px] border-b border-border-blue">
        <div className="flex items-center gap-2">
          <img src={logoImage} alt={`${APP.NAME} Logo`} className="w-8 h-8 object-contain" />
          <span className="text-xl font-semibold ml-1">{APP.NAME}</span>
        </div>
        <button
          onClick={sidebar.close}
          className="md:hidden p-1 rounded-lg hover:bg-white/10 transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      <nav className="flex-1 p-4">
        <div className="flex flex-col gap-1">
          {SIDEBAR.MENU_ITEMS.map((item) => {
            const Icon = ICONS[item.id as keyof typeof ICONS];
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.path)}
                className={cn(
                  'w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-left transition-all duration-200',
                  isActive
                    ? 'bg-accent-blue text-white'
                    : 'text-gray-300 hover:bg-accent-blue/20',
                )}
              >
                <Icon size={16} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      <div className="p-4 border-t border-border-blue flex flex-col gap-3">
        <div className="bg-accent-blue rounded-lg p-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-xs font-semibold">
            {APP.USER.INITIALS}
          </div>
          <span className="text-sm font-medium">{APP.USER.NAME}</span>
        </div>

        <button
          onClick={() => handleNavigation(ROUTES.SETTINGS)}
          className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm text-gray-300 hover:bg-accent-blue/20 transition-all text-left"
        >
          <Settings size={16} />
          <span>{SIDEBAR.SETTINGS}</span>
        </button>

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm text-gray-300 hover:bg-accent-blue/20 transition-all text-left"
        >
          <LogOut size={16} />
          <span>{SIDEBAR.LOGOUT}</span>
        </button>
      </div>
    </aside>
  );
}
