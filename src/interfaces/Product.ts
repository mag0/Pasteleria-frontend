export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  images: string[];
  category: string;
  occasion?: string;
  glutenFree: boolean;
  ingredients?: string[];
}