module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ["bg-gray-700"],
  theme: {
    screens: {
      xs: "411px",
      sm: "540px",
      smd: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
      "3xl": "1920px",
    },
    fontFamily: {},
    extend: {
      colors: {},
      display: ["group-hover"],
      visibility: ["group-hover"],
      backgroundImage: {},
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          padding: "0px 1rem",
          "@screen xs": {
            maxWidth: "auto",
            margin: "0px auto",
          },
          "@screen sm": {
            maxWidth: "462px",
            margin: "0px auto",
            padding: "0px 2rem",
          },
          "@screen smd": {
            maxWidth: "462px",
            margin: "0px auto",
            padding: "0px 2rem",
          },
          "@screen md": {
            maxWidth: "750px",
            margin: "0px auto",
            padding: "0px auto",
          },
          "@screen lg": {
            maxWidth: "970px",
            margin: "0px auto",
            padding: "0px 0px",
          },
          "@screen xl": {
            maxWidth: "1100px",
            margin: "0px auto",
            padding: "0px 0px",
          },
          "@screen 2xl": {
            maxWidth: "1170px",
            margin: "0px auto",
            padding: "0px 0px",
          },
          "@screen 3xl": {
            maxWidth: "1410px",
            margin: "0px auto",
            padding: "0px 0px",
          },
        },
      });
    },
  ],
};
