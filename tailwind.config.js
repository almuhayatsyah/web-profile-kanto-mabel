/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // palet warna brand Mebel KANTO
      colors: {
        "brand-yellow": "#fcdc54",
        "brand-blue": "#054dac",
        "brand-red": "#fe3231",
      },
      // font family
      fontFamily: {
        serif: ["Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
