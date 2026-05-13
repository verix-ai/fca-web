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
        <div className="flex flex-col min-h-screen bg-[#f4f2ee]">
            <div className="flex justify-center pt-8 pb-4">
                <div className="flex items-center gap-2">
                    <img src="/fca-logo.png" alt="Friendly Care Agency" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
                    <span className="text-xl md:text-2xl font-black tracking-tighter text-navy uppercase leading-none">
                        Friendly Care
                    </span>
                </div>
            </div>

            <main className="flex-1">
                <EligibilityForm outOfStateCheck />
            </main>

            <footer className="py-6 px-4 text-center text-xs text-slate-500">
                <p>
                    &copy; {new Date().getFullYear()} Friendly Care Agency &middot;{' '}
                    <Link to="/privacy-policy" className="underline hover:text-navy">
                        Privacy Policy
                    </Link>
                </p>
            </footer>
        </div>
    );
};

export default QualifyPage;
