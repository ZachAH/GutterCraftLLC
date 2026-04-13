import { Phone, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white py-16">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="/logo.webp"
              alt="Gutters Craft LLC"
              className="h-16 w-auto brightness-0 invert mb-4"
            />
            <p className="text-white/50 text-sm leading-relaxed">
              Family-owned gutter specialists serving Southeast Wisconsin for over 20 years.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold tracking-[0.2em] uppercase mb-6 text-white/80">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                'Seamless Gutter Installation',
                'Gutter Guards & Leaf Protection',
                'Gutter Cleaning & Repair',
                'Fascia & Soffit',
                'Roof Repair & Installation',
                'Siding Repair',
              ].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-white/40 text-sm hover:text-white transition-colors duration-300">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-sm font-bold tracking-[0.2em] uppercase mb-6 text-white/80">
              Service Areas
            </h4>
            <ul className="space-y-3">
              {[
                'Ozaukee County',
                'Washington County',
                'Sheboygan County',
                'Milwaukee County',
                'Waukesha County',
                'Dodge County',
                'Jefferson County',
              ].map((a) => (
                <li key={a}>
                  <a href="#areas" className="text-white/40 text-sm hover:text-white transition-colors duration-300">
                    {a}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold tracking-[0.2em] uppercase mb-6 text-white/80">
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="tel:2624167774"
                aria-label="Call Gutters Craft at 262-416-7774"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300"
              >
                <Phone size={16} />
                <span className="text-sm">(262) 416-7774</span>
              </a>
              <a
                href="mailto:gutterscraft@gmail.com"
                aria-label="Email Gutters Craft at gutterscraft@gmail.com"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300"
              >
                <Mail size={16} />
                <span className="text-sm">gutterscraft@gmail.com</span>
              </a>
            </div>

            <div className="mt-8 bg-white/5 border border-white/10 p-4">
              <p className="text-xs font-bold tracking-[0.15em] uppercase text-white/60 mb-1">
                Licensed, Bonded &amp; Insured
              </p>
              <p className="text-xs text-white/40">
                Full coverage on every project.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Gutters Craft LLC. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll back to top of page"
            className="flex items-center gap-2 text-white/30 hover:text-white text-xs uppercase tracking-widest transition-colors duration-300"
          >
            Back to top
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
