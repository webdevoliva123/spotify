/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
    },
    colors: {
      'main' : '#000000',
      'sub-main' : '#121212',
    },
    fontFamily:{
      'primary' : ['Figtree', 'sans-serif'],
      'secondary': ['Playfair', 'serif']
    }
  },
  plugins: [],
}

