import { useEffect, useRef, useState } from 'react';
import { ArrowRight, MessageSquare, Shield, Droplets, Home, Wrench } from 'lucide-react';
import heroBg from '../images/hero.png';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [leaves, setLeaves] = useState<{ id: number; left: number; size: number; delay: number; duration: number; opacity: number }[]>([]);

  useEffect(() => {
    const newLeaves = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 12 + Math.random() * 14,
      delay: Math.random() * 8,
      duration: 8 + Math.random() * 6,
      opacity: 0.15 + Math.random() * 0.25,
    }));
    setLeaves(newLeaves);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image placeholder with dark overlay */}
      <div className="absolute inset-0 bg-brand-black">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Falling leaves */}
      {leaves.map((leaf) => (
        <svg
          key={leaf.id}
          className="leaf"
          style={{
            left: `${leaf.left}%`,
            top: '-5%',
            width: leaf.size,
            height: leaf.size,
            animationDelay: `${leaf.delay}s`,
            animationDuration: `${leaf.duration}s`,
            opacity: leaf.opacity,
            animationIterationCount: 'infinite',
          }}
          viewBox="0 0 24 24"
          fill="var(--color-brand-green)"
        >
          <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
        </svg>
      ))}

      {/* Content */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 text-center">
        <div className="reveal flex justify-center mb-10">
          <div className="inline-flex flex-col md:flex-row items-center gap-4 md:gap-6 bg-brand-black/60 backdrop-blur-md border border-white/10 border-b-4 border-b-brand-blue px-6 sm:px-8 py-4 shadow-2xl rounded-sm">
            <div className="flex items-center gap-3">
              <Shield size={20} className="text-brand-green" />
              <span className="text-white text-sm font-bold tracking-widest uppercase">
                Licensed, Bonded & Insured
              </span>
            </div>
            <div className="hidden md:block w-[1px] h-6 bg-white/20"></div>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-white/80 text-xs sm:text-sm font-bold tracking-widest uppercase">
              <span className="flex items-center gap-2"><Droplets size={16} className="text-brand-blue" /> Gutters</span>
              <span className="flex items-center gap-2"><Home size={16} className="text-brand-blue" /> Roofing</span>
              <span className="flex items-center gap-2"><Wrench size={16} className="text-brand-blue" /> Siding</span>
            </div>
          </div>
        </div>

        <h1 className="reveal font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-8">
          20+ Years of
          <br />
          <span className="italic font-light text-brand-gray-200">Craftsmanship</span>
        </h1>

        <p className="reveal text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-6 font-light leading-loose">
          Honest Wisconsin work. Family-owned gutter installation, repair &amp; protection serving Southeast Wisconsin since 2004.
        </p>

        <p className="reveal text-white/70 text-sm tracking-widest uppercase mb-12">
          Ozaukee &bull; Washington &bull; Milwaukee &bull; Waukesha &bull; Sheboygan
        </p>

        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            aria-label="Scroll to contact form to get a free quote"
            className="group flex items-center gap-3 bg-brand-accent text-white px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:opacity-90 hover:scale-105 hover:shadow-2xl"
          >
            Get a Free Quote
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="sms:2624167774"
            aria-label="Send a text message to 262-416-7774"
            className="group flex items-center gap-3 border-2 border-white/40 text-white px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:border-white hover:bg-white/10"
          >
            <MessageSquare size={18} />
            Call or Text: 262.416.7774
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-white/50 animate-pulse" />
      </div>
    </section>
  );
}
