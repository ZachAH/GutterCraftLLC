import { CheckCircle, Clock, Sparkles, Shield, Users, ThumbsUp } from 'lucide-react';

const reasons = [
  {
    icon: Clock,
    title: 'We Actually Show Up',
    description:
      "No ghosting. No excuses. When we say we'll be there, we're there — on time, every time. Your schedule matters to us.",
  },
  {
    icon: Sparkles,
    title: 'We Don\'t Just Clean — We Protect',
    description:
      "We go beyond the surface. Every job includes a thorough inspection and recommendations to prevent future problems.",
  },
  {
    icon: ThumbsUp,
    title: 'No Pressure. No Mess.',
    description:
      "We give honest assessments, fair pricing, and leave your property cleaner than we found it. Every single time.",
  },
  {
    icon: Shield,
    title: 'Licensed, Bonded & Insured',
    description:
      "Full liability coverage and worker's comp on every job. You're protected, and so is your home.",
  },
  {
    icon: Users,
    title: 'Family-Owned Since Day One',
    description:
      'Three generations of Wisconsin craftsmanship. We treat every home like it\'s our own because our reputation is our livelihood.',
  },
  {
    icon: CheckCircle,
    title: '20+ Years of Experience',
    description:
      "Over two decades in the trade means we've seen it all and solved it all. No surprises, just proven results.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-brand-black text-white relative overflow-hidden">
      {/* Subtle water flow effect on top border */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent, rgba(255,255,255,0.15), transparent)',
          backgroundSize: '200% 100%',
          animation: 'water-flow 4s linear infinite',
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        {/* Header with family badge */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-24">
          <div className="reveal-left">
            <span className="text-brand-blue text-sm font-semibold tracking-[0.3em] uppercase">
              Why Choose Us
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-normal leading-snug">
              The Gutters Craft
              <br />
              <span className="italic font-light text-white/60">Difference</span>
            </h2>
          </div>

          {/* Family-owned badge */}
          <div className="reveal-right">
            <div className="bg-white/5 border border-white/10 p-8 backdrop-blur-sm">
              <div className="flex items-start gap-6">
                <img
                  src="/logo.webp"
                  alt="Gutters Craft LLC"
                  className="w-24 h-auto brightness-0 invert opacity-80"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Reason cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="reveal group bg-white/5 border border-white/10 p-10 transition-all duration-500 hover:bg-white/10 hover:border-brand-blue/50"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-14 h-14 bg-brand-green/10 flex items-center justify-center mb-6 rounded-full transition-all duration-300 group-hover:bg-brand-green group-hover:scale-110 shadow-sm">
                  <Icon size={24} className="text-brand-green group-hover:text-brand-black transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-normal">
                  {reason.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
