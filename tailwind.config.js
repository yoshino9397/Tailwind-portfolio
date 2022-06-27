module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        body: ["Roboto Flex", "sans-serif"],
      },
      colors: {
        darkred: "#9E656D",
        lightgreen: "#87928A",
        darkgreen: "#2C3A2C",
        darkbeige: "#C7BAB9",
        lightpink: "#b05a6e",
        smokygreen: "#6a8075",
        smokypink:"#BC9C9A"
      },
      spacing: {
        big: "48rem",
      },
    },
  },
  plugins: [],
};
