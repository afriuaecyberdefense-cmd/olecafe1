import { useEffect, useRef } from 'react';
import { MessageCircle, Instagram, ChevronDown } from 'lucide-react';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleWhatsApp = () => {
    window.open('https://wa.me/971502626112', '_blank');
  };

  const handleInstagram = () => {
    window.open('https://instagram.com/olecafe.ae', '_blank');
  };

  const handleSnapchat = () => {
    window.open('https://snapchat.com/add/olecafe.ae', '_blank');
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[100dvh] flex flex-col items-center justify-center px-5 pb-24 pt-16 overflow-hidden bg-cream"
    >
      {/* Decorative floating circles */}
      <div className="absolute top-20 left-10 w-64 h-64 md:w-80 md:h-80 rounded-full bg-champagne/10 blur-3xl animate-float-slow pointer-events-none" />
      <div className="absolute bottom-32 right-10 w-48 h-48 md:w-64 md:h-64 rounded-full bg-burgundy/5 blur-3xl animate-float pointer-events-none" />

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-lg mx-auto">
        {/* Logo Badge */}
        <div
          className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 ease-out mb-6"
          style={{ transitionDelay: '0.1s' }}
        >
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-burgundy flex items-center justify-center shadow-lg animate-pulse-logo overflow-hidden">
            <img
              src="/imgaes/olecafe logo.jpeg"
              alt="Ole Cafe logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Brand Name */}
        <h1
          className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 ease-out font-brand text-burgundy text-4xl md:text-5xl font-bold italic mb-3"
          style={{ transitionDelay: '0.25s' }}
        >
          Olé Cafe
        </h1>

        {/* Tagline */}
        <p
          className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 ease-out text-text-secondary text-base md:text-lg mb-8"
          style={{ transitionDelay: '0.4s' }}
        >
          Premium Coffee & More
        </p>

        {/* Instagram QR Code */}
        <div
          className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 ease-out bg-white rounded-2xl border border-custom p-3 mb-6 card-shadow"
          style={{ transitionDelay: '0.5s' }}
        >
          <div className="w-24 h-24 bg-cream rounded-xl flex items-center justify-center mb-2">
            <div className="text-center">
              <Instagram className="w-10 h-10 text-burgundy mx-auto mb-1" />
              <span className="text-[10px] text-text-secondary block">@olecafe.ae</span>
            </div>
          </div>
          <p className="text-xs text-text-secondary">Scan for Instagram</p>
        </div>

        {/* Social Icons */}
        <div
          className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 ease-out flex gap-4 mb-10"
          style={{ transitionDelay: '0.6s' }}
        >
          <button
            onClick={handleWhatsApp}
            className="w-12 h-12 rounded-full bg-burgundy flex items-center justify-center text-white transition-all duration-300 hover:bg-champagne hover:scale-110 active:scale-95"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </button>
          <button
            onClick={handleInstagram}
            className="w-12 h-12 rounded-full bg-burgundy flex items-center justify-center text-white transition-all duration-300 hover:bg-champagne hover:scale-110 active:scale-95"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </button>
          <button
            onClick={handleSnapchat}
            className="w-12 h-12 rounded-full bg-burgundy flex items-center justify-center text-white transition-all duration-300 hover:bg-champagne hover:scale-110 active:scale-95"
            aria-label="Snapchat"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.206 1c.577 0 2.553.333 3.984 2.583.688 1.01 1.052 2.538.811 4.349a.484.484 0 0 0 .447.544c1.877.162 3.338.416 4.043.76.483.241.672.77.484 1.398-.273.901-1.462 1.317-2.31 1.482a.476.476 0 0 0-.36.615c.025.064.058.125.098.183.654.937 1.637 2.353 1.337 3.266-.2.604-.937.908-2.186.908a.48.48 0 0 0-.389.743c.298.428.37 1.04.043 1.456-.384.493-1.09.593-1.86.702-.13.019-.26.037-.388.061-.33.06-.648.295-.8.96-.197.854-.907 1.158-1.896 1.158-.39 0-.714-.088-1.006-.169-.246-.068-.479-.132-.73-.132-.264 0-.531.068-.814.14-.318.08-.664.167-1.065.167-.99 0-1.7-.304-1.896-1.157-.152-.666-.47-.901-.8-.96a8.563 8.563 0 0 1-.388-.061c-.77-.11-1.476-.21-1.86-.702-.327-.416-.255-1.028.043-1.456a.48.48 0 0 0-.389-.743c-1.25 0-1.986-.304-2.186-.908-.3-.913.683-2.33 1.337-3.266.04-.058.073-.119.098-.183a.476.476 0 0 0-.36-.615c-.848-.165-2.037-.581-2.31-1.482-.188-.628.001-1.157.484-1.398.705-.344 2.166-.598 4.043-.76a.484.484 0 0 0 .447-.544c-.241-1.811.123-3.339.811-4.349C9.24 1.333 11.216 1 11.793 1h.206-.206z"/>
            </svg>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div
          className="animate-on-scroll opacity-0 transition-all duration-700 ease-out"
          style={{ transitionDelay: '0.8s' }}
        >
          <a href="#menu" className="flex flex-col items-center text-text-secondary/60 hover:text-burgundy transition-colors">
            <span className="text-xs mb-2 tracking-wide">Explore Menu</span>
            <ChevronDown className="w-5 h-5 animate-bounce-gentle" />
          </a>
        </div>
      </div>

      <style>{`
        .animate-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
