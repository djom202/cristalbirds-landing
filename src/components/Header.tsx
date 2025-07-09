import React, { useState, useEffect } from 'react';
import { Menu, X, Layers } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { LanguageToggle } from './ui/LanguageToggle';
import { theme } from '../styles/theme';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: t.nav.home, id: 'hero' },
    { label: t.nav.services, id: 'services' },
    { label: t.nav.process, id: 'process' },
    { label: t.nav.portfolio, id: 'portfolio' },
    { label: t.nav.testimonials, id: 'testimonials' },
    { label: t.nav.contact, id: 'contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-card' : 'bg-transparent'
    }`}>
      <div className={theme.spacing.container}>
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer mobile-touch-target" onClick={() => scrollToSection('hero')}>
            <div className="relative">
              <Layers className={`${theme.components.icon.medium} text-cyan-400`} />
              <div className="absolute inset-0 bg-cyan-400/30 rounded-full blur-lg animate-pulse"></div>
            </div>
            <span className={`${theme.typography.heading.h4} ${theme.colors.primary.text}`}>
              CristalBirds
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-200 hover:text-cyan-400 transition-colors duration-200 font-medium relative group px-2 py-1"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <LanguageToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <LanguageToggle />
            <button
              className="p-2 rounded-lg glass-card hover:glass-card-indigo transition-all duration-200 mobile-touch-target"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5 text-slate-200" /> : <Menu className="h-5 w-5 text-slate-200" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass-card-indigo border-t border-white/20 shadow-xl">
            <nav className="flex flex-col py-4 px-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left py-3 px-4 text-slate-200 hover:text-cyan-400 hover:bg-white/10 rounded-lg transition-all duration-200 mobile-touch-target"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;