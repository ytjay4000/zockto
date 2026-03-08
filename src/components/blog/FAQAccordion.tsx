import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

const FAQAccordion = ({ faqs }: FAQAccordionProps) => {
  if (faqs.length === 0) return null;

  return (
    <section className="mt-12" id="frequently-asked-questions">
      <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-foreground scroll-mt-24">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`faq-${index}`}
            className="border border-border/50 rounded-xl px-5 data-[state=open]:border-primary/30 bg-card"
          >
            <AccordionTrigger className="text-left font-display font-semibold hover:text-primary transition-colors py-5 text-foreground">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQAccordion;
