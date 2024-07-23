/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        grad_color: "to-purple-700 bg-gradient-to-br from-pink-300",
      },
    },
  },
  plugins: [],
};
