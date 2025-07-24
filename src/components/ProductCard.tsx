import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  glutenFree?: boolean;
}

const ProductCard = ({ id, name, description, price, image, category, glutenFree = false }: ProductCardProps) => (
  <div className="bg-white rounded-lg shadow-md p-4 flex flex-col h-full">
    <img
      src={image}
      alt={name}
      className="w-full h-48 object-cover rounded-lg mb-4"
      onError={(e) => {
        // Fallback a una imagen por defecto si la imagen no se puede cargar
        const target = e.target as HTMLImageElement;
        target.src = '/products/product-1.svg';
      }}
    />
    <h3 className="text-lg font-bold text-primary mb-2">{name}</h3>
    <p className="text-gray-700 mb-2">{description}</p>
    <p className="text-primary font-semibold mb-2">${price}</p>
    {glutenFree && (
      <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mb-2">Sin TACC</span>
    )}
    <div className="mt-auto flex justify-end">
      <Link
        to={`/productos/${category}/${id}`}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90"
      >
        Ver detalle
      </Link>
    </div>
  </div>
);

export default ProductCard;