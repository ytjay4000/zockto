import { useEffect } from 'react';
import { BlogPost } from '@/data/blogPosts';

interface BlogSEOProps {
  post: BlogPost;
  faqs?: { question: string; answer: string }[];
}

function parseFAQs(markdown: string): { question: string; answer: string }[] {
  const faqSection = markdown.split(/^## (?:Frequently Asked Questions|FAQ)\s*$/m)[1];
  if (!faqSection) return [];

  const faqs: { question: string; answer: string }[] = [];
  const qRegex = /\*\*Q:\s*(.+?)\*\*\s*\n\s*A:\s*(.+?)(?=\n\n\*\*Q:|\n---|\n\n---|\n\*Ready|$)/gs;
  let match;
  while ((match = qRegex.exec(faqSection)) !== null) {
    faqs.push({
      question: match[1].trim(),
      answer: match[2].trim(),
    });
  }
  return faqs;
}

const BlogSEO = ({ post, faqs = [] }: BlogSEOProps) => {
  const canonicalUrl = `https://zockto.com/blog/${post.slug}`;

  useEffect(() => {
    // Title
    document.title = `${post.title} | Zockto Blog`;

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', post.metaDescription);

    // OG tags
    const ogTags: Record<string, string> = {
      'og:title': post.title,
      'og:description': post.metaDescription,
      'og:url': canonicalUrl,
      'og:type': 'article',
      'og:site_name': 'Zockto',
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // Twitter Card
    const twitterTags: Record<string, string> = {
      'twitter:card': 'summary_large_image',
      'twitter:title': post.title,
      'twitter:description': post.metaDescription,
    };

    Object.entries(twitterTags).forEach(([name, content]) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // JSON-LD Article schema
    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      description: post.metaDescription,
      url: canonicalUrl,
      datePublished: post.date,
      publisher: {
        '@type': 'Organization',
        name: 'Zockto',
        url: 'https://zockto.com',
      },
    };

    let articleScript = document.getElementById('article-schema');
    if (!articleScript) {
      articleScript = document.createElement('script');
      articleScript.id = 'article-schema';
      articleScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(articleScript);
    }
    articleScript.textContent = JSON.stringify(articleSchema);

    // FAQ schema
    if (faqs.length > 0) {
      const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      };

      let faqScript = document.getElementById('faq-schema');
      if (!faqScript) {
        faqScript = document.createElement('script');
        faqScript.id = 'faq-schema';
        faqScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(faqScript);
      }
      faqScript.textContent = JSON.stringify(faqSchema);
    }

    return () => {
      // Cleanup
      document.getElementById('article-schema')?.remove();
      document.getElementById('faq-schema')?.remove();
      document.querySelector('link[rel="canonical"]')?.remove();
    };
  }, [post, faqs, canonicalUrl]);

  return null;
};

export { parseFAQs };
export default BlogSEO;
