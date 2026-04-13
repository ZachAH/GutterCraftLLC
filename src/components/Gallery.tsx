import { useState, useRef, useCallback } from 'react';

interface SliderProps {
  beforeLabel: string;
  afterLabel: string;
  caption: string;
}

function BeforeAfterSlider({ beforeLabel, afterLabel, caption }: SliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current || !isDragging.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const handleStart = useCallback(() => {
    isDragging.current = true;
  }, []);

  const handleEnd = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <div className="group">
      <div
        ref={containerRef}
        className="ba-slider relative aspect-[4/3] bg-brand-gray-100 overflow-hidden"
        onMouseDown={handleStart}
        onMouseMove={(e) => handleMove(e.clientX)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={handleStart}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={handleEnd}
      >
        {/* "Before" layer */}
        <div className="absolute inset-0 flex items-center justify-center bg-brand-gray-200">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-brand-gray-300 flex items-center justify-center">
              <span className="text-brand-gray-500 text-xs font-bold uppercase">Before</span>
            </div>
            <p className="text-brand-gray-400 text-xs">{beforeLabel}</p>
          </div>
        </div>

        {/* "After" layer */}
        <div
          className="ba-after absolute inset-0 flex items-center justify-center bg-brand-gray-100"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-brand-black flex items-center justify-center">
              <span className="text-white text-xs font-bold uppercase">After</span>
            </div>
            <p className="text-brand-gray-500 text-xs">{afterLabel}</p>
          </div>
        </div>

        {/* Handle */}
        <div
          className="ba-handle"
          style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
        />

        {/* Labels */}
        <span className="absolute top-4 left-4 bg-black/60 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider z-20">
          Before
        </span>
        <span className="absolute top-4 right-4 bg-white/90 text-black text-xs font-bold px-3 py-1 uppercase tracking-wider z-20">
          After
        </span>
      </div>
      <p className="text-brand-gray-500 text-sm mt-3 font-medium">{caption}</p>
    </div>
  );
}

const galleryItems: SliderProps[] = [
  {
    beforeLabel: 'Clogged gutters with debris',
    afterLabel: 'Clean seamless install',
    caption: 'Full gutter replacement — Ozaukee County',
  },
  {
    beforeLabel: 'Damaged fascia boards',
    afterLabel: 'New aluminum wrap finish',
    caption: 'Fascia & soffit restoration — Cedarburg',
  },
  {
    beforeLabel: 'Old shingle roof',
    afterLabel: 'New standing seam metal',
    caption: 'Metal roof installation — Grafton',
  },
  {
    beforeLabel: 'Leaf-clogged gutter system',
    afterLabel: 'Leaf guard protection installed',
    caption: 'Leaf protection system — Mequon',
  },
  {
    beforeLabel: 'Storm damaged siding',
    afterLabel: 'Matched replacement panels',
    caption: 'Siding repair — West Bend',
  },
  {
    beforeLabel: 'Failing gutter system',
    afterLabel: 'Complete 6" seamless install',
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
            Drag the slider to see the transformation. Real projects from homes across Southeast Wisconsin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.slice(0, 3).map((item, i) => (
            <div key={i} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <BeforeAfterSlider {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
