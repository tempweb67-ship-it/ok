import { Sparkles, Zap, Target, Bot, LucideIcon } from 'lucide-react';
import { About3 } from './ui/about-3';

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
    <div className="bg-black min-h-screen text-white overflow-hidden">

      <div className="relative z-10 pt-20 md:pt-32 pb-12 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-12 md:mb-20 text-center">
            <div className="inline-block mb-6">
              <span className="px-4 py-1.5 bg-blue-500 bg-opacity-10 border border-blue-500 border-opacity-30 rounded-full text-sm font-medium text-blue-300">
                The Winner's Advantage
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

          <About3
            title="Transforming Enterprises Globally"
            description="We partner with forward-thinking organizations to unlock the full potential of AI automation. From startups to Fortune 500 companies, our solutions drive measurable impact across every industry."
            mainImage={{
              src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80",
              alt: "Team collaboration in modern office",
            }}
            secondaryImage={{
              src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&auto=format&fit=crop&q=80",
              alt: "Innovation and technology",
            }}
            breakout={{
              src: "",
              alt: "Wexel AI",
              title: "Built for Scale, Designed for Impact",
              description:
                "Our AI-powered platform delivers enterprise transformation in weeks, not months. Experience the future of business automation with solutions that work 24/7.",
              buttonText: "Explore Solutions",
              buttonUrl: "/solutions",
            }}
            companiesTitle="Trusted by Industry Leaders"
            companies={[
              {
                src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-1.svg",
                alt: "Enterprise Partner",
              },
              {
                src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-2.svg",
                alt: "Tech Company",
              },
              {
                src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-3.svg",
                alt: "Innovation Leader",
              },
              {
                src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-4.svg",
                alt: "Global Corporation",
              },
              {
                src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-5.svg",
                alt: "Digital Pioneer",
              },
              {
                src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-6.svg",
                alt: "Industry Leader",
              },
            ]}
          />
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
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative p-6 md:p-10 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-sm overflow-hidden hover:border-white/20 transition-all duration-500">
        <div className="relative z-10">
          <div className="flex items-start gap-6 md:gap-8 mb-6">
            <div className="flex-shrink-0">
              <div className="p-5 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-500">
                <Icon size={28} className="text-white" />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-white/20 to-white/5 bg-clip-text text-transparent leading-none">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
              </div>

              <h3
                className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-br from-white to-white/80 bg-clip-text text-transparent"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  letterSpacing: '-0.02em',
                }}
              >
                {item.title}
              </h3>

              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-white/10 mb-6">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {item.metric}
                </div>
                <div className="h-4 w-px bg-white/20" />
                <div className="text-xs text-white/60 uppercase tracking-wider">
                  {item.metricLabel}
                </div>
              </div>
            </div>
          </div>

          <p className="text-white/70 leading-relaxed mb-8 text-base">
            {item.description}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative group/card">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
              <div className="relative p-5 rounded-xl border border-red-500/20 bg-black/20 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <div className="text-xs text-white/50 uppercase tracking-wider font-medium">Old Way</div>
                </div>
                <div className="text-white/40 line-through text-sm leading-relaxed">{item.oldWay}</div>
              </div>
            </div>

            <div className="relative group/card">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
              <div className="relative p-5 rounded-xl border border-blue-500/30 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
                  <div className="text-xs text-blue-300/80 uppercase tracking-wider font-medium">Wexel Way</div>
                </div>
                <div className="text-white font-medium text-sm leading-relaxed">{item.newWay}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
