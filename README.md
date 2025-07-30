# Sky Solutions - Data-driven precision

Sitio web corporativo de Sky Solutions, empresa especializada en soluciones profesionales con drones para agricultura, inspecciones, topografía y más. Tecnología de vanguardia al servicio de empresas en Argentina.

🌐 **Sitio web**: [https://skysolutions.com.ar/](https://skysolutions.com.ar/)

## 🚀 Tecnologías Utilizadas

- **Framework**: Next.js 14 con App Router
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS + shadcn/ui
- **Blog**: Sistema híbrido Markdown + Fallback hardcodeado
- **Procesamiento**: gray-matter + marked para Markdown
- **Iconos**: Lucide React
- **Fuentes**: Exo 2 (Google Fonts)
- **Deploy**: GitHub Pages con export estático
- **Analytics**: Google Tag Manager
- **Internacionalización**: Sistema de traducciones personalizado (ES/EN)

## 📁 Estructura del Proyecto

```
├── app/                    # App Router de Next.js
│   ├── blog/              # Sistema de blog
│   │   ├── [slug]/        # Template de Posts dinámicos de /content/posts
│   │   │   ├── page.tsx   # Server Component - genera metadata y datos
│   │   │   └── blog-post-client.tsx # Client Component - interactividad
│   │   ├── blog-client.tsx # Client Component - filtros y búsqueda
│   │   └── page.tsx       # Server Component - obtiene posts
│   ├── servicios/         # Páginas de servicios
│   │   ├── agricultura/
│   │   ├── eolicos/
│   │   ├── topografia/
│   │   ├── seguridad/
│   │   └── ciencia/
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página de inicio
│   ├── sitemap.ts         # Sitemap automático
│   └── robots.ts          # Robots.txt
├── content/               # Sistema de blog con Markdown
│   └── posts/             # Posts del blog en Markdown
│       ├── agricultura-precision-2024.md
│       ├── inspeccion-eolicos-ia.md
│       └── ...otros-posts.md
├── components/            # Componentes reutilizables
├── lib/                   # Utilidades y configuración
│   ├── blog-data.ts       # Gestión de slugs del blog
│   └── blog.ts            # Procesamiento de Markdown
├── hooks/                 # Hooks personalizados   
│   ├── use-translations.ts # Sistema de traducciones ES/EN          
│   ├── use-language.ts    # Hook para cambio de idioma
│   └── ...otros hooks
└── public/               # Archivos estáticos
    └── images/           # Imágenes del sitio y blog
        └── drone-blog.jpg # Imagen de fondo del banner del blog
```

## 🎯 Servicios Destacados

- **Agricultura y Ganadería**: Monitoreo de cultivos, análisis NDVI, gestión de recursos
- **Inspecciones de Eólicos**: Mantenimiento preventivo de aerogeneradores
- **Relevamientos Topográficos**: Mapeo 3D, cálculos volumétricos
- **Seguridad y Monitoreo**: Vigilancia perimetral, respuesta a emergencias
- **Aplicaciones Científicas**: Investigación, recolección de datos académicos

## 📝 Sistema de Blog Avanzado

### Arquitectura Híbrida Server/Client
El blog utiliza una **arquitectura moderna Next.js 14** que combina:
- ✅ **Server Components** para SEO y performance
- ✅ **Client Components** para interactividad (filtros, búsqueda, compartir)
- ✅ **Markdown para nuevos posts** (fácil de escribir)
- ✅ **Fallback hardcodeado** (compatibilidad total)
- ✅ **Procesamiento automático** con gray-matter + marked
- ✅ **Sitemap dinámico** que se actualiza automáticamente

### Funcionalidades Interactivas
- 🔍 **Búsqueda en tiempo real** por título, contenido, autor y categoría
- 🏷️ **Filtrado por categorías** dinámico
- 📑 **Paginación infinita** con "cargar más"
- 📤 **Botón de compartir** con Web Share API y fallbacks
- 🗂️ **Tabla de contenidos** automática basada en H2s
- 🌐 **Soporte multiidioma** (Español/Inglés)
- 🖼️ **Banner con imagen de fondo** (drone-blog.jpg)

### Crear un Nuevo Post

#### Método 1: Markdown (Recomendado)

1. **Crear archivo** `content/posts/mi-nuevo-post.md`:

```markdown
---
title: "Título de mi Post"
excerpt: "Breve descripción del artículo que aparece en listados y SEO"
category: "Agricultura"
author: "Dr. María González"
authorBio: "Especialista en Agricultura de Precisión con más de 15 años de experiencia en implementación de tecnologías avanzadas en el sector agropecuario."
date: "2024-01-15"
readTime: "8 min"
tags: ["Agricultura de Precisión", "NDVI", "Tecnología"]
image: "/images/mi-post.jpg"
---

# Mi Nuevo Post

Contenido del post en **Markdown**. Puedes usar:

## Subtítulos

### Sub-subtítulos

- Listas con viñetas
- Múltiples elementos

1. Listas numeradas
2. Ordenadas

**Texto en negrita** y *cursiva*.

```código
Bloques de código
```

> Citas y blockquotes

[Enlaces](https://skysolutions.com.ar)

2. **Agregar slug** a `lib/blog-data.ts`:

```typescript
export const blogSlugs = [
  // ... posts existentes
  'mi-nuevo-post', // ← Agregar aquí
]
```

3. **Deploy automático**: Push a `main` y GitHub Actions publica

#### Método 2: Hardcodeado (Legacy)

Editar directamente `app/blog/[slug]/page.tsx` en el objeto `post`.

### Campos del Frontmatter

| Campo | Obligatorio | Descripción | Ejemplo |
|-------|-------------|-------------|---------|
| `title` | ✅ | Título del post | `"El Futuro de la Agricultura"` |
| `excerpt` | ✅ | Descripción breve | `"Descubre cómo los drones..."` |
| `category` | ✅ | Categoría del post | `"Agricultura"` |
| `author` | ✅ | Nombre del autor | `"Dr. María González"` |
| `authorBio` | ⚠️ | Biografía del autor | `"Especialista en..."` |
| `date` | ✅ | Fecha (YYYY-MM-DD) | `"2024-01-15"` |
| `readTime` | ✅ | Tiempo de lectura | `"8 min"` |
| `tags` | ✅ | Array de tags | `["NDVI", "Agricultura"]` |
| `image` | ❌ | Imagen destacada | `"/images/post.jpg"` |

### Ubicaciones Importantes

- **Posts en Markdown**: `content/posts/*.md`
- **Configuración de slugs**: `lib/blog-data.ts`
- **Procesador de Markdown**: `lib/blog.ts`
- **Server Component del post**: `app/blog/[slug]/page.tsx`
- **Client Component del post**: `app/blog/[slug]/blog-post-client.tsx`
- **Client Component del blog**: `app/blog/blog-client.tsx`
- **Página principal del blog**: `app/blog/page.tsx`
- **Sistema de traducciones**: `hooks/use-translations.ts`
- **Sitemap automático**: `app/sitemap.ts`

## 🌐 Sistema de Internacionalización

### Idiomas Soportados
- **Español (ES)**: Idioma por defecto
- **Inglés (EN)**: Traducción completa

### Características
- ✅ **Traducciones completas** para todas las secciones
- ✅ **Cambio dinámico** de idioma sin recarga
- ✅ **Persistencia** del idioma seleccionado
- ✅ **SEO optimizado** para ambos idiomas
- ✅ **Filtros de blog** funcionan en ambos idiomas

### Agregar Nuevas Traducciones

Editar `hooks/use-translations.ts`:

```typescript
const translations = {
  es: {
    blog: {
      post: {
        newKey: "Nuevo texto en español"
      }
    }
  },
  en: {
    blog: {
      post: {
        newKey: "New text in English"
      }
    }
  }
}
```

Usar en componentes:
```typescript
const { t } = useTranslations()
return <span>{t('blog.post.newKey')}</span>
```

## 🗺️ Sitemap y SEO

### Acceso al Sitemap
El sitemap se genera automáticamente y está disponible en:
**[https://skysolutions.com.ar/sitemap.xml](https://skysolutions.com.ar/sitemap.xml)**

### Características SEO
- ✅ Sitemap automático que incluye todos los posts
- ✅ Robots.txt configurado
- ✅ Metadata optimizada para redes sociales
- ✅ URLs amigables para SEO
- ✅ Google Tag Manager integrado
- ✅ Estructura de datos rica para posts (JSON-LD)
- ✅ Certificación ANAC y credibilidad técnica
- ✅ Open Graph y Twitter Cards
- ✅ Metadata dinámica por post

## 🚀 Desarrollo

### Instalación
```bash
npm install
```

### Desarrollo local
```bash
npm run dev
```
Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build para producción
```bash
npm run build
```

### Dependencias del Blog
- **gray-matter**: Parseo de frontmatter YAML
- **marked**: Conversión de Markdown a HTML
- **@types/marked**: Tipos de TypeScript

### Arquitectura de Componentes

#### Server Components (SSG/SSR)
- `app/blog/page.tsx`: Obtiene posts y genera metadata
- `app/blog/[slug]/page.tsx`: Procesa Markdown y SEO

#### Client Components (Interactividad)
- `blog-client.tsx`: Filtros, búsqueda, paginación
- `blog-post-client.tsx`: Compartir, tabla de contenidos

## 🔄 Flujo de Trabajo

### Para desarrollo:
1. **Crear archivo MD** en `content/posts/nuevo-post.md`
2. **Funciona automáticamente** - el sistema lee los archivos MD
3. **El sitemap se actualiza** dinámicamente

### Para producción (GitHub Pages):
1. **Crear archivo MD** en `content/posts/nuevo-post.md`
2. **Agregar slug** al array en `lib/blog-data.ts`
3. **Push a main** → GitHub Actions hace el deploy automático

### Deploy
El sitio se despliega automáticamente en GitHub Pages mediante GitHub Actions cuando se hace push a la rama `main`.

## 📊 Analytics y Seguimiento

- **Google Tag Manager**: GTM-5DQKBMB7
- **Dominio**: skysolutions.com.ar
- **SSL**: Configurado automáticamente por GitHub Pages

## 🎨 Diseño y UI

- **Tema**: Dark mode por defecto
- **Colores primarios**: Azul corporativo (#1c3e7f)
- **Fuente**: Exo 2 para un look tecnológico y moderno
- **Componentes**: Sistema de diseño consistente con shadcn/ui
- **Animaciones**: Efectos glow y transiciones suaves
- **Typography**: Sistema prose mejorado para contenido de blog
- **Banner del blog**: Imagen de fondo con overlay (drone-blog.jpg)

## 📱 Responsive Design

El sitio está completamente optimizado para:
- 📱 Móviles (< 768px)
- 💻 Tablets (768px - 1024px)
- 🖥️ Desktop (> 1024px)

## 🛠️ Configuración Técnica

### Archivos de Configuración
- `next.config.mjs`: Configuración para GitHub Pages export
- `tailwind.config.ts`: Configuración de Tailwind CSS
- `tsconfig.json`: Configuración de TypeScript
- `.github/workflows/deploy.yml`: GitHub Actions para deploy

### Variables de Entorno
El proyecto funciona sin variables de entorno adicionales para simplificar el deploy en GitHub Pages.

## 🔧 Próximas Mejoras

- [x] ~~Integración con CMS para gestión de contenido~~ ✅ **Completado con Markdown**
- [x] ~~Búsqueda de posts del blog~~ ✅ **Completado**
- [x] ~~Categorías y filtros avanzados~~ ✅ **Completado**
- [x] ~~Sistema de traducciones~~ ✅ **Completado (ES/EN)**
- [ ] Sistema de comentarios en el blog
- [ ] Formularios de contacto funcionales
- [ ] Galería de proyectos con casos de estudio
- [ ] Chat en vivo para consultas
- [ ] Calculadora de ROI para servicios
- [ ] Newsletter funcional
- [ ] PWA (Progressive Web App)
- [ ] Modo offline para el blog

## 📞 Contacto

- **Email**: info@skysolutions.com.ar
- **Sitio web**: [skysolutions.com.ar](https://skysolutions.com.ar)
- **Ubicación**: Buenos Aires, Argentina

## 📄 Licencia

Este proyecto está bajo la Licencia GPL v3. Ver el archivo `LICENSE` para más detalles.

---

**Sky Solutions** - Llevando la precisión basada en datos a nuevas alturas 🚁✨

## 🆘 Troubleshooting

### Problemas Comunes

**Error al hacer build:**
- Verificar que todos los slugs en `lib/blog-data.ts` tengan archivos MD correspondientes
- Asegurar que el frontmatter YAML esté bien formateado

**Post no aparece:**
- Verificar que el slug esté en `lib/blog-data.ts`
- Confirmar que el archivo MD existe en `content/posts/`
- Revisar que el frontmatter tenga todos los campos obligatorios

**Estilos no se aplican:**
- Verificar que `marked` esté instalado correctamente
- Confirmar que las clases prose estén en el archivo CSS

**Traducciones no funcionan:**
- Verificar que la estructura en `use-translations.ts` sea correcta
- Confirmar que las claves de traducción coincidan exactamente
- Revisar que `useTranslations()` esté importado correctamente

**Filtros del blog no funcionan:**
- Verificar que las categorías en los posts MD coincidan con las usadas en filtros
- Confirmar que el estado `selectedCategory` use valores fijos, no traducciones