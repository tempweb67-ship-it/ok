import { Link } from 'react-router-dom';

interface HeaderProps {
  onContactClick: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10" role="banner">
      <nav aria-label="Main navigation" className="grid grid-cols-12 gap-0">
        <div className="col-span-4 md:col-span-3 px-4 md:px-6 py-4 border-r border-white/10">
          <Link
            to="/"
            className="uppercase leading-[0.85] inline-block"
            style={{ fontFamily: 'Blanka, sans-serif', fontWeight: 900, letterSpacing: '0.08em', fontSize: 'clamp(0.875rem, 1.5vw, 1.25rem)', color: '#ffffff' }}
          >
            Wexel
          </Link>
        </div>
        <div className="col-span-4 md:col-span-3 px-4 md:px-6 py-4 border-r border-white/10">
          <button
            onClick={onContactClick}
            className="text-[11px] uppercase tracking-wide font-medium transition-colors text-white hover:text-blue-400"
            data-contact-btn
          >
            Contact ↓
          </button>
        </div>
        <div className="col-span-4 md:col-span-6 px-4 md:px-6 py-4">
          <Link
            to="/explore"
            className="text-[11px] uppercase tracking-wide font-medium transition-colors text-white hover:text-emerald-400"
          >
            [ Explore ]
          </Link>
        </div>
      </nav>
    </header>
  );
}
