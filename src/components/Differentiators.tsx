import { Sparkles, Zap, Target, Infinity } from 'lucide-react';

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
    icon: Infinity,
  },
];

export default function Differentiators() {
  return (
    <section className="bg-black py-20 px-4 md:px-8">
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

        <div className="space-y-8">
          {differentiators.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl border border-white/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-5xl font-bold text-white/10">
                          {item.number}
                        </span>
                        <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                      </div>

                      <h3 className="text-3xl font-bold text-white mb-4">
                        {item.title}
                      </h3>

                      <div className="inline-flex items-baseline gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 mb-6">
                        <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                          {item.metric}
                        </span>
                        <span className="text-sm text-white/60 uppercase tracking-wider">
                          {item.metricLabel}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-white/70 leading-relaxed mb-8 text-lg">
                    {item.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group/old relative overflow-hidden rounded-xl border border-red-500/20 bg-black/30 p-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover/old:opacity-100 transition-opacity duration-300" />
                      <div className="relative">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-2 h-2 rounded-full bg-red-500" />
                          <span className="text-xs text-white/40 uppercase tracking-wider font-semibold">
                            Old Way
                          </span>
                        </div>
                        <p className="text-white/40 line-through text-base">
                          {item.oldWay}
                        </p>
                      </div>
                    </div>

                    <div className="group/wexel relative overflow-hidden rounded-xl border border-blue-500/30 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 p-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover/wexel:opacity-100 transition-opacity duration-300" />
                      <div className="relative">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse" />
                          <span className="text-xs text-blue-300/80 uppercase tracking-wider font-semibold">
                            Wexel Way
                          </span>
                        </div>
                        <p className="text-white font-semibold text-base">
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
