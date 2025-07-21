import { useState } from 'react';

// Importación de imágenes desde assets (método de importación)
// Nota: En un proyecto real, estas imágenes deberían existir en las rutas especificadas
import pastelLogo from '../assets/logos/pasteleria-logo.svg';

const ImageExample = () => {
  // Estado para controlar si se muestra la imagen de assets o la pública
  const [showAssetsImage, setShowAssetsImage] = useState(true);
  
  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-8">
          <h2 className="text-base text-accent font-semibold tracking-wide uppercase">Ejemplos de Imágenes</h2>
          <p className="mt-2 text-3xl leading-8 font-serif font-bold text-primary sm:text-4xl">
            Cómo usar imágenes en React
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            Diferentes formas de incluir imágenes en tus componentes React
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Ejemplo 1: Imagen importada desde assets */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-primary mb-4">1. Imagen importada desde assets</h3>
              <div className="flex justify-center mb-4">
                <img 
                  src={pastelLogo} 
                  alt="Logo de Pastelería Belén" 
                  className="h-32 w-auto"
                />
              </div>
              <p className="text-gray-600 text-sm">
                <code className="bg-gray-100 px-1 py-0.5 rounded">import pastelLogo from '../assets/logos/pasteleria-logo.svg';</code>
              </p>
              <p className="text-gray-600 text-sm mt-2">
                Las imágenes importadas se incluyen en el bundle y se optimizan durante el build.
              </p>
            </div>

            {/* Ejemplo 2: Imagen desde carpeta public */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-primary mb-4">2. Imagen desde carpeta public</h3>
              <div className="flex justify-center mb-4">
                <img 
                  src="/products/product-1.svg" 
                  alt="Torta de Chocolate" 
                  className="h-32 w-auto"
                  onError={(e) => {
                    // Fallback si la imagen no se puede cargar
                    const target = e.target as HTMLImageElement;
                    target.src = '/public/vite.svg';
                  }}
                />
              </div>
              <p className="text-gray-600 text-sm">
                <code className="bg-gray-100 px-1 py-0.5 rounded">src="/products/product-1.svg"</code>
              </p>
              <p className="text-gray-600 text-sm mt-2">
                Las imágenes en la carpeta public se referencian directamente por su ruta y no se procesan durante el build.
              </p>
            </div>
          </div>

          {/* Ejemplo 3: Alternancia entre imágenes */}
          <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-primary mb-4">3. Alternancia entre imágenes con estado</h3>
            <div className="flex justify-center mb-4">
              {showAssetsImage ? (
                <img 
                  src={pastelLogo} 
                  alt="Logo desde assets" 
                  className="h-32 w-auto"
                />
              ) : (
                <img 
                  src="/gallery/torta-1.svg" 
                  alt="Torta desde public" 
                  className="h-32 w-auto"
                />
              )}
            </div>
            <div className="flex justify-center mt-4">
              <button 
                onClick={() => setShowAssetsImage(!showAssetsImage)}
                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                {showAssetsImage ? 'Mostrar imagen de public' : 'Mostrar imagen de assets'}
              </button>
            </div>
            <p className="text-gray-600 text-sm text-center mt-4">
              Puedes alternar entre diferentes imágenes usando el estado de React.
            </p>
          </div>

          {/* Ejemplo 4: Imagen con lazy loading */}
          <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-primary mb-4">4. Imagen con lazy loading</h3>
            <div className="flex justify-center mb-4">
              <img 
                src="/featured/featured-1.svg" 
                alt="Producto destacado" 
                className="h-32 w-auto"
                loading="lazy" // Atributo para lazy loading
              />
            </div>
            <p className="text-gray-600 text-sm text-center">
              <code className="bg-gray-100 px-1 py-0.5 rounded">loading="lazy"</code>
            </p>
            <p className="text-gray-600 text-sm text-center mt-2">
              El atributo loading="lazy" hace que la imagen se cargue solo cuando está cerca de entrar en el viewport.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageExample;