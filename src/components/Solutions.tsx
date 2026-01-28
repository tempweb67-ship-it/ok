import { ArrowRight, BarChart3, PhoneCall, Mail, ShoppingCart, Share2, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Solutions() {
  const features = [
    {
      id: 1,
      title: 'Intelligent AI CRM',
      description: 'Transform customer relationships with AI-driven automation, predictive analytics, and seamless workflow orchestration that drives revenue growth.',
      category: 'Customer Experience',
      icon: BarChart3,
    },
    {
      id: 2,
      title: 'AI Voice Solutions',
      description: 'Deploy autonomous voice agents that revolutionize customer interactions, scale operations infinitely, and deliver human-quality experiences 24/7.',
      category: 'Conversational AI',
      icon: PhoneCall,
    },
    {
      id: 3,
      title: 'Intelligent Mass Outreach Automation',
      description: 'Transform outreach with hyper-personalized campaigns, intelligent segmentation, and AI-powered content that converts at scale.',
      category: 'Digital Marketing',
      icon: Mail,
    },
    {
      id: 4,
      title: 'E-Commerce Intelligence',
      description: 'Elevate your online business with predictive merchandising, dynamic optimization, and AI-driven insights that maximize every transaction.',
      category: 'Commerce Solutions',
      icon: ShoppingCart,
    },
    {
      id: 5,
      title: 'Social Media Transformation',
      description: 'Amplify your brand presence with intelligent automation, performance analytics, and AI-powered engagement strategies across all channels.',
      category: 'Social Intelligence',
      icon: Share2,
    },
    {
      id: 6,
      title: 'Next-Gen Web Experiences',
      description: 'Transform your digital presence with cutting-edge websites that captivate, convert, and scale—engineered for performance, optimized for growth, and designed to dominate.',
      category: 'Digital Presence',
      icon: Globe,
    },
  ];

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="pt-16 sm:pt-32 pb-8 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-6 sm:mb-16">
            <h1
              className="text-white leading-[0.85] mb-2 sm:mb-4"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontWeight: 700,
                letterSpacing: '-0.04em',
                fontSize: 'clamp(2.5rem, 10vw, 6rem)',
              }}
            >
              Solutions
            </h1>
            <div className="max-w-2xl">
              <p className="text-base sm:text-lg text-white mt-1 sm:mt-2">
                Comprehensive digital transformation solutions with endless possibilities.
              </p>
              <p
                className="text-sm sm:text-base mt-0.5"
                style={{
                  color: '#86efac',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  width: 'fit-content',
                  animation: 'typing 2s steps(30) 0.5s forwards'
                }}
              >
                Click on them to learn more.
              </p>
              <style>{`
                @keyframes typing {
                  from { width: 0; }
                  to { width: 100%; }
                }
              `}</style>
            </div>
          </div>

          <div className="space-y-0">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const linkProps = {
                1: "/solutions/aicrm",
                2: "/solutions/voice",
                3: "/solutions/outreach",
                4: "/solutions/ecommerce",
                5: "/solutions/social",
                6: "/solutions/website"
              }[feature.id];

              const content = (
                <div className="py-4 sm:py-12 border-t border-white border-opacity-10 group cursor-pointer transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 sm:gap-6 md:gap-8">
                    <div className="flex items-start gap-3 sm:gap-6 flex-1">
                      <div className="flex-shrink-0">
                        <Icon size={24} className="text-white text-opacity-40 group-hover:text-opacity-100 transition-all duration-500 sm:w-8 sm:h-8" />
                      </div>

                      <div className="flex-1">
                        <p className="text-xs text-white text-opacity-40 mb-1 sm:mb-3 uppercase tracking-[0.2em] font-semibold">
                          {feature.category}
                        </p>

                        <h3
                          className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-1 sm:mb-4 group-hover:text-opacity-90 transition-all duration-300"
                          style={{
                            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                            letterSpacing: '-0.02em',
                          }}
                        >
                          {feature.title}
                        </h3>

                        <p className="text-white text-opacity-50 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl group-hover:text-opacity-70 transition-all duration-300">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-end md:justify-start">
                      <div className="text-white text-opacity-0 group-hover:text-opacity-100 group-hover:translate-x-2 transition-all duration-300">
                        <ArrowRight size={20} className="sm:w-7 sm:h-7" />
                      </div>
                    </div>
                  </div>
                </div>
              );

              return linkProps ? (
                <Link key={feature.id} to={linkProps}>
                  {content}
                </Link>
              ) : (
                <div key={feature.id}>
                  {content}
                </div>
              );
            })}
          </div>

          <div className="mt-6 sm:mt-20 pt-6 sm:pt-12 border-t border-white border-opacity-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 sm:gap-6">
              <div>
                <h2
                  className="text-xl sm:text-3xl font-bold mb-1 sm:mb-2"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Ready to transform your business?
                </h2>
                <p className="text-white text-opacity-60 text-sm sm:text-base">
                  Partner with us to unlock endless possibilities and accelerate your digital evolution
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
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-black font-semibold rounded-lg hover:bg-white hover:bg-opacity-90 transition-all duration-300 inline-flex items-center gap-2 whitespace-nowrap text-sm sm:text-base"
              >
                Get in Touch <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
