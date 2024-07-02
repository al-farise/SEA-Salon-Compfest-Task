/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'brand': '#22346c',
        'brand-secondary': '#b1b9d5',
      },
    },
  },
  plugins: [],
}

