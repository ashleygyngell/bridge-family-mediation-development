import { React } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FaqGrid from './components/FaqGrid';
import About from './components/About';
import Contact from './components/Contact';
import Mediator1 from './components/Mediator1';
import Mediator2 from './components/Mediator2';
import Mediator3 from './components/Mediator3';
import Mediator4 from './components/Mediator4';
import UsefulLinks from './components/UsefulLinks';

// FAQ's

import WhatIsMediation from './components/Faqs/WhatIsMediation';
import HowMediationWorks from './components/Faqs/HowMediationWorks';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faqs" element={<FaqGrid />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/katebrown" element={<Mediator1 />} />
        <Route path="/kathleenstraub" element={<Mediator2 />} />
        <Route path="/juleswaring" element={<Mediator3 />} />
        <Route path="/carolinedunne" element={<Mediator4 />} />
        <Route path="/usefullinks" element={<UsefulLinks />} />
        <Route path="/whatismediation" element={<WhatIsMediation />} />
        <Route path="/howdoesitwork" element={<HowMediationWorks />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
