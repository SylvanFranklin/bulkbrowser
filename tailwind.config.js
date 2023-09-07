/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
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
