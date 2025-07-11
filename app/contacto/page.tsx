export default function ContactoPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Contacto</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Información de Contacto</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-muted-foreground">info@skysolutions.com.ar</p>
              </div>
              <div>
                <h3 className="font-semibold">Teléfono</h3>
                <p className="text-muted-foreground">+54 11 1234-5678</p>
              </div>
              <div>
                <h3 className="font-semibold">Ubicación</h3>
                <p className="text-muted-foreground">Buenos Aires, Argentina</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Formulario de Contacto</h2>
            <p className="text-muted-foreground">
              Formulario de contacto en construcción. Por favor, contáctanos directamente por email o teléfono.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}