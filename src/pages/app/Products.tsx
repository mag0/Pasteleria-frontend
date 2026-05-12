import { useState, useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';
import { categories } from '../../data/categories';
import ProductCard from '../../components/ProductCard';
import { getProducts } from '../../api/PasteleriaApi';
import type { Product } from '../../interfaces/Product';
import PinkSpinner from '../../components/PinkSpinner';

const ITEMS_PER_PAGE = 9;

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('todas');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const sectionRef = useRef<HTMLDivElement>(null);

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

  // 🔎 FILTRADO
  const filteredProducts = productsData.filter((product: Product) => {
    const categoryMatch =
      activeCategory === 'todas' || product.category === activeCategory;

    const searchMatch =
      searchTerm === '' ||
      product.name.toLowerCase().includes(searchTerm.toLowerCase());

    return categoryMatch && searchMatch;
  });

  // 📄 PAGINACIÓN
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const changePage = (page: number) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);

    setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  // 🔁 reset page al filtrar
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchTerm]);

  return (
    <div className="relative min-h-screen" ref={sectionRef}>

      {/* FONDO */}
      <div className="absolute inset-0 bg-[url('/images/bg.jpg')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-[#9E3A66]/70 backdrop-blur-[2px]"></div>

      <div className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* HEADER */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-serif text-white mb-4">
              Nuestros Productos
            </h1>
          </div>

          {/* FILTROS */}
          <div className="flex flex-col items-center gap-6 mb-16">

            <div className="w-full max-w-md">
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 rounded-full bg-[#FDF6F0] text-[#4A4A4A] border border-[#C9A227]/30 shadow-md focus:outline-none focus:ring-2 focus:ring-[#C9A227]/50"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 text-sm font-serif tracking-wide rounded-full border transition-all duration-300
                  ${activeCategory === cat
                      ? "bg-[#9E3A66] text-white border-[#C9A227] shadow-lg scale-105"
                      : "bg-[#FDF6F0] text-[#9E3A66] border-[#C9A227]/40 hover:bg-[#f4d6d1]"
                    }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>

          </div>

          {/* PRODUCTOS */}
          {loading ? (
            <PinkSpinner message={'Preparando dulzura...'} />
          ) : isError ? (
            <div className="text-center py-12 text-red-300">
              No se pudieron cargar los productos
            </div>
          ) : paginatedProducts.length > 0 ? (

            <>
              <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {paginatedProducts.map((product: Product) => (
                  <ProductCard key={product._id} {...product} />
                ))}
              </div>

              {/* 🔥 PAGINACIÓN */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-8 mt-16 font-serif">

                  <button
                    onClick={() => changePage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-6 py-2 border border-[#C9A227]/50 bg-[#FDF6F0] text-[#9E3A66] hover:bg-[#F8EDEB] disabled:opacity-40 transition"
                  >
                    ← Anterior
                  </button>

                  <div className="text-white tracking-wide">
                    Página {currentPage} de {totalPages}
                  </div>

                  <button
                    onClick={() => changePage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-6 py-2 border border-[#C9A227]/50 bg-[#FDF6F0] text-[#9E3A66] hover:bg-[#F8EDEB] disabled:opacity-40 transition"
                  >
                    Siguiente →
                  </button>

                </div>
              )}
            </>

          ) : (
            <div className="text-center py-12 text-white">
              No se encontraron productos
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Products;