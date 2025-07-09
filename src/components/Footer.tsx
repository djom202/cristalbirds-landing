import React from 'react';
import { Layers, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { theme } from '../styles/theme';

const Footer = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn', variant: 'glass-card-indigo' },
    { icon: Twitter, href: '#', label: 'Twitter', variant: 'glass-card-purple' },
    { icon: Github, href: '#', label: 'GitHub', variant: 'glass-card-teal' }
  ];

  return (
    <footer className={`${theme.colors.background.dark} border-t border-white/10`}>
      <div className={`${theme.spacing.container} py-12 md:py-16`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4 md:mb-6">
              <div className="relative">
                <Layers className={`${theme.components.icon.medium} text-cyan-400`} />
                <div className="absolute inset-0 bg-cyan-400/30 rounded-full blur-lg animate-pulse"></div>
              </div>
              <span className={`${theme.typography.heading.h4} ${theme.colors.primary.text}`}>
                CristalBirds
              </span>
            </div>
            
            <p className={`${theme.colors.text.secondary} mb-4 md:mb-6 leading-relaxed max-w-md ${theme.typography.body.base}`}>
              {t.footer.description}
            </p>

            {/* Contact Info */}
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-center space-x-2 md:space-x-3">
                <Mail className={`${theme.components.icon.small} text-cyan-400`} />
                <span className={`${theme.colors.text.primary} ${theme.typography.body.base}`}>hola@cristalbirds.com</span>
              </div>
              <div className="flex items-center space-x-2 md:space-x-3">
                <Phone className={`${theme.components.icon.small} text-cyan-400`} />
                <span className={`${theme.colors.text.primary} ${theme.typography.body.base}`}>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 md:space-x-3">
                <MapPin className={`${theme.components.icon.small} text-cyan-400`} />
                <span className={`${theme.colors.text.primary} ${theme.typography.body.base}`}>Madrid, España</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className={`font-bold ${theme.colors.text.primary} mb-3 md:mb-4 ${theme.typography.body.base}`}>
              {t.footer.services.title}
            </h3>
            <ul className="space-y-1 md:space-y-2">
              {t.footer.services.items.map((service, index) => (
                <li key={index}>
                  <button className={`${theme.colors.text.secondary} hover:text-cyan-400 transition-colors duration-200 text-left ${theme.typography.body.base} mobile-touch-target`}>
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className={`font-bold ${theme.colors.text.primary} mb-3 md:mb-4 ${theme.typography.body.base}`}>
              {t.footer.company.title}
            </h3>
            <ul className="space-y-1 md:space-y-2">
              {t.footer.company.items.map((item, index) => (
                <li key={index}>
                  <button className={`${theme.colors.text.secondary} hover:text-cyan-400 transition-colors duration-200 text-left ${theme.typography.body.base} mobile-touch-target`}>
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-8 md:mt-12 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <p className={`${theme.colors.text.muted} ${theme.typography.body.small} mb-4 md:mb-0`}>
              {t.footer.copyright}
            </p>

            {/* Social Links */}
            <div className="flex space-x-3 md:space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-8 h-8 md:w-10 md:h-10 ${social.variant} rounded-lg flex items-center justify-center ${theme.colors.text.secondary} hover:text-white hover:scale-110 transition-all duration-200 mobile-touch-target`}
                >
                  <social.icon className={theme.components.icon.small} />
                </a>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-6 mt-4 md:mt-6 pt-4 md:pt-6 border-t border-white/10">
            {t.footer.legal.map((item, index) => (
              <button
                key={index}
                className={`${theme.typography.body.small} ${theme.colors.text.muted} hover:text-cyan-400 transition-colors duration-200 mobile-touch-target`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;