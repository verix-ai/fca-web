import React from 'react';
import { Heart, User, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const RoleSelectionPage: React.FC = () => {
    const roles = [
        {
            id: 'caregiver',
            title: 'Caregiver',
            description: 'I want to provide care and join the team.',
            icon: Heart,
            color: 'bg-mint',
            textColor: 'text-navy',
            link: '/caregiver-login'
        },
        {
            id: 'client',
            title: 'Client',
            description: 'I am looking for care for myself or a loved one.',
            icon: User,
            color: 'bg-peach',
            textColor: 'text-navy',
            link: '/client-login'
        },
        {
            id: 'staff',
            title: 'Staff',
            description: 'I am a current team member.',
            icon: Users,
            color: 'bg-sky',
            textColor: 'text-navy',
            link: 'https://fca-web-pied.vercel.app/',
            isExternal: true
        }
    ];

    return (
        <div className="min-h-screen bg-navy flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background Patterns */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-mint/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-peach/10 rounded-full blur-[100px]"></div>

            <div className="max-w-5xl w-full relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm border border-white/5">
                        <span>Welcome to Friendly Care</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">
                        Who Are You?
                    </h1>
                    <p className="text-slate-400 text-xl font-medium max-w-xl mx-auto">
                        Select your role to get started with the right information for you.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {roles.map((role) => (
                        role.isExternal ? (
                            <a
                                key={role.id}
                                href={role.link}
                                className={`${role.color} group relative p-8 rounded-[40px] transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl cursor-pointer flex flex-col min-h-[320px]`}
                            >
                                <div className="bg-white/20 w-16 h-16 rounded-[20px] flex items-center justify-center mb-auto backdrop-blur-sm border border-black/5">
                                    <role.icon size={32} className={role.textColor} strokeWidth={2.5} />
                                </div>

                                <div className="mt-8">
                                    <h2 className={`text-4xl font-black ${role.textColor} tracking-tight uppercase`}>
                                        {role.title}
                                    </h2>
                                </div>

                                <div className="mt-8 flex justify-end">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/40 transition-colors">
                                        <ArrowRight className={role.textColor} size={20} />
                                    </div>
                                </div>
                            </a>
                        ) : (
                            <Link
                                key={role.id}
                                to={role.link}
                                className={`${role.color} group relative p-8 rounded-[40px] transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl cursor-pointer flex flex-col min-h-[320px]`}
                            >
                                <div className="bg-white/20 w-16 h-16 rounded-[20px] flex items-center justify-center mb-auto backdrop-blur-sm border border-black/5">
                                    <role.icon size={32} className={role.textColor} strokeWidth={2.5} />
                                </div>

                                <div className="mt-8">
                                    <h2 className={`text-4xl font-black ${role.textColor} tracking-tight uppercase`}>
                                        {role.title}
                                    </h2>
                                </div>

                                <div className="mt-8 flex justify-end">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/40 transition-colors">
                                        <ArrowRight className={role.textColor} size={20} />
                                    </div>
                                </div>
                            </Link>
                        )
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link to="/" className="text-slate-500 font-bold uppercase tracking-widest text-sm hover:text-white transition-colors">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RoleSelectionPage;
