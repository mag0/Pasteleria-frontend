const AboutUs = () => {
  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-accent font-semibold tracking-wide uppercase">Nuestra Historia</h2>
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
        src="/public/logos/perfil.png"
        alt="Pastelería Belén trabajando en repostería artesanal"
        className="rounded-2xl shadow-lg w-full h-auto object-cover"
      />
    </div>

    {/* Texto a la derecha */}
    <div className="flex flex-col justify-center">
      <h3 className="text-2xl font-serif font-bold text-primary mb-4">
        Nuestra Filosofía
      </h3>
      <div className="prose prose-lg text-gray-600">
        <p>
          Pastelería Belén nació en 2018 como un proyecto personal que rápidamente se convirtió en una pasión. 
          Lo que comenzó como una afición por la repostería en casa, se transformó en un emprendimiento dedicado 
          a crear experiencias dulces para momentos especiales.
        </p>
        <p className="mt-4">
          Cada producto que elaboramos está hecho con ingredientes cuidadosamente seleccionados y con técnicas 
          artesanales que preservan el sabor auténtico y casero que nos caracteriza. Nos especializamos en tortas, 
          budines, galletitas y alfajores, incluyendo opciones sin TACC para quienes tienen necesidades dietéticas específicas.
        </p>
        <p className="mt-4">
          Nuestro compromiso es ofrecer productos de la más alta calidad, elaborados con amor y atención al detalle, 
          para que cada bocado sea una experiencia memorable. Creemos que los momentos dulces de la vida merecen ser 
          celebrados con creaciones que no solo sean deliciosas, sino también hermosas.
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