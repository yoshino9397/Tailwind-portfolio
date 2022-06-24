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
        darkred: "#833E5B",
        dark: "#181D3B",
      },
    },
  },
  plugins: [],
};
