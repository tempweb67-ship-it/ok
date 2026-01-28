import { ArrowRight, Sparkles, Zap, Target, Bot, Check, X } from 'lucide-react';
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
    },
    {
      id: 2,
      title: 'Rapid Deployment & Scale',
      description: 'Traditional consultants take months. Our AI-powered approach delivers enterprise transformation in weeks, enabling you to capitalize on opportunities faster than competition.',
      icon: Zap,
    },
    {
      id: 3,
      title: 'Measurable Business Impact',
      description: 'We\'re obsessed with outcomes. Every solution is engineered to deliver quantifiable ROI through operational excellence, revenue acceleration, and sustainable competitive advantage.',
      icon: Target,
    },
    {
      id: 4,
      title: 'Always-On Intelligence',
      description: 'Deploy solutions that never sleep. Our AI-powered systems operate 24/7 with superhuman consistency, eliminating bottlenecks and scaling infinitely with your ambitions.',
      icon: Bot,
    },
  ];

  const headerRef = useRef(null);
  const ctaRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  return (
    <div className="bg-black min-h-screen text-white overflow-hidden">
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            ref={headerRef}
            className="mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h1
              className="text-white leading-[0.85] mb-4"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontWeight: 700,
                letterSpacing: '-0.04em',
                fontSize: 'clamp(3rem, 10vw, 6rem)',
              }}
              initial={{ opacity: 0, x: -30 }}
              animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              What's Different
            </motion.h1>
            <motion.div
              className="max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-lg text-white text-opacity-60 mt-3">
                Why leading organizations choose Wexel as their transformation partner →
              </p>
              <p className="text-base text-white text-opacity-60 mt-0.5">
                We're a digital transformation solution provider built for the AI era.
              </p>
            </motion.div>
          </motion.div>

          <div className="mb-20">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 40 }}
              animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2
                className="text-2xl sm:text-3xl font-bold mb-8"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  letterSpacing: '-0.02em',
                }}
              >
                How We Compare
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  className="relative p-6 rounded-xl border border-white border-opacity-10 bg-white bg-opacity-[0.02]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-white bg-opacity-5 rounded-lg">
                      <X size={20} className="text-white text-opacity-40" />
                    </div>
                    <h3 className="text-lg font-bold">Traditional Approach</h3>
                  </div>
                  <ul className="space-y-3 text-sm text-white text-opacity-60">
                    <li>• 6-12 month implementation cycles</li>
                    <li>• Legacy system patches and workarounds</li>
                    <li>• High ongoing maintenance costs</li>
                    <li>• Manual processes and bottlenecks</li>
                    <li>• Slow ROI realization</li>
                    <li>• Requires large specialist teams</li>
                  </ul>
                </motion.div>

                <motion.div
                  className="relative p-6 rounded-xl border border-white border-opacity-20 bg-gradient-to-br from-white from-opacity-5 to-opacity-0"
                  initial={{ opacity: 0, x: 20 }}
                  animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-green-500 bg-opacity-10 rounded-lg">
                      <Check size={20} className="text-green-400" />
                    </div>
                    <h3 className="text-lg font-bold">Wexel AI-Powered</h3>
                  </div>
                  <ul className="space-y-3 text-sm text-white text-opacity-80">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">✓</span>
                      <span>2-4 week rapid deployment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">✓</span>
                      <span>Future-ready transformation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">✓</span>
                      <span>Autonomous operation 24/7</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">✓</span>
                      <span>Eliminates manual bottlenecks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">✓</span>
                      <span>Immediate measurable results</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">✓</span>
                      <span>Scales infinitely without added cost</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="space-y-6 max-w-4xl">
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
            className="mt-24 pt-16 border-t border-white border-opacity-10"
            initial={{ opacity: 0, y: 40 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              <motion.div
                className="absolute -top-10 -left-40 w-80 h-80 rounded-full opacity-[0.03] pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, white 0%, transparent 70%)',
                }}
                animate={{ y: [0, 30, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              />

              <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={ctaInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h2
                    className="text-3xl sm:text-4xl font-bold mb-3"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    Ready to Transform?
                  </h2>
                  <p className="text-white text-opacity-60 text-base sm:text-lg max-w-2xl">
                    Join leading organizations that are revolutionizing their operations with AI-powered autonomous solutions. Let's unlock your infinite possibilities.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={ctaInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/"
                    onClick={(e) => {
                      const contactBtn = document.querySelector('[data-contact-btn]');
                      if (contactBtn) {
                        (contactBtn as HTMLButtonElement).click();
                      }
                    }}
                    className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white hover:bg-opacity-90 transition-all duration-300 inline-flex items-center gap-2 whitespace-nowrap shadow-lg hover:shadow-xl"
                  >
                    Get in Touch <ArrowRight size={18} />
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
  const isInView = useInView(cardRef, { once: true, amount: 0.5 });

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
        className="relative py-8 px-6 rounded-xl border border-white border-opacity-10 transition-all duration-500 overflow-hidden group"
        whileHover={{
          borderColor: 'rgba(255, 255, 255, 0.2)',
          backgroundColor: 'rgba(255, 255, 255, 0.03)'
        }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-white via-white to-transparent opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 pointer-events-none"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, white 0%, transparent 70%)',
          }}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.5 }}
        />

        <div className="flex items-start gap-6 relative z-10">
          <motion.div
            className="flex-shrink-0 p-3 bg-gradient-to-br from-white from-opacity-10 to-opacity-5 rounded-xl group-hover:from-opacity-15 transition-all duration-300"
            whileHover={{ scale: 1.15, rotate: 8 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          >
            <Icon size={24} className="text-white" />
          </motion.div>

          <div className="flex-1">
            <div className="flex items-baseline gap-3 mb-2">
              <motion.span
                className="text-white text-opacity-25 font-mono text-xs font-semibold tracking-widest"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 0.25, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
              >
                {String(index + 1).padStart(2, '0')}
              </motion.span>
            </div>
            <motion.h3
              className="text-2xl font-bold leading-tight mb-3"
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

            <motion.p
              className="text-white text-opacity-60 leading-relaxed text-sm sm:text-base"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.6 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
            >
              {item.description}
            </motion.p>
          </div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white via-opacity-30 to-transparent opacity-0 group-hover:opacity-100"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </motion.div>
  );
}
