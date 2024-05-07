

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: "#29a69c",
        secondary: "#b3c8c8",
        danger: "#e3342f",
        textColor: "#000000",
      }
    },
  },
  plugins: [],
}

