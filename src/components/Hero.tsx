import { useState, useEffect } from 'react';
import Dither from './Dither';

export default function Hero() {
  const fullText = "Wexel";
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-6 pt-12 relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <Dither
          waveColor={[1, 0, 0.4]}
          disableAnimation={false}
          enableMouseInteraction
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>
      <div className="w-full max-w-[1800px] relative z-10 text-center">
        <h1
          className="text-white font-bold leading-[0.85] tracking-[0.08em] uppercase"
          style={{ fontSize: 'clamp(5.5rem, 10vw, 12rem)', fontFamily: 'Blanka, sans-serif', fontWeight: 900, color: '#ffffff' }}
        >
          {displayedText}
        </h1>
        <div className="mt-6 md:mt-12">
          <p className="text-white text-base sm:text-xl md:text-2xl leading-relaxed font-semibold tracking-wide whitespace-nowrap">
            Digital Transformation Agency.
          </p>
        </div>
      </div>
    </section>
  );
}
