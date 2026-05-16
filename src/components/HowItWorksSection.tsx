import { motion } from 'framer-motion';
import { Upload, LayoutTemplate, FileText, Video } from 'lucide-react';

const steps = [
  {
    number: '1',
    icon: Upload,
    title: 'Upload Your Product Image',
    description: 'Our AI analyzes your product — visuals, features, and selling points — to understand what makes it stand out.',
  },
  {
    number: '2',
    icon: LayoutTemplate,
    title: 'Choose an Ad Template',
    description: 'Pick from dozens of high-performing video ad templates, or paste a reference video you want to recreate for your product.',
  },
  {
    number: '3',
    icon: FileText,
    title: 'Add Product Details (Optional)',
    description: 'Want more control? Tell us which benefits or features to highlight, or provide your own script.',
  },
  {
    number: '4',
    icon: Video,
    title: 'Your Video Is Ready',
    description: 'Hit "Generate" and get a fully edited, ready-to-post video — with B-roll, music, and captions built in.',
  },
];

const HowItWorksSection = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium gradient-card border border-border/50 text-primary mb-4">
            Features
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            How it{' '}
            <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">Minutes, not weeks</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`flex items-start gap-6 mb-12 last:mb-0 ${
                index % 2 === 1 ? 'md:flex-row-reverse md:text-right' : ''
              }`}
            >
              {/* Step number and connector */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center shadow-glow shrink-0">
                  <span className="font-display text-2xl font-bold text-primary-foreground">{step.number}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-16 bg-gradient-to-b from-primary/50 to-transparent mt-4 hidden md:block" />
                )}
              </div>

              {/* Content */}
              <div className={`flex-1 p-6 rounded-2xl gradient-card border border-border/50 ${
                index % 2 === 1 ? 'md:mr-6' : 'md:ml-0'
              }`}>
                <div className={`flex items-center gap-3 mb-3 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}>
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">{step.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
