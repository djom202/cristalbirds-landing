export interface Translation {
  // Navigation
  nav: {
    home: string;
    services: string;
    process: string;
    portfolio: string;
    testimonials: string;
    contact: string;
  };

  // Hero Section
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    features: {
      custom: { title: string; desc: string };
      fast: { title: string; desc: string };
      design: { title: string; desc: string };
    };
    cta: {
      primary: string;
      secondary: string;
    };
  };

  // Services Section
  services: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    items: {
      webApps: { title: string; description: string; features: string[] };
      mobileApps: { title: string; description: string; features: string[] };
      cloudSolutions: { title: string; description: string; features: string[] };
      managementSystems: { title: string; description: string; features: string[] };
      automation: { title: string; description: string; features: string[] };
      consulting: { title: string; description: string; features: string[] };
    };
  };

  // Process Section
  process: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    steps: {
      consultation: { title: string; description: string; details: string[] };
      planning: { title: string; description: string; details: string[] };
      development: { title: string; description: string; details: string[] };
      testing: { title: string; description: string; details: string[] };
      launch: { title: string; description: string; details: string[] };
      support: { title: string; description: string; details: string[] };
    };
  };

  // AWS Partnership Section
  aws: {
    badge: string;
    title: string;
    description: string;
    partnerBadge: string;
    documentation: string;
    cta: string;
    benefits: {
      scalability: { title: string; description: string };
      security: { title: string; description: string };
      performance: { title: string; description: string };
      global: { title: string; description: string };
    };
  };

  // Portfolio Section
  portfolio: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    filterLabel: string;
    categories: {
      all: string;
      webApp: string;
      mobileApp: string;
      healthcare: string;
      dataAnalytics: string;
      ecommerce: string;
    };
    projects: {
      erp: { title: string; description: string; results: string[] };
      ecommerceApp: { title: string; description: string; results: string[] };
      telemedicine: { title: string; description: string; results: string[] };
      analytics: { title: string; description: string; results: string[] };
      academic: { title: string; description: string; results: string[] };
      delivery: { title: string; description: string; results: string[] };
      elearning: { title: string; description: string; results: string[] };
      marketplace: { title: string; description: string; results: string[] };
    };
    actions: {
      viewProject: string;
      viewCode: string;
    };
    cta: string;
    emptyState: {
      title: string;
      description: string;
    };
  };

  // Testimonials Section
  testimonials: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    clients: {
      maria: { name: string; position: string; company: string; content: string; project: string };
      carlos: { name: string; position: string; company: string; content: string; project: string };
      ana: { name: string; position: string; company: string; content: string; project: string };
      roberto: { name: string; position: string; company: string; content: string; project: string };
    };
    stats: {
      projects: string;
      rating: string;
      satisfaction: string;
      support: string;
    };
  };

  // Contact Section
  contact: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    info: {
      title: string;
      description: string;
      email: { title: string; content: string; subtitle: string };
      phone: { title: string; content: string; subtitle: string };
      location: { title: string; content: string; subtitle: string };
    };
    form: {
      name: { label: string; placeholder: string };
      email: { label: string; placeholder: string };
      company: { label: string; placeholder: string };
      project: {
        label: string;
        placeholder: string;
        options: {
          webApp: string;
          mobileApp: string;
          erpCrm: string;
          ecommerce: string;
          cloud: string;
          other: string;
        };
      };
      message: { label: string; placeholder: string };
      submit: string;
      success: {
        title: string;
        message: string;
      };
    };
  };

  // Footer Section
  footer: {
    description: string;
    services: {
      title: string;
      items: string[];
    };
    company: {
      title: string;
      items: string[];
    };
    copyright: string;
    legal: string[];
  };

  // Common
  common: {
    required: string;
    loading: string;
    error: string;
    success: string;
  };
}

export const translations: Record<'en' | 'es', Translation> = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      process: 'Process',
      portfolio: 'Portfolio',
      testimonials: 'Testimonials',
      contact: 'Contact'
    },
    hero: {
      badge: 'Custom Software Solutions',
      title: 'We Transform Your',
      titleHighlight: 'Ideas into Software',
      subtitle: 'We create custom software solutions that drive growth for medium and small businesses, perfectly adapting to their specific needs.',
      features: {
        custom: { title: 'Custom Development', desc: 'Unique software for your business' },
        fast: { title: 'Fast Delivery', desc: 'Results in record time' },
        design: { title: 'Exceptional Design', desc: 'Interfaces that captivate' }
      },
      cta: {
        primary: 'Start Project',
        secondary: 'View Portfolio'
      }
    },
    services: {
      title: 'Our',
      titleHighlight: 'Services',
      subtitle: 'We offer complete custom software development solutions to drive your company\'s growth',
      items: {
        webApps: {
          title: 'Web Applications',
          description: 'Development of modern and responsive web applications that work perfectly on any device.',
          features: ['React/Vue.js', 'Node.js', 'RESTful APIs', 'Responsive Design']
        },
        mobileApps: {
          title: 'Mobile Apps',
          description: 'Native and hybrid mobile applications for iOS and Android that offer an exceptional experience.',
          features: ['React Native', 'Flutter', 'iOS/Android', 'Optimized UI/UX']
        },
        cloudSolutions: {
          title: 'Cloud Solutions',
          description: 'Cloud migration and development for greater scalability and performance of your software.',
          features: ['AWS/Azure', 'Microservices', 'DevOps', 'Scalability']
        },
        managementSystems: {
          title: 'Management Systems',
          description: 'Custom ERPs, CRMs and administrative systems to optimize your business processes.',
          features: ['ERP/CRM', 'Automation', 'Reports', 'Integration']
        },
        automation: {
          title: 'Automation',
          description: 'Business process automation to increase efficiency and reduce operational costs.',
          features: ['Workflows', 'APIs', 'Integrations', 'Bot Development']
        },
        consulting: {
          title: 'IT Consulting',
          description: 'Specialized technical advice to help you make the best technological decisions.',
          features: ['Architecture', 'Audits', 'Strategy', 'Modernization']
        }
      }
    },
    process: {
      title: 'Our',
      titleHighlight: 'Process',
      subtitle: 'A proven and efficient process that guarantees exceptional results in every software development project',
      steps: {
        consultation: {
          title: 'Initial Consultation',
          description: 'We analyze your needs and business objectives to perfectly understand your vision.',
          details: ['Strategic meeting', 'Requirements analysis', 'Objective definition']
        },
        planning: {
          title: 'Planning',
          description: 'We design the architecture and development strategy most suitable for your project.',
          details: ['Technical architecture', 'Work schedule', 'Detailed proposal']
        },
        development: {
          title: 'Development',
          description: 'Our expert team develops your software following industry best practices.',
          details: ['Agile development', 'Continuous testing', 'Constant communication']
        },
        testing: {
          title: 'Testing & QA',
          description: 'We perform exhaustive tests to guarantee quality and perfect operation.',
          details: ['Automated testing', 'Manual testing', 'Performance optimization']
        },
        launch: {
          title: 'Launch',
          description: 'We deploy your software and accompany you in the startup process.',
          details: ['Secure deployment', 'Data migration', 'Initial monitoring']
        },
        support: {
          title: 'Support',
          description: 'We offer continuous support and maintenance to ensure long-term success.',
          details: ['24/7 support', 'Updates', 'Scalability']
        }
      }
    },
    aws: {
      badge: 'AWS Partner',
      title: 'We\'ll build a stronger future with AWS',
      description: 'Discover the next steps for your business, with a range of tools and resources designed to help you get more from your collaboration with AWS. Whether you\'re looking to build your expertise, go to market or differentiate your offerings, you\'ll find everything you need to grow your business with AWS.',
      partnerBadge: 'Certified Partner',
      documentation: 'Documentation',
      cta: 'Explore AWS Documentation',
      benefits: {
        scalability: { title: 'Scalability', description: 'Automatic scaling for your applications' },
        security: { title: 'Security', description: 'Enterprise-grade security and compliance' },
        performance: { title: 'Performance', description: 'Optimized performance and speed' },
        global: { title: 'Global Reach', description: 'Worldwide infrastructure and availability' }
      }
    },
    portfolio: {
      title: 'Our',
      titleHighlight: 'Portfolio',
      subtitle: 'Discover some of the successful projects we have developed for companies in various sectors',
      filterLabel: 'Filter by category',
      categories: {
        all: 'All Projects',
        webApp: 'Web Applications',
        mobileApp: 'Mobile Apps',
        healthcare: 'Healthcare',
        dataAnalytics: 'Data Analytics',
        ecommerce: 'E-commerce'
      },
      projects: {
        erp: {
          title: 'Enterprise ERP System',
          description: 'Complete business management platform for a manufacturing company with 200+ employees.',
          results: ['70% reduction in processing time', '50% improvement in operational efficiency']
        },
        ecommerceApp: {
          title: 'E-commerce Mobile App',
          description: 'Complete mobile application for marketplace with payment gateway and inventory management.',
          results: ['200% increase in mobile sales', '4.8★ rating in stores']
        },
        telemedicine: {
          title: 'Telemedicine Platform',
          description: 'Comprehensive telemedicine system with video calls, medical history and appointment management.',
          results: ['10,000+ monthly consultations', 'HIPAA Certification']
        },
        analytics: {
          title: 'Analytics Dashboard',
          description: 'Interactive dashboard for business data analysis with real-time visualizations.',
          results: ['Real-time analysis', '90% improvement in decision making']
        },
        academic: {
          title: 'Academic Management Portal',
          description: 'Complete system for managing students, teachers and academic resources.',
          results: ['5,000+ active users', '95% student satisfaction']
        },
        delivery: {
          title: 'Delivery App',
          description: 'Delivery application with real-time tracking and multiple payment methods.',
          results: ['50,000+ monthly orders', 'Average time 25 min']
        },
        elearning: {
          title: 'E-learning Platform',
          description: 'Online education system with interactive courses and certifications.',
          results: ['15,000+ students', '4.7★ average rating']
        },
        marketplace: {
          title: 'B2B Marketplace',
          description: 'B2B platform to connect suppliers with buying companies.',
          results: ['$2M+ in transactions', '300+ registered companies']
        }
      },
      actions: {
        viewProject: 'View Project',
        viewCode: 'Code'
      },
      cta: 'Ready for your project?',
      emptyState: {
        title: 'No projects found',
        description: 'No projects were found in this category.'
      }
    },
    testimonials: {
      title: 'What our',
      titleHighlight: 'Clients',
      subtitle: 'say',
      clients: {
        maria: {
          name: 'Maria González',
          position: 'CEO, TechFlow Solutions',
          company: 'Logistics Company',
          content: 'CristalBirds completely transformed our operational processes. The ERP system they developed increased our efficiency by 60% and significantly reduced processing times.',
          project: 'Custom ERP System'
        },
        carlos: {
          name: 'Carlos Ruiz',
          position: 'IT Director, MediCare Plus',
          company: 'Medical Clinic',
          content: 'The telemedicine platform developed by CristalBirds allowed us to serve more than 10,000 patients monthly during the pandemic. Exceptional quality and technical support.',
          project: 'Telemedicine Platform'
        },
        ana: {
          name: 'Ana Martínez',
          position: 'Founder, StyleHub',
          company: 'E-commerce Fashion',
          content: 'Our mobile app developed by CristalBirds exceeded all expectations. Mobile sales increased 200% and we have a 4.8 star rating in the stores.',
          project: 'E-commerce Mobile App'
        },
        roberto: {
          name: 'Roberto Silva',
          position: 'General Manager, DataInsights',
          company: 'Data Consulting',
          content: 'The analytics dashboard they created for us revolutionized the way we make decisions. Now we have real-time insights that give us a huge competitive advantage.',
          project: 'Analytics Dashboard'
        }
      },
      stats: {
        projects: 'Successful Projects',
        rating: 'Average Rating',
        satisfaction: 'Client Satisfaction',
        support: 'Technical Support'
      }
    },
    contact: {
      title: 'Ready to',
      titleHighlight: 'Get Started?',
      subtitle: 'Tell us about your project and we\'ll help you turn your idea into reality. We\'re here to bring your vision to life.',
      info: {
        title: 'Let\'s talk about your project',
        description: 'Our team of experts is ready to help you develop the perfect solution for your company. From the initial idea to launch, we accompany you every step of the way.',
        email: { title: 'Email', content: 'hello@cristalbirds.com', subtitle: 'Response in less than 24h' },
        phone: { title: 'Phone', content: '+1 (555) 123-4567', subtitle: 'Mon - Fri 9:00 AM - 6:00 PM' },
        location: { title: 'Location', content: 'Madrid, Spain', subtitle: 'We also work remotely' }
      },
      form: {
        name: { label: 'Full Name', placeholder: 'Your name' },
        email: { label: 'Email', placeholder: 'your@email.com' },
        company: { label: 'Company', placeholder: 'Your company' },
        project: {
          label: 'Project Type',
          placeholder: 'Select an option',
          options: {
            webApp: 'Web Application',
            mobileApp: 'Mobile App',
            erpCrm: 'ERP/CRM',
            ecommerce: 'E-commerce',
            cloud: 'Cloud Solution',
            other: 'Other'
          }
        },
        message: { label: 'Message', placeholder: 'Tell us about your project, objectives and any specific requirements...' },
        submit: 'Send Message',
        success: {
          title: 'Message Sent!',
          message: 'We\'ll contact you soon to discuss your project.'
        }
      }
    },
    footer: {
      description: 'We transform ideas into exceptional software. Specialists in developing custom solutions for SMEs looking to grow with cutting-edge technology.',
      services: {
        title: 'Services',
        items: ['Web Applications', 'Mobile Apps', 'ERP/CRM Systems', 'E-commerce', 'Cloud Solutions', 'IT Consulting']
      },
      company: {
        title: 'Company',
        items: ['About Us', 'Our Team', 'Success Stories', 'Blog', 'Careers', 'Contact']
      },
      copyright: '© 2025 CristalBirds. All rights reserved.',
      legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy']
    },
    common: {
      required: 'Required',
      loading: 'Loading...',
      error: 'Error',
      success: 'Success'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      process: 'Proceso',
      portfolio: 'Portafolio',
      testimonials: 'Testimonios',
      contact: 'Contacto'
    },
    hero: {
      badge: 'Soluciones de Software Personalizadas',
      title: 'Transformamos tus',
      titleHighlight: 'Ideas en Software',
      subtitle: 'Creamos soluciones de software personalizadas que impulsan el crecimiento de medianas y pequeñas empresas, adaptándose perfectamente a sus necesidades específicas.',
      features: {
        custom: { title: 'Desarrollo a Medida', desc: 'Software único para tu negocio' },
        fast: { title: 'Entrega Rápida', desc: 'Resultados en tiempo récord' },
        design: { title: 'Diseño Excepcional', desc: 'Interfaces que enamoran' }
      },
      cta: {
        primary: 'Comenzar Proyecto',
        secondary: 'Ver Portafolio'
      }
    },
    services: {
      title: 'Nuestros',
      titleHighlight: 'Servicios',
      subtitle: 'Ofrecemos soluciones completas de desarrollo de software personalizadas para impulsar el crecimiento de tu empresa',
      items: {
        webApps: {
          title: 'Aplicaciones Web',
          description: 'Desarrollo de aplicaciones web modernas y responsivas que funcionan perfectamente en cualquier dispositivo.',
          features: ['React/Vue.js', 'Node.js', 'APIs RESTful', 'Diseño Responsivo']
        },
        mobileApps: {
          title: 'Apps Móviles',
          description: 'Aplicaciones móviles nativas e híbridas para iOS y Android que ofrecen una experiencia excepcional.',
          features: ['React Native', 'Flutter', 'iOS/Android', 'UI/UX Optimizada']
        },
        cloudSolutions: {
          title: 'Soluciones Cloud',
          description: 'Migración y desarrollo en la nube para mayor escalabilidad y rendimiento de tu software.',
          features: ['AWS/Azure', 'Microservicios', 'DevOps', 'Escalabilidad']
        },
        managementSystems: {
          title: 'Sistemas de Gestión',
          description: 'ERPs, CRMs y sistemas administrativos personalizados para optimizar tus procesos empresariales.',
          features: ['ERP/CRM', 'Automatización', 'Reportes', 'Integración']
        },
        automation: {
          title: 'Automatización',
          description: 'Automatización de procesos empresariales para aumentar la eficiencia y reducir costos operativos.',
          features: ['Workflows', 'APIs', 'Integraciones', 'Bot Development']
        },
        consulting: {
          title: 'Consultoría IT',
          description: 'Asesoramiento técnico especializado para ayudarte a tomar las mejores decisiones tecnológicas.',
          features: ['Arquitectura', 'Auditorías', 'Estrategia', 'Modernización']
        }
      }
    },
    process: {
      title: 'Nuestro',
      titleHighlight: 'Proceso',
      subtitle: 'Un proceso probado y eficiente que garantiza resultados excepcionales en cada proyecto de desarrollo de software',
      steps: {
        consultation: {
          title: 'Consulta Inicial',
          description: 'Analizamos tus necesidades y objetivos empresariales para entender perfectamente tu visión.',
          details: ['Reunión estratégica', 'Análisis de requerimientos', 'Definición de objetivos']
        },
        planning: {
          title: 'Planificación',
          description: 'Diseñamos la arquitectura y estrategia de desarrollo más adecuada para tu proyecto.',
          details: ['Arquitectura técnica', 'Cronograma de trabajo', 'Propuesta detallada']
        },
        development: {
          title: 'Desarrollo',
          description: 'Nuestro equipo experto desarrolla tu software siguiendo las mejores prácticas de la industria.',
          details: ['Desarrollo ágil', 'Testing continuo', 'Comunicación constante']
        },
        testing: {
          title: 'Testing & QA',
          description: 'Realizamos pruebas exhaustivas para garantizar la calidad y funcionamiento perfecto.',
          details: ['Pruebas automatizadas', 'Testing manual', 'Optimización de rendimiento']
        },
        launch: {
          title: 'Lanzamiento',
          description: 'Desplegamos tu software y te acompañamos en el proceso de puesta en marcha.',
          details: ['Deployment seguro', 'Migración de datos', 'Monitoreo inicial']
        },
        support: {
          title: 'Soporte',
          description: 'Ofrecemos soporte continuo y mantenimiento para asegurar el éxito a largo plazo.',
          details: ['Soporte 24/7', 'Actualizaciones', 'Escalabilidad']
        }
      }
    },
    aws: {
      badge: 'Partner AWS',
      title: 'Construiremos un futuro más sólido con AWS',
      description: 'Descubre los próximos pasos para tu negocio, con una gama de herramientas y recursos diseñados para ayudarte a obtener más de tu colaboración con AWS. Ya sea que busques desarrollar tu experiencia, salir al mercado o diferenciar tus ofertas, encontrarás todo lo que necesitas para hacer crecer tu negocio con AWS.',
      partnerBadge: 'Partner Certificado',
      documentation: 'Documentación',
      cta: 'Explorar Documentación AWS',
      benefits: {
        scalability: { title: 'Escalabilidad', description: 'Escalado automático para tus aplicaciones' },
        security: { title: 'Seguridad', description: 'Seguridad y cumplimiento de nivel empresarial' },
        performance: { title: 'Rendimiento', description: 'Rendimiento y velocidad optimizados' },
        global: { title: 'Alcance Global', description: 'Infraestructura y disponibilidad mundial' }
      }
    },
    portfolio: {
      title: 'Nuestro',
      titleHighlight: 'Portafolio',
      subtitle: 'Conoce algunos de los proyectos exitosos que hemos desarrollado para empresas de diversos sectores',
      filterLabel: 'Filtrar por categoría',
      categories: {
        all: 'Todos los Proyectos',
        webApp: 'Aplicaciones Web',
        mobileApp: 'Apps Móviles',
        healthcare: 'Salud',
        dataAnalytics: 'Análisis de Datos',
        ecommerce: 'E-commerce'
      },
      projects: {
        erp: {
          title: 'Sistema ERP Empresarial',
          description: 'Plataforma completa de gestión empresarial para una empresa manufacturera con 200+ empleados.',
          results: ['70% reducción en tiempo de procesamiento', '50% mejora en eficiencia operativa']
        },
        ecommerceApp: {
          title: 'App Móvil de E-commerce',
          description: 'Aplicación móvil completa para marketplace con pasarela de pagos y gestión de inventario.',
          results: ['200% aumento en ventas móviles', '4.8★ rating en stores']
        },
        telemedicine: {
          title: 'Plataforma de Telemedicina',
          description: 'Sistema integral de telemedicina con videollamadas, historial médico y gestión de citas.',
          results: ['10,000+ consultas mensuales', 'Certificación HIPAA']
        },
        analytics: {
          title: 'Dashboard Analítico',
          description: 'Dashboard interactivo para análisis de datos empresariales con visualizaciones en tiempo real.',
          results: ['Análisis en tiempo real', '90% mejora en toma de decisiones']
        },
        academic: {
          title: 'Portal de Gestión Académica',
          description: 'Sistema completo para gestión de estudiantes, profesores y recursos académicos.',
          results: ['5,000+ usuarios activos', '95% satisfacción estudiantil']
        },
        delivery: {
          title: 'App de Delivery',
          description: 'Aplicación de delivery con tracking en tiempo real y múltiples métodos de pago.',
          results: ['50,000+ pedidos mensuales', 'Tiempo promedio 25 min']
        },
        elearning: {
          title: 'Plataforma E-learning',
          description: 'Sistema de educación online con cursos interactivos y certificaciones.',
          results: ['15,000+ estudiantes', '4.7★ rating promedio']
        },
        marketplace: {
          title: 'Marketplace B2B',
          description: 'Plataforma B2B para conectar proveedores con empresas compradores.',
          results: ['$2M+ en transacciones', '300+ empresas registradas']
        }
      },
      actions: {
        viewProject: 'Ver Proyecto',
        viewCode: 'Código'
      },
      cta: '¿Listo para tu proyecto?',
      emptyState: {
        title: 'No hay proyectos',
        description: 'No se encontraron proyectos en esta categoría.'
      }
    },
    testimonials: {
      title: 'Lo que dicen nuestros',
      titleHighlight: 'Clientes',
      subtitle: 'La satisfacción de nuestros clientes es nuestra mejor carta de presentación. Descubre por qué confían en nosotros para sus proyectos más importantes.',
      clients: {
        maria: {
          name: 'María González',
          position: 'CEO, TechFlow Solutions',
          company: 'Empresa de Logística',
          content: 'CristalBirds transformó completamente nuestros procesos operativos. El sistema ERP que desarrollaron aumentó nuestra eficiencia en un 60% y redujo significativamente los tiempos de procesamiento.',
          project: 'Sistema ERP Personalizado'
        },
        carlos: {
          name: 'Carlos Ruiz',
          position: 'Director IT, MediCare Plus',
          company: 'Clínica Médica',
          content: 'La plataforma de telemedicina desarrollada por CristalBirds nos permitió atender a más de 10,000 pacientes mensuales durante la pandemia. Excepcional calidad y soporte técnico.',
          project: 'Plataforma de Telemedicina'
        },
        ana: {
          name: 'Ana Martínez',
          position: 'Fundadora, StyleHub',
          company: 'E-commerce Fashion',
          content: 'Nuestra app móvil desarrollada por CristalBirds superó todas las expectativas. Las ventas móviles aumentaron 200% y tenemos un rating de 4.8 estrellas en las stores.',
          project: 'App Móvil E-commerce'
        },
        roberto: {
          name: 'Roberto Silva',
          position: 'Gerente General, DataInsights',
          company: 'Consultoría de Datos',
          content: 'El dashboard analítico que nos crearon revolucionó la forma en que tomamos decisiones. Ahora tenemos insights en tiempo real que nos dan una ventaja competitiva enorme.',
          project: 'Dashboard Analítico'
        }
      },
      stats: {
        projects: 'Proyectos Exitosos',
        rating: 'Rating Promedio',
        satisfaction: 'Satisfacción Cliente',
        support: 'Soporte Técnico'
      }
    },
    contact: {
      title: '¿Listo para',
      titleHighlight: 'Comenzar?',
      subtitle: 'Cuéntanos sobre tu proyecto y te ayudaremos a convertir tu idea en realidad. Estamos aquí para hacer que tu visión cobre vida.',
      info: {
        title: 'Hablemos de tu proyecto',
        description: 'Nuestro equipo de expertos está listo para ayudarte a desarrollar la solución perfecta para tu empresa. Desde la idea inicial hasta el lanzamiento, te acompañamos en cada paso del proceso.',
        email: { title: 'Email', content: 'hola@cristalbirds.com', subtitle: 'Respuesta en menos de 24h' },
        phone: { title: 'Teléfono', content: '+1 (555) 123-4567', subtitle: 'Lun - Vie 9:00 AM - 6:00 PM' },
        location: { title: 'Ubicación', content: 'Madrid, España', subtitle: 'También trabajamos remotamente' }
      },
      form: {
        name: { label: 'Nombre Completo', placeholder: 'Tu nombre' },
        email: { label: 'Email', placeholder: 'tu@email.com' },
        company: { label: 'Empresa', placeholder: 'Tu empresa' },
        project: {
          label: 'Tipo de Proyecto',
          placeholder: 'Selecciona una opción',
          options: {
            webApp: 'Aplicación Web',
            mobileApp: 'App Móvil',
            erpCrm: 'ERP/CRM',
            ecommerce: 'E-commerce',
            cloud: 'Solución Cloud',
            other: 'Otro'
          }
        },
        message: { label: 'Mensaje', placeholder: 'Cuéntanos sobre tu proyecto, objetivos y cualquier requerimiento específico...' },
        submit: 'Enviar Mensaje',
        success: {
          title: '¡Mensaje Enviado!',
          message: 'Te contactaremos pronto para discutir tu proyecto.'
        }
      }
    },
    footer: {
      description: 'Transformamos ideas en software excepcional. Especialistas en desarrollo de soluciones personalizadas para medianas y pequeñas empresas que buscan crecer con tecnología de vanguardia.',
      services: {
        title: 'Servicios',
        items: ['Aplicaciones Web', 'Apps Móviles', 'Sistemas ERP/CRM', 'E-commerce', 'Soluciones Cloud', 'Consultoría IT']
      },
      company: {
        title: 'Empresa',
        items: ['Sobre Nosotros', 'Nuestro Equipo', 'Casos de Éxito', 'Blog', 'Carreras', 'Contacto']
      },
      copyright: '© 2025 CristalBirds. Todos los derechos reservados.',
      legal: ['Política de Privacidad', 'Términos de Servicio', 'Política de Cookies']
    },
    common: {
      required: 'Requerido',
      loading: 'Cargando...',
      error: 'Error',
      success: 'Éxito'
    }
  }
};