import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Productos", path: "/productos" },
    { name: "Precios", path: "/menu" },
  ];

  const botonEncargar = (<a
    href="https://wa.me/5491122909676"
    target="_blank"
    className="
    mt-2
    bg-[#9E3A66]
    text-white
    px-6
    py-2
    rounded-md
    shadow-lg
    border border-transparent
    transition-all duration-300
    hover:bg-[#FDF6F0]
    hover:text-[#9E3A66]
    hover:border-[#9E3A66]
    hover:shadow-xl
    hover:-translate-y-0.5
  "
  >
    Encargar
  </a>);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-[#C9A227]/30 bg-[#FDF6F0]/80 shadow-lg">

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          <div className="flex items-center">

            <Link
              to="/"
              className="text-xl sm:text-2xl font-serif text-[#9E3A66] tracking-wider"
            >
              <img src="/logos/chicaLogo.png" width="75" height="75" alt="logo" />
            </Link>
          </div>

          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-10 font-serif text-base tracking-wide">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-[#4A4A4A] hover:text-[#9E3A66] transition"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              {botonEncargar}
            </div>
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

      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden bg-[#FDF6F0] border-t border-[#C9A227]/20`}>
        <div className="flex flex-col items-center font-serif py-4 space-y-3">

          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className="text-[#4A4A4A] hover:text-[#9E3A66]"
            >
              {link.name}
            </Link>
          ))}

          {botonEncargar}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;