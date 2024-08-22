/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'gold-glow': '0px 0px 10px 2px #ffd900c3',
      },
    },
  },
  plugins: [],
}