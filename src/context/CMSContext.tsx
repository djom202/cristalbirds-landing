import React, { createContext, useContext, ReactNode } from 'react';
import { useCMSContent } from '../hooks/useCMSContent';
import { useTranslation } from '../hooks/useTranslation';
import type {
  HeroContent,
  ServiceContent,
  ProjectContent,
  TestimonialContent,
  ProcessStepContent,
  ContactInfoContent,
  SiteSettingsContent,
  AWSPartnershipContent
} from '../services/cms';

interface CMSContextType {
  hero: HeroContent | null;
  services: ServiceContent[];
  projects: ProjectContent[];
  testimonials: TestimonialContent[];
  processSteps: ProcessStepContent[];
  contactInfo: ContactInfoContent | null;
  siteSettings: SiteSettingsContent | null;
  awsPartnership: AWSPartnershipContent | null;
  loading: boolean;
  error: string | null;
  refreshContent: () => void;
  submitContactForm: (formData: {
    name: string;
    email: string;
    company?: string;
    project?: string;
    message: string;
  }) => Promise<boolean>;
  getImageUrl: (image: any) => string;
  isCMSEnabled: boolean;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

interface CMSProviderProps {
  children: ReactNode;
}

export const CMSProvider: React.FC<CMSProviderProps> = ({ children }) => {
  const { language } = useTranslation();
  const cmsContent = useCMSContent(language);
  
  // Verificar si el CMS está habilitado
  const isCMSEnabled = Boolean(import.meta.env.VITE_CMS_URL);

  const contextValue: CMSContextType = {
    ...cmsContent,
    isCMSEnabled
  };

  return (
    <CMSContext.Provider value={contextValue}>
      {children}
    </CMSContext.Provider>
  );
};

export const useCMSContext = (): CMSContextType => {
  const context = useContext(CMSContext);
  if (context === undefined) {
    throw new Error('useCMSContext must be used within a CMSProvider');
  }
  return context;
};

// Hook para obtener contenido híbrido (CMS + fallback estático)
export const useHybridContent = () => {
  const { t } = useTranslation();
  const cms = useCMSContext();

  // Función para obtener contenido con fallback
  const getContent = <T,>(cmsContent: T | null, fallbackContent: T): T => {
    if (!cms.isCMSEnabled || cms.loading || !cmsContent) {
      return fallbackContent;
    }
    return cmsContent;
  };

  return {
    ...cms,
    getContent,
    // Contenido específico con fallbacks
    heroContent: getContent(cms.hero, {
      attributes: {
        badge: t.hero.badge,
        title: t.hero.title,
        titleHighlight: t.hero.titleHighlight,
        subtitle: t.hero.subtitle,
        primaryCTA: t.hero.cta.primary,
        secondaryCTA: t.hero.cta.secondary,
        features: [
          {
            title: t.hero.features.custom.title,
            description: t.hero.features.custom.desc,
            icon: 'Code'
          },
          {
            title: t.hero.features.fast.title,
            description: t.hero.features.fast.desc,
            icon: 'Zap'
          },
          {
            title: t.hero.features.design.title,
            description: t.hero.features.design.desc,
            icon: 'Sparkles'
          }
        ]
      }
    }),
    awsContent: getContent(cms.awsPartnership, {
      attributes: {
        badge: t.aws.badge,
        title: t.aws.title,
        description: t.aws.description,
        partnerBadge: t.aws.partnerBadge,
        ctaText: t.aws.cta,
        documentationUrl: 'https://docs.aws.amazon.com/',
        benefits: [
          {
            title: t.aws.benefits.scalability.title,
            description: t.aws.benefits.scalability.description,
            icon: 'Cloud'
          },
          {
            title: t.aws.benefits.security.title,
            description: t.aws.benefits.security.description,
            icon: 'Shield'
          },
          {
            title: t.aws.benefits.performance.title,
            description: t.aws.benefits.performance.description,
            icon: 'Zap'
          },
          {
            title: t.aws.benefits.global.title,
            description: t.aws.benefits.global.description,
            icon: 'Globe'
          }
        ]
      }
    })
  };
};