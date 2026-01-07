import { ArrowLeft, Globe, Zap, Smartphone, Rocket, TrendingUp, Users, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FeatureSection, HowItWorksSection, CTASection, BenefitsGrid } from './shared/SolutionPageComponents';

export default function Website() {
  const features = [
    {
      icon: Eye,
      title: 'Conversion-Focused Design',
      description: 'Every pixel engineered with purpose—transforming visitors into customers through strategic design, intuitive flows, and persuasive experiences that drive measurable results.',
    },
    {
      icon: Zap,
      title: 'Lightning Performance',
      description: 'Blazing-fast load times and optimized experiences that keep visitors engaged. Superior performance that boosts rankings, reduces bounce rates, and maximizes conversions.',
    },
    {
      icon: Smartphone,
      title: 'Responsive Excellence',
      description: 'Flawless experiences across every device and screen size. Adaptive design that maintains brand impact and usability whether viewed on mobile, tablet, or desktop.',
    },
  ];

  const benefits = [
    {
      stat: '3.5x',
      label: 'Higher Conversion Rates',
    },
    {
      stat: '85%',
      label: 'Faster Load Times',
    },
    {
      stat: '2x',
      label: 'More Engagement',
    },
  ];

  const capabilities = [
    {
      title: 'Strategic UX Design',
      description: 'User experiences crafted through research, testing, and behavioral science to guide visitors effortlessly toward conversion goals.',
    },
    {
      title: 'SEO Foundation',
      description: 'Built-in optimization for search engines with semantic HTML, performance best practices, and technical excellence that drives organic visibility.',
    },
    {
      title: 'Scalable Architecture',
      description: 'Future-proof technology stack that grows with your business, supports integrations, and enables rapid iteration without technical debt.',
    },
    {
      title: 'Content Management',
      description: 'Intuitive systems that empower your team to update content, launch campaigns, and manage your digital presence without developer dependency.',
    },
    {
      title: 'Analytics Integration',
      description: 'Deep insights into user behavior, conversion funnels, and performance metrics that inform optimization and drive continuous improvement.',
    },
    {
      title: 'Security & Compliance',
      description: 'Enterprise-grade security, data protection, and compliance with industry standards to protect your business and build customer trust.',
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
              <Globe size={20} className="text-white text-opacity-60" />
              <span className="text-sm text-white text-opacity-60 uppercase tracking-wider">
                Digital Presence
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
              Next-Gen Web Experiences
            </motion.h1>

            <motion.p
              className="text-xl text-white text-opacity-70 max-w-3xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 0.7 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Transform your digital presence into a competitive advantage with websites that do more than look beautiful—they convert, engage, and scale. Powered by cutting-edge technology and strategic design, we create web experiences that captivate audiences, drive measurable growth, and position your brand as an industry leader. Every element engineered to maximize impact and unlock endless possibilities.
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
                <motion.div
                  key={index}
                  className="border border-white border-opacity-10 rounded-lg p-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ borderColor: 'rgba(255, 255, 255, 0.2)', backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
                >
                  <h3 className="text-2xl font-bold mb-4">{capability.title}</h3>
                  <p className="text-white text-opacity-60 leading-relaxed">
                    {capability.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <HowItWorksSection
            steps={[
              {
                title: 'Discovery & Strategy',
                description: 'Deep dive into your business goals, target audience, and competitive landscape to architect a web strategy that drives transformation.'
              },
              {
                title: 'Design & Development',
                description: 'Craft stunning interfaces and robust architecture using modern frameworks, best practices, and performance optimization techniques.'
              },
              {
                title: 'Launch & Optimization',
                description: 'Deploy your website with comprehensive testing, then continuously optimize based on real user data and performance metrics.'
              }
            ]}
          />

          <div className="border border-white border-opacity-10 rounded-lg p-12">
            <div className="flex items-start gap-8">
              <div className="p-4 bg-white bg-opacity-5 rounded-lg">
                <Rocket size={40} className="text-white" />
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
                      Growing Businesses
                    </h3>
                    <p className="text-white text-opacity-60 leading-relaxed">
                      Establish credibility and scale operations with a professional web presence that converts visitors into customers.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      <Users size={20} />
                      Enterprise Brands
                    </h3>
                    <p className="text-white text-opacity-60 leading-relaxed">
                      Elevate brand perception and streamline digital operations with enterprise-grade web solutions.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      <Rocket size={20} />
                      Startups
                    </h3>
                    <p className="text-white text-opacity-60 leading-relaxed">
                      Launch quickly with MVP-focused websites that validate concepts and attract investors.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      <Globe size={20} />
                      Digital Transformers
                    </h3>
                    <p className="text-white text-opacity-60 leading-relaxed">
                      Modernize legacy systems and reimagine digital experiences for the AI era.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <CTASection
            title="Ready to transform your web presence?"
            description="Create a digital experience that unlocks endless growth possibilities"
          />
        </div>
      </div>
    </div>
  );
}
