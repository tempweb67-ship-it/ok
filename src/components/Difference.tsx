import { ArrowRight, Sparkles, Zap, Target, Bot, TrendingUp, Users, Clock, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

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

  const headerRef = useRef(null);
  const statsRef = useRef(null);
  const ctaRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  return (
    <div className="bg-black min-h-screen text-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 pt-20 md:pt-32 pb-12 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            ref={headerRef}
            className="mb-12 md:mb-20 text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={headerInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="px-4 py-1.5 bg-white bg-opacity-5 border border-white border-opacity-10 rounded-full text-sm font-medium">
                The Wexel Advantage
              </span>
            </motion.div>

            <motion.h1
              className="text-white leading-[0.9] mb-4 md:mb-6 max-w-4xl mx-auto"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontWeight: 700,
                letterSpacing: '-0.04em',
                fontSize: 'clamp(2rem, 6vw, 5rem)',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Built for the AI Era.
              <br />
              <span className="text-white text-opacity-50">Powered by Innovation.</span>
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-white text-opacity-60 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Why leading organizations choose Wexel as their transformation partner
            </motion.p>
          </motion.div>

          <motion.div
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-16 md:mb-24 max-w-5xl mx-auto"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="relative p-3 md:p-6 bg-white bg-opacity-5 border border-white border-opacity-10 rounded-2xl hover:border-opacity-20 transition-all duration-300 hover:bg-opacity-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300" />
                    <Icon size={20} className="mb-2 md:mb-3 text-white text-opacity-60" />
                    <div className="text-xl md:text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-xs md:text-sm text-white text-opacity-50">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

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

          <motion.div
            ref={ctaRef}
            className="mt-16 md:mt-32 text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-xl opacity-30" />
              <div className="relative bg-white bg-opacity-5 border border-white border-opacity-10 rounded-3xl p-6 md:p-12 backdrop-blur-sm">
                <motion.h2
                  className="text-2xl md:text-4xl font-bold mb-3 md:mb-4"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    letterSpacing: '-0.02em',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Ready to Transform?
                </motion.h2>
                <motion.p
                  className="text-sm md:text-base text-white text-opacity-60 mb-6 md:mb-8 max-w-xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Join hundreds of enterprises already experiencing the future of business transformation
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
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
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function DifferenceCard({ item, index, Icon }: { item: any; index: number; Icon: any }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      <motion.div
        className="relative p-5 md:p-8 rounded-3xl border border-white border-opacity-10 bg-white bg-opacity-[0.02] backdrop-blur-sm overflow-hidden"
        whileHover={{
          borderColor: 'rgba(255, 255, 255, 0.2)',
          backgroundColor: 'rgba(255, 255, 255, 0.05)'
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-[100px] opacity-0 group-hover:opacity-10 transition-opacity duration-700" />

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <div className="flex-shrink-0">
              <motion.div
                className="p-4 bg-white bg-opacity-5 rounded-2xl inline-block group-hover:bg-opacity-10 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Icon size={32} className="text-white" />
              </motion.div>
            </div>

            <div className="flex-1">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <motion.span
                    className="text-white text-opacity-30 font-mono text-xs mb-2 block"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 0.3 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </motion.span>
                  <motion.h3
                    className="text-2xl md:text-3xl font-bold leading-tight mb-3"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      letterSpacing: '-0.02em',
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                  >
                    {item.title}
                  </motion.h3>
                </div>

                <motion.div
                  className="flex-shrink-0 text-right"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {item.metric}
                  </div>
                  <div className="text-xs text-white text-opacity-50 mt-1 leading-tight">
                    {item.metricLabel}
                  </div>
                </motion.div>
              </div>

              <motion.p
                className="text-white text-opacity-70 leading-relaxed mb-6 text-sm md:text-base"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 0.7 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
              >
                {item.description}
              </motion.p>

              <motion.div
                className="grid md:grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
              >
                <div className="relative">
                  <div className="absolute -left-3 top-0 bottom-0 w-1 bg-red-500 bg-opacity-30 rounded-full" />
                  <div className="pl-4">
                    <div className="text-xs text-white text-opacity-40 mb-1 uppercase tracking-wider">Traditional Approach</div>
                    <div className="text-white text-opacity-50 line-through text-sm">{item.oldWay}</div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-3 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full" />
                  <div className="pl-4">
                    <div className="text-xs text-white text-opacity-40 mb-1 uppercase tracking-wider">Wexel Way</div>
                    <div className="text-white font-medium text-sm">{item.newWay}</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-50"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </motion.div>
  );
}
