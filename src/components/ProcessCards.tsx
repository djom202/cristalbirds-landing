import React, { useState } from 'react';
import { MessageCircle, Lightbulb, Code2, Rocket, CheckCircle, Users, ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { GlassCard } from './ui/GlassCard';
import { Badge } from './ui/Badge';
import { theme } from '../styles/theme';

const ProcessCards = () => {
  const { t } = useTranslation();
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const steps = [
    {
      icon: MessageCircle,
      title: t.process.steps.consultation.title,
      description: t.process.steps.consultation.description,
      details: t.process.steps.consultation.details,
      variant: 'indigo' as const,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      icon: Lightbulb,
      title: t.process.steps.planning.title,
      description: t.process.steps.planning.description,
      details: t.process.steps.planning.details,
      variant: 'purple' as const,
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Code2,
      title: t.process.steps.development.title,
      description: t.process.steps.development.description,
      details: t.process.steps.development.details,
      variant: 'teal' as const,
      color: 'from-teal-500 to-cyan-600'
    },
    {
      icon: CheckCircle,
      title: t.process.steps.testing.title,
      description: t.process.steps.testing.description,
      details: t.process.steps.testing.details,
      variant: 'emerald' as const,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Rocket,
      title: t.process.steps.launch.title,
      description: t.process.steps.launch.description,
      details: t.process.steps.launch.details,
      variant: 'orange' as const,
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Users,
      title: t.process.steps.support.title,
      description: t.process.steps.support.description,
      details: t.process.steps.support.details,
      variant: 'pink' as const,
      color: 'from-pink-500 to-rose-600'
    }
  ];

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section id="process" className={`${theme.spacing.section} ${theme.colors.background.dark}`}>
      <div className={theme.spacing.container}>
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className={`${theme.typography.heading.h2} ${theme.colors.text.primary} mb-4`}>
            {t.process.title} <span className={theme.colors.primary.text}>{t.process.titleHighlight}</span>
          </h2>
          <p className={`${theme.typography.body.large} ${theme.colors.text.secondary} max-w-3xl mx-auto px-4`}>
            {t.process.subtitle}
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <GlassCard
              key={index}
              variant={step.variant}
              className={`cursor-pointer transition-all duration-500 ${
                expandedCard === index 
                  ? 'md:col-span-2 lg:col-span-3 scale-105' 
                  : 'hover:scale-105'
              }`}
              onClick={() => toggleCard(index)}
            >
              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <step.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                    </div>
                    <div>
                      <Badge className="mb-2">Paso {index + 1}</Badge>
                      <h3 className={`${theme.typography.heading.h4} ${theme.colors.text.primary}`}>
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                    {expandedCard === index ? (
                      <ChevronUp className="h-5 w-5 text-slate-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-400" />
                    )}
                  </button>
                </div>

                {/* Description */}
                <p className={`${theme.colors.text.secondary} mb-4 leading-relaxed ${theme.typography.body.base}`}>
                  {step.description}
                </p>

                {/* Expanded Details */}
                {expandedCard === index && (
                  <div className="mt-6 pt-6 border-t border-white/10 animate-fade-in-up">
                    <h4 className={`${theme.typography.heading.h4} ${theme.colors.text.primary} mb-4`}>
                      Detalles del proceso:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start space-x-3 p-4 rounded-lg bg-white/5 border border-white/10">
                          <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className={`${theme.typography.body.small} ${theme.colors.text.secondary}`}>
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessCards;