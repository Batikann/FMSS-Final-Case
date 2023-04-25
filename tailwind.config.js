/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        darkMode: "url('./home-background.jpg')",
        error: "url('./404page.jpg')",
      },
    },
  },
  plugins: [],
}
