import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Team: React.FC = () => {
  const teamMembers = [
    { name: 'Quantez Parks', role: 'Chief Executive Officer', img: '/Staff/quantez-hs.png' },
    { name: 'Jeff Whitaker Jr', role: 'Chief Growth Officer', img: '/Staff/jeff-hs.png' },
    { name: 'Meg Clark', role: 'Chief Operating Officer', img: '/Staff/meg-hs1.jpg' },
  ];

  return (
    <section id="team" className="py-24 px-4 bg-[#f4f2ee] rounded-3xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end text-center md:text-left mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-5xl lg:text-6xl font-black text-navy leading-[0.9] uppercase tracking-tighter">
              MEET OUR <br /> TEAM
            </h2>
          </div>
          <Link to="/staff" className="hidden md:block">
            <button className="px-8 py-4 bg-mint text-navy rounded-2xl font-bold uppercase tracking-widest hover:brightness-95 transition-all shadow-lg hover:shadow-xl">
              View All Team
            </button>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 md:mb-0">
          {teamMembers.map((member, i) => (
            <div key={i} className="group bg-white rounded-[40px] p-4 border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500">
              <div className="relative rounded-[32px] overflow-hidden aspect-[4/5] mb-6 bg-slate-100">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <button className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-navy opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                  <ArrowUpRight size={24} strokeWidth={2.5} />
                </button>
              </div>
              <div className="px-2 pb-2">
                <h4 className="text-2xl font-black text-navy mb-1">{member.name}</h4>
                <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center md:hidden">
          <Link to="/staff">
            <button className="px-8 py-4 bg-mint text-navy rounded-2xl font-bold uppercase tracking-widest hover:brightness-95 transition-all shadow-lg hover:shadow-xl">
              View All Team
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Team;
