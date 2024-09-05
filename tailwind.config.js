/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter',
      },
      boxShadow: {
        'button-login': '0 5px 10px rgba(255, 174, 0, 0.26)',
        'button-popular': '0px 20px 40px rgba(250, 99, 35, 0.24)',
        'button-carousel': '0px 20px 40px rgba(0, 14, 32, 0.24)',
        'best-deals': '0px 20px 40px rgba(0, 14, 15, 0.6)',
      }
    },
  },
  plugins: [],
}