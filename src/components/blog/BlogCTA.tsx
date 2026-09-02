import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogCTA = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Lead');
    }
    setTimeout(() => {
      window.open('https://app.zockto.com', '_blank', 'noopener,noreferrer');
    }, 300);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="my-12 rounded-2xl gradient-primary p-8 md:p-12 text-center"
    >
      <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
        Ready to Create Scroll-Stopping Ads?
      </h3>
      <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">
        Turn your product images into studio-quality video ads in just 5 clicks. No video skills needed.
      </p>
      <Button
        size="lg"
        className="bg-white text-primary hover:bg-white/90 font-semibold"
        asChild
      >
        <a href="https://app.zockto.com" target="_blank" rel="noopener noreferrer" onClick={handleClick}>
          Start Creating <ArrowRight className="w-4 h-4 ml-1" />
        </a>
      </Button>
    </motion.div>
  );
};

export default BlogCTA;
