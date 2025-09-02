import { Link } from 'react-router-dom';
import { useState } from 'react';
import type { Product } from '../interfaces/Product';

const ProductCard = ({ _id, name, description, image, category }: Product) => {
  const [zoomed, setZoomed] = useState(false);

  return (
    <div className="bg-pink-50 rounded-lg shadow-md p-4 flex flex-col h-full relative">
      {/* Overlay para salir del zoom */}
      {zoomed && (
        <div
          className="fixed inset-0 z-40 bg-black/10 cursor-pointer"
          onClick={() => setZoomed(false)}
        />
      )}
      <div className="w-full aspect-[4/3] overflow-hidden rounded-lg mb-4">
        <img
          src={`${import.meta.env.VITE_API_URL}${image}`}
          alt={name}
          className={`w-full h-full object-cover transition-transform duration-300 cursor-zoom-in ${zoomed ? 'scale-150' : ''}`}
          onClick={() => setZoomed(!zoomed)}
          style={{ cursor: zoomed ? 'zoom-out' : 'zoom-in' }}
        />
      </div>
      <h3 className="text-lg font-bold text-primary mb-2">{name}</h3>
      <p className="text-gray-700 mb-2">{description}</p>
      <div className="mt-auto flex justify-end">
        <Link
          to={`/productos/${category}/${_id}`}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90"
        >
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;