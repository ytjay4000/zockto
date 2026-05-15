import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Meet Shah',
    role: 'D2C Brand Owner',
    quote: "Running a D2C brand, creatives are everything. Zockto lets me spin up fresh ad variations from just my product link — no shoots, no editors. My ROAS has genuinely improved since I started testing more creatives every week.",
  },
  {
    name: 'Khushi',
    role: 'E-commerce Seller',
    quote: "I sell on multiple marketplaces and never had time to make videos. With Zockto I just paste the product URL and get a polished ad ready to post. My listings finally look like the big brands.",
  },
  {
    name: 'Sriniwasa',
    role: 'Performance Marketer',
    quote: "As a performance marketer, creative testing is the bottleneck. Zockto gives me 10+ ad variations in the time it used to take to brief one. Winning creatives now show up in days, not weeks.",
  },
  {
    name: 'Tarun',
    role: 'Founder',
    quote: "We were burning money on agencies and freelancers for every new ad. Zockto replaced that entire workflow. Studio-quality UGC ads, instantly, at a fraction of the cost — it's a no-brainer for any founder.",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="flex-shrink-0 w-[280px] md:w-[400px] p-4 md:p-6 rounded-2xl gradient-card border border-border/50 mx-2 md:mx-4">
    <Quote className="w-6 h-6 md:w-8 md:h-8 text-primary/40 mb-3 md:mb-4" />
    <p className="text-foreground/90 leading-relaxed mb-4 md:mb-6 text-sm md:text-base line-clamp-4 md:line-clamp-none">{testimonial.quote}</p>
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full gradient-primary flex items-center justify-center">
        <span className="text-primary-foreground font-semibold text-xs md:text-sm">
          {testimonial.name.split(' ').map(n => n[0]).join('')}
        </span>
      </div>
      <span className="font-display font-semibold text-sm md:text-base">{testimonial.name}</span>
    </div>
  </div>
);

const TestimonialsSection = () => {
  // Triple the testimonials for seamless loop on desktop
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container px-4 relative z-10 mb-8 md:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium gradient-card border border-border/50 text-primary mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-2xl md:text-5xl font-bold mb-4">
            Hear what others say{' '}
            <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
              about us
            </span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            See what top teams and brands say about Zockto's ad product video maker.
          </p>
        </motion.div>
      </div>

      {/* Mobile: Manual scroll, Desktop: Auto marquee */}
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        {/* Mobile: Scrollable, Desktop: Auto-scroll marquee */}
        <div className="flex overflow-x-auto scrollbar-hide md:overflow-visible md:animate-marquee px-4 md:px-0">
          {extendedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
