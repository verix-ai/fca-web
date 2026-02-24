import React from 'react';

import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AboutUsPage from './components/AboutUsPage';
import StaffPage from './components/StaffPage';
import RoleSelectionPage from './components/RoleSelectionPage';
import ComingSoonPage from './components/ComingSoonPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import ContactUsPage from './components/ContactUsPage';
import FAQPage from './components/FAQPage';
import Footer from './components/Footer';

const App: React.FC = () => {
  const { pathname, hash, key } = useLocation();

  React.useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  }, [pathname, hash, key]);

  return (
    <div className="main-frame flex flex-col gap-2">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/staff" element={<StaffPage />} />
          <Route path="/role-selection" element={<RoleSelectionPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/caregiver-login" element={<ComingSoonPage title="Caregiver Sign-In Coming Soon" />} />
          <Route path="/client-login" element={<ComingSoonPage title="Client Sign-In Coming Soon" />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;