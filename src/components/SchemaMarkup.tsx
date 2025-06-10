import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SchemaMarkupProps {
  type: 'organization' | 'website' | 'service' | 'article' | 'person' | 'review' | 'faq' | 'breadcrumb' | 'localBusiness';
  data: any;
}

const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ type, data }) => {
  const generateSchema = () => {
    const baseContext = "https://schema.org";
    
    switch (type) {
      case 'organization':
        return {
          "@context": baseContext,
          "@type": "Organization",
          "name": "Logical Marketing",
          "alternateName": "KingMarketing",
          "url": "https://logicalmarketing.com",
          "logo": "https://logicalmarketing.com/logo.png",
          "description": "Leading digital marketing agency helping businesses grow with data-driven strategies. Get 300% more conversions with our proven marketing systems.",
          "foundingDate": "2019",
          "founders": [
            {
              "@type": "Person",
              "name": "Sarah Johnson",
              "jobTitle": "CEO & Founder"
            }
          ],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Business District",
            "addressLocality": "New York",
            "addressRegion": "NY",
            "postalCode": "10001",
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-123-4567",
            "contactType": "customer service",
            "email": "hello@logicalmarketing.com",
            "availableLanguage": "English"
          },
          "sameAs": [
            "https://www.facebook.com/logicalmarketing",
            "https://www.twitter.com/logicalmarketing",
            "https://www.linkedin.com/company/logicalmarketing",
            "https://www.instagram.com/logicalmarketing"
          ],
          "areaServed": {
            "@type": "Country",
            "name": "United States"
          },
          "serviceType": [
            "Digital Marketing",
            "Search Engine Marketing",
            "Social Media Advertising",
            "Conversion Optimization",
            "Email Marketing",
            "Brand Strategy"
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "200",
            "bestRating": "5",
            "worstRating": "1"
          },
          ...data
        };

      case 'website':
        return {
          "@context": baseContext,
          "@type": "WebSite",
          "name": "Logical Marketing",
          "url": "https://logicalmarketing.com",
          "description": "Leading digital marketing agency helping businesses grow with data-driven strategies.",
          "publisher": {
            "@type": "Organization",
            "name": "Logical Marketing"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://logicalmarketing.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          ...data
        };

      case 'service':
        return {
          "@context": baseContext,
          "@type": "Service",
          "serviceType": data.serviceType || "Digital Marketing Service",
          "provider": {
            "@type": "Organization",
            "name": "Logical Marketing"
          },
          "areaServed": {
            "@type": "Country",
            "name": "United States"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Digital Marketing Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Search Engine Marketing"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Social Media Advertising"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Conversion Optimization"
                }
              }
            ]
          },
          ...data
        };

      case 'article':
        return {
          "@context": baseContext,
          "@type": "Article",
          "headline": data.title,
          "description": data.description,
          "image": data.image,
          "author": {
            "@type": "Person",
            "name": data.author
          },
          "publisher": {
            "@type": "Organization",
            "name": "Logical Marketing",
            "logo": {
              "@type": "ImageObject",
              "url": "https://logicalmarketing.com/logo.png"
            }
          },
          "datePublished": data.datePublished,
          "dateModified": data.dateModified || data.datePublished,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": data.url
          },
          ...data
        };

      case 'person':
        return {
          "@context": baseContext,
          "@type": "Person",
          "name": data.name,
          "jobTitle": data.jobTitle,
          "worksFor": {
            "@type": "Organization",
            "name": "Logical Marketing"
          },
          "image": data.image,
          "description": data.description,
          "email": data.email,
          "sameAs": data.socialLinks || [],
          ...data
        };

      case 'review':
        return {
          "@context": baseContext,
          "@type": "Review",
          "itemReviewed": {
            "@type": "Organization",
            "name": "Logical Marketing"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": data.rating,
            "bestRating": "5"
          },
          "name": data.title,
          "author": {
            "@type": "Person",
            "name": data.author
          },
          "reviewBody": data.text,
          "datePublished": data.date,
          ...data
        };

      case 'faq':
        return {
          "@context": baseContext,
          "@type": "FAQPage",
          "mainEntity": data.questions.map((q: any) => ({
            "@type": "Question",
            "name": q.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": q.answer
            }
          })),
          ...data
        };

      case 'breadcrumb':
        return {
          "@context": baseContext,
          "@type": "BreadcrumbList",
          "itemListElement": data.items.map((item: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          })),
          ...data
        };

      case 'localBusiness':
        return {
          "@context": baseContext,
          "@type": "LocalBusiness",
          "name": "Logical Marketing",
          "image": "https://logicalmarketing.com/logo.png",
          "description": "Leading digital marketing agency helping businesses grow with data-driven strategies.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Business District",
            "addressLocality": "New York",
            "addressRegion": "NY",
            "postalCode": "10001",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "40.7128",
            "longitude": "-74.0060"
          },
          "telephone": "+1-555-123-4567",
          "email": "hello@logicalmarketing.com",
          "url": "https://logicalmarketing.com",
          "openingHours": "Mo-Fr 09:00-18:00",
          "priceRange": "$$",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "200"
          },
          ...data
        };

      default:
        return data;
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(generateSchema())}
      </script>
    </Helmet>
  );
};

export default SchemaMarkup;