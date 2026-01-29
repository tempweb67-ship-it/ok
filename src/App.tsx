import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import BottomMarquee from './components/Marquee';
import Contact from './components/Contact';
import Explore from './components/Explore';
import Solutions from './components/Solutions';
import Difference from './components/Difference';
import Industries from './components/Industries';
import Vision from './components/Vision';
import Privacy from './components/Privacy';
import AICRM from './components/AICRM';
import VoiceAgent from './components/VoiceAgent';
import Outreach from './components/Outreach';
import Ecommerce from './components/Ecommerce';
import Social from './components/Social';
import Website from './components/Website';
import FluidBlobDemo from './components/FluidBlobDemo';

function AppContent() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const location = useLocation();
  const showMarquee = location.pathname === '/';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="bg-black cursor-none">
      <CustomCursor />
      <Header onContactClick={() => setIsContactOpen(true)} />
      {showMarquee && <BottomMarquee />}
      <main>
        <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/solutions/aicrm" element={<AICRM />} />
        <Route path="/solutions/voice" element={<VoiceAgent />} />
        <Route path="/solutions/outreach" element={<Outreach />} />
        <Route path="/solutions/ecommerce" element={<Ecommerce />} />
        <Route path="/solutions/social" element={<Social />} />
        <Route path="/solutions/website" element={<Website />} />
        <Route path="/difference" element={<Difference />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/demo/fluid-blob" element={<FluidBlobDemo />} />
      </Routes>
      </main>
      <Contact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
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
