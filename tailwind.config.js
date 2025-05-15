/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media', // Use system preference instead of class
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './content/**/*.{md,mdx}',
    './public/**/*.html',
  ],
  plugins: [require('@tailwindcss/typography')],
  theme: {},
};