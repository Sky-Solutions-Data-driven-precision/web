"use client"

import { useLanguage } from "./use-language"

const translations = {
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      about: "Nosotros",
      blog: "Blog",
      contact: "Contacto",
    },
    hero: {
      slogan: "Data-driven precision",
      description:
        "Soluciones profesionales con drones para agricultura, inspecciones, topografía y más. Tecnología de vanguardia al servicio de tu empresa.",
      cta: {
        primary: "Solicitar Cotización",
        secondary: "Ver Servicios",
      },
    },
    services: {
      title: "Nuestros Servicios",
      description: "Ofrecemos soluciones especializadas con drones para diferentes sectores industriales",
      agriculture: {
        title: "Agricultura",
        description: "Monitoreo de cultivos, análisis de suelos y optimización de recursos agrícolas",
      },
      livestock: {
        title: "Ganadería",
        description: "Supervisión de ganado, control de pasturas y gestión de campos ganaderos",
      },
      wind: {
        title: "Inspecciones de Eólicos",
        description: "Inspección y mantenimiento de aerogeneradores con tecnología avanzada",
      },
      science: {
        title: "Aplicaciones en Ciencia",
        description: "Investigación científica y recolección de datos para proyectos académicos",
      },
      topography: {
        title: "Relevamientos Topográficos",
        description: "Mapeo preciso y modelado 3D para proyectos de construcción e ingeniería",
      },
      security: {
        title: "Seguridad y Monitoreo",
        description: "Vigilancia perimetral y monitoreo de instalaciones críticas",
      },
    },
    stats: {
      certificacion: "Certificados por ANAC",
      datos: "Almcenamiento en la nube",
      procesamiento: "Procesamiento de datos para tu rendimiento",
      conexion: "Conexión rural con Starlink",
    },
    about: {
      title: "Por qué elegir Sky Solutions",
      description:
        "Somos líderes en servicios profesionales con drones en Argentina. Nuestro equipo combina experiencia técnica con tecnología de vanguardia para entregar resultados precisos y confiables.",
      experience: "Años de Experiencia",
      certification: "Certificación ANAC",
      support: "Soporte Técnico",
      features: {
        equipment: {
          title: "Equipos de Última Generación",
          description: "Drones profesionales con sensores avanzados",
        },
        ai: {
          title: "Análisis con IA",
          description: "Procesamiento inteligente de datos",
        },
        certified: {
          title: "Pilotos Certificados",
          description: "Personal certificado por ANAC",
        },
        reports: {
          title: "Informes Detallados",
          description: "Reportes técnicos completos",
        },
      },
    },
    cta: {
      title: "¿Listo para llevar tu proyecto al siguiente nivel?",
      description: "Contactanos hoy y descubre cómo nuestras soluciones con drones pueden optimizar tus operaciones.",
      contact: "Contactar Ahora",
      quote: "Solicitar Cotización",
    },
    footer: {
      description: "Soluciones profesionales con drones para empresas e instituciones en Argentina.",
      company: "Empresa",
      contact: "Contacto",
      privacy: "Política de Privacidad",
      rights: "Todos los derechos reservados.",
    },
    common: {
      learnMore: "Conocer Más",
    },
    scroll: {
      here: "scroll aquí",
      navigate: "para navegar",
    },
    interaction: {
      dragToRotate: "arrastra para rotar",
    },
    drone: {
      title: "Tecnología que trasciende límites",
      description: "Combinamos innovación, precisión y experiencia para llevar tus proyectos al siguiente nivel",
      features: {
        speed: {
          title: "Velocidad",
          description: "Respuesta rápida para proyectos urgentes"
        },
        precision: {
          title: "Precisión", 
          description: "Cada detalle cuenta en nuestro trabajo"
        },
        innovation: {
          title: "Innovación",
          description: "Soluciones creativas para desafíos únicos"
        }
      },
      cta: "Descubrir más"
    },
    blog: {
      title: "Blog Sky Solutions",
      description: "Insights, tendencias y casos de éxito en el mundo de los drones profesionales. Mantente actualizado con las últimas innovaciones del sector.",
      search: {
        placeholder: "Buscar artículos...",
        result: "Búsqueda"
      },
      categories: {
        all: "Todos",
        label: "Categoría"
      },
      featured: {
        title: "Artículo Destacado",
        filtered: "Resultado Destacado"
      },
      latest: {
        title: "Últimos Artículos"
      },
      results: {
        title: "Resultados",
        showing: "Mostrando",
        of: "de",
        articles: "artículos",
        total: "total",
        available: "disponibles",
        remaining: "restantes"
      },
      actions: {
        read: "Leer Artículo",
        readMore: "Leer más",
        loadMore: "Cargar más artículos"
      },
      empty: {
        title: "No hay artículos disponibles en este momento",
        description: "Pronto publicaremos contenido sobre drones y tecnología."
      },
      noResults: {
        title: "No se encontraron artículos para tu búsqueda",
        clear: "Limpiar filtros"
      },
      newsletter: {
        title: "Mantente Actualizado",
        description: "Suscríbete a nuestro newsletter y recibe los últimos artículos, casos de estudio y tendencias del sector directamente en tu email.",
        placeholder: "Tu email",
        subscribe: "Suscribirse"
      }
    },
      title: "Página no encontrada",
      description: "Lo sentimos, la página que buscas no existe o ha sido movida. Puede que el enlace esté roto o que hayas escrito mal la URL.",
      actions: {
        home: "Ir al Inicio",
        blog: "Ver Blog",
        back: "Volver atrás"
      },
      help: {
        title: "¿Qué puedes hacer?",
        description: "Aquí tienes algunas opciones para continuar navegando"
      },
      links: {
        services: {
          title: "Servicios",
          agriculture: "Agricultura de Precisión",
          wind: "Inspecciones Eólicas", 
          topography: "Relevamientos Topográficos",
          security: "Seguridad y Monitoreo"
        },
        info: {
          title: "Información",
          about: "Nosotros",
          blog: "Blog",
          contact: "Contacto",
          home: "Página Principal"
        }
      },
      contact: {
        help: "¿Necesitas ayuda? Contáctanos directamente:"
      }
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      blog: "Blog",
      contact: "Contact",
    },
    hero: {
      slogan: "Data-driven precision",
      description:
        "Professional drone solutions for agriculture, inspections, surveying and more. Cutting-edge technology at your company's service.",
      cta: {
        primary: "Request Quote",
        secondary: "View Services",
      },
    },
    services: {
      title: "Our Services",
      description: "We offer specialized drone solutions for different industrial sectors",
      agriculture: {
        title: "Agriculture",
        description: "Crop monitoring, soil analysis and agricultural resource optimization",
      },
      livestock: {
        title: "Livestock",
        description: "Livestock supervision, pasture control and livestock farm management",
      },
      wind: {
        title: "Wind Turbine Inspections",
        description: "Wind turbine inspection and maintenance with advanced technology",
      },
      science: {
        title: "Scientific Applications",
        description: "Scientific research and data collection for academic projects",
      },
      topography: {
        title: "Topographic Surveys",
        description: "Precise mapping and 3D modeling for construction and engineering projects",
      },
      security: {
        title: "Security & Monitoring",
        description: "Perimeter surveillance and critical facility monitoring",
      },
    },
    stats: {
      projects: "Completed Projects",
      clients: "Satisfied Clients",
      experience: "Years of Experience",
      coverage: "Hectares Surveyed",
    },
    about: {
      title: "Why choose Sky Solutions",
      description:
        "We are leaders in professional drone services in Argentina. Our team combines technical expertise with cutting-edge technology to deliver precise and reliable results.",
      experience: "Years of Experience",
      certification: "ANAC Certification",
      support: "Technical Support",
      features: {
        equipment: {
          title: "Latest Generation Equipment",
          description: "Professional drones with advanced sensors",
        },
        ai: {
          title: "AI Analysis",
          description: "Intelligent data processing",
        },
        certified: {
          title: "Certified Pilots",
          description: "ANAC certified personnel",
        },
        reports: {
          title: "Detailed Reports",
          description: "Complete technical reports",
        },
      },
    },
    cta: {
      title: "Ready to take your project to the next level?",
      description: "Contact us today and discover how our drone solutions can optimize your operations.",
      contact: "Contact Now",
      quote: "Request Quote",
    },
    footer: {
      description: "Professional drone solutions for companies and institutions in Argentina.",
      company: "Company",
      contact: "Contact",
      privacy: "Privacy Policy",
      rights: "All rights reserved.",
    },
    common: {
      learnMore: "Learn More",
    },
    scroll: {
      here: "scroll here",
      navigate: "to navigate",
    },
    interaction: {
      dragToRotate: "drag to rotate",
    },
    drone: {
      title: "Technology that transcends limits",
      description: "We combine innovation, precision and experience to take your projects to the next level",
      features: {
        speed: {
          title: "Speed",
          description: "Fast response for urgent projects"
        },
        precision: {
          title: "Precision",
          description: "Every detail matters in our work"
        },
        innovation: {
          title: "Innovation", 
          description: "Creative solutions for unique challenges"
        }
      },
      cta: "Discover more"
    },
    blog: {
      title: "Sky Solutions Blog",
      description: "Insights, trends and success stories in the world of professional drones. Stay updated with the latest innovations in the sector.",
      search: {
        placeholder: "Search articles...",
        result: "Search"
      },
      categories: {
        all: "All",
        label: "Category"
      },
      featured: {
        title: "Featured Article",
        filtered: "Featured Result"
      },
      latest: {
        title: "Latest Articles"
      },
      results: {
        title: "Results",
        showing: "Showing",
        of: "of",
        articles: "articles",
        total: "total",
        available: "available",
        remaining: "remaining"
      },
      actions: {
        read: "Read Article",
        readMore: "Read more",
        loadMore: "Load more articles"
      },
      empty: {
        title: "No articles available at the moment",
        description: "We will soon publish content about drones and technology."
      },
      noResults: {
        title: "No articles found for your search",
        clear: "Clear filters"
      },
      newsletter: {
        title: "Stay Updated",
        description: "Subscribe to our newsletter and receive the latest articles, case studies and industry trends directly in your email.",
        placeholder: "Your email",
        subscribe: "Subscribe"
      }
    },
      title: "Page not found",
      description: "Sorry, the page you are looking for doesn't exist or has been moved. The link might be broken or you may have typed the URL incorrectly.",
      actions: {
        home: "Go Home",
        blog: "View Blog",
        back: "Go Back"
      },
      help: {
        title: "What can you do?",
        description: "Here are some options to continue browsing"
      },
      links: {
        services: {
          title: "Services",
          agriculture: "Precision Agriculture",
          wind: "Wind Turbine Inspections",
          topography: "Topographic Surveys", 
          security: "Security & Monitoring"
        },
        info: {
          title: "Information",
          about: "About",
          blog: "Blog",
          contact: "Contact",
          home: "Home Page"
        }
      },
      contact: {
        help: "Need help? Contact us directly:"
      }
    },
  },
}

export function useTranslations() {
  const { language } = useLanguage()

  const t = (key: string) => {
    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      value = value?.[k]
    }

    return value || key
  }

  return { t, language }
}