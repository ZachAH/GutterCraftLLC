import { Star } from 'lucide-react';

// To add or remove reviews, simply edit this array.
// rating should be a number from 1 to 5.
const reviewsData = [
  {
    id: 1,
    name: 'Varani Hotel',
    rating: 5,
    text: 'Nice work! Very professional and friendly service'
  },
  {
    id: 3,
    name: 'Port Washington Glass',
    rating: 5,
    text: 'I highly recommend this business. Affordable pricing and quality results.'
  },
  {
    id: 2,
    name: 'Cora H.',
    rating: 5,
    text: 'Best price that I found. Scheduled and completed within a week.'
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-brand-gray-50 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="text-brand-blue font-semibold tracking-[0.2em] uppercase text-sm">
            Client Testimonials
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black mt-4 mb-6 leading-tight">
            Trusted by Our <br className="hidden md:block" />
            <span className="text-brand-blue">Community</span>
          </h2>
          <p className="text-brand-gray-600 text-lg md:text-xl">
            Don't just take our word for it. Here is what our clients have to say about our professionalism, quality, and service. Directly from Google.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewsData.map((review, i) => (
            <div
              key={review.id}
              className="reveal bg-brand-white p-8 lg:p-10 border border-brand-gray-100 shadow-xl shadow-brand-gray-200/40 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full relative"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Quote marks background */}
              <div className="absolute top-6 right-8 text-brand-gray-200/50 font-serif text-8xl leading-none select-none pointer-events-none">
                "
              </div>

              <div className="relative z-10 flex-grow flex flex-col">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={20}
                      fill={index < review.rating ? 'currentColor' : 'none'}
                      className={index < review.rating ? 'text-brand-accent' : 'text-brand-gray-300'}
                    />
                  ))}
                </div>

                <p className="text-brand-gray-700 text-lg italic leading-relaxed mb-8 flex-grow">
                  "{review.text}"
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 bg-brand-black text-brand-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-black text-lg">{review.name}</h4>
                    <span className="text-sm text-brand-green font-medium">Verified Client</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
