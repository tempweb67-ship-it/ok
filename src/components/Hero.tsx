import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Sparkles, Globe, Users, Shield, Lightbulb, Target, Heart, Rocket, LucideIcon } from 'lucide-react';
import SEO from './SEO';
import FAQ from './FAQ';
import Contact from './Contact';

export default function Hero() {
  const [contactOpen, setContactOpen] = useState(false);
  const fullText = "Wexel";
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.2 });

  React.useEffect(() => {
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
      <Contact isOpen={contactOpen} onClose={() => setContactOpen(false)} />
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
              <div className="inline-flex items-center gap-2 px-4 py-2 backdrop-blur-md bg-blue-500/20 rounded-full mb-8 border border-blue-500/30">
                <Rocket size={16} className="text-blue-400" />
                <span className="text-sm text-blue-400 uppercase tracking-wider">Our Vision</span>
              </div>

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
               Every system we build is made with security and a backup plan in mind. 24/7 autonomous systems for your peace of mind.
              </p>
            </motion.div>

            <MissionSection />

            <div className="mb-16">
              <SectionHeader
                title="Strategic Objectives"
                subtitle="How we get results"
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

            <FutureSection onContactClick={() => setContactOpen(true)} />
          </div>
        </div>

        <FAQ />
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

function FutureSection({ onContactClick }: { onContactClick: () => void }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="relative max-w-5xl mx-auto mb-12"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative p-12 md:p-20 rounded-3xl backdrop-blur-md bg-blue-500/20 border border-blue-500/30">
        <div className="text-center">
          <h2
            className="text-3xl md:text-5xl font-bold mb-8"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              letterSpacing: '-0.02em',
            }}
          >
            Join The Winners' Revolution
          </h2>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto mb-10">
            Because winners automate and move with blazing speeds.
          </p>
          <motion.button
            onClick={onContactClick}
            className="inline-flex items-center px-8 py-4 rounded-full bg-blue-500 text-white font-semibold transition-all duration-300 hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-500/30 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join the Revolution
          </motion.button>
        </div>
      </div>
      <div className="mt-16 text-center text-white/30 text-sm">
        <p>Ready to automate? Let us know what is slowing you down.</p>
      </div>
    </motion.div>
  );
}
