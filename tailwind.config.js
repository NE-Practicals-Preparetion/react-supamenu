/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "main-background": "#F7941D",
        "text-color-1": "#000000",
        "text-color-2": "#FFFFFF",
        "sidebar-gray": "#A4A6B3",
        "gray2": "#252733",
      }
    },
    plugins: [],
  }
}
