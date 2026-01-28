import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onContactClick: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Solutions', id: 'solutions' },
    { label: 'Industries', id: 'industries' },
    { label: 'Vision', id: 'vision' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-black border-b border-white border-opacity-10">
        <div className="hidden md:grid grid-cols-12 gap-0">
          <div className="col-span-3 px-6 py-4 border-r border-white border-opacity-10">
            <Link
              to="/"
              className="uppercase text-white leading-[0.85] hover:opacity-60 transition-opacity inline-block"
              style={{ fontFamily: 'Blanka, sans-serif', fontWeight: 900, letterSpacing: '0.08em', fontSize: 'clamp(0.875rem, 1.5vw, 1.25rem)' }}
            >
              Wexel
            </Link>
          </div>
          <div className="col-span-2 px-6 py-4 border-r border-white border-opacity-10">
            <button
              onClick={onContactClick}
              className="text-[11px] uppercase tracking-wide text-white font-medium hover:opacity-60 transition-opacity"
              data-contact-btn
            >
              Contact
            </button>
          </div>
          {isHomePage ? (
            <>
              {navLinks.map((link) => (
                <div key={link.id} className="col-span-2 px-6 py-4 border-r border-white border-opacity-10 last:border-r-0">
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-[11px] uppercase tracking-wide text-white font-medium hover:opacity-60 transition-opacity"
                  >
                    {link.label}
                  </button>
                </div>
              ))}
              <div className="col-span-3 px-6 py-4"></div>
            </>
          ) : (
            <div className="col-span-7 px-6 py-4">
              <Link
                to="/"
                className="text-[11px] uppercase tracking-wide text-white font-medium hover:opacity-60 transition-opacity"
              >
                ← Back to Home
              </Link>
            </div>
          )}
        </div>

        <div className="md:hidden flex items-center justify-between px-4 py-4">
          <Link
            to="/"
            className="uppercase text-white leading-[0.85] inline-block"
            style={{ fontFamily: 'Blanka, sans-serif', fontWeight: 900, letterSpacing: '0.08em', fontSize: '1rem' }}
          >
            Wexel
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[57px] z-40 bg-black border-t border-white border-opacity-10">
          <div className="flex flex-col p-6 space-y-6">
            <button
              onClick={onContactClick}
              className="text-left text-lg uppercase tracking-wide text-white font-medium hover:opacity-60 transition-opacity"
              data-contact-btn
            >
              Contact
            </button>
            {isHomePage && navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left text-lg uppercase tracking-wide text-white font-medium hover:opacity-60 transition-opacity"
              >
                {link.label}
              </button>
            ))}
            {!isHomePage && (
              <Link
                to="/"
                className="text-left text-lg uppercase tracking-wide text-white font-medium hover:opacity-60 transition-opacity"
              >
                ← Back to Home
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
}
