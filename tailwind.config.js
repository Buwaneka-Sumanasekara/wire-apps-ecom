

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: "#030303",
      },
      spacing:{
        '100px':'100px',
      }
    },
  },
  plugins: [],
}

