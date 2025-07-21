import Gallery from '../components/Gallery';

const GalleryPage = () => {
  return (
    <div className="bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-primary">Galería</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Explora nuestra galería de creaciones y déjate inspirar para tu próximo pedido.
          </p>
        </div>
        
        {/* Componente de Galería */}
        <Gallery />
        
        {/* Sección: Encargos Personalizados */}
        <section className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-serif font-bold text-primary">¿Buscas algo especial?</h2>
            <p className="mt-2 text-gray-600">
              Realizamos encargos personalizados para cualquier ocasión. ¡Cuéntanos tu idea!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="/custom-order-placeholder.jpg" // Placeholder
                alt="Encargos personalizados" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Nuestros encargos personalizados incluyen:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Tortas temáticas para cumpleaños</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Mesas dulces para eventos</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Tortas de boda y aniversario</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Galletas decoradas con diseños personalizados</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Opciones sin TACC para todas las categorías</span>
                </li>
              </ul>
              
              <div className="mt-6">
                <a 
                  href="/contacto" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 transition-colors"
                >
                  Solicitar presupuesto
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GalleryPage;