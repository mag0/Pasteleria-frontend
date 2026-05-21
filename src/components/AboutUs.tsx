
const AboutUs = () => {
  return (
    <section className="py-20 bg-[#FDF6F0]/100">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

        <div className="flex justify-center">
          <img
            src="/images/perfil.png"
            alt="Pastelera"
            className="w-72 h-72 object-cover rounded-full shadow-2xl border-4 border-[#C9A227]/40"
          />
        </div>

        <div>
          <h2 className="text-4xl font-serif text-[#9E3A66] mb-6">
            ¿Quién soy?
          </h2>

          <div className="space-y-5 text-[#4A4A4A] leading-relaxed text-lg">
            <p>
              Hace un par de años descubrí el maravilloso mundo de la pastelería,
              y desde entonces no dejé de perfeccionarme en cada receta,
              buscando siempre crear algo especial.
            </p>

            <p>
              Cada producto que realizo está hecho con dedicación,
              cuidando cada detalle para que no solo sea rico,
              sino también visualmente hermoso.
            </p>

            <p>
              Es un placer poder formar parte de tus momentos especiales,
              aportando algo dulce, único y hecho con amor.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;