const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: [],
  important: true,
  purge: {
    content: ["./src/**/*.{html,ts}"],
  },
  theme: {
    backdropFilter: {
      none: "none",
      blur: "blur(20px)",
    },
    extend: {
      maxWidth: {
        iPhone: "390px",
        Android: "411px",
      },
      fontFamily: {
        quicksand: ["Quicksand", ...defaultTheme.fontFamily.sans],
      },
      backgroundColor: {
        ctdark: "#261E45",
      },
      colors: {
        ctdark: "#261E45",
        ctlight: "#3958FF",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
