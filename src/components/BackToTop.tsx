import { ArrowUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function BackToTop() {
  const navigate = useNavigate();

  const handleBackToTop = () => {
    navigate('/');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  };

  return (
    <button
      onClick={handleBackToTop}
      className="inline-flex items-center gap-2 text-white hover:text-blue-400 transition-colors duration-300 mb-8"
      aria-label="Back to top"
    >
      <ArrowUp size={20} />
      Back to Top
    </button>
  );
}
