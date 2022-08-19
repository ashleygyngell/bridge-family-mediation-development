import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Faqs from './components/Faqs';
import FaqGrid from './components/FaqGrid';
import About from './components/About';
import Contact from './components/Contact';
import ReferralForm from './components/ReferralForm';
import Mediator1 from './components/Mediator1';
import Mediator2 from './components/Mediator2';
import Mediator3 from './components/Mediator3';
import Mediator4 from './components/Mediator4';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faqsbreakdown" element={<Faqs />} />
        <Route path="/faqs" element={<FaqGrid />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/referralform" element={<ReferralForm />} />
        <Route path="/katebrown" element={<Mediator1 />} />
        <Route path="/kathleenstraub" element={<Mediator2 />} />
        <Route path="/juleswaring" element={<Mediator3 />} />
        <Route path="/carolinedunne" element={<Mediator4 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
