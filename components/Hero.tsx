import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative px-6 lg:px-12 pt-8 pb-8 overflow-hidden flex flex-col items-center h-[calc(100vh-80px)] min-h-[600px] justify-center">




      {/* Top Typography (Background Layer) */}
      <div className="w-full text-center z-0 mt-8">
        <p className="text-xl md:text-2xl font-bold text-mint uppercase tracking-widest mb-4">
          Get Paid To Care Of Your Loved Ones
        </p>
        <h1 className="text-[9vw] font-black text-navy leading-[0.8] tracking-tighter uppercase select-none whitespace-nowrap">
          YOUR HEALTH,
        </h1>
      </div>

      {/* Doctor Image Container (Middle Layer) */}
      <div className="relative z-10 w-full max-w-2xl -mt-16 flex justify-center">
        <div className="relative">
          <img
            src="/hero-nurse.png"
            alt="Smiling Nurse"
            className="h-auto max-h-[50vh] w-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.15)] rounded-b-full scale-100"
          />
          {/* Subtle glow behind doctor */}
          <div className="absolute inset-0 bg-mint/10 rounded-full blur-[100px] -z-10"></div>
        </div>
      </div>

      {/* Bottom Typography (Foreground Layer) */}
      <div className="absolute bottom-[28%] w-full text-center z-20 pointer-events-none">
        <h1 className="text-[9vw] font-black text-navy leading-[0.8] tracking-tighter uppercase select-none whitespace-nowrap">
          OUR PRIORITY
        </h1>
      </div>

      {/* Bottom Controls Area */}
      <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end z-30">
        <div className="max-w-[200px]">
          <p className="text-[14px] font-extrabold text-slate-500 uppercase leading-relaxed tracking-widest">
            GA's #1 Choice <br /> For Home Care
          </p>
        </div>

        <div className="flex items-center">
          <Link to="/#eligibility" className="flex items-center group">
            <button className="bg-mint h-16 px-10 rounded-l-[24px] border-r-2 border-black/10 font-black text-navy text-xs uppercase tracking-[0.2em] group-hover:brightness-95 transition-all">
              Check My Eligibility
            </button>
            <div className="bg-mint w-16 h-16 rounded-r-[24px] flex items-center justify-center group-hover:brightness-95 transition-all cursor-pointer">
              <ArrowUpRight size={28} className="text-navy" strokeWidth={3} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;