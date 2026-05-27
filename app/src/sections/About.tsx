import { useEffect, useRef, useState } from 'react';

export default function About() {
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

  const stats = [
    { number: '10+', label: 'Menu Categories' },
    { number: '50+', label: 'Menu Items' },
    { number: 'Premium', label: 'Quality' },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-16 md:py-20 bg-white scroll-mt-20"
    >
      <div className="max-w-2xl mx-auto px-5 text-center">
        {/* Section Header */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="font-brand text-burgundy text-3xl md:text-4xl font-semibold mb-3">
            About Olé
          </h2>
          <div className="w-10 h-0.5 bg-champagne mx-auto rounded-full mb-8" />
        </div>

        {/* Description */}
        <p
          className={`text-text-primary text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Olé Cafe is your destination for premium coffee, refreshing beverages, and delicious treats. 
          Located at ADNOC Service Station in Yas Acres North, we serve carefully crafted drinks 
          made with the finest ingredients. Whether you're grabbing your morning coffee or enjoying 
          an afternoon treat, Olé Cafe is here to make your day better.
        </p>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${400 + index * 150}ms` }}
            >
              <span className="font-brand text-burgundy text-2xl md:text-3xl font-semibold mb-1">
                {stat.number}
              </span>
              <span className="text-text-secondary text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
