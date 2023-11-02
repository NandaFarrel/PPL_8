/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#545f71",
        white: "#fff",
        tertiary: "#eef1f4",
        black: "#000",
        lightslategray: "#7b8595",
        gainsboro: "#d9d9d9",
        secondary: "#9ba5b7",
      },
      spacing: {},
      fontFamily: {
        "body-small-heavy": "Inter",
      },
      borderRadius: {
        "3xs": "10px",
        smi: "13px",
        "4xl": "23px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      lg: "18px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
