/** @type {import('tailwindcss').Config} */
//Importamos temas por defecto de tailwind
// eslint-disable-next-line no-undef
const defaultTheme = require('tailwindcss/defaultTheme');
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        /* 
          Aqui estamos agregando la fuente que seleccionamos 
          pero tambien colocamos las otras fuentes que trae por defecto tailwind
          por si la nuestra falla , use las que tiene el por defecto establecidas
        */
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'brand-gray-1': '#dadce0',
        'brand-gray-2': '#f8f9fa',
        'brand-gray-3': '#80868b',
        'brand-blue-1': '#1967d2',
        'brand-blue-2': '#4285f4',
        'brand-green-1': '#137333'
      },
      boxShadow: {
        blue: '0 0 3px 3px #4285f5'
      }
    }
  },
  variants: {
    extend: {
      margin: ['first']
    }
  },
  plugins: []
};
