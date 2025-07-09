import React from 'react';
import { theme, cn } from '../../styles/theme';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'gradient';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className = '',
  variant = 'default'
}) => {
  const baseClass = variant === 'gradient' 
    ? 'inline-block px-3 py-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs md:text-sm rounded-full font-medium shadow-lg'
    : theme.components.badge;
  
  return (
    <span className={cn(baseClass, className)}>
      {children}
    </span>
  );
};