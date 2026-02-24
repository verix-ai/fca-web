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
            © 2024 Friendly Care Agency. <br className="md:hidden" /> Crafted with Modern Excellence.
          </p>

          <div className="flex gap-6">
            {['FB', 'TW', 'IG', 'LI'].map((social) => (
              <div key={social} className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-[10px] font-black text-slate-500 hover:text-white hover:border-mint hover:bg-mint/10 transition-all cursor-pointer">
                {social}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;