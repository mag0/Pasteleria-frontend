import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import { Link } from 'react-router-dom';
import Testimonials from '../components/Testimonials';
import type { FeaturedProduct } from '../interfaces/FeaturedProduct';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState<FeaturedProduct[]>([]);

  useEffect(() => {
    fetch('/featuredProducts.json')
      .then(res => res.json())
      .then(data => setFeaturedProducts(data));
  }, []);

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
      <Testimonials />
      
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