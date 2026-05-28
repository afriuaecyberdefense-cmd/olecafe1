import { useEffect, useRef, useState } from 'react';
import { MessageCircle, Instagram, ChevronDown } from 'lucide-react';

const HERO_LOGO_STORAGE_KEY = 'olecafe_hero_logo_v1';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [heroLogoSrc, setHeroLogoSrc] = useState<string>(() => {
    try {
      return localStorage.getItem(HERO_LOGO_STORAGE_KEY) || '/imgaes/olecafe%20logo.jpeg';
    } catch {
      return '/imgaes/olecafe%20logo.jpeg';
    }
  });

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

  const handleTiktok = () => {
    window.open('https://www.tiktok.com/@olecafe.ae', '_blank');
  };

  const openLogoPicker = () => {
    fileInputRef.current?.click();
  };

  const onLogoFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) return;

    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === 'string' ? reader.result : null;
      if (!result) return;

      setHeroLogoSrc(result);
      try {
        localStorage.setItem(HERO_LOGO_STORAGE_KEY, result);
      } catch {
        // ignore storage failures (private mode, quota, etc.)
      }
    };
    reader.readAsDataURL(file);
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
          <button
            type="button"
            onClick={openLogoPicker}
            className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-burgundy flex items-center justify-center shadow-lg animate-pulse-logo overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne/80"
            aria-label="Change hero logo"
            title="Click to change the logo"
          >
            <img
              src={heroLogoSrc}
              alt="Ole Cafe logo"
              loading="eager"
              decoding="async"
              draggable={false}
              className="w-full h-full object-cover"
            />
          </button>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={onLogoFileChange}
          />
        </div>

        {/* Tagline */}
        <p
          className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 ease-out text-text-secondary text-base md:text-lg mb-8"
          style={{ transitionDelay: '0.4s' }}
        >
          Premium Coffee & More. Fresh, fast, and made for you.
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
            onClick={handleTiktok}
            className="w-12 h-12 rounded-full bg-burgundy flex items-center justify-center text-white transition-all duration-300 hover:bg-champagne hover:scale-110 active:scale-95"
            aria-label="TikTok"
          >
            {/* Simple TikTok-like note */}
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M16.2 7.3c.9.7 1.9 1 3.1 1V5.6c-1.2 0-2.3-.3-3.2-.9-.9-.6-1.5-1.4-1.8-2.4h-2.1v13.3c0 1-.8 1.8-1.8 1.8S9 16.6 9 15.6s.8-1.8 1.8-1.8c.3 0 .6.1.9.2V11.7c-.3-.1-.6-.1-.9-.1-2.6 0-4.7 2.1-4.7 4.7s2.1 4.7 4.7 4.7 4.7-2.1 4.7-4.7V7.3h2.1z" />
            </svg>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div
          className="animate-on-scroll opacity-0 transition-all duration-700 ease-out"
          style={{ transitionDelay: '0.8s' }}
        >
          <a
            href="#menu"
            className="flex flex-col items-center text-text-secondary/60 hover:text-burgundy transition-colors"
          >
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

