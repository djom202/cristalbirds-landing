import React from 'react';
import { Monitor, Smartphone, Cloud, Database, Cog, Users } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { FeatureCard } from './ui/FeatureCard';
import { theme } from '../styles/theme';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Monitor,
      title: t.services.items.webApps.title,
      description: t.services.items.webApps.description,
      features: t.services.items.webApps.features,
      variant: 'indigo' as const
    },
    {
      icon: Smartphone,
      title: t.services.items.mobileApps.title,
      description: t.services.items.mobileApps.description,
      features: t.services.items.mobileApps.features,
      variant: 'purple' as const
    },
    {
      icon: Cloud,
      title: t.services.items.cloudSolutions.title,
      description: t.services.items.cloudSolutions.description,
      features: t.services.items.cloudSolutions.features,
      variant: 'teal' as const
    },
    {
      icon: Database,
      title: t.services.items.managementSystems.title,
      description: t.services.items.managementSystems.description,
      features: t.services.items.managementSystems.features,
      variant: 'emerald' as const
    },
    {
      icon: Cog,
      title: t.services.items.automation.title,
      description: t.services.items.automation.description,
      features: t.services.items.automation.features,
      variant: 'orange' as const
    },
    {
      icon: Users,
      title: t.services.items.consulting.title,
      description: t.services.items.consulting.description,
      features: t.services.items.consulting.features,
      variant: 'pink' as const
    }
  ];

  return (
    <section id="services" className={`${theme.spacing.section} ${theme.colors.background.darkAlt}`}>
      <div className={theme.spacing.container}>
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className={`${theme.typography.heading.h2} ${theme.colors.text.primary} mb-4`}>
            {t.services.title} <span className={theme.colors.primary.text}>{t.services.titleHighlight}</span>
          </h2>
          <p className={`${theme.typography.body.large} ${theme.colors.text.secondary} max-w-3xl mx-auto px-4`}>
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <FeatureCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              variant={service.variant}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;