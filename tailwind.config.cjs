/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '425px'
      },
      colors: {
        'cyan-light': 'hsl(193, 38%, 86%)',
        'green-neon': 'hsl(150, 100%, 66%)',
        'gray-blue-light': 'hsl(217, 19%, 38%)',
        'gray-blue-medium': 'hsl(217, 19%, 24%)',
        'gray-blue-dark': 'hsl(218, 23%, 16%)'
      }
    }
  },
  plugins: []
}
