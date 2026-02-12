import { motion } from 'framer-motion';
import { X, Mail, MapPin, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ContactProps {
  isOpen: boolean;
  onClose: () => void;
}

const GlitchText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    setDisplayText('');

    const chars = '01';
    let iteration = 0;

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((_, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * 2)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayText || text}</span>;
};

export default function Contact({ isOpen, onClose }: ContactProps) {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setStartAnimation(false);
      const timer = setTimeout(() => setStartAnimation(true), 800);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] backdrop-blur-xl bg-black/80"
      style={{ height: '100dvh' }}
    >
      <div className="w-full overflow-y-auto scrollbar-hide" style={{ height: '100dvh' }}>
        <button
          onClick={onClose}
          className="fixed top-8 right-8 z-10 text-white hover:rotate-90 transition-transform duration-300"
        >
          <X size={32} strokeWidth={1.5} />
        </button>

        <div className="flex items-center justify-center px-6 py-20" style={{ minHeight: '100dvh' }}>
          <div className="max-w-3xl w-full">
            <div>
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <h1
                    className="text-white leading-[0.85] mb-6"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      fontWeight: 700,
                      letterSpacing: '-0.04em',
                      fontSize: 'clamp(4rem, 12vw, 8rem)',
                    }}
                  >
                    LET'S
                    <br />
                    TALK
                  </h1>
                  <p className="text-white/60 text-lg leading-relaxed max-w-md">
                   We build what others can't. No hype. Let's hop on a call to identify your needs and engineer the custom solution that fits.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="space-y-6"
                >
                  <div className="flex items-start gap-4 group">
                    <Mail className="text-white/40 mt-1" size={28} />
                    <div>
                      <p className="text-white/40 text-sm uppercase tracking-wider mb-2">Email</p>
                      <a
                        href="mailto:business@wexel.ai"
                        className="text-white text-2xl inline-block font-mono"
                      >
                        {startAnimation && <GlitchText text="business@wexel.ai" />}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <Phone className="text-white/40 mt-1" size={28} />
                    <div>
                      <p className="text-white/40 text-sm uppercase tracking-wider mb-2">Phone</p>
                      <a
                        href="tel:+918910949074"
                        className="text-white text-2xl inline-block font-mono"
                      >
                        {startAnimation && <GlitchText text="+91 8910949074" />}
                      </a>
                      <p className="text-green-400/80 text-sm mt-2 flex items-center gap-2">
                        <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        WhatsApp Available
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <MapPin className="text-white/40 mt-1" size={28} />
                    <div>
                      <p className="text-white/40 text-sm uppercase tracking-wider mb-2">Location</p>
                      <div className="text-white text-2xl font-mono">
                        {startAnimation && (
                          <>
                            <GlitchText text="Kolkata, WB" />
                            <br />
                            <GlitchText text="India" />
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
