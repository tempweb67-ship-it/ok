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
      <div className="w-full max-w-[1400px] relative z-10 text-center px-4">
        <svg
          viewBox="0 0 1200 280"
          className="w-full h-auto"
          style={{ maxWidth: '1400px', margin: '0 auto' }}
        >
          <defs>
            <filter id="morphic-distortion">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.01 0.008"
                numOctaves="3"
                seed="2"
                result="turbulence"
              >
                <animate
                  attributeName="baseFrequency"
                  values="0.01 0.008; 0.012 0.01; 0.01 0.008"
                  dur="8s"
                  repeatCount="indefinite"
                />
              </feTurbulence>
              <feDisplacementMap
                in="SourceGraphic"
                in2="turbulence"
                scale="15"
                xChannelSelector="R"
                yChannelSelector="G"
              >
                <animate
                  attributeName="scale"
                  values="15; 25; 15"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </feDisplacementMap>
            </filter>

            <filter id="glow-effect">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          <text
            x="50%"
            y="45%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="uppercase"
            filter="url(#morphic-distortion) url(#glow-effect)"
            style={{
              fontFamily: 'Blanka, sans-serif',
              fontSize: '180px',
              fontWeight: 900,
              fill: '#ffffff',
              letterSpacing: '0.02em'
            }}
          >
            {displayedText}
          </text>
        </svg>
        <div className="mt-8 md:mt-12 max-w-5xl mx-auto">
          <svg
            viewBox="0 0 1400 100"
            className="w-full h-auto"
            style={{ maxWidth: '1400px', margin: '0 auto' }}
          >
            <defs>
              <filter id="subtitle-distortion">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.008 0.006"
                  numOctaves="2"
                  seed="5"
                  result="turbulence"
                >
                  <animate
                    attributeName="baseFrequency"
                    values="0.008 0.006; 0.01 0.008; 0.008 0.006"
                    dur="10s"
                    repeatCount="indefinite"
                  />
                </feTurbulence>
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="turbulence"
                  scale="8"
                  xChannelSelector="R"
                  yChannelSelector="G"
                >
                  <animate
                    attributeName="scale"
                    values="8; 14; 8"
                    dur="7s"
                    repeatCount="indefinite"
                  />
                </feDisplacementMap>
              </filter>
            </defs>

            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              filter="url(#subtitle-distortion)"
              style={{
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontSize: '38px',
                fontWeight: 400,
                fill: '#ffffff',
                letterSpacing: '0.01em'
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
