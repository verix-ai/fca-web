import React from 'react';
import { User, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About us', href: '/#about' },
    { name: 'Service', href: '/#services' },
    { name: 'Pages', href: '#' },
    { name: 'Team', href: '/#team' },
  ];

  return (
    <header className="flex items-center gap-2 h-20">
      {/* Navigation Pill */}
      <div className="flex-1 bg-[#f4f2ee] h-full rounded-[24px] flex items-center px-8 border-2 border-black/5">
        <Link to="/" className="flex items-center gap-2 pr-8 border-r border-black/10">
          <img src="/fca-logo.png" alt="Friendly Care Logo" className="w-10 h-10 object-contain" />
          <span className="text-2xl font-black tracking-tighter text-navy uppercase">Friendly Care</span>
        </Link>

        <nav className="hidden xl:flex items-center gap-10 pl-10">
          {navLinks.map((link) => (
            <React.Fragment key={link.name}>
              {link.href.startsWith('#') ? (
                <a
                  href={link.href}
                  className="text-[11px] font-bold text-slate-600 hover:text-black transition-colors uppercase tracking-[0.15em]"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  to={link.href}
                  className="text-[11px] font-bold text-slate-600 hover:text-black transition-colors uppercase tracking-[0.15em]"
                >
                  {link.name}
                </Link>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>

      {/* User Actions */}
      <div className="flex items-center gap-2 h-full">
        <button className="w-20 h-full flex items-center justify-center bg-mint rounded-[24px] text-navy hover:brightness-95 transition-all">
          <User size={24} strokeWidth={2.5} />
        </button>
        <a href="tel:4789734831" className="px-10 h-full bg-mint rounded-[24px] text-navy font-black uppercase text-xs tracking-[0.2em] hover:brightness-95 transition-all whitespace-nowrap flex items-center">
          Call Today
        </a>
      </div>
    </header>
  );
};

export default Header;