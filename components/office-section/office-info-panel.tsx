import React from 'react';
import { OfficeState } from '@/lib/types';
import { ArrowRight } from 'lucide-react';

interface StateInfoPanelProps {
  data: OfficeState | null;
  onClose: () => void;
  selectedStateName: string | null;
}

export const StateInfoPanel: React.FC<StateInfoPanelProps> = ({ data }) => {
  if (!data) {
    return (
      
      <div className="h-full flex flex-col items-start justify-center text-slate-700 p-8">
        
        {/* Empty state can be minimal or invisible to maintain the 'plain bg' look */}
        <p className="text-xs tracking-widest uppercase opacity-40">Select a region to view details</p>
      </div>
    );
  }

  return (
    
    <div className="h-full flex flex-col justify-start animate-in fade-in slide-in-from-left-4 duration-500 md:mt-[-14%] md:ml-[-15%] relative">
      {/* 
        Spacer to align the header with the arrow from the map.
        The map arrow points to y=290 (approx 36% of height).
        We use a percentage spacer for responsive alignment.
      */}
      <div className="hidden lg:block h-[25%] min-h-[100px] shrink-0 transition-all duration-300" />

      <div className="mb-4 lg:pl-6">
        <h2 className="text-2xl font-serif text-[#9c0101] uppercase tracking-wide border-b-0 leading-none">
          {data.state}
        </h2>
        {/* Decorative underline to anchor the title */}
        <div className="h-1 w-10 bg-[#9c0101] mt-2 rounded-full opacity-80" />
      </div>

      <div className="space-y-2 lg:pl-6 overflow-y-auto custom-scrollbar pb-8 pr-2">
        {data.locations.map((loc, index) => (
          <div 
            key={index} 
            className="border border-slate-200 bg-white/80 backdrop-blur-sm p-3 hover:border-red-200 transition-all shadow-sm hover:shadow-md rounded-sm group"
          >
            <h3 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-[#9c0101] transition-colors">{loc.name}</h3>
            
            <p className="text-slate-500 mb-2 text-xs leading-relaxed">
              {loc.address}
            </p>
            
            <a 
              href={loc.map} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-[#9c0101] hover:underline tracking-wide"
            >
              View on Map 
              <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        ))}
      </div>
    </div>

  );
};