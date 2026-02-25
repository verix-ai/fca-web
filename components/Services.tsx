import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
  const steps = [
    {
      step: 'Step 1',
      title: 'Check Your Eligibility',
      description: 'Call us or fill out the eligibility form to find out if you qualify for the program',
      color: 'bg-mint',
    },
    {
      step: 'Step 2',
      title: 'Apply & Enroll',
      description: 'Your complete application details will determine your full approval status',
      color: 'bg-peach',
    },
    {
      step: 'Step 3',
      title: 'Get The Care & They Get Paid',
      description: 'Receive the care you deserve while your caregiver gets paid.',
      color: 'bg-sky',
    },
  ];

  return (
    <section id="services">
      <div className="grid md:grid-cols-3 divide-y-8 md:divide-y-0 md:divide-x-8 divide-black">
        {steps.map((item, idx) => (
          <a key={idx} href="#eligibility" className={`${item.color} p-8 md:p-12 lg:p-16 min-h-[350px] md:min-h-[450px] flex flex-col group cursor-pointer transition-all hover:brightness-105`}>
            <div className="flex flex-col flex-grow">
              <div>
                <span className="text-navy font-black text-sm uppercase tracking-widest bg-white/20 px-4 py-2 rounded-full w-fit backdrop-blur-sm border border-black/5 mb-6 inline-block">
                  {item.step}
                </span>
                <h3 className="text-navy text-4xl lg:text-5xl font-black tracking-tighter uppercase leading-[0.9] mb-6">
                  {item.title}
                </h3>
              </div>
              <p className="text-navy/70 text-[15px] font-bold max-w-[280px] leading-relaxed tracking-wide mt-auto">
                {item.description}
              </p>
            </div>

            <div className="flex justify-end pt-10 mt-auto">
              <div className="w-16 h-16 bg-white rounded-[20px] flex items-center justify-center text-navy shadow-lg shadow-black/5 group-hover:scale-110 transition-all border-2 border-black/5">
                <ArrowUpRight size={32} strokeWidth={2.5} />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Services;