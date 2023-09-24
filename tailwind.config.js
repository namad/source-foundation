/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dist/*.html',
    './src/**/*.{ts, html}',
  ],
  theme: {
    extend: {
      flex: {
        '3': '3 3 0%'
      }    
    },
  },
  plugins: [],
}

