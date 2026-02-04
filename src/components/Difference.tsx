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
    <div className="text-black" style={{ minHeight: '100dvh' }}>
      <div className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-16 text-center">
            <h1
              className="text-black leading-[0.95] mb-6"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontWeight: 700,
                letterSpacing: '-0.05em',
                fontSize: 'clamp(2.25rem, 9vw, 7rem)',
              }}
            >
              Built for the AI Era
            </h1>

            <p
              className="text-black/60 max-w-2xl mx-auto"
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                lineHeight: '1.5',
                fontWeight: 400,
              }}
            >
              Transforming enterprise operations with intelligent automation and measurable results.
            </p>
          </div>

          <div className="space-y-8">
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

function FeatureCard({ item }: { item: FeatureItem; index: number; Icon: LucideIcon }) {
  return (
    <div className="group relative rounded-2xl p-8 backdrop-blur-md bg-white/20 border border-black/10 hover:bg-white/30 hover:border-black/20 transition-all duration-500">
      <div className="text-center">
        <h2
          className="text-black leading-[0.95] mb-6"
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          }}
        >
          {item.title}
        </h2>

        <div className="mb-8">
          <div
            className="text-black mb-2"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontSize: 'clamp(3rem, 8vw, 5rem)',
              fontWeight: 600,
              letterSpacing: '-0.04em',
              lineHeight: '0.9',
            }}
          >
            {item.metric}
          </div>
          <div
            className="text-black/30"
            style={{
              fontSize: 'clamp(0.75rem, 1.25vw, 0.875rem)',
              fontWeight: 500,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            {item.metricLabel}
          </div>
        </div>

        <p
          className="text-black/70 leading-[1.6] mb-4"
          style={{
            fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
            fontWeight: 400,
          }}
        >
          {item.description}
        </p>

        <p
          className="text-black font-medium"
          style={{
            fontSize: 'clamp(0.875rem, 1.25vw, 1rem)',
          }}
        >
          {item.tagline}
        </p>
      </div>
    </div>
  );
}
