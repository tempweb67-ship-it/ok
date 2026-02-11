import { PhoneCall, Clock, Target, MessageSquare, Building2, Stethoscope, Home, Headphones } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FeatureSection, HowItWorksSection, CTASection, BenefitsGrid } from './shared/SolutionPageComponents';
import SEO from './SEO';

export default function VoiceAgent() {
  const features = [
    {
      icon: Clock,
      title: 'Always-On Operations',
      description: 'No missed calls. No hold times. AI agents that answer instantly, every time, at any hour.',
    },
    {
      icon: Target,
      title: 'Intelligent Lead Orchestration',
      description: 'AI qualifies callers, gathers key info, and routes hot leads to the right person in seconds. No more wasted time on bad-fit prospects.',
    },
    {
      icon: MessageSquare,
      title: 'Human-Quality Dialogue',
      description: 'Conversations that sound natural, adapt to context, and handle objections. Callers cannot tell it is AI.',
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
        title="AI Voice Agents - 24/7 Phone Automation for Scheduling, Leads & Support | Wexel"
        description="AI voice agents that handle calls around the clock. Appointment scheduling, lead qualification, and customer support on autopilot. Sounds human. Scales infinitely."
        keywords="AI voice agents, voice automation, AI phone agents, automated phone calls, AI call center, AI receptionist, voice assistant, 24/7 phone automation"
        canonical="https://wexel.com/solutions/voice"
        articleData={{
          headline: "AI Voice Agents - 24/7 Phone Automation That Sounds Human",
          datePublished: "2024-01-01T00:00:00Z",
          dateModified: new Date().toISOString(),
          author: "Wexel"
        }}
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "AI Voice Solutions",
          "provider": {
            "@type": "Organization",
            "name": "Wexel"
          },
          "description": "AI voice agents for appointment scheduling, lead qualification, and customer support. Always on, always consistent.",
          "serviceType": "Voice Automation",
          "areaServed": "Worldwide",
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock"
          }
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
              <PhoneCall size={18} className="text-blue-400 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm text-blue-400 uppercase tracking-wider">
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
              className="text-base sm:text-xl text-white/70 max-w-3xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 0.7 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              AI voice agents that pick up the phone, qualify leads, book appointments, and handle support. They sound human, work 24/7, and never miss a call. Your team handles the deals that close. The AI handles everything else.
            </motion.p>
          </motion.div>

          <BenefitsGrid benefits={benefits} />

          <FeatureSection features={features} />

          <UseCasesSection useCases={useCases} />

          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-6 sm:p-12 mb-10 sm:mb-20">
            <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
              <div className="p-4 backdrop-blur-md bg-white/5 rounded-lg hidden sm:block">
                <PhoneCall size={40} className="text-blue-400" />
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
                      <Headphones size={20} className="flex-shrink-0" />
                      Call Centers
                    </h3>
                    <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                      Handle high call volumes without adding headcount. Zero wait times. Consistent quality on every call.
                    </p>
                  </div>
                  <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-5 sm:backdrop-blur-none sm:bg-transparent sm:border-0 sm:p-0">
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-2 flex items-center gap-2">
                      <Stethoscope size={20} className="flex-shrink-0" />
                      Healthcare Providers
                    </h3>
                    <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                      Automate scheduling, reminders, and patient inquiries. HIPAA-compliant from the start.
                    </p>
                  </div>
                  <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-5 sm:backdrop-blur-none sm:bg-transparent sm:border-0 sm:p-0">
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-2 flex items-center gap-2">
                      <Home size={20} className="flex-shrink-0" />
                      Real Estate Agencies
                    </h3>
                    <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                      Qualify leads, schedule viewings, and follow up with prospects at any hour.
                    </p>
                  </div>
                  <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-5 sm:backdrop-blur-none sm:bg-transparent sm:border-0 sm:p-0">
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-2 flex items-center gap-2">
                      <Building2 size={20} className="flex-shrink-0" />
                      Any Business With Phones
                    </h3>
                    <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                      Bookings, FAQs, and 24/7 support handled automatically. No extra staff required.
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
                description: 'We configure your voice agent with your brand voice, common scenarios, and business rules. Tailored to how your team actually works.'
              },
              {
                title: 'Integration & Testing',
                description: 'Connect to your phone system and CRM. Extensive testing to make sure conversations sound right and data flows correctly.'
              },
              {
                title: 'Deployment & Optimization',
                description: 'Go live and improve continuously. Real conversation data feeds back into the system to sharpen performance over time.'
              }
            ]}
          />

          <CTASection
            title="Ready to stop missing calls?"
            description="Deploy voice AI that handles your phones 24/7 and never drops a lead"
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
            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-8 hover:border-blue-500/30 hover:bg-blue-500/10 transition-all duration-300"
          >
            <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4">{useCase.title}</h3>
            <p className="text-white/60 leading-relaxed text-sm sm:text-base">
              {useCase.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
