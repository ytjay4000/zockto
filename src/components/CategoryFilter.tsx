import { motion } from 'framer-motion';
import { CategoryFilter as CategoryFilterType } from '@/types/video';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  categories: string[];
  selected: CategoryFilterType;
  onSelect: (category: CategoryFilterType) => void;
}

const CategoryFilter = ({ categories, selected, onSelect }: CategoryFilterProps) => {
  return (
    <div className="relative">
      {/* Gradient fade on edges for mobile */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none md:hidden" />
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none md:hidden" />
      
      {/* Scrollable container on mobile, wrap on desktop */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide px-4 -mx-4 md:flex-wrap md:justify-center md:overflow-visible md:px-0 md:mx-0">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => onSelect(category)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap shrink-0 md:shrink",
              selected === category
                ? "gradient-primary text-primary-foreground shadow-glow"
                : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-muted"
            )}
          >
            {category}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
