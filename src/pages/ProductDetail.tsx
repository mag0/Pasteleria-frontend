import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  occasion?: string;
  glutenFree?: boolean;
}

const ProductDetail = () => {
  const { categoria, id } = useParams<{ categoria: string; id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
      <Link to="/productos" className="text-primary hover:underline mb-4 inline-block">← Volver a productos</Link>
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
            <p className="text-lg font-semibold text-gray-900 mb-2">${product.price}</p>
            <p className="text-sm text-gray-600 mb-2">Categoría: {product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
            {product.occasion && (
              <p className="text-sm text-gray-600 mb-2">Ocasión: {product.occasion.charAt(0).toUpperCase() + product.occasion.slice(1)}</p>
            )}
            {product.glutenFree && (
              <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Sin TACC</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
