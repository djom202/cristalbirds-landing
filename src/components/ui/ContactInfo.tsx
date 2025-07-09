import React from 'react';
import type { LucideIcon } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { theme } from '../../styles/theme';

interface ContactInfoProps {
  icon: LucideIcon;
  title: string;
  content: string;
  subtitle: string;
  variant?: 'indigo' | 'purple' | 'teal' | 'emerald' | 'pink' | 'orange';
}

export const ContactInfo: React.FC<ContactInfoProps> = ({
  icon: Icon,
  title,
  content,
  subtitle,
  variant = 'indigo'
}) => {
  return (
    <GlassCard variant={variant} className={theme.spacing.card}>
      <div className="flex items-start space-x-3 md:space-x-4">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-filter backdrop-blur-lg rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg border border-white/20">
          <Icon className={`${theme.components.icon.medium} text-white`} />
        </div>
        <div>
          <h4 className={`font-semibold ${theme.colors.text.primary} mb-1 ${theme.typography.body.base}`}>
            {title}
          </h4>
          <p className={`${theme.colors.text.accent} font-medium mb-1 ${theme.typography.body.base}`}>
            {content}
          </p>
          <p className={`${theme.colors.text.muted} ${theme.typography.body.small}`}>
            {subtitle}
          </p>
        </div>
      </div>
    </GlassCard>
  );
};