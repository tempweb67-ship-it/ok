import { useState, useEffect } from 'react';
import SEO from './SEO';
import { LavaLamp } from './ui/fluid-blob';

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
      <section className="min-h-screen bg-black flex items-center justify-center px-6 pt-12 relative overflow-hidden">
      <LavaLamp />
      <div className="w-full max-w-5xl relative z-10 text-center">
        <h1 className="text-white font-bold tracking-tight mix-blend-exclusion text-7xl md:text-8xl lg:text-9xl">
          {displayedText}
        </h1>
        <p className="text-white text-lg md:text-2xl lg:text-3xl text-center mix-blend-exclusion max-w-4xl mx-auto leading-relaxed mt-8">
          AI-First Automation Agency.
        </p>
      </div>
    </section>
    </>
  );
}
