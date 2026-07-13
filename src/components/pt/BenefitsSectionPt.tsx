import { motion } from 'framer-motion';
import { Zap, Coins, Globe } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: 'Ultra Rápido',
    description: 'Chega de esperar por agências de publicidade, criadores ou editores. Cole o link do produto, escolha um avatar e tenha um vídeo de anúncio pronto para postar.',
  },
  {
    icon: Coins,
    title: 'Rápido e Acessível',
    description: 'Crie quantas variações precisar e descubra o que funciona melhor em minutos. Chega de ficar preso a um único vídeo caro torcendo pra performar.',
  },
  {
    icon: Globe,
    title: 'Vá Global',
    description: 'Não deixe barreiras de idioma limitarem sua estratégia. Crie anúncios em dezenas de idiomas para atingir públicos diferentes e escalar em vários países.',
  },
];

const BenefitsSectionPt = () => {
  return (
    <section id="benefits" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] gradient-glow opacity-50" />

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium gradient-card border border-border/50 text-primary mb-4">
            Benefícios
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Por que as marcas escolhem{' '}
            <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">Zockto</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="p-8 rounded-2xl gradient-card border border-primary/20 shadow-card hover:shadow-card-hover transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSectionPt;
