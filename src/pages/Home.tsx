import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import { Link } from 'react-router-dom';

interface FeaturedProduct {
  id: string;
  name: string;
  image: string;
  category: string;
}

const Home = () => {
  // Productos destacados (ejemplo)
  const featuredProducts: FeaturedProduct[] = [
    {
      id: '1',
      name: 'Torta de Chocolate',
      image: '/featured/torta_estilo_caja_de_bombones.jpg', // Imagen SVG creada
      category: 'tortas'
    },
    {
      id: '2',
      name: 'Alfajores Marplatenses',
      image: '/featured/alfajores_marplatenses.jpg', // Reutilizamos la misma imagen SVG como ejemplo
      category: 'alfajores'
    },
    {
      id: '3',
      name: 'Pastafrola',
      image: '/featured/pastafrola_sin_coco_rayado.jpg', // Reutilizamos la misma imagen SVG como ejemplo
      category: 'budines'
    },
    {
      id: '4',
      name: 'Cookies',
      image: '/featured/cookies.jpg', // Reutilizamos la misma imagen SVG como ejemplo
      category: 'galletitas'
    },
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <Hero />
      
      {/* Productos Destacados */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary">Nuestros Productos Destacados</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Descubre algunas de nuestras creaciones más populares, elaboradas con ingredientes seleccionados y mucho amor.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Link 
                key={product.id} 
                to={`/productos/${product.category}/${product.id}`}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg shadow-md">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white text-lg font-medium">{product.name}</h3>
                      <p className="text-white/80 text-sm mt-1">{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Link 
              to="/productos"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 transition-colors"
            >
              Ver todos los productos
              <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Sobre Nosotros */}
      <AboutUs />
      
      {/* Testimonios */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary">Lo que dicen nuestros clientes</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Nos enorgullece la satisfacción de quienes han probado nuestros productos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonio 1 */}
            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-primary font-bold text-xl">
                  M
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">María L.</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic">"La torta de cumpleaños que encargué superó todas mis expectativas. No solo era hermosa, sino que estaba deliciosa. Todos mis invitados quedaron encantados."</p>
            </div>
            
            {/* Testimonio 2 */}
            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-primary font-bold text-xl">
                  J
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Juan P.</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic">"Los alfajores son simplemente increíbles. Probé los de dulce de leche y los de chocolate, y ambos son exquisitos. Definitivamente volveré a comprar."</p>
            </div>
            
            {/* Testimonio 3 */}
            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-primary font-bold text-xl">
                  C
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Carolina M.</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic">"Como celíaca, es difícil encontrar opciones dulces realmente buenas. Los productos sin TACC de Pastelería Belén son los mejores que he probado. ¡Gracias por pensar en nosotros!"</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA - Contacto */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-white">¿Listo para endulzar tu día?</h2>
          <p className="mt-4 text-lg text-white/90 max-w-3xl mx-auto">
            Haz tu pedido ahora y disfruta de nuestras deliciosas creaciones artesanales.
          </p>
          <div className="mt-8">
            <Link 
              to="/contacto"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-primary bg-white hover:bg-gray-100 transition-colors"
            >
              Contactar ahora
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;