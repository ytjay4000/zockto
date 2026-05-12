import { motion } from 'framer-motion';
import { voiceTestimonials } from '@/data/voiceTestimonials';
import { VoicePlaybackProvider } from '@/context/VoicePlaybackContext';
import VoiceTestimonialCard from './VoiceTestimonialCard';

const VoiceTestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium gradient-card border border-border/50 text-primary mb-4">
            Voice Testimonials
          </span>
          <h2 className="font-display text-2xl md:text-5xl font-bold mb-3">
            Hear it from{' '}
            <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
              our clients
            </span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Real voices. Real results. Tap play to listen.
          </p>
        </motion.div>

        <VoicePlaybackProvider>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {voiceTestimonials.map((t) => (
              <VoiceTestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </VoicePlaybackProvider>
      </div>
    </section>
  );
};

export default VoiceTestimonialsSection;
