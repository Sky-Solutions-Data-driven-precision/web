"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

// Fallback simple de carga
function LoadingFallback() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-900 to-blue-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-white/70">Cargando visualización 3D...</p>
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
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
            Sky Solutions
          </h1>
          <p className="text-2xl text-blue-200 font-light mb-2 tracking-wide">
            Data-driven precision
          </p>
          <p className="text-blue-300/80">
            Tecnología de drones profesional
          </p>
        </div>
      </div>

      {/* Efectos de luz de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-indigo-500/5 rounded-full blur-2xl" />
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-blue-400/5 rounded-full blur-xl" />
      </div>
    </div>
  )
}

// Importar dinámicamente el componente 3D para evitar errores de SSR
const DynamicDroneCanvas = dynamic(() => import("./drone-canvas"), {
  ssr: false, // Desactivar SSR para este componente
  loading: () => <LoadingFallback />,
})

export function DroneScene() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Fallback estático para SSR
  if (!isClient) {
    return <StaticFallback />
  }

  // Intentar cargar el componente 3D
  try {
    return <DynamicDroneCanvas />
  } catch (error) {
    console.warn("Error loading 3D scene:", error)
    // Si hay error, volver al fallback estático
    return <StaticFallback />
  }
}