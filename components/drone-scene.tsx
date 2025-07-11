"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

// Fallback simple de carga
function LoadingFallback() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-900 to-blue-900 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-blue-300 border-b-transparent rounded-full animate-spin mx-auto" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        </div>
        <p className="text-white/70 animate-pulse">cargando visualización 3D...</p>
      </div>
    </div>
  )
}

// Fallback estático elegante para SSR
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
            <span className="ml-2">preparando experiencia 3D</span>
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

// Importar dinámicamente el componente 3D para evitar errores de SSR
const DynamicDroneCanvas = dynamic(() => import("./drone-canvas"), {
  ssr: false,
  loading: () => <LoadingFallback />,
})

export function DroneScene() {
  const [isClient, setIsClient] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    
    setIsClient(true)
    
    // Esperar un poco más para asegurar que todo esté completamente cargado
    const timer = setTimeout(() => {
      setIsReady(true)
    }, 200)
    
    return () => clearTimeout(timer)
  }, [])

  // Fallback estático para SSR y carga inicial
  if (!isClient || !isReady) {
    return <StaticFallback />
  }

  // Si hay error, mostrar fallback estático
  if (hasError) {
    return <StaticFallback />
  }

  // Intentar cargar el componente 3D con manejo de errores
  try {
    return (
      <div className="w-full h-full">
        <DynamicDroneCanvas />
      </div>
    )
  } catch (error) {
    console.warn("Error loading 3D scene:", error)
    setHasError(true)
    return <StaticFallback />
  }
}