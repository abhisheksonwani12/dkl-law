import React, { useEffect, useRef, useState, useMemo, useId, Fragment } from 'react';
import * as d3 from 'd3';
import { GeoJsonResponse } from '@/lib/types';
import { Loader2 } from 'lucide-react';
import { offices } from '@/lib/constants';

interface IndiaMapProps {
  onStateHover: (stateName: string | null) => void;
  onStateClick: (stateName: string) => void;
  activeStateNames: string[];
  selectedStateName: string | null;
  highlightedRegions?: string[];
}

// Helper for consistent name matching
const normalizeName = (name: string) => name.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]/g, '');

const CITY_LOCATIONS = [
  { name: 'Mumbai', stateKey: 'maharashtra', coords: [72.8777, 19.0760] as [number, number] },
  { name: 'New Delhi', stateKey: 'delhi', coords: [77.1025, 28.7041] as [number, number] },
  { name: 'Raipur', stateKey: 'chhattisgarh', coords: [81.6296, 21.2514] as [number, number] }
];

interface CurvedArrowProps {
  from: [number, number];
  to: [number, number];
  control: [number, number];
  delay?: number;
}

// Sub-component for the animated arrow
const CurvedArrow: React.FC<CurvedArrowProps> = ({ 
  from, 
  to, 
  control,
  delay = 0
}) => {
  const id = useId();
  const pathRef = useRef<SVGPathElement>(null);
  const [length, setLength] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const pathD = `M ${from[0]},${from[1]} Q ${control[0]},${control[1]} ${to[0]},${to[1]}`;
  const arrowHeadId = `arrowhead-${id.replace(/:/g, '')}`;
  const maskId = `arrow-mask-${id.replace(/:/g, '')}`;

  // Update length whenever geometry changes (e.g., zoom/pan)
  useEffect(() => {
    if (pathRef.current) {
      setLength(pathRef.current.getTotalLength());
    }
  }, [pathD]);

  // Trigger animation only on mount (when the key changes)
  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 50 + delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <g className="pointer-events-none">
      <defs>
        {/* Define unique marker for this arrow instance to avoid conflicts */}
        <marker 
          id={arrowHeadId} 
          markerWidth="6" 
          markerHeight="4.2" 
          refX="5" 
          refY="2.1" 
          orient="auto"
        >
          <polygon points="0 0, 6 2.1, 0 4.2" fill="#be123c" />
        </marker>

        {/* 
          Mask for the "draw" animation.
          IMPORTANT: maskUnits="userSpaceOnUse" is critical. 
          Default objectBoundingBox clips the marker if it extends outside the path's bbox.
        */}
        <mask id={maskId} maskUnits="userSpaceOnUse">
          <path
            d={pathD}
            fill="none"
            stroke="white"
            strokeWidth="30" // Increased width to ensure it covers the marker
            strokeDasharray={length}
            strokeDashoffset={isVisible ? 0 : length}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 0.4s ease-out' }}
          />
        </mask>
      </defs>

      {/* Starting Dot */}
      <circle 
        cx={from[0]} 
        cy={from[1]} 
        r={3} 
        fill="#be123c" 
        className={`transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`} 
      />

      {/* The Arrow Line */}
      <path
        ref={pathRef}
        d={pathD}
        fill="none"
        stroke="#be123c"
        strokeWidth="2"
        strokeDasharray="4 2"
        markerEnd={`url(#${arrowHeadId})`}
        mask={`url(#${maskId})`}
        className="opacity-80 drop-shadow-sm"
      />
    </g>
  );
};

export const IndiaMap: React.FC<IndiaMapProps> = ({ 
  onStateHover, 
  onStateClick, 
  activeStateNames,
  selectedStateName,
  highlightedRegions = [] 
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [geoData, setGeoData] = useState<GeoJsonResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{x: number, y: number, text: string} | null>(null);
  const [hoveredPin, setHoveredPin] = useState<string | null>(null);
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  
  const [internalHoveredState, setInternalHoveredState] = useState<string | null>(null);
  
  // Track if mouse is over the map container to trigger the "office reveal" effect
  const [isMapHovered, setIsMapHovered] = useState(false);

  // Monitor screen size for arrow direction
  useEffect(() => {
    const checkScreen = () => setIsLargeScreen(window.innerWidth >= 1024);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const isActiveState = (name: string) => {
    if (!name) return false;
    const normalized = normalizeName(name);
    return activeStateNames.some(active => normalizeName(active) === normalized);
  };

  const isHighlightedRegion = (name: string) => {
    if (!name || highlightedRegions.length === 0) return false;
    const normalized = normalizeName(name);
    
    const explicitMatch = highlightedRegions.some(region => normalizeName(region) === normalized);
    if (explicitMatch) return true;

    // Fallback logic for maps where Ladakh is part of J&K
    const highlightingLadakh = highlightedRegions.some(r => normalizeName(r) === 'ladakh');
    if (highlightingLadakh && normalized === 'jammuandkashmir') {
        return true;
    }

    return false;
  };

  useEffect(() => {
    const fetchMapData = async () => {
      try {
        const response = await fetch('https://gist.githubusercontent.com/jbrobst/56c13bbbf9d97d187fea01ca62ea5112/raw/e388c4cae20aa53cb5090210a42ebb9b765c0a36/india_states.geojson');

        if (!response.ok) throw new Error('Failed to load map data');
        
        const indiaData = await response.json();
        setGeoData(indiaData);

      } catch (err) {
        console.error("Map loading error:", err);
        setError("Failed to load map geometry. Please try refreshing.");
      } finally {
        setLoading(false);
      }
    };

    fetchMapData();
  }, []);

  const { pathGenerator, projection } = useMemo(() => {
    if (!geoData) return { pathGenerator: null, projection: null };
    
    const proj = d3.geoMercator();
    // Scale down map and align left to prevent clipping of projection
    proj.fitExtent([[20, 50], [550, 750]], geoData as any);
    
    const pathGen = d3.geoPath().projection(proj);
    return { pathGenerator: pathGen, projection: proj };
  }, [geoData]);

  // Sort features: Selected > Active (Offices) > Others
  // This ensures uplifted/active states render on top of inactive ones.
  const sortedFeatures = useMemo(() => {
    if (!geoData) return [];
    
    return [...geoData.features].sort((a, b) => {
      const getName = (f: any) => f.properties.ST_NM || f.properties.st_nm || f.properties.NAME_1 || f.properties.name;
      const nameA = normalizeName(getName(a));
      const nameB = normalizeName(getName(b));
      
      const target = selectedStateName ? normalizeName(selectedStateName) : '';
      
      // Check if active (has office)
      const isActiveA = activeStateNames.some(active => normalizeName(active) === nameA);
      const isActiveB = activeStateNames.some(active => normalizeName(active) === nameB);

      // Selected always first priority (renders last)
      if (nameA === target) return 1;
      if (nameB === target) return -1;
      
      // Active states second priority
      if (isActiveA && !isActiveB) return 1;
      if (!isActiveA && isActiveB) return -1;
      
      return 0;
    });
  }, [geoData, selectedStateName, activeStateNames]);

  // Calculate selected feature centroid or specific city location for the arrow
  const selectedFeatureData = useMemo(() => {
    if (!geoData || !selectedStateName || !pathGenerator || !projection) return null;
    
    const targetName = normalizeName(selectedStateName);
    const feature = geoData.features.find(f => {
      const name = f.properties.ST_NM || f.properties.st_nm || f.properties.NAME_1 || f.properties.name;
      return normalizeName(name) === targetName;
    });

    if (!feature) return null;

    // Default to centroid
    let [cx, cy] = pathGenerator.centroid(feature as any);

    // Override with specific city coordinates for office locations
    const cityCoord = CITY_LOCATIONS.find(c => normalizeName(c.stateKey) === targetName);
    if (cityCoord) {
      const projected = projection(cityCoord.coords);
      if (projected) {
        [cx, cy] = projected;
      }
    }

    // Determine number of arrows based on locations
    let locationsCount = 1;
    // We can find the key in offices matching the targetName
    const officeKey = Object.keys(offices).find(k => k === targetName || (k === 'delhi' && targetName.includes('delhi')));
    if (officeKey) {
        locationsCount = offices[officeKey].locations.length;
    }

    return { feature, centroid: [cx, cy], locationsCount };
  }, [geoData, selectedStateName, pathGenerator, projection]);

  // Calculate the "Zoom Projection" effect geometry
  const projectionEffect = useMemo(() => {
    if (!selectedFeatureData || !pathGenerator || !selectedStateName || !projection) return null;

    const { feature } = selectedFeatureData;
    
    // 1. Calculate bounds of the original feature
    const bounds = pathGenerator.bounds(feature as any);
    const [[x0, y0], [x1, y1]] = bounds;
    const width = x1 - x0;
    const height = y1 - y0;
    const cx = (x0 + x1) / 2;
    const cy = (y0 + y1) / 2;

    // 2. Determine target position
    // User requested "little upper and on more right", but we need to fit in view.
    // Map is now constrained to x=550 max.
    const targetSize = 220; 
    const targetCx = 680; // Safe right position
    const targetCy = 250; // Moved Up

    // Determine direction relative to the target
    // If target is to the left of the source (cx > targetCx), we project Left.
    const isProjectingLeft = cx > targetCx;

    // Calculate scale to fit target box
    const scale = Math.min(targetSize / width, targetSize / height);

    // Transform string for the <g>
    const transform = `translate(${targetCx}, ${targetCy}) scale(${scale}) translate(${-cx}, ${-cy})`;

    // 3. Beam Path Calculation
    const project = (x: number, y: number) => [
        (x - cx) * scale + targetCx,
        (y - cy) * scale + targetCy
    ];

    const [px0, py0] = project(x0, y0); // Projected Left-Top
    const [px1, py1] = project(x1, y1); // Projected Right-Bottom
    
    // Calculate inset target points to bury the beam tip inside the state shape
    const pWidth = px1 - px0;
    const pHeight = py1 - py0;
    
    const insetX = pWidth * 0.25; // Bury 25% inside horizontally
    const insetY = pHeight * 0.20; // Bury 20% inside vertically

    // Use the centroid or city location as the source of the beam
    // selectedFeatureData.centroid contains [cx, cy] of the feature or city
    const [sourceX, sourceY] = selectedFeatureData.centroid;

    let beamPath = "";
    if (isProjectingLeft) {
        // Target is Left of Source.
        const tx = px1 - insetX;
        const tyTop = py0 + insetY;
        const tyBot = py1 - insetY;
        
        // Triangle from Source Point to Target Edge
        beamPath = `M ${sourceX},${sourceY} L ${tx},${tyTop} L ${tx},${tyBot} Z`;
    } else {
        // Target is Right of Source.
        const tx = px0 + insetX;
        const tyTop = py0 + insetY;
        const tyBot = py1 - insetY;
        
        // Triangle from Source Point to Target Edge
        beamPath = `M ${sourceX},${sourceY} L ${tx},${tyTop} L ${tx},${tyBot} Z`;
    }

    // 4. Calculate Projected City Locations
    const projectedCities = CITY_LOCATIONS
        .filter(c => normalizeName(c.stateKey) === normalizeName(selectedStateName))
        .map(c => {
            const coords = projection(c.coords);
            if (!coords) return null;
            const [ox, oy] = coords;
            const [px, py] = project(ox, oy);
            return { ...c, px, py };
        })
        .filter(Boolean) as (typeof CITY_LOCATIONS[0] & { px: number, py: number })[];

    // 5. Get Office Locations for Arrows
    const officeKey = Object.keys(offices).find(k => k === normalizeName(selectedStateName) || (k === 'delhi' && normalizeName(selectedStateName).includes('delhi')));
    const officeLocations = officeKey ? offices[officeKey].locations : [];

    return { transform, beamPath, feature, isProjectingLeft, projectedCities, officeLocations };
  }, [selectedFeatureData, pathGenerator, selectedStateName, projection]);

  const handleMouseEnter = (event: React.MouseEvent, stateName: string) => {
    if (!stateName) return;
    setInternalHoveredState(stateName);
    // Tooltip logic for states
    setTooltip({ x: event.clientX, y: event.clientY, text: stateName });
    if (isActiveState(stateName)) {
      onStateHover(stateName);
    }
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (tooltip) {
      setTooltip(prev => prev ? ({ ...prev, x: event.clientX, y: event.clientY }) : null);
    }
  };

  const handleMouseLeave = () => {
    setInternalHoveredState(null);
    setTooltip(null);
    onStateHover(null);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-slate-400">
        <Loader2 className="w-10 h-10 animate-spin mb-4 text-slate-500" />
        <p>Loading Map...</p>
      </div>
    );
  }

  if (error) return <div className="text-red-500 text-center p-8">{error}</div>;

  return (
    <div 
      className="w-full h-full flex flex-col items-center relative group md:mt-[-20%]"
      onMouseEnter={() => setIsMapHovered(true)}
      onMouseLeave={() => setIsMapHovered(false)}
    >
      <div className="w-full h-full relative aspect-square max-w-[800px] max-h-[800px]">
        
        <svg
          ref={svgRef}
          viewBox="0 0 800 800"
          className="w-full h-full"
          style={{ overflow: 'visible' }}
        >
          <defs>
              {/* Beautified Light Mode Filters */}
              <filter id="soft-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur"/>
                  <feFlood floodColor="#be123c" floodOpacity="0.2" result="color"/>
                  <feComposite in="color" in2="blur" operator="in" result="shadow"/>
                  <feComposite in="SourceGraphic" in2="shadow" operator="over"/>
              </filter>

              <filter id="inner-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur"/>
                  <feFlood floodColor="#ffffff" floodOpacity="0.5" result="color"/>
                  <feComposite in="color" in2="blur" operator="in" result="shadow"/>
                  <feComposite in="SourceGraphic" in2="shadow" operator="over"/>
              </filter>
              
              {/* Stronger Glow for Sparkles/Triangle */}
              <filter id="bright-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" result="blur"/>
                  <feFlood floodColor="#fbbf24" floodOpacity="1" result="color"/>
                  <feComposite in="color" in2="blur" operator="in" result="shadow"/>
                  <feComposite in="SourceGraphic" in2="shadow" operator="over"/>
              </filter>

              {/* Dot Pattern for Texture */}
              <pattern id="dot-grid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="0.5" fill="#be123c" fillOpacity="0.1" />
              </pattern>
              
              {/* Gradients for the projection beam - Red Theme */}
              <linearGradient id="beam-gradient-right" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#be123c" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="#be123c" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="beam-gradient-left" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#be123c" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#be123c" stopOpacity="0.05" />
              </linearGradient>

              <style>
                {`
                  @keyframes sparkle-dash {
                    to {
                      stroke-dashoffset: -20;
                    }
                  }
                  @keyframes sparkle-dash-fast {
                    to {
                      stroke-dashoffset: 20;
                    }
                  }
                  .sparkle-border {
                    animation: sparkle-dash 2s linear infinite;
                  }
                  .sparkle-border-fast {
                    animation: sparkle-dash-fast 1.5s linear infinite;
                  }
                `}
              </style>
              
              {/* Global Map Shadow */}
              <filter id="map-shadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="rgba(0,0,0,0.15)" />
              </filter>
          </defs>

          <g>
            {/* Render Indian States with Shadow */}
            <g filter="url(#map-shadow)">
            {sortedFeatures.map((feature, i) => {
              const stateName = feature.properties.ST_NM || feature.properties.st_nm || feature.properties.NAME_1 || feature.properties.name;
              
              const hasOffice = isActiveState(stateName);
              const isSelected = selectedStateName === stateName;
              const isHighlighted = isHighlightedRegion(stateName);
              const isHovered = internalHoveredState === stateName;
              
              // Base Styles (Initial State: Clean Light Mode with Golden Borders)
              let fill = '#ffffff'; // Pure White
              let stroke = '#d4af37'; // Golden Border
              let strokeWidth = 0.75;
              let style: React.CSSProperties = {
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                transformOrigin: 'center',
                transformBox: 'fill-box',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.05))'
              };
              
              if (isHighlighted) {
                 // PoK Context - Soft Red
                 fill = '#ffe4e6'; // Rose 100
                 stroke = '#f43f5e'; // Rose 500
                  strokeWidth = 1;
              } else if (hasOffice) {
                // Offices - Red Theme
                
                // If the map is hovered, reveal offices subtly
                if (isMapHovered && !isSelected && !isHovered) {
                    fill = '#fff1f2'; // Rose 50
                    stroke = '#fda4af'; // Rose 300
                    strokeWidth = 1;
                }

                // Selected or Hovered state
                if (isSelected || isHovered) {
                    fill = '#fda4af'; // Rose 300 (Darker Red)
                    stroke = '#be123c'; // Rose 700
                    strokeWidth = 1;
                    style.zIndex = 10; 
                }
              } else {
                  // Inactive states
                  stroke = '#d4af37'; // Golden Border
              }

              return (
                <path
                  key={stateName || `state-${i}`}
                  d={pathGenerator?.(feature as any) || ''}
                  fill={fill}
                  stroke={stroke}
                  strokeWidth={strokeWidth}
                  strokeLinejoin="round"
                  style={style}
                  className={`outline-none cursor-pointer`}
                  onMouseEnter={(e) => stateName && handleMouseEnter(e, stateName)}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onClick={(e) => {
                      if (hasOffice && stateName) {
                          e.stopPropagation();
                          onStateClick(stateName);
                      }
                  }}
                />
              );
            })}
            </g>

            {/* Render Projection Effect (Zoomed State + Pins) */}
            {projectionEffect && (
                <g key={selectedStateName}>
                    {/* Beam - Moved to foreground layer above map */}
                    <path 
                        d={projectionEffect.beamPath} 
                        fill={`url(#${projectionEffect.isProjectingLeft ? 'beam-gradient-left' : 'beam-gradient-right'})`}
                        className="pointer-events-none mix-blend-multiply"
                        style={{ filter: 'drop-shadow(0 0 10px rgba(190, 18, 60, 0.3))' }}
                    />
                    
                    {/* Zoomed State Group */}
                    <g transform={projectionEffect.transform} className="pointer-events-none drop-shadow-xl">
                        <path 
                            d={pathGenerator?.(projectionEffect.feature as any) || ''}
                            fill="#fff1f2" // Rose 50
                            stroke="#be123c" // Rose 700
                            strokeWidth="1.5"
                            vectorEffect="non-scaling-stroke"
                        />
                        {/* Texture overlay on projected state */}
                        <path 
                            d={pathGenerator?.(projectionEffect.feature as any) || ''}
                            fill="url(#dot-grid)"
                            className="opacity-100"
                            pointerEvents="none"
                        />
                    </g>

                    {/* Projected City Pins - Rendered OUTSIDE the transformed group to maintain size */}
                    {projectionEffect.projectedCities.map((city) => (
                        <Fragment key={`proj-${city.name}`}>
                            {/* Pin Group */}
                            <g transform={`translate(${city.px}, ${city.py})`} className="pointer-events-none">
                                <circle r={8} fill="#be123c" className="animate-ping opacity-20" />
                                <circle r={4} fill="#be123c" stroke="white" strokeWidth="2" />
                                <text 
                                    y={-15} 
                                    textAnchor="middle" 
                                    className="text-[10px] font-bold fill-rose-900 uppercase tracking-widest"
                                    style={{ textShadow: '0 2px 4px white' }}
                                >
                                    {city.name}
                                </text>
                            </g>

                            {/* Arrows to Info Panel - One for each office location */}
                            {isLargeScreen && projectionEffect.officeLocations.map((_, locIdx) => (
                                <CurvedArrow
                                    key={`arrow-${selectedStateName}-${city.name}-${locIdx}`}
                                    from={[city.px + 10, city.py]} // Start from pin
                                    to={[840, 330 + (locIdx * 110)]} // Fan out to cards on the right
                                    control={[
                                        (city.px + 840) / 2, 
                                        city.py + 50 + (locIdx * 20) // Slight control point variation
                                    ]}
                                    delay={locIdx * 200 + 500}
                                />
                            ))}
                        </Fragment>
                    ))}
                </g>
            )}

            {/* City Lights / Connectivity Layer (Always Visible) */}
            {projection && (
                <g className="pointer-events-none">
                    {/* Sparkle Effect on Borders - Layer 1 (Gold) */}
                    {sortedFeatures.map((feature, i) => (
                        <path
                            key={`sparkle-${i}`}
                            d={pathGenerator?.(feature as any) || ''}
                            fill="none"
                            stroke="#fbbf24" // Bright Gold
                            strokeWidth="1.5"
                            strokeDasharray="2 18" // Small dot, long gap
                            strokeLinecap="round"
                            className="sparkle-border opacity-60"
                            style={{ filter: 'url(#bright-glow)' }}
                        />
                    ))}

                    {/* Sparkle Effect on Borders - Layer 2 (White/Diamond Glitter) */}
                    {sortedFeatures.map((feature, i) => (
                        <path
                            key={`sparkle-fast-${i}`}
                            d={pathGenerator?.(feature as any) || ''}
                            fill="none"
                            stroke="#fef08a" // Light Yellow / White Gold
                            strokeWidth="1"
                            strokeDasharray="1 14" // Smaller dot, different gap
                            strokeLinecap="round"
                            className="sparkle-border-fast opacity-80"
                            style={{ filter: 'drop-shadow(0 0 2px white)' }}
                        />
                    ))}

                    {/* Draw lines between major hubs - Softer Triangle */}
                    <path 
                        d={`M ${projection([72.8777, 19.0760])?.join(',')} L ${projection([77.1025, 28.7041])?.join(',')}`} 
                        stroke="#fda4af" strokeWidth="2" strokeDasharray="4 4" className="opacity-90 drop-shadow-md sparkle-border"
                        style={{ filter: 'url(#soft-glow)' }}
                    />
                    <path 
                        d={`M ${projection([72.8777, 19.0760])?.join(',')} L ${projection([81.6296, 21.2514])?.join(',')}`} 
                        stroke="#fda4af" strokeWidth="2" strokeDasharray="4 4" className="opacity-90 drop-shadow-md sparkle-border"
                        style={{ filter: 'url(#soft-glow)' }}
                    />
                      <path 
                        d={`M ${projection([77.1025, 28.7041])?.join(',')} L ${projection([81.6296, 21.2514])?.join(',')}`} 
                        stroke="#fda4af" strokeWidth="2" strokeDasharray="4 4" className="opacity-90 drop-shadow-md sparkle-border"
                        style={{ filter: 'url(#soft-glow)' }}
                    />

                    {/* Glowing City Dots */}
                    {CITY_LOCATIONS.map(city => {
                        const coords = projection(city.coords);
                        if(!coords) return null;
                        return (
                            <g key={city.name} transform={`translate(${coords[0]}, ${coords[1]})`}>
                                <circle r={3} fill="#be123c" className="opacity-80" />
                                <circle r={8} fill="#be123c" className="opacity-20 animate-pulse" />
                            </g>
                        )
                    })}
                </g>
            )}
          </g>

          {/* Connector Arrow Overlays - REMOVED in favor of Projection Effect */}


        </svg>

        {tooltip && (
          <div 
            className="fixed pointer-events-none z-50 px-2 py-1 bg-black/90 text-white text-[10px] font-medium tracking-wide rounded shadow-xl transform -translate-x-1/2 -translate-y-full -mt-2 whitespace-nowrap"
            style={{ 
              left: tooltip.x, 
              top: tooltip.y 
            }}
          >
            {tooltip.text}
          </div>
        )}
      </div>
    </div>
  );
};
