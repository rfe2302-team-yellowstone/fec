/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./client/src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        'tahiti': {
          100: '#f9e9d6',
        }
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '900px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1024px',
      // => @media (min-width: 1024px) { ... }

      '2xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '3xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

  },
  plugins: [
    require('daisyui'),
    require('tailwind-scrollbar')
  ],
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

