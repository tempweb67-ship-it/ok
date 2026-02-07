import { Building2, ShoppingCart, Heart, Briefcase, Factory, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from './SEO';

export default function Industries() {
  const industries = [
    {
      id: 1,
      title: 'Real Estate',
      description: 'We dissect every friction point in your pipeline -- from first-touch lead capture to post-close retention. Our systems auto-qualify prospects, route hot leads in under 90 seconds, and deploy property-matched nurture sequences that convert at 3x the industry average. You stop chasing. Deals start closing themselves.',
      icon: Building2,
    },
    {
      id: 2,
      title: 'E-Commerce & Retail',
      description: 'We surgically eliminate cart abandonment, dead inventory, and wasted ad spend. Our AI segments buyers by micro-intent, dynamically reprices in real time, and orchestrates cross-channel campaigns that know your customer better than they know themselves. The result: higher AOV, tighter margins, and loyalty that compounds.',
      icon: ShoppingCart,
    },
    {
      id: 3,
      title: 'Healthcare',
      description: 'We operate on the inefficiencies that bleed clinics dry -- missed appointments, intake bottlenecks, compliance blind spots. Our automation handles scheduling, patient follow-ups, and documentation with zero-error precision while keeping every interaction HIPAA-locked. Your staff focuses on care. The system handles everything else.',
      icon: Heart,
    },
    {
      id: 4,
      title: 'Professional Services',
      description: 'We pinpoint exactly where billable hours leak and client handoffs break down. Our systems automate proposal generation, scope tracking, and client communication so your team operates at peak capacity. Less admin overhead, faster delivery cycles, and clients who never feel forgotten.',
      icon: Briefcase,
    },
    {
      id: 5,
      title: 'Manufacturing',
      description: 'We diagnose downtime before it happens. Our predictive maintenance, supply chain monitoring, and quality control systems catch the failures your floor team cannot see yet. Fewer production halts, tighter tolerances, and a supply chain that adapts before disruptions hit your bottom line.',
      icon: Factory,
    },
    {
      id: 6,
      title: 'Education',
      description: 'We isolate exactly where students disengage and where admin workflows stall. Our platforms adapt content delivery in real time, automate enrollment and retention outreach, and surface the data that tells you which interventions actually move the needle. Every decision backed by evidence, not intuition.',
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
              { "@type": "ListItem", "position": 1, "name": "Real Estate", "description": "Precision lead systems, auto-qualification, and deal-closing automation" },
              { "@type": "ListItem", "position": 2, "name": "E-Commerce & Retail", "description": "Cart recovery, dynamic pricing, and micro-intent buyer segmentation" },
              { "@type": "ListItem", "position": 3, "name": "Healthcare", "description": "HIPAA-compliant automation for scheduling, intake, and patient follow-ups" },
              { "@type": "ListItem", "position": 4, "name": "Professional Services", "description": "Billable hour optimization, proposal automation, and client retention systems" },
              { "@type": "ListItem", "position": 5, "name": "Manufacturing", "description": "Predictive maintenance, quality control, and supply chain resilience" },
              { "@type": "ListItem", "position": 6, "name": "Education", "description": "Adaptive learning, enrollment automation, and evidence-based intervention systems" }
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
                We don't do general practice. We specialize.
              </p>
              <p className="text-base text-white/60 mt-0.5">
                Every vertical has its own pathology. We diagnose the exact bottlenecks bleeding your revenue, then build precision systems that eliminate them permanently.
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
                If your vertical isn't listed, it doesn't mean we can't operate on it. We study your industry's specific pain points, build a custom protocol, and deploy systems engineered for your exact situation.
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
