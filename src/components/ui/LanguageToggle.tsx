import React from 'react';
import { Globe } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import { GlassCard } from './GlassCard';

export const LanguageToggle: React.FC = () => {
  const { language, changeLanguage } = useTranslation();

  const handleLanguageChange = (newLanguage: 'en' | 'es') => {
    changeLanguage(newLanguage);
  };

  return (
    <GlassCard variant="base" className="flex items-center space-x-2 px-3 py-2">
      <Globe className="h-4 w-4 text-cyan-400" />
      <div className="flex space-x-1">
        <button
          type="button"
          onClick={() => handleLanguageChange('en')}
          className={`px-2 py-1 text-xs font-medium rounded transition-all duration-300 ${
            language === 'en'
              ? 'bg-cyan-400 text-white shadow-lg scale-105'
              : 'text-slate-300 hover:text-cyan-400 hover:bg-white/10'
          }`}
          aria-label="Switch to English"
        >
          EN
        </button>
        <button
          type="button"
          onClick={() => handleLanguageChange('es')}
          className={`px-2 py-1 text-xs font-medium rounded transition-all duration-300 ${
            language === 'es'
              ? 'bg-cyan-400 text-white shadow-lg scale-105'
              : 'text-slate-300 hover:text-cyan-400 hover:bg-white/10'
          }`}
          aria-label="Cambiar a Español"
        >
          ES
        </button>
      </div>
    </GlassCard>
  );
};