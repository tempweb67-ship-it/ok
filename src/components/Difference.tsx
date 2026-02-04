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
      <div className="relative z-10 py-32 md:py-40">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="mb-40 md:mb-48 text-center">
            <h1
              className="text-black leading-[0.95] mb-8"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontWeight: 700,
                letterSpacing: '-0.05em',
                fontSize: 'clamp(3rem, 9vw, 7rem)',
              }}
            >
              Built for the AI Era
            </h1>

            <p
              className="text-black/40 max-w-2xl mx-auto"
              style={{
                fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                lineHeight: '1.5',
                fontWeight: 400,
              }}
            >
              Transforming enterprise operations with intelligent automation and measurable results.
            </p>
          </div>

          <div className="space-y-48 md:space-y-56">
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
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-12 flex justify-center">
          <div className="w-24 h-24 flex items-center justify-center bg-black/[0.03] rounded-[2rem] transition-all duration-500 group-hover:bg-black/[0.06]">
            <Icon size={40} className="text-black" strokeWidth={1.75} />
          </div>
        </div>

        <h2
          className="text-black leading-[0.95] mb-12"
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          }}
        >
          {item.title}
        </h2>

        <div className="mb-16">
          <div
            className="text-black mb-3"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontSize: 'clamp(5rem, 12vw, 8rem)',
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
              fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
              fontWeight: 500,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            {item.metricLabel}
          </div>
        </div>

        <p
          className="text-black/50 leading-[1.6] mb-6 max-w-2xl mx-auto"
          style={{
            fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
            fontWeight: 400,
          }}
        >
          {item.description}
        </p>

        <p
          className="text-black font-medium"
          style={{
            fontSize: 'clamp(1rem, 1.75vw, 1.125rem)',
          }}
        >
          {item.tagline}
        </p>
      </div>
    </div>
  );
}
