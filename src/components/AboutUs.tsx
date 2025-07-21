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
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative">
              <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden shadow-lg">
                <img
                  className="object-cover w-full h-full"
                  src="/about-us-placeholder.jpg"
                  alt="Pastelería Belén - Elaboración artesanal"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <img
                  className="h-24 w-24 object-contain"
                  src="/logo-placeholder.svg"
                  alt="Logo Pastelería Belén"
                />
              </div>
            </div>

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

              <div className="mt-8">
                <h4 className="text-xl font-serif font-semibold text-primary mb-3">
                  Valores que nos guían
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Calidad en cada ingrediente</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Elaboración artesanal y cuidadosa</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Atención personalizada</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Innovación constante en sabores y diseños</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;