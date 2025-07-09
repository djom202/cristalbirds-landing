import React, { useState, useEffect } from 'react';
import { MessageCircle, Lightbulb, Code2, Rocket, CheckCircle, Users, Play, Pause } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { GlassCard } from './ui/GlassCard';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { theme } from '../styles/theme';

const ProcessStepper = () => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  const steps = [
    {
      icon: MessageCircle,
      title: t.process.steps.consultation.title,
      description: t.process.steps.consultation.description,
      details: t.process.steps.consultation.details,
      variant: 'indigo' as const
    },
    {
      icon: Lightbulb,
      title: t.process.steps.planning.title,
      description: t.process.steps.planning.description,
      details: t.process.steps.planning.details,
      variant: 'purple' as const
    },
    {
      icon: Code2,
      title: t.process.steps.development.title,
      description: t.process.steps.development.description,
      details: t.process.steps.development.details,
      variant: 'teal' as const
    },
    {
      icon: CheckCircle,
      title: t.process.steps.testing.title,
      description: t.process.steps.testing.description,
      details: t.process.steps.testing.details,
      variant: 'emerald' as const
    },
    {
      icon: Rocket,
      title: t.process.steps.launch.title,
      description: t.process.steps.launch.description,
      details: t.process.steps.launch.details,
      variant: 'orange' as const
    },
    {
      icon: Users,
      title: t.process.steps.support.title,
      description: t.process.steps.support.description,
      details: t.process.steps.support.details,
      variant: 'pink' as const
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlay) {
      interval = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % steps.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay, steps.length]);

  return (
    <section id="process" className={`${theme.spacing.section} ${theme.colors.background.dark}`}>
      <div className={theme.spacing.container}>
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className={`${theme.typography.heading.h2} ${theme.colors.text.primary} mb-4`}>
            {t.process.title} <span className={theme.colors.primary.text}>{t.process.titleHighlight}</span>
          </h2>
          <p className={`${theme.typography.body.large} ${theme.colors.text.secondary} max-w-3xl mx-auto px-4 mb-8`}>
            {t.process.subtitle}
          </p>
          
          {/* Auto-play Control */}
          <Button
            variant="secondary"
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="mb-8"
          >
            {isAutoPlay ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            <span>{isAutoPlay ? 'Pausar' : 'Reproducir'} Tour</span>
          </Button>
        </div>

        {/* Horizontal Stepper */}
        <div className="mb-12">
          <div className="flex justify-between items-center relative">
            {/* Progress Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/10 rounded-full transform -translate-y-1/2 z-0">
              <div 
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
              ></div>
            </div>

            {/* Step Indicators */}
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                  index <= currentStep
                    ? 'bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg scale-110'
                    : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                <step.icon className={`h-5 w-5 md:h-6 md:w-6 ${
                  index <= currentStep ? 'text-white' : 'text-slate-400'
                }`} />
                
                {/* Step Number */}
                <div className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-semibold ${
                  index === currentStep ? 'text-cyan-400' : 'text-slate-500'
                }`}>
                  {index + 1}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Current Step Content */}
        <GlassCard variant={steps[currentStep].variant} className="p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Badge variant="gradient">Paso {currentStep + 1} de {steps.length}</Badge>
                <Badge>{steps[currentStep].title}</Badge>
              </div>
              
              <h3 className={`${theme.typography.heading.h2} ${theme.colors.text.primary} mb-4`}>
                {steps[currentStep].title}
              </h3>
              
              <p className={`${theme.colors.text.secondary} mb-6 leading-relaxed ${theme.typography.body.large}`}>
                {steps[currentStep].description}
              </p>

              {/* Navigation Buttons */}
              <div className="flex space-x-4">
                <Button
                  variant="secondary"
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                  className="disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Anterior
                </Button>
                <Button
                  onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                  disabled={currentStep === steps.length - 1}
                  className="disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Siguiente
                </Button>
              </div>
            </div>

            {/* Details */}
            <div>
              <h4 className={`${theme.typography.heading.h4} ${theme.colors.text.primary} mb-4`}>
                Actividades clave:
              </h4>
              <div className="space-y-3">
                {steps[currentStep].details.map((detail, detailIndex) => (
                  <div 
                    key={detailIndex} 
                    className="flex items-start space-x-3 p-4 rounded-lg bg-white/5 border border-white/10 animate-fade-in-up"
                    style={{ animationDelay: `${detailIndex * 0.1}s` }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className={`${theme.typography.body.base} ${theme.colors.text.secondary}`}>
                      {detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Step Overview */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`p-4 rounded-lg text-center transition-all duration-300 ${
                index === currentStep
                  ? `glass-card-${step.variant} scale-105`
                  : 'glass-card hover:glass-card-indigo'
              }`}
            >
              <step.icon className={`h-6 w-6 mx-auto mb-2 ${
                index === currentStep ? 'text-cyan-400' : 'text-slate-400'
              }`} />
              <span className={`text-xs font-medium ${
                index === currentStep ? theme.colors.text.primary : theme.colors.text.muted
              }`}>
                {step.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessStepper;