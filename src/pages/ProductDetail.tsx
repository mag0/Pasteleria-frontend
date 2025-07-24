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
    fetch('/products.json')
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
        className="text-primary hover:underline mb-4 inline-block bg-transparent border-none cursor-pointer focus:outline-none focus:ring-0"
      >
        ← Volver
      </button>
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 h-80 object-cover rounded-lg"
        />
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-primary mb-2">{product.name}</h1>
            <p className="text-gray-700 mb-4">{product.description}</p>
            
            {product.occasion && (
              <p className="text-sm text-gray-600 mb-2">Ocasión: {product.occasion.charAt(0).toUpperCase() + product.occasion.slice(1)}</p>
            )}
            {product.glutenFree && (
              <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Sin TACC</span>
            )}
          </div>
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
  );
};

export default ProductDetail;
