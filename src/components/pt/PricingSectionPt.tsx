import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AppLink from '@/components/AppLink';

const plans = [
  {
    name: 'Plano Básico',
    monthlyPrice: 29,
    annualMonthly: 23,
    annualTotal: 276,
    credits: '600',
    description: 'Perfeito para começar',
    whatYouGet: [
      '12 × vídeos de 10s',
      '8 × vídeos de 15s',
      '4 × vídeos de 45s',
      '3 × vídeos de 60s',
      '40 criativos de imagem do produto',
    ],
    features: [
      'Qualidade de vídeo 1080p',
      '200+ vozes públicas + clonagem de voz',
      '150+ avatares, clonagem de avatar',
      '100+ templates, 48 idiomas suportados',
    ],
    popular: false,
  },
  {
    name: 'Plano Creator',
    monthlyPrice: 59,
    annualMonthly: 47,
    annualTotal: 564,
    credits: '2.400',
    description: 'Perfeito para criadores de conteúdo',
    whatYouGet: [
      '48 × vídeos de 10s',
      '32 × vídeos de 15s',
      '16 × vídeos de 45s',
      '12 × vídeos de 60s',
      '160 criativos de imagem do produto',
    ],
    features: [
      'Qualidade de vídeo 1080p',
      '200+ vozes públicas + clonagem de voz',
      '150+ avatares, clonagem de avatar',
      '100+ templates, 48 idiomas suportados',
    ],
    popular: true,
  },
  {
    name: 'Plano Business',
    monthlyPrice: 149,
    annualMonthly: 119,
    annualTotal: 1428,
    credits: '8.500',
    description: 'Melhor para empresas e agências',
    whatYouGet: [
      '170 × vídeos de 10s',
      '113 × vídeos de 15s',
      '57 × vídeos de 45s',
      '43 × vídeos de 60s',
      '567 criativos de imagem do produto',
    ],
    features: [
      'Qualidade de vídeo 1080p',
      '200+ vozes públicas + clonagem de voz',
      '150+ avatares, clonagem de avatar',
      '100+ templates, 48 idiomas suportados',
    ],
    popular: false,
  },
];

const formatUSD = (value: number) =>
  value.toLocaleString('pt-BR', { maximumFractionDigits: 0 });

const PricingSectionPt = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const currency = '$';

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] gradient-glow opacity-30" />

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium gradient-card border border-border/50 text-primary mb-4">
            Nossos Preços
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Escolha o melhor plano{' '}
            <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">pra você</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Preços flexíveis para cada fase — do início ao scale, sem taxas escondidas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center rounded-full bg-muted p-1 gap-1">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                !isAnnual ? 'bg-primary text-primary-foreground shadow-md' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                isAnnual ? 'bg-primary text-primary-foreground shadow-md' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Anual
              <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full font-bold">Economize 20%</span>
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative rounded-2xl border bg-card shadow-card hover:shadow-card-hover transition-all duration-300 ${
                plan.popular ? 'border-primary shadow-glow scale-105 md:scale-105' : 'border-border/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-primary text-sm font-semibold text-primary-foreground flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  Mais popular
                </div>
              )}

              <div className="p-8 text-center">
                <h3 className="font-display text-xl font-bold mb-4 text-foreground/80">{plan.name}</h3>

                <div className="mb-1">
                  <span className="font-display text-5xl font-bold">
                    {currency}
                    {isAnnual ? formatUSD(plan.annualMonthly) : formatUSD(plan.monthlyPrice)}
                  </span>
                  <span className="text-muted-foreground text-lg">/ mês</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  {isAnnual
                    ? `cobrado ${currency}${formatUSD(plan.annualTotal)}/ano`
                    : 'cobrado mensalmente'}
                </p>

                <div className="flex items-center justify-center gap-2 mb-6">
                  <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                  <span className="text-lg font-bold">{plan.credits} créditos por mês</span>
                </div>

                <Button variant={plan.popular ? 'hero' : 'outline'} className="w-full mb-6" asChild>
                  <AppLink>Começar Agora</AppLink>
                </Button>

                <div className="rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 p-5 mb-6 text-left">
                  <h4 className="font-bold text-primary mb-3">O que você recebe</h4>
                  <ul className="space-y-2">
                    {plan.whatYouGet.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span className="text-sm text-primary">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <ul className="space-y-3 text-left">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-sm text-muted-foreground mt-6 italic">{plan.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSectionPt;
