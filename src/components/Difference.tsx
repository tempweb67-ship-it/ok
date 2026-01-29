import { Sparkles, Zap, Target, Bot, LucideIcon } from 'lucide-react';

export default function Difference() {
  const differences = [
    {
      id: 1,
      title: 'Transformation-First Mindset',
      description: 'We architect solutions for the future, not patch legacy systems. Every engagement begins with reimagining what\'s possible, unlocking endless opportunities for innovation and growth.',
      icon: Sparkles,
      oldWay: 'Band-aid fixes on outdated systems',
      newWay: 'Future-ready architecture from day one',
      metric: '10x',
      metricLabel: 'Innovation velocity',
    },
    {
      id: 2,
      title: 'Rapid Deployment & Scale',
      description: 'Traditional consultants take months. Our AI-powered approach delivers enterprise transformation in weeks, enabling you to capitalize on opportunities faster than competition.',
      icon: Zap,
      oldWay: 'Months of planning and deployment',
      newWay: 'Live in weeks with immediate impact',
      metric: '5x',
      metricLabel: 'Faster time to market',
    },
    {
      id: 3,
      title: 'Measurable Business Impact',
      description: 'We\'re obsessed with outcomes. Every solution is engineered to deliver quantifiable ROI through operational excellence, revenue acceleration, and sustainable competitive advantage.',
      icon: Target,
      oldWay: 'Vague promises and unclear results',
      newWay: 'Quantifiable ROI from day one',
      metric: '300%',
      metricLabel: 'Average ROI',
    },
    {
      id: 4,
      title: 'Always-On Intelligence',
      description: 'Deploy solutions that never sleep. Our AI-powered systems operate 24/7 with superhuman consistency, eliminating bottlenecks and scaling infinitely with your ambitions.',
      icon: Bot,
      oldWay: 'Limited by human hours and capacity',
      newWay: '24/7 superhuman performance',
      metric: '∞',
      metricLabel: 'Scalability',
    },
  ];

  return (
    <div className="text-black overflow-hidden" style={{ minHeight: '100dvh' }}>

      <div className="relative z-10 pt-20 md:pt-32 pb-12 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-12 md:mb-20 text-center">
            <div className="inline-block mb-6">
              <span className="px-4 py-1.5 backdrop-blur-md bg-blue-500/20 border border-blue-500/30 rounded-full text-sm font-medium text-blue-700">
                The Winner's Advantage
              </span>
            </div>

            <h1
              className="text-black leading-[0.9] mb-4 md:mb-6 max-w-4xl mx-auto"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontWeight: 700,
                letterSpacing: '-0.04em',
                fontSize: 'clamp(2rem, 6vw, 5rem)',
              }}
            >
              Built for the AI Era.
              <br />
              <span className="text-black/50">Powered by Innovation.</span>
            </h1>

            <p className="text-base md:text-lg text-black/60 max-w-2xl mx-auto">
              Why leading organizations choose Wexel as their transformation partner
            </p>
          </div>

          <div className="space-y-6 md:space-y-8 max-w-6xl mx-auto">
            {differences.map((item, index) => {
              const Icon = item.icon;
              return (
                <DifferenceCard
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

interface DifferenceItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  oldWay: string;
  newWay: string;
  metric: string;
  metricLabel: string;
}

function DifferenceCard({ item, index, Icon }: { item: DifferenceItem; index: number; Icon: LucideIcon }) {
  return (
    <div className="group relative">
      <div className="relative p-5 md:p-8 rounded-3xl border border-black/10 backdrop-blur-md bg-white/20 overflow-hidden hover:border-black/20 hover:bg-white/30 transition-all duration-300">
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <div className="flex-shrink-0">
              <div className="p-4 bg-white/30 rounded-2xl inline-block group-hover:bg-white/40 transition-all duration-300">
                <Icon size={32} className="text-black" />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="text-black/30 font-mono text-xs mb-2 block">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3
                    className="text-2xl md:text-3xl font-bold leading-tight mb-3"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {item.title}
                  </h3>
                </div>

                <div className="flex-shrink-0 text-right">
                  <div className="text-3xl md:text-4xl font-bold text-black">
                    {item.metric}
                  </div>
                  <div className="text-xs text-black/50 mt-1 leading-tight">
                    {item.metricLabel}
                  </div>
                </div>
              </div>

              <p className="text-black/70 leading-relaxed mb-6 text-sm md:text-base">
                {item.description}
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <div className="absolute -left-3 top-0 bottom-0 w-1 bg-red-500/30 rounded-full" />
                  <div className="pl-4">
                    <div className="text-xs text-black/40 mb-1 uppercase tracking-wider">Traditional Approach</div>
                    <div className="text-black/50 line-through text-sm">{item.oldWay}</div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-3 top-0 bottom-0 w-1 bg-black/50 rounded-full" />
                  <div className="pl-4">
                    <div className="text-xs text-black/40 mb-1 uppercase tracking-wider">Wexel Way</div>
                    <div className="text-black font-medium text-sm">{item.newWay}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-black to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
      </div>
    </div>
  );
}
