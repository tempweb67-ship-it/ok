import SEO from './SEO';
import Breadcrumbs from './Breadcrumbs';

export default function Difference() {
  const features = [
    {
      id: 1,
      title: 'Transformation-First Mindset',
      metric: '10x',
      metricLabel: 'Innovation Velocity',
      tagline: 'Future-ready architecture from day one',
    },
    {
      id: 2,
      title: 'Rapid Deployment',
      description: 'Live in weeks, not months. Our process is built for speed without cutting corners.',
      metric: '5x',
      metricLabel: 'Faster Time to Market',
      tagline: 'Live in weeks with immediate impact',
    },
    {
      id: 3,
      title: 'Measurable Impact',
      description: 'Every system we build gets measured against real numbers. If it does not move the needle, we fix it or cut it.',
      metric: '300%',
      metricLabel: 'Average ROI',
      tagline: 'Quantifiable results from day one',
    },
    {
      id: 4,
      title: 'Always-On Intelligence',
      description: 'Systems that run around the clock with zero downtime. Consistent performance at any scale.',
      metric: '24/7',
      metricLabel: 'Unlimited Scalability',
      tagline: 'Superhuman performance, infinite scale',
    },
  ];

  return (
    <>
      <SEO
        title="What Makes Wexel Different - Fast Deployment, Measurable Results | Wexel"
        description="We ship AI automation in weeks, not months. 300% average ROI. 24/7 systems. Measurable results from day one. Here is how we work differently."
        keywords="AI automation agency, fast AI deployment, AI ROI, business automation results, AI implementation, Wexel difference"
        canonical="https://wexel.com/difference"
        breadcrumbs={[
          { name: "What Makes Us Different", url: "https://wexel.com/difference" }
        ]}
        articleData={{
          headline: "What Makes Wexel Different - Fast Deployment, Measurable Results",
          datePublished: "2024-01-01T00:00:00Z",
          dateModified: new Date().toISOString(),
          author: "Wexel"
        }}
      />
      <div className="text-white" style={{ minHeight: '100dvh' }}>
        <div className="relative z-10 pt-24 pb-20">
          <Breadcrumbs items={[
            { name: "What Makes Us Different", url: "/difference" }
          ]} />
          <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-16 text-center">
            <h1
              className="text-white leading-[0.95] mb-6"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontWeight: 700,
                letterSpacing: '-0.05em',
                fontSize: 'clamp(2.25rem, 9vw, 7rem)',
              }}
            >
              Built for the AI Era
            </h1>

            <p
              className="text-white/60 max-w-2xl mx-auto"
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                lineHeight: '1.5',
                fontWeight: 400,
              }}
            >
            
            </p>
          </div>

          <div className="space-y-8">
            {features.map((item) => (
              <FeatureCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

interface FeatureItem {
  id: number;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  tagline: string;
}

function FeatureCard({ item }: { item: FeatureItem }) {
  return (
    <div className="group relative rounded-2xl p-8 backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
      <div className="text-center">
        <h2
          className="text-white leading-[0.95] mb-6"
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          }}
        >
          {item.title}
        </h2>

        <div className="mb-8">
          <div
            className="text-white mb-2"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontSize: 'clamp(3rem, 8vw, 5rem)',
              fontWeight: 600,
              letterSpacing: '-0.04em',
              lineHeight: '0.9',
            }}
          >
            {item.metric}
          </div>
          <div
            className="text-white/30"
            style={{
              fontSize: 'clamp(0.75rem, 1.25vw, 0.875rem)',
              fontWeight: 500,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            {item.metricLabel}
          </div>
        </div>

        <p
          className="text-white/70 leading-[1.6] mb-4"
          style={{
            fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
            fontWeight: 400,
          }}
        >
          {item.description}
        </p>

        <p
          className="text-white font-medium"
          style={{
            fontSize: 'clamp(0.875rem, 1.25vw, 1rem)',
          }}
        >
          {item.tagline}
        </p>
      </div>
    </div>
  );
}
