// Datos de testimonios para Pastelería Belén

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  image?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Laura Martínez',
    text: 'Encargué una torta para el cumpleaños de mi hija y quedó espectacular. No solo era hermosa sino que también estaba deliciosa. ¡Todos los invitados quedaron encantados!',
    image: '/testimonials/testimonial-1.jpg', // Placeholder
    rating: 5,
    date: '15/04/2023'
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    text: 'Las galletas personalizadas que pedí para el evento de mi empresa fueron un éxito total. El sabor, la presentación y la atención fueron excelentes. Definitivamente volveré a contratar sus servicios.',
    image: '/testimonials/testimonial-2.jpg', // Placeholder
    rating: 5,
    date: '22/06/2023'
  },
  {
    id: 3,
    name: 'María Gómez',
    text: 'Como celíaca, es difícil encontrar opciones ricas y seguras. Los cupcakes sin TACC de Pastelería Belén son los mejores que he probado. ¡Gracias por pensar en nosotros!',
    image: '/testimonials/testimonial-3.jpg', // Placeholder
    rating: 5,
    date: '10/07/2023'
  },
  {
    id: 4,
    name: 'Javier López',
    text: 'La torta de bodas superó todas nuestras expectativas. No solo era hermosa sino que también estaba deliciosa. Belén entendió exactamente lo que queríamos y lo hizo realidad.',
    image: '/testimonials/testimonial-4.jpg', // Placeholder
    rating: 5,
    date: '05/09/2023'
  },
  {
    id: 5,
    name: 'Ana Fernández',
    text: 'Pedí una mesa dulce para el cumpleaños de 15 de mi hija y fue el centro de atención de la fiesta. Todo estaba delicioso y la presentación fue impecable. ¡Altamente recomendable!',
    image: '/testimonials/testimonial-5.jpg', // Placeholder
    rating: 4,
    date: '18/10/2023'
  },
];

export default testimonials;