import { Building2, ShoppingCart, Heart, Briefcase, Factory, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from './SEO';

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
    <>
      <SEO
        title="Industries We Serve - AI Automation for Healthcare, Retail, Real Estate & More | Wexel"
        description="Wexel delivers industry-specific AI automation solutions for e-commerce, healthcare, professional services, real estate, manufacturing, and education. Custom digital transformation strategies for your sector."
        keywords="AI automation industries, healthcare AI, e-commerce automation, real estate AI, manufacturing AI, education technology, professional services automation, industry-specific AI solutions"
        canonical="https://wexel.com/industries"
        breadcrumbs={[
          { name: 'Home', url: 'https://wexel.com/' },
          { name: 'Industries', url: 'https://wexel.com/industries' }
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Industries We Serve",
          "description": "Industry-specific AI automation and digital transformation solutions",
          "url": "https://wexel.com/industries",
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": ["h1", ".hero-description"]
          },
          "mainEntity": {
            "@type": "ItemList",
            "name": "Industries Served by Wexel",
            "numberOfItems": 6,
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "E-Commerce & Retail", "description": "AI-powered personalization, intelligent inventory optimization, and omnichannel experiences" },
              { "@type": "ListItem", "position": 2, "name": "Healthcare", "description": "Intelligent automation, predictive analytics, and secure platforms for care delivery" },
              { "@type": "ListItem", "position": 3, "name": "Professional Services", "description": "AI-driven insights, automated workflows, and intelligent systems for service delivery" },
              { "@type": "ListItem", "position": 4, "name": "Real Estate", "description": "Automated lead nurturing, intelligent matching, and predictive market intelligence" },
              { "@type": "ListItem", "position": 5, "name": "Manufacturing", "description": "Smart factory solutions, predictive maintenance, and supply chain intelligence" },
              { "@type": "ListItem", "position": 6, "name": "Education", "description": "Adaptive learning platforms, personalized experiences, and data-driven insights" }
            ]
          }
        }}
      />
      <div className="text-white" style={{ minHeight: '100dvh' }}>
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
              <p className="text-lg text-white/60 mt-3">
                Industry-specific digital transformation solutions with endless potential.
              </p>
              <p className="text-base text-white/60 mt-0.5">
                We architect transformation strategies that address your sector's unique challenges and unlock new opportunities.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <article
                  key={industry.id}
                  className="group relative"
                >
                  <div className="relative rounded-2xl p-8 h-full backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
                    <div className="relative z-10">
                      <div className="mb-6">
                        <div className="inline-flex p-4 rounded-xl backdrop-blur-md bg-white/10 transition-all duration-500">
                          <Icon size={32} className="text-white" />
                        </div>
                      </div>

                      <h3
                        className="text-2xl font-bold leading-tight mb-4"
                        style={{
                          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {industry.title}
                      </h3>

                      <p className="text-white/70 leading-relaxed">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-20 pt-12 border-t border-white/10">
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
              <p className="text-white/60 mb-8">
                We transform businesses across all sectors. Our solutions adapt to your industry's unique requirements, unlocking possibilities you haven't imagined.
              </p>
              <Link
                to="/"
                onClick={() => {
                  const contactBtn = document.querySelector('[data-contact-btn]');
                  if (contactBtn) {
                    (contactBtn as HTMLButtonElement).click();
                  }
                }}
                className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300 inline-flex items-center gap-2"
              >
                Contact Us <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
