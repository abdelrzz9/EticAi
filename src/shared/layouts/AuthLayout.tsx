import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { SidebarContext } from '../../shared/context/SidebarContext';
import { ProtectedRoute } from '../../shared/components/ProtectedRoute';
import { APP } from '../../core/constants/app';

export function AuthLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <SidebarContext.Provider
      value={{
        isOpen: sidebarOpen,
        toggle: () => setSidebarOpen((v) => !v),
        close: () => setSidebarOpen(false),
      }}
    >
      <ProtectedRoute>
        <div className="h-screen w-screen overflow-hidden bg-bg-dark">
          <div className="flex h-full">
            <div className="hidden md:block w-sidebar flex-shrink-0 h-full">
              <Sidebar />
            </div>

            {sidebarOpen && (
              <>
                <div
                  className="fixed inset-0 bg-black/50 z-40 md:hidden"
                  onClick={() => setSidebarOpen(false)}
                />
                <div className="fixed left-0 top-0 h-full w-[260px] z-50 md:hidden animate-[slideInRight_0.2s_ease-out]">
                  <Sidebar />
                </div>
              </>
            )}

            <div className="flex-1 flex flex-col min-w-0">
              <Header title={APP.DEFAULT_TITLE} />
              <main className="flex-1 overflow-auto bg-gradient-to-br from-[#0f1129] to-[#060714]">
                <Outlet />
              </main>
            </div>
          </div>
        </div>
      </ProtectedRoute>
    </SidebarContext.Provider>
  );
}
