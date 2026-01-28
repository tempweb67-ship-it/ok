import { ArrowLeft, ShoppingCart, TrendingUp, Brain, BarChart3, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FeatureSection, HowItWorksSection, CTASection, BenefitsGrid } from './shared/SolutionPageComponents';

export default function Ecommerce() {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Product Discovery',
      description: 'Transform browsing into buying with AI that predicts desires, understands intent, and surfaces perfect products at the perfect moment—driving conversion and basket value.',
    },
    {
      icon: TrendingUp,
      title: 'Strategic Pricing Intelligence',
      description: 'Maximize profitability with real-time pricing that responds to market dynamics, demand signals, and customer value—optimizing revenue while maintaining competitive advantage.',
    },
    {
      icon: Users,
      title: 'Behavioral Intelligence',
      description: 'Unlock deep customer understanding with AI-powered segmentation that identifies patterns, predicts actions, and enables hyper-targeted experiences that drive loyalty and lifetime value.',
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
    <div className="bg-black min-h-screen text-white">
      <div className="pt-20 sm:pt-32 pb-12 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 text-white text-opacity-60 hover:text-opacity-100 transition-all duration-300 mb-4 sm:mb-8"
          >
            <ArrowLeft size={20} />
            Back to Solutions
          </Link>

          <div className="mb-8 sm:mb-16">
            <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 bg-white bg-opacity-5 rounded-full">
              <ShoppingCart size={18} className="text-white text-opacity-60 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm text-white text-opacity-60 uppercase tracking-wider">
                Commerce Solutions
              </span>
            </div>

            <h1
              className="text-white leading-[0.85] mb-4 sm:mb-6"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontWeight: 700,
                letterSpacing: '-0.04em',
                fontSize: 'clamp(2.5rem, 10vw, 6rem)',
              }}
            >
              E-Commerce Intelligence
            </h1>

            <p className="text-base sm:text-xl text-white text-opacity-70 max-w-3xl leading-relaxed">
              Transform your online business from transactional to exceptional with AI-driven intelligence that maximizes every interaction. Deploy predictive merchandising, dynamic optimization, and real-time insights that turn browsers into buyers and transactions into lasting relationships. Every product discovery becomes personalized, every price point optimized, and every customer experience elevated to drive sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-20">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="border border-white border-opacity-10 rounded-lg p-6 sm:p-8 text-center"
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
                <p className="text-white text-opacity-60 text-sm sm:text-base">{benefit.label}</p>
              </div>
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
                  <div
                    key={index}
                    className="border border-white border-opacity-10 rounded-lg p-5 sm:p-8 hover:border-opacity-30 hover:bg-white hover:bg-opacity-5 transition-all duration-500"
                  >
                    <div className="p-2.5 sm:p-3 bg-white bg-opacity-5 rounded-lg inline-flex mb-3 sm:mb-6">
                      <Icon size={24} className="text-white sm:w-7 sm:h-7" />
                    </div>

                    <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4">{feature.title}</h3>
                    <p className="text-white text-opacity-60 leading-relaxed text-sm sm:text-base">
                      {feature.description}
                    </p>
                  </div>
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
                <div
                  key={index}
                  className="border border-white border-opacity-10 rounded-lg p-5 sm:p-8"
                >
                  <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4">{capability.title}</h3>
                  <p className="text-white text-opacity-60 leading-relaxed text-sm sm:text-base">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-white border-opacity-10 rounded-lg p-6 sm:p-12 mb-10 sm:mb-20">
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
                    <div className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Data Collection</h3>
                    <p className="text-white text-opacity-60 leading-relaxed">
                      Our AI continuously gathers data on customer behavior, product performance,
                      inventory levels, and market conditions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Pattern Recognition</h3>
                    <p className="text-white text-opacity-60 leading-relaxed">
                      Machine learning models identify trends, preferences, and opportunities in your
                      store data to predict future behavior.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Real-Time Optimization</h3>
                    <p className="text-white text-opacity-60 leading-relaxed">
                      Recommendations and pricing adjust instantly based on current context,
                      inventory, and customer segment.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center font-bold">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Continuous Learning</h3>
                    <p className="text-white text-opacity-60 leading-relaxed">
                      The system learns from every interaction, continuously improving accuracy and
                      effectiveness over time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile: Compact cards */}
              <div className="sm:hidden grid gap-3">
                <div className="border border-white border-opacity-10 rounded-xl p-4 bg-white bg-opacity-[0.02]">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white bg-opacity-10 flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold mb-1">Data Collection</h3>
                      <p className="text-white text-opacity-60 text-sm leading-snug">
                        Our AI continuously gathers data on customer behavior, product performance,
                        inventory levels, and market conditions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border border-white border-opacity-10 rounded-xl p-4 bg-white bg-opacity-[0.02]">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white bg-opacity-10 flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold mb-1">Pattern Recognition</h3>
                      <p className="text-white text-opacity-60 text-sm leading-snug">
                        Machine learning models identify trends, preferences, and opportunities in your
                        store data to predict future behavior.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border border-white border-opacity-10 rounded-xl p-4 bg-white bg-opacity-[0.02]">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white bg-opacity-10 flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold mb-1">Real-Time Optimization</h3>
                      <p className="text-white text-opacity-60 text-sm leading-snug">
                        Recommendations and pricing adjust instantly based on current context,
                        inventory, and customer segment.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border border-white border-opacity-10 rounded-xl p-4 bg-white bg-opacity-[0.02]">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white bg-opacity-10 flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold mb-1">Continuous Learning</h3>
                      <p className="text-white text-opacity-60 text-sm leading-snug">
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
            <div className="border border-white border-opacity-10 rounded-lg p-5 sm:p-8">
              <div className="p-3 sm:p-4 bg-white bg-opacity-5 rounded-lg inline-flex mb-4 sm:mb-6">
                <BarChart3 size={24} className="text-white sm:w-8 sm:h-8" />
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
              <p className="text-white text-opacity-60 leading-relaxed mb-4">
                Our AI pricing engine continuously monitors multiple factors to find the optimal
                price point for each product and customer segment.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Zap size={20} className="text-white text-opacity-40 flex-shrink-0 mt-1" />
                  <span className="text-white text-opacity-60">
                    Real-time competitor price monitoring
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap size={20} className="text-white text-opacity-40 flex-shrink-0 mt-1" />
                  <span className="text-white text-opacity-60">
                    Demand-based price adjustments
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap size={20} className="text-white text-opacity-40 flex-shrink-0 mt-1" />
                  <span className="text-white text-opacity-60">
                    Customer segment pricing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap size={20} className="text-white text-opacity-40 flex-shrink-0 mt-1" />
                  <span className="text-white text-opacity-60">Inventory-based optimization</span>
                </li>
              </ul>
            </div>

            <div className="border border-white border-opacity-10 rounded-lg p-5 sm:p-8">
              <div className="p-3 sm:p-4 bg-white bg-opacity-5 rounded-lg inline-flex mb-4 sm:mb-6">
                <Brain size={24} className="text-white sm:w-8 sm:h-8" />
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
              <p className="text-white text-opacity-60 leading-relaxed mb-4">
                Our recommendation system uses multiple AI models to suggest products that customers
                will love, increasing engagement and sales.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Zap size={20} className="text-white text-opacity-40 flex-shrink-0 mt-1" />
                  <span className="text-white text-opacity-60">
                    Collaborative filtering algorithms
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap size={20} className="text-white text-opacity-40 flex-shrink-0 mt-1" />
                  <span className="text-white text-opacity-60">
                    Content-based recommendations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap size={20} className="text-white text-opacity-40 flex-shrink-0 mt-1" />
                  <span className="text-white text-opacity-60">Contextual awareness</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap size={20} className="text-white text-opacity-40 flex-shrink-0 mt-1" />
                  <span className="text-white text-opacity-60">Trend-based suggestions</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border border-white border-opacity-10 rounded-lg p-6 sm:p-12">
            <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
              <div className="p-4 bg-white bg-opacity-5 rounded-lg hidden sm:block">
                <ShoppingCart size={40} className="text-white" />
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
                  <div className="border border-white border-opacity-10 rounded-xl p-5 sm:p-0 sm:border-0 bg-white bg-opacity-[0.02] sm:bg-transparent">
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-2 flex items-center gap-2">
                      <ShoppingCart size={20} className="flex-shrink-0" />
                      Online Retailers
                    </h3>
                    <p className="text-white text-opacity-60 leading-relaxed text-sm sm:text-base">
                      Maximize revenue and customer lifetime value with intelligent product
                      recommendations and pricing.
                    </p>
                  </div>
                  <div className="border border-white border-opacity-10 rounded-xl p-5 sm:p-0 sm:border-0 bg-white bg-opacity-[0.02] sm:bg-transparent">
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-2 flex items-center gap-2">
                      <TrendingUp size={20} className="flex-shrink-0" />
                      Marketplaces
                    </h3>
                    <p className="text-white text-opacity-60 leading-relaxed text-sm sm:text-base">
                      Optimize seller performance and buyer experience with smart matching and
                      pricing algorithms.
                    </p>
                  </div>
                  <div className="border border-white border-opacity-10 rounded-xl p-5 sm:p-0 sm:border-0 bg-white bg-opacity-[0.02] sm:bg-transparent">
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-2 flex items-center gap-2">
                      <Users size={20} className="flex-shrink-0" />
                      Subscription Services
                    </h3>
                    <p className="text-white text-opacity-60 leading-relaxed text-sm sm:text-base">
                      Reduce churn and increase upsells with personalized product suggestions and
                      pricing tiers.
                    </p>
                  </div>
                  <div className="border border-white border-opacity-10 rounded-xl p-5 sm:p-0 sm:border-0 bg-white bg-opacity-[0.02] sm:bg-transparent">
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-2 flex items-center gap-2">
                      <Brain size={20} className="flex-shrink-0" />
                      Direct-to-Consumer Brands
                    </h3>
                    <p className="text-white text-opacity-60 leading-relaxed text-sm sm:text-base">
                      Build stronger customer relationships with tailored experiences and strategic
                      pricing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-12 border-t border-white border-opacity-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h2
                  className="text-3xl font-bold mb-2"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Ready to transform your commerce experience?
                </h2>
                <p className="text-white text-opacity-60">
                  Unlock endless revenue possibilities with intelligent e-commerce transformation
                </p>
              </div>
              <Link
                to="/"
                onClick={(e) => {
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
  );
}
