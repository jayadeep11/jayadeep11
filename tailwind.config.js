/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Default font
        acorn: ["Acorn", "sans-serif"], // Local font for specific use}
      },
      colors: {
        lb: "#292524",
        primary: "#FFF0DF",
        buttonbg: "#F5E5D4",
        softPink: "#F8EcD4", // Starting color of gradient
        cream: "#ddc7ac", // Ending color of gradient
        lavender: "#c08497", // Mid-tone soft lavender
        peach: "#f6caca", // Warm peach tone
      },
    },
  },
  plugins: [],
};
