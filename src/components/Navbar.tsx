import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-[#C9A227]/30 bg-[#FDF6F0]/80 shadow-lg">

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* 🔹 IZQUIERDA → LOGO */}
          <div className="flex items-center">
            <img src="/logos/chicaLogo.png" width="75" height="75" alt="logo" />
            <Link
              to="/"
              className="text-xl sm:text-2xl font-serif text-[#9E3A66] tracking-wider"
            >
              Pastelería Belu
            </Link>
          </div>

          {/* 🔹 CENTRO → MENÚ (desktop) */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-10 font-serif text-sm tracking-wide">
            <Link to="/" className="text-[#4A4A4A] hover:text-[#9E3A66] transition">
              Inicio
            </Link>
            <Link to="/productos" className="text-[#4A4A4A] hover:text-[#9E3A66] transition">
              Productos
            </Link>
          </div>

          {/* 🔹 DERECHA → CTA + MOBILE */}
          <div className="flex items-center gap-3">

            {/* CTA (solo desktop) */}
            <a
              href="https://wa.me/5491122909676"
              target="_blank"
              className="hidden md:block bg-[#9E3A66] text-white px-5 py-2 rounded-md font-serif shadow-lg hover:bg-[#7d2d52] transition"
            >
              Encargar
            </a>

            {/* Mobile botón */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md bg-[#9E3A66]/20 text-[#9E3A66]"
            >
              <svg className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

          </div>
        </div>
      </div>

      {/* 🔻 MOBILE MENU */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden bg-[#FDF6F0] border-t border-[#C9A227]/20`}>
        <div className="flex flex-col items-center font-serif py-4 space-y-3">

          <Link to="/" onClick={closeMenu} className="text-[#4A4A4A] hover:text-[#9E3A66]">
            Inicio
          </Link>

          <Link to="/productos" onClick={closeMenu} className="text-[#4A4A4A] hover:text-[#9E3A66]">
            Productos
          </Link>

          {/* CTA mobile */}
          <a
            href="https://wa.me/5491122909676"
            target="_blank"
            className="mt-2 bg-[#9E3A66] text-white px-6 py-2 rounded-md shadow-lg hover:bg-[#7d2d52]"
          >
            Encargar
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;