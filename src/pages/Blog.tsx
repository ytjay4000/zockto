import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogCard from '@/components/blog/BlogCard';
import { blogPosts, BLOG_CATEGORIES, getPostsByCategory, type BlogCategory } from '@/data/blogPosts';
import { cn } from '@/lib/utils';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory>('All');
  const filteredPosts = getPostsByCategory(selectedCategory);

  useEffect(() => {
    document.title = 'The Zockto Blog | AI Video Ad Tips, Guides & Strategies';
    const metaDesc = document.querySelector('meta[name="description"]') || (() => {
      const el = document.createElement('meta');
      el.setAttribute('name', 'description');
      document.head.appendChild(el);
      return el;
    })();
    metaDesc.setAttribute('content', 'Tips, guides, and strategies to create high-converting AI video ads and grow your brand with Zockto.');
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-glow opacity-50" />
        <div className="container px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
              The Zockto{' '}
              <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Tips, guides, and strategies to create high-converting AI video ads and grow your brand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category filters */}
      <section className="pb-8">
        <div className="container px-4">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide px-4 -mx-4 md:flex-wrap md:justify-center md:overflow-visible md:px-0 md:mx-0">
            {BLOG_CATEGORIES.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap shrink-0 md:shrink",
                  selectedCategory === cat
                    ? "gradient-primary text-primary-foreground shadow-glow"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog grid */}
      <section className="pb-24">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} />
            ))}
          </div>
          {filteredPosts.length === 0 && (
            <p className="text-center text-muted-foreground py-12">
              No posts in this category yet. Check back soon!
            </p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
