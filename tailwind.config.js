const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        beat: {
          '0%': {
            transform: 'scale(1)' },
          '30%, 60%': {
            transform: 'scale(2)' },
          '80%, 100%': {
            transform: 'scale(1)' }
        }
      },
      animation: {
        beat1: 'beat 18s 1'
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      purple: colors.purple,
      blue: colors.blue,
      sky: colors.sky,
      red: colors.red,
      green: colors.emerald,
    },
    height: {
      "10v": "10vh",
      "20v": "20vh",
      "30v": "30vh",
      "40v": "40vh",
      "50v": "50vh",
      "60v": "60vh",
      "70v": "70vh",
      "80v": "80vh",
      "90v": "90vh",
      "100v": "100vh",
    }
  },

  gridTemplateColumns: {

    '3': 'repeat(auto-fit, minmax(30rem, 1fr))',

  },
  screens: {
    '2xl': { 'max': '1535px' },
    // => @media (max-width: 1535px) { ... }

    'xl': { 'max': '1279px' },
    // => @media (max-width: 1279px) { ... }

    'lg': { 'max': '1023px' },
    // => @media (max-width: 1023px) { ... }

    'md': { 'max': '767px' },
    // => @media (max-width: 767px) { ... }

    'sm': { 'max': '639px' },
    // => @media (max-width: 639px) { ... }
  },
  

  variants: {
    extend: {},
  },
  plugins: [],
}

