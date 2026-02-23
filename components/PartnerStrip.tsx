import React from 'react';
import { CircleCheck } from 'lucide-react';

const PartnerStrip: React.FC = () => {
  const basePartners = [
    { name: 'Kids', icon: CircleCheck },
    { name: 'Friends', icon: CircleCheck },
    { name: 'Relatives', icon: CircleCheck },
  ];

  // Repeat the list to ensure it fills the screen width before duplication
  const partners = [...basePartners, ...basePartners, ...basePartners, ...basePartners];

  return (
    <div className="py-12 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 md:[&_li]:mx-14 [&_img]:max-w-none animate-infinite-scroll">
        {partners.map((p, idx) => (
          <li key={`${p.name}-${idx}`} className="flex items-center gap-2 md:gap-4 group cursor-pointer hover:opacity-100 transition-opacity">
            <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-mint rounded-lg group-hover:scale-110 transition-transform">
              <p.icon size={20} className="md:w-6 md:h-6 text-navy stroke-[2.5px] md:stroke-[3px]" />
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tighter text-navy capitalize whitespace-nowrap">{p.name}</span>
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 md:[&_li]:mx-14 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
        {partners.map((p, idx) => (
          <li key={`${p.name}-duplicate-${idx}`} className="flex items-center gap-2 md:gap-4 group cursor-pointer hover:opacity-100 transition-opacity">
            <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-mint rounded-lg group-hover:scale-110 transition-transform">
              <p.icon size={20} className="md:w-6 md:h-6 text-navy stroke-[2.5px] md:stroke-[3px]" />
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tighter text-navy capitalize whitespace-nowrap">{p.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PartnerStrip;