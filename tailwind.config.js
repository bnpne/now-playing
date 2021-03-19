const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [

  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: '#0047FF',
        gray: '#FEFEFE',
        dark: '#101010',
      },
      fontFamily: {
        sans: ['Helvetica Neue', ...defaultTheme.fontFamily.sans],
      },
      lineHeight: {
        tightest: '85px',
        tightester: '100px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
