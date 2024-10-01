import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Faq from './routes/Faq';
import Home from './routes/Home';
import Pricing from './routes/Pricing';
import Contact from './routes/Contact';
import GoogleTag from './components/GoogleTag';

function App() {
  const TRACKING_ID = "AW-16721092148";

  return (
    <>
      <GoogleTag trackingId={TRACKING_ID} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;



