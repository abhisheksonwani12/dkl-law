'use client';

import React, { useState, useCallback } from 'react';
import { IndiaMap } from '@/components/office-section/india-map';
import { StateInfoPanel } from '@/components/office-section/office-info-panel';
import { offices } from '@/lib/constants';
import { OfficeState } from '@/lib/types';

const Office: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [displayData, setDisplayData] = useState<OfficeState | null>(null);
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map');

  // Normalize state name for lookup
  const getOfficeData = (stateName: string): OfficeState | null => {
    const key = Object.keys(offices).find(k => {
      
      // Handle "NCT of Delhi" vs "Delhi"
      if (k === 'delhi' && stateName.toLowerCase().includes('delhi')) return true;
      return k === stateName.toLowerCase();
    });
    return key ? offices[key] : null;
  };

  const handleStateClick = useCallback((stateName: string) => {
    const data = getOfficeData(stateName);
    if (!data) return;

    // Force reset first so projection + arrows always re-trigger
    setSelectedState(null);
    setDisplayData(null);

    // Next frame, set the actual state
    requestAnimationFrame(() => {
      setSelectedState(data.state);
      setDisplayData(data);
    });
  }, []);

  // Hover only affects map highlighting, not the data panel
  const handleStateHover = useCallback((stateName: string | null) => {
    
    // We intentionally do not setDisplayData here anymore
    // Data is only revealed on click
    
  }, []);

  const handleClosePanel = () => {
    setSelectedState(null);
    setDisplayData(null);
  };

  const activeStates = Object.keys(offices);

  return (
    <div id="our-offices" className="min-h-auto lg:min-h-screen bg-[url('/bg-office.png')] bg-cover bg-center bg-no-repeat text-slate-900 flex flex-col font-sans overflow-hidden mt-14">
      
      <div className="flex items-center w-2/3 md:w-1/3 max-w-[500px] mb-4 mt-10 relative">
        <div className="flex-1 h-0.5 bg-[#9c0101]" />
        <svg className="mx-2" width="18" height="20" viewBox="0 0 18 20">
          <circle cx="7" cy="10" r="2.5" fill="#9c0101" />
          <path d="M11 10H17" stroke="#9c0101" strokeWidth="2" strokeLinecap="round" />
          <path d="M15 8l2 2-2 2" stroke="#9c0101" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="uppercase text-[12px] sm:text-[14px] ml-2 tracking-[0.19em] text-[#9c0101] font-semibold whitespace-nowrap" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
          Our Offices
        </span>
      </div>
      
      <h2 className="text-[1.6rem] sm:text-[2.2rem] md:text-[2.5rem] leading-[1.13] font-serif text-[#9c0101] font-normal uppercase ml-6 md:ml-16 p-0" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
        OUR OFFICES
      </h2>

      {/* Responsive View Mode Selector for Mobile */}
      <div className="flex md:hidden justify-center my-4 font-sans px-6">
        <div className="flex bg-slate-100/80 backdrop-blur-xs rounded-lg p-1 border border-slate-200 w-full max-w-[320px] z-10">
          <button
            onClick={() => setViewMode('map')}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all ${
              viewMode === 'map'
                ? 'bg-white text-[#9c0101] shadow-xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Interactive Map
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all ${
              viewMode === 'list'
                ? 'bg-white text-[#9c0101] shadow-xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Office List
          </button>
        </div>
      </div>
      
      {/* Main blue border box */}
      <div className={`px-6 sm:px-8 md:px-10 py-6 sm:py-8 w-full max-w-[500px] ml-0 md:ml-16 mb-2 md:mb-6 ${viewMode === 'list' ? 'hidden md:block' : ''}`}>
        {/* Slash Shortcuts */}
        <div className="mt-1 ml-0 md:-ml-5 font-serif font-medium select-none text-[16px] tracking-wide">
          
          <span
            onClick={() => handleStateClick('Maharashtra')}
            className={`cursor-pointer transition-colors duration-200 z-200 ${
              selectedState === 'Maharashtra'
                ? 'text-[#9c0101]'
                : 'text-[#9c0101]/70 hover:text-[#9c0101]'
            }`}
          >
            A. Mumbai, Maharashtra
          </span>

          <span
            onClick={() => handleStateClick('Delhi')}
            className={`cursor-pointer transition-colors duration-200 ${
              selectedState === 'Delhi' || selectedState === 'NCT of Delhi'
                ? 'text-[#9c0101]'
                : 'text-[#9c0101]/70 hover:text-[#9c0101]'
            }`}
          >
            <br />B. New Delhi, NCT of Delhi, and 
          </span>

          <span
            onClick={() => handleStateClick('Chhattisgarh')}
            className={`cursor-pointer transition-colors duration-200 ${
              selectedState === 'Chhattisgarh'
                ? 'text-[#9c0101]'
                : 'text-[#9c0101]/70 hover:text-[#9c0101]'
            }`}
          >
            <br />C. Raipur, Chhattisgarh
          </span>

        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-8">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:h-[calc(100vh-8rem)] lg:min-h-[600px] items-center ${viewMode === 'list' ? 'hidden md:grid' : ''}`}>
          
          {/* Map Section */}
          <div className="lg:col-span-8 xl:col-span-9 flex flex-col items-center justify-center relative">
              
              {/* Subtle warm glow behind map */}
              <div className="absolute inset-0 bg-red-500/5 blur-[120px] rounded-full pointer-events-none" />
                <IndiaMap 
                  onStateClick={handleStateClick} 
                  onStateHover={handleStateHover}
                  selectedStateName={selectedState} 
                  activeStateNames={activeStates}
                />
          </div>

          {/* Info Panel Section - Desktop Only */}
          <div className="hidden lg:flex w-full lg:col-span-4 xl:col-span-3 h-full flex-col justify-start z-10">
            <StateInfoPanel 
              data={displayData} 
              onClose={handleClosePanel}
              selectedStateName={selectedState || (displayData ? displayData.state : null)}
            />
          </div>

        </div>

        {/* Mobile List View */}
        {viewMode === 'list' && (
          <div className="md:hidden px-6 pb-12 space-y-6">
            {Object.values(offices).map((officeState) => (
              <div key={officeState.state} className="border border-slate-200 bg-white/90 backdrop-blur-xs p-4 shadow-sm rounded-sm">
                <h3 className="text-[#9c0101] font-serif text-lg font-bold border-b border-red-100 pb-1 mb-3 uppercase">
                  {officeState.state}
                </h3>
                <div className="space-y-4">
                  {officeState.locations.map((loc, idx) => (
                    <div key={idx} className="group">
                      <h4 className="text-sm font-bold text-slate-800 group-hover:text-[#9c0101] transition-colors">{loc.name}</h4>
                      <p className="text-slate-500 text-xs mt-1 leading-relaxed">{loc.address}</p>
                      <a 
                        href={loc.map} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#9c0101] hover:underline mt-2"
                      >
                        View on Map &rarr;
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Mobile Drawer (Bottom Sheet) Overlay */}
      {displayData && (
        <div className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-xs z-[999] flex flex-col justify-end transition-opacity duration-300">
          <div className="absolute inset-0" onClick={handleClosePanel} />
          <div className="relative w-full max-h-[75vh] bg-white rounded-t-2xl shadow-2xl p-6 pb-8 border-t border-slate-200 z-10 animate-in slide-in-from-bottom duration-300 flex flex-col">
            
            {/* Grabber Handle */}
            <div className="flex justify-center mb-3">
              <div className="w-12 h-1 bg-slate-300 rounded-full cursor-pointer" onClick={handleClosePanel} />
            </div>
            
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl font-serif font-bold text-[#9c0101] uppercase leading-none">{displayData.state}</h3>
                <div className="h-1 w-8 bg-[#9c0101] mt-2 rounded-full opacity-80" />
              </div>
              <button 
                onClick={handleClosePanel}
                className="text-gray-500 hover:text-black font-semibold text-2xl leading-none w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200"
                aria-label="Close"
              >
                &times;
              </button>
            </div>

            <div className="space-y-4 overflow-y-auto pr-1">
              {displayData.locations.map((loc, index) => (
                <div 
                  key={index} 
                  className="border border-slate-200 bg-slate-50/50 p-4 rounded-md shadow-xs hover:border-red-200 transition-all"
                >
                  <h4 className="text-sm font-bold text-slate-900 mb-1">{loc.name}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed mb-3">
                    {loc.address}
                  </p>
                  <a 
                    href={loc.map} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9c0101] hover:underline uppercase tracking-wide"
                  >
                    View on Map &rarr;
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Office;