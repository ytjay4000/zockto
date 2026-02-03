import { motion } from 'framer-motion';
import { Play, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] gradient-glow animate-pulse-glow" />
      
      {/* Floating orbs */}
      <motion.div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-primary/5 blur-3xl" animate={{
      y: [-20, 20, -20],
      x: [-10, 10, -10]
    }} transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }} />
      <motion.div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl" animate={{
      y: [20, -20, 20],
      x: [10, -10, 10]
    }} transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut"
    }} />

      <div className="container relative z-10 px-4 py-20">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        ease: "easeOut"
      }} className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: 0.2,
          duration: 0.5
        }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered UGC Ads</span>
          </motion.div>

          {/* Main headline */}
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
            Create Stunning{' '}
            <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">UGC Videos</span>{' '}
            in Minutes
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Transform your marketing with AI-generated demo videos that convert. 
            See real examples below and start creating your own today.
          </p>

          {/* CTAs */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4,
          duration: 0.5
        }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="hero" asChild>
              <a href="https://app.zockto.com/ugc-ads" target="_blank" rel="noopener noreferrer">
                Get Started for Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="group" asChild>
              <a href="#demos">
                <Play className="w-5 h-5 mr-2 group-hover:text-primary transition-colors" />
                Watch Demos
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" animate={{
      y: [0, 10, 0]
    }} transition={{
      duration: 2,
      repeat: Infinity
    }}>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>;
};
export default Hero;