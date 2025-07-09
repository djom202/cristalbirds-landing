import React from 'react';
import { ArrowRight, Sparkles, Code, Zap } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { Button } from './ui/Button';
import { GlassCard } from './ui/GlassCard';
import { theme } from '../styles/theme';

const Hero = () => {
  const { t } = useTranslation();

  const features = [
    { 
      icon: Code, 
      title: t.hero.features.custom.title, 
      desc: t.hero.features.custom.desc, 
      variant: 'indigo' as const 
    },
    { 
      icon: Zap, 
      title: t.hero.features.fast.title, 
      desc: t.hero.features.fast.desc, 
      variant: 'purple' as const 
    },
    { 
      icon: Sparkles, 
      title: t.hero.features.design.title, 
      desc: t.hero.features.design.desc, 
      variant: 'teal' as const 
    }
  ];

  return (
    <section id="hero" className={`min-h-screen flex items-center justify-center relative overflow-hidden ${theme.colors.background.dark} pt-16 md:pt-0`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-24 h-24 md:w-48 md:h-48 bg-gradient-to-r from-teal-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className={`relative ${theme.spacing.container} text-center`}>
        <div className={theme.animations.fadeInUp}>
          {/* Badge */}
          <GlassCard variant="teal" className="inline-flex items-center space-x-2 rounded-full px-3 md:px-4 py-2 mb-6 md:mb-8">
            <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-teal-400" />
            <span className={`${theme.typography.body.small} font-medium ${theme.colors.text.secondary}`}>
              {t.hero.badge}
            </span>
          </GlassCard>

          {/* Main Heading */}
          <h1 className={`${theme.typography.heading.h1} ${theme.colors.text.primary} mb-4 md:mb-6 leading-tight px-4`}>
            {t.hero.title}
            <span className={`${theme.colors.primary.text} block`}>
              {t.hero.titleHighlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p className={`${theme.typography.body.large} ${theme.colors.text.secondary} mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-4`}>
            {t.hero.subtitle}
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12 max-w-4xl mx-auto px-4">
            {features.map((feature, index) => (
              <GlassCard key={index} variant={feature.variant} className="rounded-xl p-4 md:p-6">
                <feature.icon className={`${theme.components.icon.medium} text-cyan-400 mx-auto mb-2 md:mb-3`} />
                <h3 className={`font-semibold ${theme.colors.text.primary} mb-1 md:mb-2 ${theme.typography.body.base}`}>
                  {feature.title}
                </h3>
                <p className={`${theme.colors.text.secondary} ${theme.typography.body.small}`}>
                  {feature.desc}
                </p>
              </GlassCard>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group"
            >
              <span className="flex items-center justify-center space-x-2">
                <span className={theme.typography.body.base}>{t.hero.cta.primary}</span>
                <ArrowRight className={`${theme.components.icon.small} group-hover:translate-x-1 transition-transform duration-200`} />
              </span>
            </Button>
            
            <Button 
              variant="secondary"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className={theme.typography.body.base}>{t.hero.cta.secondary}</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;