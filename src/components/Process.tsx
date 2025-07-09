import React, { useState } from 'react';
import { MessageCircle, Lightbulb, Code2, Rocket, CheckCircle, Users, Clock, ArrowRight } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { GlassCard } from './ui/GlassCard';
import { Badge } from './ui/Badge';
import { theme } from '../styles/theme';

const Process = () => {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: MessageCircle,
      title: t.process.steps.consultation.title,
      description: t.process.steps.consultation.description,
      details: t.process.steps.consultation.details,
      duration: '1-2 semanas',
      variant: 'indigo' as const
    },
    {
      icon: Lightbulb,
      title: t.process.steps.planning.title,
      description: t.process.steps.planning.description,
      details: t.process.steps.planning.details,
      duration: '2-3 semanas',
      variant: 'purple' as const
    },
    {
      icon: Code2,
      title: t.process.steps.development.title,
      description: t.process.steps.development.description,
      details: t.process.steps.development.details,
      duration: '4-12 semanas',
      variant: 'teal' as const
    },
    {
      icon: CheckCircle,
      title: t.process.steps.testing.title,
      description: t.process.steps.testing.description,
      details: t.process.steps.testing.details,
      duration: '1-2 semanas',
      variant: 'emerald' as const
    },
    {
      icon: Rocket,
      title: t.process.steps.launch.title,
      description: t.process.steps.launch.description,
      details: t.process.steps.launch.details,
      duration: '1 semana',
      variant: 'orange' as const
    },
    {
      icon: Users,
      title: t.process.steps.support.title,
      description: t.process.steps.support.description,
      details: t.process.steps.support.details,
      duration: 'Continuo',
      variant: 'pink' as const
    }
  ];

  const ActiveStepIcon = steps[activeStep].icon;

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Timeline Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h3 className={`${theme.typography.heading.h3} ${theme.colors.text.primary} mb-6`}>
                Fases del Proyecto
              </h3>
              <div className="space-y-4">
                {steps.map((step, index) => {
                  const StepIcon = step.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveStep(index)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                        activeStep === index
                          ? `glass-card-${step.variant} scale-105 shadow-lg`
                          : 'glass-card hover:glass-card-indigo'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          activeStep === index 
                            ? 'bg-gradient-to-br from-cyan-400 to-blue-500' 
                            : 'bg-white/10'
                        }`}>
                          <StepIcon className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className={`font-semibold ${theme.colors.text.primary} text-sm`}>
                              {step.title}
                            </span>
                            <Badge>{step.duration}</Badge>
                          </div>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-xs text-slate-400">Paso {index + 1}</span>
                            {activeStep === index && (
                              <ArrowRight className="h-3 w-3 text-cyan-400" />
                            )}
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Active Step Details */}
          <div className="lg:col-span-2">
            <GlassCard variant={steps[activeStep].variant} className="p-6 md:p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <ActiveStepIcon className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className={`${theme.typography.heading.h3} ${theme.colors.text.primary}`}>
                      {steps[activeStep].title}
                    </h3>
                    <Badge variant="gradient">
                      <Clock className="h-3 w-3 mr-1" />
                      {steps[activeStep].duration}
                    </Badge>
                  </div>
                  <p className={`${theme.colors.text.secondary} ${theme.typography.body.large} leading-relaxed`}>
                    {steps[activeStep].description}
                  </p>
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {steps[activeStep].details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-start space-x-3 p-4 rounded-lg bg-white/5 border border-white/10">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className={`${theme.typography.body.base} ${theme.colors.text.secondary}`}>
                      {detail}
                    </span>
                  </div>
                ))}
              </div>

              {/* Progress Indicator */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className={`${theme.typography.body.small} ${theme.colors.text.muted}`}>
                    Progreso del proceso
                  </span>
                  <span className={`${theme.typography.body.small} ${theme.colors.text.accent} font-semibold`}>
                    {Math.round(((activeStep + 1) / steps.length) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;