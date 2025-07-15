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