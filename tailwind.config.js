/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      workSans: ["Work Sans", 'cursive'],
      baloo: ["Baloo 2", 'sans-serif'],
      poppins: ["Poppins", 'sans-serif'],
    },
  },
  plugins: [],
}

