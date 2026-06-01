import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Send, CheckCircle } from 'lucide-react';

export default function CTASection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const ref = useScrollReveal();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section
      className="relative py-28 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a0a00 0%, #0d1a2e 50%, #0a0a0a 100%)',
      }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #D4A017 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, #1B3A5C 0%, transparent 50%)`,
          }}
        />
      </div>

      <div ref={ref} className="reveal relative max-w-3xl mx-auto text-center">
        <span className="text-amber-400 text-xs font-medium tracking-[0.4em] uppercase">
          Begin Your Adventure
        </span>
        <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mt-4 leading-tight">
          Start Your Ethiopian
          <br />
          <span className="gold-text">Journey Today</span>
        </h2>
        <p className="text-white/60 mt-6 text-lg font-light leading-relaxed max-w-xl mx-auto">
          Join thousands of travelers who have experienced the magic of Ethiopia. 
          Get exclusive travel tips, route updates, and special offers straight to your inbox.
        </p>

        {/* Email Signup */}
        {subscribed ? (
          <div className="mt-10 flex items-center justify-center gap-3 text-emerald-400">
            <CheckCircle className="w-6 h-6" />
            <span className="text-lg font-medium">You're in! Welcome to the Ethiopia community.</span>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/40 px-5 py-3.5 rounded-full focus:outline-none focus:border-amber-500/50 transition-colors"
              required
            />
            <button
              type="submit"
              className="btn-shimmer bg-amber-600 hover:bg-amber-500 text-white font-semibold px-6 py-3.5 rounded-full transition-colors flex items-center gap-2 justify-center whitespace-nowrap"
            >
              <Send className="w-4 h-4" />
              Subscribe
            </button>
          </form>
        )}

        <p className="text-white/30 text-xs mt-4">
          No spam. Unsubscribe anytime. We share only great Ethiopia content.
        </p>

        {/* Big CTA */}
        <div className="mt-16 pt-14 border-t border-white/10">
          <p className="text-white/60 text-lg mb-6">Ready to plan your trip?</p>
          <a
            href="#contact"
            className="btn-shimmer inline-block bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white font-bold text-lg px-12 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-600/30"
          >
            Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
