export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  metaDescription: string;
}

export type BlogCategory = 'All' | 'Getting Started' | 'Platform Guides' | 'Industry' | 'Comparisons' | 'Strategy' | 'How-To' | 'Tools & Reviews';

export const BLOG_CATEGORIES: BlogCategory[] = [
  'All', 'Getting Started', 'Platform Guides', 'Industry', 'Comparisons', 'Strategy', 'How-To', 'Tools & Reviews'
];

export const CATEGORY_COLORS: Record<string, { from: string; to: string }> = {
  'Getting Started': { from: 'hsl(220, 90%, 56%)', to: 'hsl(220, 80%, 70%)' },
  'Platform Guides': { from: 'hsl(270, 70%, 55%)', to: 'hsl(280, 60%, 70%)' },
  'Industry': { from: 'hsl(160, 60%, 40%)', to: 'hsl(175, 50%, 55%)' },
  'Comparisons': { from: 'hsl(30, 90%, 50%)', to: 'hsl(40, 80%, 60%)' },
  'Strategy': { from: 'hsl(235, 70%, 50%)', to: 'hsl(250, 60%, 65%)' },
  'How-To': { from: 'hsl(190, 80%, 45%)', to: 'hsl(200, 70%, 60%)' },
  'Tools & Reviews': { from: 'hsl(340, 70%, 50%)', to: 'hsl(350, 60%, 65%)' },
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
  {
    slug: 'google-display-video-ads',
    title: 'Google Display Video Ads: AI-Powered Creative That Converts',
    category: 'Platform Guides',
    readTime: '14 min',
    date: '2026-01-02',
    excerpt: "Google Display Network reaches over 90% of internet users worldwide. Combine that reach with video and you've got one of the most powerful advertising channels available.",
    metaDescription: 'Complete guide to Google Display video ads. Ad formats, specs, creative strategies, targeting, and AI-powered production for higher CTR and lower CPA.',
  },
  {
    slug: 'ai-video-ads-for-ecommerce',
    title: 'AI Video Ads for E-Commerce: Complete Guide for 2026',
    category: 'Getting Started',
    readTime: '11 min',
    date: '2025-12-30',
    excerpt: '73% of consumers prefer watching a short video to learn about a product. AI video ad tools have matured to where a solo Shopify seller can create production-quality videos.',
    metaDescription: 'Complete 2026 guide to AI video ads for e-commerce. How AI video tools work, 5 essential ad types, category playbooks, and platform strategies.',
  },
  {
    slug: 'product-video-best-practices',
    title: 'Product Video Best Practices: 10 Tips for Higher Conversions',
    category: 'How-To',
    readTime: '11 min',
    date: '2025-12-27',
    excerpt: "Product pages with video convert 80% better than those without. Yet most e-commerce brands are still winging it with their video creative.",
    metaDescription: '10 product video best practices for higher conversions. Hook strategies, optimal length, CTA tips, and how to create high-converting video ads at scale.',
  },
  {
    slug: 'flipkart-seller-video-ads',
    title: 'Flipkart Seller Guide: Create Product Video Ads That Sell',
    category: 'Platform Guides',
    readTime: '12 min',
    date: '2025-12-24',
    excerpt: "If you're selling on Flipkart and still relying on static images alone, you're leaving money on the table. Product videos have become one of the biggest conversion levers.",
    metaDescription: 'Flipkart seller guide to product video ads. Video specs, AI creation tools, ad manager setup, and tips from top-performing Flipkart sellers.',
  },
  {
    slug: 'scaling-ad-creatives',
    title: 'How to Scale Ad Creatives Without Scaling Your Budget',
    category: 'Strategy',
    readTime: '13 min',
    date: '2025-12-21',
    excerpt: "You need more ad creatives — more hooks, more variations, more fresh content. But your production budget is already stretched thin.",
    metaDescription: 'Scale ad creative production 10-50x without increasing budget. Systematic testing frameworks, AI workflows, and budget allocation strategies.',
  },
  {
    slug: 'ugc-ads-without-creators',
    title: 'How to Create UGC Ads Without Hiring Creators',
    category: 'How-To',
    readTime: '9 min',
    date: '2025-12-18',
    excerpt: "79% of consumers say UGC highly impacts their purchasing decisions. What if you could create UGC-style ads without the cost and hassle of hiring creators?",
    metaDescription: 'Create UGC ads without hiring creators using AI. Step-by-step guide, proven frameworks, tool comparisons, and tips for authentic AI-generated UGC.',
  },
  {
    slug: 'video-ad-script-writing',
    title: 'How to Write Video Ad Scripts That Sell',
    category: 'How-To',
    readTime: '14 min',
    date: '2025-12-15',
    excerpt: "The script matters more than production quality. A well-scripted ad filmed on an iPhone can outperform a $50,000 production 10x.",
    metaDescription: 'Master video ad script writing. 15 hook formulas, 4 proven frameworks, copy-paste templates, and psychology-backed tips for scripts that convert.',
  },
  {
    slug: 'amazon-product-video-ads',
    title: 'Amazon Product Video Ads: Boost Your Listings with AI',
    category: 'Platform Guides',
    readTime: '12 min',
    date: '2025-12-12',
    excerpt: "Amazon listings with video see a 9.7% average sales increase. Yet the majority of sellers still don't have video. AI is closing that gap.",
    metaDescription: 'Complete guide to Amazon product video ads. Listing videos, Sponsored Brand Video, A+ Content, and how to create Amazon videos with AI.',
  },
  {
    slug: 'ai-ads-fashion',
    title: 'AI Video Ads for Fashion & Apparel Brands',
    category: 'Industry',
    readTime: '11 min',
    date: '2025-12-09',
    excerpt: "Fashion has always been visual. But in 2026, visual doesn't mean glossy magazine spreads — it means video. Short-form, vertical, fast-paced, and everywhere.",
    metaDescription: 'Create AI video ads for fashion and apparel brands. Ad formats, platform strategies, D2C tips, and how to produce fashion video content at scale.',
  },
  {
    slug: 'ai-ads-food-beverages',
    title: 'AI Video Ads for Food & Beverage Brands',
    category: 'Industry',
    readTime: '11 min',
    date: '2025-12-06',
    excerpt: "Food is visceral — the right video can literally make someone's mouth water and trigger an impulse buy. AI is making food video ads accessible to every brand.",
    metaDescription: 'Create AI video ads for food and beverage brands. Video formats, platform strategies, subcategory playbooks, and cost comparison vs traditional food shoots.',
  },
  {
    slug: 'ai-ads-home-decor',
    title: 'AI Video Ads for Home Decor & Lifestyle Products',
    category: 'Industry',
    readTime: '11 min',
    date: '2025-12-03',
    excerpt: "Selling home decor online has a unique challenge: your product needs context to sell. AI video ads bridge the gap between a white-background photo and an aspirational lifestyle.",
    metaDescription: 'Create AI video ads for home decor and lifestyle products. Video formats, seasonal strategies, platform tips, and cost comparison vs traditional production.',
  },
  {
    slug: 'ai-ads-jewelry',
    title: 'AI Video Ads for Jewelry Brands: Showcase Your Products Like Never Before',
    category: 'Industry',
    readTime: '10 min',
    date: '2025-11-30',
    excerpt: "Static images barely capture 10% of your jewelry's magic. AI-powered video ads let you showcase sparkle, craftsmanship, and light play in scroll-stopping content.",
    metaDescription: 'Create AI video ads for jewelry brands. Ad formats, platform strategies, production tips, and cost comparison for rings, necklaces, and fine jewelry marketing.',
  },
  {
    slug: 'ai-ads-tech-gadgets',
    title: 'AI Video Ads for Tech & Gadget Products',
    category: 'Industry',
    readTime: '11 min',
    date: '2025-11-27',
    excerpt: "Tech products are feature-rich but hard to explain in a static image. Video lets you demonstrate features, compare specs, and create excitement that drives purchases.",
    metaDescription: 'Create AI video ads for tech and gadget products. Video formats by tech category, platform strategies, and tips for electronics marketing at scale.',
  },
  {
    slug: 'roi-of-ai-video-ads',
    title: 'The ROI of AI Video Ads: Real Numbers from Real Brands',
    category: 'Strategy',
    readTime: '12 min',
    date: '2025-11-24',
    excerpt: "Everyone talks about AI video ads. Very few talk about the actual numbers. We answer with data — not vague promises.",
    metaDescription: 'Real ROI data for AI video ads. Production cost savings, performance benchmarks, and revenue scenarios for brands at every ad spend level.',
  },
  {
    slug: 'ai-product-photography',
    title: 'AI Product Photography: Studio-Quality Shots Without a Studio',
    category: 'How-To',
    readTime: '9 min',
    date: '2025-11-21',
    excerpt: "How many products in your catalog have genuinely great photography? AI product photography fills the gap — and in 2026, the results are stunning.",
    metaDescription: 'Create studio-quality product photos with AI. Cost comparison, category guides, platform requirements, and tips for e-commerce product photography.',
  },
  {
    slug: 'youtube-shorts-ads',
    title: 'YouTube Shorts Ads: The Untapped Goldmine for Product Brands',
    category: 'Platform Guides',
    readTime: '11 min',
    date: '2025-11-18',
    excerpt: "YouTube Shorts gets 70 billion+ daily views with CPMs 50-80% lower than standard YouTube ads. The window of opportunity is wide open.",
    metaDescription: 'Complete guide to YouTube Shorts ads for product brands. Campaign types, creative strategies, targeting, and how to create Shorts ads with AI.',
  },
  {
    slug: 'how-to-create-ugc-ads',
    title: 'How to Create UGC Ads: Step-by-Step Guide for Beginners',
    category: 'Getting Started',
    readTime: '13 min',
    date: '2025-11-15',
    excerpt: "UGC ads get 4x higher click-through rates than traditional brand ads. Here's a complete step-by-step guide to creating your first UGC ad.",
    metaDescription: 'Step-by-step guide to creating UGC ads. 5 UGC ad types, script writing, creation methods, testing strategies, and tools for beginners.',
  },
  {
    slug: 'ai-avatar-video-ads',
    title: 'AI Avatar Video Ads: The Future of Product Marketing',
    category: 'How-To',
    readTime: '9 min',
    date: '2025-11-12',
    excerpt: "Humans are wired to pay attention to faces. AI avatars let you create spokesperson-style video ads at a fraction of the traditional cost.",
    metaDescription: 'Complete guide to AI avatar video ads. Avatar types, realism in 2026, use cases, brand matching tips, and ethics of AI spokesperson advertising.',
  },
  {
    slug: 'create-ads-without-camera',
    title: 'How to Create Product Ads Without a Camera or Studio',
    category: 'Getting Started',
    readTime: '11 min',
    date: '2025-11-09',
    excerpt: "No camera. No studio. No lighting equipment. No actors. Just your product and a few minutes. AI tools create studio-quality ads from a basic product image.",
    metaDescription: 'Create professional product ads without a camera or studio. AI-powered video and photo creation guide with cost comparisons and quality tips.',
  },
  {
    slug: 'facebook-video-ads-guide',
    title: 'Facebook Video Ads in 2026: What Works and What Doesn\'t',
    category: 'Platform Guides',
    readTime: '11 min',
    date: '2025-11-06',
    excerpt: "Every year someone declares Facebook ads dead. Every year Meta's ad revenue keeps climbing. Here's what actually works in 2026.",
    metaDescription: 'Facebook video ads guide for 2026. What works, what doesn\'t, ad formats, Advantage+ strategies, AI creative production, and scaling framework.',
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
