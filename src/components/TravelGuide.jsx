import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { itineraries, travelInfo } from '../data/destinations';
import { Calendar, Globe, Bus, ChevronDown } from 'lucide-react';

export default function TravelGuide() {
  const [openItinerary, setOpenItinerary] = useState(0);
  const titleRef = useScrollReveal();
  const cardsRef = useScrollReveal();
  const itinRef = useScrollReveal();

  return (
    <section id="guide" className="bg-[#0d0d0d] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={titleRef} className="reveal text-center mb-16">
          <span className="text-amber-400 text-xs font-medium tracking-[0.4em] uppercase">
            Plan Your Journey
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mt-4">
            Travel Guide
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto text-lg font-light">
            Everything you need to know before your first step on Ethiopian soil.
          </p>
          <div className="w-16 h-px bg-amber-600 mx-auto mt-8" />
        </div>

        {/* Info Cards */}
        <div ref={cardsRef} className="stagger-children grid md:grid-cols-3 gap-6 mb-20">
          {/* Best Time */}
          <div className="bg-[#111] border border-white/8 rounded-3xl p-7">
            <Calendar className="w-8 h-8 text-amber-400 mb-4" />
            <h3 className="text-white text-xl font-bold font-serif mb-3">Best Time to Visit</h3>
            <div className="space-y-3">
              <div>
                <div className="text-amber-400 text-sm font-semibold">Peak Season</div>
                <div className="text-white/70 text-sm">{travelInfo.bestTime.peak}</div>
              </div>
              <div>
                <div className="text-emerald-400 text-sm font-semibold">Shoulder Season</div>
                <div className="text-white/70 text-sm">{travelInfo.bestTime.shoulder}</div>
              </div>
              <div>
                <div className="text-red-400 text-sm font-semibold">Avoid If Possible</div>
                <div className="text-white/70 text-sm">{travelInfo.bestTime.avoid}</div>
              </div>
              <p className="text-white/50 text-xs leading-relaxed pt-2 border-t border-white/8">
                {travelInfo.bestTime.detail}
              </p>
            </div>
          </div>

          {/* Visa */}
          <div className="bg-[#111] border border-white/8 rounded-3xl p-7">
            <Globe className="w-8 h-8 text-amber-400 mb-4" />
            <h3 className="text-white text-xl font-bold font-serif mb-3">Visa Information</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <span className="text-amber-400 mt-1">◆</span>
                <div>
                  <div className="text-white/80 text-sm font-medium">eVisa Available</div>
                  <div className="text-white/50 text-xs">{travelInfo.visa.eVisa}</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400 mt-1">◆</span>
                <div>
                  <div className="text-white/80 text-sm font-medium">On Arrival</div>
                  <div className="text-white/50 text-xs">{travelInfo.visa.onArrival}</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400 mt-1">◆</span>
                <div>
                  <div className="text-white/80 text-sm font-medium">Cost</div>
                  <div className="text-white/50 text-xs">{travelInfo.visa.cost}</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400 mt-1">◆</span>
                <div>
                  <div className="text-white/80 text-sm font-medium">Duration</div>
                  <div className="text-white/50 text-xs">{travelInfo.visa.duration}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Transport */}
          <div className="bg-[#111] border border-white/8 rounded-3xl p-7">
            <Bus className="w-8 h-8 text-amber-400 mb-4" />
            <h3 className="text-white text-xl font-bold font-serif mb-3">Getting Around</h3>
            <div className="space-y-4">
              {travelInfo.transport.map((t, i) => (
                <div key={i}>
                  <div className="text-white/80 text-sm font-medium">{t.type}</div>
                  <div className="text-white/50 text-xs leading-relaxed mt-1">{t.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Itineraries */}
        <div ref={itinRef} className="reveal">
          <div className="text-center mb-10">
            <h3 className="font-serif text-3xl md:text-4xl text-white font-bold">
              Suggested Itineraries
            </h3>
            <p className="text-white/50 mt-2">Crafted by Ethiopia travel experts</p>
          </div>

          <div className="space-y-4">
            {itineraries.map((itin, idx) => (
              <div
                key={idx}
                className="bg-[#111] border border-white/8 rounded-3xl overflow-hidden"
              >
                {/* Header */}
                <button
                  className="w-full flex items-center justify-between p-7 text-left group"
                  onClick={() => setOpenItinerary(openItinerary === idx ? -1 : idx)}
                >
                  <div className="flex items-center gap-5">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${itin.color} flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white font-bold text-xl">{itin.days}</span>
                      <span className="text-white/70 text-xs ml-0.5">d</span>
                    </div>
                    <div>
                      <div className="text-white font-bold text-xl font-serif">{itin.title}</div>
                      <div className="text-amber-400 text-sm">{itin.route}</div>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-white/40 transition-transform duration-300 ${
                      openItinerary === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Expanded content */}
                {openItinerary === idx && (
                  <div className="px-7 pb-7 border-t border-white/8">
                    <div className="mt-6 space-y-0">
                      {itin.stops.map((stop, i) => (
                        <div key={i} className="flex gap-6 pb-6 last:pb-0 relative">
                          {/* Timeline line */}
                          {i < itin.stops.length - 1 && (
                            <div className="absolute left-[19px] top-8 bottom-0 w-px bg-gradient-to-b from-amber-600/40 to-transparent" />
                          )}
                          
                          {/* Dot */}
                          <div className="w-10 h-10 rounded-full bg-amber-600/20 border border-amber-600/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-amber-400" />
                          </div>

                          <div>
                            <div className="text-amber-400 text-xs font-semibold tracking-wider uppercase mb-1">{stop.day}</div>
                            <div className="text-white font-semibold text-lg font-serif">{stop.place}</div>
                            <div className="text-white/50 text-sm leading-relaxed mt-1">{stop.activity}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-white/8 flex flex-col sm:flex-row gap-3">
                      <a
                        href="#contact"
                        className="btn-shimmer bg-amber-600 hover:bg-amber-500 text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors text-center"
                      >
                        Book This Itinerary
                      </a>
                      <a
                        href="#contact"
                        className="border border-white/20 hover:border-amber-500/50 text-white/70 hover:text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors text-center"
                      >
                        Customize It
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
