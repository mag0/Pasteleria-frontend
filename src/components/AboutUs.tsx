const AboutUs = () => {
  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-accent font-semibold tracking-wide uppercase">Mi Historia</h2>
          <p className="mt-2 text-3xl leading-8 font-serif font-bold text-primary sm:text-4xl">
            Sobre Pastelería Belén
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            Descubre la pasión y dedicación detrás de cada una de nuestras creaciones artesanales.
          </p>
        </div>

        <div className="mt-10">
  <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 items-center">
    
    {/* Imagen a la izquierda */}
    <div className="order-1 lg:order-none">
      <img 
        src="/logos/perfil4.jpg"
        alt="Pastelería Belén trabajando en repostería artesanal"
        className="rounded-2xl shadow-lg w-full h-auto object-cover max-h-80"
      />
    </div>

    {/* Texto a la derecha */}
    <div className="flex flex-col justify-center">
      <h3 className="text-2xl font-serif font-bold text-primary mb-4">
        ¿Quien soy?
      </h3>
      <div className="prose prose-lg text-gray-600">
        <p>
          Hace un par de años descubrí el maravilloso mundo de la pastelería y, desde entonces, no he parado de batir. 
          Adoro cocinar tortas, masas y galletas. Me encanta diseñar formas, nuevas decoraciones y probar rellenos. 
        </p>
        <p className="mt-4">
          Es un placer plasmar en mis productos los deseos y preferencias de mis clientes, y que mis preparaciones 
          los dejen satisfechos y felices. Cocino para deleitarme y para que quienes compran mis productos también 
          lo hagan.
        </p>
        <p className="mt-4">
          Elegí lo que más te guste y descubrí cómo estas delicias pueden alegrar tu día. ¡Contá conmigo 
          para endulzar tus celebraciones!
        </p>
      </div>

    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default AboutUs;