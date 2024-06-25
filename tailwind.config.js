const { Poppins } = require("next/font/google");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-linear": "linear-gradient(to top, #FCE2B6, #FEF9F0)",
        "project-linear":
          "linear-gradient(to top, rgba(0, 0, 0, 0.97), rgba(0, 0, 0, 0.135))",
      },
      screens: {
        xs: "258px",
      },
    },
  },
  plugins: [],
};
