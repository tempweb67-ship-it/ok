import { ArrowLeft, Mail, Target, Zap, Shield, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FeatureSection, HowItWorksSection, CTASection, BenefitsGrid } from './shared/SolutionPageComponents';

export default function Outreach() {
  const features = [
    {
      icon: Target,
      title: 'Precision Personalization',
      description: 'Transform every outreach touchpoint with AI that crafts individually tailored messages based on deep behavioral insights, engagement patterns, and contextual intelligence.',
    },
    {
      icon: Shield,
      title: 'Guaranteed Deliverability',
      description: 'Ensure your message reaches decision-makers with advanced delivery optimization that bypasses filters and maximizes inbox placement rates consistently.',
    },
    {
      icon: Zap,
      title: 'Infinite Scale',
      description: 'Break capacity barriers with automation that sends thousands of authentically personalized emails—each one optimized to engage, persuade, and convert.',
    },
  ];

  const benefits = [
    {
      stat: '87%',
      label: 'Open Rate Increase',
    },
    {
      stat: '5x',
      label: 'More Conversions',
    },
    {
      stat: '95%',
      label: 'Inbox Delivery Rate',
    },
  ];

  const capabilities = [
    {
      title: 'Dynamic Content Generation',
      description: 'AI analyzes each prospect and generates custom content that speaks directly to their pain points, interests, and business context.',
    },
    {
      title: 'Smart Timing Optimization',
      description: 'Send emails at the optimal time for each recipient based on their engagement patterns and time zone.',
    },
    {
      title: 'A/B Testing at Scale',
      description: 'Automatically test subject lines, content variations, and CTAs to continuously improve performance.',
    },
    {
      title: 'Multi-Touch Sequences',
      description: 'Create sophisticated follow-up sequences that adapt based on recipient behavior and engagement.',
    },
    {
      title: 'CRM Integration',
      description: 'Seamlessly sync with your existing tools to leverage all available data for better personalization.',
    },
    {
      title: 'Real-Time Analytics',
      description: 'Track opens, clicks, replies, and conversions with detailed insights to refine your campaigns.',
    },
  ];

  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });

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
              <Mail size={20} className="text-white text-opacity-60" />
              <span className="text-sm text-white text-opacity-60 uppercase tracking-wider">
                Digital Marketing
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
              Marketing Automation Excellence
            </motion.h1>

            <motion.p
              className="text-xl text-white text-opacity-70 max-w-3xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 0.7 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Transform outreach from mass messaging to meaningful conversations at scale. Our AI-powered platform crafts hyper-personalized campaigns that break through noise, bypass filters, and convert prospects into customers. Each message feels handwritten, each touchpoint drives engagement, and every campaign delivers measurable transformation to your pipeline.
            </motion.p>
          </motion.div>

          <BenefitsGrid benefits={benefits} />

          <FeatureSection features={features} />

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
                <div
                  key={index}
                  className="border border-white border-opacity-10 rounded-lg p-8"
                >
                  <h3 className="text-2xl font-bold mb-4">{capability.title}</h3>
                  <p className="text-white text-opacity-60 leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-white border-opacity-10 rounded-lg p-6 sm:p-12 mb-20">
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

              {/* Desktop: Timeline layout */}
              <div className="hidden sm:block space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Data Enrichment</h3>
                    <p className="text-white text-opacity-60 leading-relaxed">
                      Our AI gathers and analyzes data about each prospect from multiple sources to
                      build comprehensive profiles.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Personalized Generation</h3>
                    <p className="text-white text-opacity-60 leading-relaxed">
                      Advanced language models craft unique email content for each recipient,
                      incorporating relevant details and context.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Optimized Delivery</h3>
                    <p className="text-white text-opacity-60 leading-relaxed">
                      Emails are sent at the optimal time using best practices to ensure maximum
                      deliverability and engagement.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center font-bold">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Continuous Optimization</h3>
                    <p className="text-white text-opacity-60 leading-relaxed">
                      Track performance metrics and continuously refine messaging based on what
                      resonates with your audience.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile: Compact cards */}
              <div className="sm:hidden grid gap-3">
                <div className="border border-white border-opacity-10 rounded-xl p-4 bg-white bg-opacity-[0.02]">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white bg-opacity-10 flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold mb-1">Data Enrichment</h3>
                      <p className="text-white text-opacity-60 text-sm leading-snug">
                        Our AI gathers and analyzes data about each prospect from multiple sources to
                        build comprehensive profiles.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border border-white border-opacity-10 rounded-xl p-4 bg-white bg-opacity-[0.02]">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white bg-opacity-10 flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold mb-1">Personalized Generation</h3>
                      <p className="text-white text-opacity-60 text-sm leading-snug">
                        Advanced language models craft unique email content for each recipient,
                        incorporating relevant details and context.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border border-white border-opacity-10 rounded-xl p-4 bg-white bg-opacity-[0.02]">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white bg-opacity-10 flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold mb-1">Optimized Delivery</h3>
                      <p className="text-white text-opacity-60 text-sm leading-snug">
                        Emails are sent at the optimal time using best practices to ensure maximum
                        deliverability and engagement.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border border-white border-opacity-10 rounded-xl p-4 bg-white bg-opacity-[0.02]">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white bg-opacity-10 flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold mb-1">Continuous Optimization</h3>
                      <p className="text-white text-opacity-60 text-sm leading-snug">
                        Track performance metrics and continuously refine messaging based on what
                        resonates with your audience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-white border-opacity-10 rounded-lg p-6 sm:p-12">
            <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
              <div className="p-4 bg-white bg-opacity-5 rounded-lg hidden sm:block">
                <Users size={40} className="text-white" />
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
                  <div className="border border-white border-opacity-10 rounded-xl p-5 sm:p-0 sm:border-0 bg-white bg-opacity-[0.02] sm:bg-transparent">
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-2 flex items-center gap-2">
                      <TrendingUp size={20} className="flex-shrink-0" />
                      Sales Teams
                    </h3>
                    <p className="text-white text-opacity-60 leading-relaxed text-sm sm:text-base">
                      Scale outbound prospecting while maintaining personal touch and high response
                      rates.
                    </p>
                  </div>
                  <div className="border border-white border-opacity-10 rounded-xl p-5 sm:p-0 sm:border-0 bg-white bg-opacity-[0.02] sm:bg-transparent">
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-2 flex items-center gap-2">
                      <Target size={20} className="flex-shrink-0" />
                      Marketing Teams
                    </h3>
                    <p className="text-white text-opacity-60 leading-relaxed text-sm sm:text-base">
                      Run sophisticated campaigns with personalized messaging at every touchpoint.
                    </p>
                  </div>
                  <div className="border border-white border-opacity-10 rounded-xl p-5 sm:p-0 sm:border-0 bg-white bg-opacity-[0.02] sm:bg-transparent">
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-2 flex items-center gap-2">
                      <Users size={20} className="flex-shrink-0" />
                      Recruiters
                    </h3>
                    <p className="text-white text-opacity-60 leading-relaxed text-sm sm:text-base">
                      Engage candidates with tailored messaging that highlights relevant
                      opportunities.
                    </p>
                  </div>
                  <div className="border border-white border-opacity-10 rounded-xl p-5 sm:p-0 sm:border-0 bg-white bg-opacity-[0.02] sm:bg-transparent">
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-2 flex items-center gap-2">
                      <Zap size={20} className="flex-shrink-0" />
                      Growth Teams
                    </h3>
                    <p className="text-white text-opacity-60 leading-relaxed text-sm sm:text-base">
                      Drive user acquisition and engagement with data-driven, personalized outreach.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
                  Ready to revolutionize your marketing?
                </h2>
                <p className="text-white text-opacity-60">
                  Discover how marketing transformation unlocks exponential growth possibilities
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
          </div>
        </div>
      </div>
    </div>
  );
}
