module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },

  daisyui: {
    themes: [
      {
        primary: "#6495ED",
        secondary: "#40E0D0",
        accent: "#3A4256",
        neutral: "#FF5733 ",
        "base-100": "#ffffff",
      },
    ],
  },

  plugins: [require("daisyui")],
};
