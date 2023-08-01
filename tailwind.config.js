/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': '#903CFC',
        'green': '#18DD96',
        'black': '#101016',
      },
    },
  },
  plugins: [],
}
