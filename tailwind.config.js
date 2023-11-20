/** @type {import('tailwindcss').Config} */
//Importamos temas por defecto de tailwind
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        /* 
          Aqui estamos agregando la fuente que seleccionamos 
          pero tambien colocamos las otras fuentes que trae por defecto tailwind
          por si la nuestra falla , use las que tiene el por defecto establecidas
        */
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
};
