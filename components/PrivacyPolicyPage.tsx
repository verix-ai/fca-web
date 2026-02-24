import React from 'react';
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <div className="bg-navy text-white pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-wider mb-8 backdrop-blur-sm">
                        <ShieldCheck size={14} className="text-mint" />
                        <span>Data Protection</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-tight">
                        PRIVACY POLICY
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
                        We value your trust. Here is how we protect and manage your personal information.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-20">
                <div className="space-y-12">
                    {/* Introduction */}
                    <div className="bg-white p-8 md:p-12 rounded-[32px] shadow-sm border border-slate-100">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-mint/20 rounded-2xl flex items-center justify-center text-mint">
                                <FileText size={24} strokeWidth={2.5} />
                            </div>
                            <h2 className="text-3xl font-black text-navy tracking-tight">Introduction</h2>
                        </div>
                        <div className="prose prose-lg text-slate-600">
                            <p className="mb-6">
                                At Friendly Care Agency, we are committed to protecting the privacy and security of our clients, caregivers, and website visitors. This Privacy Policy outlines the types of information we collect, how we use it, and the measures we take to keep it safe.
                            </p>
                            <p>
                                By accessing or using our services, you agree to the collection and use of information in accordance with this policy.
                            </p>
                        </div>
                    </div>

                    {/* Information Collection */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-navy p-8 md:p-10 rounded-[32px] text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-mint/10 rounded-full blur-3xl group-hover:bg-mint/20 transition-all duration-500"></div>
                            <Eye className="text-mint mb-6" size={32} strokeWidth={2.5} />
                            <h3 className="text-2xl font-black mb-4 tracking-tight">Information We Collect</h3>
                            <p className="text-slate-300 leading-relaxed">
                                We may collect personal information such as your name, contact details, medical history (with consent), and care preferences to provide tailored caregiving services. We also collect non-personal data necessary for website analytics and functionality.
                            </p>
                        </div>

                        <div className="bg-mint p-8 md:p-10 rounded-[32px] text-navy relative overflow-hidden group">
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/20 rounded-full blur-3xl group-hover:bg-white/30 transition-all duration-500"></div>
                            <Lock className="text-navy mb-6" size={32} strokeWidth={2.5} />
                            <h3 className="text-2xl font-black mb-4 tracking-tight">How We Use It</h3>
                            <p className="text-navy/80 font-medium leading-relaxed">
                                The information we collect is primarily used to deliver, maintain, and improve our services. We use it to match caregivers, communicate with families, process billing, and ensure compliance with healthcare regulations.
                            </p>
                        </div>
                    </div>

                    {/* Data Security and Contact */}
                    <div className="bg-white p-8 md:p-12 rounded-[32px] shadow-sm border border-slate-100 text-center">
                        <h2 className="text-3xl font-black text-navy mb-8 tracking-tight">Data Security & Contact</h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-3xl mx-auto">
                            We implement industry-standard security measures, including encryption and strict access controls, to protect your personal information from unauthorized disclosure. We do not sell or rent your personal data to third parties. If you have any questions or concerns about this policy, please do not hesitate to reach out to us.
                        </p>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
