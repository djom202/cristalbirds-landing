import React from 'react';
import { theme, cn } from '../../styles/theme';

interface GlassCardProps {
  children: React.ReactNode;
  variant?: 'base' | 'indigo' | 'purple' | 'teal' | 'emerald' | 'pink' | 'orange';
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  variant = 'base',
  className = '',
  hover = true,
  onClick
}) => {
  const variantClass = variant === 'base' ? theme.glass.card : `glass-card-${variant}`;
  const hoverClass = hover ? theme.animations.hover : '';
  
  return (
    <div
      className={cn(
        variantClass,
        hoverClass,
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};