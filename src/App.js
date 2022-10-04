import { React } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// General
import PageNotFound from './components/PageNotFound';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Faqs from './components/Faqs';
import OurMediators from './components/OurMediators';
import Contact from './components/Contact';
import Mediator1 from './components/Mediator1';
import Mediator2 from './components/Mediator2';
import Mediator3 from './components/Mediator3';
import Mediator4 from './components/Mediator4';
import UsefulLinks from './components/UsefulLinks';
import TheVoucherScheme from './components/TheVoucherScheme';
import ComplaintsPolicy from './components/ComplaintsPolicy';
import PrivacyPolicy from './components/PrivacyPolicy';
import Testimonials from './components/Testimonials';
import Podcast from './components/Podcast';

// Mediation
import TheMediationAgreement from './components//TheMediationAgreement';
import WhatIsMediation from './components//WhatIsMediation';
import HowItWorks from './components/HowItWorks';
import WhoWeHelp from './components//WhoWeHelp';
import WhatWeDiscuss from './components//WhatWeDiscuss';
import WhyChooseUs from './components//WhyChooseUs';
import OurFees from './components/OurFees';
import ChildrenInMediation from './components/ChildrenInMediation';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" component={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/ourmediators" element={<OurMediators />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/katebrown" element={<Mediator1 />} />
        <Route path="/kathleenstraub" element={<Mediator2 />} />
        <Route path="/juleswaring" element={<Mediator3 />} />
        <Route path="/carolinedunne" element={<Mediator4 />} />
        <Route path="/usefullinks" element={<UsefulLinks />} />
        {/* FAQS */}
        <Route path="/whatismediation" element={<WhatIsMediation />} />
        <Route path="/childreninmediation" element={<ChildrenInMediation />} />
        <Route
          path="/themediationagreement"
          element={<TheMediationAgreement />}
        />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/whowehelp" element={<WhoWeHelp />} />
        <Route path="/whatwediscuss" element={<WhatWeDiscuss />} />
        <Route path="/whychooseus" element={<WhyChooseUs />} />
        <Route path="/ourfees" element={<OurFees />} />
        <Route path="/thevoucherscheme" element={<TheVoucherScheme />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/complaintspolicy" element={<ComplaintsPolicy />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/Podcast" element={<Podcast />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
