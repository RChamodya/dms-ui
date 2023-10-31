/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js","node_modules/preline/dist/.js"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#352070",
        "light-purple": "#6348a5",
      },
      backgroundImage: (theme) => ({
        "gradient-radial":
          "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
        "gradient-repeat":
          "repeating-linear-gradient(var(--tw-gradient-stops))",
        "gradient-repeat-radial":
          "repeating-radial-gradient(var(--tw-gradient-stops))",
      }),
    },
  },
  plugins: [require("flowbite/plugin","preline/plugin")],
};
