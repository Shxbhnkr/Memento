/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        marquee2: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        marquee: 'marquee 14s linear infinite ',
        marquee2: 'marquee2 11s linear infinite  -3s'
      },
      colors: {
        gray: {
          100: "#E5E7EB",
          200: "#999999",
          300: "#868789"
        },
        black:{
          100:"#001D1D"
        }
      },
      lineHeight: {
        'supernone': '0.9',
        'ultratight': '0.8',
      },

      fontFamily: {
        inter: ['Inter', 'sans-serif'],  // <-- put this inside extend
        gills:['Gill Sans MT','sans-serif']
      },
    },
  },
  plugins: [
    
  ],
}
