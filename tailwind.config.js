/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    colors:{
      'main-white': '#FFFFFF',
      'main-black': '#1E1E1E',
      'main-green': '#0F663A',
      'second-green': '#73B060',
      'darker-green': '123624',
      'main-yellow': '#E3CB12',
      'second-yellow': '#BAA60F',
      'main-red': '#E61110',
      'second-red': '#B30C0C',
      'neutral-blue': '#2D71CB',
      'second-blue': '#235AA1',
      'main-gray': '#7B807A',
      'second-black': '#2E2E2E',
      'hover-second-green': '#538244',
      'hover-main-green': '#0B4F2C',
      'hover-dark-green': '#0C2418',
      'second-gray': '#C8D2C6'
    },
    fontFamily:{
      'main': ' Titillium Web',
      'second': 'Tw Cen MT Std'
    }
  },
  plugins: [],
}

