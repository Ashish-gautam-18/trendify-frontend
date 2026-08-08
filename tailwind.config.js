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
          DEFAULT: '#111827', // Dark Charcoal (Luxury premium look)
          light: '#374151',
          dark: '#030712',
        },
        secondary: {
          DEFAULT: '#D97706', // Warm Amber/Gold (Premium contrast look)
          light: '#F59E0B',
          dark: '#B45309',
        },
        // Agar usne website me indigo ya blue specific default use kiya hai, toh use yahan override kar sakte hain
        indigo: {
          500: '#1F2937',
          600: '#111827', // bg-indigo-600 ab automatically dark charcoal ban jayega!
          700: '#030712',
        },
        blue: {
          500: '#1F2937',
          600: '#111827', // bg-blue-600 bhi ab dark charcoal ban jayega!
          700: '#030712',
        }
      },
    },
  },
  plugins: [],
}
