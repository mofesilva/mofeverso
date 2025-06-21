/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-bg': '#101010',
        'elevate': '#181818',
        'surface': '#222222',
        'border': '#2A2A2A',
        'line': '#363636',
        'main-text': '#F5F5F5',
        'soft-text': '#C1C1C1',
        'muted-text': '#7A7A7A',
        'accent': '#80FF00',
      },
      fontFamily: {
        'rajdhani': ['Rajdhani', 'sans-serif'],
        'league-spartan': ['League Spartan', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

