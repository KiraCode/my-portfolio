/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4B5563",
        "custom-gray": "#1A1A1A",
        fontFamily: {
          orbitron: ["Orbitron", "sans-serif"],
        },
      },
    },
  },
  plugins: [],
};
