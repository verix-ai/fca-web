import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const EligibilityForm: React.FC = () => {
    return (
        <section id="eligibility" className="py-24 px-4 bg-[#f4f2ee]">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl lg:text-5xl font-black text-navy mb-12 uppercase tracking-tighter">
                    You May Be <br className="md:hidden" /> Eligible!
                </h2>

                <form className="bg-[#f4f2ee] p-8 md:p-12 rounded-[40px] border border-slate-100 shadow-xl shadow-slate-200/50">
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="space-y-2 text-left">
                            <label htmlFor="name" className="text-sm font-bold text-navy uppercase tracking-wider ml-4">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full h-14 px-6 rounded-[20px] bg-white border-2 border-[#81c567] focus:border-[#81c567] focus:ring-1 focus:ring-[#81c567] focus:outline-none transition-colors font-medium text-navy placeholder:text-slate-400"
                                placeholder="John Doe"
                            />
                        </div>

                        <div className="space-y-2 text-left">
                            <label htmlFor="phone" className="text-sm font-bold text-navy uppercase tracking-wider ml-4">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                className="w-full h-14 px-6 rounded-[20px] bg-white border-2 border-[#81c567] focus:border-[#81c567] focus:ring-1 focus:ring-[#81c567] focus:outline-none transition-colors font-medium text-navy placeholder:text-slate-400"
                                placeholder="(555) 123-4567"
                            />
                        </div>

                        <div className="space-y-2 text-left">
                            <label htmlFor="email" className="text-sm font-bold text-navy uppercase tracking-wider ml-4">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full h-14 px-6 rounded-[20px] bg-white border-2 border-[#81c567] focus:border-[#81c567] focus:ring-1 focus:ring-[#81c567] focus:outline-none transition-colors font-medium text-navy placeholder:text-slate-400"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div className="space-y-2 text-left">
                            <label htmlFor="zip" className="text-sm font-bold text-navy uppercase tracking-wider ml-4">Client Zipcode</label>
                            <input
                                type="text"
                                id="zip"
                                className="w-full h-14 px-6 rounded-[20px] bg-white border-2 border-[#81c567] focus:border-[#81c567] focus:ring-1 focus:ring-[#81c567] focus:outline-none transition-colors font-medium text-navy placeholder:text-slate-400"
                                placeholder="12345"
                            />
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <button className="group flex items-center bg-mint h-16 pl-10 pr-2 rounded-[24px] hover:brightness-95 transition-all">
                            <span className="font-black text-navy text-sm uppercase tracking-[0.2em] mr-6">Check My Eligibility</span>
                            <div className="bg-white/20 w-12 h-12 rounded-[20px] flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                <ArrowUpRight size={24} className="text-navy" strokeWidth={3} />
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default EligibilityForm;
