/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        hero: "linear-gradient(90deg, rgba(81,45,213,0.9) 0%, rgba(103,53,223,0.9) 50%, rgba(108,45,216,0.9) 100%),url('/src/assets/download-bg.jpg')",
      },
    },
  },
  plugins: [],
};
