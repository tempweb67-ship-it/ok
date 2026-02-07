import { ArrowLeft, Globe, Zap, Smartphone, Rocket, TrendingUp, Users, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FeatureSection, HowItWorksSection, CTASection, BenefitsGrid } from './shared/SolutionPageComponents';
import SEO from './SEO';

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
    <>
      <SEO
        title="Next-Gen Web Development - AI-Powered Website Design & Development | Wexel"
        description="Transform your digital presence with cutting-edge web development. High-performance websites engineered for conversion, optimized for search engines, and designed to dominate. Modern web experiences that captivate and scale."
        keywords="web development, website design, AI website, modern web development, high-performance websites, responsive web design, SEO-optimized websites, web design agency, custom website development, professional web design"
        canonical="https://wexel.com/solutions/website"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Next-Gen Web Experiences",
          "provider": {
            "@type": "Organization",
            "name": "Wexel"
          },
          "description": "Cutting-edge websites that captivate, convert, and scale with performance optimization",
          "serviceType": "Web Development",
          "areaServed": "Worldwide"
        }}
      />
      <div className="text-white" style={{ minHeight: '100dvh' }}>
      <div className="pt-20 sm:pt-32 pb-12 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 text-white transition-all duration-300 mb-4 sm:mb-8"
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
              <Globe size={18} className="text-blue-400 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm text-blue-400 uppercase tracking-wider">
                Digital Presence
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
              Next-Gen Web Experiences
            </motion.h1>

            <motion.p
              className="text-base sm:text-xl text-white/70 max-w-3xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 0.7 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Transform your digital presence into a competitive advantage with websites that do more than look beautiful—they convert, engage, and scale. Powered by cutting-edge technology and strategic design, we create web experiences that captivate audiences, drive measurable growth, and position your brand as an industry leader. Every element engineered to maximize impact and unlock endless possibilities.
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
                  className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-5 sm:p-8 hover:border-blue-500/30 hover:bg-blue-500/10 transition-all duration-300"
                >
                  <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4">{capability.title}</h3>
                  <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                    {capability.description}
                  </p>
                </div>
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

          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-6 sm:p-12">
            <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
              <div className="p-4 backdrop-blur-md bg-white/5 rounded-lg hidden sm:block">
                <Rocket size={40} className="text-blue-400" />
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
                      Growing Businesses
                    </h3>
                    <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                      Establish credibility and scale operations with a professional web presence that converts visitors into customers.
                    </p>
                  </div>
                  <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-5 sm:backdrop-blur-none sm:bg-transparent sm:border-0 sm:p-0">
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-2 flex items-center gap-2">
                      <Users size={20} className="flex-shrink-0" />
                      Enterprise Brands
                    </h3>
                    <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                      Elevate brand perception and streamline digital operations with enterprise-grade web solutions.
                    </p>
                  </div>
                  <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-5 sm:backdrop-blur-none sm:bg-transparent sm:border-0 sm:p-0">
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-2 flex items-center gap-2">
                      <Rocket size={20} className="flex-shrink-0" />
                      Startups
                    </h3>
                    <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                      Launch quickly with MVP-focused websites that validate concepts and attract investors.
                    </p>
                  </div>
                  <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-5 sm:backdrop-blur-none sm:bg-transparent sm:border-0 sm:p-0">
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-2 flex items-center gap-2">
                      <Globe size={20} className="flex-shrink-0" />
                      Digital Transformers
                    </h3>
                    <p className="text-white/60 leading-relaxed text-sm sm:text-base">
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
    </>
  );
}
