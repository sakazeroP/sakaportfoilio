const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'banner': "url('../images/mywallpaper.png')",
        'banner-work': "url('../images/work_wall.png')",
       }),
      colors: {
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
        yellow:{
          light: '#FDE68A',
          DEFAULT: '#FCD34D',
          dark: '#FBBF24',
        }
      },
      fontFamily:{
        'Poppins': ['"Poppins"', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
