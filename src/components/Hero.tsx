import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-6 pb-16 bg-[var(--color-background-pink)]">

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center px-4 w-full">

        <div className="flex justify-center">
          <img src="/logos/logomoderno2.png" width="500" height="500" alt="logo" />
        </div>

        <div className="text-center">
          <h1 className="text-5xl font-serif text-white mb-4 drop-shadow-lg">
            Pastelería Belu
          </h1>

          <p className="text-white/60 text-xl mb-6 font-serif">
            Deliciosas creaciones hechas con amor y dedicación. Cada producto es una obra de arte dulce, perfecta para tus momentos especiales.
          </p>

          <Link
            to="/productos"
            className="px-8 py-3 font-serif tracking-wide bg-[#9E3A66] text-white rounded-md shadow-xl border border-transparent transition-all duration-300 hover:bg-[#FDF6F0] hover:text-[#9E3A66] hover:border-[#9E3A66] hover:shadow-2xl hover:-translate-y-0.5"
          >
            Ver Catálogo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;