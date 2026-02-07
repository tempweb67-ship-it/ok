import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  schema?: object;
  breadcrumbs?: Array<{ name: string; url: string }>;
  articleData?: {
    headline: string;
    datePublished?: string;
    dateModified?: string;
    author?: string;
  };
}

export default function SEO({
  title,
  description,
  keywords = "AI automation, voice automation, AI voice agents, digital transformation, business automation",
  canonical = "https://wexel.com/",
  ogImage = "https://wexel.com/wexel.jpg",
  ogType = "website",
  schema,
  breadcrumbs,
  articleData
}: SEOProps) {
  useEffect(() => {
    document.title = title;

    updateMetaTag('name', 'description', description);
    updateMetaTag('name', 'keywords', keywords);
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:url', canonical);
    updateMetaTag('property', 'og:image', ogImage);
    updateMetaTag('property', 'og:image:alt', title);
    updateMetaTag('property', 'og:type', ogType);
    updateMetaTag('name', 'twitter:title', title);
    updateMetaTag('name', 'twitter:description', description);
    updateMetaTag('name', 'twitter:image', ogImage);
    updateMetaTag('name', 'twitter:image:alt', title);
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.setAttribute('href', canonical);
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = canonical;
      document.head.appendChild(link);
    }

    if (schema) {
      upsertSchema('page', schema);
    }

    if (breadcrumbs && breadcrumbs.length > 0) {
      upsertSchema('breadcrumb', {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": crumb.name,
          "item": crumb.url
        }))
      });
    }

    if (articleData) {
      upsertSchema('article', {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": articleData.headline,
        "description": description,
        "image": ogImage,
        "datePublished": articleData.datePublished || new Date().toISOString(),
        "dateModified": articleData.dateModified || new Date().toISOString(),
        "author": {
          "@type": "Organization",
          "name": articleData.author || "Wexel"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Wexel",
          "logo": {
            "@type": "ImageObject",
            "url": "https://wexel.com/wexel.jpg"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": canonical
        }
      });
    }

    return () => {
      removeSchema('page');
      removeSchema('breadcrumb');
      removeSchema('article');
    };
  }, [title, description, keywords, canonical, ogImage, ogType, schema, breadcrumbs, articleData]);

  return null;
}

function updateMetaTag(attribute: string, value: string, content: string) {
  let element = document.querySelector(`meta[${attribute}="${value}"]`);
  if (element) {
    element.setAttribute('content', content);
  } else {
    element = document.createElement('meta');
    element.setAttribute(attribute, value);
    element.setAttribute('content', content);
    document.head.appendChild(element);
  }
}

function upsertSchema(id: string, data: object) {
  const existing = document.querySelector(`script[data-schema="${id}"]`);
  if (existing) {
    existing.textContent = JSON.stringify(data);
  } else {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema', id);
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }
}

function removeSchema(id: string) {
  const el = document.querySelector(`script[data-schema="${id}"]`);
  if (el) el.remove();
}
