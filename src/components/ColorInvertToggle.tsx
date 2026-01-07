import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ColorInvertToggle() {
  const [isInverted, setIsInverted] = useState(false);

  useEffect(() => {
    const savedState = localStorage.getItem('colorInverted');
    if (savedState === 'true') {
      setIsInverted(true);
      document.documentElement.style.filter = 'invert(1) hue-rotate(180deg)';
    }
  }, []);

  const toggleInvert = () => {
    const newState = !isInverted;
    setIsInverted(newState);

    if (newState) {
      document.documentElement.style.filter = 'invert(1) hue-rotate(180deg)';
      localStorage.setItem('colorInverted', 'true');
    } else {
      document.documentElement.style.filter = 'none';
      localStorage.setItem('colorInverted', 'false');
    }
  };

  return (
    <motion.button
      onClick={toggleInvert}
      className="fixed bottom-24 left-4 md:left-6 z-50 p-3 md:p-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-full border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 group"
      style={{ filter: isInverted ? 'invert(1) hue-rotate(180deg)' : 'none' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      aria-label="Toggle color mode"
    >
      <AnimatePresence mode="wait">
        {isInverted ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Sun size={20} className="text-white md:w-6 md:h-6" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Moon size={20} className="text-white md:w-6 md:h-6" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="hidden md:block absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg border border-white border-opacity-20 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ filter: isInverted ? 'invert(1) hue-rotate(180deg)' : 'none' }}
      >
        <span className="text-sm text-white font-medium">
          {isInverted ? 'Light Mode' : 'Dark Mode'}
        </span>
      </motion.div>
    </motion.button>
  );
}
