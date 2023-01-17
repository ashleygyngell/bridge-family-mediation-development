import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// General
import NotFound from './components/NotFound';
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
import ComplaintsProcedure from './components/ComplaintsProcedure';
import PrivacyPolicy from './components/PrivacyPolicy';
import Testimonials from './components/Testimonials';
import Podcast from './components/Podcast';

// Mediation
import AfterMediation from './components/AfterMediation';
import WhatIsMediation from './components//WhatIsMediation';
import HowItWorks from './components/HowItWorks';
import WhoWeHelp from './components//WhoWeHelp';
import DivorceAndMediation from './components/DivorceAndMediation';
import WhatWeDiscuss from './components//WhatWeDiscuss';
import WhyChooseUs from './components//WhyChooseUs';
import OurFees from './components/OurFees';
import ChildrenInMediation from './components/ChildrenInMediation';

function App() {
  // useEffect(() => {
  //   ReactGA.pageview(window.location.pathname + window.location.search);
  // }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/ourmediators" element={<OurMediators />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/katebrown" element={<Mediator1 />} />
        <Route path="/kathleenstraub" element={<Mediator2 />} />
        <Route path="/juleswaring" element={<Mediator3 />} />
        <Route path="/carolinedunne" element={<Mediator4 />} />
        <Route path="/usefullinks" element={<UsefulLinks />} />
        <Route path="/whatismediation" element={<WhatIsMediation />} />
        <Route path="/childreninmediation" element={<ChildrenInMediation />} />
        <Route path="/aftermediation" element={<AfterMediation />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/whodowehelp" element={<WhoWeHelp />} />
        <Route path="/divorceandmediation" element={<DivorceAndMediation />} />
        <Route path="/whatwediscuss" element={<WhatWeDiscuss />} />
        <Route path="/whychooseus" element={<WhyChooseUs />} />
        <Route path="/ourfees" element={<OurFees />} />
        <Route path="/thevoucherscheme" element={<TheVoucherScheme />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/complaintsprocedure" element={<ComplaintsProcedure />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/Podcast" element={<Podcast />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
