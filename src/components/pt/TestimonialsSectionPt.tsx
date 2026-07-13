import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Meet Shah',
    role: 'Dono de Marca D2C',
    quote: 'Rodando uma marca D2C, criativos são tudo. O Zockto me deixa gerar novas variações de anúncio só com o link do produto — sem gravações, sem editores. Meu ROAS melhorou de verdade desde que comecei a testar mais criativos por semana.',
  },
  {
    name: 'Khushi',
    role: 'Vendedora de E-commerce',
    quote: 'Vendo em vários marketplaces e nunca tinha tempo pra fazer vídeos. Com o Zockto eu só colo a URL do produto e recebo um anúncio pronto pra postar. Meus anúncios finalmente parecem os das grandes marcas.',
  },
  {
    name: 'Sriniwasa',
    role: 'Gestor de Tráfego',
    quote: 'Como gestor de tráfego, o teste de criativos é o gargalo. O Zockto me dá 10+ variações no tempo que eu levava pra briefar uma. Criativos vencedores aparecem em dias, não em semanas.',
  },
  {
    name: 'Tarun',
    role: 'Fundador',
    quote: 'Estávamos queimando dinheiro com agências e freelancers pra cada novo anúncio. O Zockto substituiu esse fluxo inteiro. Anúncios UGC com qualidade de estúdio, na hora, por uma fração do custo — é decisão óbvia pra qualquer fundador.',
  },
  {
    name: 'Sahil',
    role: 'Fundador, Marca de Vestuário',
    quote: 'Representamos uma marca de vestuário e nosso trabalho é mostrar produtos. Testamos várias ferramentas de vídeo com IA — o Zockto se destacou. O preço é justo, você dá um prompt simples e o vídeo sai exatamente como você quer, com ótima qualidade e prazo curto.',
  },
  {
    name: 'Neha',
    role: 'Cofundadora, Marca de Skincare',
    quote: 'Nossa categoria é skincare e beleza. Testei o Zockto recentemente e é honestamente a ferramenta de vídeo com IA mais fácil que já usei. A maioria te faz brigar com prompts e geração de imagem — aqui você só escolhe um template, envia seu produto e recebe vídeos originais na hora.',
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="w-full p-5 md:p-6 rounded-2xl gradient-card border border-border/50 mb-4 md:mb-6">
    <Quote className="w-6 h-6 md:w-8 md:h-8 text-primary/40 mb-3 md:mb-4" />
    <p className="text-foreground/90 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">{testimonial.quote}</p>
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 md:w-10 md:h-10 rounded-full gradient-primary flex items-center justify-center">
        <span className="text-primary-foreground font-semibold text-xs md:text-sm">
          {testimonial.name.split(' ').map((n) => n[0]).join('')}
        </span>
      </div>
      <div className="flex flex-col">
        <span className="font-display font-semibold text-sm md:text-base leading-tight">{testimonial.name}</span>
        <span className="text-xs text-muted-foreground">{testimonial.role}</span>
      </div>
    </div>
  </div>
);

const TestimonialsSectionPt = () => {
  const looped = [...testimonials, ...testimonials];

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
            Depoimentos
          </span>
          <h2 className="font-display text-2xl md:text-5xl font-bold mb-4">
            O que outros dizem{' '}
            <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">sobre nós</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Veja o que times e marcas de destaque falam sobre o gerador de vídeos de produto do Zockto.
          </p>
        </motion.div>
      </div>

      <div className="container px-4">
        <div className="relative max-w-xl mx-auto h-[600px] overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
          <div className="animate-marquee-y">
            {looped.map((testimonial, index) => (
              <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSectionPt;
