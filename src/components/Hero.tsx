import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 px-4 py-12">
        {/* Imagen de producto */}
        <div>
          <img 
            src="/logos/logo2-sinfondo.png"
            alt="Torta artesanal de Pastelería Belu"             
          />
        </div>

        <div className="flex flex-col justify-center text-center lg:text-left">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block font-serif text-primary">Pastelería Belu</span>
            <span className="block text-accent text-2xl sm:text-3xl mt-3 font-medium">Dulces momentos, recuerdos inolvidables</span>
          </h1>
          <p className="mt-4 text-gray-700 text-lg md:text-xl max-w-xl mx-auto lg:mx-0">
            Tortas, cupcakes y mesas dulces elaboradas artesanalmente con ingredientes seleccionados y mucho amor, para endulzar tus momentos especiales.
          </p>
          <div className="mt-6 flex justify-end lg:justify-end justify-center">
            <Link
              to="/productos"
              className="px-8 py-3 rounded-md text-white bg-primary transition-all duration-300 shadow hover:scale-105 hover:bg-pink-700 hover:text-white focus:outline-none inline-flex items-center gap-2"
            >
              Ver Productos
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H5a1 1 0 110-2h9.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
