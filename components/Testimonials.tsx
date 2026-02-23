import React, { useState } from 'react';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    text: "Great service, and great people.",
    author: "Carrie Robinson",
    title: "Client",
    // Using UI Avatars for dynamic initials based on name
    image: "https://ui-avatars.com/api/?name=Carrie+Robinson&background=f4b36d&color=fff"
  },
  {
    text: "They helped me out so much!! We love Friendly care agency!! I 100% recommend.",
    author: "Audrey Pinkard",
    title: "Client",
    image: "https://ui-avatars.com/api/?name=Audrey+Pinkard&background=79d7d3&color=0c1214"
  },
  {
    text: "If you are looking for great company for taking care of your loved one. Friendly care agency is the right company to choose!",
    author: "Jermaine Thomas",
    title: "Client",
    image: "https://ui-avatars.com/api/?name=Jermaine+Thomas&background=6db3f4&color=fff"
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 px-6 lg:px-12 bg-[#f4f2ee]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 bg-slate-50 text-slate-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-black/5">
            Testimonials
          </div>
          <h2 className="text-5xl lg:text-7xl font-black text-navy tracking-tighter uppercase leading-[0.9]">
            WHAT OUR <br /> CLIENTS SAY
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Card */}
          <div className="bg-mint rounded-[48px] p-8 md:p-12 lg:p-24 relative overflow-hidden text-center flex flex-col items-center transition-all duration-300">
            {/* Massive background quote mark */}
            <Quote className="absolute -top-6 -left-6 md:-top-12 md:-left-12 w-32 h-32 md:w-64 md:h-64 text-black/5" />

            <Quote className="w-10 h-10 md:w-16 md:h-16 text-black/20 mb-6 md:mb-8" />

            <p className="text-xl md:text-2xl lg:text-4xl font-black text-navy leading-[1.1] tracking-tighter uppercase mb-8 md:mb-12 max-w-3xl italic min-h-[160px] md:min-h-[120px] flex items-center justify-center">
              "{current.text}"
            </p>

            <div className="flex items-center gap-4">
              <img
                src={current.image}
                alt={current.author}
                className="w-14 h-14 rounded-full border-4 border-white/20 object-cover"
              />
              <div className="text-left">
                <div className="font-black text-navy text-lg uppercase tracking-tighter">{current.author}</div>
                <div className="text-navy/50 text-[10px] font-bold uppercase tracking-widest">{current.title}</div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          {/* Desktop Controls (Absolute) */}
          <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -left-12">
            <button
              onClick={prev}
              className="w-16 h-16 bg-white border-2 border-black/5 rounded-full shadow-xl flex items-center justify-center text-slate-300 hover:text-navy transition-all cursor-pointer z-10"
            >
              <ArrowLeft size={32} />
            </button>
          </div>
          <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-12">
            <button
              onClick={next}
              className="w-16 h-16 bg-peach text-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-all cursor-pointer z-10"
            >
              <ArrowRight size={32} />
            </button>
          </div>

          {/* Mobile Controls (Inline Flow) */}
          <div className="flex lg:hidden justify-center items-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-14 h-14 bg-white border-2 border-black/5 rounded-full shadow-xl flex items-center justify-center text-slate-300 hover:text-navy transition-all cursor-pointer z-10"
            >
              <ArrowLeft size={28} />
            </button>
            <button
              onClick={next}
              className="w-14 h-14 bg-peach text-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-all cursor-pointer z-10"
            >
              <ArrowRight size={28} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;