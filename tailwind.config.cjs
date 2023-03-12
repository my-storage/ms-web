/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: { 
        primary: "#FFFFFF",
        secondary: "#2782E9",
        tertiary: "#313131",
        help: {
          gray: "#A9A9CA",
          lightGray: "#EBEBFC",
          blue: "#408EF4",
          purple: "#7062FA",
          mint: "#5AB4AA",
          amber: "#E25531",
        }
      },
    },
  },
  plugins: [],
};