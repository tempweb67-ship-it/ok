import { ArrowLeft, Share2, Calendar, TrendingUp, Target, Zap, BarChart3, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Social() {
  const features = [
    {
      icon: Calendar,
      title: 'Strategic Timing Intelligence',
      description: 'Maximize reach and engagement with AI that identifies optimal posting windows, analyzes audience behavior patterns, and automatically schedules content for peak performance across every platform.',
    },
    {
      icon: Target,
      title: 'Performance-Driven Content',
      description: 'Transform content strategy with predictive intelligence that recommends formats, messaging, and tactics proven to drive engagement, conversions, and audience growth for your brand.',
    },
    {
      icon: BarChart3,
      title: 'Strategic Analytics Platform',
      description: 'Make data-driven decisions with comprehensive performance tracking, predictive insights, and actionable intelligence that connects social engagement directly to business outcomes.',
    },
  ];

  const benefits = [
    {
      stat: '10x',
      label: 'Time Saved',
    },
    {
      stat: '67%',
      label: 'More Engagement',
    },
    {
      stat: '45%',
      label: 'Growth Increase',
    },
  ];

  const capabilities = [
    {
      title: 'Multi-Platform Publishing',
      description: 'Schedule and publish content across all major social platforms from a single dashboard with platform-specific optimizations.',
    },
    {
      title: 'Content Calendar Management',
      description: 'Visualize your entire content strategy with drag-and-drop scheduling, bulk uploads, and automated posting queues.',
    },
    {
      title: 'Hashtag Intelligence',
      description: 'Discover trending hashtags, analyze performance, and get AI-powered suggestions to maximize content discoverability.',
    },
    {
      title: 'Audience Insights',
      description: 'Deep dive into audience demographics, behaviors, and preferences to create targeted content that resonates.',
    },
    {
      title: 'Engagement Automation',
      description: 'Automate responses to comments and messages with smart replies while maintaining authentic brand voice.',
    },
    {
      title: 'Campaign Tracking',
      description: 'Monitor campaign performance in real-time with custom goals, attribution tracking, and ROI measurement.',
    },
  ];

  const howItWorksSteps = [
    {
      title: 'Connect Your Accounts',
      description: 'Seamlessly integrate all your social media accounts in minutes. Our secure OAuth connection ensures your data stays protected.',
    },
    {
      title: 'Create & Schedule Content',
      description: 'Use our AI-powered editor to craft engaging posts. Our system analyzes your content and suggests optimal posting times.',
    },
    {
      title: 'AI Optimization',
      description: 'Machine learning models continuously analyze performance data to refine your content strategy and posting schedule.',
    },
    {
      title: 'Track & Improve',
      description: 'Monitor real-time analytics and receive actionable insights to continuously improve your social media presence.',
    },
  ];

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 text-white text-opacity-60 hover:text-opacity-100 transition-all duration-300 mb-8"
          >
            <ArrowLeft size={20} />
            Back to Solutions
          </Link>

          <div className="mb-16">
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-white bg-opacity-5 rounded-full">
              <Share2 size={20} className="text-white text-opacity-60" />
              <span className="text-sm text-white text-opacity-60 uppercase tracking-wider">
                Social Intelligence
              </span>
            </div>

            <h1
              className="text-white leading-[0.85] mb-6"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontWeight: 700,
                letterSpacing: '-0.04em',
                fontSize: 'clamp(3rem, 10vw, 6rem)',
              }}
            >
              Social Media Transformation
            </h1>

            <p className="text-xl text-white text-opacity-70 max-w-3xl leading-relaxed">
              Transform social presence from time-consuming to transformative with intelligent automation that amplifies your brand across every channel. Our AI-powered platform orchestrates content, optimizes engagement, and delivers analytics that turn followers into customers and posts into measurable business results—all while saving hours each week and unlocking unprecedented growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="border border-white border-opacity-10 rounded-lg p-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div
                  className="text-5xl font-bold mb-2"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    letterSpacing: '-0.03em',
                  }}
                >
                  {benefit.stat}
                </div>
                <p className="text-white text-opacity-60">{benefit.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="mb-20">
            <h2
              className="text-4xl font-bold mb-12"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                letterSpacing: '-0.03em',
              }}
            >
              Key Features
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="border border-white border-opacity-10 rounded-lg p-8 hover:border-opacity-30 hover:bg-white hover:bg-opacity-5 transition-all duration-500"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="p-3 bg-white bg-opacity-5 rounded-lg inline-flex mb-6">
                      <Icon size={28} className="text-white" />
                    </div>

                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-white text-opacity-60 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="mb-20">
            <h2
              className="text-4xl font-bold mb-12"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                letterSpacing: '-0.03em',
              }}
            >
              Capabilities
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  className="border border-white border-opacity-10 rounded-lg p-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <h3 className="text-2xl font-bold mb-4">{capability.title}</h3>
                  <p className="text-white text-opacity-60 leading-relaxed">
                    {capability.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="border border-white border-opacity-10 rounded-lg p-12 mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-3xl">
              <h2
                className="text-4xl font-bold mb-6"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  letterSpacing: '-0.03em',
                }}
              >
                How It Works
              </h2>

              <div className="space-y-8">
                {howItWorksSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            <motion.div
              className="border border-white border-opacity-10 rounded-lg p-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="p-4 bg-white bg-opacity-5 rounded-lg inline-flex mb-6">
                <TrendingUp size={32} className="text-white" />
              </div>
              <h2
                className="text-3xl font-bold mb-4"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  letterSpacing: '-0.02em',
                }}
              >
                Smart Content Strategy
              </h2>
              <p className="text-white text-opacity-60 leading-relaxed mb-4">
                Our AI analyzes your best-performing content and audience behavior to recommend
                the perfect content mix for your brand.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Zap size={20} className="text-white text-opacity-40 flex-shrink-0 mt-1" />
                  <span className="text-white text-opacity-60">
                    Optimal posting frequency recommendations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap size={20} className="text-white text-opacity-40 flex-shrink-0 mt-1" />
                  <span className="text-white text-opacity-60">
                    Content format performance analysis
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap size={20} className="text-white text-opacity-40 flex-shrink-0 mt-1" />
                  <span className="text-white text-opacity-60">
                    Audience engagement pattern detection
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap size={20} className="text-white text-opacity-40 flex-shrink-0 mt-1" />
                  <span className="text-white text-opacity-60">Competitor benchmarking</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="border border-white border-opacity-10 rounded-lg p-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="p-4 bg-white bg-opacity-5 rounded-lg inline-flex mb-6">
                <Users size={32} className="text-white" />
              </div>
              <h2
                className="text-3xl font-bold mb-4"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  letterSpacing: '-0.02em',
                }}
              >
                Engagement Amplification
              </h2>
              <p className="text-white text-opacity-60 leading-relaxed mb-4">
                Maximize your social reach with automated engagement tools that maintain
                authentic interactions at scale.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Zap size={20} className="text-white text-opacity-40 flex-shrink-0 mt-1" />
                  <span className="text-white text-opacity-60">
                    Smart comment responses
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap size={20} className="text-white text-opacity-40 flex-shrink-0 mt-1" />
                  <span className="text-white text-opacity-60">
                    Automated DM management
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap size={20} className="text-white text-opacity-40 flex-shrink-0 mt-1" />
                  <span className="text-white text-opacity-60">Community moderation tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap size={20} className="text-white text-opacity-40 flex-shrink-0 mt-1" />
                  <span className="text-white text-opacity-60">Influencer collaboration tracking</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="border border-white border-opacity-10 rounded-lg p-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-start gap-8">
              <div className="p-4 bg-white bg-opacity-5 rounded-lg">
                <Share2 size={40} className="text-white" />
              </div>
              <div className="flex-1">
                <h2
                  className="text-3xl font-bold mb-4"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Perfect For
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      <Target size={20} />
                      Brands & Businesses
                    </h3>
                    <p className="text-white text-opacity-60 leading-relaxed">
                      Build consistent brand presence and engage your audience across multiple
                      platforms without the manual overhead.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      <TrendingUp size={20} />
                      Marketing Agencies
                    </h3>
                    <p className="text-white text-opacity-60 leading-relaxed">
                      Manage multiple client accounts efficiently with powerful collaboration
                      and reporting tools.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      <Users size={20} />
                      Content Creators
                    </h3>
                    <p className="text-white text-opacity-60 leading-relaxed">
                      Focus on creating great content while automation handles scheduling
                      and engagement optimization.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      <BarChart3 size={20} />
                      E-commerce Stores
                    </h3>
                    <p className="text-white text-opacity-60 leading-relaxed">
                      Drive sales with automated product promotions and targeted social
                      campaigns tied to inventory data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mt-20 pt-12 border-t border-white border-opacity-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h2
                  className="text-3xl font-bold mb-2"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Ready to amplify your brand presence?
                </h2>
                <p className="text-white text-opacity-60">
                  Transform social media into a growth engine with endless possibilities
                </p>
              </div>
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
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
