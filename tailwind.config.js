/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        title: "1.4rem",
      },
      textColor: {
        grayishBlue: "#7B879D",
      },
      backgroundColor: {
        lightGray: "#D6E2F0",
      },
    },
  },
  plugins: [],
};
