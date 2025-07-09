import React from 'react';
import type { LucideIcon } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { Badge } from './Badge';
import { theme } from '../../styles/theme';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  variant?: 'indigo' | 'purple' | 'teal' | 'emerald' | 'pink' | 'orange';
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  features,
  variant = 'indigo'
}) => {
  return (
    <GlassCard variant={variant} className={theme.spacing.card}>
      {/* Icon */}
      <div className="relative mb-4 md:mb-6">
        <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 backdrop-filter backdrop-blur-lg rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg border border-white/20">
          <Icon className={`${theme.components.icon.medium} text-white`} />
        </div>
        <div className="absolute inset-0 bg-white/5 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <h3 className={`${theme.typography.heading.h4} ${theme.colors.text.primary} mb-3`}>
        {title}
      </h3>
      <p className={`${theme.colors.text.secondary} mb-4 md:mb-6 leading-relaxed ${theme.typography.body.base}`}>
        {description}
      </p>

      {/* Features */}
      <div className="flex flex-wrap gap-2">
        {features.map((feature, index) => (
          <Badge key={index}>
            {feature}
          </Badge>
        ))}
      </div>
    </GlassCard>
  );
};