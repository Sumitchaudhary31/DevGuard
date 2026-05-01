/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#05050f",
        secondary: "#0a0a1a",
        "accent-blue": "#00d2ff",
        "accent-purple": "#9d4edd",
        "text-secondary": "#a0a0b0",
      },
      backgroundImage: {
        "gradient-custom":
          "linear-gradient(90deg, var(--tw-colors-accent-blue), var(--tw-colors-accent-purple))",
      },
    },
  },
  plugins: [],
};
