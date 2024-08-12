/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    borderRadius: {
      'megaLarge':'59px',
      'lg':'8px',
    },

    extend: {
      fontFamily:{
        Poppins:['Poppins', 'sans-serif'],
      },
      colors: {
        'Yellow': '#E6C744',
        'Blue': '#C2C8DA',
        'TextColor': '#242323',
        'bgHero': '#f4f6f5',
      },
      letterSpacing: {
        wide: '.01em',
        narrow: '-.03em',
        narrowest: '-.05em',
      },
    },
  },
  plugins: [],
}

