export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  occasion?: string;
  glutenFree: boolean;
  ingredients?: string[];
}