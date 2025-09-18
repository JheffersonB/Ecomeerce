/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#faf7f2',
          100: '#f4ede0',
          200: '#e8d8c0',
          300: '#d9be96',
          400: '#c8a06a',
          500: '#bc8a4a',
          600: '#af7a3e',
          700: '#916235',
          800: '#765030',
          900: '#614229',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdf9f3',
          200: '#faf2e4',
          300: '#f5e8d0',
          400: '#eed9b4',
          500: '#e4c794',
          600: '#d6b172',
          700: '#c49a56',
          800: '#a17d47',
          900: '#84663c',
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}