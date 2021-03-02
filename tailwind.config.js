module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '992x',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      'raj': ['Rajdhani', 'sans-serif'],
      'inter': ['Inter', 'sans-serif']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
