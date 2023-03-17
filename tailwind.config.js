/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./client/src/**/*.{html,jsx}"],
  theme: {
    extend: {},
    colors: {
      'tahiti': {
        100: '#f9e9d6',
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}

