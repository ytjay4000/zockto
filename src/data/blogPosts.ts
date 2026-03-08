export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  metaDescription: string;
}

export type BlogCategory = 'All' | 'Getting Started' | 'Platform Guides' | 'Industry' | 'Comparisons' | 'Strategy' | 'How-To';

export const BLOG_CATEGORIES: BlogCategory[] = [
  'All', 'Getting Started', 'Platform Guides', 'Industry', 'Comparisons', 'Strategy', 'How-To'
];

export const CATEGORY_COLORS: Record<string, { from: string; to: string }> = {
  'Getting Started': { from: 'hsl(220, 90%, 56%)', to: 'hsl(220, 80%, 70%)' },
  'Platform Guides': { from: 'hsl(270, 70%, 55%)', to: 'hsl(280, 60%, 70%)' },
  'Industry': { from: 'hsl(160, 60%, 40%)', to: 'hsl(175, 50%, 55%)' },
  'Comparisons': { from: 'hsl(30, 90%, 50%)', to: 'hsl(40, 80%, 60%)' },
  'Strategy': { from: 'hsl(235, 70%, 50%)', to: 'hsl(250, 60%, 65%)' },
  'How-To': { from: 'hsl(190, 80%, 45%)', to: 'hsl(200, 70%, 60%)' },
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'startup-marketing-with-ai',
    title: 'Startup Marketing with AI: How Small Brands Can Compete with Giants',
    category: 'Strategy',
    readTime: '12 min',
    date: '2026-03-01',
    excerpt: 'Two years ago, if you were a startup trying to compete with an established brand in advertising, you were fighting with a slingshot against a cannon.',
    metaDescription: 'Learn how startups can use AI marketing tools to compete with big brands. Practical playbook for AI video ads, multilingual campaigns, and startup growth strategies.',
  },
  {
    slug: 'ugc-vs-traditional-ads',
    title: 'UGC Ads vs Traditional Ads: Which Performs Better in 2026?',
    category: 'Strategy',
    readTime: '12 min',
    date: '2026-02-28',
    excerpt: "If you've spent any time in performance marketing circles lately, you've heard the gospel: UGC outperforms everything. But is that actually true?",
    metaDescription: 'Compare UGC ads vs traditional ads with real 2026 performance data. See CTR, CPC, conversion rates, and learn the best hybrid strategy for your brand.',
  },
  {
    slug: 'video-ads-vs-image-ads',
    title: 'Video Ads vs Image Ads: Which Drives More Sales?',
    category: 'Strategy',
    readTime: '12 min',
    date: '2026-02-25',
    excerpt: "It's the question every marketer and ecommerce brand eventually faces: should I run video ads or image ads?",
    metaDescription: 'Video ads vs image ads: see real 2026 performance data on CTR, CPC, ROAS, and conversion rates. Learn which ad format drives more sales for your brand.',
  },
  {
    slug: 'd2c-brand-video-marketing',
    title: 'D2C Brand Video Marketing: The 2026 Playbook',
    category: 'Strategy',
    readTime: '12 min',
    date: '2026-02-22',
    excerpt: "If you're running a D2C brand in 2026 and not investing heavily in video marketing, you're essentially bringing a knife to a gunfight.",
    metaDescription: 'The complete 2026 playbook for D2C brand video marketing. Learn video formats, platform strategies, creative testing frameworks, and scaling from ₹1L to ₹50L.',
  },
  {
    slug: 'zockto-vs-arcads',
    title: 'Zockto vs Arcads: Which AI Ad Generator is Better?',
    category: 'Comparisons',
    readTime: '10 min',
    date: '2026-02-19',
    excerpt: "If you're shopping for an AI ad generator in 2026, Zockto and Arcads are two names you'll come across quickly.",
    metaDescription: 'Zockto vs Arcads comparison: pricing, features, video quality, and ease of use. Find out which AI ad generator is better for your e-commerce brand in 2026.',
  },
  {
    slug: 'zockto-vs-creatify',
    title: 'Zockto vs Creatify: Honest Comparison for 2026',
    category: 'Comparisons',
    readTime: '9 min',
    date: '2026-02-16',
    excerpt: "Creatify has been one of the more popular mid-range AI video ad tools for a while. So which one should you actually use?",
    metaDescription: 'Zockto vs Creatify: honest comparison of pricing, features, video length, and capabilities. See which AI video ad tool offers better value in 2026.',
  },
  {
    slug: 'zockto-vs-heygen',
    title: 'Zockto vs HeyGen: Best Tool for Product Video Ads?',
    category: 'Comparisons',
    readTime: '10 min',
    date: '2026-02-13',
    excerpt: "Comparing Zockto and HeyGen is a bit like comparing a racing bike to an SUV. They're both vehicles but built for different purposes.",
    metaDescription: 'Zockto vs HeyGen comparison for product video ads. Specialist vs generalist: which AI video tool is better for e-commerce advertising in 2026?',
  },
  {
    slug: 'zockto-vs-joggai',
    title: 'Zockto vs JoggAI: Which One Should You Choose?',
    category: 'Comparisons',
    readTime: '9 min',
    date: '2026-02-10',
    excerpt: "JoggAI and Zockto are both AI video ad tools targeting e-commerce brands, but they've taken different paths.",
    metaDescription: 'Zockto vs JoggAI comparison: video length, avatars, pricing, and features. Find out which AI video ad tool is right for your e-commerce brand.',
  },
  {
    slug: 'multilingual-video-ads',
    title: 'Multilingual Video Ads: How to Scale Globally with AI',
    category: 'How-To',
    readTime: '12 min',
    date: '2026-02-07',
    excerpt: "Only 10% of India's population is comfortable consuming content in English. Running English-only ads means you're invisible to 90% of your market.",
    metaDescription: 'Learn how to create multilingual video ads with AI. Scale globally with ads in 48 languages. Data on regional language ad performance and step-by-step guide.',
  },
  {
    slug: 'ai-ads-skincare-beauty',
    title: 'AI Video Ads for Skincare & Beauty Products',
    category: 'Industry',
    readTime: '14 min',
    date: '2026-02-04',
    excerpt: 'Skincare and beauty is a $430 billion global industry and one of the most competitive advertising categories on the planet.',
    metaDescription: 'Create high-converting AI video ads for skincare and beauty products. Script formulas, platform strategies, and creative scaling tips for beauty brands.',
  },
  {
    slug: 'future-of-ai-advertising',
    title: 'The Future of AI in Advertising: 2026 and Beyond',
    category: 'Strategy',
    readTime: '13 min',
    date: '2026-02-01',
    excerpt: "AI isn't \"coming\" to advertising. It's already here, and it's already reshaping the industry in ways that most people haven't fully processed.",
    metaDescription: 'Explore the future of AI in advertising: from AI-generated creatives to autonomous campaigns. Bold predictions and practical strategies for 2026 and beyond.',
  },
  {
    slug: 'automated-ad-creation',
    title: 'Automated Ad Creation: How AI is Replacing Traditional Video Production',
    category: 'How-To',
    readTime: '11 min',
    date: '2026-01-29',
    excerpt: 'In 2020, creating a 30-second product video ad required a videographer, a model, a studio, an editor, and 2-4 weeks. In 2026, you upload a photo and click 5 buttons.',
    metaDescription: 'Learn how automated ad creation with AI is replacing traditional video production. Real cost comparisons, workflows, and step-by-step guide to making the switch.',
  },
  {
    slug: 'ai-ads-health-supplements',
    title: 'AI Video Ads for Health & Supplement Brands',
    category: 'Industry',
    readTime: '13 min',
    date: '2026-01-26',
    excerpt: "The health and supplement industry in India is expected to hit $18 billion by 2027. The brands winning all have one thing in common: killer video ads.",
    metaDescription: 'Create high-converting AI video ads for health and supplement brands. Compliance tips, script frameworks, and platform strategies for supplement marketing.',
  },
  {
    slug: 'ab-testing-video-ads',
    title: 'A/B Testing Video Ads: How to Find Your Winning Creative',
    category: 'Strategy',
    readTime: '13 min',
    date: '2026-01-23',
    excerpt: "Here's an uncomfortable truth about video ads: the ad you think will perform best almost never does.",
    metaDescription: 'Master A/B testing for video ads. Learn what to test first, how to read results, common mistakes, and how to scale winners for maximum ROAS.',
  },
  {
    slug: 'why-ugc-ads-work',
    title: 'Why UGC Ads Work: The Psychology Behind Authentic Marketing',
    category: 'Strategy',
    readTime: '11 min',
    date: '2026-01-20',
    excerpt: "You're scrolling through Instagram, a polished brand ad appears. You scroll right past it. But then someone appears on screen — a regular person talking casually.",
    metaDescription: 'Discover the psychology behind why UGC ads work. 6 psychological principles, real performance data, and how AI-generated UGC is changing authentic marketing.',
  },
  {
    slug: 'ai-voice-cloning-for-ads',
    title: 'AI Voice Cloning for Ads: Speak to Your Audience in 48 Languages',
    category: 'How-To',
    readTime: '10 min',
    date: '2026-01-17',
    excerpt: "Your English ad doesn't resonate in Coimbatore. Your Hindi voiceover falls flat in Kolkata. AI voice cloning solves this.",
    metaDescription: 'Learn how AI voice cloning lets you create ads in 48 languages. Real multilingual ad performance data and step-by-step guide for brands going global.',
  },
  {
    slug: 'pinterest-video-ads',
    title: 'Pinterest Video Ads for Product Brands: Complete Guide',
    category: 'Platform Guides',
    readTime: '13 min',
    date: '2026-01-14',
    excerpt: "Pinterest isn't social media. It's a visual search engine where 97% of top searches are unbranded — a massive opportunity for product brands.",
    metaDescription: 'Complete guide to Pinterest video ads for product brands. Ad formats, creative best practices, targeting strategies, and AI-powered production tips.',
  },
  {
    slug: 'reduce-ad-production-costs',
    title: 'How to Reduce Ad Production Costs by 90% with AI',
    category: 'Strategy',
    readTime: '12 min',
    date: '2026-01-11',
    excerpt: "Every time you look at video production costs, you wince. A freelance UGC creator wants ₹15,000-₹40,000 per video. AI is demolishing this cost trap.",
    metaDescription: 'Reduce video ad production costs by 90% with AI. Real cost comparisons between traditional and AI production, plus a step-by-step switching guide.',
  },
  {
    slug: 'short-form-video-ads',
    title: 'Short-Form Video Ads: Why 15-60 Second Ads Convert Better',
    category: 'Strategy',
    readTime: '10 min',
    date: '2026-01-08',
    excerpt: 'The average human attention span is now 8.25 seconds. Short-form video ads have a massive structural advantage.',
    metaDescription: 'Why 15-60 second video ads convert better than long-form. Data on optimal video length, hook strategies, and how to create short-form ads at scale.',
  },
  {
    slug: 'ecommerce-video-marketing-strategy',
    title: 'E-Commerce Video Marketing Strategy for 2026',
    category: 'Strategy',
    readTime: '12 min',
    date: '2026-01-05',
    excerpt: '84% of consumers say they\'ve been convinced to buy a product after watching a brand\'s video. If you don\'t have a clear video marketing strategy, you\'re leaving money on the table.',
    metaDescription: 'Complete 2026 e-commerce video marketing strategy. 7 essential video types, platform-by-platform playbook, budget framework, and AI-powered production guide.',
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}

export function getRelatedPosts(slug: string, count = 3): BlogPost[] {
  const post = getBlogPost(slug);
  if (!post) return [];
  return blogPosts
    .filter(p => p.slug !== slug && p.category === post.category)
    .slice(0, count)
    .concat(
      blogPosts.filter(p => p.slug !== slug && p.category !== post.category)
    )
    .slice(0, count);
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  if (category === 'All') return blogPosts;
  return blogPosts.filter(p => p.category === category);
}
