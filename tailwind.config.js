/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7f1d1d', // Dark Red / Maroon
          light: '#991b1b',
          dark: '#450a0a',
        },
        secondary: {
          DEFAULT: '#1f2937', // Charcoal Black / Dark Gray
          light: '#374151',
          dark: '#111827',
        },
        accent: {
          DEFAULT: '#d4d4d8', // Soft Gold / Light Gray substitute (as requested: Soft Gold / Light Gray)
          gold: '#d4af37', // Adding a literal gold just in case
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}

