import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

export function AuthLayout() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-[#090a1f]">
      <div className="flex h-full">
        {/* Sidebar */}
        <div className="hidden md:block w-[210px] flex-shrink-0 h-full">
          <Sidebar />
        </div>

        {/* Mobile sidebar toggle could go here */}
        <div className="flex-1 flex flex-col min-w-0">
          <Header title="ChatBot" />
          <main className="flex-1 overflow-auto bg-gradient-to-br from-[#0f1129] to-[#060714]">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
