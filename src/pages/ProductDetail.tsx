import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { Product } from '../interfaces/Product';

const ProductDetail = () => {
  const { categoria, id } = useParams<{ categoria: string; id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/json/products.json')
      .then((res) => {
        if (!res.ok) throw new Error('No se pudo cargar el archivo de productos');
        return res.json();
      })
      .then((data: Product[]) => {
        const found = data.find(
          (p) => p.id === id && p.category === categoria
        );
        setProduct(found || null);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [categoria, id]);

  if (loading) return <div className="text-center py-12">Cargando producto...</div>;
  if (error) return <div className="text-center py-12 text-red-600">{error}</div>;
  if (!product) return <div className="text-center py-12">Producto no encontrado</div>;

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-4 px-4 py-2 bg-pink-100 text-primary font-semibold rounded-full shadow hover:bg-pink-200 border border-pink-300 transition"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Volver
      </button>
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-8">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full md:w-1/2 h-80 object-cover rounded-lg"
        />
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-primary mb-2">{product.name}</h1>
            <p className="text-gray-700 mb-4">{product.description}</p>
            {product.ingredients && product.ingredients.length > 0 && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-primary mb-2">Ingredientes</h3>
                <ul className="list-disc list-inside text-gray-700">
                  {product.ingredients.map((ing, idx) => (
                    <li key={idx}>{ing}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
