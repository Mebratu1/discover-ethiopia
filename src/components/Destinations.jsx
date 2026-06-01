import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import DestinationCard from './DestinationCard';
import { destinations } from '../data/destinations';

const categories = ['All', 'Mountains', 'Churches', 'Lakes', 'Culture', 'Wildlife', 'Volcanoes'];

export default function Destinations() {
  const [activeCategory, setActiveCategory] = useState('All');
  const titleRef = useScrollReveal();
  const gridRef = useScrollReveal();

  const filtered = activeCategory === 'All'
    ? destinations
    : destinations.filter(d => d.category === activeCategory);

  return (
    <section id="destinations" className="bg-[#0d0d0d] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={titleRef} className="reveal text-center mb-14">
          <span className="text-amber-400 text-xs font-medium tracking-[0.4em] uppercase">
            Explore the Country
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mt-4">
            Iconic Destinations
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto text-lg font-light">
            From volcanic craters to medieval castles — every corner of Ethiopia tells a story 10,000 years in the making.
          </p>
          <div className="w-16 h-px bg-amber-600 mx-auto mt-8" />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/20'
                  : 'border border-white/15 text-white/60 hover:border-amber-500/50 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="reveal grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filtered.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-white/40 text-sm mb-4">
            Can't decide? Let us build your perfect itinerary.
          </p>
          <a
            href="#guide"
            className="btn-shimmer inline-block border border-amber-600/50 hover:bg-amber-600 text-amber-400 hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300"
          >
            View Itineraries
          </a>
        </div>
      </div>
    </section>
  );
}
