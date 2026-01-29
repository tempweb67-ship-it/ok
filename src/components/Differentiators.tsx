import { Sparkles, Zap, Target, Bot } from 'lucide-react';

const differentiators = [
  {
    number: '01',
    title: 'Transformation-First Mindset',
    metric: '10x',
    metricLabel: 'Innovation velocity',
    description: 'We architect solutions for the future, not patch legacy systems. Every engagement begins with reimagining what\'s possible, unlocking endless opportunities for innovation and growth.',
    oldWay: 'Band-aid fixes on outdated systems',
    wexelWay: 'Future-ready architecture from day one',
    icon: Sparkles,
  },
  {
    number: '02',
    title: 'Rapid Deployment & Scale',
    metric: '5x',
    metricLabel: 'Faster time to market',
    description: 'Traditional consultants take months. Our AI-powered approach delivers enterprise transformation in weeks, enabling you to capitalize on opportunities faster than competition.',
    oldWay: 'Months of planning and deployment',
    wexelWay: 'Live in weeks with immediate impact',
    icon: Zap,
  },
  {
    number: '03',
    title: 'Measurable Business Impact',
    metric: '300%',
    metricLabel: 'Average ROI',
    description: 'We\'re obsessed with outcomes. Every solution is engineered to deliver quantifiable ROI through operational excellence, revenue acceleration, and sustainable competitive advantage.',
    oldWay: 'Vague promises and unclear results',
    wexelWay: 'Quantifiable ROI from day one',
    icon: Target,
  },
  {
    number: '04',
    title: 'Always-On Intelligence',
    metric: '∞',
    metricLabel: 'Scalability',
    description: 'Deploy solutions that never sleep. Our AI-powered systems operate 24/7 with superhuman consistency, eliminating bottlenecks and scaling infinitely with your ambitions.',
    oldWay: 'Limited by human hours and capacity',
    wexelWay: '24/7 superhuman performance',
    icon: Bot,
  },
];

export default function Differentiators() {
  return (
    <section className="bg-[#0a0e1a] py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm font-medium text-blue-300">
              The Wexel Difference
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Why Leading Organizations
            <br />
            <span className="text-white/50">Choose Wexel</span>
          </h2>
        </div>

        <div className="space-y-1">
          {differentiators.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="relative group bg-[#0f1420] border-b border-white/5 last:border-b-0"
              >
                <div className="relative p-8 md:p-12">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex items-start gap-6 md:w-2/3">
                      <div className="flex-shrink-0 w-20 h-20 bg-[#1a2033] rounded-2xl border border-white/5 flex items-center justify-center">
                        <Icon className="w-9 h-9 text-white/80" />
                      </div>

                      <div className="flex-1 space-y-6">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-4xl font-bold text-white/10">
                              {item.number}
                            </span>
                          </div>

                          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            {item.title}
                          </h3>

                          <div className="inline-flex items-baseline gap-2 px-4 py-2 rounded-full bg-[#1a2844] border border-blue-500/20">
                            <span className="text-2xl font-bold text-blue-400">
                              {item.metric}
                            </span>
                            <span className="text-xs text-blue-300/60 uppercase tracking-widest">
                              {item.metricLabel}
                            </span>
                          </div>
                        </div>

                        <p className="text-white/60 leading-relaxed text-base md:text-lg">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="md:w-1/3 flex flex-col gap-4">
                      <div className="relative overflow-hidden rounded-lg border border-red-500/20 bg-[#1a0f0f] p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                          <span className="text-[10px] text-red-400/60 uppercase tracking-widest font-semibold">
                            Old Way
                          </span>
                        </div>
                        <p className="text-white/30 text-sm leading-relaxed">
                          {item.oldWay}
                        </p>
                      </div>

                      <div className="relative overflow-hidden rounded-lg border border-blue-500/30 bg-[#0f1a2a] p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                          <span className="text-[10px] text-blue-400 uppercase tracking-widest font-semibold">
                            Wexel Way
                          </span>
                        </div>
                        <p className="text-white/90 text-sm leading-relaxed font-medium">
                          {item.wexelWay}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
