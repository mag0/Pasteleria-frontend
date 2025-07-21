import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="font-serif text-2xl font-bold text-primary">
                {/* Logo de la pastelería */}
                <img 
                  src="/src/assets/logos/pasteleria-logo.svg" 
                  alt="Pastelería Belén" 
                  className="h-12 w-auto"
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/" className="border-transparent text-gray-700 hover:text-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Inicio
              </Link>
              <Link to="/productos" className="border-transparent text-gray-700 hover:text-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Productos
              </Link>
              <Link to="/sobre-nosotros" className="border-transparent text-gray-700 hover:text-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Sobre Nosotros
              </Link>
              <Link to="/galeria" className="border-transparent text-gray-700 hover:text-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Galería
              </Link>
              <Link to="/contacto" className="border-transparent text-gray-700 hover:text-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Contacto
              </Link>
              <Link to="/ejemplos-imagenes" className="border-transparent text-gray-700 hover:text-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Ejemplos Imágenes
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary bg-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              {/* Icon for menu */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon for closing menu */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link to="/" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-primary hover:text-primary">
            Inicio
          </Link>
          <Link to="/productos" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-primary hover:text-primary">
            Productos
          </Link>
          <Link to="/nosotros" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-primary hover:text-primary">
            Sobre Nosotros
          </Link>
          <Link to="/galeria" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-primary hover:text-primary">
            Galería
          </Link>
          <Link to="/contacto" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-primary hover:text-primary">
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;