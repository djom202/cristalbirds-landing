import React from 'react';
import { ExternalLink, Cloud, Shield, Zap, Globe, Award, ArrowRight } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { GlassCard } from './ui/GlassCard';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { theme } from '../styles/theme';

export default function AWSPartnership() {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: Cloud,
      title: t.aws.benefits.scalability.title,
      description: t.aws.benefits.scalability.description,
      variant: 'indigo' as const
    },
    {
      icon: Shield,
      title: t.aws.benefits.security.title,
      description: t.aws.benefits.security.description,
      variant: 'emerald' as const
    },
    {
      icon: Zap,
      title: t.aws.benefits.performance.title,
      description: t.aws.benefits.performance.description,
      variant: 'orange' as const
    },
    {
      icon: Globe,
      title: t.aws.benefits.global.title,
      description: t.aws.benefits.global.description,
      variant: 'purple' as const
    }
  ];

  const handleAWSDocsClick = () => {
    window.open('https://docs.aws.amazon.com/', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className={`${theme.spacing.section} ${theme.colors.background.darkAlt}`}>
      <div className={theme.spacing.container}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content Side */}
          <div className="order-2 lg:order-1">
            <div className="mb-6">
              <Badge variant="gradient" className="mb-4 inline-flex items-center">
                <Award className="h-3 w-3 mr-1" />
                {t.aws.badge}
              </Badge>
              <h2 className={`${theme.typography.heading.h2} ${theme.colors.text.primary} mb-4`}>
                {t.aws.title}
              </h2>
              <p className={`${theme.typography.body.large} ${theme.colors.text.secondary} leading-relaxed mb-6`}>
                {t.aws.description}
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className={`font-semibold ${theme.colors.text.primary} mb-1 ${theme.typography.body.base}`}>
                      {benefit.title}
                    </h4>
                    <p className={`${theme.colors.text.secondary} ${theme.typography.body.small}`}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button onClick={handleAWSDocsClick} className="group inline-flex items-center">
              <ExternalLink className={`${theme.components.icon.small} mr-2 group-hover:translate-x-1 transition-transform duration-200`} />
              <span className={theme.typography.body.base}>{t.aws.cta}</span>
            </Button>
          </div>

          {/* AWS Card Side */}
          <div className="order-1 lg:order-2">
            <GlassCard variant="orange" className="p-8 md:p-12 text-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-16 h-16 border-2 border-orange-400 rounded-lg rotate-12"></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-orange-400 rounded-lg -rotate-12"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-orange-400/30 rounded-full"></div>
              </div>

              {/* AWS Logo Area */}
              <div className="relative z-10 mb-6">
                <div className="w-24 h-24 md:w-32 md:h-32 mx-auto bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex flex-col items-center justify-center shadow-2xl mb-4">
                  {/* AWS Logo */}
                  <div className="text-white font-bold text-xl md:text-2xl mb-1">aws</div>
                  {/* AWS Smile/Arrow */}
                  <div className="w-8 h-1 bg-gradient-to-r from-yellow-400 to-orange-300 rounded-full relative">
                    <div className="absolute right-0 top-0 w-0 h-0 border-l-2 border-l-yellow-400 border-t border-t-transparent border-b border-b-transparent transform translate-x-1"></div>
                  </div>
                </div>
              </div>

              {/* Certified Partner Button */}
              <div className="relative">
                <button
                  onClick={handleAWSDocsClick}
                  className="w-full px-6 py-4 bg-white/10 backdrop-filter backdrop-blur-lg rounded-xl border border-white/20 text-white font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <Shield className="h-4 w-4" />
                    <span className={theme.typography.body.base}>{t.aws.partnerBadge}</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </button>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-6 right-6 w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-6 left-6 w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-1000"></div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}