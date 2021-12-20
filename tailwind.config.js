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
      yellow: colors.amber,
      pink: colors.pink,
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
      "94v": "94vh",
      "100v": "100vh",
      "110v": "110vh",
      "120v": "120vh",
      "130v": "130vh",
      "140v": "140vh",
      "150v": "150vh",
      "160v": "160vh",
      "170v": "170vh",
      "180v": "180vh",
      "190v": "190vh",
      "200v": "200vh",
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '100px',
    }
  },

  gridTemplateColumns: {

    '3': 'repeat(auto-fit, minmax(30rem, 1fr))',

  },

  variants: {
    extend: {},
  },
  plugins: [],
}

