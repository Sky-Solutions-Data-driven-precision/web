"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

interface LanguageStore {
  language: "es" | "en"
  setLanguage: (language: "es" | "en") => void
}

export const useLanguage = create<LanguageStore>()(
  persist(
    (set) => ({
      language: "es",
      setLanguage: (language) => set({ language }),
    }),
    {
      name: "sky-solutions-language",
    },
  ),
)
