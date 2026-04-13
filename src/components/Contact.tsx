import { useState, type FormEvent } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Build mailto link as a fallback — in production, wire up to a backend or service like Formspree/EmailJS
    const name = data.get('name') as string;
    const phone = data.get('phone') as string;
    const address = data.get('address') as string;
    const service = data.get('service') as string;
    const message = data.get('message') as string;

    const subject = encodeURIComponent(`New Quote Request from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nAddress: ${address}\nService Needed: ${service}\nMessage: ${message}`
    );

    window.location.href = `mailto:gutterscraft@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-brand-gray-50">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — info */}
          <div className="reveal-left">
            <span className="text-brand-gray-400 text-sm font-semibold tracking-[0.3em] uppercase">
              Get In Touch
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black mt-4 tracking-normal leading-snug">
              Ready for a
              <br />
              <span className="italic font-light text-brand-gray-500">Free Quote?</span>
            </h2>
            <p className="text-brand-gray-500 text-lg mt-6 leading-relaxed">
              No pressure, no obligations. Just honest, upfront pricing from a family that's been doing this for over 20 years.
            </p>

            <div className="mt-10 space-y-6">
              <address className="not-italic space-y-6">
                <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-brand-green" />
                </div>
                <div>
                  <p className="text-sm text-brand-gray-400 font-medium">Call Us</p>
                  <a href="tel:2624167774" aria-label="Call Gutters Craft at 262-416-7774" className="text-brand-black font-bold text-lg hover:underline">
                    (262) 416-7774
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-brand-green" />
                </div>
                <div>
                  <p className="text-sm text-brand-gray-400 font-medium">Email</p>
                  <a href="mailto:gutterscraft@gmail.com" aria-label="Email Gutters Craft at gutterscraft@gmail.com" className="text-brand-black font-bold text-lg hover:underline">
                    gutterscraft@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-brand-green" />
                </div>
                <div>
                  <p className="text-sm text-brand-gray-400 font-medium">Service Area</p>
                  <p className="text-brand-black font-bold text-lg">Southeast Wisconsin</p>
                </div>
                </div>
              </address>
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal-right">
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-brand-gray-200 p-8 md:p-10 shadow-sm"
            >
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-brand-black mb-2 tracking-wide uppercase">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-brand-gray-200 bg-brand-gray-50 text-brand-black placeholder-brand-gray-400 focus:outline-none focus:border-brand-black focus:ring-1 focus:ring-brand-black transition-all duration-300"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-brand-black mb-2 tracking-wide uppercase">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-brand-gray-200 bg-brand-gray-50 text-brand-black placeholder-brand-gray-400 focus:outline-none focus:border-brand-black focus:ring-1 focus:ring-brand-black transition-all duration-300"
                    placeholder="(262) 555-0123"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-semibold text-brand-black mb-2 tracking-wide uppercase">
                    Property Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    className="w-full px-4 py-3 border border-brand-gray-200 bg-brand-gray-50 text-brand-black placeholder-brand-gray-400 focus:outline-none focus:border-brand-black focus:ring-1 focus:ring-brand-black transition-all duration-300"
                    placeholder="123 Main St, Cedarburg, WI"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-brand-black mb-2 tracking-wide uppercase">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 border border-brand-gray-200 bg-brand-gray-50 text-brand-black focus:outline-none focus:border-brand-black focus:ring-1 focus:ring-brand-black transition-all duration-300 appearance-none"
                  >
                    <option value="">Select a service...</option>
                    <option value="Gutter Installation">Seamless Gutter Installation</option>
                    <option value="Gutter Guards">Gutter Guards / Leaf Protection</option>
                    <option value="Gutter Cleaning">Gutter Cleaning</option>
                    <option value="Gutter Repair">Gutter Repair</option>
                    <option value="Fascia & Soffit">Fascia, Soffit & Aluminum Wraps</option>
                    <option value="Roofing">Roof Repair / Installation</option>
                    <option value="Siding">Siding Repair</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-brand-black mb-2 tracking-wide uppercase">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-brand-gray-200 bg-brand-gray-50 text-brand-black placeholder-brand-gray-400 focus:outline-none focus:border-brand-black focus:ring-1 focus:ring-brand-black transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full mt-8 flex items-center justify-center gap-3 bg-brand-accent text-white px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:opacity-90 hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitted ? (
                  'Opening Email Client...'
                ) : (
                  <>
                    Request Free Quote
                    <Send size={16} />
                  </>
                )}
              </button>

              <p className="text-center text-brand-gray-400 text-xs mt-4">
                We respond to all inquiries within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
