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
        'button': '0 5px 10px rgba(255, 174, 0, 0.26)',
      }
    },
  },
  plugins: [],
}