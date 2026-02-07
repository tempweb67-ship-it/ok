import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Sparkles, Globe, Users, Shield, Lightbulb, Target, Heart, Rocket, LucideIcon } from 'lucide-react';
import Contact from './Contact';
import SEO from './SEO';

export default function Vision() {
  const [contactOpen, setContactOpen] = useState(false);
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.2 });

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
        title="Our Vision - AI Automation That Runs Your Business | Wexel"
        description="Wexel builds AI systems that replace manual work with automation. Our focus: practical solutions that ship fast, measure results, and scale with your business."
        keywords="Wexel vision, AI automation agency, business automation, AI-first approach, practical AI solutions"
        canonical="https://wexel.com/vision"
        breadcrumbs={[
          { name: 'Home', url: 'https://wexel.com/' },
          { name: 'Our Vision', url: 'https://wexel.com/vision' }
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "Our Vision - Wexel",
          "description": "Wexel builds practical AI automation that ships fast, measures results, and scales with your business",
          "url": "https://wexel.com/vision",
          "mainEntity": {
            "@type": "Organization",
            "name": "Wexel",
            "description": "AI-First Automation Agency building systems that run businesses",
            "knowsAbout": ["Innovation-Driven Transformation", "End-to-End Solutions", "Human-Centered Design"],
            "slogan": "AI Systems That Run Your Business"
          },
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": ["h1", "h2"]
          }
        }}
      />
      <Contact isOpen={contactOpen} onClose={() => setContactOpen(false)} />
      <div className="text-white" style={{ minHeight: '100dvh' }}>
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

            <h1
              className="text-white leading-[0.9] mb-8"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontWeight: 700,
                letterSpacing: '-0.04em',
                fontSize: 'clamp(2.5rem, 10vw, 6rem)',
              }}
            >
              We Build Systems That Run Your Business
            </h1>

            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto">
              Every system we build is made in mind with security & backup plan. Custom built everytime. Highly Scalable.
            </p>

            <p className="text-sm text-white/40 mt-6">
              [Scroll Down]
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
        <div className="text-sm text-white/40 uppercase tracking-wider mb-4">Mission</div>
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
          We build AI systems that handle the work your team should not be doing manually. Lead follow-ups, phone calls, email campaigns, social posting, inventory decisions. Every system ships fast, gets measured, and improves over time.
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
            Join The Winner's Revolution
          </h2>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto mb-10">
            We build the systems that let you focus on what you do best. Less manual work. More output. Better results. That is the whole point.
          </p>
          <motion.button
            onClick={onContactClick}
            className="inline-flex items-center px-8 py-4 rounded-full bg-blue-500 text-white font-semibold transition-all duration-300 hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-500/30 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enter the Revolution
          </motion.button>
        </div>
      </div>
      <div className="mt-16 text-center text-white/30 text-sm">
        <p>Ready to automate? Let us know what is slowing you down.</p>
      </div>
    </motion.div>
  );
}
