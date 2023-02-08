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
        fadeDown: {
          '0%': { opacity: 0, transform: 'translateY(-3em)' },
          '100%': { opacity: 1, transform: 'translateY(0em)'},
        },
        fadeLeft: {
          '0%': { opacity: 0, transform: 'translateX(-1em)' },
          '100%': { opacity: 1, transform: 'translateX(0)'},
        },
        scaling: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.3)' },
        },

      },
      animation: {
        heroTitleAnimation: 'fadeUp 1.5s cubic-bezier(.12,.72,.5,1.2)',
        navbarAnimation: 'fadeDown 1s ease-out',
        heroSocialAnimation: 'fadeLeft 1s cubic-bezier(.12,.72,.5,1.2)',
        breathing: 'scaling 10s ease-in-out infinite'
      },
    },
  },
  plugins: [],
}
