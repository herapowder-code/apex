
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tracking: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col bg-background-light dark:bg-background-dark">
      <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between z-10 sticky top-0">
        <div onClick={() => navigate(-1)} className="text-slate-800 dark:text-white flex size-12 shrink-0 items-center justify-start cursor-pointer">
          <span className="material-symbols-outlined">chevron_left</span>
        </div>
        <div className="flex flex-col items-center flex-1">
          <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">Porsche 911 GT3</h2>
          <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Live from Bay 4</span>
        </div>
        <div className="flex w-12 items-center justify-end">
          <button onClick={() => navigate('/advisor')} className="flex cursor-pointer items-center justify-center rounded-full h-10 w-10 bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-white">
            <span className="material-symbols-outlined text-[20px]">chat_bubble</span>
          </button>
        </div>
      </div>
      
      <div className="px-4 pt-6">
        <div className="flex items-center gap-2 mb-1">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <p className="text-primary text-xs font-bold uppercase tracking-widest">Active Service</p>
        </div>
        <h2 className="text-slate-900 dark:text-white tracking-tight text-3xl font-extrabold leading-tight">Live Service Tracking</h2>
        <p className="text-slate-500 dark:text-[#90a4cb] text-base font-medium mt-2">Current: <span className="text-slate-900 dark:text-white font-bold">Stage 3 - Parts Installation</span></p>
      </div>

      <div className="mt-8 px-4">
        <div className="grid grid-cols-[40px_1fr] gap-x-2">
          {/* Step 1 */}
          <div className="flex flex-col items-center gap-1">
            <div className="bg-primary text-white rounded-full p-1 flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px]">check_circle</span>
            </div>
            <div className="w-[2px] bg-primary/30 h-10"></div>
          </div>
          <div className="flex flex-1 flex-col pb-6">
            <p className="text-slate-900 dark:text-white text-base font-semibold leading-normal">Vehicle Intake & Inspection</p>
            <p className="text-slate-500 dark:text-[#90a4cb] text-sm font-normal">Completed at 09:30 AM</p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center gap-1">
            <div className="bg-primary text-white rounded-full p-1 flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px]">check_circle</span>
            </div>
            <div className="w-[2px] bg-primary h-10"></div>
          </div>
          <div className="flex flex-1 flex-col pb-6">
            <p className="text-slate-900 dark:text-white text-base font-semibold leading-normal">Diagnostic Scan</p>
            <p className="text-slate-500 dark:text-[#90a4cb] text-sm font-normal">Completed at 10:15 AM</p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center gap-1">
            <div className="bg-primary text-white rounded-full p-1 flex items-center justify-center pulse-blue">
              <span className="material-symbols-outlined text-[18px]">build</span>
            </div>
            <div className="w-[2px] bg-slate-300 dark:bg-[#314368] h-10"></div>
          </div>
          <div className="flex flex-1 flex-col pb-6">
            <div className="flex items-center gap-2">
              <p className="text-primary text-base font-bold leading-normal">Part Replacement: Brake Pads</p>
              <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">In Progress</span>
            </div>
            <p className="text-slate-500 dark:text-[#90a4cb] text-sm font-normal">Estimated completion in 15 mins</p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center gap-1">
            <div className="bg-slate-200 dark:bg-[#314368] text-slate-400 dark:text-slate-500 rounded-full p-1 flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px]">schedule</span>
            </div>
          </div>
          <div className="flex flex-1 flex-col">
            <p className="text-slate-400 dark:text-slate-500 text-base font-medium leading-normal">Quality Assurance Road Test</p>
            <p className="text-slate-400 dark:text-slate-500/50 text-sm font-normal">Pending</p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex items-center justify-between px-4 mb-4">
          <h3 className="text-slate-900 dark:text-white text-xl font-bold tracking-tight">Visual Evidence</h3>
          <span className="text-primary text-xs font-bold uppercase cursor-pointer">View Gallery</span>
        </div>
        <div className="flex gap-4 overflow-x-auto px-4 snap-x pb-4 custom-scrollbar">
          <div className="flex-none w-[280px] snap-start">
            <div className="relative aspect-video rounded-xl overflow-hidden glass">
              <img className="w-full h-full object-cover opacity-90" src="https://picsum.photos/seed/brakes/560/315"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3">
                <span className="bg-black/50 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded-md border border-white/10">BEFORE: OEM BRAKE PAD</span>
              </div>
            </div>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 font-medium px-1 leading-tight">Current thickness: 2mm (Critical). Safety hazard identified during visual inspection.</p>
          </div>
          <div className="flex-none w-[280px] snap-start">
            <div className="relative aspect-video rounded-xl overflow-hidden glass">
              <img className="w-full h-full object-cover opacity-90" src="https://picsum.photos/seed/unboxing/560/315"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-primary/90 p-3 rounded-full text-white shadow-lg"><span className="material-symbols-outlined">play_arrow</span></div>
              </div>
              <div className="absolute bottom-3 left-3">
                <span className="bg-primary/80 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded-md border border-white/10 font-bold uppercase">Parts Unboxing</span>
              </div>
            </div>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 font-medium px-1 leading-tight">Installation of Akebono Euro Ceramic Ultra-Premium Brake Pads.</p>
          </div>
        </div>
      </div>

      <div className="px-4 mt-6">
        <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-xl flex gap-3">
          <span className="material-symbols-outlined text-amber-500">warning</span>
          <div>
            <h4 className="text-amber-500 text-sm font-bold uppercase tracking-wider">New Finding Identified</h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm mt-1 leading-normal">Cabin air filter is heavily clogged. Recommended replacement to improve AC performance and air quality.</p>
            <p className="text-slate-900 dark:text-white font-bold text-sm mt-2">Cost: +$45.00</p>
          </div>
        </div>
      </div>

      <div className="mt-10 px-6 pb-10">
        <button className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-bold text-base shadow-xl shadow-primary/20 flex items-center justify-center gap-3 active:scale-[0.98] transition-all">
          <span>View & Approve Additional Work</span>
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default Tracking;
