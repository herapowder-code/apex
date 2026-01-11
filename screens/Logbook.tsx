
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ServiceHistoryItem } from '../types.ts';

const Logbook: React.FC = () => {
  const navigate = useNavigate();

  const history: ServiceHistoryItem[] = [
    { title: "Ceramic Coating", sub: "Apex Garage Pro Service", date: "Oct 24, 2023", miles: "12,400", icon: "shield", verified: true },
    { title: "Annual Maintenance", sub: "Full inspection & oil change", date: "Aug 15, 2023", miles: "11,200", icon: "build", verified: false },
    { title: "Paint Protection Film", sub: "Full Front Clip Application", date: "May 12, 2023", miles: "8,500", icon: "layers", verified: true },
    { title: "Brake Fluid Flush", sub: "Motul RBF 660 Upgrade", date: "Mar 05, 2023", miles: "6,200", icon: "slow_motion_video", verified: false }
  ];

  return (
    <div className="flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark">
      <div className="sticky top-0 z-50 flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 justify-between border-b border-slate-200 dark:border-slate-800">
        <div onClick={() => navigate(-1)} className="text-slate-900 dark:text-white flex size-10 shrink-0 items-center justify-center cursor-pointer">
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">Porsche 911 GT3</h2>
          <p className="text-xs text-slate-500 dark:text-[#90a4cb] font-medium uppercase tracking-widest">Digital Logbook</p>
        </div>
        <div className="text-slate-900 dark:text-white flex size-10 shrink-0 items-center justify-center cursor-pointer">
          <span className="material-symbols-outlined">more_horiz</span>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="p-4">
          <div className="flex flex-col items-stretch justify-start rounded-xl shadow-lg bg-[#182234] border border-primary/20 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 size-32 bg-primary/20 blur-3xl rounded-full"></div>
            <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-5 px-5 relative z-10">
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-primary text-sm">stars</span>
                <p className="text-[#90a4cb] text-xs font-semibold uppercase tracking-wider">Apex Loyalty Program</p>
              </div>
              <div className="flex items-baseline gap-2">
                <p className="text-white text-3xl font-bold leading-tight tracking-tight">2,450</p>
                <p className="text-primary text-sm font-bold uppercase">Points</p>
              </div>
              <div className="flex items-center gap-3 justify-between mt-4 pt-4 border-t border-white/5">
                <p className="text-[#90a4cb] text-sm font-normal leading-normal">Total Apex Points Earned</p>
                <button className="flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary text-white text-sm font-semibold leading-normal hover:bg-primary/90 transition-colors">
                  <span className="truncate">View Rewards</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between px-4 pt-6 pb-2">
          <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">Service History</h2>
          <span className="material-symbols-outlined text-slate-400 dark:text-[#90a4cb]">filter_list</span>
        </div>

        <div className="flex flex-col space-y-px">
          {history.map((item, idx) => (
            <div key={idx} className="flex flex-col bg-background-light dark:bg-background-dark border-b border-slate-200 dark:border-slate-800/50">
              <div className="flex gap-4 px-4 py-5 justify-between items-start">
                <div className="flex items-start gap-4">
                  <div className={`flex items-center justify-center rounded-xl shrink-0 size-12 shadow-inner ${item.verified ? 'bg-primary/10 border border-primary/20 text-primary' : 'bg-slate-100 dark:bg-[#222f49] text-slate-600 dark:text-white'}`}>
                    <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                  </div>
                  <div className="flex flex-1 flex-col justify-center">
                    <div className="flex items-center gap-2 mb-0.5">
                      <p className="text-slate-900 dark:text-white text-base font-bold leading-normal">{item.title}</p>
                      {item.verified && <span className="flex items-center text-[10px] font-bold bg-green-500/10 text-green-500 px-1.5 py-0.5 rounded-sm uppercase">Verified</span>}
                    </div>
                    <p className="text-slate-500 dark:text-[#90a4cb] text-xs font-medium uppercase tracking-tight">{item.sub}</p>
                    <p className="text-slate-400 dark:text-[#90a4cb]/60 text-sm font-normal mt-1 leading-normal">{item.date} • {item.miles} miles</p>
                  </div>
                </div>
                <div className="shrink-0">
                  <button className="flex size-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-slate-100 dark:bg-[#222f49] text-slate-900 dark:text-white hover:bg-primary hover:text-white transition-all">
                    <span className="material-symbols-outlined text-xl">description</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 mt-4 flex flex-col items-center justify-center text-center">
          <div className="size-16 carbon-pattern rounded-full flex items-center justify-center mb-3 shadow-xl border border-white/10">
            <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
          </div>
          <h3 className="text-slate-900 dark:text-white text-sm font-bold uppercase tracking-widest">Official Digital Certificate</h3>
          <p className="text-slate-500 dark:text-[#90a4cb] text-xs mt-1 px-10">This logbook is a verified record of maintenance performed by authorized Apex partners.</p>
          <div className="mt-6 flex gap-3">
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-bold uppercase tracking-wider shadow-sm">
              <span className="material-symbols-outlined text-sm">ios_share</span> Export PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logbook;
