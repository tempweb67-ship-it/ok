import { ArrowLeft, BarChart3, Brain, Zap, TrendingUp, Users, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FeatureSection, HowItWorksSection, CTASection, BenefitsGrid } from './shared/SolutionPageComponents';
import SEO from './SEO';

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

  const useCases = [
    {
      title: 'Lead Scoring & Prioritization',
      description: 'Automatically score and rank leads based on engagement, behavior, and fit, ensuring your team focuses on high-value opportunities.',
    },
    {
      title: 'Automated Follow-ups',
      description: 'Send personalized, timely follow-up messages across email, SMS, and social channels without manual intervention.',
    },
    {
      title: 'Customer Segmentation',
      description: 'Dynamically segment customers based on behavior, preferences, and lifecycle stage for targeted campaigns.',
    },
    {
      title: 'Sales Pipeline Management',
      description: 'Visualize and optimize your sales pipeline with AI-driven insights that identify bottlenecks and accelerate deal closure.',
    },
  ];

  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });

  return (
    <>
      <SEO
        title="Intelligent AI CRM - AI-Powered Customer Relationship Management | Wexel"
        description="Revolutionize customer relationships with AI-powered CRM. Predictive analytics, autonomous workflows, and intelligent automation that drive revenue growth. Transform every customer touchpoint with strategic AI intelligence."
        keywords="AI CRM, intelligent CRM, AI customer management, CRM automation, predictive CRM, AI sales automation, customer intelligence, automated CRM, AI analytics, customer relationship automation"
        canonical="https://wexel.com/solutions/aicrm"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Intelligent AI CRM",
          "provider": {
            "@type": "Organization",
            "name": "Wexel"
          },
          "description": "AI-powered CRM with predictive analytics, autonomous workflows, and intelligent automation",
          "serviceType": "CRM Automation",
          "areaServed": "Worldwide"
        }}
      />
      <div className="text-black overflow-hidden" style={{ minHeight: '100dvh' }}>
      <div className="pt-20 sm:pt-32 pb-12 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 text-black hover:text-black/70 transition-all duration-300 mb-4 sm:mb-8"
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
              className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 backdrop-blur-md bg-blue-500/20 rounded-full border border-blue-500/30"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <BarChart3 size={18} className="text-blue-700 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm text-blue-700 uppercase tracking-wider">
                Customer Experience
              </span>
            </motion.div>

            <motion.h1
              className="text-black leading-[0.85] mb-4 sm:mb-6"
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
              className="text-base sm:text-xl text-black/70 max-w-3xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 0.7 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Revolutionize customer relationships with AI-powered CRM intelligence. Our platform transforms transactional interactions into strategic opportunities through predictive analytics, autonomous workflows, and intelligent automation. Every customer touchpoint becomes a moment for deeper engagement, smarter decisions, and accelerated revenue growth.
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
            title="Ready to revolutionize your customer relationships?"
            description="Discover how Intelligent AI CRM transforms your business with predictive insights and autonomous workflows"
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
            className="backdrop-blur-md bg-white/20 border border-black/10 rounded-2xl p-5 sm:p-8 hover:border-blue-500/30 hover:bg-blue-500/10 transition-all duration-300"
          >
            <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4 hover:text-blue-700 transition-colors">{useCase.title}</h3>
            <p className="text-black/60 leading-relaxed text-sm sm:text-base">
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
    <div className="backdrop-blur-md bg-white/20 border border-black/10 rounded-lg p-6 sm:p-12 mb-10 sm:mb-20 hover:border-blue-500/30 hover:bg-blue-500/10 transition-all duration-300">
      <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
        <div className="p-4 bg-blue-500/20 rounded-lg hidden sm:block">
          <BarChart3 size={40} className="text-blue-600" />
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
            <div className="backdrop-blur-md bg-white/20 border border-black/10 rounded-xl p-5 sm:p-0 sm:border-0 sm:bg-transparent hover:border-blue-500/30 hover:bg-blue-500/10 transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-2 flex items-center gap-2">
                <Users size={20} className="flex-shrink-0 text-blue-600" />
                Service Providers
              </h3>
              <p className="text-black/60 leading-relaxed text-sm sm:text-base">
                Track client interactions, automate appointment reminders, and nurture long-term relationships effortlessly.
              </p>
            </div>
            <div className="backdrop-blur-md bg-white/20 border border-black/10 rounded-xl p-5 sm:p-0 sm:border-0 sm:bg-transparent hover:border-blue-500/30 hover:bg-blue-500/10 transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-2 flex items-center gap-2">
                <Briefcase size={20} className="flex-shrink-0 text-blue-600" />
                Anyone With Online Presence
              </h3>
              <p className="text-black/60 leading-relaxed text-sm sm:text-base">
                Whether you're a solopreneur, content creator, or consultant, manage leads and customers with enterprise-grade AI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
