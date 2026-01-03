import { ArrowLeft, ShoppingCart, TrendingUp, Brain, BarChart3, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FeatureSection, HowItWorksSection, CTASection, BenefitsGrid } from './shared/SolutionPageComponents';

export default function Ecommerce() {
  const features = [
    {
      icon: Brain,
      title: 'Predictive Recommendations',
      description: 'Advanced AI analyzes browsing patterns, purchase history, and user behavior to suggest products with laser precision.',
    },
    {
      icon: TrendingUp,
      title: 'Dynamic Pricing',
      description: 'Real-time price optimization based on demand, inventory levels, competitor pricing, and customer segments.',
    },
    {
      icon: Users,
      title: 'Customer Segmentation',
      description: 'Automatically group customers by behavior, preferences, and value to deliver targeted experiences and offers.',
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
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 text-white text-opacity-60 hover:text-opacity-100 transition-all duration-300 mb-8"
          >
            <ArrowLeft size={20} />
            Back to Solutions
          </Link>

          <div className="mb-16">
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-white bg-opacity-5 rounded-full">
              <ShoppingCart size={20} className="text-white text-opacity-60" />
              <span className="text-sm text-white text-opacity-60 uppercase tracking-wider">
                Ecommerce
              </span>
            </div>

            <h1
              className="text-white leading-[0.85] mb-6"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontWeight: 700,
                letterSpacing: '-0.04em',
                fontSize: 'clamp(3rem, 10vw, 6rem)',
              }}
            >
              AI Store Optimization
            </h1>

            <p className="text-xl text-white text-opacity-70 max-w-3xl leading-relaxed">
              Transform your online store into a revenue-generating machine with AI-powered
              optimization. Maximize revenue with predictive product recommendations and dynamic
              pricing that adapts to buyer behavior, inventory levels, and market conditions in
              real-time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="border border-white border-opacity-10 rounded-lg p-8 text-center"
              >
                <div
                  className="text-5xl font-bold mb-2"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    letterSpacing: '-0.03em',
                  }}
                >
                  {benefit.stat}
                </div>
                <p className="text-white text-opacity-60">{benefit.label}</p>
              </div>
            ))}
          </div>

          <div className="mb-20">
            <h2
              className="text-4xl font-bold mb-12"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                letterSpacing: '-0.03em',
              }}
            >
              Key Features
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="border border-white border-opacity-10 rounded-lg p-8 hover:border-opacity-30 hover:bg-white hover:bg-opacity-5 transition-all duration-500"
                  >
                    <div className="p-3 bg-white bg-opacity-5 rounded-lg inline-flex mb-6">
                      <Icon size={28} className="text-white" />
                    </div>

                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-white text-opacity-60 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

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
                <div
                  key={index}
                  className="border border-white border-opacity-10 rounded-lg p-8"
                >
                  <h3 className="text-2xl font-bold mb-4">{capability.title}</h3>
                  <p className="text-white text-opacity-60 leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-white border-opacity-10 rounded-lg p-12 mb-20">
            <div className="max-w-3xl">
              <h2
                className="text-4xl font-bold mb-6"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  letterSpacing: '-0.03em',
                }}
              >
                How It Works
              </h2>

              <div className="space-y-8">
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
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            <div className="border border-white border-opacity-10 rounded-lg p-8">
              <div className="p-4 bg-white bg-opacity-5 rounded-lg inline-flex mb-6">
                <BarChart3 size={32} className="text-white" />
              </div>
              <h2
                className="text-3xl font-bold mb-4"
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

            <div className="border border-white border-opacity-10 rounded-lg p-8">
              <div className="p-4 bg-white bg-opacity-5 rounded-lg inline-flex mb-6">
                <Brain size={32} className="text-white" />
              </div>
              <h2
                className="text-3xl font-bold mb-4"
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

          <div className="border border-white border-opacity-10 rounded-lg p-12">
            <div className="flex items-start gap-8">
              <div className="p-4 bg-white bg-opacity-5 rounded-lg">
                <ShoppingCart size={40} className="text-white" />
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
                      <ShoppingCart size={20} />
                      Online Retailers
                    </h3>
                    <p className="text-white text-opacity-60 leading-relaxed">
                      Maximize revenue and customer lifetime value with intelligent product
                      recommendations and pricing.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      <TrendingUp size={20} />
                      Marketplaces
                    </h3>
                    <p className="text-white text-opacity-60 leading-relaxed">
                      Optimize seller performance and buyer experience with smart matching and
                      pricing algorithms.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      <Users size={20} />
                      Subscription Services
                    </h3>
                    <p className="text-white text-opacity-60 leading-relaxed">
                      Reduce churn and increase upsells with personalized product suggestions and
                      pricing tiers.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      <Brain size={20} />
                      Direct-to-Consumer Brands
                    </h3>
                    <p className="text-white text-opacity-60 leading-relaxed">
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
                  Ready to optimize your store?
                </h2>
                <p className="text-white text-opacity-60">
                  Let's discuss how AI can transform your ecommerce performance
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
