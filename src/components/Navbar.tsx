import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#gallery' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Service Areas', href: '#areas' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-brand-black/95 backdrop-blur-md shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-16 xl:px-24 flex items-center justify-between">
        <a href="#" aria-label="Gutters Craft Home" className="flex items-center gap-3 group">
          <img
            src="/logo.webp"
            alt="Gutters Craft LLC"
            className="h-12 w-auto brightness-0 invert transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/80 hover:text-white text-sm font-medium tracking-wide uppercase transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:2624167774"
            aria-label="Call Gutters Craft at 262-416-7774"
            className="flex items-center gap-2 bg-brand-accent text-white px-5 py-2.5 text-sm font-semibold tracking-wide uppercase transition-all duration-300 hover:opacity-90 hover:scale-105"
          >
            <Phone size={16} />
            262.416.7774
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-brand-black/98 backdrop-blur-lg transition-all duration-500 overflow-hidden ${
          menuOpen ? 'max-h-[500px] border-t border-white/10' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-6 space-y-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-white/80 hover:text-white text-lg font-medium tracking-wide transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:2624167774"
            className="flex items-center justify-center gap-2 bg-brand-accent text-white px-5 py-3 text-sm font-semibold tracking-wide uppercase mt-4"
          >
            <Phone size={16} />
            262.416.7774
          </a>
        </div>
      </div>
    </nav>
  );
}
