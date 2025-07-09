import { useState, useEffect, useCallback } from 'react';
import { translations, Translation } from '../i18n/translations';

type Language = 'en' | 'es';

// Initialize language outside of component to avoid re-initialization
const getInitialLanguage = (): Language => {
  // Check localStorage first, then browser language, default to English
  const saved = localStorage.getItem('language') as Language;
  if (saved && (saved === 'en' || saved === 'es')) {
    return saved;
  }
  
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('es')) {
    return 'es';
  }
  
  return 'en';
};

export const useTranslation = () => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const [t, setT] = useState<Translation>(translations[language]);

  useEffect(() => {
    // Update translations when language changes
    setT(translations[language]);
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const changeLanguage = useCallback((newLanguage: Language) => {
    if (newLanguage !== language) {
      setLanguage(newLanguage);
    }
  }, [language]);

  return {
    t,
    language,
    changeLanguage,
    isSpanish: language === 'es',
    isEnglish: language === 'en'
  };
};