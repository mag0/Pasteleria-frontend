import { Link } from 'react-router-dom';
import { useState } from 'react';
import type { Product } from '../interfaces/Product';

const ProductCard = ({ _id, name, imageUrl, category }: Product) => {
  const [zoomed, setZoomed] = useState(false);

  return (
    <>
      <div className="bg-[#FDF6F0] border border-[#C9A227]/40 rounded-md shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col">

        {/* Imagen */}
        <div className="h-80 overflow-hidden">
          <img
            src={imageUrl}
            alt={name}
            onClick={() => setZoomed(true)}
            className="w-full h-full object-cover cursor-zoom-in hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Contenido */}
        <div className="p-6 font-serif flex flex-col flex-1">

          <h3 className="text-lg text-[#9E3A66] mb-3 tracking-wide">
            {name}
          </h3>

          {/* CTA abajo */}
          <div className="mt-auto pt-4 border-t border-[#C9A227]/30 flex justify-end">
            <Link
              to={`/productos/${category}/${_id}`}
              className="px-5 py-2 bg-[#9E3A66] text-white rounded-md hover:bg-[#7d2d52] transition"
            >
              Ver detalle
            </Link>
          </div>

        </div>
      </div>

      {/* LIGHTBOX */}
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