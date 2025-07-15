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

## 📁 Estructura del Proyecto

```
├── app/                    # App Router de Next.js
│   ├── blog/              # Sistema de blog
│   │   ├── [slug]/        # Template de Posts dinámicos de /content/posts
│   │   └── page.tsx       # Página principal del blog
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
    ├── use-translations.ts # Archivo de traducciones          
    └── ...otros hooks
└── public/               # Archivos estáticos
```

## 🎯 Servicios Destacados

- **Agricultura y Ganadería**: Monitoreo de cultivos, análisis NDVI, gestión de recursos
- **Inspecciones de Eólicos**: Mantenimiento preventivo de aerogeneradores
- **Relevamientos Topográficos**: Mapeo 3D, cálculos volumétricos
- **Seguridad y Monitoreo**: Vigilancia perimetral, respuesta a emergencias
- **Aplicaciones Científicas**: Investigación, recolección de datos académicos

## 📝 Sistema de Blog Avanzado

### Arquitectura Híbrida
El blog utiliza un **sistema híbrido** que combina:
- ✅ **Markdown para nuevos posts** (fácil de escribir)
- ✅ **Fallback hardcodeado** (compatibilidad total)
- ✅ **Procesamiento automático** con gray-matter + marked
- ✅ **Sitemap dinámico** que se actualiza automáticamente

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
```

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
- **Template de post**: `app/blog/[slug]/page.tsx`
- **Página principal del blog**: `app/blog/page.tsx`
- **Sitemap automático**: `app/sitemap.ts`

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
- ✅ Estructura de datos rica para posts
- ✅ Certificación ANAC y credibilidad técnica

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

- [ ] ~~Integración con CMS para gestión de contenido~~ ✅ **Completado con Markdown**
- [ ] Sistema de comentarios en el blog
- [ ] Formularios de contacto funcionales
- [ ] Galería de proyectos con casos de estudio
- [ ] Chat en vivo para consultas
- [ ] Calculadora de ROI para servicios
- [ ] Búsqueda de posts del blog
- [ ] Categorías y filtros avanzados
- [ ] Newsletter funcional

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