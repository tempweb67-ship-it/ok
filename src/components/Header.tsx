import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  onContactClick: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {
  const location = useLocation();
  const isPrivacyPage = location.pathname === '/privacy';
  const wexelColor = isPrivacyPage ? '#FFFFFF' : '#7D7D7D';

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/20 border-b border-black/10">
      <div className="grid grid-cols-12 gap-0">
        <div className="col-span-4 md:col-span-3 px-4 md:px-6 py-4 border-r border-black/10">
          <Link
            to="/"
            className="uppercase leading-[0.85] inline-block"
            style={{ fontFamily: 'Blanka, sans-serif', fontWeight: 900, letterSpacing: '0.08em', fontSize: 'clamp(0.875rem, 1.5vw, 1.25rem)', color: wexelColor }}
          >
            Wexel
          </Link>
        </div>
        <div className="col-span-4 md:col-span-3 px-4 md:px-6 py-4 border-r border-black/10">
          <button
            onClick={onContactClick}
            className="text-[11px] uppercase tracking-wide text-black font-medium hover:text-blue-600 transition-colors"
            data-contact-btn
          >
            Contact ↓
          </button>
        </div>
        <div className="col-span-4 md:col-span-6 px-4 md:px-6 py-4">
          <Link
            to="/explore"
            className="text-[11px] uppercase tracking-wide text-black font-medium hover:text-emerald-600 transition-colors"
          >
            [ Explore ]
          </Link>
        </div>
      </div>
    </header>
  );
}
