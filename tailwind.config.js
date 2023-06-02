/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1200px'
        },
      },
      colors: {
        dark: '#4F4544',
        light: '#F2F2F2',

        primary: '#EF6160'
      }
    },
  },
  plugins: [],
}

