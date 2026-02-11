import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';

import Grainient from './components/Grainient';
import Contact from './components/Contact';

import Privacy from './components/Privacy';
import AICRM from './components/AICRM';
import VoiceAgent from './components/VoiceAgent';
import Outreach from './components/Outreach';
import Ecommerce from './components/Ecommerce';
import Social from './components/Social';
import Website from './components/Website';

function AppContent() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [location.pathname]);

  return (
    <div className="relative" style={{ minHeight: '100dvh', overflowX: 'clip', width: '100%', maxWidth: '100vw' }}>
      <Grainient
        color1="#1322ec"
        color2="#0e1b5d"
        color3="#3048c0"
        timeSpeed={0.55}
        colorBalance={0}
        warpStrength={1}
        warpFrequency={5}
        warpSpeed={2}
        warpAmplitude={50}
        blendAngle={0}
        blendSoftness={0.05}
        rotationAmount={500}
        noiseScale={2}
        grainAmount={0.1}
        grainScale={2}
        grainAnimated={false}
        contrast={1.5}
        gamma={1}
        saturation={1}
        centerX={0}
        centerY={0}
        zoom={0.9}
      />
      <div className="relative" style={{ zIndex: 1 }}>
      <Header onContactClick={() => setIsContactOpen(true)} />
      <main style={{ minHeight: '100dvh' }}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/aicrm" element={<AICRM />} />
          <Route path="/solutions/aicrm" element={<AICRM />} />
          <Route path="/voice" element={<VoiceAgent />} />
          <Route path="/solutions/voice" element={<VoiceAgent />} />
          <Route path="/outreach" element={<Outreach />} />
          <Route path="/solutions/outreach" element={<Outreach />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/solutions/ecommerce" element={<Ecommerce />} />
          <Route path="/social" element={<Social />} />
          <Route path="/solutions/social" element={<Social />} />
          <Route path="/website" element={<Website />} />
          <Route path="/solutions/website" element={<Website />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </main>
      <Contact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
