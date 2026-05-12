import { useState } from 'react';
import type { Product } from '../interfaces/Product';

const ProductCard = ({ name, price, imageUrl, description }: Product) => {
  const [zoomed, setZoomed] = useState(false);

  return (
    <>
      <div className="bg-[#FDF6F0] border border-[#C9A227]/30 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col group hover:-translate-y-1">

        {/* Imagen */}
        <div className="h-80 overflow-hidden relative">
          <img
            src={imageUrl}
            alt={name}
            onClick={() => setZoomed(true)}
            className="w-full h-full object-cover cursor-zoom-in group-hover:scale-105 transition-transform duration-700"
          />

          {/* Badge precio */}
          <div className="absolute bottom-4 right-4 bg-[#FDF6F0]/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md border border-[#C9A227]/20">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A227] block mb-1">
              Precio
            </span>

            <span className="text-2xl font-semibold text-[#9E3A66] leading-none">
              ${price}
            </span>
          </div>
        </div>

        {/* Contenido */}
        <div className="p-6 flex flex-col flex-1 bg-gradient-to-b from-[#FDF6F0] to-[#FAEEE4]">

          {/* Nombre */}
          <h3 className="text-xl font-serif text-[#9E3A66] tracking-wide leading-snug mb-3">
            {name}
          </h3>

          {/* Línea decorativa */}
          <div className="w-12 h-[1px] bg-[#C9A227]/50 mb-4" />

          {/* Descripción */}
          <p className="text-[#6B5B63] text-sm leading-relaxed line-clamp-4">
            {description}
          </p>

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