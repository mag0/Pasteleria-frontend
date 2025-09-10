import { Link } from 'react-router-dom';
import { useState } from 'react';
import type { Product } from '../interfaces/Product';

const ProductCard = ({ _id, name, imageUrl, category }: Product) => {
  const [zoomed, setZoomed] = useState(false);

  return (
    <>
      <div className="bg-pink-50 rounded-lg shadow-md p-4 flex flex-col h-full relative">
        <div className="w-full aspect-[4/3] overflow-hidden rounded-lg mb-4">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover cursor-zoom-in"
            onClick={() => setZoomed(true)}
          />
        </div>
        <h3 className="text-xl font-bold text-primary mb-4">{name}</h3>
        {/* <p className="text-gray-700 mb-2">{description}</p> */}
        <div className="mt-auto flex justify-end">
          <Link
            to={`/productos/${category}/${_id}`}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90"
          >
            Ver detalle
          </Link>
        </div>
      </div>

      {/* Lightbox / Modal */}
      {zoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setZoomed(false)}
        >
          <img
            src={imageUrl}
            alt={name}
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </>
  );
};

export default ProductCard;
