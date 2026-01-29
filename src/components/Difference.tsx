import Differentiators from './Differentiators';
import { About3 } from './ui/about-3';

export default function Difference() {
  return (
    <div className="bg-black min-h-screen text-white overflow-hidden">
      <div className="relative z-10 pt-20 md:pt-32 pb-12 md:pb-20">
        <Differentiators />

        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-20">
          <About3
            title="Transforming Enterprises Globally"
            description="We partner with forward-thinking organizations to unlock the full potential of AI automation. From startups to Fortune 500 companies, our solutions drive measurable impact across every industry."
            mainImage={{
              src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80",
              alt: "Team collaboration in modern office",
            }}
            secondaryImage={{
              src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&auto=format&fit=crop&q=80",
              alt: "Innovation and technology",
            }}
            breakout={{
              src: "",
              alt: "Wexel AI",
              title: "Built for Scale, Designed for Impact",
              description:
                "Our AI-powered platform delivers enterprise transformation in weeks, not months. Experience the future of business automation with solutions that work 24/7.",
              buttonText: "Explore Solutions",
              buttonUrl: "/solutions",
            }}
            companiesTitle="Trusted by Industry Leaders"
            companies={[
              {
                src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-1.svg",
                alt: "Enterprise Partner",
              },
              {
                src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-2.svg",
                alt: "Tech Company",
              },
              {
                src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-3.svg",
                alt: "Innovation Leader",
              },
              {
                src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-4.svg",
                alt: "Global Corporation",
              },
              {
                src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-5.svg",
                alt: "Digital Pioneer",
              },
              {
                src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-6.svg",
                alt: "Industry Leader",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
