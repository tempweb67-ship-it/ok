import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
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
  ogImage = "https://wexel.com/og-image.jpg",
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
    updateMetaTag('property', 'og:type', 'website');
    updateMetaTag('name', 'twitter:title', title);
    updateMetaTag('name', 'twitter:description', description);
    updateMetaTag('name', 'twitter:image', ogImage);
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
      const existingSchema = document.querySelector('script[data-schema="page"]');
      if (existingSchema) {
        existingSchema.textContent = JSON.stringify(schema);
      } else {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-schema', 'page');
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      }
    }

    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": crumb.name,
          "item": crumb.url
        }))
      };

      const existingBreadcrumb = document.querySelector('script[data-schema="breadcrumb"]');
      if (existingBreadcrumb) {
        existingBreadcrumb.textContent = JSON.stringify(breadcrumbSchema);
      } else {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-schema', 'breadcrumb');
        script.textContent = JSON.stringify(breadcrumbSchema);
        document.head.appendChild(script);
      }
    }

    if (articleData) {
      const articleSchema = {
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
            "url": "https://wexel.com/wexel.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": canonical
        }
      };

      const existingArticle = document.querySelector('script[data-schema="article"]');
      if (existingArticle) {
        existingArticle.textContent = JSON.stringify(articleSchema);
      } else {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-schema', 'article');
        script.textContent = JSON.stringify(articleSchema);
        document.head.appendChild(script);
      }
    }

    return () => {
      const breadcrumbToRemove = document.querySelector('script[data-schema="breadcrumb"]');
      if (breadcrumbToRemove) {
        breadcrumbToRemove.remove();
      }
      const articleToRemove = document.querySelector('script[data-schema="article"]');
      if (articleToRemove) {
        articleToRemove.remove();
      }
    };
  }, [title, description, keywords, canonical, ogImage, schema, breadcrumbs, articleData]);

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
