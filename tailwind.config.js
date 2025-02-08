/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fbfbfb",
        primary: "#FE491F",
        secondary: "#303030",
        gray: {
          primary: "#b1b1b1",
        },
      },
      backgroundImage: {
        firstbox: "url('../public/images/first_box.jpg')",
      },
      screens: {
        xs: "400px",
      },
    },
  },
  plugins: [],
};
