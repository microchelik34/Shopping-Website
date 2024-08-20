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
        'YellowBG': '#e5c643',
        'Blue': '#C2C8DA',
        'TextColor': '#242323',
        'TextGray': '#7f7f7f',
        'bgHero': '#f4f6f5',
      },
      letterSpacing: {
        widest: '.06em',
        wide: '.01em',
        narrow: '-.03em',
        narrowest: '-.05em',
      },
    },
  },
  plugins: [],
}

