import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Faqs from './components/Faqs';
import About from './components/About';
import Contact from './components/Contact';
import ReferralForm from './components/ReferralForm';
import Mediator1 from './components/Mediator1';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/referralform" element={<ReferralForm />} />
        <Route path="/katebrown" element={<Mediator1 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
