import { motion } from 'framer-motion';
import VslCta from './VslCta';

const VslFinalCta = () => (
  <section className="py-14 md:py-20 bg-gradient-to-b from-primary/[0.07] to-background border-t border-border/50">
    <div className="container px-4 max-w-[760px] text-center">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="font-display text-2xl md:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight mb-4">
          Your Ad Is Already Planned. Let's Make It.
        </h2>
        <p className="text-muted-foreground text-base md:text-lg mb-8">
          Upload your product. Choose your concept. Zockto creates the finished video.
        </p>
        <div className="flex justify-center">
          <VslCta event="primary_cta_click" className="w-full sm:w-auto text-base" />
        </div>
      </motion.div>
    </div>
  </section>
);

export default VslFinalCta;
