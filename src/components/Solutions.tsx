import { ArrowRight, BarChart3, PhoneCall, Mail, ShoppingCart, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Solutions() {
  const features = [
    {
      id: 1,
      title: 'AI-Powered CRM Solutions',
      description: 'Automating workflows and predicting customer needs with smart data insights.',
      category: 'Design Intelligence',
      icon: BarChart3,
    },
    {
      id: 2,
      title: 'Autonomous Voice Agents',
      description: 'Human-like AI that handles inbound and outbound calls, books appointments, and qualifies leads 24/7.',
      category: 'Voice',
      icon: PhoneCall,
    },
    {
      id: 3,
      title: 'Hyper-Personalized Email',
      description: 'Send thousands of tailored emails that bypass spam filters and read like they were written by hand.',
      category: 'Marketing',
      icon: Mail,
    },
    {
      id: 4,
      title: 'AI Store Optimization',
      description: 'Maximize revenue with predictive product recommendations and dynamic pricing that adapts to buyer behavior.',
      category: 'Ecommerce',
      icon: ShoppingCart,
    },
    {
      id: 5,
      title: 'Social Media Automation',
      description: 'Save hours every week with AI-powered scheduling, content optimization, and engagement across all platforms.',
      category: 'Social Media',
      icon: Share2,
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
              Solutions
            </h1>
            <div className="max-w-2xl">
              <p className="text-lg text-white mt-2">
                Scale with vision seamlessly.
              </p>
              <p
                className="text-base mt-0.5"
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
                5: "/solutions/social"
              }[feature.id];

              const content = (
                <div className="py-12 border-t border-white border-opacity-10 group cursor-pointer transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                    <div className="flex items-start gap-6 flex-1">
                      <div className="flex-shrink-0">
                        <Icon size={32} className="text-white text-opacity-40 group-hover:text-opacity-100 transition-all duration-500" />
                      </div>

                      <div className="flex-1">
                        <p className="text-xs text-white text-opacity-40 mb-3 uppercase tracking-[0.2em] font-semibold">
                          {feature.category}
                        </p>

                        <h3
                          className="text-3xl md:text-4xl font-bold leading-tight mb-4 group-hover:text-opacity-90 transition-all duration-300"
                          style={{
                            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                            letterSpacing: '-0.02em',
                          }}
                        >
                          {feature.title}
                        </h3>

                        <p className="text-white text-opacity-50 text-lg leading-relaxed max-w-2xl group-hover:text-opacity-70 transition-all duration-300">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-end md:justify-start">
                      <div className="text-white text-opacity-0 group-hover:text-opacity-100 group-hover:translate-x-2 transition-all duration-300">
                        <ArrowRight size={28} />
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
                  Ready to start something amazing?
                </h2>
                <p className="text-white text-opacity-60">
                  Let's collaborate and bring your vision to life
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
                Get in Touch <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
