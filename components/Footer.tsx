import React from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0c1214] text-white p-12 lg:p-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-16 pb-16 border-b border-white/10">
          <div className="flex flex-col items-center md:flex-row gap-3">
            <img src="/fca-logo.png" alt="Friendly Care Logo" className="w-12 h-12 object-contain" />
            <span className="text-4xl font-black tracking-tighter uppercase text-center md:text-left">Friendly Care</span>
          </div>

          <nav className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 md:gap-12 text-[11px] font-black uppercase tracking-[0.3em] text-slate-500">
            <Link to="/staff" className="hover:text-mint transition-colors">Specialists</Link>
            <Link to="/faq" className="hover:text-mint transition-colors">FAQ</Link>
            <Link to="/privacy-policy" className="hover:text-mint transition-colors">Privacy Policy</Link>
            <Link to="/contact-us" className="hover:text-mint transition-colors">Contact Us</Link>
          </nav>
        </div>

        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em] text-center md:text-left">
            © 2024 Friendly Care Agency. <br className="md:hidden" /> Crafted with Excellence By <a href="https://www.verix.ai" target="_blank" rel="noopener noreferrer" className="text-mint hover:underline">Verix AI</a>.
          </p>

          <ul className="flex gap-4 list-none p-0 m-0" aria-label="Social media">
            {/* Facebook */}
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61568330535941"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Friendly Care Agency on Facebook (opens in a new tab)"
                className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:border-mint hover:bg-mint/10 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </li>
            {/* Instagram */}
            <li>
              <a
                href="https://www.instagram.com/friendlycareagency/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Friendly Care Agency on Instagram (opens in a new tab)"
                className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:border-mint hover:bg-mint/10 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;