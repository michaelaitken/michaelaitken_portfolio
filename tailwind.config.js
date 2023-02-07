/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(1em)' },
          '100%': { opacity: 1, transform: 'translateY(0em)'},
        },
        fadeLeft: {
          '0%': { opacity: 0, transform: 'translateX(3em)' },
          '100%': { opacity: 1, transform: 'translateX(0em)'},
        },

      },
      animation: {
        h1Animation: 'fadeUp 0.75s cubic-bezier(.12,.72,.5,1.2)',
        linksAnimation: 'fadeLeft 0.75s cubic-bezier(.12,.72,.5,1.2)',
      },
    },
  },
  plugins: [],
}
