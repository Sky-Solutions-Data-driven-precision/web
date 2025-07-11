"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

// Componente con iframe 3D
function Interactive3DScene() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const { theme } = useTheme()

  // Seleccionar la versión según el tema
  const earthSrc = theme === 'light' ? '/earth-day.html' : '/earth-night.html'

  return (
    <div className="w-full h-full relative">
      {/* Overlay con información de la empresa e interactividad */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {/* Partículas interactivas - adaptadas al tema */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 rounded-full animate-pulse ${
                theme === 'light' ? 'bg-blue-600/40' : 'bg-blue-400/30'
              }`}
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
          <div className={`backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 ${
            theme === 'light' 
              ? 'bg-white/80 border-blue-200/50 hover:border-blue-400/70 text-gray-900' 
              : 'bg-black/60 border-blue-500/20 hover:border-blue-400/40 text-white hover:bg-black/70'
          }`}>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Sky Solutions
            </h1>
            <p className={`font-light mb-1 ${
              theme === 'light' ? 'text-blue-700' : 'text-blue-200'
            }`}>
              data-driven precision
            </p>
            <p className={`text-sm ${
              theme === 'light' ? 'text-blue-600/80' : 'text-blue-300/80'
            }`}>
              tecnología de drones profesional
            </p>
          </div>
        </div>

        {/* Indicadores técnicos - adaptados al tema */}
        <div className="absolute bottom-8 right-8 pointer-events-auto z-20">
          <div className={`backdrop-blur-sm rounded-xl p-4 border ${
            theme === 'light'
              ? 'bg-white/80 border-blue-200/50'
              : 'bg-black/60 border-blue-500/20'
          }`}>
            <div className={`flex items-center gap-3 text-sm ${
              theme === 'light' ? 'text-blue-700' : 'text-blue-300'
            }`}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>sistema activo</span>
              </div>
              <div className={`w-px h-4 ${
                theme === 'light' ? 'bg-blue-300/50' : 'bg-blue-500/30'
              }`}></div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span>vista 3D</span>
              </div>
            </div>
          </div>
        </div>

        {/* Gradiente de borde - adaptado al tema */}
        <div className={`absolute inset-x-0 top-0 h-20 bg-gradient-to-b pointer-events-none ${
          theme === 'light' 
            ? 'from-white/20 to-transparent' 
            : 'from-black/20 to-transparent'
        }`} />
        <div className={`absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t pointer-events-none ${
          theme === 'light' 
            ? 'from-white/30 to-transparent' 
            : 'from-black/30 to-transparent'
        }`} />
      </div>

      {/* Spinner de carga - adaptado al tema */}
      {!isLoaded && !hasError && (
        <div className={`absolute inset-0 z-20 flex items-center justify-center ${
          theme === 'light'
            ? 'bg-gradient-to-br from-blue-50 to-blue-100'
            : 'bg-gradient-to-br from-slate-900 to-blue-900'
        }`}>
          <div className="text-center">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <div className="absolute inset-0 w-16 h-16 border-4 border-blue-300 border-b-transparent rounded-full animate-spin mx-auto" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
            </div>
            <p className={`animate-pulse ${
              theme === 'light' ? 'text-gray-700' : 'text-white/70'
            }`}>cargando experiencia 3D...</p>
          </div>
        </div>
      )}

      {/* Fallback en caso de error - adaptado al tema */}
      {hasError && (
        <div className={`absolute inset-0 z-20 flex items-center justify-center ${
          theme === 'light'
            ? 'bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100'
            : 'bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900'
        }`}>
          <div className="text-center">
            <div className={`w-24 h-24 rounded-lg flex items-center justify-center mx-auto mb-4 ${
              theme === 'light' ? 'bg-blue-100/50' : 'bg-blue-500/20'
            }`}>
              <svg className={`w-12 h-12 ${
                theme === 'light' ? 'text-blue-600' : 'text-blue-400'
              }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 className={`text-2xl font-bold mb-2 ${
              theme === 'light' ? 'text-gray-900' : 'text-white'
            }`}>Sky Solutions</h3>
            <p className={`mb-1 ${
              theme === 'light' ? 'text-blue-700' : 'text-blue-200'
            }`}>data-driven precision</p>
            <p className={`${
              theme === 'light' ? 'text-blue-600/80' : 'text-blue-300/80'
            }`}>tecnología de drones profesional</p>
          </div>
        </div>
      )}

      {/* Iframe 3D - cambia según el tema */}
      <iframe
        key={earthSrc} // Forzar re-render cuando cambia el tema
        src={earthSrc}
        className="w-full h-full border-0 relative z-10"
        style={{ 
          background: theme === 'light' 
            ? 'linear-gradient(135deg, #f0f9ff 0%, #3b82f6 100%)'
            : 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)'
        }}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        title={`Visualización 3D - Earth ${theme === 'light' ? 'Day' : 'Night'}`}
        allow="accelerometer; gyroscope; magnetometer; pointer-lock"
        sandbox="allow-scripts allow-same-origin allow-pointer-lock"
      />
    </div>
  )
}

// Fallback estático elegante - adaptado al tema
function StaticFallback() {
  const { theme } = useTheme()
  
  return (
    <div className={`w-full h-full relative overflow-hidden ${
      theme === 'light'
        ? 'bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100'
        : 'bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900'
    }`}>
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
            <div className={`w-32 h-32 rounded-3xl shadow-2xl flex items-center justify-center mx-auto transform hover:scale-105 transition-transform duration-300 ${
              theme === 'light'
                ? 'bg-gradient-to-br from-blue-500 to-blue-700'
                : 'bg-gradient-to-br from-blue-600 to-blue-800'
            }`}>
              <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            
            {/* Anillos de animación */}
            <div className="absolute inset-0 w-32 h-32 mx-auto">
              <div className={`absolute inset-0 border-2 rounded-3xl animate-ping ${
                theme === 'light' ? 'border-blue-500/40' : 'border-blue-400/30'
              }`}></div>
              <div className={`absolute inset-2 border rounded-3xl animate-pulse ${
                theme === 'light' ? 'border-blue-400/30' : 'border-blue-300/20'
              }`}></div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
            Sky Solutions
          </h1>
          <p className={`text-2xl font-light mb-2 tracking-wide ${
            theme === 'light' ? 'text-blue-700' : 'text-blue-200'
          }`}>
            data-driven precision
          </p>
          <p className={`mb-6 ${
            theme === 'light' ? 'text-blue-600/80' : 'text-blue-300/80'
          }`}>
            tecnología de drones profesional
          </p>
          
          {/* Indicador de carga */}
          <div className={`flex items-center justify-center gap-2 text-sm ${
            theme === 'light' ? 'text-blue-500/80' : 'text-blue-400/60'
          }`}>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <span className="ml-2">inicializando experiencia 3D</span>
          </div>
        </div>
      </div>

      {/* Efectos de luz de fondo */}
      <div className="absolute inset-0">
        <div className={`absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl animate-pulse ${
          theme === 'light' ? 'bg-blue-200/20' : 'bg-blue-500/5'
        }`} />
        <div className={`absolute top-1/3 left-1/3 w-64 h-64 rounded-full blur-2xl animate-pulse ${
          theme === 'light' ? 'bg-indigo-200/15' : 'bg-indigo-500/5'
        }`} style={{ animationDelay: '1s' }} />
        <div className={`absolute bottom-1/3 right-1/3 w-48 h-48 rounded-full blur-xl animate-pulse ${
          theme === 'light' ? 'bg-blue-300/10' : 'bg-blue-400/5'
        }`} style={{ animationDelay: '2s' }} />
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