import React from 'react';
import { ArrowLeft, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ComingSoonPageProps {
    title: string;
}

const ComingSoonPage: React.FC<ComingSoonPageProps> = ({ title }) => {
    return (
        <div className="min-h-screen bg-navy flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background Patterns */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-mint/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-peach/10 rounded-full blur-[100px]"></div>

            <div className="max-w-2xl w-full relative z-10 text-center">
                <div className="w-24 h-24 bg-white/10 rounded-3xl mx-auto flex items-center justify-center mb-6 backdrop-blur-sm border border-white/5">
                    <Clock size={48} className="text-mint" />
                </div>

                <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-4 leading-tight">
                    {title}
                </h1>

                <p className="text-slate-400 text-xl font-medium max-w-lg mx-auto mb-10">
                    We are working hard to bring you this portal. Please check back soon for updates.
                </p>

                <div className="flex justify-center">
                    <Link to="/role-selection" className="flex items-center group">
                        <div className="bg-mint w-16 h-16 rounded-l-[24px] flex items-center justify-center group-hover:brightness-95 transition-all cursor-pointer border-r-2 border-black/10">
                            <ArrowLeft size={28} className="text-navy" strokeWidth={3} />
                        </div>
                        <button className="bg-mint h-16 px-10 rounded-r-[24px] font-black text-navy text-xs uppercase tracking-[0.2em] group-hover:brightness-95 transition-all">
                            Back to Selection
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ComingSoonPage;
