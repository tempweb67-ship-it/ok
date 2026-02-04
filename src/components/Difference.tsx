import { Sparkles, Zap, Target, Bot, LucideIcon } from 'lucide-react';

export default function Difference() {
  const features = [
    {
      id: 1,
      title: 'Transformation-First Mindset',
      description: 'We architect solutions for the future, not patch legacy systems. Every engagement begins with reimagining what\'s possible.',
      icon: Sparkles,
      metric: '10x',
      metricLabel: 'Innovation Velocity',
      tagline: 'Future-ready architecture from day one',
    },
    {
      id: 2,
      title: 'Rapid Deployment',
      description: 'Our AI-powered approach delivers enterprise transformation in weeks, enabling you to capitalize on opportunities faster.',
      icon: Zap,
      metric: '5x',
      metricLabel: 'Faster Time to Market',
      tagline: 'Live in weeks with immediate impact',
    },
    {
      id: 3,
      title: 'Measurable Impact',
      description: 'Every solution is engineered to deliver quantifiable ROI through operational excellence and revenue acceleration.',
      icon: Target,
      metric: '300%',
      metricLabel: 'Average ROI',
      tagline: 'Quantifiable results from day one',
    },
    {
      id: 4,
      title: 'Always-On Intelligence',
      description: 'Deploy solutions that never sleep. Our AI-powered systems operate 24/7 with superhuman consistency.',
      icon: Bot,
      metric: '24/7',
      metricLabel: 'Unlimited Scalability',
      tagline: 'Superhuman performance, infinite scale',
    },
  ];

  return (
    <div className="text-black bg-white" style={{ minHeight: '100dvh' }}>
      <div className="relative z-10 pt-20 md:pt-32 pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-20 md:mb-32 text-center">
            <h1
              className="text-black leading-[0.95] mb-6 md:mb-8"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontWeight: 700,
                letterSpacing: '-0.04em',
                fontSize: 'clamp(2.5rem, 8vw, 6rem)',
              }}
            >
              Built for the AI Era
            </h1>

            <p className="text-xl md:text-2xl text-black/50 max-w-3xl mx-auto leading-relaxed">
              Transforming enterprise operations with intelligent automation and measurable results.
            </p>
          </div>

          <div className="space-y-24 md:space-y-32 max-w-5xl mx-auto">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <FeatureCard
                  key={item.id}
                  item={item}
                  index={index}
                  Icon={Icon}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

interface FeatureItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  metric: string;
  metricLabel: string;
  tagline: string;
}

function FeatureCard({ item, Icon }: { item: FeatureItem; index: number; Icon: LucideIcon }) {
  return (
    <div className="group">
      <div className="text-center max-w-3xl mx-auto">
        <div className="mb-8 flex justify-center">
          <div className="p-6 bg-black/5 rounded-3xl inline-block">
            <Icon size={48} className="text-black" strokeWidth={1.5} />
          </div>
        </div>

        <h2
          className="text-black leading-tight mb-6"
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          }}
        >
          {item.title}
        </h2>

        <div className="mb-8">
          <div
            className="text-black font-semibold mb-2"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontSize: 'clamp(3rem, 8vw, 5rem)',
              letterSpacing: '-0.02em',
            }}
          >
            {item.metric}
          </div>
          <div className="text-black/40 text-sm uppercase tracking-wider font-medium">
            {item.metricLabel}
          </div>
        </div>

        <p className="text-lg md:text-xl text-black/60 leading-relaxed mb-4 max-w-2xl mx-auto">
          {item.description}
        </p>

        <p className="text-base md:text-lg text-black/90 font-medium">
          {item.tagline}
        </p>
      </div>
    </div>
  );
}
