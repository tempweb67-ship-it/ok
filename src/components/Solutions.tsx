import { ArrowRight, BarChart3, PhoneCall, Mail, ShoppingCart, Share2, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from './SEO';

export default function Solutions() {
  const features = [
    {
      id: 1,
      title: 'Intelligent AI CRM',
      description: 'Lead scoring, automated follow-ups, and pipeline visibility. Your CRM works while your team sells.',
      category: 'Customer Experience',
      icon: BarChart3,
    },
    {
      id: 2,
      title: 'AI Voice Solutions',
      description: 'AI picks up the phone, qualifies leads, books appointments, handles support. Sounds human. Works 24/7.',
      category: 'Conversational AI',
      icon: PhoneCall,
    },
    {
      id: 3,
      title: 'Mass Outreach Automation',
      description: 'Thousands of personalized emails sent at scale. Each one tailored per prospect. High deliverability. Real replies.',
      category: 'Digital Marketing',
      icon: Mail,
    },
    {
      id: 4,
      title: 'E-Commerce Intelligence',
      description: 'Smart product recs, dynamic pricing, and cart recovery. Built to increase AOV and cut abandoned checkouts.',
      category: 'Commerce Solutions',
      icon: ShoppingCart,
    },
    {
      id: 5,
      title: 'Autonomous Social Media',
      description: 'Content scheduling, engagement automation, and analytics across every platform. Your social runs itself.',
      category: 'Social Intelligence',
      icon: Share2,
    },
    {
      id: 6,
      title: 'Next-Gen Web Experiences',
      description: 'Fast, responsive, conversion-focused websites. SEO-optimized. Built to load in under 2 seconds and turn visitors into customers.',
      category: 'Digital Presence',
      icon: Globe,
    },
  ];

  return (
    <>
      <SEO
        title="AI Automation Solutions - Voice, CRM, Outreach, E-Commerce, Social & Web | Wexel"
        description="Six core AI automation systems. Voice agents, CRM, mass outreach, e-commerce, social media, and web development. Each one built to run without babysitting."
        keywords="AI automation solutions, AI voice agents, AI CRM, mass outreach automation, e-commerce AI, social media automation, web development, Wexel"
        canonical="https://wexel.com/solutions"
      />
      <div className="text-white" style={{ minHeight: '100dvh' }}>
      <div className="pt-20 sm:pt-32 pb-8 sm:pb-20">
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
              <p className="text-base sm:text-lg mt-1 sm:mt-2" style={{ color: '#ffffff' }}>
                Built from the ground up on demand.
              </p>
              <p className="text-sm sm:text-base mt-0.5 text-white/40">
                Six emerging solutions for the year.
              </p>
            </div>
          </div>

          <div className="space-y-2 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4 lg:gap-5">
            {features.map((feature) => {
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
                <div className="group cursor-pointer h-full rounded-2xl border border-white/[0.12] bg-white/[0.06] backdrop-blur-xl hover:border-blue-500/30 hover:bg-white/[0.10] transition-all duration-300 p-5 sm:p-7 lg:p-8 flex flex-col">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="flex-shrink-0 p-2.5 sm:p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                      <Icon size={20} className="text-blue-400 sm:w-6 sm:h-6" />
                    </div>
                    <p className="text-xs text-white/40 uppercase tracking-[0.2em] font-semibold">
                      {feature.category}
                    </p>
                  </div>

                  <h3
                    className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight mb-2 sm:mb-3"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {feature.title}
                  </h3>

                  <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-5 sm:mb-8 flex-1">
                    {feature.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 sm:pt-5 border-t border-white/[0.06]">
                    <span className="text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                      Learn more
                    </span>
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:border-blue-500/40 transition-all duration-300">
                      <ArrowRight size={14} className="text-blue-400 group-hover:translate-x-0.5 transition-transform duration-300 sm:w-4 sm:h-4" />
                    </div>
                  </div>
                </div>
              );

              return linkProps ? (
                <Link key={feature.id} to={linkProps} className="block">
                  {content}
                </Link>
              ) : (
                <div key={feature.id}>
                  {content}
                </div>
              );
            })}
          </div>

          <div className="mt-6 sm:mt-20 pt-6 sm:pt-12 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 sm:gap-6">
              <div>
                <h2
                  className="text-xl sm:text-3xl font-bold mb-1 sm:mb-2"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Need a system that works while you sleep?
                </h2>
                <p className="text-white/60 text-sm sm:text-base">
                  Tell us what is broken. We will tell you exactly how to fix it.
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
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300 inline-flex items-center gap-2 whitespace-nowrap text-sm sm:text-base"
              >
                Get in Touch <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
