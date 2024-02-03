/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./_site/**/*.{html,js}", "./layouts/**/*.njk"],
  theme: {
    extend: {
      fontFamily: {
        'inter': [ 'Inter', 'sans-serif'],
        'lily' : ['Beth Ellen', 'cursive']
      },
    },
  },
  plugins: [],
}
