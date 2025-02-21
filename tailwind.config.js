/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodoni: ["Bodoni Moda", "serif"],
        cinzel: ["Cinzel", "serif"],
        fira: ["Fira Sans", "serif"],
        rubik: ["Rubik", "serif"],
      },
      colors: {
        "olive-green": "#948d20",
      },
    },
  },
  plugins: [],
};
