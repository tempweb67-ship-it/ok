import { Share2, Calendar, TrendingUp, Target, Zap, BarChart3, Users } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SEO from './SEO';
import BackToTop from './BackToTop';

export default function Social() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });

  const features = [
    {
      icon: Calendar,
      title: 'Strategic Timing Intelligence',
      description: 'AI finds when your audience is most active and schedules content to hit those windows automatically. Every platform. Every time.',
    },
    {
      icon: Target,
      title: 'Performance-Driven Content',
      description: 'AI recommends what to post, how to format it, and what messaging converts. Based on your actual performance data, not guesswork.',
    },
    {
      icon: BarChart3,
      title: 'Strategic Analytics Platform',
      description: 'Track what is working and what is not across every channel. Engagement, reach, conversions. All connected to actual business outcomes.',
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

  return (
    <>
      <SEO
        title="AI Social Media Automation - Scheduling, Engagement & Analytics | Wexel"
        description="AI handles your social media. Multi-platform scheduling, automated engagement, and performance tracking. Consistent posting without the manual grind."
        keywords="social media automation, AI social media, social media scheduling, automated engagement, social media analytics, multi-platform posting"
        canonical="https://wexel.com/solutions/social"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Autonomous Social Media",
          "provider": {
            "@type": "Organization",
            "name": "Wexel"
          },
          "description": "AI social media automation with multi-platform scheduling, engagement, and performance analytics",
          "serviceType": "Social Media Automation",
          "areaServed": "Worldwide"
        }}
      />
      <div className="text-white" style={{ minHeight: '100dvh' }}>
      <div className="pt-20 sm:pt-32 pb-12 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <BackToTop />
          <motion.div
            ref={heroRef}
            className="mb-8 sm:mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 backdrop-blur-md bg-blue-500/20 rounded-full border border-blue-500/30"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Share2 size={18} className="text-blue-400 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm text-blue-400 uppercase tracking-wider">
                Social Intelligence
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
              Autonomous Social Media
            </motion.h1>

            <motion.p
              className="text-base sm:text-xl text-white/70 max-w-3xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 0.7 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              AI that schedules posts, responds to engagement, and tracks performance across every platform you use. One dashboard. No manual posting. Your social media stays active whether you are online or not.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-20">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-6 sm:p-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div
                  className="text-3xl sm:text-5xl font-bold mb-1 sm:mb-2"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    letterSpacing: '-0.03em',
                  }}
                >
                  {benefit.stat}
                </div>
                <p className="text-white/60 text-sm sm:text-base">{benefit.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="mb-10 sm:mb-20">
            <h2
              className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-12"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                letterSpacing: '-0.03em',
              }}
            >
              Key Features
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-5 sm:p-8 hover:border-blue-500/30 hover:bg-blue-500/10 transition-all duration-500"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="p-2.5 sm:p-3 backdrop-blur-md bg-white/5 rounded-lg inline-flex mb-3 sm:mb-6">
                      <Icon size={24} className="text-blue-400 sm:w-7 sm:h-7" />
                    </div>

                    <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4">{feature.title}</h3>
                    <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="mb-10 sm:mb-20">
            <h2
              className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-12"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                letterSpacing: '-0.03em',
              }}
            >
              Capabilities
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-5 sm:p-8"
                >
                  <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4">{capability.title}</h3>
                  <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                    {capability.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-6 sm:p-12 mb-10 sm:mb-20">
            <div className="max-w-3xl">
              <h2
                className="text-2xl sm:text-4xl font-bold mb-6"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  letterSpacing: '-0.03em',
                }}
              >
                How It Works
              </h2>

              <div className="hidden sm:block space-y-8">
                {howItWorksSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full backdrop-blur-md bg-white/5 flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-white/60 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="sm:hidden grid gap-3">
                {howItWorksSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full backdrop-blur-md bg-white/5 flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-bold mb-1">{step.title}</h3>
                        <p className="text-white/60 text-sm leading-snug">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            <motion.div
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="p-4 backdrop-blur-md bg-white/5 rounded-lg inline-flex mb-6">
                <TrendingUp size={32} className="text-blue-400" />
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
              <p className="text-white/60 leading-relaxed mb-4">
                Our AI analyzes your best-performing content and audience behavior to recommend
                the perfect content mix for your brand.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Zap size={20} className="text-white/40 flex-shrink-0 mt-1" />
                  <span className="text-white/60">
                    Optimal posting frequency recommendations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap size={20} className="text-white/40 flex-shrink-0 mt-1" />
                  <span className="text-white/60">
                    Content format performance analysis
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap size={20} className="text-white/40 flex-shrink-0 mt-1" />
                  <span className="text-white/60">
                    Audience engagement pattern detection
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap size={20} className="text-white/40 flex-shrink-0 mt-1" />
                  <span className="text-white/60">Competitor benchmarking</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="p-4 backdrop-blur-md bg-white/5 rounded-lg inline-flex mb-6">
                <Users size={32} className="text-blue-400" />
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
              <p className="text-white/60 leading-relaxed mb-4">
                Maximize your social reach with automated engagement tools that maintain
                authentic interactions at scale.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Zap size={20} className="text-white/40 flex-shrink-0 mt-1" />
                  <span className="text-white/60">
                    Smart comment responses
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap size={20} className="text-white/40 flex-shrink-0 mt-1" />
                  <span className="text-white/60">
                    Automated DM management
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap size={20} className="text-white/40 flex-shrink-0 mt-1" />
                  <span className="text-white/60">Community moderation tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap size={20} className="text-white/40 flex-shrink-0 mt-1" />
                  <span className="text-white/60">Influencer collaboration tracking</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-6 sm:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
              <div className="p-4 backdrop-blur-md bg-white/5 rounded-lg hidden sm:block">
                <Share2 size={40} className="text-blue-400" />
              </div>
              <div className="flex-1 w-full">
                <h2
                  className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-4"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Perfect For
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  <motion.div
                    className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-5 sm:backdrop-blur-none sm:bg-transparent sm:border-0 sm:p-0"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-2 flex items-center gap-2">
                      <Target size={20} className="flex-shrink-0" />
                      Brands & Businesses
                    </h3>
                    <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                      Build consistent brand presence and engage your audience across multiple
                      platforms without the manual overhead.
                    </p>
                  </motion.div>
                  <motion.div
                    className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-5 sm:backdrop-blur-none sm:bg-transparent sm:border-0 sm:p-0"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-2 flex items-center gap-2">
                      <TrendingUp size={20} className="flex-shrink-0" />
                      Marketing Agencies
                    </h3>
                    <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                      Manage multiple client accounts efficiently with powerful collaboration
                      and reporting tools.
                    </p>
                  </motion.div>
                  <motion.div
                    className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-5 sm:backdrop-blur-none sm:bg-transparent sm:border-0 sm:p-0"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-2 flex items-center gap-2">
                      <Users size={20} className="flex-shrink-0" />
                      Content Creators
                    </h3>
                    <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                      Focus on creating great content while automation handles scheduling
                      and engagement optimization.
                    </p>
                  </motion.div>
                  <motion.div
                    className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-5 sm:backdrop-blur-none sm:bg-transparent sm:border-0 sm:p-0"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-2 flex items-center gap-2">
                      <BarChart3 size={20} className="flex-shrink-0" />
                      E-commerce Stores
                    </h3>
                    <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                      Drive sales with automated product promotions and targeted social
                      campaigns tied to inventory data.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mt-20 pt-12 border-t border-white/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
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
                  Done posting manually?
                </h2>
                <p className="text-white/60">
                  Let AI handle scheduling, engagement, and analytics while you focus on your business
                </p>
              </div>
              <Link
                to="/"
                onClick={() => {
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
    </>
  );
}
