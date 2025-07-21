/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF9EB1',    // Rosa pastel principal
        secondary: '#FFD1DC',  // Rosa pastel claro para elementos secundarios
        accent: '#FF6B9E',     // Rosa pastel intenso para acentos
        background: '#FFF0F5', // Fondo rosa muy claro
        text: '#D87093',       // Texto en rosa oscuro
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}