import { Building2, ShoppingCart, Heart, Briefcase, Factory, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Industries() {
  const industries = [
    {
      id: 1,
      title: 'E-Commerce & Retail',
      description: 'Complete digital transformation of customer journeys with AI-powered personalization, intelligent inventory optimization, and seamless omnichannel experiences that drive conversion and loyalty.',
      icon: ShoppingCart,
    },
    {
      id: 2,
      title: 'Healthcare',
      description: 'Modernize patient experiences and operational workflows with intelligent automation, predictive analytics, and secure platforms that enhance care delivery while ensuring compliance.',
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
      description: 'Revolutionize property operations with end-to-end digital solutions: automated lead nurturing, intelligent matching, virtual experiences, and predictive market intelligence.',
      icon: Building2,
    },
    {
      id: 5,
      title: 'Manufacturing',
      description: 'Drive operational excellence with smart factory solutions, predictive maintenance, supply chain intelligence, and quality systems that optimize every aspect of production.',
      icon: Factory,
    },
    {
      id: 6,
      title: 'Education',
      description: 'Reimagine learning with adaptive platforms, personalized experiences, intelligent assessment, and data-driven insights that unlock potential for every student.',
      icon: GraduationCap,
    },
  ];

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-16">
            <h1
              className="text-white leading-[0.85] mb-4"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontWeight: 700,
                letterSpacing: '-0.04em',
                fontSize: 'clamp(3rem, 10vw, 6rem)',
              }}
            >
              Industries
            </h1>
            <div className="max-w-2xl">
              <p className="text-lg text-white text-opacity-60 mt-3">
                Industry-specific digital transformation solutions with endless potential.
              </p>
              <p className="text-base text-white text-opacity-60 mt-0.5">
                We architect transformation strategies that address your sector's unique challenges and unlock new opportunities.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <div
                  key={industry.id}
                  className="group relative"
                >
                  <div
                    className="relative rounded-2xl p-8 h-full transition-all duration-500"
                    style={{
                      background: 'linear-gradient(145deg, rgba(20, 20, 20, 0.8), rgba(10, 10, 10, 0.9))',
                      boxShadow: '8px 8px 16px rgba(0, 0, 0, 0.6), -8px -8px 16px rgba(40, 40, 40, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                    }}
                  >
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: 'linear-gradient(145deg, rgba(30, 30, 30, 0.9), rgba(15, 15, 15, 0.95))',
                        boxShadow: 'inset 4px 4px 8px rgba(0, 0, 0, 0.4), inset -4px -4px 8px rgba(50, 50, 50, 0.1)',
                      }}
                    />

                    <div className="relative z-10">
                      <div className="mb-6">
                        <div
                          className="inline-flex p-4 rounded-xl transition-all duration-500"
                          style={{
                            background: 'linear-gradient(135deg, rgba(30, 30, 30, 0.9), rgba(15, 15, 15, 0.95))',
                            boxShadow: 'inset 2px 2px 5px rgba(0, 0, 0, 0.5), inset -2px -2px 5px rgba(60, 60, 60, 0.1), 4px 4px 8px rgba(0, 0, 0, 0.3)',
                          }}
                        >
                          <Icon size={32} className="text-white" />
                        </div>
                      </div>

                      <h3
                        className="text-2xl font-bold leading-tight mb-4"
                        style={{
                          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                          letterSpacing: '-0.02em',
                          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                        }}
                      >
                        {industry.title}
                      </h3>

                      <p
                        className="text-white text-opacity-70 leading-relaxed"
                        style={{
                          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
                        }}
                      >
                        {industry.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-20 pt-12 border-t border-white border-opacity-10">
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
              <p className="text-white text-opacity-60 mb-8">
                We transform businesses across all sectors. Our solutions adapt to your industry's unique requirements, unlocking possibilities you haven't imagined.
              </p>
              <Link
                to="/"
                onClick={(e) => {
                  const contactBtn = document.querySelector('[data-contact-btn]');
                  if (contactBtn) {
                    (contactBtn as HTMLButtonElement).click();
                  }
                }}
                className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white hover:bg-opacity-90 transition-all duration-300 inline-flex items-center gap-2"
              >
                Contact Us <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
