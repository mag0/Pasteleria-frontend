const Footer = () => {
  return (
    <footer className="bg-[#9E3A66] text-white font-serif relative overflow-hidden">

      {/* Glow decorativo */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#C9A227]/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto py-16 px-6">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Marca */}
          <div>
            <h3 className="text-3xl tracking-wide mb-5 text-[#FDF6F0]">
              Pastelería Belén
            </h3>

            <div className="w-16 h-[1px] bg-[#C9A227]/60 mb-5" />

            <p className="leading-relaxed text-white/80 max-w-sm">
              Elaboración artesanal de productos dulces con ingredientes de
              calidad, detalles delicados y un toque casero en cada creación.
            </p>
          </div>

          <div>
            <h3 className="text-xl tracking-wide mb-5 text-[#FDF6F0]">
              Contacto
            </h3>

            <div className="w-12 h-[1px] bg-[#C9A227]/50 mb-5" />

            <ul className="space-y-4 text-white/80">

              <li className="flex items-start gap-3">
                <div className="mt-1">
                  <svg
                    className="h-4 w-4 text-[#C9A227]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>

                <span>+54 11 65169136</span>
              </li>

              <li className="flex items-start gap-3">
                <div className="mt-1">
                  <svg
                    className="h-4 w-4 text-[#C9A227]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>

                <span>maryy.belu@gmail.com</span>
              </li>

              <li className="flex items-start gap-3">
                <div className="mt-1">
                  <svg
                    className="h-4 w-4 text-[#C9A227]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <span>La Reja, Moreno, Buenos Aires</span>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Redes */}
            <div className="flex items-center gap-3">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/belu_guerreiro"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/20 px-4 py-2 rounded-full transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-full bg-white/10 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="h-7 w-7 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 1.8h8.5a3.95 3.95 0 013.95 3.95v8.5a3.95 3.95 0 01-3.95 3.95h-8.5a3.95 3.95 0 01-3.95-3.95v-8.5A3.95 3.95 0 017.75 3.8zm8.95 1.35a1.05 1.05 0 100 2.1 1.05 1.05 0 000-2.1zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.8A3.2 3.2 0 1112 15.2 3.2 3.2 0 0112 8.8z" />
                  </svg>
                </div>

                <span className="text-sm tracking-wide text-white/90">
                  Instagram
                </span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/5491165169136"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/20 px-4 py-2 rounded-full transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-full bg-white/10 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="h-9 w-9 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                  </svg>
                </div>

                <span className="text-sm tracking-wide text-white/90">
                  WhatsApp
                </span>
              </a>

            </div>
            <p className="text-white/60 tracking-wide text-center md:text-left">
              &copy; {new Date().getFullYear()} Pastelería Belén. Todos los derechos reservados.
            </p>


          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;