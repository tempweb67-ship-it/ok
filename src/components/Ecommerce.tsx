import { ShoppingCart, TrendingUp, Brain, BarChart3, Users, Zap } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SEO from './SEO';
import BackToTop from './BackToTop';

export default function Ecommerce() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });

  const features = [
    {
      icon: Brain,
      title: 'Intelligent Product Discovery',
      description: 'AI surfaces the right products at the right time based on browsing behavior and purchase intent. More clicks turn into sales.',
    },
    {
      icon: TrendingUp,
      title: 'Strategic Pricing Intelligence',
      description: 'Prices adjust in real time based on demand, competition, and customer segment. Maximize margin without manual repricing.',
    },
    {
      icon: Users,
      title: 'Behavioral Intelligence',
      description: 'AI segments buyers by actual behavior patterns. You see who buys what, when, and why. Then target them accordingly.',
    },
  ];

  const benefits = [
    {
      stat: '35%',
      label: 'Revenue Increase',
    },
    {
      stat: '3.2x',
      label: 'Higher AOV',
    },
    {
      stat: '28%',
      label: 'More Conversions',
    },
  ];

  const capabilities = [
    {
      title: 'Smart Product Discovery',
      description: 'Help customers find exactly what they need with AI-powered search and intuitive product recommendations based on intent.',
    },
    {
      title: 'Cross-Sell & Upsell Engine',
      description: 'Identify optimal opportunities to increase basket size with intelligent product bundling and complementary suggestions.',
    },
    {
      title: 'Inventory Intelligence',
      description: 'Optimize stock levels, predict demand patterns, and automate reordering to prevent stockouts and overstock.',
    },
    {
      title: 'Personalized Shopping',
      description: 'Create unique experiences for each customer with tailored homepages, product feeds, and promotional offers.',
    },
    {
      title: 'Abandoned Cart Recovery',
      description: 'Automatically engage shoppers who leave items in their cart with personalized reminders and incentives.',
    },
    {
      title: 'Performance Analytics',
      description: 'Track key metrics in real-time with actionable insights to continuously optimize your store performance.',
    },
  ];

  return (
    <>
      <SEO
        title="E-Commerce AI - Dynamic Pricing, Product Recs & Cart Recovery | Wexel"
        description="AI for online stores. Dynamic pricing, smart product recommendations, cart abandonment recovery, and inventory intelligence. Higher AOV. More conversions. Less guesswork."
        keywords="e-commerce AI, dynamic pricing, product recommendations, cart recovery, e-commerce automation, AI retail, inventory intelligence"
        canonical="https://wexel.com/solutions/ecommerce"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "E-Commerce Intelligence",
          "provider": {
            "@type": "Organization",
            "name": "Wexel"
          },
          "description": "AI e-commerce systems for dynamic pricing, product recommendations, cart recovery, and inventory management",
          "serviceType": "E-Commerce Automation",
          "areaServed": "Worldwide"
        }}
      />
      <div className="text-white" style={{ minHeight: '100dvh' }}>
      <div className="pt-20 sm:pt-32 pb-12 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <BackToTop />
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
              <ShoppingCart size={18} className="text-blue-400 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm text-blue-400 uppercase tracking-wider">
                Commerce Solutions
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
              E-Commerce Intelligence
            </motion.h1>

            <motion.p
              className="text-base sm:text-xl text-white/70 max-w-3xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 0.7 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              AI that knows what your customers want before they do. Dynamic pricing adjusts in real time. Product recs surface the right items. Abandoned carts get recovered automatically. Higher AOV, more conversions, and inventory that stays right-sized.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-20">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-6 sm:p-8 text-center"
              >
                <div
                  className="text-3xl sm:text-5xl font-bold mb-1 sm:mb-2"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    letterSpacing: '-0.03em',
                  }}
                >
                  {benefit.stat}
                </div>
                <p className="text-white/60 text-sm sm:text-base">{benefit.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="mb-10 sm:mb-20">
            <h2
              className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-12"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                letterSpacing: '-0.03em',
              }}
            >
              Key Features
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-5 sm:p-8 hover:border-blue-500/30 hover:bg-blue-500/10 transition-all duration-500"
                  >
                    <div className="p-2.5 sm:p-3 backdrop-blur-md bg-white/5 rounded-lg inline-flex mb-3 sm:mb-6">
                      <Icon size={24} className="text-blue-400 sm:w-7 sm:h-7" />
                    </div>

                    <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4">{feature.title}</h3>
                    <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

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
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-5 sm:p-8"
                >
                  <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4">{capability.title}</h3>
                  <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                    {capability.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-6 sm:p-12 mb-10 sm:mb-20">
            <div className="max-w-3xl">
              <h2
                className="text-2xl sm:text-4xl font-bold mb-6"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  letterSpacing: '-0.03em',
                }}
              >
                How It Works
              </h2>

              {/* Desktop: Timeline layout */}
              <div className="hidden sm:block space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full backdrop-blur-md bg-white/5 flex items-center justify-center font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Data Collection</h3>
                    <p className="text-white/60 leading-relaxed">
                      Our AI continuously gathers data on customer behavior, product performance,
                      inventory levels, and market conditions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full backdrop-blur-md bg-white/5 flex items-center justify-center font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Pattern Recognition</h3>
                    <p className="text-white/60 leading-relaxed">
                      Machine learning models identify trends, preferences, and opportunities in your
                      store data to predict future behavior.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full backdrop-blur-md bg-white/5 flex items-center justify-center font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Real-Time Optimization</h3>
                    <p className="text-white/60 leading-relaxed">
                      Recommendations and pricing adjust instantly based on current context,
                      inventory, and customer segment.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full backdrop-blur-md bg-white/5 flex items-center justify-center font-bold">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Continuous Learning</h3>
                    <p className="text-white/60 leading-relaxed">
                      The system learns from every interaction, continuously improving accuracy and
                      effectiveness over time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile: Compact cards */}
              <div className="sm:hidden grid gap-3">
                <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full backdrop-blur-md bg-white/5 flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold mb-1">Data Collection</h3>
                      <p className="text-white/60 text-sm leading-snug">
                        Our AI continuously gathers data on customer behavior, product performance,
                        inventory levels, and market conditions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full backdrop-blur-md bg-white/5 flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold mb-1">Pattern Recognition</h3>
                      <p className="text-white/60 text-sm leading-snug">
                        Machine learning models identify trends, preferences, and opportunities in your
                        store data to predict future behavior.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full backdrop-blur-md bg-white/5 flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold mb-1">Real-Time Optimization</h3>
                      <p className="text-white/60 text-sm leading-snug">
                        Recommendations and pricing adjust instantly based on current context,
                        inventory, and customer segment.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full backdrop-blur-md bg-white/5 flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold mb-1">Continuous Learning</h3>
                      <p className="text-white/60 text-sm leading-snug">
                        The system learns from every interaction, continuously improving accuracy and
                        effectiveness over time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-5 sm:p-8"
            >
              <div className="p-3 sm:p-4 backdrop-blur-md bg-white/5 rounded-lg inline-flex mb-4 sm:mb-6">
                <BarChart3 size={24} className="text-blue-400 sm:w-8 sm:h-8" />
              </div>
              <h2
                className="text-xl sm:text-3xl font-bold mb-3 sm:mb-4"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  letterSpacing: '-0.02em',
                }}
              >
                Dynamic Pricing Strategy
              </h2>
              <p className="text-white/60 leading-relaxed mb-4">
                Our AI pricing engine continuously monitors multiple factors to find the optimal
                price point for each product and customer segment.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Zap size={20} className="text-white/40 flex-shrink-0 mt-1" />
                  <span className="text-white/60">
                    Real-time competitor price monitoring
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap size={20} className="text-white/40 flex-shrink-0 mt-1" />
                  <span className="text-white/60">
                    Demand-based price adjustments
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap size={20} className="text-white/40 flex-shrink-0 mt-1" />
                  <span className="text-white/60">
                    Customer segment pricing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap size={20} className="text-white/40 flex-shrink-0 mt-1" />
                  <span className="text-white/60">Inventory-based optimization</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-5 sm:p-8"
            >
              <div className="p-3 sm:p-4 backdrop-blur-md bg-white/5 rounded-lg inline-flex mb-4 sm:mb-6">
                <Brain size={24} className="text-blue-400 sm:w-8 sm:h-8" />
              </div>
              <h2
                className="text-xl sm:text-3xl font-bold mb-3 sm:mb-4"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  letterSpacing: '-0.02em',
                }}
              >
                Recommendation Engine
              </h2>
              <p className="text-white/60 leading-relaxed mb-4">
                Our recommendation system uses multiple AI models to suggest products that customers
                will love, increasing engagement and sales.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Zap size={20} className="text-white/40 flex-shrink-0 mt-1" />
                  <span className="text-white/60">
                    Collaborative filtering algorithms
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap size={20} className="text-white/40 flex-shrink-0 mt-1" />
                  <span className="text-white/60">
                    Content-based recommendations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap size={20} className="text-white/40 flex-shrink-0 mt-1" />
                  <span className="text-white/60">Contextual awareness</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap size={20} className="text-white/40 flex-shrink-0 mt-1" />
                  <span className="text-white/60">Trend-based suggestions</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-6 sm:p-12"
          >
            <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
              <div className="p-4 backdrop-blur-md bg-white/5 rounded-lg hidden sm:block">
                <ShoppingCart size={40} className="text-blue-400" />
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
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-5 sm:backdrop-blur-none sm:bg-transparent sm:border-0 sm:p-0"
                  >
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-2 flex items-center gap-2">
                      <ShoppingCart size={20} className="flex-shrink-0" />
                      Online Retailers
                    </h3>
                    <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                      Maximize revenue and customer lifetime value with intelligent product
                      recommendations and pricing.
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-5 sm:backdrop-blur-none sm:bg-transparent sm:border-0 sm:p-0"
                  >
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-2 flex items-center gap-2">
                      <TrendingUp size={20} className="flex-shrink-0" />
                      Marketplaces
                    </h3>
                    <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                      Optimize seller performance and buyer experience with smart matching and
                      pricing algorithms.
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-5 sm:backdrop-blur-none sm:bg-transparent sm:border-0 sm:p-0"
                  >
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-2 flex items-center gap-2">
                      <Users size={20} className="flex-shrink-0" />
                      Subscription Services
                    </h3>
                    <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                      Reduce churn and increase upsells with personalized product suggestions and
                      pricing tiers.
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-5 sm:backdrop-blur-none sm:bg-transparent sm:border-0 sm:p-0"
                  >
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-2 flex items-center gap-2">
                      <Brain size={20} className="flex-shrink-0" />
                      Direct-to-Consumer Brands
                    </h3>
                    <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                      Build stronger customer relationships with tailored experiences and strategic
                      pricing.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mt-20 pt-12 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h2
                  className="text-3xl font-bold mb-2"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Want higher AOV and fewer abandoned carts?
                </h2>
                <p className="text-white/60">
                  AI-powered pricing, recommendations, and recovery that move the numbers that matter
                </p>
              </div>
              <Link
                to="/"
                onClick={() => {
                  const contactBtn = document.querySelector('[data-contact-btn]');
                  if (contactBtn) {
                    (contactBtn as HTMLButtonElement).click();
                  }
                }}
                className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white hover:bg-opacity-90 transition-all duration-300 inline-flex items-center gap-2 whitespace-nowrap"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
