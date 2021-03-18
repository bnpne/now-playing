const defualtTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: '#0047FF',
        gray: '#FEFEFE',
        dark: '#101010',
      },
      fontFamily: {
        sans: ['Helvetica Neue', ...defualtTheme.fontFamily.sans],
      },
      lineHeight: {
        'tightest': '85px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
