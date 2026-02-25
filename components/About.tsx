import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">

          <div className="space-y-10">
            <div className="inline-block px-5 py-2 bg-white border border-black/5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              About us
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-navy leading-[0.85] tracking-tighter uppercase">
              Committed to helping loved ones care for their own family members and friends.
            </h2>
            <div className="space-y-8">
              <p className="text-slate-500 text-sm font-bold leading-relaxed max-w-sm">
                We strive to be a trusted leader in healthcare, by helping loved ones care for their family members and friends in the comfort of their own homes.
              </p>

              <Link to="/about-us" className="flex items-center group">
                <button className="bg-mint h-14 px-8 rounded-l-[20px] border-r-2 border-black/10 font-black text-navy text-[11px] uppercase tracking-[0.2em] group-hover:brightness-95 transition-all">
                  More About Us
                </button>
                <div className="bg-mint w-14 h-14 rounded-r-[20px] flex items-center justify-center group-hover:brightness-95 transition-all cursor-pointer">
                  <ArrowUpRight size={22} className="text-navy" strokeWidth={3} />
                </div>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[40px] overflow-hidden border-[8px] border-black aspect-[4/3] lg:aspect-square shadow-2xl relative">
              <img
                src="/senior-square.jpg"
                alt="Doctor consulting senior patient"
                className="w-full h-full object-cover"
              />
              {/* Overlay graphics */}
              <div className="absolute top-8 left-8 bg-mint p-4 rounded-2xl border-2 border-black/10 hidden md:block">
                <span className="text-2xl font-black block">150+</span>
                <span className="text-[10px] font-bold uppercase tracking-wider opacity-60">Clients</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;