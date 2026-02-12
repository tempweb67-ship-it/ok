import { BarChart3, Brain, Zap, TrendingUp, Users, Briefcase } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FeatureSection, HowItWorksSection, CTASection, BenefitsGrid } from './shared/SolutionPageComponents';
import SEO from './SEO';

export default function AICRM() {
  const features = [
    {
      icon: Brain,
      title: 'Predictive Intelligence',
      description: 'AI forecasting that flags opportunities and risks before they hit your pipeline. Stop reacting. Start anticipating.',
    },
    {
      icon: Zap,
      title: 'Intelligent Process Automation',
      description: 'Workflows that run themselves. Auto-assign leads, trigger sequences, update records. Your team works deals, not spreadsheets.',
    },
    {
      icon: TrendingUp,
      title: 'Strategic Analytics',
      description: 'Real-time dashboards that show what is working, what is not, and where to focus next. Data you act on, not just look at.',
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

  const useCases = [
    {
      title: 'Lead Scoring & Prioritization',
      description: 'Score and rank leads by engagement, behavior, and fit. Your team focuses on the deals most likely to close.',
    },
    {
      title: 'Automated Follow-ups',
      description: 'Personalized follow-ups across email, SMS, and social. Sent on time, every time, without anyone touching a button.',
    },
    {
      title: 'Customer Segmentation',
      description: 'Segment customers by behavior, preferences, and lifecycle stage. Targeted campaigns that land because they are relevant.',
    },
    {
      title: 'Sales Pipeline Management',
      description: 'See your full pipeline with AI-flagged bottlenecks. Know which deals need attention and which will close on their own.',
    },
  ];

  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });

  return (
    <>
      <SEO
        title="AI CRM - Predictive Analytics, Auto Workflows & Lead Scoring | Wexel"
        description="AI-powered CRM that scores leads, automates follow-ups, and segments customers without manual work. Built for teams that want pipeline visibility and faster closes."
        keywords="AI CRM, CRM automation, predictive CRM, AI lead scoring, automated follow-ups, customer segmentation, sales pipeline AI"
        canonical="https://wexel.com/solutions/aicrm"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Intelligent AI CRM",
          "provider": {
            "@type": "Organization",
            "name": "Wexel"
          },
          "description": "AI CRM with lead scoring, automated follow-ups, and predictive analytics for faster sales cycles",
          "serviceType": "CRM Automation",
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
              <BarChart3 size={18} className="text-blue-400 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm text-blue-400 uppercase tracking-wider">
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
              className="text-base sm:text-xl text-white/70 max-w-3xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 0.7 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              AI-powered CRM that drives engagement, scores leads, and automates follow-ups across every channel, identifying exactly where deals stall. Faster response times. A pipeline you can actually trust.
            </motion.p>
          </motion.div>

          <BenefitsGrid benefits={benefits} />

          <FeatureSection features={features} />

          <UseCasesSection useCases={useCases} />

          <PerfectForSection />

          <HowItWorksSection
            steps={[
              {
                title: 'Data Integration',
                description: 'Connect your existing tools. We pull customer data from every touchpoint into one unified view.'
              },
              {
                title: 'AI Training',
                description: 'AI learns from your historical data. Patterns get identified. Predictive models get built for your specific business.'
              },
              {
                title: 'Continuous Optimization',
                description: 'The system gets smarter with every interaction. More accurate scoring, better timing, tighter segmentation over time.'
              }
            ]}
          />

          <CTASection
            title="Ready to stop losing deals to slow follow-ups?"
            description="See how AI CRM gives your team pipeline clarity and automated workflows that close faster"
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

function PerfectForSection() {
  return (
    <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-6 sm:p-12 mb-10 sm:mb-20 hover:border-blue-500/30 hover:bg-blue-500/10 transition-all duration-300">
      <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
        <div className="p-4 bg-blue-500/20 rounded-lg hidden sm:block">
          <BarChart3 size={40} className="text-blue-400" />
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
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-5 hover:border-blue-500/30 hover:bg-blue-500/10 transition-all duration-300 sm:backdrop-blur-none sm:bg-transparent sm:border-0 sm:p-0 sm:hover:border-0 sm:hover:bg-transparent">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-2 flex items-center gap-2">
                <Users size={20} className="flex-shrink-0 text-blue-400" />
                Sales Teams
              </h3>
              <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                Track every interaction, automate reminders, and nurture relationships without dropping the ball.
              </p>
            </div>
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-5 hover:border-blue-500/30 hover:bg-blue-500/10 transition-all duration-300 sm:backdrop-blur-none sm:bg-transparent sm:border-0 sm:p-0 sm:hover:border-0 sm:hover:bg-transparent">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-2 flex items-center gap-2">
                <Briefcase size={20} className="flex-shrink-0 text-blue-400" />
                Anyone With Online Presence
              </h3>
              <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                Solopreneurs, creators, consultants. Manage leads and customers with the same AI tools enterprise teams use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
