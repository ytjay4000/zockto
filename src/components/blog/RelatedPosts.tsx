import { getRelatedPosts } from '@/data/blogPosts';
import BlogCard from './BlogCard';

interface RelatedPostsProps {
  currentSlug: string;
}

const RelatedPosts = ({ currentSlug }: RelatedPostsProps) => {
  const related = getRelatedPosts(currentSlug, 3);

  if (related.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t border-border/50">
      <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 text-center">Related Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {related.map((post, i) => (
          <BlogCard key={post.slug} post={post} index={i} />
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;
