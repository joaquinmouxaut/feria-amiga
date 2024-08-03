/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'rosa': '#FE86F2',
        'naranja': '#FF5517',
        'lila': '#EF3DF3'
      },
      fontFamily: {
        'primary': ['Barlow', 'sans-serif'],
        'secondary': ['Squada One', 'sans-serif'],
        'tertiary': ['Urbanist', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

