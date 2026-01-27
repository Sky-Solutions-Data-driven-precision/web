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
      model3D: {
        enable: "habilitar modelo 3D",
        close: "cerrar modelo 3D"
      }
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
      },
      post: {
        backToBlog: "Volver al Blog",
        readTime: "de lectura",
        share: "Compartir",
        tags: "Tags:",
        tableOfContents: "Contenido",
        interested: "¿Interesado en",
        consultDescription: "Contáctanos para una consulta gratuita sobre cómo implementar estas tecnologías.",
        freeConsult: "Consulta Gratuita",
        relatedPosts: "Artículos Relacionados",
        readArticle: "Leer artículo"
      }
    },
    contact: {
      title: "Contacto",
      headerDescription: "Estamos aquí para ayudarte. Contáctanos para una consulta gratuita sobre nuestros servicios con drones.",
      info: {
        title: "Información de Contacto",
        email: {
          label: "Email",
          value: "info@skysolutions.com.ar"
        },
        phone: {
          label: "Teléfono",
          value: "+54 11 1234-5678"
        },
        location: {
          label: "Ubicación", 
          value: "Sur de Córdoba, Argentina"
        }
      },
      form: {
        title: "Envíanos un Mensaje",
        description: "Completa el formulario y nos pondremos en contacto contigo pronto.",
        fields: {
          name: "Nombre completo",
          email: "Email",
          phone: "Teléfono",
          company: "Empresa",
          service: "Servicio de interés",
          message: "Mensaje",
          privacy: "Acepto la política de privacidad y autorizo el tratamiento de mis datos personales para responder a mi consulta."
        },
        placeholders: {
          name: "Tu nombre completo",
          email: "tu@email.com",
          phone: "+54 9 11 1234-5678",
          company: "Nombre de tu empresa",
          service: "Selecciona un servicio",
          message: "Cuéntanos sobre tu proyecto o consulta..."
        },
        validation: {
          required: "Por favor completa todos los campos obligatorios",
          email: "Por favor ingresa un email válido",
          privacy: "Debes aceptar la política de privacidad para continuar"
        },
        services: {
          agriculture: "Agricultura de Precisión",
          wind: "Inspecciones Eólicas",
          topography: "Relevamientos Topográficos",
          security: "Seguridad y Monitoreo",
          science: "Aplicaciones Científicas",
          other: "Otro / Consulta General"
        },
        submit: {
          idle: "Enviar Mensaje",
          sending: "Enviando mensaje...",
          success: "¡Mensaje Enviado Exitosamente!",
          error: "Error al enviar el mensaje"
        },
        success: {
          title: "¡Mensaje Enviado Exitosamente!",
          description: "Gracias por contactarnos. Hemos recibido tu consulta y nos pondremos en contacto contigo pronto.",
          responseTime: "Tiempo de respuesta",
          responsePromise: "Responderemos dentro de las próximas 24 horas en días hábiles.",
          autoResponse: "También recibirás una confirmación automática en tu email.",
          actions: {
            sendAnother: "Enviar Otro Mensaje",
            viewBlog: "Ver Nuestro Blog"
          }
        },
        cta: {
          title: "¿Necesitas una respuesta inmediata?",
          description: "Para consultas urgentes o proyectos que requieren atención inmediata, no dudes en llamarnos directamente.",
          callNow: "Llamar Ahora",
          whatsapp: "WhatsApp"
        },
        security: {
          title: "Formulario Seguro",
          description: "Protección anti-spam avanzada y encriptación de datos. Tus consultas llegan directamente a nuestro equipo."
        },
        guarantee: {
          title: "Respuesta Garantizada",
          description: "Respondemos todos los mensajes dentro de las 24 horas en días hábiles. Para urgencias, llámanos directamente."
        },
        footer: "* Campos obligatorios. Responderemos en menos de 24 horas."
      }
    },
    notFound: {
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
    aboutPage: {
      header: {
        title: "Sobre Nosotros",
        subtitle: "Innovación y precisión al servicio de tus proyectos"
      },
      image: {
        alt: "Equipo Sky Solutions trabajando con drones"
      },
      whoWeAre: {
        title: "Quiénes Somos",
        content: "Somos una empresa joven radicada en el sur de Córdoba, Argentina, con el objetivo de ofrecer servicios profesionales y de calidad en el sector de tecnología de drones. Nos certificamos ante ANAC y cumplimos con todas las normativas necesarias para operar con drones en República Argentina y Latinoamérica, siguiendo las regulaciones vigentes."
      },
      specialization: {
        title: "Nuestra Especialización",
        paragraph1: "Nos especializamos en el manejo de datos relevados por drones, ofreciendo business intelligence e interpretación de datos para optimizar recursos y ampliar márgenes de utilidad. Transformamos información aérea en decisiones estratégicas para tu proyecto.",
        paragraph2: "Nuestra especialización radica en relevamiento y manejo de datos científicos, arqueológicos, geológicos y geográficos. Sin embargo, también en nuestro abanico de servicios ponemos toda nuestra experiencia a disposición del relevamiento e interpretación de datos en sectores como industria, eólico, agropecuario, entre otros."
      },
      certifications: {
        title: "Certificaciones y Cumplimiento",
        anac: {
          title: "Certificación ANAC",
          description: "Operadores certificados por la Administración Nacional de Aviación Civil de Argentina."
        },
        regulations: {
          title: "Normativas Vigentes",
          description: "Cumplimiento total de regulaciones argentinas y latinoamericanas para operaciones con drones."
        }
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
      model3D: {
        enable: "enable 3D model",
        close: "close 3D model"
      }
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
      certificacion: "Certified by ANAC",
      datos: "Cloud storage",
      procesamiento: "Data processing for your performance",
      conexion: "Rural connection with Starlink",
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
      },
      post: {
        backToBlog: "Back to Blog",
        readTime: "read",
        share: "Share",
        tags: "Tags:",
        tableOfContents: "Contents",
        interested: "Interested in",
        consultDescription: "Contact us for a free consultation on how to implement these technologies.",
        freeConsult: "Free Consultation",
        relatedPosts: "Related Articles",
        readArticle: "Read article"
      }
    },
    contact: {
      title: "Contact",
      headerDescription: "We're here to help you. Contact us for a free consultation about our drone services.",
      info: {
        title: "Contact Information",
        email: {
          label: "Email",
          value: "info@skysolutions.com.ar"
        },
        phone: {
          label: "Phone",
          value: "+54 11 1234-5678"
        },
        location: {
          label: "Location",
          value: "South of Córdoba, Argentina"
        }
      },
      form: {
        title: "Send us a Message",
        description: "Complete the form and we will get in touch with you soon.",
        fields: {
          name: "Full name",
          email: "Email",
          phone: "Phone",
          company: "Company",
          service: "Service of interest",
          message: "Message",
          privacy: "I accept the privacy policy and authorize the processing of my personal data to respond to my inquiry."
        },
        placeholders: {
          name: "Your full name",
          email: "your@email.com",
          phone: "+54 9 11 1234-5678",
          company: "Your company name",
          service: "Select a service",
          message: "Tell us about your project or inquiry..."
        },
        validation: {
          required: "Please complete all required fields",
          email: "Please enter a valid email",
          privacy: "You must accept the privacy policy to continue"
        },
        services: {
          agriculture: "Precision Agriculture",
          wind: "Wind Turbine Inspections",
          topography: "Topographic Surveys",
          security: "Security & Monitoring",
          science: "Scientific Applications",
          other: "Other / General Inquiry"
        },
        submit: {
          idle: "Send Message",
          sending: "Sending message...",
          success: "Message Sent Successfully!",
          error: "Error sending message"
        },
        success: {
          title: "Message Sent Successfully!",
          description: "Thank you for contacting us. We have received your inquiry and will get in touch with you soon.",
          responseTime: "Response time",
          responsePromise: "We will respond within the next 24 hours on business days.",
          autoResponse: "You will also receive an automatic confirmation in your email.",
          actions: {
            sendAnother: "Send Another Message",
            viewBlog: "View Our Blog"
          }
        },
        cta: {
          title: "Need an immediate response?",
          description: "For urgent inquiries or projects that require immediate attention, don't hesitate to call us directly.",
          callNow: "Call Now",
          whatsapp: "WhatsApp"
        },
        security: {
          title: "Secure Form",
          description: "Advanced anti-spam protection and data encryption. Your inquiries reach our team directly."
        },
        guarantee: {
          title: "Response Guaranteed",
          description: "We respond to all messages within 24 hours on business days. For emergencies, call us directly."
        },
        footer: "* Required fields. We will respond in less than 24 hours."
      }
    },
    notFound: {
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
    aboutPage: {
      header: {
        title: "About Us",
        subtitle: "Innovation and precision at the service of your projects"
      },
      image: {
        alt: "Sky Solutions team working with drones"
      },
      whoWeAre: {
        title: "Who We Are",
        content: "We are a young company based in southern Córdoba, Argentina, with the goal of offering professional and quality services in the drone technology sector. We are certified by ANAC and comply with all necessary regulations to operate drones in the Argentine Republic and Latin America, following current regulations."
      },
      specialization: {
        title: "Our Specialization",
        paragraph1: "We specialize in managing data collected by drones, offering business intelligence and data interpretation to optimize resources and expand profit margins. We transform aerial information into strategic decisions for your project.",
        paragraph2: "Our specialization lies in surveying and managing scientific, archaeological, geological and geographic data. However, in our range of services we put all our experience at the disposal of data collection and interpretation in sectors such as industry, wind energy, agriculture, among others."
      },
      certifications: {
        title: "Certifications and Compliance",
        anac: {
          title: "ANAC Certification",
          description: "Operators certified by the National Civil Aviation Administration of Argentina."
        },
        regulations: {
          title: "Current Regulations",
          description: "Full compliance with Argentine and Latin American regulations for drone operations."
        }
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