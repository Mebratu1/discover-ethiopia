import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', interest: '', message: '', travelers: '1-2'
  });
  const [submitted, setSubmitted] = useState(false);
  const titleRef = useScrollReveal();
  const contentRef = useScrollReveal();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real deployment, this would POST to a backend
    console.log('Form submission:', form);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[#080808] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={titleRef} className="reveal text-center mb-16">
          <span className="text-amber-400 text-xs font-medium tracking-[0.4em] uppercase">
            Get In Touch
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mt-4">
            Plan Your Trip
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto text-lg font-light">
            Our Ethiopia specialists will craft a personalized journey around your interests, timeline, and budget.
          </p>
          <div className="w-16 h-px bg-amber-600 mx-auto mt-8" />
        </div>

        <div ref={contentRef} className="reveal grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl text-white font-bold mb-6">Let's Connect</h3>
              <p className="text-white/60 leading-relaxed">
                Whether you're dreaming of trekking the Simien Mountains, witnessing Timkat in Lalibela, 
                or camping beside an active lava lake — we're here to make it happen, safely and memorably.
              </p>
            </div>

            <div className="space-y-5">
              <a
                href="mailto:meba@discoverthiopia.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-600/20 border border-amber-600/30 flex items-center justify-center group-hover:bg-amber-600/40 transition-colors">
                  <Mail className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="text-white/40 text-xs uppercase tracking-wider">Email Us</div>
                  <div className="text-white group-hover:text-amber-400 transition-colors font-medium">
                    info@discoverethiopia.com
                  </div>
                </div>
              </a>

              <a
                href="tel:+251911000000"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-600/20 border border-amber-600/30 flex items-center justify-center group-hover:bg-amber-600/40 transition-colors">
                  <Phone className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="text-white/40 text-xs uppercase tracking-wider">Call Us</div>
                  <div className="text-white group-hover:text-amber-400 transition-colors font-medium">
                    +251 (911) 000-000
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-600/20 border border-amber-600/30 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="text-white/40 text-xs uppercase tracking-wider">Based In</div>
                  <div className="text-white font-medium">Addis Ababa, Ethiopia</div>
                </div>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="bg-[#111] rounded-3xl p-6 border border-white/8">
              <h4 className="text-white font-semibold mb-4">Why Book With Us</h4>
              <div className="space-y-3">
                {[
                  'Licensed Ethiopian Tourism Authority operators',
                  'English & Amharic speaking expert guides',
                  '100% custom itineraries — no cookie-cutter tours',
                  'Full trip support & 24/7 emergency assistance',
                  'Sustainable & community-benefit tourism',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-white/60 text-sm">
                    <span className="text-amber-400 mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#111] border border-white/8 rounded-3xl p-8">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-12">
                <CheckCircle className="w-16 h-16 text-emerald-400" />
                <h3 className="text-white text-2xl font-serif font-bold">Message Received!</h3>
                <p className="text-white/60">
                  Our team will contact you within 24 hours to discuss your dream Ethiopia journey.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-amber-400 text-sm hover:text-amber-300 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-white text-xl font-serif font-bold mb-6">Request Your Journey</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/50 text-xs uppercase tracking-wider block mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 px-4 py-3 rounded-xl focus:outline-none focus:border-amber-500/50 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-white/50 text-xs uppercase tracking-wider block mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 px-4 py-3 rounded-xl focus:outline-none focus:border-amber-500/50 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/50 text-xs uppercase tracking-wider block mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 px-4 py-3 rounded-xl focus:outline-none focus:border-amber-500/50 transition-colors"
                      placeholder="+1 (555) 000-000"
                    />
                  </div>
                  <div>
                    <label className="text-white/50 text-xs uppercase tracking-wider block mb-2">Travelers</label>
                    <select
                      name="travelers"
                      value={form.travelers}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-amber-500/50 transition-colors"
                    >
                      <option value="solo" className="bg-gray-900">Solo</option>
                      <option value="1-2" className="bg-gray-900">1-2 people</option>
                      <option value="3-5" className="bg-gray-900">3-5 people</option>
                      <option value="6+" className="bg-gray-900">6+ people</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wider block mb-2">Interest</label>
                  <select
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-amber-500/50 transition-colors"
                  >
                    <option value="" className="bg-gray-900">Select a route...</option>
                    <option value="north" className="bg-gray-900">North Circuit (7-10 days)</option>
                    <option value="extended-north" className="bg-gray-900">Extended North (10-12 days)</option>
                    <option value="south" className="bg-gray-900">South Circuit (8-12 days)</option>
                    <option value="afar" className="bg-gray-900">Afar Expedition (4-6 days)</option>
                    <option value="grand" className="bg-gray-900">Grand Circuit (14+ days)</option>
                    <option value="custom" className="bg-gray-900">Custom / Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wider block mb-2">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 px-4 py-3 rounded-xl focus:outline-none focus:border-amber-500/50 transition-colors resize-none"
                    placeholder="Tell us your travel dates, interests, budget, or any questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-shimmer w-full bg-amber-600 hover:bg-amber-500 text-white font-semibold py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send My Request
                </button>

                <p className="text-white/30 text-xs text-center">
                  We respond within 24 hours. No commitment required.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
