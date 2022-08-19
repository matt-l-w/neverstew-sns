const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Alfa Slab One', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  plugins: [],
}