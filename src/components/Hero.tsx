import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import { Sparkles, Globe, Users, Shield, Lightbulb, Target, Heart, Rocket, LucideIcon, Building2, ShoppingCart, Factory, GraduationCap, ArrowRight, BarChart3, PhoneCall, Mail, Share2 } from 'lucide-react';
import SEO from './SEO';
import FAQ from './FAQ';

export default function Hero() {
  const fullText = "Wexel";
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const objectives = [
    {
      icon: Lightbulb,
      title: 'Innovation-Driven Transformation',
      description: 'We use AI where it makes a real difference. Not for the sake of it. To replace manual processes that slow your business down.'
    },
    {
      icon: Globe,
      title: 'End-to-End Solutions',
      description: 'Strategy through execution. We handle the full build, integration, and deployment. No handoffs. No gaps.'
    },
    {
      icon: Users,
      title: 'Human-Centered Design',
      description: 'Automation built around how your team actually works. Not the other way around.'
    }
  ];

  const values = [
    {
      icon: Sparkles,
      title: 'Transparency',
      description: 'You see exactly what we are building, why, and what results it produces. No black boxes.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We ship clean work that performs. Every system gets measured against real numbers, not vanity metrics.'
    },
    {
      icon: Heart,
      title: 'Partnership',
      description: 'We work alongside your team from discovery to deployment. Your success is the only metric that matters.'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Enterprise-grade security. Ethical AI practices. Your data stays protected. No exceptions.'
    }
  ];

  return (
    <>
      <SEO
        title="Wexel - AI Automation Agency | Voice Agents, CRM, Outreach & E-Commerce"
        description="Wexel builds AI automation systems for businesses. Voice agents, CRM, mass outreach, e-commerce, social media, and web. We specialize so you scale."
        keywords="AI automation agency, AI voice agents, AI CRM, mass outreach automation, e-commerce AI, social media automation, business automation, Wexel"
        canonical="https://wexel.com/"
      />
      <div className="text-white">
        <section className="flex items-center justify-center px-6 pt-12 relative" style={{ minHeight: '100dvh' }}>
          <div className="w-full max-w-[1800px] relative z-10 text-center">
            <h1
              className="text-white font-bold leading-[0.85] tracking-[0.08em] uppercase"
              style={{ fontSize: 'clamp(5.5rem, 10vw, 12rem)', fontFamily: 'Blanka, sans-serif', fontWeight: 900, color: '#ffffff' }}
            >
              {displayedText}
            </h1>
            <div className="mt-6 md:mt-12">
              <p className="hero-description text-white text-base sm:text-xl md:text-2xl leading-relaxed font-semibold tracking-wide whitespace-nowrap">
                AI-First Automation Agency.
              </p>
            </div>
          </div>
        </section>

        <div className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <motion.div
              ref={heroRef}
              className="mb-32 text-center max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2
                className="text-white leading-[0.9] mb-8"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  fontWeight: 700,
                  letterSpacing: '-0.04em',
                  fontSize: 'clamp(2.5rem, 10vw, 6rem)',
                }}
              >
                We Build Systems That Run Your Business
              </h2>

              <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto">
               Every system built with security and a backup plan in mind. Autonomous systems that work 24/7.
              </p>
            </motion.div>

            <MissionSection />

            <div className="mb-16">
              <SectionHeader
                title="How we get results"
                subtitle="strategically coded"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {objectives.map((objective, index) => (
                  <ObjectiveCard key={index} {...objective} index={index} />
                ))}
              </div>
            </div>

            <div className="mb-16">
              <SectionHeader
                title="Core Values"
                subtitle="What we stand on"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {values.map((value, index) => (
                  <ValueCard key={index} {...value} index={index} />
                ))}
              </div>
            </div>

            <div id="industries">
              <IndustriesSection />
            </div>

            <div id="solutions">
              <SolutionsSection />
            </div>
          </div>
        </div>

        <div id="faq">
          <FAQ />
        </div>

        <div className="w-full backdrop-blur-md bg-white/10 py-1 border-t border-white/5 mt-12">
          <Marquee speed={50} autoFill>
            <span className="text-xs font-bold uppercase tracking-wider mx-4">
              <span className="text-white">WHERE AI MEETS </span>
              <span className="text-white">BUSINESS EXCELLENCE</span>
              <span className="text-white">.</span>
            </span>
          </Marquee>
        </div>
      </div>
    </>
  );
}

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <h2
        className="text-4xl md:text-5xl font-bold mb-4"
        style={{
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          letterSpacing: '-0.02em',
        }}
      >
        {title}
      </h2>
      <p className="text-lg text-white/60">{subtitle}</p>
    </motion.div>
  );
}

function MissionSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="mb-32 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative p-12 md:p-16 rounded-3xl backdrop-blur-md bg-white/5 border border-white/10">
        <div className="text-sm text-white/40 uppercase tracking-wider mb-4">Achievement</div>
        <h3
          className="text-3xl md:text-4xl font-bold mb-6"
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            letterSpacing: '-0.02em',
          }}
        >
          Automation That Runs Without You
        </h3>
        <p className="text-lg md:text-xl text-white/70 leading-relaxed">
          We build AI Systems that wont go offline when there's an outage like recent one. System ships fast, gets measured, and is improved over time.
        </p>
      </div>
    </motion.div>
  );
}

interface ObjectiveCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

function ObjectiveCard({ icon: Icon, title, description, index }: ObjectiveCardProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative p-8 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 h-full transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10">
        <div className="mb-6 p-3 bg-blue-500/20 rounded-xl inline-block transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-500/30">
          <Icon size={28} className="text-blue-400" />
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-white/60 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

function ValueCard({ icon: Icon, title, description, index }: ValueCardProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className="relative p-8 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 h-full transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10">
        <div className="flex items-start gap-4 mb-4">
          <div className="p-3 bg-blue-500/20 rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-500/30">
            <Icon size={24} className="text-blue-400" />
          </div>
          <h3 className="text-xl font-bold pt-2">{title}</h3>
        </div>
        <p className="text-white/60 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}



function IndustriesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const industries = [
    {
      id: 1,
      title: 'Real Estate',
      description: 'Lead capture, auto-qualification, and more. built for how people actually buy properties. Leads get routed in seconds, not hours.',
      icon: Building2,
    },
    {
      id: 2,
      title: 'E-Commerce & Retail',
      description: 'From support to complete intelligent self automated E-Commerce platforms. systems made to keep up with incomming traffics and operations.',
      icon: ShoppingCart,
    },
    {
      id: 3,
      title: 'Healthcare',
      description: 'Automated scheduling, intake, patient follow-ups, and documentation. HIPAA-compliant from day one. Your staff stops doing admin work and starts doing the work they were hired for.',
      icon: Heart,
    },
    {
      id: 4,
      title: 'Manufacturing',
      description: 'Predictive maintenance, quality control, and supply chain monitoring that catches problems before they cost you a production run. Less downtime. Tighter tolerances. Faster throughput.',
      icon: Factory,
    },
  ];

  return (
    <motion.div
      ref={ref}
      className="mt-32 max-w-7xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-16">
        <h2
          className="text-white leading-[0.9] mb-4"
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            fontSize: 'clamp(2.5rem, 10vw, 4rem)',
          }}
        >
          Industries
        </h2>
        <div className="max-w-2xl">
          <p className="text-lg text-white/60 mt-3">
            We have done it several times.
          </p>
          <p className="text-base text-white/60 mt-0.5">
            We know the exact problems in your industry because we have solved them before. No generic solutions. Systems built for how your business actually works.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
        {industries.map((industry) => {
          const Icon = industry.icon;
          return (
            <motion.article
              key={industry.id}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: industry.id * 0.1 }}
            >
              <div className="relative rounded-2xl p-8 h-full backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="inline-flex p-4 rounded-xl backdrop-blur-md bg-white/10 transition-all duration-500">
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

                  <p className="text-white/70 leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      <div className="pt-12 border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              letterSpacing: '-0.02em',
            }}
          >
            Don't see your industry?
          </h2>
          <p className="text-white/60 mb-8">
            We learn your industry's specific problems, then build systems engineered for your exact situation. No templates. No guesswork.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function SolutionsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const navigate = useNavigate();

  const solutions = [
    {
      id: 1,
      title: 'Intelligent AI CRM',
      description: 'Lead scoring, automated follow-ups, and pipeline visibility. Your CRM works while your team sells.',
      category: 'Customer Experience',
      icon: BarChart3,
      route: '/aicrm',
    },
    {
      id: 2,
      title: 'AI Voice Solutions',
      description: 'AI picks up the phone, qualifies leads, books appointments, handles support. Sounds human. Works 24/7.',
      category: 'Conversational AI',
      icon: PhoneCall,
      route: '/voice',
    },
    {
      id: 3,
      title: 'Mass Outreach Automation',
      description: 'Thousands of personalized emails sent at scale. Each one tailored per prospect. High deliverability. Real replies.',
      category: 'Digital Marketing',
      icon: Mail,
      route: '/outreach',
    },
    {
      id: 4,
      title: 'E-Commerce Intelligence',
      description: 'Smart product recs, dynamic pricing, and cart recovery. Built to increase AOV and cut abandoned checkouts.',
      category: 'Commerce Solutions',
      icon: ShoppingCart,
      route: '/ecommerce',
    },
    {
      id: 5,
      title: 'Autonomous Social Media',
      description: 'Content scheduling, engagement automation, and analytics across every platform. Your social runs itself.',
      category: 'Social Intelligence',
      icon: Share2,
      route: '/social',
    },
    {
      id: 6,
      title: 'Next-Gen Web Experiences',
      description: 'Fast, responsive, conversion-focused websites. SEO-optimized. Built to load in under 2 seconds and turn visitors into customers.',
      category: 'Digital Presence',
      icon: Globe,
      route: '/website',
    },
  ];

  return (
    <motion.div
      ref={ref}
      className="mt-32 max-w-7xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-16">
        <h2
          className="text-white leading-[0.9] mb-4"
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            fontSize: 'clamp(2.5rem, 10vw, 4rem)',
          }}
        >
          Solutions
        </h2>
        <div className="max-w-2xl">
          <p className="text-lg text-white/60 mt-3">
            Built from the ground up on demand.
          </p>
          <p className="text-base text-white/60 mt-0.5">
            Six emerging solutions for the year
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {solutions.map((solution) => {
          const Icon = solution.icon;
          return (
            <motion.div
              key={solution.id}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: solution.id * 0.08 }}
            >
              <div 
                onClick={() => navigate(solution.route)}
                className="h-full rounded-2xl border border-white/12 bg-white/6 backdrop-blur-xl hover:border-blue-500/30 hover:bg-white/10 transition-all duration-300 p-7 lg:p-8 flex flex-col cursor-pointer">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-shrink-0 p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <Icon size={24} className="text-blue-400" />
                  </div>
                  <p className="text-xs text-white/40 uppercase tracking-wider font-semibold">
                    {solution.category}
                  </p>
                </div>

                <h3
                  className="text-2xl lg:text-3xl font-bold leading-tight mb-3"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {solution.title}
                </h3>

                <p className="text-white/50 text-sm lg:text-base leading-relaxed mb-8 flex-1">
                  {solution.description}
                </p>

                <div className="flex items-center justify-between pt-5 border-t border-white/6">
                  <span className="text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                    Learn more
                  </span>
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:border-blue-500/40 transition-all duration-300">
                    <ArrowRight size={16} className="text-blue-400 group-hover:translate-x-0.5 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="pt-12 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h2
              className="text-3xl font-bold mb-2"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                letterSpacing: '-0.02em',
              }}
            >
              Need a system that works while you sleep?
            </h2>
            <p className="text-white/60">
              Tell us what is broken. We will tell you exactly how to fix it.
            </p>
          </div>
          <motion.button
            className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300 inline-flex items-center gap-2 whitespace-nowrap cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch <ArrowRight size={18} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
