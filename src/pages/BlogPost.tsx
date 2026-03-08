import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MarkdownRenderer from '@/components/blog/MarkdownRenderer';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogCTA from '@/components/blog/BlogCTA';
import RelatedPosts from '@/components/blog/RelatedPosts';
import FAQAccordion from '@/components/blog/FAQAccordion';
import BlogSEO, { parseFAQs } from '@/components/blog/BlogSEO';
import { getBlogPost, CATEGORY_COLORS } from '@/data/blogPosts';

function extractBodyContent(markdown: string): string {
  // Remove everything before the second "---" (title/meta/TOC section)
  const parts = markdown.split(/^---$/m);
  if (parts.length >= 3) {
    // Get content after second ---
    const body = parts.slice(2).join('---').trim();
    // Remove the FAQ section (we render it separately)
    const faqSplit = body.split(/^## (?:Frequently Asked Questions|FAQ)\s*$/m);
    return faqSplit[0].trim();
  }
  return markdown;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const post = getBlogPost(slug || '');

  useEffect(() => {
    if (!post) {
      navigate('/blog');
      return;
    }

    setLoading(true);
    fetch(`/blog-content/${slug}.md`)
      .then(res => {
        if (!res.ok) throw new Error('Not found');
        return res.text();
      })
      .then(md => {
        setContent(md);
        setLoading(false);
        window.scrollTo(0, 0);
      })
      .catch(() => {
        navigate('/blog');
      });
  }, [slug, post, navigate]);

  if (!post || loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const faqs = parseFAQs(content);
  const bodyContent = extractBodyContent(content);
  const colors = CATEGORY_COLORS[post.category] || CATEGORY_COLORS['Strategy'];
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="min-h-screen bg-background">
      <BlogSEO post={post} faqs={faqs} />
      <Navbar />

      {/* Header */}
      <header
        className="pt-28 pb-12 md:pt-36 md:pb-16 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${colors.from}15 0%, ${colors.to}10 100%)`,
        }}
      >
        <div className="container px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>

            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-medium text-white mb-4"
              style={{ background: colors.from }}
            >
              {post.category}
            </span>

            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {formattedDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime} read
              </span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Content */}
      <div className="container px-4 py-12">
        <div className="flex gap-12 max-w-5xl mx-auto">
          {/* Main content */}
          <article className="flex-1 min-w-0 max-w-[780px]">
            <TableOfContents content={content} />
            <MarkdownRenderer content={bodyContent} />
            <FAQAccordion faqs={faqs} />
            <BlogCTA />
          </article>

          {/* Desktop TOC sidebar */}
          <aside className="hidden lg:block">
            <TableOfContents content={content} />
          </aside>
        </div>

        <div className="max-w-5xl mx-auto">
          <RelatedPosts currentSlug={post.slug} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost;
