import { ArrowRight, Sparkles, Zap, Target, Bot, TrendingUp, Workflow, Infinity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Difference() {
  return (
    <div className="bg-slate-950 min-h-screen text-white overflow-hidden">
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <HeroSection />
          <Section01 />
          <Section02 />
          <Section03 />
          <Section04 />
          <CTASection />
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="mb-32"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8 }}
    >
      <h1
        className="text-white leading-[0.9] mb-6"
        style={{
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          fontWeight: 700,
          letterSpacing: '-0.04em',
          fontSize: 'clamp(3rem, 10vw, 5rem)',
        }}
      >
        What's Different
      </h1>
      <p className="text-xl text-slate-300 mb-3 max-w-3xl">
        Why leading organizations choose Wexel as their transformation partner.
      </p>
      <p className="text-lg text-slate-400 max-w-3xl">
        We're a digital transformation solution provider built for the AI era.
      </p>
    </motion.div>
  );
}

function Section01() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="py-32 border-t border-slate-800"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Sparkles size={24} className="text-blue-400" />
            <span className="text-slate-400 text-sm font-mono">01</span>
          </div>
          <h2
            className="text-4xl font-bold mb-6"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              letterSpacing: '-0.02em',
            }}
          >
            Transformation-First Mindset
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            We architect solutions for the future, not patch legacy systems. Every engagement begins with reimagining what's possible, unlocking endless opportunities for innovation and growth.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-slate-900 rounded-2xl p-8 border border-slate-800"
        >
          <h3 className="text-sm font-mono text-slate-400 mb-6">Legacy vs. Wexel</h3>
          <div className="space-y-4">
            <ComparisonRow label="Approach" legacy="Band-aid solutions" wexel="Strategic reimagining" />
            <ComparisonRow label="Timeline" legacy="9-18 months" wexel="4-8 weeks" />
            <ComparisonRow label="Technology" legacy="Maintaining status quo" wexel="AI-powered innovation" />
            <ComparisonRow label="Outcomes" legacy="Incremental improvements" wexel="Exponential growth" />
            <ComparisonRow label="Scalability" legacy="Limited by legacy systems" wexel="Infinite potential" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function ComparisonRow({ label, legacy, wexel }: { label: string; legacy: string; wexel: string }) {
  return (
    <div className="py-3 border-b border-slate-800 last:border-b-0">
      <p className="text-sm text-slate-400 mb-2">{label}</p>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-sm text-slate-500">{legacy}</div>
        <div className="text-sm text-blue-300 font-medium">{wexel}</div>
      </div>
    </div>
  );
}

function Section02() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="py-32 border-t border-slate-800"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          order={[1, 1, 2]}
        >
          <div className="flex items-center gap-3 mb-6">
            <Zap size={24} className="text-amber-400" />
            <span className="text-slate-400 text-sm font-mono">02</span>
          </div>
          <h2
            className="text-4xl font-bold mb-6"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              letterSpacing: '-0.02em',
            }}
          >
            Rapid Deployment & Scale
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            Traditional consultants take months. Our AI-powered approach delivers enterprise transformation in weeks, enabling you to capitalize on opportunities faster than competition.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          order={[2, 2, 1]}
          className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 border border-slate-700"
        >
          <h3 className="text-sm font-mono text-slate-400 mb-12">Delivery Timeline</h3>
          <div className="space-y-8">
            <TimelineItem
              label="Traditional Approach"
              duration="9-18 Months"
              color="bg-slate-700"
              width="w-full"
            />
            <TimelineItem
              label="Wexel AI-Powered"
              duration="4-8 Weeks"
              color="bg-blue-500"
              width="w-1/3"
            />
          </div>
          <div className="mt-8 pt-8 border-t border-slate-700">
            <p className="text-sm text-slate-400">
              <span className="text-blue-400 font-bold">75% faster</span> time to enterprise value
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function TimelineItem({
  label,
  duration,
  color,
  width,
}: {
  label: string;
  duration: string;
  color: string;
  width: string;
}) {
  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm text-slate-300">{label}</span>
        <span className="text-sm font-mono text-slate-400">{duration}</span>
      </div>
      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
        <div className={`h-full ${color} rounded-full`} style={{ width }} />
      </div>
    </div>
  );
}

function Section03() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const outcomes = [
    {
      icon: Workflow,
      title: 'Operational Excellence',
      description: 'Streamlined processes with 40% efficiency gains',
      color: 'from-emerald-500/20 to-transparent',
    },
    {
      icon: TrendingUp,
      title: 'Revenue Acceleration',
      description: 'Unlock new revenue streams worth millions annually',
      color: 'from-blue-500/20 to-transparent',
    },
    {
      icon: Infinity,
      title: 'Sustainable Advantage',
      description: 'Build competitive moats that endure for years',
      color: 'from-purple-500/20 to-transparent',
    },
  ];

  return (
    <motion.div
      ref={ref}
      className="py-32 border-t border-slate-800"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <Target size={24} className="text-emerald-400" />
          <span className="text-slate-400 text-sm font-mono">03</span>
        </div>
        <h2
          className="text-4xl font-bold mb-6"
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            letterSpacing: '-0.02em',
          }}
        >
          Measurable Business Impact
        </h2>
        <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
          We're obsessed with outcomes. Every solution is engineered to deliver quantifiable ROI through operational excellence, revenue acceleration, and sustainable competitive advantage.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {outcomes.map((outcome, index) => {
          const Icon = outcome.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
              className={`bg-gradient-to-br ${outcome.color} border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-all duration-300`}
            >
              <div className="mb-6">
                <Icon size={32} className="text-slate-300" />
              </div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
              >
                {outcome.title}
              </h3>
              <p className="text-slate-400">{outcome.description}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

function Section04() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="py-32 border-t border-slate-800"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Bot size={24} className="text-cyan-400" />
            <span className="text-slate-400 text-sm font-mono">04</span>
          </div>
          <h2
            className="text-4xl font-bold mb-6"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              letterSpacing: '-0.02em',
            }}
          >
            Always-On Intelligence
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            Deploy solutions that never sleep. Our AI-powered systems operate 24/7 with superhuman consistency, eliminating bottlenecks and scaling infinitely with your ambitions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-slate-900 rounded-2xl p-12 border border-slate-800 flex flex-col items-center justify-center"
        >
          <div className="relative w-40 h-40 mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl" />
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-32 h-32 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full flex items-center justify-center border border-cyan-500/50">
                <div className="text-center">
                  <p className="text-3xl font-bold text-cyan-300">24/7</p>
                  <p className="text-xs text-slate-400 mt-1">Always Active</p>
                </div>
              </div>
            </motion.div>
          </div>
          <p className="text-center text-slate-300">
            Continuous operations with zero downtime and infinite scalability
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className="mt-32 pt-12 border-t border-slate-800"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2
            className="text-4xl font-bold mb-3"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              letterSpacing: '-0.02em',
            }}
          >
            Begin your transformation journey
          </h2>
          <p className="text-slate-400 text-lg">
            Discover how our solutions unlock endless possibilities for your business
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
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
            className="px-8 py-3 bg-white text-slate-950 font-semibold rounded-lg hover:bg-slate-100 transition-all duration-300 inline-flex items-center gap-2 whitespace-nowrap"
          >
            Get in Touch <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
