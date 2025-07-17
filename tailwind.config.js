/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        yatra: ['Yatra One', 'Poppins', 'cursive']
      }
    },
  },
  plugins: [require('tailwindcss-primeui')],
  prefix: 'tw-'
}

