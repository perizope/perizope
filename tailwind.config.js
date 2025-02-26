/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'fira': ['"Fira Sans"', 'sans-serif'],
      },
      colors: {
        'brand': '#00B788',
      },
    },
  },
  plugins: [],
};