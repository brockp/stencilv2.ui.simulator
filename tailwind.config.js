const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  important: true,
  content: ["./src/**/*.{html,ts, scss}"],
  theme: {
    backdropFilter: {
      none: "none",
      blur: "blur(20px)",
    },
    extend: {
      fontSize: {
        headline: "1.75rem",
      },
      letterSpacing: {
        headline: "0.045em",
      },
      maxWidth: {
        iPhone13: "390px",
        iPhone11: "375px",
        Android: "412px",
      },
      width: {
        85: "22rem",
      },
      height: {
        iPhone11: "812px",
        iPhone13: "844px",
        Android: "823px",
        "edit-sidebar": "93vh",
      },
      fontFamily: {
        quicksand: ["Quicksand", ...defaultTheme.fontFamily.sans],
        noir: ["noir", ...defaultTheme.fontFamily.sans],
      },
      backgroundColor: {
        ctdark: "#261E45",
      },
      colors: {
        "mat-toolbar": "#111827",
        blueprint: "#5094FF",
        ctdark: "#261E45",
        ctlight: "#3958FF",
        primaryblue: "#3589F9",
        purpleblack: "#1A152E",
        lighterblue: "#62B4FF",
        yellowpill: "#FEEC4B",
        secondarydark: "#141414",
        "ct-light-primary": "#fafafa",
        "ct-light-secondary": "#e5e5e5",
        "ct-light-accent-one": "#cecece",
        "ct-light-accent-two": "#dbdade",
        "ct-light-icon": "#1a152e",
        "ct-dark-blue": "#1e6fdb",
        "ct-blue": "#3580f0",
        "ct-light-blue": "#62b4ff",
        "ct-dark-purple": "#654cff",
        "ct-yellow": "#feec4b",
        "ct-emerald": "#19a9a5",
        alabaster: "#edeade",
        beige: "#f5f5dc",
        "bone-white": "#f9f6ee",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      fontWeight: {
        "medium-light": 400,
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
