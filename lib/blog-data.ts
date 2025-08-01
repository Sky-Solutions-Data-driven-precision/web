import { getAllSlugs } from './blog'

// Lista estática para GitHub Pages export
export const blogSlugs = [
  'agricultura-precision-2024',
  'inspeccion-eolicos-ia',
  'topografia-construccion',
  'seguridad-industrial-drones',
  'investigacion-cientifica-drones',
  'regulaciones-anac-2024',
  'tendencias-drones-2024',
  'ndvi-analisis-cultivos',
  'sensores-multiespectrales-guia',
  'roi-agricultura-precision',
  'drone_arqueologia_aplicaciones',
]

export function getBlogSlugs() {
  // En desarrollo, intenta leer archivos MD dinámicamente
  if (process.env.NODE_ENV === 'development') {
    try {
      const markdownSlugs = getAllSlugs()
      // Si encuentra archivos MD, los usa. Si no, usa la lista estática
      return markdownSlugs.length > 0 ? markdownSlugs : blogSlugs
    } catch (error) {
      console.warn('No se pudieron leer archivos MD, usando lista estática')
      return blogSlugs
    }
  }
  
  // En producción (export), siempre usa lista estática para GitHub Pages
  return blogSlugs
}