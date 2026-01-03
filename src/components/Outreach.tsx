import { ArrowLeft, Mail, Target, Zap, Shield, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FeatureSection, HowItWorksSection, CTASection, BenefitsGrid } from './shared/SolutionPageComponents';

export default function Outreach() {
  const features = [
    {
      icon: Target,
      title: 'Deep Personalization',
      description: 'Every email is uniquely crafted based on recipient data, behavior patterns, and engagement history for maximum relevance.',
    },
    {
      icon: Shield,
      title: 'Spam Filter Bypass',
      description: 'Advanced algorithms ensure your emails land in the inbox, not the spam folder, with high deliverability rates.',
    },
    {
      icon: Zap,
      title: 'Scale Without Limits',
      description: 'Send thousands of personalized emails that maintain the authentic feel of hand-written messages, all automated.',
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
                Marketing
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
              Hyper-Personalized Email
            </motion.h1>

            <motion.p
              className="text-xl text-white text-opacity-70 max-w-3xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 0.7 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Transform your email outreach with AI-powered personalization that creates thousands
              of unique, tailored messages. Bypass spam filters, increase engagement, and drive
              conversions with emails that read like they were written by hand—because they
              practically are.
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

          <div className="border border-white border-opacity-10 rounded-lg p-12 mb-20">
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
            </div>
          </div>

          <div className="border border-white border-opacity-10 rounded-lg p-12">
            <div className="flex items-start gap-8">
              <div className="p-4 bg-white bg-opacity-5 rounded-lg">
                <Users size={40} className="text-white" />
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
                      <TrendingUp size={20} />
                      Sales Teams
                    </h3>
                    <p className="text-white text-opacity-60 leading-relaxed">
                      Scale outbound prospecting while maintaining personal touch and high response
                      rates.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      <Target size={20} />
                      Marketing Teams
                    </h3>
                    <p className="text-white text-opacity-60 leading-relaxed">
                      Run sophisticated campaigns with personalized messaging at every touchpoint.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      <Users size={20} />
                      Recruiters
                    </h3>
                    <p className="text-white text-opacity-60 leading-relaxed">
                      Engage candidates with tailored messaging that highlights relevant
                      opportunities.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      <Zap size={20} />
                      Growth Teams
                    </h3>
                    <p className="text-white text-opacity-60 leading-relaxed">
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
                  Ready to transform your outreach?
                </h2>
                <p className="text-white text-opacity-60">
                  Let's discuss how personalized email can drive your growth
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
