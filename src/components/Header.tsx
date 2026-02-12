import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface HeaderProps {
  onContactClick: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [pendingScroll, setPendingScroll] = useState<string | null>(null);

  const navItems = [
    { label: 'Industries', id: 'industries' },
    { label: 'Solutions', id: 'solutions' },
    { label: 'FAQ', id: 'faq' },
  ];

  const privacyLink = { label: 'Privacy', path: '/privacy' };

  useEffect(() => {
    if (pendingScroll && location.pathname === '/') {
      const timer = setTimeout(() => {
        const element = document.getElementById(pendingScroll);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setPendingScroll(null);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [pendingScroll, location.pathname]);

  const handleNavClick = (id: string) => {
    setIsOpen(false);

    if (location.pathname !== '/') {
      setPendingScroll(id);
      navigate('/');
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 pt-4 px-4 md:px-6" role="banner">
      <nav 
        aria-label="Main navigation" 
        className="max-w-7xl mx-auto flex items-center justify-between rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 px-6 py-4 hover:bg-white/15 transition-all duration-300"
      >
        <Link
          to="/"
          onClick={handleLogoClick}
          className="uppercase leading-[0.85] flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity duration-200"
          style={{ fontFamily: 'Blanka, sans-serif', fontWeight: 900, letterSpacing: '0.08em', fontSize: '1rem', color: '#ffffff' }}
        >
          Wexel
        </Link>

        <div className="hidden md:flex items-center gap-8 flex-1 mx-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.id)}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 whitespace-nowrap cursor-pointer bg-transparent border-none"
            >
              {item.label}
            </button>
          ))}
          <Link
            to={privacyLink.path}
            className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 whitespace-nowrap"
          >
            {privacyLink.label}
          </Link>
        </div>

        <button
          onClick={onContactClick}
          data-contact-btn
          className="hidden md:inline-flex px-6 py-2 rounded-lg bg-blue-500/80 hover:bg-blue-600 text-white text-sm font-semibold transition-all duration-200 whitespace-nowrap"
        >
          Contact
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden mt-2 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 p-4 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.id)}
              className="block w-full text-left text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 px-4 py-2 cursor-pointer bg-transparent border-none"
            >
              {item.label}
            </button>
          ))}
          <Link
            to={privacyLink.path}
            onClick={() => setIsOpen(false)}
            className="block w-full text-left text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 px-4 py-2"
          >
            {privacyLink.label}
          </Link>
          <button
            onClick={() => {
              onContactClick();
              setIsOpen(false);
            }}
            data-contact-btn
            className="w-full px-4 py-2 rounded-lg bg-blue-500/80 hover:bg-blue-600 text-white text-sm font-semibold transition-all duration-200"
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
}
