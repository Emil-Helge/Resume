/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,tsx}'],
  theme: {
    extend: {
      animation: ['hover'],
      fontFamily: {
        custom: ['Roboto', 'sans-serif'],
      },
    },
    keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-.5rem)' },
      },
    },
    animation: {
      wiggle: 'wiggle 1.2s ease-in-out infinite',
    },
  },
  plugins: [],
};
