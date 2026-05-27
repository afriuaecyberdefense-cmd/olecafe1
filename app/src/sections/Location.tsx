import { useEffect, useRef, useState } from 'react';
import { MapPin, Clock } from 'lucide-react';

export default function Location() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMapClick = () => {
    window.open('https://maps.google.com/?q=ADNOC+Service+Station+Yas+Acres+North+Abu+Dhabi', '_blank');
  };

  return (
    <section
      ref={sectionRef}
      id="location"
      className="py-16 md:py-20 bg-cream scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto px-5">
        {/* Section Header */}
        <div
          className={`text-center mb-10 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="font-brand text-burgundy text-3xl md:text-4xl font-semibold mb-3">
            Find Us
          </h2>
          <div className="w-10 h-0.5 bg-champagne mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Location Info Card */}
          <div
            className={`bg-white rounded-2xl border border-custom p-6 md:p-7 card-shadow transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="flex items-start gap-4 mb-5">
              <div className="w-10 h-10 rounded-full bg-burgundy/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-burgundy" />
              </div>
              <div>
                <h3 className="font-semibold text-text-primary text-base mb-1">Address</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  ADNOC Service Station, Yas Acres North (437), Abu Dhabi, UAE
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-burgundy/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-burgundy" />
              </div>
              <div>
                <h3 className="font-semibold text-text-primary text-base mb-1">Opening Hours</h3>
                <p className="text-text-secondary text-sm">
                  Open Daily: 7:00 AM — 9:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div
            className={`bg-gradient-to-br from-[#E8DDD4] to-[#D4C5B5] rounded-2xl h-56 md:h-auto flex flex-col items-center justify-center cursor-pointer transition-all duration-700 delay-400 hover:shadow-lg group ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            onClick={handleMapClick}
          >
            <div className="w-12 h-12 rounded-full bg-burgundy/10 flex items-center justify-center mb-3 group-hover:bg-burgundy/20 transition-colors">
              <MapPin className="w-6 h-6 text-burgundy" />
            </div>
            <span className="text-burgundy font-medium text-sm group-hover:underline">
              View on Google Maps
            </span>
            <span className="text-text-secondary text-xs mt-1">Click to open directions</span>
          </div>
        </div>
      </div>
    </section>
  );
}
