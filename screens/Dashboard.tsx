
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="flex items-center p-4 pb-2 justify-between">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
            <div 
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 border-2 border-primary" 
              style={{backgroundImage: 'url("https://picsum.photos/seed/apexuser/200")'}}
            ></div>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">Apex Garage</h2>
            <p className="text-[10px] uppercase tracking-widest text-primary font-bold">Premium Performance</p>
          </div>
          <div className="flex w-10 items-center justify-end">
            <button className="relative flex items-center justify-center rounded-lg h-10 w-10 bg-surface-dark/10 dark:bg-surface-dark text-slate-900 dark:text-white transition-colors">
              <span className="material-symbols-outlined text-[24px]">notifications</span>
              <span className="absolute top-2 right-2 flex h-2 w-2 rounded-full bg-accent-orange"></span>
            </button>
          </div>
        </div>
      </header>

      <section className="px-4 py-4">
        <div className="grid grid-cols-3 gap-3">
          <button className="flex flex-col items-center justify-center gap-2 p-3 bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-primary text-[28px]">calendar_add_on</span>
            <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-400">Book</span>
          </button>
          <button onClick={() => navigate('/advisor')} className="flex flex-col items-center justify-center gap-2 p-3 bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-primary text-[28px]">chat_bubble</span>
            <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-400">Advisor</span>
          </button>
          <Link to="/logbook" className="flex flex-col items-center justify-center gap-2 p-3 bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-primary text-[28px]">history</span>
            <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-400">History</span>
          </Link>
        </div>
      </section>

      <section className="px-4 py-2" onClick={() => navigate('/tracking')} style={{cursor: 'pointer'}}>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-slate-900 dark:text-white text-[20px] font-bold leading-tight tracking-tight">Current Service</h2>
          <span className="px-2 py-1 bg-primary/20 text-primary text-[10px] font-bold rounded uppercase tracking-wider">Live Tracking</span>
        </div>
        <div className="bg-white dark:bg-surface-dark rounded-xl p-5 shadow-lg border border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-[40px_1fr] gap-x-2">
            <div className="flex flex-col items-center gap-1 pt-1">
              <div className="text-primary flex items-center justify-center h-8 w-8 rounded-full bg-primary/10">
                <span className="material-symbols-outlined text-[20px]">check_circle</span>
              </div>
              <div className="w-[2px] bg-primary h-10"></div>
            </div>
            <div className="flex flex-1 flex-col pb-6">
              <p className="text-slate-900 dark:text-white text-base font-semibold">Inspección Inicial</p>
              <p className="text-slate-500 dark:text-[#90a4cb] text-sm">Completado hoy a las 09:30 AM</p>
            </div>
            
            <div className="flex flex-col items-center gap-1">
              <div className="text-primary flex items-center justify-center h-8 w-8 rounded-full bg-primary animate-pulse shadow-[0_0_15px_rgba(13,89,242,0.5)]">
                <span className="material-symbols-outlined text-[20px] text-white">build</span>
              </div>
              <div className="w-[2px] bg-slate-200 dark:bg-slate-700 h-10"></div>
            </div>
            <div className="flex flex-1 flex-col pb-6">
              <div className="flex items-center gap-2">
                <p className="text-slate-900 dark:text-white text-base font-semibold">Servicio en Progreso</p>
                <span className="flex h-2 w-2 rounded-full bg-primary animate-ping"></span>
              </div>
              <p className="text-primary text-sm font-medium">En curso - Cambio de fluidos</p>
            </div>

            <div className="flex flex-col items-center gap-1 pb-1">
              <div className="text-slate-300 dark:text-slate-600 flex items-center justify-center h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-800/50">
                <span className="material-symbols-outlined text-[20px]">verified</span>
              </div>
            </div>
            <div className="flex flex-1 flex-col">
              <p className="text-slate-400 dark:text-slate-500 text-base font-medium">Control de Calidad</p>
              <p className="text-slate-400 dark:text-slate-500 text-sm">Pendiente de finalización</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-6">
        <h2 className="text-slate-900 dark:text-white text-[20px] font-bold leading-tight tracking-tight mb-4 px-1">My Garage</h2>
        <div className="group relative flex flex-col overflow-hidden rounded-xl bg-white dark:bg-surface-dark shadow-xl border border-slate-200 dark:border-slate-800">
          <div className="relative w-full aspect-[16/9] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
            <div 
              className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-700 group-hover:scale-105" 
              style={{backgroundImage: 'url("https://picsum.photos/seed/porsche/800/450")'}}
            ></div>
            <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-accent-orange/90 backdrop-blur-sm text-white text-[10px] font-black rounded-full uppercase tracking-widest shadow-lg">Service Due</div>
          </div>
          <div className="flex flex-col p-5 gap-4">
            <div className="flex flex-col gap-0.5">
              <p className="text-primary text-[10px] font-black uppercase tracking-[0.2em]">Primary Vehicle</p>
              <h3 className="text-slate-900 dark:text-white text-2xl font-black italic tracking-tighter">PORSCHE 911 CARRERA S</h3>
            </div>
            <div className="flex items-center justify-between py-2 border-y border-slate-100 dark:border-slate-800/50">
              <div className="flex flex-col">
                <p className="text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase">Current Mileage</p>
                <p className="text-slate-900 dark:text-white font-mono text-lg font-bold">12,400 <span className="text-sm font-normal text-slate-500">mi</span></p>
              </div>
              <div className="h-8 w-[1px] bg-slate-100 dark:bg-slate-800/50"></div>
              <div className="flex flex-col text-right">
                <p className="text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase">Last Service</p>
                <p className="text-slate-900 dark:text-white text-sm font-semibold">Oct 12, 2023</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-accent-orange/10 dark:bg-accent-orange/5 rounded-lg border border-accent-orange/20">
              <span className="material-symbols-outlined text-accent-orange text-[20px]">warning</span>
              <div className="flex flex-col">
                <p className="text-accent-orange text-xs font-bold leading-none">Maintenance Alert</p>
                <p className="text-slate-600 dark:text-slate-400 text-[11px] mt-1 font-medium leading-tight">Next maintenance: 450 miles (Oil Change & Brake Inspection)</p>
              </div>
            </div>
            <button 
              onClick={() => navigate('/logbook')} 
              className="w-full flex items-center justify-center gap-2 rounded-lg h-12 bg-primary text-white text-sm font-bold uppercase tracking-widest shadow-[0_4px_15px_rgba(13,89,242,0.3)] active:scale-[0.98] transition-all"
            >
              <span>View Health Report</span>
              <span className="material-symbols-outlined text-[18px]">query_stats</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
