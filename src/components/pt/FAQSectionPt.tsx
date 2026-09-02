import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Quanto tempo leva para criar um anúncio para minha marca com a Zockto?',
    answer: 'Você cria um anúncio de qualquer produto em apenas 5 cliques. Depois disso, nosso software leva de 5 a 30 minutos para gerar o anúncio pronto para postar, com qualidade de estúdio.',
  },
  {
    question: 'Preciso de conhecimento técnico para usar a Zockto?',
    answer: 'De jeito nenhum. A Zockto foi feita para times de todos os tamanhos. Seja você de marketing, produto ou tocando seu negócio sozinho, a interface é intuitiva e muito fácil de usar.',
  },
  {
    question: 'Que tipos de empresas usam a Zockto?',
    answer: 'Empresas que vendem ou divulgam produtos físicos — como lojas de e-commerce — têm os melhores resultados com o recurso de anúncios UGC da Zockto.',
  },
  {
    question: 'Meus dados estão seguros na Zockto?',
    answer: 'Com certeza. Usamos criptografia de nível empresarial e seguimos as melhores práticas de privacidade e conformidade de dados, em conformidade com a LGPD.',
  },
  {
    question: 'Posso testar a Zockto antes de assinar?',
    answer: 'Sim, você pode explorar todos os recursos e criar um vídeo de amostra antes de partir para um plano pago.',
  },
];

const FAQSectionPt = () => {
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
            Perguntas Frequentes
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Dúvidas comuns com{' '}
            <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">respostas claras</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Aqui estão as respostas para o que as pessoas mais perguntam antes de começar.
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

export default FAQSectionPt;
