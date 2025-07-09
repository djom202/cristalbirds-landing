import { useState, useEffect } from 'react';
import { CMSService } from '../services/cms';
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

interface CMSContentState {
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
}

export const useCMSContent = (locale: string = 'en') => {
  const [content, setContent] = useState<CMSContentState>({
    hero: null,
    services: [],
    projects: [],
    testimonials: [],
    processSteps: [],
    contactInfo: null,
    siteSettings: null,
    awsPartnership: null,
    loading: true,
    error: null
  });

  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const loadContent = async () => {
      setContent(prev => ({ ...prev, loading: true, error: null }));
      
      try {
        const allContent = await CMSService.getAllContent(locale);
        
        if (allContent) {
          setContent({
            hero: allContent.hero,
            services: allContent.services,
            projects: allContent.projects,
            testimonials: allContent.testimonials,
            processSteps: allContent.processSteps,
            contactInfo: allContent.contactInfo,
            siteSettings: allContent.siteSettings,
            awsPartnership: allContent.awsPartnership,
            loading: false,
            error: null
          });
        } else {
          setContent(prev => ({
            ...prev,
            loading: false,
            error: 'Failed to load content from CMS'
          }));
        }
      } catch (error) {
        console.error('Error loading CMS content:', error);
        setContent(prev => ({
          ...prev,
          loading: false,
          error: error instanceof Error ? error.message : 'Unknown error occurred'
        }));
      }
    };

    loadContent();
  }, [locale, refreshKey]);

  const refreshContent = () => {
    setRefreshKey(prev => prev + 1);
  };

  const submitContactForm = async (formData: {
    name: string;
    email: string;
    company?: string;
    project?: string;
    message: string;
  }) => {
    try {
      const success = await CMSService.submitContactForm(formData);
      return success;
    } catch (error) {
      console.error('Error submitting contact form:', error);
      return false;
    }
  };

  return {
    ...content,
    refreshContent,
    submitContactForm,
    getImageUrl: CMSService.getImageUrl
  };
};