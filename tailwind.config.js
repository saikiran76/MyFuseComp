/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '900':'900px',
        '600':'600px'
      }
    },
  },
  plugins: [],
}

