/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color:{
        grey:"#636363",
        white:"#e2e2e2",
        orange:"#FFBF00",
        

      }
    },
  },
  plugins: [],
}