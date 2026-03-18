import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative py-20">

      <div className="absolute inset-0 bg-[#9E3A66]/50"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 px-4">

        <div className="flex justify-center">
          <img src="/logos/logosinfondo.png" alt="logo" />
        </div>

        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-serif text-[#FDF6F0] mb-4 drop-shadow-lg">
            Pastelería Belu
          </h1>

          <p className="text-[#F8EDEB] text-xl mb-6 font-serif">
            Dulces momentos dignos de la realeza
          </p>

          <Link
            to="/productos"
            className="px-8 py-3 bg-[#9E3A66] text-white rounded-md shadow-xl hover:bg-[#7E2F52]"
          >
            Ver Catálogo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;