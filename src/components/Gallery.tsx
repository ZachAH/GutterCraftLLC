import { Camera } from 'lucide-react';

interface GalleryItem {
  id: number;
  imageUrl: string;
  caption: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    imageUrl: '', // Add image path here, like '/images/work-1.jpg'
    caption: 'Full gutter replacement — Ozaukee County',
  },
  {
    id: 2,
    imageUrl: '',
    caption: 'Fascia & soffit restoration — Cedarburg',
  },
  {
    id: 3,
    imageUrl: '',
    caption: 'Metal roof installation — Grafton',
  },
  {
    id: 4,
    imageUrl: '',
    caption: 'Leaf protection system — Mequon',
  },
  {
    id: 5,
    imageUrl: '',
    caption: 'Siding repair — West Bend',
  },
  {
    id: 6,
    imageUrl: '',
    caption: 'Seamless gutter upgrade — Waukesha',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-brand-gray-50">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="text-center mb-16 reveal">
          <span className="text-brand-gray-400 text-sm font-semibold tracking-[0.3em] uppercase">
            Portfolio
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black mt-4 tracking-normal">
            View Our Work
          </h2>
          <p className="text-brand-gray-500 text-lg mt-4 max-w-2xl mx-auto">
            Explore our recent projects. Real work from real homes across Southeast Wisconsin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, i) => (
            <div key={item.id} className="reveal group" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="relative aspect-[4/3] bg-brand-gray-200 overflow-hidden shadow-lg mb-4">
                {item.imageUrl ? (
                  <img 
                    src={item.imageUrl} 
                    alt={item.caption} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-brand-gray-400 bg-brand-gray-200 transition-transform duration-700 group-hover:scale-105">
                    <Camera size={40} className="mb-3 opacity-40 shrink-0" />
                    <span className="text-sm uppercase tracking-wider font-bold opacity-60">Image Placeholder</span>
                  </div>
                )}
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/10 transition-colors duration-300 pointer-events-none" />
              </div>
              <h3 className="text-brand-black text-lg font-bold tracking-tight">{item.caption}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
