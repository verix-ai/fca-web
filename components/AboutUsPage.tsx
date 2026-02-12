import React from 'react';
import { Sparkles, Calendar, Heart, Users, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUsPage: React.FC = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <div className="bg-navy text-white pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-wider mb-8 backdrop-blur-sm">
                        <Sparkles size={14} className="text-mint" />
                        <span>Our Journey</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-tight">
                        WHO WE ARE
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
                        Born out of love and necessity, sparked by a deeply personal experience that reshaped our lives forever.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-20">
                {/* Story Section */}
                <div className="space-y-16">

                    {/* Origin Story */}
                    <div className="bg-white p-8 md:p-12 rounded-[32px] shadow-sm border border-slate-100">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-mint/20 rounded-2xl flex items-center justify-center text-mint">
                                <Calendar size={24} strokeWidth={2.5} />
                            </div>
                            <h2 className="text-3xl font-black text-navy tracking-tight">Thinking Back to 2015</h2>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="prose prose-lg text-slate-600 flex-1">
                                <p className="mb-6">
                                    At Friendly Care Agency, our journey began right in the heart of Quantez's childhood home. When Quantez’s beloved uncle, Joseph “Joe” Stephens, suffered a stroke, the family faced a daunting challenge.
                                </p>
                                <p>
                                    With his mother working long hours to provide for their family, they struggled to find a reliable caregiver who could offer Joe the attention and compassion he needed. The heartbreaking reality of having to admit him to a nursing home was a wake-up call for Quantez. He witnessed firsthand the struggles families face when proper care is out of reach, and he felt a burning desire to make a difference.
                                </p>
                            </div>
                            <div className="w-full md:w-1/3 shrink-0">
                                <div className="rounded-[24px] overflow-hidden border-[6px] border-slate-100 shadow-lg">
                                    <img
                                        src="/uncle-joe.png"
                                        alt="Uncle Joe Stephens"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                                <p className="text-center text-xs font-bold text-slate-400 mt-3 uppercase tracking-wider">In Loving Memory of Joseph "Joe" Stephens</p>
                            </div>
                        </div>
                    </div>

                    {/* Mission & Vision */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-navy p-8 md:p-10 rounded-[32px] text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-mint/10 rounded-full blur-3xl group-hover:bg-mint/20 transition-all duration-500"></div>
                            <Heart className="text-mint mb-6" size={32} strokeWidth={2.5} />
                            <h3 className="text-2xl font-black mb-4 tracking-tight">A Vision of Care</h3>
                            <p className="text-slate-300 leading-relaxed">
                                Motivated by love and a commitment to helping others, Quantez founded Friendly Care Agency. His vision was simple yet powerful: to create a supportive community where families could find trustworthy and compassionate caregivers.
                            </p>
                        </div>

                        <div className="bg-mint p-8 md:p-10 rounded-[32px] text-navy relative overflow-hidden group">
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/20 rounded-full blur-3xl group-hover:bg-white/30 transition-all duration-500"></div>
                            <Users className="text-navy mb-6" size={32} strokeWidth={2.5} />
                            <h3 className="text-2xl font-black mb-4 tracking-tight">Growing Together</h3>
                            <p className="text-navy/80 font-medium leading-relaxed">
                                From those humble beginnings in a living room, we have grown into a dedicated team of professionals who share Quantez’s passion. We believe that everyone deserves to be treated with dignity, respect, and kindness.
                            </p>
                        </div>
                    </div>

                    {/* Core Values / Conclusion */}
                    <div className="bg-white p-8 md:p-12 rounded-[32px] shadow-sm border border-slate-100 text-center">
                        <h2 className="text-3xl font-black text-navy mb-8 tracking-tight">More Than Just Caregivers</h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-3xl mx-auto">
                            At Friendly Care Agency, we are not just caregivers; we are a family committed to making a positive impact. Our mission is to ensure that no family has to face the challenges of caregiving alone. We are here to help bridge the gap, providing peace of mind and allowing families to focus on what truly matters—spending quality time with their loved ones.
                        </p>
                        <div className="flex justify-center">
                            <Link to="/#eligibility" className="flex items-center group">
                                <button className="bg-mint h-16 px-10 rounded-l-[24px] border-r-2 border-black/10 font-black text-navy text-xs uppercase tracking-[0.2em] group-hover:brightness-95 transition-all">
                                    Join us on this journey
                                </button>
                                <div className="bg-mint w-16 h-16 rounded-r-[24px] flex items-center justify-center group-hover:brightness-95 transition-all cursor-pointer">
                                    <ArrowUpRight size={28} className="text-navy" strokeWidth={3} />
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;
