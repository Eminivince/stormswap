/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'heroswap' : "url('/src/images/stormbg.jpg')"
      }
    },
  },
  plugins: [],
}