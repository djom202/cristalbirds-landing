// Mock de axios para desarrollo - reemplazar en producción
interface MockResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
}

interface MockAxiosInstance {
  get<T = any>(url: string): Promise<MockResponse<T>>;
  post<T = any>(url: string, data?: any): Promise<MockResponse<T>>;
  put<T = any>(url: string, data?: any): Promise<MockResponse<T>>;
  delete<T = any>(url: string): Promise<MockResponse<T>>;
  create(config: any): MockAxiosInstance;
}

// Simulación de datos del CMS
const mockData = {
  '/api/hero': {
    data: {
      id: 1,
      attributes: {
        badge: 'Soluciones de Software Personalizadas',
        title: 'Transformamos tus',
        titleHighlight: 'Ideas en Software',
        subtitle: 'Creamos soluciones de software personalizadas que impulsan el crecimiento de medianas y pequeñas empresas.',
        primaryCTA: 'Comenzar Proyecto',
        secondaryCTA: 'Ver Portafolio',
        features: [
          { title: 'Desarrollo a Medida', description: 'Software único para tu negocio', icon: 'Code' },
          { title: 'Entrega Rápida', description: 'Resultados en tiempo récord', icon: 'Zap' },
          { title: 'Diseño Excepcional', description: 'Interfaces que enamoran', icon: 'Sparkles' }
        ]
      }
    }
  },
  '/api/services': {
    data: [
      {
        id: 1,
        attributes: {
          title: 'Aplicaciones Web',
          description: 'Desarrollo de aplicaciones web modernas y responsivas.',
          icon: 'Monitor',
          features: ['React/Vue.js', 'Node.js', 'APIs RESTful', 'Diseño Responsivo']
        }
      }
    ]
  },
  '/api/projects': {
    data: [
      {
        id: 1,
        attributes: {
          title: 'Sistema ERP Empresarial',
          description: 'Plataforma completa de gestión empresarial.',
          category: 'web-app',
          technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
          results: ['70% reducción en tiempo de procesamiento', '50% mejora en eficiencia'],
          image: { data: { url: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg' } }
        }
      }
    ]
  },
  '/api/testimonials': {
    data: [
      {
        id: 1,
        attributes: {
          name: 'María González',
          position: 'CEO',
          company: 'TechFlow Solutions',
          content: 'CristalBirds transformó completamente nuestros procesos.',
          rating: 5,
          project: 'Sistema ERP',
          avatar: { data: { url: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg' } }
        }
      }
    ]
  },
  '/api/aws-partnership': {
    data: {
      id: 1,
      attributes: {
        badge: 'Partner AWS',
        title: 'Construiremos un futuro más sólido con AWS',
        description: 'Descubre los próximos pasos para tu negocio con AWS.',
        partnerBadge: 'Partner Certificado',
        ctaText: 'Explorar Documentación AWS',
        documentationUrl: 'https://docs.aws.amazon.com/',
        benefits: [
          { title: 'Escalabilidad', description: 'Escalado automático', icon: 'Cloud' },
          { title: 'Seguridad', description: 'Seguridad empresarial', icon: 'Shield' }
        ]
      }
    }
  }
};

// Función para simular delay de red
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock de axios
const mockAxios: MockAxiosInstance = {
  async get<T = any>(url: string): Promise<MockResponse<T>> {
    await delay(Math.random() * 500 + 200); // Simular latencia de red
    
    console.log(`[MOCK AXIOS] GET ${url}`);
    
    // Extraer la ruta base sin parámetros de query
    const baseUrl = url.split('?')[0];
    
    if (mockData[baseUrl as keyof typeof mockData]) {
      return {
        data: mockData[baseUrl as keyof typeof mockData] as T,
        status: 200,
        statusText: 'OK',
        headers: {}
      };
    }
    
    // Simular error 404
    throw new Error(`Mock: Endpoint ${url} not found`);
  },

  async post<T = any>(url: string, data?: any): Promise<MockResponse<T>> {
    await delay(Math.random() * 300 + 100);
    
    console.log(`[MOCK AXIOS] POST ${url}`, data);
    
    if (url.includes('/contact-submissions')) {
      return {
        data: { id: Date.now(), ...data } as T,
        status: 201,
        statusText: 'Created',
        headers: {}
      };
    }
    
    return {
      data: { success: true } as T,
      status: 200,
      statusText: 'OK',
      headers: {}
    };
  },

  async put<T = any>(url: string, data?: any): Promise<MockResponse<T>> {
    await delay(Math.random() * 300 + 100);
    console.log(`[MOCK AXIOS] PUT ${url}`, data);
    return {
      data: { success: true } as T,
      status: 200,
      statusText: 'OK',
      headers: {}
    };
  },

  async delete<T = any>(url: string): Promise<MockResponse<T>> {
    await delay(Math.random() * 300 + 100);
    console.log(`[MOCK AXIOS] DELETE ${url}`);
    return {
      data: { success: true } as T,
      status: 200,
      statusText: 'OK',
      headers: {}
    };
  },

  create(config: any): MockAxiosInstance {
    console.log('[MOCK AXIOS] Creating instance with config:', config);
    return mockAxios;
  }
};

// Exportar como default para que sea compatible con import axios from 'axios'
export default mockAxios;

// También exportar como named export por si acaso
export { mockAxios };

// Función para verificar si estamos en modo desarrollo
export const isDevelopment = () => {
  return import.meta.env.DEV || !import.meta.env.VITE_CMS_URL;
};