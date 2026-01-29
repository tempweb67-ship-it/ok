import { useNavigate } from 'react-router-dom';
import SEO from './SEO';
import LiquidGradient from './ui/flow-gradient-hero-section';

export default function Hero() {
  const navigate = useNavigate();

  const handleCtaClick = () => {
    navigate('/solutions');
  };

  return (
    <>
      <SEO
        title="Wexel - AI-First Automation Agency | Voice AI, CRM & Marketing Automation Solutions"
        description="Transform your business with Wexel's AI-First automation solutions. Expert in AI voice agents, intelligent CRM, mass outreach automation, e-commerce AI, and social media automation. Drive growth with cutting-edge AI technology."
        keywords="AI automation, voice automation, AI voice agents, AI CRM, conversational AI, mass outreach automation, email automation, e-commerce AI, social media automation, AI marketing, digital transformation, business automation"
        canonical="https://wexel.com/"
      />
      <LiquidGradient
        title="WEXEL"
        showPauseButton={true}
        ctaText="Explore Solutions"
        onCtaClick={handleCtaClick}
      />
    </>
  );
}
