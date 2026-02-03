import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How long does it take to create an ad for my brand using Zockto?',
    answer: 'You can create an ad of any of your products in just 5 clicks. It will then take between 5-30 minutes for our software to generate the ready-to-post studio quality ad.',
  },
  {
    question: 'Do I need technical skills to use Zockto?',
    answer: 'Not at all. Zockto is built for teams of all sizes. Whether you\'re in marketing, product, or running a business on your own, the interface is intuitive and very easy to use.',
  },
  {
    question: 'What types of companies are using Zockto?',
    answer: 'Businesses selling or marketing physical products, like E-commerce stores, have seen the best results using Zockto\'s UGC ad feature.',
  },
  {
    question: 'Is my data secure on Zockto?',
    answer: 'Absolutely. We use enterprise-grade encryption and follow best practices in data privacy and compliance.',
  },
  {
    question: 'Can I try Zockto for free before committing?',
    answer: 'Yes, we offer a free trial, so you can explore all features and create a sample video before upgrading to a paid plan.',
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium gradient-card border border-border/50 text-primary mb-4">
            FAQ's
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Common questions with{' '}
            <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
              Clear answers
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here are answers to the most common things people ask before getting started.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="gradient-card border border-border/50 rounded-xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-display font-semibold hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
