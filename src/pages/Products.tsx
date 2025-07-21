import { useState } from 'react';
import ProductCard from '../components/ProductCard';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  occasion?: string;
  glutenFree: boolean;
}

const Products = () => {
  // Datos de ejemplo para los productos
  const productsData: Product[] = [
    {
      id: '1',
      name: 'Torta de Chocolate',
      description: 'Deliciosa torta de chocolate con ganache y frutos rojos. Perfecta para celebraciones especiales.',
      price: 3500,
      image: '/products/product-1.svg', // Imagen SVG creada
      category: 'tortas',
      occasion: 'cumpleaños',
      glutenFree: false
    },
    {
      id: '2',
      name: 'Torta Red Velvet',
      description: 'Exquisita torta Red Velvet con frosting de queso crema. Un clásico renovado con nuestro toque especial.',
      price: 3800,
      image: '/products/product-1.svg', // Reutilizamos la misma imagen SVG como ejemplo
      category: 'tortas',
      occasion: 'aniversario',
      glutenFree: false
    },
    {
      id: '3',
      name: 'Budín de Limón',
      description: 'Budín húmedo de limón con glaseado. Perfecto para acompañar el té o café.',
      price: 1200,
      image: '/products/product-1.svg', // Reutilizamos la misma imagen SVG como ejemplo
      category: 'budines',
      glutenFree: false
    },
    {
      id: '4',
      name: 'Budín de Banana',
      description: 'Budín casero de banana con nueces. Una opción deliciosa para el desayuno o la merienda.',
      price: 1200,
      image: '/products/product-1.svg', // Reutilizamos la misma imagen SVG como ejemplo
      category: 'budines',
      glutenFree: false
    },
    {
      id: '5',
      name: 'Alfajores de Maicena',
      description: 'Tradicionales alfajores de maicena con dulce de leche y coco rallado. Delicados y deliciosos.',
      price: 1500,
      image: '/products/product-1.svg', // Reutilizamos la misma imagen SVG como ejemplo
      category: 'alfajores',
      glutenFree: false
    },
    {
      id: '6',
      name: 'Alfajores de Chocolate',
      description: 'Alfajores de chocolate con relleno de dulce de leche. Una combinación irresistible.',
      price: 1600,
      image: '/products/product-6.jpg', // Placeholder
      category: 'alfajores',
      glutenFree: false
    },
    {
      id: '7',
      name: 'Galletitas Decoradas',
      description: 'Galletitas de manteca decoradas artesanalmente. Ideales para eventos y ocasiones especiales.',
      price: 1800,
      image: '/products/product-7.jpg', // Placeholder
      category: 'galletitas',
      occasion: 'eventos',
      glutenFree: false
    },
    {
      id: '8',
      name: 'Galletitas de Chocolate',
      description: 'Galletitas con chips de chocolate. Crujientes por fuera y suaves por dentro.',
      price: 1400,
      image: '/products/product-8.jpg', // Placeholder
      category: 'galletitas',
      glutenFree: false
    },
    {
      id: '9',
      name: 'Torta de Vainilla Sin TACC',
      description: 'Torta de vainilla elaborada con ingredientes sin gluten. Sabor tradicional para todos.',
      price: 3800,
      image: '/products/product-9.jpg', // Placeholder
      category: 'tortas',
      occasion: 'cumpleaños',
      glutenFree: true
    },
    {
      id: '10',
      name: 'Alfajores Sin TACC',
      description: 'Alfajores elaborados con harina sin gluten y rellenos de dulce de leche. Deliciosos y seguros.',
      price: 1700,
      image: '/products/product-10.jpg', // Placeholder
      category: 'alfajores',
      glutenFree: true
    },
    {
      id: '11',
      name: 'Budín de Naranja Sin TACC',
      description: 'Budín de naranja elaborado con ingredientes sin gluten. Húmedo y aromático.',
      price: 1400,
      image: '/products/product-11.jpg', // Placeholder
      category: 'budines',
      glutenFree: true
    },
    {
      id: '12',
      name: 'Galletitas de Vainilla Sin TACC',
      description: 'Galletitas de vainilla elaboradas con ingredientes sin gluten. Perfectas para cualquier momento.',
      price: 1600,
      image: '/products/product-12.jpg', // Placeholder
      category: 'galletitas',
      glutenFree: true
    },
  ];

  // Categorías y ocasiones para filtrar
  const categories = ['todas', 'tortas', 'budines', 'alfajores', 'galletitas'];
  const occasions = ['todas', 'cumpleaños', 'aniversario', 'eventos'];
  
  // Estados para los filtros
  const [activeCategory, setActiveCategory] = useState('todas');
  const [activeOccasion, setActiveOccasion] = useState('todas');
  const [showGlutenFree, setShowGlutenFree] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrar productos según los criterios seleccionados
  const filteredProducts = productsData.filter(product => {
    // Filtro por categoría
    const categoryMatch = activeCategory === 'todas' || product.category === activeCategory;
    
    // Filtro por ocasión
    const occasionMatch = activeOccasion === 'todas' || product.occasion === activeOccasion;
    
    // Filtro por sin TACC
    const glutenFreeMatch = !showGlutenFree || product.glutenFree;
    
    // Filtro por término de búsqueda
    const searchMatch = searchTerm === '' || 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return categoryMatch && occasionMatch && glutenFreeMatch && searchMatch;
  });

  return (
    <div className="bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-primary">Nuestros Productos</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Descubre nuestra variedad de productos artesanales elaborados con los mejores ingredientes y mucho amor.
          </p>
        </div>
        
        {/* Filtros */}
        <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Búsqueda */}
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Buscar
              </label>
              <input
                type="text"
                id="search"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            
            {/* Filtro por categoría */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Categoría
              </label>
              <select
                id="category"
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Filtro por ocasión */}
            <div>
              <label htmlFor="occasion" className="block text-sm font-medium text-gray-700 mb-1">
                Ocasión
              </label>
              <select
                id="occasion"
                value={activeOccasion}
                onChange={(e) => setActiveOccasion(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {occasions.map(occasion => (
                  <option key={occasion} value={occasion}>
                    {occasion.charAt(0).toUpperCase() + occasion.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Filtro Sin TACC */}
          <div className="mt-4 flex items-center">
            <input
              type="checkbox"
              id="glutenFree"
              checked={showGlutenFree}
              onChange={() => setShowGlutenFree(!showGlutenFree)}
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            />
            <label htmlFor="glutenFree" className="ml-2 block text-sm text-gray-700">
              Mostrar solo productos Sin TACC
            </label>
          </div>
        </div>
        
        {/* Lista de productos */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                image={product.image}
                category={product.category}
                glutenFree={product.glutenFree}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">No se encontraron productos</h3>
            <p className="mt-1 text-gray-500">Prueba con otros filtros o términos de búsqueda.</p>
            <div className="mt-6">
              <button 
                onClick={() => {
                  setActiveCategory('todas');
                  setActiveOccasion('todas');
                  setShowGlutenFree(false);
                  setSearchTerm('');
                }}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90"
              >
                Restablecer filtros
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;