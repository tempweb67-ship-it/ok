import { ArrowLeft, BarChart3, Brain, Zap, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AICRM() {
  const features = [
    {
      icon: Brain,
      title: 'Predictive Intelligence',
      description: 'Anticipate customer needs and opportunities with AI-driven forecasting that keeps you steps ahead of market dynamics and competitive threats.',
    },
    {
      icon: Zap,
      title: 'Intelligent Process Automation',
      description: 'Eliminate operational friction with self-optimizing workflows that adapt in real-time, scaling infinitely with your business ambitions.',
    },
    {
      icon: TrendingUp,
      title: 'Strategic Analytics',
      description: 'Convert complex data into business-changing insights with real-time analytics that drive decisions, optimize performance, and accelerate growth.',
    },
  ];

  const benefits = [
    {
      stat: '40%',
      label: 'Increase in Sales Productivity',
    },
    {
      stat: '60%',
      label: 'Reduction in Manual Data Entry',
    },
    {
      stat: '3x',
      label: 'Faster Lead Response Time',
    },
  ];

  const heroRef = useRef(null);
  const benefitsRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const benefitsInView = useInView(benefitsRef, { once: true, amount: 0.3 });

  return (
    <div className="bg-black min-h-screen text-white overflow-hidden">
      <div className="pt-20 sm:pt-32 pb-12 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 text-white text-opacity-60 hover:text-opacity-100 transition-all duration-300 mb-4 sm:mb-8"
            >
              <ArrowLeft size={20} />
              Back to Solutions
            </Link>
          </motion.div>

          <motion.div
            ref={heroRef}
            className="mb-8 sm:mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 bg-white bg-opacity-5 rounded-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <BarChart3 size={18} className="text-white text-opacity-60 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm text-white text-opacity-60 uppercase tracking-wider">
                Customer Experience
              </span>
            </motion.div>

            <motion.h1
              className="text-white leading-[0.85] mb-4 sm:mb-6"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontWeight: 700,
                letterSpacing: '-0.04em',
                fontSize: 'clamp(2.5rem, 10vw, 6rem)',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              Intelligent AI CRM
            </motion.h1>

            <motion.p
              className="text-base sm:text-xl text-white text-opacity-70 max-w-3xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 0.7 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Revolutionize customer relationships with AI-powered CRM intelligence. Our platform transforms transactional interactions into strategic opportunities through predictive analytics, autonomous workflows, and intelligent automation. Every customer touchpoint becomes a moment for deeper engagement, smarter decisions, and accelerated revenue growth.
            </motion.p>
          </motion.div>

          <motion.div
            ref={benefitsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-20"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="relative border border-white border-opacity-10 rounded-2xl p-6 sm:p-8 text-center overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ borderColor: 'rgba(255, 255, 255, 0.2)', backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="relative z-10">
                  <motion.div
                    className="text-3xl sm:text-5xl font-bold mb-1 sm:mb-2"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      letterSpacing: '-0.03em',
                    }}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={benefitsInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3, type: 'spring' }}
                  >
                    {benefit.stat}
                  </motion.div>
                  <p className="text-white text-opacity-60 text-sm sm:text-base">{benefit.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <FeatureSection features={features} />

          <HowItWorksSection
            steps={[
              {
                title: 'Data Integration',
                description: 'We seamlessly integrate with your existing systems, pulling in customer data from all touchpoints to create a unified view.'
              },
              {
                title: 'AI Training',
                description: 'Our AI learns from your historical data, identifying patterns and building predictive models tailored to your business.'
              },
              {
                title: 'Continuous Optimization',
                description: 'The system continuously learns and adapts, becoming more accurate and effective with every customer interaction.'
              }
            ]}
          />

          <CTASection
            title="Ready to revolutionize your customer relationships?"
            description="Discover how Intelligent AI CRM transforms your business with predictive insights and autonomous workflows"
          />
        </div>
      </div>
    </div>
  );
}

function FeatureSection({ features }: { features: any[] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="mb-10 sm:mb-20"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-12"
        style={{
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          letterSpacing: '-0.03em',
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        Key Features
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <FeatureCard key={index} feature={feature} Icon={Icon} index={index} />
          );
        })}
      </div>
    </motion.div>
  );
}

function FeatureCard({ feature, Icon, index }: any) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className="relative border border-white border-opacity-10 rounded-2xl p-5 sm:p-8 overflow-hidden group"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ borderColor: 'rgba(255, 255, 255, 0.2)', backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.3 }}
      />
      <div className="relative z-10">
        <motion.div
          className="p-2.5 sm:p-3 bg-white bg-opacity-5 rounded-xl inline-flex mb-3 sm:mb-6"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          <Icon size={24} className="text-white sm:w-7 sm:h-7" />
        </motion.div>

        <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4">{feature.title}</h3>
        <p className="text-white text-opacity-60 leading-relaxed text-sm sm:text-base">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

function HowItWorksSection({ steps }: { steps: any[] }) {
  return (
    <div className="relative border border-white border-opacity-10 rounded-3xl p-12 mb-20 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-[0.02] rounded-full blur-3xl" />
      <div className="max-w-3xl relative z-10">
        <h2
          className="text-4xl font-bold mb-8"
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            letterSpacing: '-0.03em',
          }}
        >
          How It Works
        </h2>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center font-bold hover:bg-opacity-15 transition-colors duration-300">
                  {index + 1}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-white text-opacity-60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CTASection({ title, description }: { title: string; description: string }) {
  return (
    <div className="mt-20 pt-12 border-t border-white border-opacity-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h2
            className="text-3xl font-bold mb-2"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </h2>
          <p className="text-white text-opacity-60">{description}</p>
        </div>
        <Link
          to="/"
          onClick={(e) => {
            const contactBtn = document.querySelector('[data-contact-btn]');
            if (contactBtn) {
              (contactBtn as HTMLButtonElement).click();
            }
          }}
          className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white hover:bg-opacity-90 transition-all duration-300 inline-flex items-center gap-2 whitespace-nowrap hover:scale-105 active:scale-95 transition-transform"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
