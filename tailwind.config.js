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
        icon: ["Noto Emoji", "sans-serif"],
      },
      colors: {
        darkred: "#9E656D",
        lightgreen: "#87928A",
        brightgreen: "#b6d0c7",
        darkgreen: "#2C3A2C",
        darkbeige: "#C7BAB9",
        lightpink: "#b05a6e",
        smokygreen: "#6a8075",
        smokypink: "#BC9C9A",
        bggreen: "#52635bb8",
        bgpink: "#dac6c6",
      },
      spacing: {
        big: "48rem",
      },
    },
  },
  plugins: [],
};
