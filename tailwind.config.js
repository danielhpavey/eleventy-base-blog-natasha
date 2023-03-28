/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./_site/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': [ 'Inter', 'sans-serif'],
        'lily' : ['Lily Script One', 'cursive']
      },
    },
  },
  plugins: [],
}
