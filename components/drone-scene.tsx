"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { useTranslations } from "@/hooks/use-translations"

export function DroneScene() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const { theme } = useTheme()
  const { t } = useTranslations()

  // Seleccionar la versión según el tema
  const earthSrc = theme === 'light' ? '/earth-day.html' : '/earth-night.html'

  // Función para hacer scroll a servicios
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section')
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

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

        {/* Indicador de interactividad - arriba del mundo */}
        <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20">
          <div className={`relative w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-dashed animate-spin ${
            theme === 'light'
              ? 'border-blue-400/60'
              : 'border-blue-300/60'
          }`} style={{ animationDuration: '8s' }}>
            {/* Puntos en el círculo */}
            <div className={`absolute w-1.5 h-1.5 rounded-full top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
              theme === 'light' ? 'bg-blue-500' : 'bg-blue-400'
            }`}></div>
            <div className={`absolute w-1 h-1 rounded-full top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 ${
              theme === 'light' ? 'bg-blue-400' : 'bg-blue-300'
            }`}></div>
            <div className={`absolute w-0.5 h-0.5 rounded-full bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 ${
              theme === 'light' ? 'bg-blue-300' : 'bg-blue-200'
            }`}></div>
            <div className={`absolute w-1 h-1 rounded-full top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 ${
              theme === 'light' ? 'bg-blue-400' : 'bg-blue-300'
            }`}></div>
            
            {/* Icono central */}
            <div className={`absolute inset-0 flex items-center justify-center text-xs md:text-sm ${
              theme === 'light' ? 'text-blue-600' : 'text-blue-300'
            }`}>
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2M7 4h10M7 4l-2 16h14l-2-16M12 8v8m-3-4h6" />
              </svg>
            </div>
          </div>
          
          {/* Texto explicativo */}
          <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-1 text-center ${
            theme === 'light' ? 'text-blue-600' : 'text-blue-300'
          }`}>
            <div className="text-[9px] md:text-[10px] font-medium opacity-80">
              {t("interaction.dragToRotate")}
            </div>
          </div>
        </div>

       {/* Zona de scroll de página - centrada verticalmente */}
        <div className="absolute left-4 md:left-8 top-1/3 md:top-1/2 transform -translate-y-1/2 pointer-events-auto z-20">
          <div 
            className={`backdrop-blur-sm rounded-xl p-2 md:p-3 border transition-all duration-300 hover:scale-105 cursor-pointer ${
              theme === 'light'
                ? 'bg-white/80 border-blue-200/50 hover:border-blue-400/70'
                : 'bg-slate-800/40 border-blue-500/20 hover:border-blue-400/40'
            }`}
            onClick={scrollToServices}
          >
            <div className={`flex flex-col items-center gap-1 md:gap-2 text-xs ${
              theme === 'light' ? 'text-blue-700' : 'text-blue-300'
            }`}>
              <div className="flex flex-col items-center">
                <div className="w-1 h-1 bg-current rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="w-1 h-1 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-1 h-1 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
              <span className="font-medium text-[10px] md:text-xs">{t("scroll.here")}</span>
              <span className="opacity-80 text-[9px] md:text-xs hidden sm:block">{t("scroll.navigate")}</span>
            </div>
          </div>
        </div>

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