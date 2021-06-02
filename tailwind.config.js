const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
        yellow:{
          light: '#FDE68A',
          DEFAULT: '#FCD34D',
          dark: '#FBBF24',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
