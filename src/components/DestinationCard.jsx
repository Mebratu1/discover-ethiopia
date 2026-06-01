import { Clock, Calendar, MapPin, ChevronRight } from 'lucide-react';

export default function DestinationCard({ destination }) {
  const { title, region, image, description, highlights, duration, bestTime, category } = destination;

  return (
    <article className="group relative rounded-3xl overflow-hidden bg-[#111] card-glow transition-all duration-500 hover:-translate-y-2">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={`${title} – ${region}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" aria-hidden="true" />

        {/* Badges */}
        <div className="absolute top-4 left-4">
          <span className="bg-amber-600/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full tracking-wider uppercase">
            {category}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-black/60 backdrop-blur-sm text-white/80 text-xs px-3 py-1 rounded-full flex items-center gap-1">
            <MapPin className="w-3 h-3 text-amber-400" aria-hidden="true" />
            {region}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="font-serif text-white text-xl font-bold leading-tight">{title}</h3>
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <p className="text-white/60 text-sm leading-relaxed mb-4">{description}</p>

        {/* Meta */}
        <div className="flex gap-4 mb-4 text-xs text-white/50">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-amber-400" aria-hidden="true" />
            {duration}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3 text-amber-400" aria-hidden="true" />
            {bestTime}
          </span>
        </div>

        {/* Top 3 highlights */}
        <ul className="space-y-1.5 mb-5" aria-label="Highlights">
          {highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-white/70">
              <span className="text-amber-400 mt-0.5 flex-shrink-0" aria-hidden="true">◆</span>
              {h}
            </li>
          ))}
        </ul>

        <a
          href="#guide"
          className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm font-semibold group/link transition-colors"
          aria-label={`Explore more about ${title}`}
        >
          Explore More
          <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" aria-hidden="true" />
        </a>
      </div>

      {/* Hover border glow */}
      <div className="absolute inset-0 rounded-3xl border border-amber-500/0 group-hover:border-amber-500/30 transition-colors duration-500 pointer-events-none" aria-hidden="true" />
    </article>
  );
}
