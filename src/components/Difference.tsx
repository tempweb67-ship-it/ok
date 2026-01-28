import { ArrowRight, Sparkles, Zap, Target, Bot, TrendingUp, Users, Clock, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

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

  const stats = [
    { icon: TrendingUp, value: '300%', label: 'Average ROI increase' },
    { icon: Users, value: '500+', label: 'Enterprises transformed' },
    { icon: Clock, value: '90%', label: 'Faster deployment' },
    { icon: Rocket, value: '24/7', label: 'Always-on systems' },
  ];

  return (
    <div className="bg-black min-h-screen text-white overflow-hidden">

      <div className="relative z-10 pt-20 md:pt-32 pb-12 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-12 md:mb-20 text-center">
            <div className="inline-block mb-6">
              <span className="px-4 py-1.5 bg-white bg-opacity-5 border border-white border-opacity-10 rounded-full text-sm font-medium">
                The Wexel Advantage
              </span>
            </div>

            <h1
              className="text-white leading-[0.9] mb-4 md:mb-6 max-w-4xl mx-auto"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontWeight: 700,
                letterSpacing: '-0.04em',
                fontSize: 'clamp(2rem, 6vw, 5rem)',
              }}
            >
              Built for the AI Era.
              <br />
              <span className="text-white text-opacity-50">Powered by Innovation.</span>
            </h1>

            <p className="text-base md:text-lg text-white text-opacity-60 max-w-2xl mx-auto">
              Why leading organizations choose Wexel as their transformation partner
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-16 md:mb-24 max-w-5xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="relative group">
                  <div className="relative p-3 md:p-6 bg-white bg-opacity-5 border border-white border-opacity-10 rounded-2xl hover:border-opacity-20 transition-all duration-300 hover:bg-opacity-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300" />
                    <Icon size={20} className="mb-2 md:mb-3 text-white text-opacity-60" />
                    <div className="text-xl md:text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-xs md:text-sm text-white text-opacity-50">{stat.label}</div>
                  </div>
                </div>
              );
            })}
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

          <div className="mt-16 md:mt-32 text-center">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-white rounded-3xl blur-xl opacity-10" />
              <div className="relative bg-white bg-opacity-5 border border-white border-opacity-10 rounded-3xl p-6 md:p-12 backdrop-blur-sm">
                <h2
                  className="text-2xl md:text-4xl font-bold mb-3 md:mb-4"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Ready to Transform?
                </h2>
                <p className="text-sm md:text-base text-white text-opacity-60 mb-6 md:mb-8 max-w-xl mx-auto">
                  Join hundreds of enterprises already experiencing the future of business transformation
                </p>
                <div>
                  <Link
                    to="/"
                    onClick={(e) => {
                      const contactBtn = document.querySelector('[data-contact-btn]');
                      if (contactBtn) {
                        (contactBtn as HTMLButtonElement).click();
                      }
                    }}
                    className="px-6 md:px-10 py-3 md:py-4 bg-white text-black font-semibold rounded-xl hover:bg-opacity-90 transition-all duration-300 inline-flex items-center gap-2 text-sm md:text-base"
                  >
                    Start Your Journey <ArrowRight size={16} className="md:size-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DifferenceCard({ item, index, Icon }: { item: any; index: number; Icon: any }) {
  return (
    <div className="group relative">
      <div className="relative p-5 md:p-8 rounded-3xl border border-white border-opacity-10 bg-white bg-opacity-[0.02] backdrop-blur-sm overflow-hidden hover:border-opacity-20 hover:bg-opacity-5 transition-all duration-300">
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <div className="flex-shrink-0">
              <div className="p-4 bg-white bg-opacity-5 rounded-2xl inline-block group-hover:bg-opacity-10 transition-all duration-300">
                <Icon size={32} className="text-white" />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="text-white text-opacity-30 font-mono text-xs mb-2 block">
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
                  <div className="text-3xl md:text-4xl font-bold text-white">
                    {item.metric}
                  </div>
                  <div className="text-xs text-white text-opacity-50 mt-1 leading-tight">
                    {item.metricLabel}
                  </div>
                </div>
              </div>

              <p className="text-white text-opacity-70 leading-relaxed mb-6 text-sm md:text-base">
                {item.description}
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <div className="absolute -left-3 top-0 bottom-0 w-1 bg-red-500 bg-opacity-30 rounded-full" />
                  <div className="pl-4">
                    <div className="text-xs text-white text-opacity-40 mb-1 uppercase tracking-wider">Traditional Approach</div>
                    <div className="text-white text-opacity-50 line-through text-sm">{item.oldWay}</div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-3 top-0 bottom-0 w-1 bg-white bg-opacity-50 rounded-full" />
                  <div className="pl-4">
                    <div className="text-xs text-white text-opacity-40 mb-1 uppercase tracking-wider">Wexel Way</div>
                    <div className="text-white font-medium text-sm">{item.newWay}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
      </div>
    </div>
  );
}
