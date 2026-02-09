import { Building2, ShoppingCart, Heart, Factory, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from './SEO';

export default function Industries() {
  const industries = [
    {
      id: 1,
      title: 'Real Estate',
      description: 'Lead capture, auto-qualification, and nurture sequences built for how people actually buy property. Leads get routed in seconds, not hours. Follow-ups never slip. Your pipeline stays full without you babysitting it.',
      icon: Building2,
    },
    {
      id: 2,
      title: 'E-Commerce & Retail',
      description: 'Cart abandonment recovery, real-time repricing, and buyer segmentation that actually moves units. We build the systems that turn browsers into repeat customers and cut wasted ad spend to zero.',
      icon: ShoppingCart,
    },
    {
      id: 3,
      title: 'Healthcare',
      description: 'Automated scheduling, intake, patient follow-ups, and documentation. HIPAA-compliant from day one. Your staff stops doing admin work and starts doing the work they were hired for.',
      icon: Heart,
    },
    {
      id: 4,
      title: 'Manufacturing',
      description: 'Predictive maintenance, quality control, and supply chain monitoring that catches problems before they cost you a production run. Less downtime. Tighter tolerances. Faster throughput.',
      icon: Factory,
    },
  ];

  return (
    <>
      <SEO
        title="Industries We Serve - AI Automation for Healthcare, Retail, Real Estate & More | Wexel"
        description="Wexel delivers industry-specific AI automation for real estate, e-commerce, healthcare, manufacturing, and education. Precision systems built for your vertical."
        keywords="AI automation industries, healthcare AI, e-commerce automation, real estate AI, manufacturing AI, education technology, industry-specific AI solutions"
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
            "numberOfItems": 5,
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Real Estate", "description": "Lead capture, auto-qualification, and nurture automation" },
              { "@type": "ListItem", "position": 2, "name": "E-Commerce & Retail", "description": "Cart recovery, repricing, and buyer segmentation" },
              { "@type": "ListItem", "position": 3, "name": "Healthcare", "description": "HIPAA-compliant scheduling, intake, and follow-up automation" },
              { "@type": "ListItem", "position": 4, "name": "Manufacturing", "description": "Predictive maintenance, quality control, and supply chain monitoring" },
              { "@type": "ListItem", "position": 5, "name": "Education", "description": "Adaptive delivery, enrollment automation, and retention outreach" }
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
                Deep expertise. Narrow focus. Real results.
              </p>
              <p className="text-base text-white/60 mt-0.5">
                We know the exact problems in your industry because we have solved them before. No generic solutions. Systems built for how your business actually works.
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
                We learn your industry's specific problems, then build systems engineered for your exact situation. No templates. No guesswork.
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
