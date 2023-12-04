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
        'brand-blue-1': '#1967d2',
        'brand-green-1': '#137333'
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
