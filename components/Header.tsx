import React from 'react';
import { User, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About us', href: '/#about' },
    { name: 'Service', href: '/#services' },
    { name: 'Team', href: '/#team' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <header className="flex items-center gap-2 h-20">
      {/* Navigation Pill */}
      <div className="flex-1 bg-[#f4f2ee] h-full rounded-[24px] flex items-center px-4 md:px-8 border-2 border-black/5">
        <Link to="/" className="flex items-center gap-2 pr-4 md:pr-8 border-r border-black/10">
          <img src="/fca-logo.png" alt="Friendly Care Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
          <span className="text-xl md:text-2xl font-black tracking-tighter text-navy uppercase leading-none">Friendly Care</span>
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
        <Link to="/role-selection" className="w-14 md:w-20 h-full flex items-center justify-center bg-mint rounded-[24px] text-navy hover:brightness-95 transition-all">
          <User size={24} strokeWidth={2.5} />
        </Link>
        <a href="tel:4789734831" className="w-14 md:w-auto md:px-10 h-full bg-mint rounded-[24px] text-navy font-black uppercase text-[10px] md:text-xs tracking-[0.2em] hover:brightness-95 transition-all whitespace-nowrap flex items-center justify-center">
          <Phone size={22} className="md:hidden" strokeWidth={2.5} />
          <span className="hidden md:inline">Call Today</span>
        </a>
      </div>
    </header>
  );
};

export default Header;