import { useState, useCallback } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const INITIAL_FORM = {
  name: '',
  email: '',
  phone: '',
  interest: '',
  message: '',
  travelers: '1-2',
};

const TRUST_ITEMS = [
  'Licensed Ethiopian Tourism Authority operators',
  'English & Amharic speaking expert guides',
  '100% custom itineraries — no cookie-cutter tours',
  'Full trip support & 24/7 emergency assistance',
  'Sustainable & community-benefit tourism',
];

const ROUTE_OPTIONS = [
  { value: '',               label: 'Select a route...' },
  { value: 'north',          label: 'North Circuit (7–10 days)' },
  { value: 'extended-north', label: 'Extended North (10–12 days)' },
  { value: 'south',          label: 'South Circuit (8–12 days)' },
  { value: 'afar',           label: 'Afar Expedition (4–6 days)' },
  { value: 'grand',          label: 'Grand Circuit (14+ days)' },
  { value: 'custom',         label: 'Custom / Not sure yet' },
];

export default function Contact() {
  const [form, setForm]           = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const titleRef   = useScrollReveal();
  const contentRef = useScrollReveal();

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    // TODO: POST form data to your backend / email service
    setSubmitted(true);
  }, []);

  const resetForm = useCallback(() => {
    setForm(INITIAL_FORM);
    setSubmitted(false);
  }, []);

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
          <div className="w-16 h-px bg-amber-600 mx-auto mt-8" aria-hidden="true" />
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

            <address className="not-italic space-y-5">
              <a href="mailto:info@discoverethiopia.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-amber-600/20 border border-amber-600/30 flex items-center justify-center group-hover:bg-amber-600/40 transition-colors" aria-hidden="true">
                  <Mail className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="text-white/40 text-xs uppercase tracking-wider">Email Us</div>
                  <div className="text-white group-hover:text-amber-400 transition-colors font-medium">
                    info@discoverethiopia.com
                  </div>
                </div>
              </a>

              <a href="tel:+251911000000" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-amber-600/20 border border-amber-600/30 flex items-center justify-center group-hover:bg-amber-600/40 transition-colors" aria-hidden="true">
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
                <div className="w-12 h-12 rounded-2xl bg-amber-600/20 border border-amber-600/30 flex items-center justify-center" aria-hidden="true">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="text-white/40 text-xs uppercase tracking-wider">Based In</div>
                  <div className="text-white font-medium">Addis Ababa, Ethiopia</div>
                </div>
              </div>
            </address>

            {/* Trust indicators */}
            <div className="bg-[#111] rounded-3xl p-6 border border-white/8">
              <h4 className="text-white font-semibold mb-4">Why Book With Us</h4>
              <ul className="space-y-3">
                {TRUST_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-white/60 text-sm">
                    <span className="text-amber-400 mt-0.5 flex-shrink-0" aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#111] border border-white/8 rounded-3xl p-8">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-12">
                <CheckCircle className="w-16 h-16 text-emerald-400" aria-hidden="true" />
                <h3 className="text-white text-2xl font-serif font-bold">Message Received!</h3>
                <p className="text-white/60">
                  Our team will contact you within 24 hours to discuss your dream Ethiopia journey.
                </p>
                <button
                  onClick={resetForm}
                  className="mt-4 text-amber-400 text-sm hover:text-amber-300 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <h3 className="text-white text-xl font-serif font-bold mb-6">Request Your Journey</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-white/50 text-xs uppercase tracking-wider block mb-2">
                      Full Name <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                      className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 px-4 py-3 rounded-xl focus:outline-none focus:border-amber-500/50 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-white/50 text-xs uppercase tracking-wider block mb-2">
                      Email <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                      className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 px-4 py-3 rounded-xl focus:outline-none focus:border-amber-500/50 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="text-white/50 text-xs uppercase tracking-wider block mb-2">Phone</label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                      className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 px-4 py-3 rounded-xl focus:outline-none focus:border-amber-500/50 transition-colors"
                      placeholder="+1 (555) 000-000"
                    />
                  </div>
                  <div>
                    <label htmlFor="travelers" className="text-white/50 text-xs uppercase tracking-wider block mb-2">Travelers</label>
                    <select
                      id="travelers"
                      name="travelers"
                      value={form.travelers}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-amber-500/50 transition-colors"
                    >
                      <option value="solo"  className="bg-gray-900">Solo</option>
                      <option value="1-2"   className="bg-gray-900">1–2 people</option>
                      <option value="3-5"   className="bg-gray-900">3–5 people</option>
                      <option value="6+"    className="bg-gray-900">6+ people</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="interest" className="text-white/50 text-xs uppercase tracking-wider block mb-2">Interest</label>
                  <select
                    id="interest"
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-amber-500/50 transition-colors"
                  >
                    {ROUTE_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-gray-900">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="text-white/50 text-xs uppercase tracking-wider block mb-2">Message</label>
                  <textarea
                    id="message"
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
                  <Send className="w-4 h-4" aria-hidden="true" />
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
