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
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 text-white text-opacity-60 hover:text-opacity-100 transition-all duration-300 mb-8"
            >
              <ArrowLeft size={20} />
              Back to Solutions
            </Link>
          </motion.div>

          <motion.div
            ref={heroRef}
            className="mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-white bg-opacity-5 rounded-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <BarChart3 size={20} className="text-white text-opacity-60" />
              <span className="text-sm text-white text-opacity-60 uppercase tracking-wider">
                Customer Experience
              </span>
            </motion.div>

            <motion.h1
              className="text-white leading-[0.85] mb-6"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontWeight: 700,
                letterSpacing: '-0.04em',
                fontSize: 'clamp(3rem, 10vw, 6rem)',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              Intelligent CRM Transformation
            </motion.h1>

            <motion.p
              className="text-xl text-white text-opacity-70 max-w-3xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 0.7 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Transform customer relationships from transactional to strategic with our intelligent CRM platform. Powered by advanced AI, we orchestrate seamless workflows, unlock predictive insights, and drive measurable revenue growth. Every interaction becomes an opportunity for deeper engagement and accelerated business outcomes.
            </motion.p>
          </motion.div>

          <motion.div
            ref={benefitsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="relative border border-white border-opacity-10 rounded-2xl p-8 text-center overflow-hidden"
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
                    className="text-5xl font-bold mb-2"
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
                  <p className="text-white text-opacity-60">{benefit.label}</p>
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
            title="Ready to transform customer relationships?"
            description="Discover how our CRM transformation unlocks endless growth possibilities"
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
      className="mb-20"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-4xl font-bold mb-12"
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
      className="relative border border-white border-opacity-10 rounded-2xl p-8 overflow-hidden group"
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
          className="p-3 bg-white bg-opacity-5 rounded-xl inline-flex mb-6"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          <Icon size={28} className="text-white" />
        </motion.div>

        <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
        <p className="text-white text-opacity-60 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

function HowItWorksSection({ steps }: { steps: any[] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="relative border border-white border-opacity-10 rounded-3xl p-12 mb-20 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-white opacity-[0.02] rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.02, 0.03, 0.02] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
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
            <motion.div
              key={index}
              className="flex gap-6"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="flex-shrink-0">
                <motion.div
                  className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center font-bold"
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                >
                  {index + 1}
                </motion.div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-white text-opacity-60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function CTASection({ title, description }: { title: string; description: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className="mt-20 pt-12 border-t border-white border-opacity-10"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
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
            className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white hover:bg-opacity-90 transition-all duration-300 inline-flex items-center gap-2 whitespace-nowrap"
          >
            Get Started
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
