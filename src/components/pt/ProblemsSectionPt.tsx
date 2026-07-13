import { motion } from 'framer-motion';
import { DollarSign, Clock, TrendingDown } from 'lucide-react';

const problems = [
  {
    icon: DollarSign,
    title: 'Caro',
    description: 'Alto custo de produção. Criar anúncios profissionais geralmente exige um grande orçamento para filmagem, edição e várias revisões.',
  },
  {
    icon: Clock,
    title: 'Longos Prazos de Espera',
    description: 'A produção tradicional de vídeo pode levar semanas do conceito à entrega — e você perde oportunidades sensíveis ao tempo.',
  },
  {
    icon: TrendingDown,
    title: 'Difícil de Escalar',
    description: 'Custos altos tornam quase impossível criar múltiplas variações de vídeo para testar diferentes abordagens e públicos.',
  },
];

const ProblemsSectionPt = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium gradient-card border border-border/50 text-primary mb-4">
            Problemas
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            A{' '}
            <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">Dificuldade</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="p-8 rounded-2xl gradient-card border border-destructive/20 shadow-card hover:shadow-card-hover transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-destructive/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <problem.icon className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSectionPt;
