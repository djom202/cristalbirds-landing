// Importar axios real o mock dependiendo del entorno
import axios from '../services/mockAxios'; // Cambiar a 'axios' en producción

// Configuración del CMS
const CMS_BASE_URL = import.meta.env.VITE_CMS_URL || 'http://localhost:1337';
const CMS_API_TOKEN = import.meta.env.VITE_CMS_API_TOKEN;

// Cliente HTTP configurado
const cmsClient = axios.create({
  baseURL: `${CMS_BASE_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
    ...(CMS_API_TOKEN && { Authorization: `Bearer ${CMS_API_TOKEN}` })
  }
});

// Tipos para el contenido del CMS
export interface CMSImage {
  id: number;
  url: string;
  alternativeText?: string;
  caption?: string;
  width: number;
  height: number;
}

export interface CMSContent {
  id: number;
  attributes: {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
  };
}

export interface HeroContent extends CMSContent {
  attributes: CMSContent['attributes'] & {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    primaryCTA: string;
    secondaryCTA: string;
    features: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
}

export interface ServiceContent extends CMSContent {
  attributes: CMSContent['attributes'] & {
    title: string;
    description: string;
    icon: string;
    features: string[];
  };
}

export interface ProjectContent extends CMSContent {
  attributes: CMSContent['attributes'] & {
    title: string;
    description: string;
    category: string;
    technologies: string[];
    results: string[];
    image: {
      data: CMSImage;
    };
    demoUrl?: string;
    githubUrl?: string;
  };
}

export interface TestimonialContent extends CMSContent {
  attributes: CMSContent['attributes'] & {
    name: string;
    position: string;
    company: string;
    content: string;
    rating: number;
    project: string;
    avatar: {
      data: CMSImage;
    };
  };
}

export interface ProcessStepContent extends CMSContent {
  attributes: CMSContent['attributes'] & {
    title: string;
    description: string;
    details: string[];
    icon: string;
    order: number;
  };
}

export interface ContactInfoContent extends CMSContent {
  attributes: CMSContent['attributes'] & {
    email: string;
    phone: string;
    address: string;
    workingHours: string;
  };
}

export interface SiteSettingsContent extends CMSContent {
  attributes: CMSContent['attributes'] & {
    siteName: string;
    siteDescription: string;
    logo: {
      data: CMSImage;
    };
    socialLinks: Array<{
      platform: string;
      url: string;
      icon: string;
    }>;
    footerText: string;
    copyrightText: string;
  };
}

export interface AWSPartnershipContent extends CMSContent {
  attributes: CMSContent['attributes'] & {
    badge: string;
    title: string;
    description: string;
    partnerBadge: string;
    ctaText: string;
    documentationUrl: string;
    benefits: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
}

// Servicios del CMS
export class CMSService {
  // Obtener contenido del Hero
  static async getHeroContent(locale: string = 'en'): Promise<HeroContent | null> {
    try {
      const response = await cmsClient.get(`/hero?locale=${locale}&populate=*`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching hero content:', error);
      return null;
    }
  }

  // Obtener servicios
  static async getServices(locale: string = 'en'): Promise<ServiceContent[]> {
    try {
      const response = await cmsClient.get(`/services?locale=${locale}&populate=*`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching services:', error);
      return [];
    }
  }

  // Obtener proyectos del portfolio
  static async getProjects(locale: string = 'en'): Promise<ProjectContent[]> {
    try {
      const response = await cmsClient.get(`/projects?locale=${locale}&populate=*`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching projects:', error);
      return [];
    }
  }

  // Obtener testimonios
  static async getTestimonials(locale: string = 'en'): Promise<TestimonialContent[]> {
    try {
      const response = await cmsClient.get(`/testimonials?locale=${locale}&populate=*`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      return [];
    }
  }

  // Obtener pasos del proceso
  static async getProcessSteps(locale: string = 'en'): Promise<ProcessStepContent[]> {
    try {
      const response = await cmsClient.get(`/process-steps?locale=${locale}&sort=order:asc`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching process steps:', error);
      return [];
    }
  }

  // Obtener información de contacto
  static async getContactInfo(locale: string = 'en'): Promise<ContactInfoContent | null> {
    try {
      const response = await cmsClient.get(`/contact-info?locale=${locale}`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching contact info:', error);
      return null;
    }
  }

  // Obtener configuración del sitio
  static async getSiteSettings(locale: string = 'en'): Promise<SiteSettingsContent | null> {
    try {
      const response = await cmsClient.get(`/site-setting?locale=${locale}&populate=*`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching site settings:', error);
      return null;
    }
  }

  // Obtener contenido de AWS Partnership
  static async getAWSPartnership(locale: string = 'en'): Promise<AWSPartnershipContent | null> {
    try {
      const response = await cmsClient.get(`/aws-partnership?locale=${locale}&populate=*`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching AWS partnership content:', error);
      return null;
    }
  }

  // Enviar formulario de contacto
  static async submitContactForm(data: {
    name: string;
    email: string;
    company?: string;
    project?: string;
    message: string;
  }): Promise<boolean> {
    try {
      await cmsClient.post('/contact-submissions', { data });
      return true;
    } catch (error) {
      console.error('Error submitting contact form:', error);
      return false;
    }
  }

  // Obtener URL completa de imagen
  static getImageUrl(image: CMSImage): string {
    if (image.url.startsWith('http')) {
      return image.url;
    }
    return `${CMS_BASE_URL}${image.url}`;
  }

  // Obtener todas las configuraciones de una vez
  static async getAllContent(locale: string = 'en') {
    try {
      const [
        hero,
        services,
        projects,
        testimonials,
        processSteps,
        contactInfo,
        siteSettings,
        awsPartnership
      ] = await Promise.all([
        this.getHeroContent(locale),
        this.getServices(locale),
        this.getProjects(locale),
        this.getTestimonials(locale),
        this.getProcessSteps(locale),
        this.getContactInfo(locale),
        this.getSiteSettings(locale),
        this.getAWSPartnership(locale)
      ]);

      return {
        hero,
        services,
        projects,
        testimonials,
        processSteps,
        contactInfo,
        siteSettings,
        awsPartnership
      };
    } catch (error) {
      console.error('Error fetching all content:', error);
      return null;
    }
  }
}

// Hook personalizado para usar el CMS
export const useCMS = () => {
  return {
    getHeroContent: CMSService.getHeroContent,
    getServices: CMSService.getServices,
    getProjects: CMSService.getProjects,
    getTestimonials: CMSService.getTestimonials,
    getProcessSteps: CMSService.getProcessSteps,
    getContactInfo: CMSService.getContactInfo,
    getSiteSettings: CMSService.getSiteSettings,
    getAWSPartnership: CMSService.getAWSPartnership,
    submitContactForm: CMSService.submitContactForm,
    getImageUrl: CMSService.getImageUrl,
    getAllContent: CMSService.getAllContent
  };
};