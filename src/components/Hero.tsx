import { useState, useEffect } from 'react';
import SEO from './SEO';
import LiquidGradient from './ui/flow-gradient-hero-section';

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
        title="Wexel - AI-First Automation Agency | Voice AI, CRM & Marketing Automation Solutions"
        description="Transform your business with Wexel's AI-First automation solutions. Expert in AI voice agents, intelligent CRM, mass outreach automation, e-commerce AI, and social media automation. Drive growth with cutting-edge AI technology."
        keywords="AI automation, voice automation, AI voice agents, AI CRM, conversational AI, mass outreach automation, email automation, e-commerce AI, social media automation, AI marketing, digital transformation, business automation"
        canonical="https://wexel.com/"
      />
      <section className="min-h-screen flex items-center justify-center px-6 pt-12 relative overflow-hidden">
        <LiquidGradient />
        <div className="w-full max-w-[1800px] relative z-10 text-center">
          <h1
            className="text-white font-bold leading-[0.85] tracking-[0.08em] uppercase"
            style={{ fontSize: 'clamp(5.5rem, 10vw, 12rem)', fontFamily: 'Blanka, sans-serif', fontWeight: 900, color: '#ffffff' }}
          >
            {displayedText}
          </h1>
          <div className="mt-6 md:mt-12">
            <p className="text-white text-base sm:text-xl md:text-2xl leading-relaxed font-semibold tracking-wide whitespace-nowrap">
              AI-First Automation Agency.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
