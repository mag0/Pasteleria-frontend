import { useState } from 'react';
import type { Product } from '../interfaces/Product';

const ProductCard = ({ product }: { product: Product }) => {
  const [zoomed, setZoomed] = useState(false);

  return (
    <>
      <div className="bg-[#FDF6F0] border border-[#C9A227]/30 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col group hover:-translate-y-1">

        {/* Imagen */}
        <div className="h-80 overflow-hidden relative">
          <img
            src={product.imageUrl}
            alt={product.name}
            onClick={() => setZoomed(true)}
            className="w-full h-full object-cover cursor-zoom-in group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        <div className="p-6 flex flex-col flex-1 bg-gradient-to-b from-[#FDF6F0] to-[#FAEEE4]">

          <h3 className="text-2xl font-serif font-semibold text-[#9E3A66] tracking-wide leading-snug mb-3">
            {product.name}
          </h3>

          <div className="w-12 h-[1px] bg-[#C9A227]/50 mb-4" />

          <p className="text-[#6B5B63] leading-relaxed line-clamp-4 mb-3">
            {product.description}
          </p>

          {/* <div className="w-12 h-[1px] bg-[#C9A227]/50 mb-4" />

          <span className="w-full flex justify-end text-xl  text-[#9E3A66] leading-none mt-auto">
            ${price}
          </span> */}
        </div>
      </div>

      {/* LIGHTBOX */}
      {zoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setZoomed(false)}
        >
          <img
            src={product.imageUrl}
            alt={product.name}
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </>
  );
};

export default ProductCard;