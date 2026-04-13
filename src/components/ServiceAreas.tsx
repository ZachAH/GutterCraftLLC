import { MapPin } from 'lucide-react';

const counties = [
  {
    name: 'Ozaukee County',
    cities: ['Cedarburg', 'Grafton', 'Mequon', 'Port Washington', 'Thiensville', 'Saukville'],
  },
  {
    name: 'Washington County',
    cities: ['West Bend', 'Hartford', 'Germantown', 'Jackson', 'Slinger', 'Kewaskum'],
  },
  {
    name: 'Sheboygan County',
    cities: ['Sheboygan', 'Sheboygan Falls', 'Plymouth', 'Kohler', 'Elkhart Lake'],
  },
  {
    name: 'Milwaukee County',
    cities: ['Milwaukee', 'Wauwatosa', 'Shorewood', 'Whitefish Bay', 'Brown Deer', 'Greenfield'],
  },
  {
    name: 'Waukesha County',
    cities: ['Waukesha', 'Brookfield', 'New Berlin', 'Menomonee Falls', 'Pewaukee', 'Oconomowoc'],
  },
  {
    name: 'Dodge County',
    cities: ['Beaver Dam', 'Horicon', 'Juneau', 'Mayville', 'Fox Lake'],
  },
  {
    name: 'Jefferson County',
    cities: ['Jefferson', 'Fort Atkinson', 'Watertown', 'Lake Mills', 'Johnson Creek'],
  },
];

export default function ServiceAreas() {
  return (
    <section id="areas" className="py-24 md:py-32 bg-white">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="text-center mb-16 reveal">
          <span className="text-brand-gray-400 text-sm font-semibold tracking-[0.3em] uppercase">
            Where We Work
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black mt-4 tracking-normal">
            Serving Southeast
            <br />
            <span className="italic font-light text-brand-gray-500">Wisconsin</span>
          </h2>
          <p className="text-brand-gray-500 text-lg mt-4 max-w-2xl mx-auto">
            Proudly serving 7 counties across SE Wisconsin. If you're in our area, we'd love to earn your business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {counties.map((county, i) => (
            <div
              key={county.name}
              className="reveal group border border-brand-gray-200 p-6 transition-all duration-500 hover:border-brand-black hover:shadow-lg"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <MapPin size={18} className="text-brand-black" />
                <h3 className="font-heading text-lg font-bold text-brand-black tracking-normal">
                  {county.name}
                </h3>
              </div>
              <div className="space-y-1.5">
                {county.cities.map((city) => (
                  <p key={city} className="text-brand-gray-500 text-sm">
                    {city}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <p className="text-brand-gray-400 text-sm">
            Don't see your area? <a href="#contact" className="text-brand-black font-semibold underline underline-offset-4 hover:no-underline">Contact us</a> — we may still be able to help.
          </p>
        </div>
      </div>
    </section>
  );
}
