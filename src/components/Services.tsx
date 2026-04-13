import { Shield, Droplets, Home, Wrench } from 'lucide-react';
import metalGutterImg from '../images/metal_gutter.jpg';
import manWorkingImg from '../images/manworking.jpeg';
import roofRepairImg from '../images/roof_repair.jpg';
import sidingRepairImg from '../images/siding_repair.jpg';

const services = [
  {
    icon: Droplets,
    title: 'Seamless Gutter Installation & Gutter Guards',
    description:
      'Custom-fabricated seamless gutters built on-site for a perfect fit. We also install premium leaf protection systems that keep debris out and water flowing — eliminating dangerous clogs and protecting your foundation for decades.',
    features: ['5" & 6" Seamless Aluminum', 'LeafGuard & Micro-Mesh Options', 'Lifetime Warranty Available', 'Custom Color Matching'],
    imageAlt: 'Seamless gutter installation close-up',
    image: metalGutterImg,
  },
  {
    icon: Home,
    title: 'Fascia, Soffit & Aluminum Wraps',
    description:
      'Protect the bones of your roof with professional fascia and soffit replacement. Our precision aluminum wrapping ensures zero maintenance, no rot, and a clean finish that elevates your home\'s curb appeal.',
    features: ['Custom Aluminum Wrapping', 'Rot & Damage Repair', 'Ventilated Soffit Options', 'Seamless Color Match'],
    imageAlt: 'Fascia and soffit aluminum wrap detail',
    image: manWorkingImg,
  },
  {
    icon: Shield,
    title: 'Metal & Shingle Roof Repair/Installation',
    description:
      'From emergency storm repairs to full roof replacements, our crew has the experience to handle any roofing challenge. We work with both metal and asphalt shingle systems, delivering lasting protection against Wisconsin\'s toughest weather.',
    features: ['Standing Seam Metal Roofing', 'Asphalt Shingle Systems', 'Storm Damage Repair', 'Full Tear-Off & Replacement'],
    imageAlt: 'Metal roof installation on Wisconsin home',
    image: roofRepairImg,
  },
  {
    icon: Wrench,
    title: 'Siding Repair',
    description:
      'Damaged siding compromises your home\'s energy efficiency and protection. We handle targeted repairs and matching replacement sections, restoring your exterior to like-new condition without the cost of a full re-side.',
    features: ['Vinyl & Aluminum Siding', 'Storm Damage Repair', 'Color Matching', 'Insulation Inspection'],
    imageAlt: 'Siding repair work in progress',
    image: sidingRepairImg,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        {/* Section header */}
        <div className="text-center mb-20 reveal">
          <span className="text-brand-blue text-sm font-semibold tracking-[0.3em] uppercase">
            What We Do
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black mt-4 tracking-normal">
            Built to Last.
            <br />
            <span className="italic font-light text-brand-gray-500">Done Right.</span>
          </h2>
        </div>

        {/* Z-pattern services */}
        <div className="space-y-24 md:space-y-32">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isReversed = i % 2 !== 0;

            return (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  isReversed ? 'lg:direction-rtl' : ''
                }`}
              >
                {/* Image */}
                <div
                  className={`${isReversed ? 'lg:order-2' : ''} ${
                    isReversed ? 'reveal-right' : 'reveal-left'
                  }`}
                >
                  <div className="relative aspect-[4/3] bg-brand-gray-100 overflow-hidden group rounded-2xl shadow-xl">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/10 transition-all duration-500" />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`${isReversed ? 'lg:order-1' : ''} ${
                    isReversed ? 'reveal-left' : 'reveal-right'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-brand-green" />
                    </div>
                    <span className="text-brand-gray-400 text-xs font-semibold tracking-[0.3em] uppercase">
                      Service {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="font-heading text-3xl md:text-4xl font-bold text-brand-black mb-6 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-brand-gray-600 text-lg leading-loose mb-8">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feat) => (
                      <div
                        key={feat}
                        className="flex items-center gap-2 text-sm text-brand-gray-600"
                      >
                        <div className="w-2 h-2 bg-brand-green rounded-full shrink-0" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
