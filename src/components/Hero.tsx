// import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-white">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 px-4">
    
    <div>
      <img 
        src="/src/assets/logos/logosinfondo.png" 
        alt="Pastelería Belén - Productos artesanales" 
        className="w-full h-full object-cover rounded-lg"
      />
    </div>

    <div>
      <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block font-serif text-primary">Pastelería Belén</span>
        <span className="block text-accent text-3xl mt-3 font-medium">Dulces momentos, recuerdos inolvidables</span>
      </h1>
      <p className="mt-4 text-gray-700 text-lg md:text-xl">
        Elaboramos productos artesanales con ingredientes seleccionados y mucho amor. Cada creación está pensada para endulzar tus momentos especiales y convertirlos en recuerdos inolvidables.
      </p>
      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <a href="/productos" className="px-8 py-3 rounded-md text-white bg-primary hover:bg-primary/90 text-center">
          Ver Productos
        </a>
        <a href="/contacto" className="px-8 py-3 rounded-md text-primary bg-secondary/30 hover:bg-secondary/50 text-center">
          Hacer un Pedido
        </a>
      </div>
    </div>

  </div>
</section>

  );
};

export default Hero;