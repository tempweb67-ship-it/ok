import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from './SEO';

export default function Explore() {
  const menuItems = [
    { name: "Solutions", path: "/solutions" },
    { name: "Industries", path: "/industries" },
    { name: "What's Different", path: "/difference" },
    { name: "Our Vision", path: "/vision" },
    { name: "Privacy Policy", path: "/privacy" }
  ];

  return (
    <>
      <SEO
        title="Explore Wexel - AI Automation Solutions, Industries & Vision | Wexel"
        description="Explore Wexel's comprehensive AI automation offerings. Browse our solutions for voice AI, CRM, outreach, e-commerce, and social media. Learn about the industries we serve and our vision for digital transformation."
        keywords="AI automation solutions, Wexel services, AI voice agents, AI CRM, marketing automation, digital transformation services, business AI solutions"
        canonical="https://wexel.com/explore"
        breadcrumbs={[
          { name: 'Home', url: 'https://wexel.com/' },
          { name: 'Explore', url: 'https://wexel.com/explore' }
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Explore Wexel",
          "description": "Navigate Wexel's AI automation solutions, industry expertise, and company vision",
          "url": "https://wexel.com/explore",
          "isPartOf": { "@type": "WebSite", "name": "Wexel", "url": "https://wexel.com" },
          "mainEntity": {
            "@type": "SiteNavigationElement",
            "name": "Main Navigation",
            "hasPart": [
              { "@type": "WebPage", "name": "Solutions", "url": "https://wexel.com/solutions" },
              { "@type": "WebPage", "name": "Industries", "url": "https://wexel.com/industries" },
              { "@type": "WebPage", "name": "What's Different", "url": "https://wexel.com/difference" },
              { "@type": "WebPage", "name": "Our Vision", "url": "https://wexel.com/vision" }
            ]
          }
        }}
      />
      <div className="text-white" style={{ minHeight: '100dvh' }}>
        <div className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="mb-8">
              <h1
              className="text-white leading-[0.85] mb-4"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontWeight: 700,
                letterSpacing: '-0.04em',
                fontSize: 'clamp(3rem, 10vw, 6rem)',
              }}
            >
              Explore
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mt-6">
              Discover how we drive digital transformation and unlock endless possibilities for forward-thinking organizations
            </p>
          </div>

          <nav aria-label="Site sections" className="space-y-4">
            {menuItems.map((item, index) => {
              const content = (
                <div className="flex items-center justify-between">
                  <h3
                    className="text-3xl md:text-4xl font-bold"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {item.name}
                  </h3>
                  <div className="text-white">
                    <Plus size={32} />
                  </div>
                </div>
              );

              return item.path ? (
                <Link
                  key={index}
                  to={item.path}
                  className="group cursor-pointer border-b border-white/10 pb-4 hover:border-blue-500/50 transition-all duration-300 block"
                >
                  {content}
                </Link>
              ) : (
                <div
                  key={index}
                  className="group cursor-pointer border-b border-white/10 pb-4 hover:border-blue-500/50 transition-all duration-300"
                >
                  {content}
                </div>
              );
            })}
          </nav>
          </div>
        </div>
      </div>
    </>
  );
}
