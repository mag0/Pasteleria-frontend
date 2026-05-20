import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-6 pb-16">

      <div className="absolute inset-0 bg-[#FFF0F5]/50"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center px-4 w-full">

        <div className="flex justify-center">
          <img src="/logos/logoModerno.png" width="500" height="500" alt="logo" />
        </div>

        <div className="text-center">
          <h1 className="text-5xl font-serif text-[#FDF6F0] mb-4 drop-shadow-lg">
            Pastelería Belu
          </h1>

          <p className="text-[#F8EDEB] text-xl mb-6 font-serif">
            Dulces momentos dignos de la realeza
          </p>

          <Link
            to="/productos"
            className="px-8 py-3 bg-[#9E3A66] text-white rounded-md shadow-xl hover:bg-[#eeb6ce]"
          >
            Ver Catálogo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;