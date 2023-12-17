/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      animation: {
        spinner: "rotate(47deg) 1s ease-in-out",
      },
      colors: {
        bin: "#2a9d8f",
        organic: "#f4a261",
        "gluten-free": "#e9c46a",
        bg: "#1D3557",
        text: "#F1FAEE",
      },
    },
  },
  plugins: [],
};
