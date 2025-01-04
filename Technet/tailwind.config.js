module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        slideToCenter: "slideToCenter 2s ease-out forwards", // Stop after 2 seconds
      },
      keyframes: {
        slideToCenter: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
      },
      fontFamily: {
        moto: ['Moto', 'sans-serif'], // Add your custom font here
      },
    },
  },
  plugins: [],
};
