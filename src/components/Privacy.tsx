import { Shield, Lock, Eye, Database, Bell, Mail } from 'lucide-react';
import SEO from './SEO';

export default function Privacy() {
  const sections = [
    {
      icon: Database,
      title: 'Information We Collect',
      content: [
        {
          subtitle: 'Information You Provide',
          text: 'We collect information you provide directly to us, including name, email address, company name, and any other information you choose to provide when contacting us or using our services.',
        },
        {
          subtitle: 'Automatically Collected Information',
          text: 'We automatically collect certain information about your device and how you interact with our website, including IP address, browser type, operating system, and usage data.',
        },
      ],
    },
    {
      icon: Lock,
      title: 'How We Use Your Information',
      content: [
        {
          subtitle: 'Service Delivery',
          text: 'We use your information to provide, maintain, and improve our services, respond to your inquiries, and communicate with you about our offerings.',
        },
        {
          subtitle: 'Analytics and Improvement',
          text: 'We analyze usage patterns to enhance user experience, develop new features, and optimize our platform performance.',
        },
      ],
    },
    {
      icon: Shield,
      title: 'Data Security',
      content: [
        {
          subtitle: 'Protection Measures',
          text: 'We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction.',
        },
        {
          subtitle: 'Encryption',
          text: 'All data transmission is encrypted using SSL/TLS protocols. Sensitive information is stored using advanced encryption standards.',
        },
      ],
    },
    {
      icon: Eye,
      title: 'Information Sharing',
      content: [
        {
          subtitle: 'Third-Party Services',
          text: 'We may share your information with trusted third-party service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.',
        },
        {
          subtitle: 'Legal Requirements',
          text: 'We may disclose your information when required by law, regulation, legal process, or governmental request.',
        },
      ],
    },
  ];

  const rights = [
    {
      title: 'Access',
      description: 'Request access to the personal information we hold about you.',
    },
    {
      title: 'Correction',
      description: 'Request correction of inaccurate or incomplete information.',
    },
    {
      title: 'Deletion',
      description: 'Request deletion of your personal information, subject to legal obligations.',
    },
    {
      title: 'Opt-Out',
      description: 'Opt out of marketing communications at any time.',
    },
  ];

  return (
    <>
      <SEO
        title="Privacy Policy - How Wexel Protects Your Data | Wexel"
        description="Read Wexel's privacy policy to understand how we collect, use, and protect your personal information. We implement enterprise-grade security measures including SSL/TLS encryption and comply with GDPR regulations."
        keywords="Wexel privacy policy, data protection, GDPR compliance, data security, personal information protection, cookie policy, data privacy rights"
        canonical="https://wexel.com/privacy"
        breadcrumbs={[
          { name: 'Home', url: 'https://wexel.com/' },
          { name: 'Privacy Policy', url: 'https://wexel.com/privacy' }
        ]}
      />
      <div className="text-white" style={{ minHeight: '100dvh' }}>
        <div className="pt-32 pb-20">
          <div className="max-w-5xl mx-auto px-4 md:px-8">
            <div className="mb-24">
              <div className="flex items-center gap-3 mb-6">
                <Shield size={32} className="text-white" />
              </div>
              <h1
                className="text-white leading-[0.85] mb-6"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  fontWeight: 700,
                  letterSpacing: '-0.04em',
                  fontSize: 'clamp(3rem, 10vw, 6rem)',
                }}
              >
                Privacy Policy
              </h1>
              <p
                className="text-xl md:text-2xl text-white/70 max-w-3xl leading-snug"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  letterSpacing: '-0.02em',
                }}
              >
                Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information.
              </p>
              <p className="text-white/50 mt-4">
                Last updated: December 30, 2025
              </p>
            </div>

            <div className="space-y-16 mb-24">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <div key={index} className="border-l-2 border-white/10 pl-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-2 bg-white/5 rounded-lg">
                        <Icon size={24} className="text-white" />
                      </div>
                      <h2
                        className="text-3xl font-bold"
                        style={{
                          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {section.title}
                      </h2>
                    </div>

                    <div className="space-y-6">
                      {section.content.map((item, idx) => (
                        <div key={idx}>
                          <h3 className="text-lg font-semibold mb-2 text-white/90">
                            {item.subtitle}
                          </h3>
                          <p className="text-white/60 leading-relaxed">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="border-t border-white/10 pt-16 mb-24">
              <h2
                className="text-3xl md:text-4xl font-bold mb-8"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  letterSpacing: '-0.02em',
                }}
              >
                Your Rights
              </h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                You have certain rights regarding your personal information. We are committed to honoring these rights and providing you with control over your data.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {rights.map((right, index) => (
                  <div
                    key={index}
                    className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-all duration-300"
                  >
                    <h3 className="text-xl font-semibold mb-2">{right.title}</h3>
                    <p className="text-white/60 leading-relaxed">
                      {right.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 pt-16 mb-24">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-2 bg-white/5 rounded-lg">
                  <Bell size={24} className="text-white" />
                </div>
                <h2
                  className="text-3xl font-bold"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Cookies and Tracking
                </h2>
              </div>
              <p className="text-white/60 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors are coming from. You can control cookies through your browser settings.
              </p>
              <p className="text-white/60 leading-relaxed">
                Essential cookies are necessary for the website to function properly, while analytics cookies help us improve our services. You may disable non-essential cookies without affecting core functionality.
              </p>
            </div>

            <div className="border-t border-white/10 pt-16">
              <div className="bg-white/5 rounded-lg p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Mail size={28} className="text-white" />
                  </div>
                  <h2
                    className="text-3xl font-bold"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    Questions or Concerns?
                  </h2>
                </div>
                <p className="text-white/70 leading-relaxed mb-6">
                  If you have any questions about this Privacy Policy or how we handle your personal information, please don't hesitate to contact us. We're here to help and ensure your privacy is protected.
                </p>
                <div className="space-y-2 text-white/60">
                  <p>Email: business@wexel.ai</p>
                  <p>We are here for you. Let's talk! :) </p>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-white/50 text-sm leading-relaxed max-w-3xl mx-auto">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
