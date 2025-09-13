import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';
import { categories } from '../../data/categories';
import ProductCard from '../../components/ProductCard';
import { getProducts } from '../../api/PasteleriaApi';
import type { Product } from '../../interfaces/Product';
import PinkSpinner from '../../components/PinkSpinner';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('todas');
  const [searchTerm, setSearchTerm] = useState('');

  const {
    data: productsData = [],
    isLoading: loading,
    isError,
    error,
  } = useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: getProducts
  });


  useEffect(() => {
    if (isError && error) toast.error(error.message);
  }, [isError, error]);

  const filteredProducts = productsData.filter((product: Product) => {
    const categoryMatch =
      activeCategory === 'todas' || product.category === activeCategory;
    const searchMatch =
      searchTerm === '' ||
      product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-primary">
            Nuestros Productos
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Descubre nuestra variedad de productos artesanales elaborados con
            los mejores ingredientes y mucho amor.
          </p>
        </div>

        {/* Filtros */}
        <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Búsqueda */}
            <div>
              <label
                htmlFor="search"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Buscar
              </label>
              <input
                type="text"
                id="search"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-white w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Filtro por categoría */}
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Categoría
              </label>
              <select
                id="category"
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="bg-white w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Lista de productos */}
        {loading ? (
          <PinkSpinner message={'Preparando dulzura...'} />
        ) : isError ? (
          <div className="text-center py-12 text-red-600">
            No se pudieron cargar los productos
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product: Product) => (
              <div key={product._id} className="flex justify-center">
                <ProductCard {...product} />
              </div>
            ))}
          </div>

        ) : (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-12 w-12 text-red-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">
              No se encontraron productos
            </h3>
            <p className="mt-1 text-gray-500">
              Prueba con otros filtros o términos de búsqueda.
            </p>
            <div className="mt-6">
              <button
                onClick={() => {
                  setActiveCategory('todas');
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