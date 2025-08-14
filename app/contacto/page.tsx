"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useTranslations } from "@/hooks/use-translations"
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2, Clock, Shield } from "lucide-react"

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  service: string
  message: string
  acceptPrivacy: boolean
}

export default function ContactoPage() {
  const { t } = useTranslations()
  
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    acceptPrivacy: false
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState("")

  // Lista de servicios
  const services = [
    { value: "agricultura", label: "Agricultura de Precisión" },
    { value: "eolicos", label: "Inspecciones Eólicas" },
    { value: "topografia", label: "Relevamientos Topográficos" },
    { value: "seguridad", label: "Seguridad y Monitoreo" },
    { value: "ciencia", label: "Aplicaciones Científicas" },
    { value: "otro", label: "Otro / Consulta General" }
  ]

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    // Reset error status when user starts typing
    if (submitStatus === 'error') {
      setSubmitStatus('idle')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validaciones básicas
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error')
      setErrorMessage("Por favor completa todos los campos obligatorios")
      return
    }
    
    if (!formData.acceptPrivacy) {
      setSubmitStatus('error')
      setErrorMessage("Debes aceptar la política de privacidad para continuar")
      return
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('error')
      setErrorMessage("Por favor ingresa un email válido")
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage("")

    try {
      // 🚀 Web3Forms - ILIMITADO y GRATIS
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '61375b78-55b5-46ee-b36f-0d8df5c80367', // 👈 Reemplazar con tu key real
          
          // Datos del formulario
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'No especificado',
          company: formData.company || 'No especificado',
          service: services.find(s => s.value === formData.service)?.label || 'No especificado',
          message: formData.message,
          
          // Configuración del email
          subject: `Nuevo contacto de ${formData.name} - Sky Solutions`,
          from_name: 'Sky Solutions - Formulario Web',
          
          // Campos adicionales opcionales
          '_template': 'table', // Email format más limpio
          // '_cc': 'ventas@skysolutions.com.ar', // Copia a ventas (comentado - email no existe)
          '_captcha': false, // Sin captcha por ahora
          
          // Redirect después del envío (opcional)
          '_next': 'https://skysolutions.com.ar/contacto?success=true',
          
          // Respuesta automática al cliente (opcional)
          '_autoresponse': 'true',
          '_autoresponse_subject': 'Hemos recibido tu consulta - Sky Solutions',
          '_autoresponse_message': `Hola ${formData.name},\n\nGracias por contactar a Sky Solutions. Hemos recibido tu consulta sobre ${services.find(s => s.value === formData.service)?.label || 'nuestros servicios'} y nos pondremos en contacto contigo dentro de las próximas 24 horas.\n\nSaludos,\nEquipo Sky Solutions\ninfo@skysolutions.com.ar`,
          
          // Metadatos útiles
          'source': 'Website Contact Form',
          'timestamp': new Date().toISOString(),
          'user_agent': navigator.userAgent,
          'page_url': window.location.href
        }),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        // ✅ Éxito
        setSubmitStatus('success')
        
        // Reset form después de mostrar éxito
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            service: "",
            message: "",
            acceptPrivacy: false
          })
        }, 2000)

      } else {
        throw new Error(result.message || 'Error al enviar el formulario')
      }

    } catch (error: any) {
      console.error('Error sending form:', error)
      setSubmitStatus('error')
      
      // Mensajes de error más específicos
      if (error.message?.includes('access_key')) {
        setErrorMessage("Error de configuración del servicio. Por favor intenta más tarde.")
      } else if (error.message?.includes('rate limit')) {
        setErrorMessage("Demasiadas solicitudes. Por favor espera un momento e intenta nuevamente.")
      } else {
        setErrorMessage("Error al enviar el mensaje. Por favor intenta nuevamente o contáctanos directamente.")
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  // 🎉 Estado de éxito
  if (submitStatus === 'success') {
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="border-green-200 bg-green-50 dark:bg-green-950 dark:border-green-800">
              <CardHeader>
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-2xl text-green-800 dark:text-green-200">
                  ¡Mensaje Enviado Exitosamente!
                </CardTitle>
                <CardDescription className="text-green-700 dark:text-green-300">
                  Gracias por contactarnos, <strong>{formData.name}</strong>. Hemos recibido tu consulta sobre <strong>{services.find(s => s.value === formData.service)?.label || 'nuestros servicios'}</strong> y nos pondremos en contacto contigo pronto.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-green-100 dark:bg-green-900 rounded-lg p-4">
                    <div className="flex items-center justify-center gap-2 text-sm text-green-600 dark:text-green-400 mb-2">
                      <Clock className="h-4 w-4" />
                      <span className="font-semibold">Tiempo de respuesta</span>
                    </div>
                    <p className="text-green-700 dark:text-green-300 text-sm">
                      Responderemos a <strong>{formData.email}</strong> dentro de las próximas 24 horas en días hábiles.
                    </p>
                    <p className="text-green-600 dark:text-green-400 text-xs mt-2">
                      También recibirás una confirmación automática en tu email.
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      variant="outline" 
                      onClick={() => setSubmitStatus('idle')}
                      className="border-green-300 text-green-700 hover:bg-green-100 dark:border-green-600 dark:text-green-300 dark:hover:bg-green-900"
                    >
                      Enviar Otro Mensaje
                    </Button>
                    <Button asChild className="bg-green-600 hover:bg-green-700">
                      <a href="/blog">Ver Nuestro Blog</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('contact.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Contáctanos para una consulta gratuita sobre nuestros servicios con drones.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Información de Contacto */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{t('contact.info.title')}</CardTitle>
                  <CardDescription>
                    Puedes contactarnos directamente a través de estos medios o usando el formulario.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{t('contact.info.email.label')}</h3>
                      <p className="text-muted-foreground">{t('contact.info.email.value')}</p>
                      <a 
                        href="mailto:info@skysolutions.com.ar" 
                        className="text-primary hover:underline text-sm"
                      >
                        Enviar email →
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Teléfono</h3>
                      <p className="text-muted-foreground">+54 9 11 1234-5678</p>
                      <p className="text-sm text-muted-foreground">Lun-Vie 9:00-18:00</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{t('contact.info.location.label')}</h3>
                      <p className="text-muted-foreground">{t('contact.info.location.value')}</p>
                      <p className="text-sm text-muted-foreground">Cobertura nacional</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 🚀 Web3Forms Features */}
              <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <span className="font-semibold text-blue-800 dark:text-blue-200">Formulario Seguro</span>
                  </div>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Protección anti-spam avanzada y encriptación de datos. 
                    Tus consultas llegan directamente a nuestro equipo.
                  </p>
                </CardContent>
              </Card>

              {/* Garantía de Respuesta */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Respuesta Garantizada</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Respondemos todos los mensajes dentro de las 24 horas en días hábiles. 
                    Para urgencias, llámanos directamente.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Formulario de Contacto */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Send className="h-6 w-6" />
                  Envíanos un Mensaje
                </CardTitle>
                <CardDescription>
                  Completa el formulario y nos pondremos en contacto contigo pronto.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* 🚨 Error State */}
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                      <span className="text-red-800 dark:text-red-200 font-medium">
                        Error al enviar el mensaje
                      </span>
                    </div>
                    <p className="text-red-700 dark:text-red-300 text-sm mt-1">
                      {errorMessage}
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nombre y Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Tu nombre completo"
                        required
                        className={submitStatus === 'error' && !formData.name ? 'border-red-300' : ''}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="tu@email.com"
                        required
                        className={submitStatus === 'error' && !formData.email ? 'border-red-300' : ''}
                      />
                    </div>
                  </div>

                  {/* Teléfono y Empresa */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+54 9 11 1234-5678"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                  </div>

                  {/* Servicio de Interés */}
                  <div className="space-y-2">
                    <Label htmlFor="service">Servicio de interés</Label>
                    <Select onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona un servicio" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.value} value={service.value}>
                            {service.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Mensaje */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Cuéntanos sobre tu proyecto o consulta..."
                      rows={5}
                      required
                      className={submitStatus === 'error' && !formData.message ? 'border-red-300' : ''}
                    />
                  </div>

                  {/* Checkbox de Privacidad */}
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="privacy"
                      checked={formData.acceptPrivacy}
                      onCheckedChange={(checked) => handleInputChange('acceptPrivacy', !!checked)}
                      className={submitStatus === 'error' && !formData.acceptPrivacy ? 'border-red-300' : ''}
                    />
                    <Label htmlFor="privacy" className="text-sm leading-relaxed">
                      Acepto la <a href="/privacidad" className="text-primary hover:underline">política de privacidad</a> y 
                      autorizo el tratamiento de mis datos personales para responder a mi consulta.
                    </Label>
                  </div>

                  {/* Botón de Envío */}
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full glow-border text-white hover:text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Enviando mensaje...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Enviar Mensaje
                      </>
                    )}
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    * Campos obligatorios. Responderemos en menos de 24 horas.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-primary/10 to-blue-500/10 border-primary/20">
              <CardContent className="pt-8">
                <h2 className="text-2xl font-bold mb-4">¿Necesitas una respuesta inmediata?</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Para consultas urgentes o proyectos que requieren atención inmediata, 
                  no dudes en llamarnos directamente.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="outline" asChild>
                    <a href="tel:+5491112345678">
                      <Phone className="mr-2 h-4 w-4" />
                      Llamar Ahora
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer">
                      <Phone className="mr-2 h-4 w-4" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}