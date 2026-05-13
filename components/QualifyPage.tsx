import React from 'react';
import { Link } from 'react-router-dom';
import EligibilityForm from './EligibilityForm';
import { useSEO } from './useSEO';

const QualifyPage: React.FC = () => {
    useSEO({
        title: 'Check Your Medicaid Eligibility — Friendly Care Agency',
        description: 'See if your loved one qualifies for Medicaid-covered home care in Georgia. Fast, free eligibility check.',
        path: '/qualify',
        noindex: true,
    });

    return (
        <div className="flex flex-col gap-2">
            <header className="bg-[#f4f2ee] h-20 rounded-[24px] flex items-center justify-center px-4 md:px-8 border-2 border-black/5">
                <div className="flex items-center gap-2">
                    <img
                        src="/fca-logo.png"
                        alt="Friendly Care Agency"
                        className="w-8 h-8 md:w-10 md:h-10 object-contain"
                    />
                    <span className="text-xl md:text-2xl font-black tracking-tighter text-navy uppercase leading-none">
                        Friendly Care
                    </span>
                </div>
            </header>

            <section className="inner-content bg-[#f4f2ee]">
                <EligibilityForm outOfStateCheck />
            </section>

            <footer className="py-6 px-4 text-center text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
                <p>
                    &copy; {new Date().getFullYear()} Friendly Care Agency &middot;{' '}
                    <Link to="/privacy-policy" className="text-slate-500 hover:text-mint transition-colors">
                        Privacy Policy
                    </Link>
                </p>
            </footer>
        </div>
    );
};

export default QualifyPage;
