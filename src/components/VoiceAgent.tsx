import { ArrowLeft, PhoneCall, Clock, Target, MessageSquare, Building2, Stethoscope, Home, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FeatureSection, HowItWorksSection, CTASection, BenefitsGrid } from './shared/SolutionPageComponents';

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
              <PhoneCall size={20} className="text-white text-opacity-60" />
              <span className="text-sm text-white text-opacity-60 uppercase tracking-wider">
                Conversational AI
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
              AI Voice Solutions
            </motion.h1>

            <motion.p
              className="text-xl text-white text-opacity-70 max-w-3xl leading-relaxed"
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

          <div className="border border-white border-opacity-10 rounded-lg p-12 mb-20">
            <div className="flex items-start gap-8">
              <div className="p-4 bg-white bg-opacity-5 rounded-lg">
                <PhoneCall size={40} className="text-white" />
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
                      <Headphones size={20} />
                      Call Centers
                    </h3>
                    <p className="text-white text-opacity-60 leading-relaxed">
                      Handle high call volumes efficiently while maintaining quality customer interactions and reducing wait times.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      <Stethoscope size={20} />
                      Healthcare Providers
                    </h3>
                    <p className="text-white text-opacity-60 leading-relaxed">
                      Automate appointment scheduling, reminders, and patient inquiries while maintaining HIPAA compliance.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      <Home size={20} />
                      Real Estate Agencies
                    </h3>
                    <p className="text-white text-opacity-60 leading-relaxed">
                      Qualify leads, schedule property viewings, and follow up with prospects around the clock.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      <Building2 size={20} />
                      Service Businesses
                    </h3>
                    <p className="text-white text-opacity-60 leading-relaxed">
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
  );
}

function UseCasesSection({ useCases }: { useCases: any[] }) {
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
        Use Cases
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {useCases.map((useCase, index) => (
          <motion.div
            key={index}
            className="border border-white border-opacity-10 rounded-2xl p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ borderColor: 'rgba(255, 255, 255, 0.2)', backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
          >
            <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
            <p className="text-white text-opacity-60 leading-relaxed">
              {useCase.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
