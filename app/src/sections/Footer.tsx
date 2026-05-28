import { MessageCircle, Instagram } from 'lucide-react';

export default function Footer() {
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
    <footer className="bg-burgundy text-white pb-20 md:pb-0">
      {/* Top Area */}
      <div className="max-w-4xl mx-auto px-5 pt-10 pb-6 text-center">
        {/* Brand */}
        <div className="flex items-center justify-center gap-2 mb-1">
          <img
            src="/imgaes/olecafe%20logo.jpeg"
            alt="Ole Cafe logo"
            loading="eager"
            decoding="async"
            draggable={false}
            className="w-8 h-8 rounded-full object-cover"
          />
          <h3 className="font-brand italic text-white text-2xl font-bold">Olé</h3>
        </div>
        <p className="text-champagne text-sm mb-5">Premium Coffee & More</p>

        {/* Social Icons */}
        <div className="flex justify-center gap-3 mb-8">
          <button
            onClick={handleWhatsApp}
            className="w-9 h-9 rounded-full bg-burgundy-light flex items-center justify-center text-white transition-all duration-300 hover:bg-champagne hover:text-burgundy-dark active:scale-95"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </button>
          <button
            onClick={handleInstagram}
            className="w-9 h-9 rounded-full bg-burgundy-light flex items-center justify-center text-white transition-all duration-300 hover:bg-champagne hover:text-burgundy-dark active:scale-95"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </button>
          <button
            onClick={handleSnapchat}
            className="w-9 h-9 rounded-full bg-burgundy-light flex items-center justify-center text-white transition-all duration-300 hover:bg-champagne hover:text-burgundy-dark active:scale-95"
            aria-label="Snapchat"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.206 1c.577 0 2.553.333 3.984 2.583.688 1.01 1.052 2.538.811 4.349a.484.484 0 0 0 .447.544c1.877.162 3.338.416 4.043.76.483.241.672.77.484 1.398-.273.901-1.462 1.317-2.31 1.482a.476.476 0 0 0-.36.615c.025.064.058.125.098.183.654.937 1.637 2.353 1.337 3.266-.2.604-.937.908-2.186.908a.48.48 0 0 0-.389.743c.298.428.37 1.04.043 1.456-.384.493-1.09.593-1.86.702-.13.019-.26.037-.388.061-.33.06-.648.295-.8.96-.197.854-.907 1.158-1.896 1.158-.39 0-.714-.088-1.006-.169-.246-.068-.479-.132-.73-.132-.264 0-.531.068-.814.14-.318.08-.664.167-1.065.167-.99 0-1.7-.304-1.896-1.157-.152-.666-.47-.901-.8-.96a8.563 8.563 0 0 1-.388-.061c-.77-.11-1.476-.21-1.86-.702-.327-.416-.255-1.028.043-1.456a.48.48 0 0 0-.389-.743c-1.25 0-1.986-.304-2.186-.908-.3-.913.683-2.33 1.337-3.266.04-.058.073-.119.098-.183a.476.476 0 0 0-.36-.615c-.848-.165-2.037-.581-2.31-1.482-.188-.628.001-1.157.484-1.398.705-.344 2.166-.598 4.043-.76a.484.484 0 0 0 .447-.544c-.241-1.811.123-3.339.811-4.349C9.24 1.333 11.216 1 11.793 1h.206-.206z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-5">
        <div className="h-px bg-white/10" />
      </div>

      {/* Bottom Area */}
      <div className="max-w-4xl mx-auto px-5 py-5 text-center">
        <p className="text-white/50 text-xs mb-1">
          © 2026 Olé Cafe. All rights reserved.
        </p>
        <p className="text-white/40 text-xs">
          ADNOC Service Station, Yas Acres North
        </p>
      </div>
    </footer>
  );
}
