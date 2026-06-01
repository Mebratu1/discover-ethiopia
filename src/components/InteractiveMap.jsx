import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { MapPin, X } from 'lucide-react';

const mapRegions = [
  {
    id: 'north',
    name: 'North Circuit',
    color: '#D4A017',
    description: 'The classic Ethiopian journey: Lalibela, Gondar, Simien Mountains, Bahir Dar. The historical heartland.',
    destinations: ['Lalibela', 'Gondar', 'Simien Mountains', 'Bahir Dar & Lake Tana'],
    days: '7-10 days',
    x: '40%',
    y: '30%',
  },
  {
    id: 'south',
    name: 'South Circuit',
    color: '#2D5016',
    description: 'Tribal cultures of the Omo Valley, Rift Valley lakes, hot springs, and extraordinary biodiversity.',
    destinations: ['Arba Minch', 'Omo Valley', 'Bale Mountains', 'Yabello'],
    days: '8-12 days',
    x: '38%',
    y: '60%',
  },
  {
    id: 'afar',
    name: 'Afar Expedition',
    color: '#8B0000',
    description: 'The most extreme and otherworldly route: lava lakes, acid springs, salt deserts, Afar tribes.',
    destinations: ['Danakil Depression', 'Erta Ale Volcano', 'Dallol', 'Harar'],
    days: '4-6 days',
    x: '68%',
    y: '35%',
  },
  {
    id: 'tigray',
    name: 'Tigray Region',
    color: '#1B3A5C',
    description: 'Ancient Aksumite obelisks, cliff-hanging churches, and dramatic sandstone mountain scenery.',
    destinations: ['Gheralta', 'Aksum', 'Adwa', 'Mekelle'],
    days: '4-5 days',
    x: '52%',
    y: '18%',
  },
];

// SVG-based Ethiopia map (simplified outline)
const ETHIOPIA_PATH = "M 120,30 L 200,20 L 280,40 L 320,80 L 340,130 L 310,160 L 330,210 L 300,250 L 260,280 L 200,300 L 170,280 L 140,300 L 100,280 L 80,240 L 60,200 L 50,160 L 70,120 L 90,80 Z";

export default function InteractiveMap() {
  const [activeRegion, setActiveRegion] = useState(null);
  const titleRef = useScrollReveal();
  const mapRef = useScrollReveal();

  return (
    <section id="map" className="bg-[#080808] py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={titleRef} className="reveal text-center mb-16">
          <span className="text-amber-400 text-xs font-medium tracking-[0.4em] uppercase">
            Navigate Ethiopia
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mt-4">
            Explore the Routes
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto text-lg font-light">
            Select a travel circuit to discover the highlights, destinations, and ideal duration for each route.
          </p>
          <div className="w-16 h-px bg-amber-600 mx-auto mt-8" />
        </div>

        <div ref={mapRef} className="reveal grid lg:grid-cols-2 gap-12 items-center">
          {/* Custom SVG Map */}
          <div className="relative">
            <div className="relative bg-[#0f1a2e] rounded-3xl border border-white/10 p-6 aspect-square max-w-md mx-auto overflow-hidden">
              {/* Background grid */}
              <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#D4A017" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>

              {/* Ethiopia silhouette */}
              <svg
                viewBox="0 0 400 380"
                className="w-full h-full relative z-10"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Country outline */}
                <path
                  d={ETHIOPIA_PATH}
                  fill="#1B3A5C"
                  fillOpacity="0.4"
                  stroke="#D4A017"
                  strokeWidth="1.5"
                  strokeDasharray="4 2"
                />

                {/* Route lines */}
                <path d="M 130,90 L 155,130 L 170,160" stroke="#D4A017" strokeWidth="1.5" fill="none" strokeDasharray="6 3" opacity="0.6"/>
                <path d="M 170,160 L 190,220 L 170,255" stroke="#2D5016" strokeWidth="1.5" fill="none" strokeDasharray="6 3" opacity="0.6"/>
                <path d="M 200,80 L 230,110 L 250,150" stroke="#8B0000" strokeWidth="1.5" fill="none" strokeDasharray="6 3" opacity="0.6"/>

                {/* Destination pins */}
                {mapRegions.map((region) => {
                  const cx = parseFloat(region.x) * 3.4;
                  const cy = parseFloat(region.y) * 3.4;
                  const isActive = activeRegion?.id === region.id;
                  return (
                    <g key={region.id} onClick={() => setActiveRegion(isActive ? null : region)} className="cursor-pointer">
                      <circle
                        cx={cx}
                        cy={cy}
                        r={isActive ? 16 : 10}
                        fill={region.color}
                        fillOpacity={isActive ? 0.9 : 0.7}
                        stroke="white"
                        strokeWidth={isActive ? 2 : 1}
                        className="transition-all duration-300"
                      />
                      {isActive && (
                        <circle
                          cx={cx}
                          cy={cy}
                          r={22}
                          fill="none"
                          stroke={region.color}
                          strokeWidth="1.5"
                          opacity="0.5"
                          strokeDasharray="4 2"
                        >
                          <animateTransform attributeName="transform" type="rotate" from={`0 ${cx} ${cy}`} to={`360 ${cx} ${cy}`} dur="4s" repeatCount="indefinite"/>
                        </circle>
                      )}
                      <text x={cx} y={cy + 30} textAnchor="middle" fill="white" fontSize="9" fontWeight="500" opacity="0.8">
                        {region.name}
                      </text>
                    </g>
                  );
                })}

                {/* Ethiopia label */}
                <text x="170" y="160" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" opacity="0.3" fontFamily="serif">
                  ETHIOPIA
                </text>
              </svg>

              {/* Compass */}
              <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full border border-amber-600/40 flex items-center justify-center">
                <span className="text-amber-400 text-xs font-bold">N</span>
              </div>
            </div>

            {/* Click instruction */}
            <p className="text-center text-white/30 text-sm mt-4">
              Click a region to explore the route
            </p>
          </div>

          {/* Region Detail Panel */}
          <div className="space-y-4">
            {activeRegion ? (
              <div className="bg-[#111] border border-amber-600/30 rounded-3xl p-8 relative">
                <button
                  onClick={() => setActiveRegion(null)}
                  className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div
                  className="w-12 h-1 rounded-full mb-5"
                  style={{ backgroundColor: activeRegion.color }}
                />
                <h3 className="font-serif text-3xl text-white font-bold mb-2">
                  {activeRegion.name}
                </h3>
                <p className="text-amber-400 text-sm mb-4">Recommended: {activeRegion.days}</p>
                <p className="text-white/60 leading-relaxed mb-6">{activeRegion.description}</p>

                <div>
                  <h4 className="text-white text-sm font-semibold mb-3 tracking-wider uppercase">Key Destinations</h4>
                  <div className="space-y-2">
                    {activeRegion.destinations.map((dest) => (
                      <div key={dest} className="flex items-center gap-3 text-white/70">
                        <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
                        <span>{dest}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  className="mt-8 inline-block bg-amber-600 hover:bg-amber-500 text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors"
                >
                  Plan This Route
                </a>
              </div>
            ) : (
              <div className="space-y-3">
                {mapRegions.map((region) => (
                  <button
                    key={region.id}
                    onClick={() => setActiveRegion(region)}
                    className="w-full group flex items-center gap-4 bg-[#111] border border-white/8 hover:border-amber-600/30 rounded-2xl p-5 text-left transition-all duration-300 hover:bg-[#161616]"
                  >
                    <div
                      className="w-4 h-4 rounded-full flex-shrink-0 ring-2 ring-offset-2 ring-offset-[#111]"
                      style={{ backgroundColor: region.color, ringColor: region.color }}
                    />
                    <div className="flex-1">
                      <div className="text-white font-semibold group-hover:text-amber-400 transition-colors">{region.name}</div>
                      <div className="text-white/40 text-sm">{region.days}</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-amber-400 transition-colors" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ChevronRight({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}
