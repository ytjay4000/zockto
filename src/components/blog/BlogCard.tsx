import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Calendar } from 'lucide-react';
import { BlogPost, CATEGORY_COLORS } from '@/data/blogPosts';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard = ({ post, index }: BlogCardProps) => {
  const colors = CATEGORY_COLORS[post.category] || CATEGORY_COLORS['Strategy'];
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link
        to={`/blog/${post.slug}`}
        className="group block rounded-xl border border-border/50 bg-card overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
      >
        {/* Thumbnail */}
        <div className="h-44 relative overflow-hidden">
          {post.image ? (
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div
              className="w-full h-full"
              style={{
                background: `linear-gradient(135deg, ${colors.from} 0%, ${colors.to} 100%)`,
              }}
            >
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-4 right-4 w-24 h-24 rounded-full border-2 border-white/30" />
                <div className="absolute bottom-6 left-6 w-16 h-16 rounded-lg border-2 border-white/20 rotate-12" />
                <div className="absolute top-1/2 left-1/3 w-8 h-8 rounded-full bg-white/10" />
              </div>
            </div>
          )}
          {/* Category badge */}
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-black/40 backdrop-blur-sm text-white">
            {post.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-display font-bold text-foreground text-lg leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;
