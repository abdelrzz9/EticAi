import { LayoutDashboard, Users, Plus, Settings, LogOut } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { APP, ROUTES } from '../../core/constants/app';
import { cn } from '../../core/utils/cn';
import logoImage from '../../assets/logo.png';

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: ROUTES.DASHBOARD },
  { id: 'client-log', label: 'Client Log', icon: Users, path: ROUTES.CLIENT_LOG },
  { id: 'ai-log', label: 'AI Log', icon: Plus, path: ROUTES.AI_LOG },
];

export function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="h-full w-full bg-[#0a0a2e] text-white flex flex-col overflow-hidden">
      <div className="px-5 py-[19px] border-b border-blue-900/30">
        <div className="flex items-center gap-2">
          <img src={logoImage} alt={`${APP.NAME} Logo`} className="w-8 h-8 object-contain" />
          <span className="text-xl font-semibold ml-1">{APP.NAME}</span>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <div className="flex flex-col gap-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.id}
                onClick={() => navigate(item.path)}
                className={cn(
                  'w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-left transition-all duration-200',
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-blue-600/20',
                )}
              >
                <Icon size={16} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      <div className="p-4 border-t border-blue-900/30 flex flex-col gap-3">
        <div className="bg-blue-600 rounded-lg p-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-xs font-semibold">
            {APP.USER.INITIALS}
          </div>
          <span className="text-sm font-medium">{APP.USER.NAME}</span>
        </div>

        <button
          onClick={() => navigate(ROUTES.SETTINGS)}
          className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm text-gray-300 hover:bg-blue-600/20 transition-all text-left"
        >
          <Settings size={16} />
          <span>Settings</span>
        </button>

        <button
          onClick={() => {
            sessionStorage.clear();
            navigate(ROUTES.LOGIN);
          }}
          className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm text-gray-300 hover:bg-blue-600/20 transition-all text-left"
        >
          <LogOut size={16} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
