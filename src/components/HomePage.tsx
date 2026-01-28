import { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown, Sparkles, Zap, Target, Bot, BarChart3, PhoneCall, Mail, ShoppingCart, Share2, Globe, Building2, Heart, Briefcase, Factory, GraduationCap, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage({ onContactClick }: { onContactClick: () => void }) {
  return (
    <div className="bg-black">
      <HeroSection />
      <DifferenceSection />
      <SolutionsSection />
      <IndustriesSection />
      <VisionSection />
      <ContactSection onContactClick={onContactClick} />
    </div>
  );
}

function HeroSection() {
  const fullText = "Wexel";
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section id="hero" className="min-h-screen bg-black flex flex-col items-center justify-center px-6 pt-12 relative overflow-hidden">
      <div className="w-full max-w-[1800px] relative z-10 text-center flex-1 flex flex-col items-center justify-center">
        <h1
          className="text-white font-bold leading-[0.85] tracking-[0.08em] uppercase"
          style={{ fontSize: 'clamp(5.5rem, 10vw, 12rem)', fontFamily: 'Blanka, sans-serif', fontWeight: 900 }}
        >
          {displayedText}
        </h1>
        <div className="mt-6 md:mt-12">
          <p className="text-white text-base sm:text-xl md:text-2xl leading-relaxed font-semibold tracking-wide whitespace-nowrap">
            Digital Transformation Agency.
          </p>
        </div>
      </div>
      <motion.div
        className="pb-12"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white text-opacity-40 text-xs uppercase tracking-widest">Scroll Down</span>
          <ChevronDown size={24} className="text-white text-opacity-40" />
        </div>
      </motion.div>
    </section>
  );
}

function DifferenceSection() {
  const differences = [
    {
      id: 1,
      title: 'Transformation-First Mindset',
      description: 'We architect solutions for the future, not patch legacy systems. Every engagement begins with reimagining what\'s possible, unlocking endless opportunities for innovation and growth.',
      icon: Sparkles,
    },
    {
      id: 2,
      title: 'Rapid Deployment & Scale',
      description: 'Traditional consultants take months. Our AI-powered approach delivers enterprise transformation in weeks, enabling you to capitalize on opportunities faster than competition.',
      icon: Zap,
    },
    {
      id: 3,
      title: 'Measurable Business Impact',
      description: 'We\'re obsessed with outcomes. Every solution is engineered to deliver quantifiable ROI through operational excellence, revenue acceleration, and sustainable competitive advantage.',
      icon: Target,
    },
    {
      id: 4,
      title: 'Always-On Intelligence',
      description: 'Deploy solutions that never sleep. Our AI-powered systems operate 24/7 with superhuman consistency, eliminating bottlenecks and scaling infinitely with your ambitions.',
      icon: Bot,
    },
  ];

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });

  return (
    <section id="difference" className="min-h-screen bg-black text-white py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          ref={headerRef}
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="text-white leading-[0.85] mb-4"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              fontSize: 'clamp(3rem, 10vw, 6rem)',
            }}
          >
            What's Different
          </h2>
          <div className="max-w-2xl">
            <p className="text-lg text-white text-opacity-60 mt-3">
              Why leading organizations choose Wexel as their transformation partner
            </p>
          </div>
        </motion.div>

        <div className="space-y-6 max-w-4xl">
          {differences.map((item, index) => {
            const Icon = item.icon;
            return (
              <DifferenceCard
                key={item.id}
                item={item}
                index={index}
                Icon={Icon}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DifferenceCard({ item, index, Icon }: { item: any; index: number; Icon: any }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={cardRef}
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      <div className="relative pl-0 py-8 px-6 rounded-2xl border border-white border-opacity-0 transition-all duration-500 hover:border-opacity-10 hover:bg-white hover:bg-opacity-[0.02]">
        <div className="flex items-start gap-6 relative z-10">
          <div className="flex-shrink-0 p-3 bg-white bg-opacity-5 rounded-xl group-hover:bg-opacity-10 transition-all duration-300">
            <Icon size={24} className="text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-baseline gap-3 mb-3">
              <span className="text-white text-opacity-30 font-mono text-sm">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3
                className="text-2xl font-bold leading-tight"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  letterSpacing: '-0.02em',
                }}
              >
                {item.title}
              </h3>
            </div>
            <p className="text-white text-opacity-60 leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SolutionsSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const solutions = [
    {
      id: 1,
      title: 'Intelligent CRM Transformation',
      description: 'Transform customer relationships with AI-driven automation, predictive analytics, and seamless workflow orchestration that drives revenue growth.',
      category: 'Customer Experience',
      icon: BarChart3,
      link: '/solutions/aicrm',
    },
    {
      id: 2,
      title: 'AI Voice Solutions',
      description: 'Deploy autonomous voice agents that revolutionize customer interactions, scale operations infinitely, and deliver human-quality experiences 24/7.',
      category: 'Conversational AI',
      icon: PhoneCall,
      link: '/solutions/voice',
    },
    {
      id: 3,
      title: 'Marketing Automation Excellence',
      description: 'Transform outreach with hyper-personalized campaigns, intelligent segmentation, and AI-powered content that converts at scale.',
      category: 'Digital Marketing',
      icon: Mail,
      link: '/solutions/outreach',
    },
    {
      id: 4,
      title: 'E-Commerce Intelligence',
      description: 'Elevate your online business with predictive merchandising, dynamic optimization, and AI-driven insights that maximize every transaction.',
      category: 'Commerce Solutions',
      icon: ShoppingCart,
      link: '/solutions/ecommerce',
    },
    {
      id: 5,
      title: 'Social Media Transformation',
      description: 'Amplify your brand presence with intelligent automation, performance analytics, and AI-powered engagement strategies across all channels.',
      category: 'Social Intelligence',
      icon: Share2,
      link: '/solutions/social',
    },
    {
      id: 6,
      title: 'Next-Gen Web Experiences',
      description: 'Transform your digital presence with cutting-edge websites that captivate, convert, and scale—engineered for performance, optimized for growth, and designed to dominate.',
      category: 'Digital Presence',
      icon: Globe,
      link: '/solutions/website',
    },
  ];

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });

  return (
    <section id="solutions" className="min-h-screen bg-black text-white py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          ref={headerRef}
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-white leading-[0.85] mb-4"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              fontSize: 'clamp(3rem, 10vw, 6rem)',
            }}
          >
            Solutions
          </h2>
          <div className="max-w-2xl">
            <p className="text-lg text-white text-opacity-60 mt-3">
              Comprehensive digital transformation solutions with endless possibilities
            </p>
          </div>
        </motion.div>

        <div className="space-y-0 max-w-5xl">
          {solutions.map((solution) => {
            const Icon = solution.icon;
            const isExpanded = expandedId === solution.id;

            return (
              <div key={solution.id} className="border-t border-white border-opacity-10">
                <button
                  onClick={() => setExpandedId(isExpanded ? null : solution.id)}
                  className="w-full py-8 text-left group hover:bg-white hover:bg-opacity-[0.02] transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex items-center gap-6 flex-1">
                      <Icon size={28} className="text-white text-opacity-40 group-hover:text-opacity-100 transition-all duration-300 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-white text-opacity-40 mb-2 uppercase tracking-[0.2em] font-semibold">
                          {solution.category}
                        </p>
                        <h3
                          className="text-2xl md:text-3xl font-bold leading-tight"
                          style={{
                            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                            letterSpacing: '-0.02em',
                          }}
                        >
                          {solution.title}
                        </h3>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      {isExpanded ? (
                        <Minus size={24} className="text-white text-opacity-60" />
                      ) : (
                        <Plus size={24} className="text-white text-opacity-60" />
                      )}
                    </div>
                  </div>
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-8 pl-[3.75rem]">
                    <p className="text-white text-opacity-60 text-lg leading-relaxed mb-6">
                      {solution.description}
                    </p>
                    <Link
                      to={solution.link}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  const industries = [
    {
      id: 1,
      title: 'E-Commerce & Retail',
      description: 'Complete digital transformation of customer journeys with AI-powered personalization, intelligent inventory optimization, and seamless omnichannel experiences.',
      icon: ShoppingCart,
    },
    {
      id: 2,
      title: 'Healthcare',
      description: 'Modernize patient experiences and operational workflows with intelligent automation, predictive analytics, and secure platforms that enhance care delivery.',
      icon: Heart,
    },
    {
      id: 3,
      title: 'Professional Services',
      description: 'Transform service delivery with AI-driven insights, automated workflows, and intelligent systems that amplify expertise and accelerate client outcomes.',
      icon: Briefcase,
    },
    {
      id: 4,
      title: 'Real Estate',
      description: 'Revolutionize property operations with end-to-end digital solutions: automated lead nurturing, intelligent matching, and virtual experiences.',
      icon: Building2,
    },
    {
      id: 5,
      title: 'Manufacturing',
      description: 'Drive operational excellence with smart factory solutions, predictive maintenance, supply chain intelligence, and quality systems.',
      icon: Factory,
    },
    {
      id: 6,
      title: 'Education',
      description: 'Reimagine learning with adaptive platforms, personalized experiences, intelligent assessment, and data-driven insights.',
      icon: GraduationCap,
    },
  ];

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });

  return (
    <section id="industries" className="min-h-screen bg-black text-white py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          ref={headerRef}
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-white leading-[0.85] mb-4"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              fontSize: 'clamp(3rem, 10vw, 6rem)',
            }}
          >
            Industries
          </h2>
          <div className="max-w-2xl">
            <p className="text-lg text-white text-opacity-60 mt-3">
              Industry-specific digital transformation solutions with endless potential
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <IndustryCard key={industry.id} industry={industry} Icon={Icon} index={index} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function IndustryCard({ industry, Icon, index }: { industry: any; Icon: any; index: number }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="relative rounded-2xl p-8 h-full bg-white bg-opacity-[0.02] border border-white border-opacity-10 hover:border-opacity-20 hover:bg-opacity-[0.04] transition-all duration-300">
        <div className="mb-6">
          <div className="inline-flex p-4 rounded-xl bg-white bg-opacity-5 group-hover:bg-opacity-10 transition-all duration-300">
            <Icon size={32} className="text-white" />
          </div>
        </div>
        <h3
          className="text-2xl font-bold leading-tight mb-4"
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            letterSpacing: '-0.02em',
          }}
        >
          {industry.title}
        </h3>
        <p className="text-white text-opacity-60 leading-relaxed">
          {industry.description}
        </p>
      </div>
    </motion.div>
  );
}

function VisionSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="vision" className="min-h-screen bg-black text-white py-32 flex items-center">
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <motion.div
          ref={ref}
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-white leading-[0.9] mb-8"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              fontSize: 'clamp(2.5rem, 10vw, 5rem)',
            }}
          >
            Transforming Businesses for Tomorrow
          </h2>
          <p className="text-xl md:text-2xl text-white text-opacity-70 leading-relaxed max-w-3xl mx-auto mb-12">
            We're pioneering digital transformation solutions that unlock endless possibilities for businesses ready to evolve, scale, and thrive in the AI era.
          </p>
          <div className="relative p-12 md:p-16 rounded-3xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white border-opacity-20">
            <p className="text-lg md:text-xl text-white text-opacity-70 leading-relaxed">
              We're not just implementing technology—we're reimagining what's possible. Through strategic innovation and proven transformation methodologies, we turn bold visions into market-leading realities.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection({ onContactClick }: { onContactClick: () => void }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="contact" className="bg-black text-white py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-white leading-[0.9] mb-6"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              fontSize: 'clamp(2.5rem, 10vw, 5rem)',
            }}
          >
            Ready to Transform?
          </h2>
          <p className="text-xl text-white text-opacity-70 leading-relaxed mb-12">
            Partner with us to unlock endless possibilities and accelerate your digital evolution
          </p>
          <button
            onClick={onContactClick}
            className="px-12 py-4 bg-white text-black font-bold text-lg rounded-lg hover:bg-opacity-90 transition-all duration-300 inline-flex items-center gap-3"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
}
