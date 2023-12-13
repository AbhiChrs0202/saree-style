/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,tc,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [ require('@tailwindcss/aspect-ratio')],
}

