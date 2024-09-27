/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        leaves: "url('./src/assets/leaves.webp')",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      keyframes: {
        pulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.2)", opacity: "0.7" },
        },
        clickEffect: {
          "0%": { transform: "scale(0.5)", opacity: "0.4" },
          "70%": { transform: "scale(1.5)", opacity: "0" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        pulse: "pulse 1.5s infinite ease-in-out",
        clickEffect: "clickEffect 1s infinite",
      },
    },
  },
  plugins: [],
};
