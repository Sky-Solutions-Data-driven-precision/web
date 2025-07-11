"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

// Importar dinámicamente el componente 3D para evitar errores de SSR
const DynamicDroneCanvas = dynamic(() => import("./drone-canvas"), {
  ssr: false, // Desactivar SSR para este componente
  loading: () => (
    <div className="w-full h-full bg-gradient-to-br from-slate-900 to-blue-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-white/70">Cargando visualización 3D...</p>
      </div>
    </div>
  ),
})

export function DroneScene() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    // Fallback estático para SSR
    return (
      <div className="w-full h-full bg-gradient-to-br from-slate-900 to-blue-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
          <h3 className="text-2xl font-bold text-white mb-2">Sky Solutions</h3>
          <p className="text-white/70">Tecnología de drones profesional</p>
        </div>
      </div>
    )
  }

  return <DynamicDroneCanvas />
}