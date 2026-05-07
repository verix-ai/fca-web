import React, { useState } from 'react';
import { User, Phone, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackCustom } from '../lib/pixel';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About us', href: '/#about' },
    { name: 'Service', href: '/#services' },
    { name: 'Team', href: '/#team' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <header className="flex items-center gap-2 h-20 relative z-50">
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

      {/* User Actions - Account hidden on Mobile, Call shown everywhere */}
      <div className="flex items-center gap-2 h-full">
        <Link to="/role-selection" aria-label="Sign in or create an account" className="hidden w-14 md:w-20 h-full md:flex items-center justify-center bg-mint rounded-[24px] text-navy hover:brightness-95 transition-all">
          <User size={24} strokeWidth={2.5} aria-hidden="true" />
        </Link>
        <a href="tel:+14789734831" onClick={() => trackCustom('PhoneClick', { source: 'header-desktop' })} aria-label="Call Friendly Care Agency at (478) 973-4831" className="w-14 md:w-auto md:px-10 h-full flex items-center justify-center bg-mint rounded-[24px] text-navy font-black uppercase text-[10px] md:text-xs tracking-[0.2em] hover:brightness-95 transition-all whitespace-nowrap">
          <Phone size={22} className="md:hidden" strokeWidth={2.5} aria-hidden="true" />
          <span className="hidden md:inline">Call Today</span>
        </a>
      </div>

      {/* Mobile/Tablet Menu Toggle */}
      <div className="xl:hidden flex items-center h-full">
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          className="w-14 md:w-20 h-full flex items-center justify-center bg-mint rounded-[24px] text-navy hover:brightness-95 transition-all"
        >
          {isMenuOpen ? <X size={24} strokeWidth={2.5} aria-hidden="true" /> : <Menu size={24} strokeWidth={2.5} aria-hidden="true" />}
        </button>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div id="mobile-nav" className="absolute top-[88px] left-0 right-0 bg-[#f4f2ee] rounded-[24px] p-6 shadow-xl border-2 border-black/5 flex flex-col gap-6 xl:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <React.Fragment key={link.name}>
                {link.href.startsWith('#') ? (
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-sm font-bold text-slate-600 hover:text-black transition-colors uppercase tracking-[0.15em] py-2 border-b border-black/5"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-sm font-bold text-slate-600 hover:text-black transition-colors uppercase tracking-[0.15em] py-2 border-b border-black/5"
                  >
                    {link.name}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* User/Call buttons in dropdown - Only visible on Mobile */}
          <div className="flex md:hidden gap-2 mt-2">
            <Link
              to="/role-selection"
              onClick={() => setIsMenuOpen(false)}
              className="flex-1 h-14 flex items-center justify-center gap-2 bg-mint rounded-[16px] text-navy font-bold hover:brightness-95 transition-all"
            >
              <User size={20} strokeWidth={2.5} />
              <span className="text-xs tracking-wider uppercase">Account</span>
            </Link>
            <a
              href="tel:+14789734831"
              onClick={() => {
                trackCustom('PhoneClick', { source: 'header-mobile' });
                setIsMenuOpen(false);
              }}
              aria-label="Call Friendly Care Agency at (478) 973-4831"
              className="flex-1 h-14 flex items-center justify-center gap-2 bg-mint rounded-[16px] text-navy font-bold hover:brightness-95 transition-all"
            >
              <Phone size={20} strokeWidth={2.5} aria-hidden="true" />
              <span className="text-xs tracking-wider uppercase">Call Now</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;