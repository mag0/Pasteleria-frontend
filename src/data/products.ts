// Datos de productos para Pastelería Belén

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'tortas' | 'cupcakes' | 'galletas' | 'tartas' | 'postres';
  occasion?: 'cumpleaños' | 'bodas' | 'eventos' | 'diario';
  glutenFree?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Torta de Chocolate',
    description: 'Deliciosa torta de chocolate con ganache y frutos rojos.',
    price: 3500,
    image: '/products/torta-chocolate.jpg', // Placeholder
    category: 'tortas',
    occasion: 'cumpleaños',
    glutenFree: false
  },
  {
    id: 2,
    name: 'Cheesecake de Frutos Rojos',
    description: 'Suave cheesecake con cobertura de frutos rojos frescos.',
    price: 3200,
    image: '/products/cheesecake.jpg', // Placeholder
    category: 'tortas',
    occasion: 'diario',
    glutenFree: false
  },
  {
    id: 3,
    name: 'Cupcakes de Vainilla',
    description: 'Pack de 6 cupcakes de vainilla con frosting de colores.',
    price: 1800,
    image: '/products/cupcakes-vainilla.jpg', // Placeholder
    category: 'cupcakes',
    occasion: 'cumpleaños',
    glutenFree: false
  },
  {
    id: 4,
    name: 'Galletas Decoradas',
    description: 'Pack de 12 galletas decoradas con glasa real.',
    price: 1500,
    image: '/products/galletas-decoradas.jpg', // Placeholder
    category: 'galletas',
    occasion: 'eventos',
    glutenFree: false
  },
  {
    id: 5,
    name: 'Torta de Bodas',
    description: 'Elegante torta de tres pisos para bodas, con decoración personalizada.',
    price: 12000,
    image: '/products/torta-bodas.jpg', // Placeholder
    category: 'tortas',
    occasion: 'bodas',
    glutenFree: false
  },
  {
    id: 6,
    name: 'Tarta de Manzana',
    description: 'Clásica tarta de manzana con canela y crumble.',
    price: 2800,
    image: '/products/tarta-manzana.jpg', // Placeholder
    category: 'tartas',
    occasion: 'diario',
    glutenFree: false
  },
  {
    id: 7,
    name: 'Macarons Surtidos',
    description: 'Caja de 12 macarons en sabores variados.',
    price: 2200,
    image: '/products/macarons.jpg', // Placeholder
    category: 'postres',
    occasion: 'eventos',
    glutenFree: true
  },
  {
    id: 8,
    name: 'Torta Red Velvet',
    description: 'Suave torta Red Velvet con frosting de queso crema.',
    price: 3800,
    image: '/products/red-velvet.jpg', // Placeholder
    category: 'tortas',
    occasion: 'cumpleaños',
    glutenFree: false
  },
  {
    id: 9,
    name: 'Cupcakes Sin TACC',
    description: 'Pack de 6 cupcakes sin gluten, aptos para celíacos.',
    price: 2000,
    image: '/products/cupcakes-sin-tacc.jpg', // Placeholder
    category: 'cupcakes',
    occasion: 'diario',
    glutenFree: true
  },
  {
    id: 10,
    name: 'Lemon Pie',
    description: 'Tarta de limón con merengue italiano.',
    price: 2600,
    image: '/products/lemon-pie.jpg', // Placeholder
    category: 'tartas',
    occasion: 'diario',
    glutenFree: false
  },
  {
    id: 11,
    name: 'Brownie con Nueces',
    description: 'Brownie húmedo con nueces y trocitos de chocolate.',
    price: 1800,
    image: '/products/brownie.jpg', // Placeholder
    category: 'postres',
    occasion: 'diario',
    glutenFree: false
  },
  {
    id: 12,
    name: 'Galletas Sin TACC',
    description: 'Pack de 12 galletas sin gluten, aptas para celíacos.',
    price: 1700,
    image: '/products/galletas-sin-tacc.jpg', // Placeholder
    category: 'galletas',
    occasion: 'diario',
    glutenFree: true
  },
];

export default products;