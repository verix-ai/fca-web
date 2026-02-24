import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const ContactUsPage: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        // Reset form after submission if desired
        // setFormData({ firstName: '', lastName: '', phoneNumber: '', email: '', message: '' });
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <div className="bg-navy text-white pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-wider mb-8 backdrop-blur-sm">
                        <Send size={14} className="text-mint" />
                        <span>Get In Touch</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-tight">
                        CONTACT US
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
                        Have Questions? Fill out the form below and someone from our dedicated team will reach out to you shortly.
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Contact Information Cards */}
                    <div className="lg:col-span-1 flex flex-col gap-6">
                        <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-mint/20 rounded-2xl flex items-center justify-center text-mint mb-6">
                                <Phone size={32} strokeWidth={2} />
                            </div>
                            <h3 className="text-xl font-black text-navy mb-2">Give Us A Call</h3>
                            <p className="text-slate-500 font-medium mb-4">Available Mon-Fri, 9am-5pm EST</p>
                            <a href="tel:+18005551234" className="text-lg font-bold text-mint hover:text-navy transition-colors">
                                +1 (800) 555-1234
                            </a>
                        </div>

                        <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-mint/20 rounded-2xl flex items-center justify-center text-mint mb-6">
                                <Mail size={32} strokeWidth={2} />
                            </div>
                            <h3 className="text-xl font-black text-navy mb-2">Send An Email</h3>
                            <p className="text-slate-500 font-medium mb-4">We'll respond within 24 hours</p>
                            <a href="mailto:info@friendlycareagency.org" className="text-lg font-bold text-mint hover:text-navy transition-colors block truncate w-full">
                                info@friendlycareagency.org
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white p-8 md:p-12 rounded-[32px] shadow-sm border border-slate-100">
                            {isSubmitted ? (
                                <div className="text-center py-16">
                                    <div className="w-24 h-24 bg-mint/20 rounded-full flex items-center justify-center text-mint mx-auto mb-8">
                                        <Send size={48} />
                                    </div>
                                    <h2 className="text-3xl font-black text-navy mb-4">Message Sent!</h2>
                                    <p className="text-xl text-slate-500">Thank you for reaching out. A member of our team will contact you soon.</p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="mt-10 px-8 py-4 bg-navy text-white rounded-full font-bold uppercase tracking-wider text-sm hover:bg-mint hover:text-navy transition-all"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <h2 className="text-3xl font-black text-navy mb-8 tracking-tight">Drop Us A Line</h2>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="firstName" className="text-sm font-bold text-navy uppercase tracking-wider">First Name</label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-mint focus:border-transparent transition-all font-medium text-navy placeholder:text-slate-400"
                                                placeholder="John"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="lastName" className="text-sm font-bold text-navy uppercase tracking-wider">Last Name</label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-mint focus:border-transparent transition-all font-medium text-navy placeholder:text-slate-400"
                                                placeholder="Doe"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="phoneNumber" className="text-sm font-bold text-navy uppercase tracking-wider">Phone Number</label>
                                            <input
                                                type="tel"
                                                id="phoneNumber"
                                                name="phoneNumber"
                                                value={formData.phoneNumber}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-mint focus:border-transparent transition-all font-medium text-navy placeholder:text-slate-400"
                                                placeholder="(555) 123-4567"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-bold text-navy uppercase tracking-wider">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-mint focus:border-transparent transition-all font-medium text-navy placeholder:text-slate-400"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2 pt-2">
                                        <label htmlFor="message" className="text-sm font-bold text-navy uppercase tracking-wider">Your Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-mint focus:border-transparent transition-all font-medium text-navy placeholder:text-slate-400 resize-none"
                                            placeholder="How can we help you today?"
                                        ></textarea>
                                    </div>

                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            className="w-full md:w-auto bg-mint text-navy px-10 py-5 rounded-[24px] font-black uppercase tracking-[0.2em] hover:bg-navy hover:text-white transition-all flex items-center justify-center gap-3"
                                        >
                                            <span>Send Message</span>
                                            <Send size={18} />
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsPage;
