import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Carter June',
    quote: "At first I didn't believe it could make real ad videos from just a product link, but Zockto actually does it. The videos look clean, professional, and perform better than anything I've made manually. It's now part of my daily workflow.",
  },
  {
    name: 'Elena Park',
    quote: "Zockto has completely changed how I create ads for my store. I just paste my product link, and within minutes, I get a professional video ready to post on social media. It's saved me so much time and money compared to hiring editors or agencies, and my sales have gone up since using it.",
  },
  {
    name: 'James Nair',
    quote: "Zockto helped me 10x my ad output without hiring anyone. It's the easiest way to create high-performing product videos. This has changed product advertising forever!",
  },
  {
    name: 'Marcus Lee',
    quote: "It is incredible that we can now get studio quality ads of our products in just a few minutes 10x cheaper than before!",
  },
  {
    name: 'Sarah Bond',
    quote: "Since switching to Zockto, we have been finally able to create tens of ads per product to test different ad variations quickly for our e-commerce store. It has been a gamechanger!",
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
