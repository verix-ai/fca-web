import React from 'react';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      title: 'Honesty',
      desc: 'We uphold transparency and integrity in all our interactions, fostering trust with clients, caregivers, and partners.'
    },
    {
      title: 'Accountability',
      desc: 'We take responsibility for our actions and decisions, ensuring that we meet our commitments to clients and each other.'
    },
    {
      title: 'Respect',
      desc: 'We honor the dignity and individuality of every client and caregiver, creating a supportive and inclusive environment.'
    },
    {
      title: 'Leadership',
      desc: 'We inspire and guide our team to set high standards in caregiving, continuously striving for excellence in service delivery.'
    }
  ];

  return (
    <section className="relative min-h-[700px] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src="/wcu-bg.jpg"
        alt="Medical Facility"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.3]"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-white text-[10vw] lg:text-[6vw] font-black mb-20 tracking-tighter uppercase leading-[0.85]">
          WHY <br /> CHOOSE US
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {features.map((f, i) => (
            <div key={i} className="glass-card p-10 rounded-[32px] text-left flex flex-col justify-center min-h-[250px] transition-all hover:bg-white/20">
              <h4 className="text-white font-black text-xl mb-4 tracking-tighter uppercase">{f.title}</h4>
              <p className="text-white/60 text-xs font-bold leading-relaxed tracking-wider">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;