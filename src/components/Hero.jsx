import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=1920&q=85"
        >
          <source
            src="https://www.w3schools.com/howto/rain.mp4"
            type="video/mp4"
          />
          {/* Fallback image if video fails */}
          <img
            src="https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=1920&q=85"
            className="w-full h-full object-cover"
            alt="Ethiopia landscape"
          />
        </video>

        {/* Cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
        
        {/* Cinematic letterbox bars */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-black/60" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-black/60" />
      </div>

      {/* Grain overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <div
          className={`mb-6 transition-all duration-1000 delay-300 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-flex items-center gap-2 text-amber-400 text-sm font-medium tracking-[0.3em] uppercase border border-amber-400/30 px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
            Land of Origins
          </span>
        </div>

        {/* Main Title */}
        <h1
          className={`font-serif text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight mb-6 transition-all duration-1000 delay-500 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Discover
          <br />
          <span className="gold-text">Ethiopia</span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-lg md:text-xl text-white/80 font-light tracking-wide max-w-2xl mx-auto mb-10 transition-all duration-1000 delay-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Culture, Natural Wonders &amp; Ancient Civilizations
          <br className="hidden md:block" />
          Await You in the Cradle of Humanity
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-900 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="#destinations"
            className="btn-shimmer bg-amber-600 hover:bg-amber-500 text-white font-semibold px-8 py-4 rounded-full text-base tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-600/30 w-full sm:w-auto"
          >
            Start Exploring
          </a>
          <a
            href="#contact"
            className="btn-shimmer border border-white/40 hover:border-amber-400 text-white hover:text-amber-400 font-semibold px-8 py-4 rounded-full text-base tracking-wide transition-all duration-300 hover:scale-105 w-full sm:w-auto"
          >
            Plan Your Trip
          </a>
        </div>

        {/* Stats strip */}
        <div
          className={`mt-16 flex justify-center gap-10 md:gap-16 transition-all duration-1000 delay-1000 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {[
            { value: '3,000+', label: 'Years of History' },
            { value: '9', label: 'UNESCO Sites' },
            { value: '80+', label: 'Ethnic Groups' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-2xl md:text-3xl font-bold text-amber-400 stat-number">
                {stat.value}
              </div>
              <div className="text-white/60 text-xs tracking-widest uppercase mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs tracking-[0.3em] uppercase">Scroll to explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}
