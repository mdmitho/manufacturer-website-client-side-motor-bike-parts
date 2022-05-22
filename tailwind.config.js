module.exports = {
  content: ['./src/**/*.{html,js}',  "./node_modules/flowbite/**/*.js", './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [
    require('flowbite/plugin'),
    require("daisyui"),
    require('tw-elements/dist/plugin')

  ],
};
