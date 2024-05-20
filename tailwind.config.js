/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'preto': '#0E0E0E',
      'cinza': '#181716',
      'bege': '#CDB58C',
      'branco': '#FFFFFF', 
      'transparent': 'transparent'
    },
    fontFamily: {
      'sans': ['Work Sans', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}






