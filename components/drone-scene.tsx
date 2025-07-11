"use client"

import { useEffect, useState } from "react"

// Componente con iframe 3D
function Interactive3DScene() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  return (
    <div className="w-full h-full relative">
      {/* Overlay con información de la empresa e interactividad */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {/* Partículas interactivas */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${2 + i * 0.3}s`
              }}
            />
          ))}
        </div>

        <div className="absolute top-8 left-8 pointer-events-auto z-20">
          <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:bg-black/70">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Sky Solutions
            </h1>
            <p className="text-blue-200 font-light mb-1">
              data-driven precision
            </p>
            <p className="text-blue-300/80 text-sm">
              tecnología de drones profesional
            </p>
          </div>
        </div>

        {/* Indicadores técnicos */}
        <div className="absolute bottom-8 right-8 pointer-events-auto z-20">
          <div className="bg-black/60 backdrop-blur-sm rounded-xl p-4 border border-blue-500/20">
            <div className="flex items-center gap-3 text-sm text-blue-300">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>sistema activo</span>
              </div>
              <div className="w-px h-4 bg-blue-500/30"></div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span>vista 3D</span>
              </div>
            </div>
          </div>
        </div>

        {/* Gradiente de borde - solo en los bordes */}
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
      </div>

      {/* Spinner de carga */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 z-20 bg-gradient-to-br from-slate-900 to-blue-900 flex items-center justify-center">
          <div className="text-center">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <div className="absolute inset-0 w-16 h-16 border-4 border-blue-300 border-b-transparent rounded-full animate-spin mx-auto" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
            </div>
            <p className="text-white/70 animate-pulse">cargando experiencia 3D...</p>
          </div>
        </div>
      )}

      {/* Fallback en caso de error */}
      {hasError && (
        <div className="absolute inset-0 z-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center">
          <div className="text-center">
            <div className="w-24 h-24 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Sky Solutions</h3>
            <p className="text-blue-200 mb-1">data-driven precision</p>
            <p className="text-blue-300/80">tecnología de drones profesional</p>
          </div>
        </div>
      )}

      {/* Iframe 3D con CSS para ocultar controles */}
      <iframe
        src="https://threejs.org/examples/webgpu_tsl_earth.html"
        className="w-full h-full border-0 relative z-10"
        style={{ 
          filter: 'hue-rotate(240deg) saturate(1.3) brightness(0.8)',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)'
        }}
        onLoad={(e) => {
          setIsLoaded(true)
          // Intentar ocultar controles del iframe
          try {
            const iframe = e.target as HTMLIFrameElement
            const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document
            if (iframeDoc) {
              const style = iframeDoc.createElement('style')
              style.textContent = `
                .dg.ac { display: none !important; }
                .dg { display: none !important; }
                #info { display: none !important; }
                .controls { display: none !important; }
              `
              iframeDoc.head.appendChild(style)
            }
          } catch (error) {
            console.log('No se pueden ocultar controles por CORS')
          }
        }}
        onError={() => setHasError(true)}
        title="Visualización 3D interactiva - Earth WebGPU"
        allow="accelerometer; gyroscope; magnetometer; pointer-lock"
        sandbox="allow-scripts allow-same-origin allow-pointer-lock"
      />
    </div>
  )
}

// Fallback estático elegante
function StaticFallback() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Grid de fondo sutil */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center">
          <div className="relative mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl shadow-2xl flex items-center justify-center mx-auto transform hover:scale-105 transition-transform duration-300">
              <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            
            {/* Anillos de animación */}
            <div className="absolute inset-0 w-32 h-32 mx-auto">
              <div className="absolute inset-0 border-2 border-blue-400/30 rounded-3xl animate-ping"></div>
              <div className="absolute inset-2 border border-blue-300/20 rounded-3xl animate-pulse"></div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
            Sky Solutions
          </h1>
          <p className="text-2xl text-blue-200 font-light mb-2 tracking-wide">
            data-driven precision
          </p>
          <p className="text-blue-300/80 mb-6">
            tecnología de drones profesional
          </p>
          
          {/* Indicador de carga */}
          <div className="flex items-center justify-center gap-2 text-blue-400/60 text-sm">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <span className="ml-2">inicializando experiencia 3D</span>
          </div>
        </div>
      </div>

      {/* Efectos de luz de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-indigo-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-blue-400/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  )
}

export function DroneScene() {
  const [isClient, setIsClient] = useState(false)
  const [useIframe, setUseIframe] = useState(true) // Para poder alternar fácilmente

  useEffect(() => {
    if (typeof window === 'undefined') return
    setIsClient(true)
  }, [])

  // Fallback estático para SSR
  if (!isClient) {
    return <StaticFallback />
  }

  // Usar iframe por defecto para evitar errores de Three.js
  if (useIframe) {
    return <Interactive3DScene />
  }

  return <StaticFallback />
}