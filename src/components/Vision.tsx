import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Globe, Users, Shield, Lightbulb, Target, Heart, Rocket } from 'lucide-react';

export default function Vision() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.2 });

  const objectives = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Pushing boundaries with emerging technologies to deliver cutting-edge solutions that stay ahead of the curve.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Building a world where AI empowers every organization to achieve more across industries and borders.'
    },
    {
      icon: Users,
      title: 'Human-Centered Approach',
      description: 'Technology that enhances human potential. AI that amplifies your team\'s capabilities and creativity.'
    }
  ];

  const values = [
    {
      icon: Sparkles,
      title: 'Transparency',
      description: 'Clear communication about how our AI works, what it can do, and its limitations.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Uncompromising commitment to quality, performance, and continuous improvement.'
    },
    {
      icon: Heart,
      title: 'Partnership',
      description: 'Your success is our success. We build lasting relationships, not just transactions.'
    },
    {
      icon: Shield,
      title: 'Responsibility',
      description: 'Ethical AI development with careful consideration for privacy, security, and societal impact.'
    }
  ];

  return (
    <div className="bg-black min-h-screen text-white overflow-hidden">
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            ref={heroRef}
            className="mb-32 text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white bg-opacity-5 rounded-full mb-8">
              <Rocket size={16} className="text-white text-opacity-60" />
              <span className="text-sm text-white text-opacity-60 uppercase tracking-wider">Our Vision</span>
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
              Shaping an Intelligent Future
            </h1>

            <p className="text-xl md:text-2xl text-white text-opacity-70 leading-relaxed max-w-3xl mx-auto">
              We're democratizing AI automation, making enterprise-grade intelligent solutions accessible to businesses of all sizes.
            </p>

            <p className="text-sm text-white text-opacity-40 mt-6">
              [Scroll Down]
            </p>
          </motion.div>

          <MissionSection />

          <div className="mb-32">
            <SectionHeader
              title="Strategic Objectives"
              subtitle="Our roadmap to transforming the future of work"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {objectives.map((objective, index) => (
                <ObjectiveCard key={index} {...objective} index={index} />
              ))}
            </div>
          </div>

          <div className="mb-32">
            <SectionHeader
              title="Core Values"
              subtitle="The principles that guide everything we do"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <ValueCard key={index} {...value} index={index} />
              ))}
            </div>
          </div>

          <FutureSection />
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className="text-center mb-16"
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
      <p className="text-lg text-white text-opacity-60">{subtitle}</p>
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
      <div className="relative p-12 md:p-16 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white border-opacity-10">
        <div className="text-sm text-white text-opacity-40 uppercase tracking-wider mb-4">Mission</div>
        <h3
          className="text-3xl md:text-4xl font-bold mb-6"
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            letterSpacing: '-0.02em',
          }}
        >
          Democratizing AI Automation
        </h3>
        <p className="text-lg md:text-xl text-white text-opacity-70 leading-relaxed">
          Advanced technology should not be limited to large corporations but should empower every organization to achieve operational excellence. Through innovation, transparency, and a human-centered approach, we're making it happen.
        </p>
      </div>
    </motion.div>
  );
}

function ObjectiveCard({ icon: Icon, title, description, index }: any) {
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
      <div className="relative p-8 rounded-2xl bg-white bg-opacity-[0.02] border border-white border-opacity-10 h-full transition-all duration-300 hover:border-opacity-20 hover:bg-opacity-[0.04]">
        <div className="mb-6 p-3 bg-white bg-opacity-5 rounded-xl inline-block transition-transform duration-300 group-hover:scale-110">
          <Icon size={28} className="text-white" />
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-white text-opacity-60 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

function ValueCard({ icon: Icon, title, description, index }: any) {
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
      <div className="relative p-8 rounded-2xl bg-white bg-opacity-[0.02] border border-white border-opacity-10 h-full transition-all duration-300 hover:border-opacity-20 hover:bg-opacity-[0.04]">
        <div className="flex items-start gap-4 mb-4">
          <div className="p-3 bg-white bg-opacity-5 rounded-xl transition-transform duration-300 group-hover:scale-110">
            <Icon size={24} className="text-white" />
          </div>
          <h3 className="text-xl font-bold pt-2">{title}</h3>
        </div>
        <p className="text-white text-opacity-60 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

function FutureSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="relative max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative p-12 md:p-16 rounded-3xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white border-opacity-20">
        <div className="text-center">
          <h2
            className="text-3xl md:text-5xl font-bold mb-6"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              letterSpacing: '-0.02em',
            }}
          >
            Join Us in Shaping Tomorrow
          </h2>
          <p className="text-lg md:text-xl text-white text-opacity-70 leading-relaxed max-w-3xl mx-auto">
            We're not just adapting to the future—we're creating it. Through relentless innovation and deep collaboration, we're transforming ambitious visions into reality and building technology that serves humanity's greatest aspirations.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
