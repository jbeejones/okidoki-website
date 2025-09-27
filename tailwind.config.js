/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./assets/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui')  // Add this
  ],
  // Add DaisyUI config
  daisyui: {
    themes: ['light', 'dark'],
    darkTheme: 'dark',
    base: true,
    styled: true,
    utils: true,
  },
}