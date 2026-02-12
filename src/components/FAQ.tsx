import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is AI automation and how can it help my business?",
    answer: "AI automation handles repetitive and complex tasks autonomously, freeing you to focus on scaling while it drives efficiency."
  },
  {
    question: "How long does it take to implement AI voice agents?",
    answer: "Our AI voice agents can be deployed in weeks, not months. We use rapid deployment methodologies that enable you to go live quickly while maintaining enterprise-grade quality and reliability. Most implementations are operational within 2-3 weeks."
  },
  {
    question: "What industries does Wexel serve?",
    answer: "We primarily serve real estate, e-commerce, healthcare, and crypto tech companies. Solutions are designed for industry-specific requirements and compliance needs."
  },
  {
    question: "How secure is your AI automation platform?",
    answer: "Security is our top priority. We implement enterprise-grade encryption, comply with industry regulations (GDPR, HIPAA, SOC 2), and follow best practices for data protection. All AI voice agents and automation systems are designed with privacy and security at their core."
  },
  {
    question: "What is the difference between AI CRM and traditional CRM?",
    answer: "Traditional CRM stores data; AI CRM acts on it. Using predictive analytics and automation, AI CRM scores leads and drives engagement, allowing your team to focus on closing deals."
  },
  {
    question: "Can AI voice agents handle complex customer inquiries?",
    answer: "Yes, our AI voice agents are powered by advanced natural language processing and can handle complex, multi-turn conversations. understanding context, intent, and sentiment, providing human-quality responses 24/7. For highly specialized queries, they can seamlessly escalate to human agents."
  },
  {
    question: "How does mass outreach automation maintain personalization?",
    answer: "Our AI-powered outreach automation uses advanced personalization engines that analyze recipient data, behavior, and preferences to create hyper-personalized messages at scale. Each message is uniquely tailored while maintaining brand consistency and compliance."
  },
  {
    question: "What ROI can I expect from AI automation?",
    answer: "Our clients typically see 300% average ROI with increased efficiency, reduced operational costs, improved customer satisfaction, and revenue acceleration. Specific results vary by implementation, but we design every solution to deliver measurable, quantifiable business impact."
  },
  {
    question: "Do you provide training and support after implementation?",
    answer: "Yes, we provide comprehensive training for your team and ongoing support to ensure successful adoption. Our solutions come with documentation, training sessions, and dedicated support channels. We're committed to your long-term success."
  },
  {
    question: "How does AI social media automation work?",
    answer: "Our AI social media automation analyzes your brand voice, audience behavior, and content performance to create, schedule and optimize social media content. It handles posting, engagement, response generation, and performance analytics across multiple platforms automatically."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    const existingSchema = document.querySelector('script[data-schema="faq"]');
    if (existingSchema) {
      existingSchema.textContent = JSON.stringify(faqSchema);
    } else {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-schema', 'faq');
      script.textContent = JSON.stringify(faqSchema);
      document.head.appendChild(script);
    }

    return () => {
      const schemaToRemove = document.querySelector('script[data-schema="faq"]');
      if (schemaToRemove) {
        schemaToRemove.remove();
      }
    };
  }, []);

  return (
    <section className="text-white" aria-label="Frequently asked questions" id="faq">
      <div className="pt-0 pb-8 sm:pb-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
        <h2
          className="text-white text-center mb-4"
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          }}
        >
          Frequently Asked Questions
        </h2>
        <p
          className="text-white/60 text-center mb-12 max-w-2xl mx-auto"
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            lineHeight: '1.6',
          }}
        >
          Everything you need to know about AI automation and our services
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:bg-white/10"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors"
                aria-expanded={openIndex === index}
              >
                <h3
                  className="text-white font-semibold pr-4"
                  style={{
                    fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                  }}
                  itemProp="name"
                >
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={20}
                />
              </button>
              {openIndex === index && (
                <div
                  className="px-6 pb-5 text-white/70"
                  style={{
                    fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
                    lineHeight: '1.7',
                  }}
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text">{faq.answer}</div>
                </div>
              )}
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
