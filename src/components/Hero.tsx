import { useState, useEffect } from 'react';
import SEO from './SEO';
import FAQ from './FAQ';

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
    <>
      <SEO
        title="Wexel - AI Automation Agency | Voice Agents, CRM, Outreach & E-Commerce"
        description="Wexel builds AI automation systems for businesses. Voice agents, CRM, mass outreach, e-commerce, social media, and web. We specialize so you scale."
        keywords="AI automation agency, AI voice agents, AI CRM, mass outreach automation, e-commerce AI, social media automation, business automation, Wexel"
        canonical="https://wexel.com/"
      />
      <div>
        <section className="flex items-center justify-center px-6 pt-12 relative" style={{ minHeight: '100dvh' }}>
          <div className="w-full max-w-[1800px] relative z-10 text-center">
            <h1
              className="text-white font-bold leading-[0.85] tracking-[0.08em] uppercase"
              style={{ fontSize: 'clamp(5.5rem, 10vw, 12rem)', fontFamily: 'Blanka, sans-serif', fontWeight: 900, color: '#ffffff' }}
            >
              {displayedText}
            </h1>
            <div className="mt-6 md:mt-12">
              <p className="hero-description text-white text-base sm:text-xl md:text-2xl leading-relaxed font-semibold tracking-wide whitespace-nowrap">
                AI-First Automation Agency.
              </p>
            </div>
          </div>
        </section>
        <FAQ />
      </div>
    </>
  );
}
