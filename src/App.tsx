import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import HomePage from './components/HomePage';
import BottomMarquee from './components/Marquee';
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
  const showMarquee = location.pathname === '/';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="bg-black cursor-none">
      <CustomCursor />
      <Header onContactClick={() => setIsContactOpen(true)} />
      {showMarquee && <BottomMarquee />}
      <Routes>
        <Route path="/" element={<HomePage onContactClick={() => setIsContactOpen(true)} />} />
        <Route path="/solutions/aicrm" element={<AICRM />} />
        <Route path="/solutions/voice" element={<VoiceAgent />} />
        <Route path="/solutions/outreach" element={<Outreach />} />
        <Route path="/solutions/ecommerce" element={<Ecommerce />} />
        <Route path="/solutions/social" element={<Social />} />
        <Route path="/solutions/website" element={<Website />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
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
