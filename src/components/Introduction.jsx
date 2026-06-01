import { useScrollReveal } from '../hooks/useScrollReveal';

const facts = [
  { icon: '🦁', label: 'Wildlife', desc: 'Home to endemic species found nowhere else on Earth' },
  { icon: '⛪', label: 'Heritage', desc: '9 UNESCO World Heritage Sites across the country' },
  { icon: '☕', label: 'Coffee', desc: 'Birthplace of coffee — the world\'s favorite beverage' },
  { icon: '🏔️', label: 'Landscape', desc: 'Dramatic terrain from -125m to 4,550m altitude' },
];

export default function Introduction() {
  const titleRef = useScrollReveal();
  const textRef = useScrollReveal();
  const factsRef = useScrollReveal();

  return (
    <section className="bg-[#080808] py-28 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div ref={titleRef} className="reveal text-center mb-16">
          <span className="text-amber-400 text-xs font-medium tracking-[0.4em] uppercase">
            Our Story
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mt-4 leading-tight">
            Where Humanity
            <br />
            <em className="not-italic gold-text">Began Its Journey</em>
          </h2>
          <div className="w-16 h-px bg-amber-600 mx-auto mt-8" />
        </div>

        {/* Text content */}
        <div ref={textRef} className="reveal grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <p className="text-white/70 text-lg leading-relaxed font-light">
              Ethiopia is not just a destination — it is the very cradle of humanity. 
              Here, in the ancient highlands and volcanic valleys, our earliest ancestors 
              took their first steps over <strong className="text-amber-400">3 million years ago</strong>. 
              The bones of Lucy, discovered in the Afar Depression, told the world that 
              Africa was where it all began.
            </p>
            <p className="text-white/70 text-lg leading-relaxed font-light">
              Across millennia, great empires rose — Aksum traded with Rome and Arabia; 
              Lalibela carved cathedrals from living rock; Gondar built castles that would 
              astonish European kings. Ethiopia was never colonized. Its soul remained unbroken.
            </p>
            <p className="text-white/70 text-lg leading-relaxed font-light">
              Today, Ethiopia welcomes you into <strong className="text-amber-400">80+ distinct cultures</strong>, 
              dramatic landscapes ranging from snow-capped peaks to active lava lakes, and a 
              warmth of spirit that travelers call transformative. This is not sightseeing — 
              this is homecoming.
            </p>
          </div>

          {/* Image stack */}
          <div className="relative h-[400px] hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=600&q=80"
              alt="Lalibela Church"
              className="absolute top-0 right-0 w-3/4 h-64 object-cover rounded-2xl shadow-2xl"
            />
            <img
              src="https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=600&q=80"
              alt="Simien Mountains"
              className="absolute bottom-0 left-0 w-3/5 h-52 object-cover rounded-2xl shadow-2xl border-4 border-[#080808]"
            />
            {/* Gold accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
              <span className="text-3xl">🇪🇹</span>
            </div>
          </div>
        </div>

        {/* Fact cards */}
        <div ref={factsRef} className="stagger-children grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="group border border-white/8 rounded-2xl p-6 bg-white/[0.03] hover:bg-white/[0.06] hover:border-amber-600/30 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{fact.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">{fact.label}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{fact.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
