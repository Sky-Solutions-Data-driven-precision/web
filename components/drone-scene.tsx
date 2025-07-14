"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export function DroneScene() {
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
              : 'bg-slate-800/40 border-blue-500/20 hover:border-blue-400/40 text-white hover:bg-slate-800/60'
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

        {/* Indicadores técnicos - adaptados al tema 
        <div className="absolute bottom-8 right-8 pointer-events-auto z-20">
          <div className={`backdrop-blur-sm rounded-xl p-4 border ${
            theme === 'light'
              ? 'bg-white/80 border-blue-200/50'
              : 'bg-slate-800/40 border-blue-500/20'
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

        */}

        {/* Gradientes de borde más suaves */}
        <div className={`absolute inset-x-0 top-0 h-20 bg-gradient-to-b pointer-events-none ${
          theme === 'light' 
            ? 'from-white/20 to-transparent' 
            : 'from-gray-700/10 to-transparent'
        }`} />
        <div className={`absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t pointer-events-none ${
          theme === 'light' 
            ? 'from-white/30 to-transparent' 
            : 'from-gray-800/15 to-transparent'
        }`} />
      </div>

      {/* Fallback en caso de error solamente */}
      {hasError && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-transparent">
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
            }`}>Data-driven precision</p>
            <p className={`${
              theme === 'light' ? 'text-blue-600/80' : 'text-blue-300/80'
            }`}>tecnología de drones profesional</p>
          </div>
        </div>
      )}

      {/* Iframe 3D - fondo más claro en dark mode */}
      <iframe
        key={earthSrc}
        src={earthSrc}
        className="w-full h-full border-0 relative z-10"
        style={{ 
          background: 'transparent'
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