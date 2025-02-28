/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        base: 'Poppins',
        main: 'Inter',
        logo:'Cinzel',
      },
      colors: {
        "black": "#000",
        "white": "#fff",
        "darkase": "#DCDEDE",
        "darkblue": "#00003f",

        
        "transition": "all 0.5s ease",
      },
      boxShadow: {
        "neon": "0 0 10px #00f, 0 0 20px #0ff, 0 0 40px #00f",
      },
    },
  },
  plugins: [
    // require('tailwind-scrollbar-hide')
  ],
}