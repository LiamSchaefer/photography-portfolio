/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      background: "#040D12",
      primary: "#183D3D",
      accent: "#5C8374",
      tertiary: "#93B1A6",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
