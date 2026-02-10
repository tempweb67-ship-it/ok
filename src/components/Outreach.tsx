import { Mail, Target, Zap, Shield, TrendingUp, Users } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FeatureSection, BenefitsGrid } from './shared/SolutionPageComponents';
import SEO from './SEO';

export default function Outreach() {
  const features = [
    {
      icon: Target,
      title: 'Precision Personalization',
      description: 'Every email is written for one person. AI uses behavioral data, engagement history, and context to craft messages that feel personal because they are.',
    },
    {
      icon: Shield,
      title: 'Guaranteed Deliverability',
      description: 'Advanced delivery optimization that gets your emails into primary inboxes, not spam folders. 95% inbox placement.',
    },
    {
      icon: Zap,
      title: 'Infinite Scale',
      description: 'Send thousands of unique, personalized emails per day. No templates. No limits. Each one optimized to get a reply.',
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
    <>
      <SEO
        title="Mass Outreach Automation - AI Personalized Email at Scale | Wexel"
        description="Send thousands of individually personalized emails that land in inboxes, not spam. AI writes the copy, optimizes send times, and tracks every open and reply."
        keywords="mass outreach automation, AI email marketing, cold email automation, personalized email at scale, sales outreach automation, email deliverability"
        canonical="https://wexel.com/solutions/outreach"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Mass Outreach Automation",
          "provider": {
            "@type": "Organization",
            "name": "Wexel"
          },
          "description": "AI-powered mass outreach with individually personalized emails, optimized timing, and high deliverability",
          "serviceType": "Email Marketing Automation",
          "areaServed": "Worldwide"
        }}
      />
      <div className="text-white" style={{ minHeight: '100dvh' }}>
      <div className="pt-20 sm:pt-32 pb-12 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
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
              <Mail size={18} className="text-blue-400 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm text-blue-400 uppercase tracking-wider">
                Digital Marketing
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
              Mass Outreach Automation
            </motion.h1>

            <motion.p
              className="text-base sm:text-xl text-white/70 max-w-3xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 0.7 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              AI writes a unique email for every prospect. Not mail merge. Actual personalization based on who they are and what they care about. Thousands go out. They land in inboxes, not spam. And you track every open, click, and reply.
            </motion.p>
          </motion.div>

          <BenefitsGrid benefits={benefits} />

          <FeatureSection features={features} />

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
                <div
                  key={index}
                  className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-5 sm:p-8"
                >
                  <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4">{capability.title}</h3>
                  <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                    {capability.description}
                  </p>
                </div>
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

              {/* Desktop: Timeline layout */}
              <div className="hidden sm:block space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full backdrop-blur-md bg-white/5 flex items-center justify-center font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Data Enrichment</h3>
                    <p className="text-white/60 leading-relaxed">
                      Our AI gathers and analyzes data about each prospect from multiple sources to
                      build comprehensive profiles.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full backdrop-blur-md bg-white/5 flex items-center justify-center font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Personalized Generation</h3>
                    <p className="text-white/60 leading-relaxed">
                      Advanced language models craft unique email content for each recipient,
                      incorporating relevant details and context.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full backdrop-blur-md bg-white/5 flex items-center justify-center font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Optimized Delivery</h3>
                    <p className="text-white/60 leading-relaxed">
                      Emails are sent at the optimal time using best practices to ensure maximum
                      deliverability and engagement.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full backdrop-blur-md bg-white/5 flex items-center justify-center font-bold">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Continuous Optimization</h3>
                    <p className="text-white/60 leading-relaxed">
                      Track performance metrics and continuously refine messaging based on what
                      resonates with your audience.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile: Compact cards */}
              <div className="sm:hidden grid gap-3">
                <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full backdrop-blur-md bg-white/5 flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold mb-1">Data Enrichment</h3>
                      <p className="text-white/60 text-sm leading-snug">
                        Our AI gathers and analyzes data about each prospect from multiple sources to
                        build comprehensive profiles.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full backdrop-blur-md bg-white/5 flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold mb-1">Personalized Generation</h3>
                      <p className="text-white/60 text-sm leading-snug">
                        Advanced language models craft unique email content for each recipient,
                        incorporating relevant details and context.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full backdrop-blur-md bg-white/5 flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold mb-1">Optimized Delivery</h3>
                      <p className="text-white/60 text-sm leading-snug">
                        Emails are sent at the optimal time using best practices to ensure maximum
                        deliverability and engagement.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full backdrop-blur-md bg-white/5 flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold mb-1">Continuous Optimization</h3>
                      <p className="text-white/60 text-sm leading-snug">
                        Track performance metrics and continuously refine messaging based on what
                        resonates with your audience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-6 sm:p-12">
            <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
              <div className="p-4 backdrop-blur-md bg-white/5 rounded-lg hidden sm:block">
                <Users size={40} className="text-blue-400" />
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
                  <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-5 sm:backdrop-blur-none sm:bg-transparent sm:border-0 sm:p-0">
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-2 flex items-center gap-2">
                      <TrendingUp size={20} className="flex-shrink-0" />
                      Sales Teams
                    </h3>
                    <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                      Scale outbound prospecting while maintaining personal touch and high response
                      rates.
                    </p>
                  </div>
                  <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-5 sm:backdrop-blur-none sm:bg-transparent sm:border-0 sm:p-0">
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-2 flex items-center gap-2">
                      <Target size={20} className="flex-shrink-0" />
                      Marketing Teams
                    </h3>
                    <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                      Run sophisticated campaigns with personalized messaging at every touchpoint.
                    </p>
                  </div>
                  <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-5 sm:backdrop-blur-none sm:bg-transparent sm:border-0 sm:p-0">
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-2 flex items-center gap-2">
                      <Users size={20} className="flex-shrink-0" />
                      Recruiters
                    </h3>
                    <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                      Engage candidates with tailored messaging that highlights relevant
                      opportunities.
                    </p>
                  </div>
                  <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-5 sm:backdrop-blur-none sm:bg-transparent sm:border-0 sm:p-0">
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-2 flex items-center gap-2">
                      <Zap size={20} className="flex-shrink-0" />
                      Growth Teams
                    </h3>
                    <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                      Drive user acquisition and engagement with data-driven, personalized outreach.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-12 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h2
                  className="text-3xl font-bold mb-2"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Tired of emails going to spam?
                </h2>
                <p className="text-white/60">
                  AI-written, individually personalized emails that actually get replies
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
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
