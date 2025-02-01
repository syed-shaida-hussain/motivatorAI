/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors : {
        backgroundColor : "rgba(var(--background-color))",
        textColor : "rgba(var(--text-color))",
        inputBg : "rgba(var(--input-bg))"
      }
    },
  },
  plugins: [],
  darkMode : "class"
};
