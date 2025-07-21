interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  glutenFree?: boolean;
}

const ProductCard = ({ name, description, price, image, category, glutenFree = false }: ProductCardProps) => {
  return (
    <div className="group relative bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="w-full h-64 bg-gray-200 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            // Fallback a una imagen por defecto si la imagen no se puede cargar
            const target = e.target as HTMLImageElement;
            target.src = '/products/product-1.svg';
          }}
        />
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-serif font-semibold text-primary">{name}</h3>
          <span className="bg-secondary/20 text-primary px-2 py-1 rounded-full text-xs font-medium">
            ${price.toFixed(2)}
          </span>
        </div>
        
        <div className="mt-2 flex items-center space-x-2">
          <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs">
            {category}
          </span>
          
          {glutenFree && (
            <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs">
              Sin TACC
            </span>
          )}
        </div>
        
        <p className="mt-2 text-sm text-gray-600 line-clamp-3">{description}</p>
        
        <div className="mt-4 flex justify-between items-center">
          <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            Ver detalles
          </button>
          
          <button className="bg-primary text-white px-3 py-1 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;