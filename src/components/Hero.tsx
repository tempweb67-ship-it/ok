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
      <div className="w-full max-w-[1800px] relative z-10 text-center">
        <svg
          viewBox="0 0 1000 200"
          className="w-full h-auto mix-blend-exclusion"
          style={{ maxWidth: '1800px', margin: '0 auto' }}
        >
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="uppercase"
            style={{
              fontFamily: 'Blanka, sans-serif',
              fontSize: '140px',
              fontWeight: 900,
              fill: '#ffffff',
              letterSpacing: '0.08em'
            }}
          >
            {displayedText}
          </text>
        </svg>
        <div className="mt-6 md:mt-12">
          <svg
            viewBox="0 0 1000 60"
            className="w-full h-auto mix-blend-exclusion"
            style={{ maxWidth: '1200px', margin: '0 auto' }}
          >
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              style={{
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontSize: '32px',
                fontWeight: 600,
                fill: '#ffffff',
                letterSpacing: '0.05em'
              }}
            >
              AI-First Automation Agency.
            </text>
          </svg>
        </div>
      </div>
    </section>
    </>
  );
}
