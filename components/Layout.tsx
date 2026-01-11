
import React from 'react';
import { Link } from 'react-router-dom';
import { TabType } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: TabType;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab }) => {
  return (
    <div className="relative min-h-screen max-w-md mx-auto shadow-2xl bg-background-light dark:bg-background-dark overflow-x-hidden">
      <div className="pb-24">
        {children}
      </div>
      
      <nav className="fixed bottom-0 left-0 right-0 z-50 px-6 pb-6 pt-3 bg-white/80 dark:bg-background-dark/80 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 max-w-md mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className={`flex flex-col items-center gap-1 ${activeTab === 'home' ? 'text-primary' : 'text-slate-400 dark:text-slate-600'}`}>
            <span className={`material-symbols-outlined text-[28px] ${activeTab === 'home' ? 'fill-1' : ''}`}>dashboard</span>
            <span className="text-[10px] font-bold uppercase tracking-tighter">Home</span>
          </Link>
          <Link to="/logbook" className={`flex flex-col items-center gap-1 ${activeTab === 'logbook' ? 'text-primary' : 'text-slate-400 dark:text-slate-600'}`}>
            <span className={`material-symbols-outlined text-[28px] ${activeTab === 'logbook' ? 'fill-1' : ''}`}>garage</span>
            <span className="text-[10px] font-bold uppercase tracking-tighter">Garage</span>
          </Link>
          
          <div className="relative -top-8">
            <button className="flex items-center justify-center size-14 rounded-full bg-primary text-white shadow-lg shadow-primary/40 border-4 border-background-light dark:border-background-dark active:scale-95 transition-transform">
              <span className="material-symbols-outlined text-[32px]">add</span>
            </button>
          </div>

          <Link to="/tracking" className={`flex flex-col items-center gap-1 ${activeTab === 'tracking' ? 'text-primary' : 'text-slate-400 dark:text-slate-600'}`}>
            <span className={`material-symbols-outlined text-[28px] ${activeTab === 'tracking' ? 'fill-1' : ''}`}>receipt_long</span>
            <span className="text-[10px] font-bold uppercase tracking-tighter">Services</span>
          </Link>
          <Link to="/advisor" className={`flex flex-col items-center gap-1 ${activeTab === 'advisor' ? 'text-primary' : 'text-slate-400 dark:text-slate-600'}`}>
            <span className={`material-symbols-outlined text-[28px] ${activeTab === 'advisor' ? 'fill-1' : ''}`}>smart_toy</span>
            <span className="text-[10px] font-bold uppercase tracking-tighter">Advisor</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Layout;
