/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'ancient': ['Cinzel', 'serif'],
        'typewriter': ['"Special Elite"', 'cursive'],
      }
    },
  },
  plugins: [],
}

