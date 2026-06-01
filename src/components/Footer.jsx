import { MapPin, Mail, Phone, Instagram, Youtube, Facebook, Twitter } from 'lucide-react';

const footerLinks = {
  Explore: ['Destinations', 'Travel Routes', 'Gallery', 'Blog'],
  Plan: ['Travel Guide', 'Itineraries', 'Best Time to Visit', 'Visa Info'],
  Company: ['About Us', 'Our Guides', 'Sustainability', 'Press'],
};

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/8 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-700 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <span className="font-serif text-white text-xl font-bold">
                Discover<span className="text-amber-400">Ethiopia</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              Your gateway to the world's oldest civilization. Crafting transformative Ethiopian journeys since 2010.
            </p>

            {/* Contact */}
            <div className="space-y-2 text-sm">
              <a href="mailto:info@discoverethiopia.com" className="flex items-center gap-2 text-white/40 hover:text-amber-400 transition-colors">
                <Mail className="w-4 h-4" />
                info@discoverethiopia.com
              </a>
              <a href="tel:+251911000000" className="flex items-center gap-2 text-white/40 hover:text-amber-400 transition-colors">
                <Phone className="w-4 h-4" />
                +251 (911) 000-000
              </a>
              <div className="flex items-center gap-2 text-white/40">
                <MapPin className="w-4 h-4" />
                Addis Ababa, Ethiopia
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-4 mt-6">
              {[Instagram, Youtube, Facebook, Twitter].map((Icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-amber-400 hover:border-amber-400/40 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">{section}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/40 hover:text-amber-400 text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Ethiopian flag colors bar */}
        <div className="flex h-1 rounded-full overflow-hidden mb-10">
          <div className="flex-1 bg-green-600" />
          <div className="flex-1 bg-amber-400" />
          <div className="flex-1 bg-red-600" />
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/25">
          <p>© {new Date().getFullYear()} Discover Ethiopia. All rights reserved. Licensed by Ethiopian Tourism Authority.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white/60 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
