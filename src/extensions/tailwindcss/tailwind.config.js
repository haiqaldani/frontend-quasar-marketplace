const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'gray-soft': '#f7f7f7',
        'white-main': '#ffffff',
        'blue-soft': '#3252DF',
        'red-diskon': '#FF498B',
        // gray: colors.gray,
      }
    },
    colors: {
      transparent: 'transparent',
      emerald: colors.emerald,
      green: colors.green,
      gray: colors.gray,
      blue: colors.blue,
      red: colors.red,
      teal: colors.teal
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    }
  },
  prefix: 'net-',
  important: true,
  variants: {},
  plugins: []
}
