"use client"

import { useTranslations } from "@/hooks/use-translations"

export function DroneSection() {
  const { t } = useTranslations()
  return (
    <section className="relative min-h-screen flex items-center dark:bg-black bg-white overflow-hidden">
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="dark:text-white text-black">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {t("drone.title")}
            </h2>
            
            <p className="text-xl md:text-2xl mb-8 dark:text-gray-300 text-gray-600 leading-relaxed">
              {t("drone.description")}
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 dark:bg-white/20 bg-black/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 dark:text-white text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{t("drone.features.speed.title")}</h3>
                  <p className="dark:text-gray-400 text-gray-600">{t("drone.features.speed.description")}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 dark:bg-white/20 bg-black/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 dark:text-white text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{t("drone.features.precision.title")}</h3>
                  <p className="dark:text-gray-400 text-gray-600">{t("drone.features.precision.description")}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 dark:bg-white/20 bg-black/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 dark:text-white text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{t("drone.features.innovation.title")}</h3>
                  <p className="dark:text-gray-400 text-gray-600">{t("drone.features.innovation.description")}</p>
                </div>
              </div>
            </div>
            
            <button className="dark:bg-white dark:text-black bg-black text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300">
              {t("drone.cta")}
            </button>
          </div>
          
          {/* Right Image with Mask */}
          <div className="relative">
            <div className="relative overflow-hidden">
              {/* Mask Shape */}
              <div 
                className="w-full h-[600px] bg-cover bg-center relative"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
                  clipPath: "polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)"
                }}
              >
                {/* Subtle overlay for better integration */}
                <div className="absolute inset-0 dark:bg-black/30 bg-white/20"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-10 right-10 w-20 h-20 dark:bg-white/10 bg-black/5 rounded-full"></div>
              <div className="absolute bottom-20 left-10 w-12 h-12 dark:bg-white/20 bg-black/10 rounded-full"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}