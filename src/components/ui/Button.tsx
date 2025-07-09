import React from 'react';
import { theme, cn } from '../../styles/theme';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'small';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
  disabled = false
}) => {
  const baseClass = theme.components.button[variant];
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        baseClass,
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      {children}
    </button>
  );
};