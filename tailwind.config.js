const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: '#0047FF',
        gray: '#FEFEFE',
        dark: '#101010',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['iA Writer', ...defaultTheme.fontFamily.mono],
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
