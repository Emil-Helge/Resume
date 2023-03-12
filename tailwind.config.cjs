/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      animation: ["hover"],
    },
    keyframes: {
      wiggle: {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-.5rem)" },
      },
    },
    animation: {
      wiggle: "wiggle 1s ease-in-out infinite",
    },
  },
  plugins: [],
};
