import React from 'react';
import Hero from './Hero';
import PartnerStrip from './PartnerStrip';
import About from './About';
import Services from './Services';
import WhyChooseUs from './WhyChooseUs';
import Testimonials from './Testimonials';
import Team from './Team';
import EligibilityForm from './EligibilityForm';
import { useSEO } from './useSEO';

const Home: React.FC = () => {
    useSEO({
        title: 'Get Paid to Care for Loved Ones | Friendly Care Agency GA',
        description: "Georgia's #1 choice for home care. Get paid to care for your aging or disabled family members through Medicaid waiver programs. Check your eligibility today.",
        path: '/',
    });

    return (
        <div className="flex flex-col gap-2">
            <section className="inner-content">
                <Hero />
            </section>

            <section className="inner-content">
                <PartnerStrip />
            </section>

            <section className="inner-content">
                <About />
            </section>

            <section className="inner-content">
                <Services />
            </section>

            <section className="inner-content">
                <WhyChooseUs />
            </section>

            <section className="inner-content bg-[#f4f2ee]">
                <Testimonials />
            </section>

            <section className="inner-content">
                <Team />
            </section>

            <section className="inner-content bg-[#f4f2ee]">
                <EligibilityForm />
            </section>
        </div>
    );
};

export default Home;
