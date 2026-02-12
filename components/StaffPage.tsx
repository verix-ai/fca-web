import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const StaffPage: React.FC = () => {
    const teamMembers = [
        { name: 'Quantez Parks', role: 'Chief Executive Officer', img: '/Staff/quantez-hs.png' },
        { name: 'Jeff Whitaker Jr', role: 'Chief Growth Officer', img: '/Staff/jeff-hs.png' },
        { name: 'Meg Clark', role: 'Chief Operating Officer', img: '/Staff/meg-hs.png' },
        { name: 'Ahmad Barron', role: 'Chief Marketing Officer', img: '/Staff/ahmad-hs.png' },
        { name: 'Emory Gross', role: 'Marketing Specialist', img: '/Staff/emory-hs.png' },
        { name: 'Valencia Jones', role: 'Director Of Nursing', img: '/Staff/valencia-hs.png' },
    ];

    return (
        <section className="py-24 px-4 bg-[#f8fafc] min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center mb-16 gap-6 text-center">
                    <div className="space-y-4">
                        <h2 className="text-4xl lg:text-6xl font-black text-navy leading-tight uppercase tracking-tighter">
                            MEET OUR <br /> FULL TEAM
                        </h2>
                        <p className="text-slate-500 font-bold max-w-2xl mx-auto">
                            Our dedicated professionals are committed to providing the highest quality of care and support.
                        </p>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
            </div>
        </section>
    );
};

export default StaffPage;
