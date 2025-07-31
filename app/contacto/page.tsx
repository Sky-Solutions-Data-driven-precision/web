"use client"

import { useTranslations } from "@/hooks/use-translations"

export default function ContactoPage() {
  const { t } = useTranslations()
  
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">{t('contact.title')}</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">{t('contact.info.title')}</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">{t('contact.info.email.label')}</h3>
                <p className="text-muted-foreground">{t('contact.info.email.value')}</p>
              </div>
              {/* <div>
                <h3 className="font-semibold">{t('contact.info.phone.label')}</h3>
                <p className="text-muted-foreground">{t('contact.info.phone.value')}</p>
              </div> */}
              <div>
                <h3 className="font-semibold">{t('contact.info.location.label')}</h3>
                <p className="text-muted-foreground">{t('contact.info.location.value')}</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">{t('contact.form.title')}</h2>
            <p className="text-muted-foreground">
              {t('contact.form.description')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}