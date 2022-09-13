module.exports = {
  content: ["./*.html"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        xs: "2rem",
        sm: "3rem",
        md: "5rem",
        lg: "7rem",
        xl: "10rem",
      },
    },
    fontSize: {
      xs: [".75rem", "1rem"],
      sm: [".875rem", "1.25rem"],
      base: ["1rem", "1.5rem"],
      md: ["1.125rem", "1.625rem"],
      lg: ["1.25rem", "1.75rem"],
      xl: ["1.5rem", "2rem"],
      "2xl": ["1.75rem", "2.125rem"],
      "3xl": ["2rem", "2.25rem"],
      "4xl": ["2.25rem", "2.5rem"],
      "5xl": ["2.75rem", 1],
      "6xl": ["3.25rem", 1],
      "7xl": ["3.75rem", 1],
      "8xl": ["4.5rem", 1],
      "9xl": ["5.25rem", 1],
      "10xl": ["6rem", 1],
    },
    lineHeight: {
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      casual: 1.625,
      relaxed: 1.75,
      loose: 2,
    },
    screens: {
      xs: "512px",
      sm: "768px",
      md: "1024px",
      lg: "1280px",
      xl: "1536px",
    },
    zIndex: {
      0: 0,
      5: 5,
      10: 10,
      25: 25,
      50: 50,
      75: 75,
      100: 100,
      auto: "auto",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
      10: "10px",
    },
    extend: {
      fontFamily: {
        body: "Open Sans",
        display: "Roboto",
      },
      boxShadow: {
        border: "inset 0 0 0 2px",
      },
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        18: "4.5rem",
        112: "28rem",
        128: "32rem",
        144: "36rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
