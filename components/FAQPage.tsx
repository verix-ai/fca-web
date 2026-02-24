import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Clock, CreditCard, ShieldCheck, Heart, User } from 'lucide-react';

const FAQPage: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            category: "Compensation & Hours",
            icon: <CreditCard className="text-mint" size={24} />,
            questions: [
                {
                    q: "How much will I get paid?",
                    a: "Payment and benefits depend on the patient’s location and insurance plan. Please call us to find out your exact rates."
                },
                {
                    q: "How often will I get paid?",
                    a: "You’ll get paid semi-monthly. (As long as you submitted your hours properly, of course!) Our caregivers appreciate that their payments come in like clockwork; no exceptions."
                },
                {
                    q: "How many hours will I be able to work?",
                    a: "This depends on two things: 1. How many hours the consumer is approved for, and 2. How many hours the consumer wants you to work. All work hours are subject to appropriate labor regulations and policies."
                }
            ]
        },
        {
            category: "Eligibility & Requirements",
            icon: <User className="text-mint" size={24} />,
            questions: [
                {
                    q: "Does my loved one have to receive an SSI or disability check to qualify?",
                    a: "Yes, all members have to be disabled by the state of Georgia."
                },
                {
                    q: "How old do I have to be to take care of my loved one?",
                    a: "All caregivers have to be 18 years or older."
                }
            ]
        },
        {
            category: "Georgia Specific Info",
            icon: <ShieldCheck className="text-mint" size={24} />,
            questions: [
                {
                    q: "Does Friendly Care Agency participate in Georgia Medicaid Waiver programs?",
                    a: "Yes, we work with Structured Family Caregiving (SFC) and other state-approved waiver programs to help families receive financial assistance for providing home care."
                },
                {
                    q: "Do I need special training to be a family caregiver in Georgia?",
                    a: "While previous medical experience is not always required to care for a family member under certain programs, you must meet state requirements and pass a background check. Friendly Care Agency provides guidance and resources to ensure you are fully prepared and compliant."
                }
            ]
        }
    ];

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <div className="bg-navy text-white pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-wider mb-8 backdrop-blur-sm">
                        <HelpCircle size={14} className="text-mint" />
                        <span>Support Center</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-tight">
                        FREQUENTLY ASKED QUESTIONS
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
                        Find answers to common questions about our caregiving services, payment, and eligibility.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-20">
                <div className="space-y-16">
                    {faqs.map((category, catIndex) => (
                        <div key={catIndex} className="bg-white p-8 md:p-12 rounded-[32px] shadow-sm border border-slate-100">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-mint/20 rounded-2xl flex items-center justify-center">
                                    {category.icon}
                                </div>
                                <h2 className="text-3xl font-black text-navy tracking-tight">{category.category}</h2>
                            </div>

                            <div className="space-y-4">
                                {category.questions.map((faq, qIndex) => {
                                    // Use a continuous index across all categories
                                    const overallIndex = catIndex * 100 + qIndex;
                                    const isOpen = openIndex === overallIndex;

                                    return (
                                        <div
                                            key={qIndex}
                                            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-mint shadow-md ring-1 ring-mint' : 'border-slate-200 hover:border-slate-300'}`}
                                        >
                                            <button
                                                className="w-full px-6 py-5 flex justify-between items-center text-left bg-white focus:outline-none"
                                                onClick={() => toggleAccordion(overallIndex)}
                                            >
                                                <span className="text-lg font-bold text-navy pr-8">{faq.q}</span>
                                                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-mint text-navy' : 'bg-slate-100 text-slate-500'}`}>
                                                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                                </div>
                                            </button>

                                            <div
                                                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                                            >
                                                <p className="text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                                                    {faq.a}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}

                    {/* Still have questions? */}
                    <div className="bg-navy p-8 md:p-12 rounded-[32px] text-center text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-mint/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-mint/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10 flex flex-col items-center">
                            <Heart className="text-mint mb-6" size={40} strokeWidth={2.5} />
                            <h2 className="text-3xl font-black mb-4 tracking-tight">Still have questions?</h2>
                            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                                We're here to help! Our team is ready to answer any specific questions you might have about our services, eligibility, or the enrollment process.
                            </p>
                            <a href="/contact-us" className="bg-mint text-navy px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:brightness-105 transition-all inline-flex items-center gap-2">
                                Contact Us Today
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQPage;
