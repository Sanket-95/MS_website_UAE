/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink:  { DEFAULT: '#1a1a1a', soft: '#4a4a4a', muted: '#888888' },
        linen:{ DEFAULT: '#faf9f6', warm: '#f4f1ea', border: '#e8e4db' },
        navy: { DEFAULT: '#0d1b2a', deep: '#09131e' },
        gold: { DEFAULT: '#c9a84c', light: '#e0c068', dark: '#a07a30' },
        sheet:{ DEFAULT: '#171717', card: '#202020', border: '#2a2a2a' },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body:    ['"Mulish"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
