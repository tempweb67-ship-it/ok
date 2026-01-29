import { ArrowLeft, PhoneCall, Clock, Target, MessageSquare, Building2, Stethoscope, Home, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FeatureSection, HowItWorksSection, CTASection, BenefitsGrid } from './shared/SolutionPageComponents';
import SEO from './SEO';

export default function VoiceAgent() {
  const features = [
    {
      icon: Clock,
      title: 'Always-On Operations',
      description: 'Eliminate capacity constraints with AI agents that never sleep. Transform customer access into a competitive advantage with round-the-clock availability and instant response.',
    },
    {
      icon: Target,
      title: 'Intelligent Lead Orchestration',
      description: 'Maximize sales efficiency with AI-powered qualification that identifies high-value opportunities, gathers critical insights, and routes prospects with precision.',
    },
    {
      icon: MessageSquare,
      title: 'Human-Quality Dialogue',
      description: 'Deploy conversations that build trust and drive action. Advanced AI delivers contextual understanding, emotional intelligence, and adaptive responses that convert.',
    },
  ];

  const benefits = [
    {
      stat: '10x',
      label: 'More Calls Handled',
    },
    {
      stat: '85%',
      label: 'Customer Satisfaction Rate',
    },
    {
      stat: '50%',
      label: 'Reduction in Operational Costs',
    },
  ];

  const useCases = [
    {
      title: 'Appointment Scheduling',
      description: 'Automatically book appointments, send confirmations, and manage cancellations or rescheduling requests.',
    },
    {
      title: 'Lead Qualification',
      description: 'Screen incoming leads, gather essential information, and route qualified prospects to the right team members.',
    },
    {
      title: 'Customer Support',
      description: 'Handle common inquiries, troubleshoot issues, and escalate complex cases to human agents when needed.',
    },
    {
      title: 'Follow-up Calls',
      description: 'Conduct post-purchase check-ins, collect feedback, and nurture relationships at scale.',
    },
  ];

  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });

  return (
    <>
      <SEO
        title="AI Voice Solutions - Voice Automation & AI Voice Agents | Wexel"
        description="Transform customer interactions with AI voice agents that work 24/7. Deploy autonomous voice automation for appointment scheduling, lead qualification, and customer support. Scale conversations infinitely with human-quality AI voice technology."
        keywords="AI voice agents, voice automation, AI phone agents, conversational AI, voice AI, automated phone calls, AI call center, voice bots, speech AI, customer service automation, AI receptionist, voice assistant"
        canonical="https://wexel.com/solutions/voice"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "AI Voice Solutions",
          "provider": {
            "@type": "Organization",
            "name": "Wexel"
          },
          "description": "Autonomous voice agents that revolutionize customer interactions and deliver human-quality experiences 24/7",
          "serviceType": "Voice Automation",
          "areaServed": "Worldwide",
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock"
          }
        }}
      />
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
              className="inline-flex items-center gap-2 text-white hover:text-white transition-all duration-300 mb-4 sm:mb-8"
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
              className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500 bg-opacity-10 rounded-full border border-blue-500 border-opacity-20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <PhoneCall size={18} className="text-blue-300 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm text-blue-300 uppercase tracking-wider">
                Conversational AI
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
              AI Voice Solutions
            </motion.h1>

            <motion.p
              className="text-base sm:text-xl text-white text-opacity-70 max-w-3xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 0.7 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Revolutionize customer interactions with autonomous voice agents that deliver human-quality conversations at infinite scale. Transform how your business handles calls, qualifies leads, and serves customers—24/7, without limits. Every conversation drives efficiency, captures opportunities, and elevates experiences beyond what human teams can achieve alone.
            </motion.p>
          </motion.div>

          <BenefitsGrid benefits={benefits} />

          <FeatureSection features={features} />

          <UseCasesSection useCases={useCases} />

          <div className="border border-white border-opacity-10 rounded-lg p-6 sm:p-12 mb-10 sm:mb-20">
            <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
              <div className="p-4 bg-white bg-opacity-5 rounded-lg hidden sm:block">
                <PhoneCall size={40} className="text-white" />
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
                      <Headphones size={20} className="flex-shrink-0" />
                      Call Centers
                    </h3>
                    <p className="text-white text-opacity-60 leading-relaxed text-sm sm:text-base">
                      Handle high call volumes efficiently while maintaining quality customer interactions and reducing wait times.
                    </p>
                  </div>
                  <div className="border border-white border-opacity-10 rounded-xl p-5 sm:p-0 sm:border-0 bg-white bg-opacity-[0.02] sm:bg-transparent">
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-2 flex items-center gap-2">
                      <Stethoscope size={20} className="flex-shrink-0" />
                      Healthcare Providers
                    </h3>
                    <p className="text-white text-opacity-60 leading-relaxed text-sm sm:text-base">
                      Automate appointment scheduling, reminders, and patient inquiries while maintaining HIPAA compliance.
                    </p>
                  </div>
                  <div className="border border-white border-opacity-10 rounded-xl p-5 sm:p-0 sm:border-0 bg-white bg-opacity-[0.02] sm:bg-transparent">
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-2 flex items-center gap-2">
                      <Home size={20} className="flex-shrink-0" />
                      Real Estate Agencies
                    </h3>
                    <p className="text-white text-opacity-60 leading-relaxed text-sm sm:text-base">
                      Qualify leads, schedule property viewings, and follow up with prospects around the clock.
                    </p>
                  </div>
                  <div className="border border-white border-opacity-10 rounded-xl p-5 sm:p-0 sm:border-0 bg-white bg-opacity-[0.02] sm:bg-transparent">
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-2 flex items-center gap-2">
                      <Building2 size={20} className="flex-shrink-0" />
                      Service Businesses
                    </h3>
                    <p className="text-white text-opacity-60 leading-relaxed text-sm sm:text-base">
                      Manage bookings, answer common questions, and provide 24/7 customer support without additional staffing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <HowItWorksSection
            steps={[
              {
                title: 'Voice Agent Setup',
                description: 'We configure your voice agent with your brand voice, common scenarios, and business logic tailored to your specific needs.'
              },
              {
                title: 'Integration & Testing',
                description: 'Connect to your phone system and CRM, then run extensive testing to ensure natural conversations and accurate information handling.'
              },
              {
                title: 'Deployment & Optimization',
                description: 'Launch your voice agent and continuously improve performance based on real conversation data and feedback.'
              }
            ]}
          />

          <CTASection
            title="Ready to scale conversations infinitely?"
            description="Transform customer engagement with voice AI that unlocks endless possibilities"
          />
        </div>
      </div>
    </div>
    </>
  );
}

interface UseCase {
  title: string;
  description: string;
}

function UseCasesSection({ useCases }: { useCases: UseCase[] }) {
  return (
    <div className="mb-10 sm:mb-20">
      <h2
        className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-12"
        style={{
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          letterSpacing: '-0.03em',
        }}
      >
        Use Cases
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {useCases.map((useCase, index) => (
          <div
            key={index}
            className="border border-white border-opacity-10 rounded-2xl p-5 sm:p-8 hover:border-opacity-30 hover:bg-white hover:bg-opacity-[0.02] transition-all duration-300"
          >
            <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4">{useCase.title}</h3>
            <p className="text-white text-opacity-60 leading-relaxed text-sm sm:text-base">
              {useCase.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
