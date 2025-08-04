import { Link } from 'react-router-dom';
import { useState } from 'react';
import type { Product } from '../interfaces/Product';

const ProductCard = ({ id, name, description, images, category }: Product) => {
  const [currentImg, setCurrentImg] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  const prevImg = () => setCurrentImg(currentImg === 0 ? images.length - 1 : currentImg - 1);
  const nextImg = () => setCurrentImg(currentImg === images.length - 1 ? 0 : currentImg + 1);

  return (
    <div className="bg-pink-50 rounded-lg shadow-md p-4 flex flex-col h-full relative">
      {/* Overlay para salir del zoom */}
      {zoomed && (
        <div
          className="fixed inset-0 z-40 bg-black/10 cursor-pointer"
          onClick={() => setZoomed(false)}
        />
      )}
      <div className={`relative ${zoomed ? 'z-50' : 'z-10'}`}>
        <img
          src={images[currentImg]}
          alt={name}
          className={`w-full h-56 object-cover rounded-lg mb-4 transition-transform duration-300 cursor-zoom-in ${zoomed ? 'scale-150' : ''}`}
          onClick={() => setZoomed(!zoomed)}
          style={{ cursor: zoomed ? 'zoom-out' : 'zoom-in' }}
        />
        {/* Flechas solo si hay más de una imagen y no está zoomed */}
        {images.length > 1 && !zoomed && (
          <>
            <button
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/70 rounded-full p-1 shadow hover:bg-pink-200 transition"
              onClick={prevImg}
              aria-label="Imagen anterior"
            >
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/70 rounded-full p-1 shadow hover:bg-pink-200 transition"
              onClick={nextImg}
              aria-label="Imagen siguiente"
            >
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>
      <h3 className="text-lg font-bold text-primary mb-2">{name}</h3>
      <p className="text-gray-700 mb-2">{description}</p>
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
};

export default ProductCard;