/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily:{
        Poppins:['Poppins', 'sans-serif'],
      },
      colors: {
        'Yellow': '#E6C744',
        'Blue': '#C2C8DA',
        'TextColor': '#242323',
      },
      letterSpacing: {
        wide: '.01em',
        narrow: '-.03em',
      },
    },
  },
  plugins: [],
}

