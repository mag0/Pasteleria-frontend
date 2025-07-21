// Datos de imágenes para la galería de Pastelería Belén

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: 'tortas' | 'cupcakes' | 'galletas' | 'tartas' | 'eventos';
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/gallery/torta-1.jpg', // Placeholder
    alt: 'Torta de chocolate con frutos rojos',
    category: 'tortas'
  },
  {
    id: 2,
    src: '/gallery/torta-2.jpg', // Placeholder
    alt: 'Torta de vainilla con decoración floral',
    category: 'tortas'
  },
  {
    id: 3,
    src: '/gallery/torta-3.jpg', // Placeholder
    alt: 'Torta de bodas de tres pisos',
    category: 'tortas'
  },
  {
    id: 4,
    src: '/gallery/cupcake-1.jpg', // Placeholder
    alt: 'Cupcakes de chocolate con frosting de vainilla',
    category: 'cupcakes'
  },
  {
    id: 5,
    src: '/gallery/cupcake-2.jpg', // Placeholder
    alt: 'Cupcakes decorados para cumpleaños infantil',
    category: 'cupcakes'
  },
  {
    id: 6,
    src: '/gallery/galleta-1.jpg', // Placeholder
    alt: 'Galletas decoradas con glasa real',
    category: 'galletas'
  },
  {
    id: 7,
    src: '/gallery/galleta-2.jpg', // Placeholder
    alt: 'Galletas temáticas para eventos',
    category: 'galletas'
  },
  {
    id: 8,
    src: '/gallery/tarta-1.jpg', // Placeholder
    alt: 'Tarta de frutas de estación',
    category: 'tartas'
  },
  {
    id: 9,
    src: '/gallery/tarta-2.jpg', // Placeholder
    alt: 'Lemon pie con merengue italiano',
    category: 'tartas'
  },
  {
    id: 10,
    src: '/gallery/evento-1.jpg', // Placeholder
    alt: 'Mesa dulce para boda',
    category: 'eventos'
  },
  {
    id: 11,
    src: '/gallery/evento-2.jpg', // Placeholder
    alt: 'Mesa dulce para cumpleaños de 15',
    category: 'eventos'
  },
  {
    id: 12,
    src: '/gallery/torta-4.jpg', // Placeholder
    alt: 'Torta temática para cumpleaños infantil',
    category: 'tortas'
  },
  {
    id: 13,
    src: '/gallery/cupcake-3.jpg', // Placeholder
    alt: 'Cupcakes con decoración floral',
    category: 'cupcakes'
  },
  {
    id: 14,
    src: '/gallery/galleta-3.jpg', // Placeholder
    alt: 'Galletas personalizadas con mensaje',
    category: 'galletas'
  },
  {
    id: 15,
    src: '/gallery/evento-3.jpg', // Placeholder
    alt: 'Mesa dulce para evento corporativo',
    category: 'eventos'
  },
];

export default galleryImages;