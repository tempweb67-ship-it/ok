import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Step {
  title: string;
  description: string;
}

interface Benefit {
  stat: string;
  label: string;
}

interface FeatureCardProps {
  feature: Feature;
  Icon: LucideIcon;
  index: number;
}

export function FeatureSection({ features }: { features: Feature[] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="mb-10 sm:mb-20"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-12"
        style={{
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          letterSpacing: '-0.03em',
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        Key Features
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <FeatureCard key={index} feature={feature} Icon={Icon} index={index} />
          );
        })}
      </div>
    </motion.div>
  );
}

export function FeatureCard({ feature, Icon, index }: FeatureCardProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className="relative border border-white border-opacity-10 rounded-2xl p-5 sm:p-8 overflow-hidden group"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ borderColor: 'rgba(255, 255, 255, 0.2)', backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.3 }}
      />
      <div className="relative z-10">
        <motion.div
          className="p-2.5 sm:p-3 bg-white bg-opacity-5 rounded-xl inline-flex mb-3 sm:mb-6"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          <Icon size={24} className="text-white sm:w-7 sm:h-7" />
        </motion.div>

        <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4">{feature.title}</h3>
        <p className="text-white text-opacity-60 leading-relaxed text-sm sm:text-base">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

export function HowItWorksSection({ steps }: { steps: Step[] }) {
  return (
    <div className="relative border border-white border-opacity-10 rounded-3xl p-6 sm:p-12 mb-10 sm:mb-20 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-[0.02] rounded-full blur-3xl" />
      <div className="max-w-3xl relative z-10">
        <h2
          className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8"
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            letterSpacing: '-0.03em',
          }}
        >
          How It Works
        </h2>

        <div className="hidden sm:block space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center font-bold hover:bg-opacity-15 transition-colors duration-300">
                  {index + 1}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-white text-opacity-60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="sm:hidden grid gap-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="border border-white border-opacity-10 rounded-xl p-4 bg-white bg-opacity-[0.02]"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white bg-opacity-10 flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold mb-1">{step.title}</h3>
                  <p className="text-white text-opacity-60 text-sm leading-snug">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CTASection({ title, description }: { title: string; description: string }) {
  return (
    <div className="mt-10 sm:mt-20 pt-8 sm:pt-12 border-t border-white border-opacity-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6">
        <div>
          <h2
            className="text-xl sm:text-3xl font-bold mb-1 sm:mb-2"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </h2>
          <p className="text-white text-opacity-60 text-sm sm:text-base">{description}</p>
        </div>
        <Link
          to="/"
          onClick={() => {
            const contactBtn = document.querySelector('[data-contact-btn]');
            if (contactBtn) {
              (contactBtn as HTMLButtonElement).click();
            }
          }}
          className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white hover:bg-opacity-90 transition-all duration-300 inline-flex items-center gap-2 whitespace-nowrap hover:scale-105 active:scale-95"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

export function BenefitsGrid({ benefits }: { benefits: Benefit[] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-20"
    >
      {benefits.map((benefit, index) => (
        <motion.div
          key={index}
          className="relative border border-white border-opacity-10 rounded-2xl p-6 sm:p-8 text-center overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ borderColor: 'rgba(255, 255, 255, 0.2)', backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <div className="relative z-10">
            <motion.div
              className="text-3xl sm:text-5xl font-bold mb-1 sm:mb-2"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                letterSpacing: '-0.03em',
              }}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3, type: 'spring' }}
            >
              {benefit.stat}
            </motion.div>
            <p className="text-white text-opacity-60 text-sm sm:text-base">{benefit.label}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
