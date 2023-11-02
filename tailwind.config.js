/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        primary: "#545f71",
        lightslategray: "#7b8595",
        secondary: "#9ba5b7",
        tertiary: "#eef1f4",
        black: "#000",
        gainsboro: "#d9d9d9",
      },
      spacing: {},
      fontFamily: {
        "body-heavy": "Inter",
      },
      borderRadius: {
        smi: "13px",
        "3xs": "10px",
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
