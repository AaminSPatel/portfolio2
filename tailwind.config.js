/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // You can define custom colors for light and dark modes here
      },
      fontFamily: {
        cursive: ['"Pacifico"', 'cursive'], // Example cursive font
      },
    },
  },
  plugins: [],
}

