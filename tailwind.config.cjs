/** @type {import('./tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0848a6',
        'on-primary': '#FFFFFF',
        'secondary': '#B0D7FF',
        'on-secondary': '#FFFFFF',
        'success': '#139A43',
        'on-success': '#FFFFFF',
        'error': '#D63230',
        'on-error': '#FFFFFF',
        'surface': '#EEEEEE',
        'current': 'currentColor',
      }
    }
  },
  plugins: [],
}
