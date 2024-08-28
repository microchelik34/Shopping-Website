/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    borderRadius: {
      'megaLarge':'59px',
      'lg':'8px',
    },

    extend: {
      animation: {
        scroll: 'scroll 10s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': {transform: 'translateX(0)'},
          '100%': {transform: 'translateX(-100%)'},
        },
      },

      fontFamily:{
        Poppins:['Poppins', 'sans-serif'],
      },

      colors: {
        'Yellow': '#E6C744',
        'YellowBG': '#e5c643',
        'Blue': '#C2C8DA',
        'TextColor': '#242323',
        'TextGray': '#7f7f7f',
        'TextGrayLight': '#d9d9d9',
        'TextGrayDark': '#8e8e8e',
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

